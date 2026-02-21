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

def strip_markdown_fences(text):
    """Remove markdown code fences (```json ... ``` etc.) from Gemini responses."""
    stripped = re.sub(r'^```[\w]*\n?', '', text.strip())
    stripped = re.sub(r'\n?```$', '', stripped.strip())
    return stripped.strip()

def generate_blog_image(keyword, title):
    """Generate a blog hero image using Gemini image model."""
    print(f"Generating image for: {title} (Gemini {IMAGE_MODEL})")
    try:
        img_prompt = (
            f"Create a stylish, high-quality fashion blog hero image for '{keyword}'. "
            f"Title: '{title}'. Modern, clean aesthetic. No text overlay. "
            f"Photorealistic fashion photography style, soft lighting, 16:9 aspect ratio."
        )
        response = gemini_client.models.generate_content(
            model=IMAGE_MODEL,
            contents=img_prompt,
        )
        # Save image if binary data returned
        if response.candidates and response.candidates[0].content.parts:
            for part in response.candidates[0].content.parts:
                if hasattr(part, 'inline_data') and part.inline_data:
                    img_dir = os.path.join(WEB_ROOT, "public", "images", "generated")
                    os.makedirs(img_dir, exist_ok=True)
                    slug = re.sub(r'[^a-z0-9]+', '-', keyword.lower()).strip('-')
                    img_filename = f"{datetime.now().strftime('%Y%m%d')}_{slug}.png"
                    img_path = os.path.join(img_dir, img_filename)
                    with open(img_path, "wb") as f:
                        f.write(part.inline_data.data)
                    print(f"Image saved: {img_path}")
                    return f"/images/generated/{img_filename}"
        print("No image data in response, using fallback")
    except Exception as e:
        print(f"Image generation failed: {e}")
    return "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop"


def generate_targeted_blog(keyword):
    """Generates blog post and Pinterest content via Gemini (Vertex AI)."""
    print(f"\nGenerating blog content for: {keyword} (Gemini)")

    blog_prompt = f"""
    Target Audience: US Gen Z and Millennial women (TikTok/Instagram users).
    Aesthetic/Trend: {keyword}

    Task:
    1. Create a high-quality blog post in HTML format.
       - Tone: Personal, friendly, and expert stylist.
       - Voice: Use Gen Z/Millennial slang naturally.
       - SEO: Naturally weave in keywords like "outfit ideas," "style guide," "how to wear," and "{keyword}."
       - Content:
         - A catchy intro about why this trend is viral on TikTok/IG.
         - 3-4 specific styling tips in short, skimmable paragraphs.
         - A "Shop the Essentials" section recommending generic Amazon-style items.
       - Style: 'StyleMeDaily' (minimalist, elegant, high-fashion). Use clean HTML with inline CSS.
       - Be CONCISE.

    Return ONLY a valid JSON object (no markdown fences):
    {{
        "blog_html": "...",
        "blog_title": "...",
        "meta": {{
            "category": "...",
            "description": "...",
            "emoji": "...",
            "tag": "..."
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
    image: '{data.get("image_url", "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop")}',
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
