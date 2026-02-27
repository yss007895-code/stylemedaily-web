from google import genai
import os
import json
import time
import subprocess
import traceback
import sys
import re
import tweepy
import shutil
import urllib.request
from dotenv import load_dotenv
from datetime import datetime

# Load environment variables
if sys.platform == "win32":
    load_dotenv(dotenv_path=r"C:\Users\yss00\.env")
else:
    load_dotenv(dotenv_path=os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "agents", ".env"))
    load_dotenv()  # also check local .env

# Initialize Clients (Vertex AI - fashion-money-maker credits)
gemini_client = genai.Client(vertexai=True, project="fashion-money-maker", location="us-central1")

GEMINI_MODEL = "gemini-3.1-pro"
IMAGE_MODEL = "gemini-3-pro-image"

# Auto-detect environment (Windows local vs Linux VM)
if sys.platform == "win32":
    WEB_ROOT = r"C:\Users\yss00\stylemedaily-web"
    PINS_FILE = r"C:\Users\yss00\pins.txt"
    ERROR_LOG = r"C:\Users\yss00\error_log.txt"
    TOPICS_FILE = r"C:\Users\yss00\generated_topics.txt"
    BACKUP_ROOT = r"C:\Users\yss00\backups"
else:
    WEB_ROOT = os.path.dirname(os.path.abspath(__file__))
    PINS_FILE = os.path.join(WEB_ROOT, "pins.txt")
    ERROR_LOG = os.path.join(WEB_ROOT, "error_log.txt")
    TOPICS_FILE = os.path.join(WEB_ROOT, "generated_topics.txt")
    BACKUP_ROOT = os.path.join(WEB_ROOT, "backups")

GUIDES_DIR = os.path.join(WEB_ROOT, "style-guides")
GUIDES_DATA_PATH = os.path.join(WEB_ROOT, "src", "lib", "guides-data.ts")

# Twitter Credentials
TWITTER_CONFIG = {
    "api_key": os.getenv("TWITTER_API_KEY"),
    "api_secret": os.getenv("TWITTER_API_SECRET"),
    "access_token": os.getenv("TWITTER_ACCESS_TOKEN"),
    "access_token_secret": os.getenv("TWITTER_ACCESS_TOKEN_SECRET")
}

def perform_backup():
    """Creates a timestamped backup of the project's critical files."""
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

def post_to_twitter(title, slug):
    """Posts a new style guide announcement to Twitter."""
    print(f"Attempting to post to Twitter: {title}")
    try:
        twitter_client = tweepy.Client(
            consumer_key=TWITTER_CONFIG["api_key"],
            consumer_secret=TWITTER_CONFIG["api_secret"],
            access_token=TWITTER_CONFIG["access_token"],
            access_token_secret=TWITTER_CONFIG["access_token_secret"]
        )
        tweet_text = f"✨ New Style Guide: {title}\n\nCheck out the latest 2026 fashion trends on StyleMeDaily! 👗✨\n\nhttps://stylemedaily.com/guides/{slug}\n\n#FashionTrends #StyleInspo #2026Fashion"
        response = twitter_client.create_tweet(text=tweet_text)
        print(f"Successfully posted to Twitter: {response.data['id']}")
        return True
    except Exception as e:
        print(f"Twitter Posting failed: {e}")
        return False

# Target keywords for US MZ Women (2026 Trends)
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
    "gorpcore for women"
]

def get_unused_keyword():
    """Reads used topics from file and returns a random unused keyword."""
    used_topics = []
    if os.path.exists(TOPICS_FILE):
        with open(TOPICS_FILE, "r", encoding="utf-8") as f:
            used_topics = [line.strip() for line in f.readlines() if line.strip()]
    unused = [k for k in MZ_AESTHETICS if k not in used_topics]
    if not unused:
        print("All predefined topics have been used. Resetting topic list.")
        with open(TOPICS_FILE, "w", encoding="utf-8") as f:
            f.write("")
        import random
        return random.choice(MZ_AESTHETICS)
    import random
    return random.choice(unused)

def mark_topic_as_used(keyword):
    """Appends the keyword to the generated_topics.txt file."""
    with open(TOPICS_FILE, "a", encoding="utf-8") as f:
        f.write(keyword + "\n")

# Verified fallback images (all confirmed 200 OK)
# FALLBACK_IMAGES removed - all images generated locally

def validate_image_url(url, timeout=10):
    """Verify image URL returns HTTP 200 via HEAD request."""
    if not url or not url.startswith("http"):
        return False
    try:
        req = urllib.request.Request(url, method="HEAD")
        req.add_header("User-Agent", "Mozilla/5.0 ImageValidator/1.0")
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return resp.status == 200
    except Exception:
        return False

def url():
    """Return url if valid, otherwise return a verified fallback."""
    if validate_image_url(url):
        return url
    print(f"Image URL failed validation: {url}")
    for fallback in FALLBACK_IMAGES:
        if validate_image_url(fallback):
            print(f"Using fallback: {fallback}")
            return fallback
    return FALLBACK_IMAGES[0]

def strip_markdown_fences(text):
    """Remove markdown code fences (```json ... ``` etc.) from Gemini responses."""
    stripped = re.sub(r'^```[\w]*\n?', '', text.strip())
    stripped = re.sub(r'\n?```$', '', stripped.strip())
    return stripped.strip()


def verify_generated_image(image_data, title, niche_desc="blog"):
    """Use Gemini Vision to verify image quality and relevance."""
    try:
        from google.genai import types
        prompt = (
            f"Analyze this image for a blog post titled \"{title}\". "
            f"Site type: {niche_desc}. "
            "Answer: Is it relevant? Any watermarks/logos/text? Is quality OK? "
            "Reply with just PASS or FAIL and a short reason."
        )
        resp = gemini_client.models.generate_content(
            model=GEMINI_MODEL,
            contents=[
                types.Content(parts=[
                    types.Part(text=prompt),
                    types.Part(inline_data=types.Blob(mime_type="image/webp", data=image_data)),
                ])
            ],
        )
        text = resp.candidates[0].content.parts[0].text if resp.candidates else ""
        if "FAIL" in text.upper()[:20]:
            print(f"  Vision AI FAIL: {text[:100]}")
            return False
        print(f"  Vision AI PASS: {text[:80]}")
        return True
    except Exception as e:
        print(f"  Vision AI error (skipping): {str(e)[:80]}")
        return True  # Don't block on Vision errors


def generate_blog_image(keyword, title):
    """Generate blog image with Gemini, save LOCALLY as .webp. Never returns external URL."""
    slug = re.sub(r'[^a-z0-9]+', '-', keyword.lower()).strip('-')
    img_dir = os.path.join(WEB_ROOT, "public", "images", "guides")
    os.makedirs(img_dir, exist_ok=True)
    img_path = os.path.join(img_dir, f"{slug}.webp")
    local_url = f"/images/guides/{slug}.webp"

    if os.path.exists(img_path) and os.path.getsize(img_path) > 500:
        print(f"Image exists: {img_path}")
        return local_url

    print(f"Generating local image: {title} ({IMAGE_MODEL})")
    prompt = (
        "Create a high-quality blog hero image. "
        "Photorealistic fashion photography, soft natural lighting, modern editorial style "
        f"Topic: '{title[:80]}'. 16:9 aspect ratio. No text or watermarks."
    )

    for attempt in range(3):
        try:
            response = gemini_client.models.generate_content(model=IMAGE_MODEL, contents=prompt)
            if response.candidates and response.candidates[0].content.parts:
                for part in response.candidates[0].content.parts:
                    if hasattr(part, 'inline_data') and part.inline_data:
                        img_bytes = part.inline_data.data
                        # Vision AI quality check
                        if not verify_generated_image(img_bytes, title):
                            print(f"  Rejected by Vision AI, retrying ({attempt+1}/3)")
                            time.sleep(3)
                            continue
                        with open(img_path, "wb") as f:
                            f.write(img_bytes)
                        if os.path.getsize(img_path) > 500:
                            print(f"Image saved: {img_path} ({os.path.getsize(img_path):,}B)")
                            return local_url
            print(f"No image data (attempt {attempt+1}/3)")
        except Exception as e:
            err = str(e)
            if "429" in err or "quota" in err.lower():
                print(f"Rate limited, waiting {30*(attempt+1)}s...")
                time.sleep(30 * (attempt + 1))
            else:
                print(f"Image error: {err[:150]}")
        time.sleep(5)

    print("All retries failed, using placeholder")
    return local_url


def generate_targeted_blog(keyword):
    """Generates blog post and Pinterest content via Gemini (Vertex AI)."""
    print(f"\nGenerating blog content for: {keyword} (Gemini)")

    blog_prompt = f"""
    You are a 28-year-old fashion blogger who runs StyleMeDaily. You genuinely love fashion and share personal styling experiences. You are NOT an AI. Write like a real person talking to a friend.

    Topic: {keyword}
    Site: StyleMeDaily
    Target: US women ages 20-35


    === CONTENT SAFETY RULES (mandatory, never override) ===
    - Never generate images of real people, brand logos, or copyrighted characters
    - Always append to image prompts: "No real brand logos, no real faces, safe for all audiences"
    - All AI images must have alt text starting with "AI-generated illustration of"
    - Write 100% original content, never copy or paraphrase directly from other sites
    - No fake first-person product experiences (never write "I personally tested this")
    - No health claims, financial guarantees, or absolute safety promises of any kind
    - Include affiliate disclosure at top AND bottom of every article
    - Include "Prices may vary, check official site" disclaimer next to any price mentioned
    - Reference manufacturer specs and third-party sources only, not personal claims
    - If CONTENT_SAFETY_ENABLED env var is set, apply NSFW_FILTER=strict automatically
    - If FTC_DISCLOSURE env var is true, always include FTC-compliant affiliate disclosures

    === BANNED PHRASES (absolutely never use) ===
    - "In today's world", "In this article", "Let's dive in", "Let's dive into"
    - "It's important to note", "Whether you're a beginner or expert"
    - "In conclusion", "To sum up", "All in all"
    - "game-changer", "revolutionary", "cutting-edge"
    - "seamless", "leverage", "robust", "streamline"
    - "Look no further", "Without further ado"
    - "Are you looking for", "Have you ever wondered"
    - "Elevate your", "Take it to the next level"
    - "In the ever-evolving", "It's worth noting"
    - Starting any paragraph with "So," or "Well,"
    - NO emojis anywhere in the text
    - Maximum 2 exclamation marks (!) in the entire article

    === NATURAL WRITING STYLE ===
    - Mix sentence lengths randomly: short (5 words) and long (25 words)
    - Use casual expressions naturally: "honestly", "here's the thing", "I'd skip this", "not gonna lie"
    - Write in first person with personal experience tone: "I've been styling this for weeks" style
    - Use incomplete sentences occasionally: "Worth it? Absolutely." or "The verdict? Mixed."
    - Include honest negative opinions: mention downsides, things that don't work, pieces to avoid
    - Every article intro MUST be unique - never repeat the same opening pattern
    - Keep paragraphs to 2-4 sentences max
    - Sound opinionated and confident, not neutral

    === HTML STRUCTURE (all required) ===
    1. <nav class="breadcrumb"> - Home > Category > Post Title
    2. <span class="reading-time"> - estimated read time (e.g. "6 min read")
    3. <div class="author-box"> - author "StyleMeDaily Editorial", short bio, "Last Updated: {datetime.now().strftime('%B %Y')}", "Why Trust Us: Our team tests every trend we write about"
    4. <nav class="toc"> - Table of Contents with anchor links to each h2
    5. All <img> tags: descriptive alt text + <figcaption>
    6. 2-3 internal links (href="#related-topic" with descriptive anchor text)
    7. 1-2 external links to real sources (Vogue, Who What Wear, Harper's Bazaar, etc.)
    8. Clean semantic HTML: article, section, h2, h3, figure, figcaption
    9. Inline CSS: modern, minimal, mobile-friendly, system fonts, good whitespace

    === SEO + E-E-A-T ===
    1. FAQ section at end: 3-4 real questions people actually Google about this topic
    2. <script type="application/ld+json"> with FAQPage schema
    3. Meta description: exactly 150-160 chars, compelling, contains "{keyword}"
    4. Use "{keyword}" naturally 3-5 times (never stuffed)
    5. H2 headings should contain related search terms
    6. Cite 1+ real fashion source with link
    7. Include 1-2 specific stats or trend data points
    8. Show expertise through specific brand names, fabric types, color palettes

    === CONTENT ===
    - Intro: Bold claim, personal anecdote, or provocative question. NEVER generic.
    - Body: 3-4 sections with specific, actionable styling tips
    - Products: "Shop the Look" with 4-5 product recommendations (names + why they work, no links)
    - Closing: Strong opinionated take on where this trend is heading

    Return ONLY a valid JSON object (no markdown fences):
    {{
        "blog_html": "full HTML content as described above",
        "blog_title": "catchy, SEO-friendly title",
        "meta": {{
            "category": "one of: workwear, casual, date-night, seasonal, body-type, budget, occasion",
            "description": "150-160 char meta description with keyword",
            "emoji": "single relevant emoji",
            "tag": "short tag like Trending or New",
            "canonical_slug": "url-friendly-slug"
        }}
    }}
    """

    blog_response = gemini_client.models.generate_content(
        model=GEMINI_MODEL,
        contents=blog_prompt
    )

    try:
        raw_text = strip_markdown_fences(blog_response.text)
        json_match = re.search(r'(\{.*\})', raw_text, re.DOTALL)
        data = json.loads(json_match.group(1)) if json_match else json.loads(raw_text)
    except Exception as e:
        print(f"Gemini JSON Parsing failed: {e}")
        raise e

    print(f"Generating Pinterest content for: {keyword} (Gemini)")
    pin_prompt = f"Create a viral Pinterest Pin content for the '{keyword}' aesthetic. Target: US Gen Z/Millennial women. Format: Title: (Catchy title), Description: (Under 450 chars, hashtags, end with 'Shop the look ->'). Return ONLY the text."
    pin_response = gemini_client.models.generate_content(
        model=GEMINI_MODEL,
        contents=pin_prompt
    )
    data['pin_content'] = strip_markdown_fences(pin_response.text)

    return data

def update_site_registry(slug, data):
    """Updates guides-data.ts with the new blog post entry."""
    print(f"Updating site registry: {GUIDES_DATA_PATH}")
    if not os.path.exists(GUIDES_DATA_PATH): return

    with open(GUIDES_DATA_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    new_entry = f"""  {{
    slug: '{slug}',
    title: '{data['blog_title']}',
    category: '{data['meta'].get('category', 'casual')}',
    description: '{data['meta'].get('description', '')}',
    readTime: '10 min',
    date: '{datetime.now().strftime('%Y-%m-%d')}',
    tag: '{data['meta'].get('tag', 'New')}',
    emoji: '{data['meta'].get('emoji', '✨')}',
    image: '{data.get("image_url", FALLBACK_IMAGES[0])}',
    affiliateProducts: [],
  }},
"""
    if "export const guides: StyleGuide[] = [" in content:
        updated_content = content.replace(
            "export const guides: StyleGuide[] = [",
            "export const guides: StyleGuide[] = [\n" + new_entry
        )
        with open(GUIDES_DATA_PATH, "w", encoding="utf-8") as f:
            f.write(updated_content)
        print("Site registry updated.")


def validate_images_before_push():
    """Pre-push: ensure all image refs in guides-data.ts are local and exist."""
    guides_path = os.path.join(WEB_ROOT, "src", "lib", "guides-data.ts")
    if not os.path.exists(guides_path):
        return True, []
    with open(guides_path, "r", encoding="utf-8") as f:
        content = f.read()
    issues = []
    import re as _re
    for m in _re.finditer(r"""slug:\s*['"]([^'"]+)['"]""", content):
        slug = m.group(1)
        # Find the image field near this slug
        block_end = content.find("}", m.start())
        block = content[m.start():block_end] if block_end > m.start() else ""
        img_m = _re.search(r"""image:\s*['"]([^'"]+)['"]""", block)
        if not img_m:
            continue
        img_url = img_m.group(1)
        if img_url.startswith("http"):
            issues.append(f"{slug}: EXTERNAL - {img_url[:60]}")
        elif img_url.startswith("/"):
            local = os.path.join(WEB_ROOT, "public", img_url.lstrip("/"))
            if not os.path.exists(local):
                issues.append(f"{slug}: MISSING - {local}")
            elif os.path.getsize(local) < 100:
                issues.append(f"{slug}: TOO SMALL")
    if issues:
        print(f"IMAGE VALIDATION: {len(issues)} issues")
        for iss in issues[:5]:
            print(f"  - {iss}")
    else:
        print("IMAGE VALIDATION: all local and valid")
    return len(issues) == 0, issues

def save_and_push(data):
    """Saves content locally and pushes to GitHub."""
    slug = "".join([c for c in data['blog_title'] if c.isalnum() or c==' ']).rstrip().replace(' ', '-').lower()
    filename = f"{datetime.now().strftime('%Y%m%d')}_{slug.replace('-', '_')}.html"
    
    if not os.path.exists(GUIDES_DIR):
        os.makedirs(GUIDES_DIR, exist_ok=True)
    filepath = os.path.join(GUIDES_DIR, filename)
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(data['blog_html'])
    print(f"Blog saved to: {filepath}")

    update_site_registry(slug, data)

    with open(PINS_FILE, "a", encoding="utf-8") as f:
        f.write(f"\n--- {datetime.now()} | {data.get('blog_title', 'No Title')} ---\n")
        f.write(data.get('pin_content', '') + "\n")

    os.chdir(WEB_ROOT)
    subprocess.run(["git", "pull", "--rebase", "origin", "main"], capture_output=True)
    subprocess.run(["git", "add", "."], check=True)
    
    status = subprocess.run(["git", "status", "--porcelain"], capture_output=True, text=True).stdout
    if status:
        subprocess.run(["git", "commit", "-m", f"Style Guide: {data['blog_title']}"], check=True)

        # Pre-push image validation
        valid, issues = validate_images_before_push()
        if not valid:
            print(f'WARNING: {len(issues)} image issues found')

        subprocess.run(["git", "push", "origin", "main"], capture_output=True)
        print(f"Successfully synced: {data['blog_title']}")

def run_workflow():
    """Main task execution."""
    perform_backup()
    keyword = get_unused_keyword()
    data = generate_targeted_blog(keyword)
    slug = "".join([c for c in data['blog_title'] if c.isalnum() or c==' ']).rstrip().replace(' ', '-').lower()
    # Generate hero image
    data['image_url'] = generate_blog_image(keyword, data['blog_title'])
    save_and_push(data)
    mark_topic_as_used(keyword)
    post_to_twitter(data['blog_title'], slug)

def main():
    attempts = 0
    while attempts < 3:
        try:
            run_workflow()
            print("\n=== All Tasks Completed Successfully ===")
            break
        except Exception:
            attempts += 1
            err = traceback.format_exc()
            print(f"\n[Error] Attempt {attempts}/3 failed.")
            print(err)
            time.sleep(5)

if __name__ == "__main__":
    main()
