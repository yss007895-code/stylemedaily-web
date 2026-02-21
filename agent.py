import anthropic
from google import genai
import os
HOME = os.path.expanduser("~")
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
load_dotenv(dotenv_path=os.path.join(HOME, ".env"))

# Configuration
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Initialize Clients
anthropic_client = anthropic.AnthropicVertex(region="us-east5", project_id="fashion-money-maker")
gemini_client = genai.Client(api_key=GEMINI_API_KEY)

CLAUDE_MODEL = "claude-opus-4-6@20251101"
GEMINI_MODEL = "gemini-3.1-pro"
WEB_ROOT = os.path.join(HOME, "stylemedaily-web")
GUIDES_DIR = os.path.join(WEB_ROOT, "style-guides")
GUIDES_DATA_PATH = os.path.join(WEB_ROOT, r"src\lib\guides-data.ts")
PINS_FILE = os.path.join(HOME, "pins.txt")
ERROR_LOG = os.path.join(HOME, "error_log.txt")
TOPICS_FILE = os.path.join(HOME, "generated_topics.txt")
BACKUP_ROOT = os.path.join(HOME, "backups")

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
            os.path.join(HOME, "agent.py"),
            os.path.join(HOME, ".env"),
            os.path.join(HOME, "generated_topics.txt"),
            os.path.join(HOME, "pins.txt"),
            os.path.join(HOME, "run_agent.bat"),
            GUIDES_DATA_PATH
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

def generate_blog_image(keyword):
    """Generate fashion image using Gemini Nano Banana"""
    try:
        from google import genai
        from google.genai import types
        import base64
        client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))
        response = client.models.generate_content(
            model="gemini-2.0-flash-exp-image-generation",
            contents=f"Generate a stylish fashion photo for: {keyword}. Modern, aesthetic, Instagram-worthy style.",
            config=types.GenerateContentConfig(response_modalities=["IMAGE", "TEXT"])
        )
        for part in response.candidates[0].content.parts:
            if part.inline_data:
                img_data = base64.b64encode(part.inline_data.data).decode()
                print(f"Nano Banana image generated for: {keyword}")
                return f"data:image/png;base64,{img_data}"
    except Exception as e:
        print(f"Nano Banana failed: {e}")
    return None
def get_trending_keywords():
    try:
        from pytrends.request import TrendReq
        pytrends = TrendReq(hl="en-US", tz=360)
        pytrends.build_payload(["fashion trend 2026"], timeframe="now 7-d", geo="US")
        related = pytrends.related_queries()
        top = related["fashion trend 2026"]["top"]
        if top is not None:
            keywords = top["query"].tolist()[:5]
            print(f"Trending keywords found: {keywords}")
            return keywords
    except Exception as e:
        print(f"Trends fetch failed: {e}")
    return []
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
    trending = get_trending_keywords()
    all_keywords = MZ_AESTHETICS + trending
    unused = [k for k in all_keywords if k not in used_topics]
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

def generate_targeted_blog(keyword):
    """Generates blog post via Claude and Pinterest content via Gemini."""
    print(f"\nGenerating blog content for: {keyword} (Claude)")
    
    claude_prompt = f"""
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

    Return ONLY a valid JSON object:
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
    
    claude_response = anthropic_client.messages.create(
        model=CLAUDE_MODEL,
        max_tokens=4000,
        messages=[{"role": "user", "content": claude_prompt}]
    )
    
    try:
        raw_text = claude_response.content[0].text
        json_match = re.search(r'(\{.*\})', raw_text, re.DOTALL)
        data = json.loads(json_match.group(1)) if json_match else json.loads(raw_text)
    except Exception as e:
        print(f"Claude JSON Parsing failed: {e}")
        raise e

    print(f"Generating Pinterest content for: {keyword} (Gemini)")
    gemini_prompt = f"Create a viral Pinterest Pin content for the '{keyword}' aesthetic. Target: US Gen Z/Millennial women. Format: Title: (Catchy title), Description: (Under 450 chars, hashtags, end with 'Shop the look →'). Return ONLY the text."
    claude_pin_response = anthropic_client.messages.create(
        model=CLAUDE_MODEL,
        max_tokens=1000, messages=[{"role": "user", "content": gemini_prompt}]
    )
    data['pin_content'] = claude_pin_response.content[0].text
    
    return data


def update_feed_xml(data, slug):
    """Updates feed.xml with new blog post for Pinterest auto-publish."""
    import xml.etree.ElementTree as ET
    feed_path = os.path.join(WEB_ROOT, "public", "feed.xml")
    
    try:
        tree = ET.parse(feed_path)
        channel = tree.find("channel")
    except:
        root = ET.fromstring("""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>StyleMeDaily</title>
<link>https://yss007895-code.github.io/stylemedaily-web/</link>
<description>Personal Style Guides for Every Woman</description>
</channel></rss>""")
        tree = ET.ElementTree(root)
        channel = root.find("channel")
    
    blog_url = f"https://yss007895-code.github.io/stylemedaily-web/style-guides/{slug}.html"
    
    for item in channel.findall("item"):
        if item.find("link") is not None and item.find("link").text == blog_url:
            return
    
    new_item = ET.SubElement(channel, "item")
    ET.SubElement(new_item, "title").text = data.get("blog_title", "Style Guide")
    ET.SubElement(new_item, "link").text = blog_url
    ET.SubElement(new_item, "description").text = data.get("meta_description", "Fashion style guide")
    
    img = data.get("nano_banana_image") or "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg"
    enclosure = ET.SubElement(new_item, "enclosure")
    enclosure.set("url", img)
    enclosure.set("type", "image/jpeg")
    
    ET.indent(tree, space="  ")
    tree.write(feed_path, encoding="unicode", xml_declaration=True)
    print(f"Feed updated: {data.get('blog_title')}")



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
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop',
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
    
    nb_image = generate_blog_image(data.get("keyword", "fashion"))
    if nb_image:
        nb_html = '<img src="' + nb_image + '" alt="AI generated fashion" style="width:100%;max-width:700px;border-radius:12px;margin:20px 0;">'
        data["blog_html"] = data["blog_html"].replace("</body>", nb_html + "</body>")

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(data["blog_html"])
    print(f"Blog saved to: {filepath}")

    update_site_registry(slug, data)

    with open(PINS_FILE, "a", encoding="utf-8") as f:
        f.write(f"\n--- {datetime.now()} | {data.get('blog_title', 'No Title')} ---\n")
        f.write(data.get('pin_content', '') + "\n")

    os.chdir(WEB_ROOT)
    subprocess.run(["git", "pull", "--rebase", "origin", "main"], capture_output=True)
    update_feed_xml(data, slug)
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
