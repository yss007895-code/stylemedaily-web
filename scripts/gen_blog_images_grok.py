"""Generate 11 blog hero images using Grok Imagine Pro (xAI API)."""
import os, sys, time, io

# Force UTF-8
if sys.stdout.encoding != 'utf-8':
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer, 'replace')

try:
    import requests
except ImportError:
    print("Installing requests...")
    os.system(f"{sys.executable} -m pip install requests -q")
    import requests

try:
    from PIL import Image
except ImportError:
    print("Installing Pillow...")
    os.system(f"{sys.executable} -m pip install Pillow -q")
    from PIL import Image

# Load env
from dotenv import load_dotenv
load_dotenv(os.path.expanduser("~/.env"))

XAI_API_KEY = os.environ.get("XAI_API_KEY", "")
if not XAI_API_KEY:
    print("ERROR: XAI_API_KEY not set")
    sys.exit(1)

OUTPUT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "images", "blog")
os.makedirs(OUTPUT_DIR, exist_ok=True)

IMAGES = [
    {
        "filename": "quiet-luxury-essentials-2026.webp",
        "prompt": "Editorial fashion photography, elegant woman in cream cashmere coat and tailored ivory trousers walking through modern marble lobby, minimal gold jewelry, leather loafers, soft natural lighting, Vogue editorial style, muted neutral tones, understated elegance, medium format film look"
    },
    {
        "filename": "mob-wife-glamour-aesthetic.webp",
        "prompt": "Fashion editorial photo, confident woman in oversized black blazer with leopard print silk scarf, chunky gold chain necklace, pointed stiletto heels, dark glamorous sunglasses, dramatic studio lighting, rich textures, bold powerful aesthetic, Italian luxury"
    },
    {
        "filename": "wide-leg-jeans-styling-2026.webp",
        "prompt": "Street style fashion photography, stylish woman in fitted white top tucked into high-waisted wide leg jeans with leather belt, ballet flats, holding coffee cup, urban background, golden hour lighting, effortlessly chic, casual elegance"
    },
    {
        "filename": "soft-girl-aesthetic-2026.webp",
        "prompt": "Dreamy fashion editorial, young woman in baby pink cardigan over white lace blouse, bow detail pleated skirt, Mary Jane shoes, soft pastel color palette, romantic floral background, ethereal lighting, feminine and delicate, whimsical aesthetic"
    },
    {
        "filename": "indie-sleaze-revival-2026.webp",
        "prompt": "Gritty fashion editorial photo, edgy woman in distressed leather jacket over graphic band tee, low-rise jeans, chunky platform boots, messy hair, urban nightlife setting, flash photography aesthetic, raw rebellious energy, indie rock vibes"
    },
    {
        "filename": "tomato-girl-summer-2026.webp",
        "prompt": "Mediterranean summer fashion editorial, beautiful woman in vibrant tomato red linen dress, straw tote bag, gold hoop earrings, espadrille sandals, terracotta village backdrop, warm golden sunlight, Italian riviera summer aesthetic, joyful and effortless"
    },
    {
        "filename": "old-money-working-women-2026.webp",
        "prompt": "Corporate fashion editorial, professional woman in navy structured blazer, cream silk blouse, pearl stud earrings, structured leather tote bag, modern office with floor-to-ceiling windows, clean polished look, understated wealth, professional elegance"
    },
    {
        "filename": "napoleon-jacket-trend-2026.webp",
        "prompt": "High fashion editorial, striking woman wearing military-inspired napoleon jacket with gold buttons and structured shoulders, wide leg tailored trousers, pointed toe heels, dramatic side lighting, powerful commanding silhouette, fashion photography"
    },
    {
        "filename": "minimalist-capsule-spring-2026.webp",
        "prompt": "Clean minimalist fashion editorial, woman in white organic cotton t-shirt and black tailored trousers, classic trench coat draped over shoulders, ballet flats, neutral studio background, soft diffused lighting, capsule wardrobe concept, less is more"
    },
    {
        "filename": "balletcore-office-siren-2026.webp",
        "prompt": "Fashion editorial combining balletcore with corporate style, graceful woman in pale pink wrap top, black pencil skirt, nude ballet flats, hair in sleek low bun, modern glass office setting, soft pink and neutral tones, graceful yet powerful"
    },
    {
        "filename": "coastal-cowgirl-aesthetic-2026.webp",
        "prompt": "Fashion editorial, woman in white oversized linen shirt, straight leg jeans, tan suede cowboy boots, wide-brim straw hat, coastal desert landscape at sunset, warm golden light, bohemian western meets coastal grandmother, free-spirited elegance"
    },
]

API_URL = "https://api.x.ai/v1/images/generations"
HEADERS = {
    "Authorization": f"Bearer {XAI_API_KEY}",
    "Content-Type": "application/json",
}

def generate_image(prompt, filename):
    filepath = os.path.join(OUTPUT_DIR, filename)
    if os.path.exists(filepath) and os.path.getsize(filepath) > 5000:
        print(f"  SKIP (exists): {filename}")
        return True

    payload = {
        "model": "grok-imagine-image-pro",
        "prompt": prompt,
        "n": 1,
        "response_format": "url",
    }

    try:
        resp = requests.post(API_URL, headers=HEADERS, json=payload, timeout=120)
        if resp.status_code != 200:
            print(f"  API ERROR {resp.status_code}: {resp.text[:300]}")
            return False

        data = resp.json()
        img_url = data["data"][0]["url"]

        # Download image
        img_resp = requests.get(img_url, timeout=60)
        if img_resp.status_code != 200:
            print(f"  DOWNLOAD ERROR: {img_resp.status_code}")
            return False

        # Convert to WebP using Pillow
        img = Image.open(io.BytesIO(img_resp.content))
        img.save(filepath, "WEBP", quality=85)
        size_kb = os.path.getsize(filepath) / 1024
        print(f"  OK: {filename} ({size_kb:.0f} KB)")
        return True

    except Exception as e:
        print(f"  ERROR: {e}")
        return False

def main():
    print("=== Grok Imagine Pro Blog Image Generation ===")
    print(f"API Key: {XAI_API_KEY[:15]}...")
    print(f"Output: {OUTPUT_DIR}")
    print()

    success = 0
    fail = 0
    for i, img in enumerate(IMAGES):
        print(f"[{i+1}/11] Generating: {img['filename']}")
        if generate_image(img["prompt"], img["filename"]):
            success += 1
        else:
            fail += 1
        # Rate limit spacing
        if i < len(IMAGES) - 1:
            time.sleep(2)

    print(f"\n=== DONE: {success} success, {fail} failed ===")

if __name__ == "__main__":
    main()
