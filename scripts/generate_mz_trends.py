#!/usr/bin/env python3
import json
import re
import subprocess
import sys
import os
import concurrent.futures
from datetime import datetime
from pathlib import Path
from google import genai
from google.genai import types

# ── Paths ──────────────────────────────────────────────────────────────────
ROOT = Path(__file__).parent.parent
GUIDES_DATA = ROOT / "src" / "lib" / "guides-data.ts"
GUIDES_CONTENT = ROOT / "src" / "lib" / "guides-content-new.ts"
IMAGES_DIR = ROOT / "public" / "images" / "guides"
IMAGES_DIR.mkdir(parents=True, exist_ok=True)

# US MZ Women Trends
MZ_TRENDS = [
    "Y2K Fashion Revival",
    "Quiet Luxury Essentials",
    "Balletcore Style Guide",
    "Gorpcore for Women",
    "Coquette Aesthetic 2026",
    "Mob Wife Glamour",
    "Old Money Summer",
    "Clean Girl Aesthetic",
    "Eclectic Grandpa Chic",
    "Office Siren Corporate Wear",
]

AMZN_URLS = [
    "https://amzn.to/example1",
    "https://amzn.to/example2",
]

def escape_ts(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")

def reset_guides_data():
    """Reset the guides array to empty."""
    print("🧹 Resetting guides-data.ts to remove old SVG guides...")
    content = GUIDES_DATA.read_text(encoding="utf-8")
    
    # regex to match export const guides: StyleGuide[] = [ ... ];
    new_content = re.sub(
        r"export const guides: StyleGuide\[\] = \[.*?\];",
        "export const guides: StyleGuide[] = [];",
        content,
        flags=re.DOTALL
    )
    GUIDES_DATA.write_text(new_content, encoding="utf-8")

    content2 = "export const newGuidesContent: Record<string, { heading: string; paragraphs: string[] }[]> = {};"
    GUIDES_CONTENT.write_text(content2, encoding="utf-8")

def generate_imagen_image(gemini_client, prompt: str, slug: str, suffix: str, aspect_ratio: str = "16:9") -> str:
    print(f"🎨 Generating Imagen 4.0 Ultra image for: {prompt[:50]}...")
    model_name = "imagen-4.0-ultra-generate-001"
    
    try:
        response = gemini_client.models.generate_images(
            model=model_name,
            prompt=prompt,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                output_mime_type="image/jpeg",
                aspect_ratio=aspect_ratio,
            )
        )
        
        if response.generated_images:
            image_data = response.generated_images[0].image.image_bytes
            filename = f"{slug}-{suffix}.jpg"
            filepath = IMAGES_DIR / filename
            with open(filepath, "wb") as f:
                f.write(image_data)
            return f"/images/guides/{filename}"
    except Exception as e:
        print(f"❌ Error generating image: {e}")
    
    return "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"

def generate_guide_json(client, topic: str) -> dict:
    prompt = f"""You are an elite fashion content strategist for StyleMeDaily. Your goal is to drive massive organic traffic and maximize Amazon Affiliate conversions.

Generate ONE new SEO-optimized fashion guide for the specific US MZ Trend: '{topic}'.
Return ONLY valid JSON, no other text.

Use this EXACT JSON structure:
{{
  "slug": "unique-kebab-case-slug-2026",
  "title": "High-Click-Through SEO Title for {topic}",
  "category": "casual",
  "description": "SEO meta description under 155 characters designed to get clicks.",
  "readTime": "12 min",
  "date": "{datetime.now().strftime('%Y-%m-%d')}",
  "tag": "Guide",
  "emoji": "👗",
  "hero_image_prompt": "A detailed, photorealistic prompt for an AI image generator (Imagen 4) for the main cover image. Feature a high-fashion editorial look for {topic}. End the prompt with 'Typography text overlay reading StyleMeDaily'.",
  "affiliateProducts": [
    {{
      "name": "Specific Amazon Product Name matching {topic}",
      "price": "$XX",
      "brand": "Amazon",
      "url_index": 0,
      "tag": "Best Overall",
      "product_image_prompt": "A photorealistic product photography shot on a clean white background of [product name], studio lighting, e-commerce style, 4k."
    }}
  ],
  "content": [
    {{
      "heading": "Catchy Section Heading",
      "paragraphs": [
        "Highly engaging, expert fashion advice paragraph... (80+ words)",
        "Another paragraph that builds desire for the recommended styles..."
      ]
    }}
  ]
}}

RULES:
- category must be one of: workwear, casual, date-night, seasonal, body-type, budget, occasion
- Include exactly 4 affiliate products highly relevant to {topic}.
- Include exactly 5 content sections.
- MUST RETURN VALID JSON ONLY."""

    response = client.models.generate_content(
        model="gemini-2.5-pro",
        contents=prompt,
    )

    text = response.text
    json_match = re.search(r"```(?:json)?\s*(\{[\s\S]*?\})\s*```", text)
    if json_match: return json.loads(json_match.group(1))
    json_match = re.search(r"\{[\s\S]*\}", text)
    if json_match: return json.loads(json_match.group())
    raise ValueError(f"No valid JSON in Gemini response: {text[:500]}")

def resolve_urls_and_generate_images(guide: dict, gemini_client) -> dict:
    slug = guide["slug"]
    
    # Generate hero image (16:9)
    hero_prompt = guide.pop("hero_image_prompt", f"High fashion editorial photography for {guide['title']}")
    guide["image"] = generate_imagen_image(gemini_client, hero_prompt, slug, "hero", "16:9")

    # Process products and generate 1:1 thumbnails concurrently
    def process_product(i, p):
        p["url"] = "https://amzn.to/example"
        if not p.get("brand"): p["brand"] = "Amazon"
        prod_prompt = p.pop("product_image_prompt", f"Product photography on white background of {p['name']}")
        p["image"] = generate_imagen_image(gemini_client, prod_prompt, slug, f"prod{i}", "1:1")
        return p

    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        futures = [executor.submit(process_product, i, p) for i, p in enumerate(guide["affiliateProducts"])]
        guide["affiliateProducts"] = [f.result() for f in futures]

    return guide

def format_guide_data_ts(guide: dict) -> str:
    products_ts = ""
    for p in guide["affiliateProducts"]:
        tag_part = f", tag: '{escape_ts(p.get('tag', ''))}'" if p.get("tag") else ""
        image_part = f", image: '{p.get('image', '')}'" if p.get("image") else ""
        products_ts += (
            f"      {{ name: '{escape_ts(p['name'])}', brand: '{escape_ts(p['brand'])}', "
            f"price: '{escape_ts(p['price'])}', url: '{escape_ts(p['url'])}'{tag_part}{image_part} }},\n"
        )
    return f"""  {{
    slug: '{guide['slug']}',
    title: '{escape_ts(guide['title'])}',
    category: '{guide['category']}',
    description: '{escape_ts(guide['description'])}',
    readTime: '{guide['readTime']}',
    date: '{guide['date']}',
    tag: '{guide['tag']}',
    emoji: '{guide['emoji']}',
    image: '{guide['image']}',
    affiliateProducts: [\n{products_ts}    ],
  }},\n"""

def format_guide_content_ts(guide: dict) -> str:
    sections_ts = ""
    for section in guide["content"]:
        paragraphs_ts = ", ".join([f"'{escape_ts(p)}'" for p in section["paragraphs"]])
        sections_ts += f"  {{ heading: '{escape_ts(section['heading'])}', paragraphs: [{paragraphs_ts}] }},\n"
    return f"\n'{guide['slug']}': [\n{sections_ts}],\n"

def insert_guide_into_data_file(guide_ts: str):
    content = GUIDES_DATA.read_text(encoding="utf-8")
    marker = "];\n\nexport function getGuideBySlug"
    updated = content.replace(marker, guide_ts + marker)
    GUIDES_DATA.write_text(updated, encoding="utf-8")

def insert_guide_into_content_file(content_ts: str):
    content = GUIDES_CONTENT.read_text(encoding="utf-8")
    marker = "\n};\n"
    last_idx = content.rfind(marker)
    updated = content[:last_idx] + content_ts + content[last_idx:]
    GUIDES_CONTENT.write_text(updated, encoding="utf-8")

def main():
    print("🤖 StyleMeDaily Content Agent (Mass Gen) starting...")
    gemini_client = genai.Client(vertexai=True, project="fashion-money-maker", location="us-central1")
    
    reset_guides_data()

    for topic in MZ_TRENDS:
        print(f"\n✍️  Generating SEO guide for: {topic}")
        try:
            guide_raw = generate_guide_json(gemini_client, topic)
            guide = resolve_urls_and_generate_images(guide_raw, gemini_client)

            insert_guide_into_data_file(format_guide_data_ts(guide))
            insert_guide_into_content_file(format_guide_content_ts(guide))
            print(f"✅ Finished: {topic}")
        except Exception as e:
            print(f"❌ Failed on {topic}: {e}")

    subprocess.run(["git", "config", "user.email", "agent@stylemedaily.org"], check=True, cwd=ROOT)
    subprocess.run(["git", "config", "user.name", "StyleMeDaily Content Agent"], check=True, cwd=ROOT)
    subprocess.run(["git", "add", "."], check=True, cwd=ROOT)
    subprocess.run(["git", "commit", "-m", "feat: populate site with 10 US MZ trend guides via Imagen 4"], check=True, cwd=ROOT)
    subprocess.run(["git", "pull", "--rebase", "origin", "main"], check=True, cwd=ROOT)
    subprocess.run(["git", "push", "origin", "main"], check=True, cwd=ROOT)
    print("🚀 All premium guides are live!")

if __name__ == "__main__":
    main()