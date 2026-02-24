from google import genai
from google.genai import types
import os
import json
import time
import subprocess
import traceback
import sys
import re
import tweepy
import shutil
import hashlib
import xml.etree.ElementTree as ET
from dotenv import load_dotenv
from datetime import datetime


def _load_env() -> None:
    if sys.platform == "win32":
        load_dotenv(dotenv_path=r"C:\Users\yss00\.env")
    else:
        home = os.path.expanduser("~")
        load_dotenv(dotenv_path=os.path.join(home, ".env"))
        load_dotenv()  # local .env fallback


_load_env()


PROJECT_ID = os.getenv("GEMINI_VERTEX_PROJECT", "fashion-money-maker")
LOCATION = os.getenv("GEMINI_VERTEX_LOCATION", "us-central1")
TEXT_MODEL = os.getenv("STYLE_TEXT_MODEL", "gemini-3.1-pro")
TEXT_MODEL_FALLBACK = os.getenv("STYLE_TEXT_MODEL_FALLBACK", "gemini-2.5-pro")
IMAGE_MODELS = [
    m.strip()
    for m in os.getenv(
        "STYLE_IMAGE_MODELS",
        "imagen-4-ultra-generate-001,imagen-4.0-generate-001,imagen-3.0-generate-001",
    ).split(",")
    if m.strip()
]

gemini_client = genai.Client(vertexai=True, project=PROJECT_ID, location=LOCATION)


if sys.platform == "win32":
    WEB_ROOT = r"C:\Users\yss00\stylemedaily-web"
else:
    WEB_ROOT = os.path.dirname(os.path.abspath(__file__))

GUIDES_DIR = os.path.join(WEB_ROOT, "style-guides")
GUIDES_DATA_PATH = os.path.join(WEB_ROOT, "src", "lib", "guides-data.ts")
GENERATED_IMAGES_DIR = os.path.join(WEB_ROOT, "public", "images", "generated")
FEED_XML_PATH = os.path.join(WEB_ROOT, "public", "feed.xml")
PINS_FILE = os.path.join(WEB_ROOT, "pins.txt")
TOPICS_FILE = os.path.join(WEB_ROOT, "generated_topics.txt")
ERROR_LOG = os.path.join(WEB_ROOT, "error_log.txt")
BACKUP_ROOT = os.path.join(WEB_ROOT, "backups")

SITE_DOMAIN = "https://stylemedaily.org"

TWITTER_CONFIG = {
    "api_key": os.getenv("TWITTER_API_KEY"),
    "api_secret": os.getenv("TWITTER_API_SECRET"),
    "access_token": os.getenv("TWITTER_ACCESS_TOKEN"),
    "access_token_secret": os.getenv("TWITTER_ACCESS_TOKEN_SECRET"),
}


MZ_AESTHETICS = [
    "coquette aesthetic 2026",
    "dark academia fashion",
    "coastal grandmother style",
    "mob wife aesthetic",
    "tech-integrated streetwear",
    "maximalist vintage revival",
    "balletcore essentials",
    "cottagecore spring outfits",
    "clean girl aesthetic 2026",
    "eclectic grandpa style",
    "office siren fashion",
    "indie sleaze revival",
    "soft girl aesthetic",
    "gorpcore for women",
]


def strip_markdown_fences(text: str) -> str:
    stripped = re.sub(r"^```[\w]*\n?", "", (text or "").strip())
    stripped = re.sub(r"\n?```$", "", stripped.strip())
    return stripped.strip()


def parse_json_from_text(text: str) -> dict:
    cleaned = strip_markdown_fences(text)
    try:
        return json.loads(cleaned)
    except Exception:
        pass

    match = re.search(r"(\{.*\})", cleaned, re.DOTALL)
    if not match:
        raise ValueError("No JSON object found in model output")
    return json.loads(match.group(1))


def slugify(value: str) -> str:
    base = "".join([c for c in value if c.isalnum() or c == " "]).strip().lower()
    return re.sub(r"\s+", "-", base)


def safe_ts_string(text: str) -> str:
    return (text or "").replace("\\", "\\\\").replace("'", "\\'")


def perform_backup() -> bool:
    timestamp = datetime.now().strftime("%Y-%m-%d_%H%M%S")
    backup_dir = os.path.join(BACKUP_ROOT, f"backup_{timestamp}")
    print(f"Creating backup in: {backup_dir}")
    try:
        os.makedirs(backup_dir, exist_ok=True)
        files_to_backup = [
            os.path.join(WEB_ROOT, "agent.py"),
            TOPICS_FILE,
            PINS_FILE,
            GUIDES_DATA_PATH,
        ]
        for file_path in files_to_backup:
            if os.path.exists(file_path):
                shutil.copy2(file_path, backup_dir)
        print("Backup completed successfully.")
        return True
    except Exception as e:
        print(f"Backup failed: {e}")
        return False


def post_to_twitter(title: str, slug: str) -> bool:
    print(f"Attempting to post to Twitter: {title}")
    try:
        twitter_client = tweepy.Client(
            consumer_key=TWITTER_CONFIG["api_key"],
            consumer_secret=TWITTER_CONFIG["api_secret"],
            access_token=TWITTER_CONFIG["access_token"],
            access_token_secret=TWITTER_CONFIG["access_token_secret"],
        )
        tweet_text = (
            f"New Style Guide: {title}\n\n"
            f"Read now on StyleMeDaily\n{SITE_DOMAIN}/style-guides/{slug}.html\n\n"
            "#FashionTrends #StyleInspo #StyleMeDaily"
        )
        response = twitter_client.create_tweet(text=tweet_text)
        print(f"Successfully posted to Twitter: {response.data['id']}")
        return True
    except Exception as e:
        print(f"Twitter posting failed: {e}")
        return False


def get_trending_keywords() -> list:
    try:
        from pytrends.request import TrendReq

        pytrends = TrendReq(hl="en-US", tz=360)
        pytrends.build_payload(["fashion trend 2026"], timeframe="now 7-d", geo="US")
        related = pytrends.related_queries()
        top = related.get("fashion trend 2026", {}).get("top")
        if top is not None:
            keywords = top["query"].tolist()[:6]
            print(f"Trending keywords found: {keywords}")
            return keywords
    except Exception as e:
        print(f"Trends fetch failed: {e}")
    return []


def get_unused_keyword() -> str:
    used_topics = []
    if os.path.exists(TOPICS_FILE):
        with open(TOPICS_FILE, "r", encoding="utf-8") as f:
            used_topics = [line.strip() for line in f.readlines() if line.strip()]

    all_keywords = MZ_AESTHETICS + get_trending_keywords()
    unused = [k for k in all_keywords if k not in used_topics]

    if not unused:
        print("All topics used. Resetting topic list.")
        with open(TOPICS_FILE, "w", encoding="utf-8") as f:
            f.write("")
        import random

        return random.choice(MZ_AESTHETICS)

    import random

    return random.choice(unused)


def mark_topic_as_used(keyword: str) -> None:
    with open(TOPICS_FILE, "a", encoding="utf-8") as f:
        f.write(keyword + "\n")


def call_text_model(prompt: str, max_tokens: int = 3600) -> tuple[str, str]:
    for model in [TEXT_MODEL, TEXT_MODEL_FALLBACK]:
        if not model:
            continue
        try:
            resp = gemini_client.models.generate_content(
                model=model,
                contents=prompt,
                config=types.GenerateContentConfig(max_output_tokens=max_tokens),
            )
            if resp.text:
                return resp.text, model
        except Exception as e:
            print(f"Text model failed ({model}): {e}")
    raise RuntimeError("All text model routes failed")


def validate_payload_shape(data: dict) -> None:
    if not isinstance(data, dict):
        raise ValueError("Model output is not a JSON object")
    for key in ["blog_html", "blog_title", "meta"]:
        if key not in data:
            raise ValueError(f"Missing key: {key}")
    if not isinstance(data["meta"], dict):
        raise ValueError("meta must be an object")


def generate_targeted_blog(keyword: str) -> dict:
    print(f"\nGenerating blog content for: {keyword} (Gemini)")

    blog_prompt = f"""
You are the lead editor of StyleMeDaily (stylemedaily.org).
Target audience: US Gen Z and Millennial women.
Topic: {keyword}

Write a high-quality fashion article in HTML:
- Tone: personal, stylish, practical.
- Include a visual "Shop the Essentials" section.
- Product names must look like real Amazon-searchable names.
- Keep product image alt/caption text exactly matched to product names.

Return ONLY a valid JSON object:
{{
  "blog_html": "<full html body content>",
  "blog_title": "SEO title",
  "meta": {{
    "category": "Style Guides",
    "description": "meta description",
    "emoji": "single emoji",
    "tag": "trend tag",
    "canonical_slug": "optional-slug"
  }},
  "affiliate_products": [
    {{"name":"...", "brand":"...", "price":"...", "url":"https://www.amazon.com/...", "tag":"stylemedaily-20", "image":"/images/guides/..."}}
  ]
}}
"""

    raw_blog, used_model = call_text_model(blog_prompt, max_tokens=4200)
    print(f"Blog model used: {used_model}")
    data = parse_json_from_text(raw_blog)
    validate_payload_shape(data)

    pin_prompt = (
        f"Create Pinterest pin copy for '{keyword}' for StyleMeDaily.\n"
        "Format strictly:\n"
        "Title: ...\n"
        "Description: ... (under 450 chars, with hashtags, ending with 'Shop now ->')\n"
        "Return plain text only."
    )
    raw_pin, pin_model = call_text_model(pin_prompt, max_tokens=700)
    print(f"Pinterest model used: {pin_model}")
    data["pin_content"] = strip_markdown_fences(raw_pin)
    data["keyword"] = keyword
    if not isinstance(data.get("affiliate_products"), list):
        data["affiliate_products"] = []
    return data


def deterministic_fallback_image(slug: str) -> str:
    guides_images_dir = os.path.join(WEB_ROOT, "public", "images", "guides")
    candidates = []
    if os.path.isdir(guides_images_dir):
        candidates = [
            name
            for name in os.listdir(guides_images_dir)
            if name.lower().endswith((".jpg", ".jpeg", ".png", ".webp", ".svg"))
        ]
    if not candidates:
        return "/images/placeholder.svg"
    candidates.sort()
    digest = hashlib.md5(slug.encode("utf-8")).hexdigest()
    idx = int(digest[:8], 16) % len(candidates)
    return f"/images/guides/{candidates[idx]}"


def generate_blog_image(keyword: str, title: str, slug: str) -> str:
    os.makedirs(GENERATED_IMAGES_DIR, exist_ok=True)
    image_prompt = (
        f"High-end fashion editorial hero image for '{keyword}'. "
        f"Article title: '{title}'. "
        "Clean luxury look, natural skin texture, premium lighting, no text overlay, "
        "no logos, realistic clothing details, magazine quality."
    )

    for model in IMAGE_MODELS:
        try:
            print(f"Generating hero image with {model}")
            resp = gemini_client.models.generate_images(
                model=model,
                prompt=image_prompt,
                config=types.GenerateImagesConfig(
                    number_of_images=1,
                    output_mime_type="image/jpeg",
                ),
            )
            if resp.generated_images:
                filename = f"{datetime.now().strftime('%Y%m%d')}_{slug}-hero.jpg"
                path = os.path.join(GENERATED_IMAGES_DIR, filename)
                with open(path, "wb") as f:
                    f.write(resp.generated_images[0].image.image_bytes)
                rel = f"/images/generated/{filename}"
                print(f"Hero image saved: {rel}")
                return rel
        except Exception as e:
            print(f"Image model failed ({model}): {e}")

    fallback = deterministic_fallback_image(slug)
    print(f"Using fallback hero image: {fallback}")
    return fallback


def normalize_blog_html(blog_html: str, hero_image_rel: str, title: str) -> str:
    html = blog_html or ""
    alt_text = safe_ts_string(title) or "StyleMeDaily fashion guide"

    # Replace known placeholder patterns.
    html = re.sub(
        r"https://placehold\.co/600x400\?text=Image[^\"'> ]*",
        hero_image_rel,
        html,
        flags=re.IGNORECASE,
    )

    if "<img" not in html:
        hero_block = (
            f"<figure style=\"margin:24px 0;\">"
            f"<img src=\"{hero_image_rel}\" alt=\"{alt_text}\" "
            f"style=\"width:100%;max-width:900px;height:auto;border-radius:12px;display:block;\"/>"
            f"<figcaption style=\"font-size:12px;color:#777;margin-top:8px;\">{alt_text}</figcaption>"
            f"</figure>"
        )
        if "</h1>" in html:
            html = html.replace("</h1>", "</h1>" + hero_block, 1)
        elif "<body" in html:
            body_open = re.search(r"<body[^>]*>", html, flags=re.IGNORECASE)
            if body_open:
                idx = body_open.end()
                html = html[:idx] + hero_block + html[idx:]
        else:
            html = hero_block + html

    return html


def serialize_affiliate_products(products: list) -> str:
    rows = []
    for item in products[:6]:
        if not isinstance(item, dict):
            continue
        name = safe_ts_string(str(item.get("name", "")).strip())
        if not name:
            continue
        brand = safe_ts_string(str(item.get("brand", "Amazon")).strip() or "Amazon")
        price = safe_ts_string(str(item.get("price", "Check latest price")).strip() or "Check latest price")
        url = safe_ts_string(str(item.get("url", "https://www.amazon.com")).strip() or "https://www.amazon.com")
        tag = safe_ts_string(str(item.get("tag", "stylemedaily-20")).strip() or "stylemedaily-20")
        image = safe_ts_string(str(item.get("image", "/images/placeholder.svg")).strip() or "/images/placeholder.svg")

        rows.append(
            "      {\n"
            f"        name: '{name}',\n"
            f"        brand: '{brand}',\n"
            f"        price: '{price}',\n"
            f"        url: '{url}',\n"
            f"        tag: '{tag}',\n"
            f"        image: '{image}',\n"
            "      },"
        )

    if not rows:
        return "[]"
    return "[\n" + "\n".join(rows) + "\n    ]"


def update_feed_xml(data: dict, slug: str, hero_image_rel: str) -> None:
    try:
        if os.path.exists(FEED_XML_PATH):
            tree = ET.parse(FEED_XML_PATH)
            root = tree.getroot()
            channel = root.find("channel")
        else:
            root = ET.fromstring(
                f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>StyleMeDaily</title>
    <link>{SITE_DOMAIN}/</link>
    <description>Personal Style Guides for Every Woman</description>
  </channel>
</rss>"""
            )
            tree = ET.ElementTree(root)
            channel = root.find("channel")

        if channel is None:
            return

        article_url = f"{SITE_DOMAIN}/style-guides/{slug}.html"
        for item in channel.findall("item"):
            link = item.find("link")
            if link is not None and link.text == article_url:
                return

        item = ET.SubElement(channel, "item")
        ET.SubElement(item, "title").text = data.get("blog_title", "Style Guide")
        ET.SubElement(item, "link").text = article_url
        ET.SubElement(item, "description").text = data.get("meta", {}).get("description", "Fashion style guide")

        enclosure = ET.SubElement(item, "enclosure")
        enclosure.set("url", f"{SITE_DOMAIN}{hero_image_rel}")
        enclosure.set("type", "image/jpeg")

        ET.indent(tree, space="  ")
        tree.write(FEED_XML_PATH, encoding="unicode", xml_declaration=True)
        print("Feed updated.")
    except Exception as e:
        print(f"Feed update failed: {e}")


def update_site_registry(slug: str, data: dict, hero_image_rel: str) -> None:
    print(f"Updating site registry: {GUIDES_DATA_PATH}")
    if not os.path.exists(GUIDES_DATA_PATH):
        return

    with open(GUIDES_DATA_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    if f"slug: '{slug}'" in content:
        print("Registry already contains this slug. Skipping insert.")
        return

    meta = data.get("meta", {})
    affiliate_products_ts = serialize_affiliate_products(data.get("affiliate_products", []))

    new_entry = f"""  {{
    slug: '{safe_ts_string(slug)}',
    title: '{safe_ts_string(data.get('blog_title', 'Style Guide'))}',
    category: '{safe_ts_string(meta.get('category', 'Style Guides'))}',
    description: '{safe_ts_string(meta.get('description', ''))}',
    readTime: '10 min',
    date: '{datetime.now().strftime('%Y-%m-%d')}',
    tag: '{safe_ts_string(meta.get('tag', 'New'))}',
    emoji: '{safe_ts_string(meta.get('emoji', '*'))}',
    image: '{safe_ts_string(hero_image_rel)}',
    affiliateProducts: {affiliate_products_ts},
  }},
"""

    marker = "export const guides: StyleGuide[] = ["
    if marker in content:
        updated = content.replace(marker, marker + "\n" + new_entry, 1)
        with open(GUIDES_DATA_PATH, "w", encoding="utf-8") as f:
            f.write(updated)
        print("Site registry updated.")


def save_and_push(data: dict) -> None:
    canonical_slug = data.get("meta", {}).get("canonical_slug", "")
    slug = slugify(canonical_slug) if canonical_slug else slugify(data.get("blog_title", "style-guide"))
    filename = f"{datetime.now().strftime('%Y%m%d')}_{slug.replace('-', '_')}.html"

    os.makedirs(GUIDES_DIR, exist_ok=True)
    filepath = os.path.join(GUIDES_DIR, filename)

    hero_image_rel = generate_blog_image(
        keyword=data.get("keyword", "fashion trend"),
        title=data.get("blog_title", "Style guide"),
        slug=slug,
    )
    html = normalize_blog_html(data.get("blog_html", ""), hero_image_rel, data.get("blog_title", "Style guide"))

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Blog saved to: {filepath}")

    update_site_registry(slug, data, hero_image_rel)
    update_feed_xml(data, slug, hero_image_rel)

    with open(PINS_FILE, "a", encoding="utf-8") as f:
        f.write(f"\n--- {datetime.now()} | {data.get('blog_title', 'No Title')} ---\n")
        f.write(data.get("pin_content", "") + "\n")

    os.chdir(WEB_ROOT)
    subprocess.run(["git", "pull", "--rebase", "origin", "main"], capture_output=True)
    subprocess.run(["git", "add", "."], check=True)

    status = subprocess.run(["git", "status", "--porcelain"], capture_output=True, text=True).stdout
    if status:
        subprocess.run(["git", "commit", "-m", f"Style Guide: {data.get('blog_title', 'New post')}"], check=True)
        subprocess.run(["git", "push", "origin", "main"], capture_output=True)
        print(f"Successfully synced: {data.get('blog_title', 'New post')}")

    post_to_twitter(data.get("blog_title", "New style guide"), slug)


def run_workflow() -> None:
    perform_backup()
    keyword = get_unused_keyword()
    data = generate_targeted_blog(keyword)
    save_and_push(data)
    mark_topic_as_used(keyword)


def main() -> None:
    attempts = 0
    while attempts < 3:
        try:
            run_workflow()
            print("\n=== All tasks completed successfully ===")
            return
        except Exception:
            attempts += 1
            err = traceback.format_exc()
            print(f"\n[Error] Attempt {attempts}/3 failed.")
            print(err)
            try:
                with open(ERROR_LOG, "a", encoding="utf-8") as f:
                    f.write(f"\n[{datetime.now().isoformat()}] Attempt {attempts}/3 failed\n{err}\n")
            except Exception:
                pass
            time.sleep(5)


if __name__ == "__main__":
    main()
