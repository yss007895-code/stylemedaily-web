"""
Generate unique local SVG images for StyleMeDaily fashion site.
Replaces all Unsplash/external image URLs with unique local SVGs.
"""
import os
import hashlib
import re
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PRODUCTS_DIR = os.path.join(BASE_DIR, 'public', 'images', 'products')
GUIDES_DIR = os.path.join(BASE_DIR, 'public', 'images', 'guides')
BLOG_DIR = os.path.join(BASE_DIR, 'public', 'images', 'blog')
CATEGORIES_DIR = os.path.join(BASE_DIR, 'public', 'images', 'categories')

os.makedirs(PRODUCTS_DIR, exist_ok=True)
os.makedirs(GUIDES_DIR, exist_ok=True)
os.makedirs(BLOG_DIR, exist_ok=True)
os.makedirs(CATEGORIES_DIR, exist_ok=True)

# Fashion category color palettes (elegant, feminine)
CATEGORY_COLORS = {
    'trending': ('#BE185D', '#EC4899', '#FCE7F3'),     # rose
    'capsule-wardrobe': ('#7C3AED', '#A78BFA', '#EDE9FE'), # violet
    'seasonal': ('#059669', '#34D399', '#D1FAE5'),       # emerald
    'accessories': ('#D97706', '#FBBF24', '#FEF3C7'),    # amber
    'workwear': ('#1D4ED8', '#60A5FA', '#DBEAFE'),       # blue
    'casual': ('#DC2626', '#F87171', '#FEE2E2'),         # red
    'date-night': ('#7C3AED', '#C084FC', '#F3E8FF'),     # purple
    'athleisure': ('#0891B2', '#22D3EE', '#CFFAFE'),     # cyan
    'budget': ('#D97706', '#FBBF24', '#FEF3C7'),         # amber
    'body-type': ('#BE185D', '#EC4899', '#FCE7F3'),      # rose
    'occasion': ('#7C3AED', '#A78BFA', '#EDE9FE'),       # violet
    'style': ('#059669', '#34D399', '#D1FAE5'),          # emerald
    'blog': ('#1D4ED8', '#60A5FA', '#DBEAFE'),           # blue
}

# Product-specific color variants for uniqueness
PRODUCT_PALETTES = [
    ('#9F1239', '#FB7185', '#FFE4E6'),  # rose-deep
    ('#7E22CE', '#C084FC', '#F3E8FF'),  # purple
    ('#1D4ED8', '#93C5FD', '#DBEAFE'),  # blue
    ('#B45309', '#FCD34D', '#FEF9C3'),  # amber-warm
    ('#0F766E', '#5EEAD4', '#CCFBF1'),  # teal
    ('#BE123C', '#FDA4AF', '#FFF1F2'),  # rose-soft
    ('#6D28D9', '#A78BFA', '#EDE9FE'),  # violet
    ('#0369A1', '#7DD3FC', '#E0F2FE'),  # sky
    ('#A16207', '#FDE047', '#FEF9C3'),  # yellow
    ('#047857', '#6EE7B7', '#D1FAE5'),  # emerald
    ('#C2410C', '#FB923C', '#FFF7ED'),  # orange
    ('#4338CA', '#818CF8', '#E0E7FF'),  # indigo
    ('#0E7490', '#67E8F9', '#CFFAFE'),  # cyan
    ('#B91C1C', '#FCA5A5', '#FEE2E2'),  # red-light
    ('#4C1D95', '#A78BFA', '#EDE9FE'),  # violet-deep
    ('#065F46', '#34D399', '#ECFDF5'),  # green
    ('#92400E', '#FBBF24', '#FFFBEB'),  # amber-light
    ('#1E3A8A', '#60A5FA', '#EFF6FF'),  # blue-deep
    ('#831843', '#F472B6', '#FCE7F3'),  # pink
    ('#6B21A8', '#D8B4FE', '#FAF5FF'),  # purple-light
]

# Fashion icon shapes for product SVGs
FASHION_ICONS = {
    'blazer': '<path d="M60 50 L100 50 L130 140 L100 160 L100 130 L60 130 L60 160 L30 140 Z" fill="{mid}" opacity="0.8"/><path d="M80 50 L80 130" stroke="{dark}" stroke-width="2"/>',
    'dress': '<path d="M70 40 L90 40 L95 70 L110 150 L50 150 L65 70 Z" fill="{mid}" opacity="0.8"/><ellipse cx="80" cy="38" rx="12" ry="6" fill="{dark}" opacity="0.5"/>',
    'pants': '<path d="M60 50 L100 50 L100 70 L95 150 L75 150 L80 80 L85 150 L65 150 L60 70 Z" fill="{mid}" opacity="0.8"/>',
    'shoes': '<path d="M40 110 L60 80 L80 80 L100 80 L120 100 L130 110 L130 125 L40 125 Z" fill="{mid}" opacity="0.8"/><path d="M60 80 Q80 65 100 80" stroke="{dark}" stroke-width="2" fill="none"/>',
    'bag': '<path d="M55 70 L105 70 L110 140 L50 140 Z" fill="{mid}" opacity="0.8"/><path d="M65 70 Q80 40 95 70" stroke="{dark}" stroke-width="3" fill="none"/>',
    'jewelry': '<circle cx="80" cy="80" r="20" fill="none" stroke="{mid}" stroke-width="3"/><circle cx="80" cy="80" r="12" fill="{mid}" opacity="0.5"/><path d="M80 60 L80 30" stroke="{dark}" stroke-width="2"/><circle cx="80" cy="105" r="5" fill="{mid}"/>',
    'hat': '<path d="M40 100 L120 100 L115 110 L45 110 Z" fill="{mid}" opacity="0.8"/><path d="M55 100 L55 65 Q80 40 105 65 L105 100" fill="{dark}" opacity="0.6"/>',
    'sweater': '<path d="M50 55 L110 55 L115 140 L45 140 Z" fill="{mid}" opacity="0.8"/><path d="M50 55 L30 90 L45 95 L50 75" fill="{mid}" opacity="0.6"/><path d="M110 55 L130 90 L115 95 L110 75" fill="{mid}" opacity="0.6"/><ellipse cx="80" cy="55" rx="15" ry="8" fill="{dark}" opacity="0.3"/>',
    'top': '<path d="M55 45 L105 45 L110 130 L50 130 Z" fill="{mid}" opacity="0.8"/><path d="M55 45 L40 70 L50 72" fill="{mid}" opacity="0.6"/><path d="M105 45 L120 70 L110 72" fill="{mid}" opacity="0.6"/>',
    'skirt': '<path d="M60 50 L100 50 L115 140 L45 140 Z" fill="{mid}" opacity="0.8"/><line x1="60" y1="50" x2="100" y2="50" stroke="{dark}" stroke-width="3"/>',
    'sunglasses': '<ellipse cx="60" cy="85" rx="22" ry="18" fill="{mid}" opacity="0.7"/><ellipse cx="105" cy="85" rx="22" ry="18" fill="{mid}" opacity="0.7"/><path d="M82 85 L83 85" stroke="{dark}" stroke-width="3"/><path d="M38 82 L25 78" stroke="{dark}" stroke-width="2"/><path d="M127 82 L140 78" stroke="{dark}" stroke-width="2"/>',
    'coat': '<path d="M45 45 L115 45 L120 155 L85 155 L80 100 L75 155 L40 155 Z" fill="{mid}" opacity="0.8"/><line x1="80" y1="45" x2="80" y2="100" stroke="{dark}" stroke-width="2"/><path d="M45 45 L25 90 L40 92" fill="{mid}" opacity="0.6"/><path d="M115 45 L135 90 L120 92" fill="{mid}" opacity="0.6"/>',
    'scarf': '<path d="M50 40 Q80 35 110 45 Q85 50 55 45 L45 130 Q55 140 60 130 L50 55" fill="{mid}" opacity="0.8"/>',
    'boots': '<path d="M55 60 L95 60 L100 125 L120 135 L120 150 L40 150 L40 135 L50 125 Z" fill="{mid}" opacity="0.8"/><line x1="55" y1="80" x2="95" y2="80" stroke="{dark}" stroke-width="2"/>',
    'default': '<rect x="55" y="55" width="50" height="50" rx="8" fill="{mid}" opacity="0.8"/><circle cx="80" cy="80" r="15" fill="{dark}" opacity="0.4"/>',
}

# Map product names to icon types
def get_icon_type(product_name):
    name_lower = product_name.lower()
    if any(w in name_lower for w in ['blazer', 'jacket', 'vest']):
        return 'blazer'
    if any(w in name_lower for w in ['dress', 'slip', 'bodysuit', 'camisole', 'blouse', 'shirt', 'tee', 'top']):
        if 'dress' in name_lower:
            return 'dress'
        return 'top'
    if any(w in name_lower for w in ['pants', 'trousers', 'jeans', 'leggings', 'shorts', 'jogger']):
        return 'pants'
    if any(w in name_lower for w in ['shoes', 'sneakers', 'pumps', 'heels', 'flats', 'sandals', 'loafers', 'slides']):
        return 'shoes'
    if any(w in name_lower for w in ['boots', 'boot']):
        return 'boots'
    if any(w in name_lower for w in ['bag', 'tote', 'clutch', 'backpack', 'duffel', 'messenger', 'sleeve', 'crossbody']):
        return 'bag'
    if any(w in name_lower for w in ['earrings', 'necklace', 'jewelry', 'rings', 'bracelet', 'pendant']):
        return 'jewelry'
    if any(w in name_lower for w in ['hat', 'headband', 'bucket', 'scrunchies', 'clips']):
        return 'hat'
    if any(w in name_lower for w in ['sweater', 'cardigan', 'pullover', 'hoodie', 'knit', 'turtleneck']):
        return 'sweater'
    if any(w in name_lower for w in ['skirt']):
        return 'skirt'
    if any(w in name_lower for w in ['sunglasses']):
        return 'sunglasses'
    if any(w in name_lower for w in ['coat', 'trench', 'puffer', 'fur']):
        return 'coat'
    if any(w in name_lower for w in ['scarf', 'shawl', 'wrap']):
        return 'scarf'
    if any(w in name_lower for w in ['bra']):
        return 'top'
    if any(w in name_lower for w in ['bikini', 'swimwear']):
        return 'dress'
    return 'default'


def slugify(text):
    """Create a filesystem-safe slug from text."""
    text = text.lower().strip()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text[:60]


def get_palette_for_name(name, category='casual'):
    """Get a unique palette based on product name hash."""
    h = int(hashlib.md5(name.encode()).hexdigest(), 16)
    idx = h % len(PRODUCT_PALETTES)
    return PRODUCT_PALETTES[idx]


def generate_product_svg(product_name, width=200, height=200):
    """Generate a unique product SVG (200x200)."""
    palette = get_palette_for_name(product_name)
    dark, mid, light = palette
    icon_type = get_icon_type(product_name)
    icon_template = FASHION_ICONS.get(icon_type, FASHION_ICONS['default'])
    icon = icon_template.replace('{dark}', dark).replace('{mid}', mid).replace('{light}', light)

    # Get initials for uniqueness
    words = product_name.split()
    initial = words[0][0].upper() if words else 'S'

    # Unique pattern based on hash
    h = int(hashlib.md5(product_name.encode()).hexdigest(), 16)
    pattern_rotation = h % 360
    pattern_offset = (h >> 8) % 40 + 10

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">
  <defs>
    <linearGradient id="bg-{h % 10000}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{light}"/>
      <stop offset="50%" stop-color="white"/>
      <stop offset="100%" stop-color="{light}"/>
    </linearGradient>
    <linearGradient id="accent-{h % 10000}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{dark}"/>
      <stop offset="100%" stop-color="{mid}"/>
    </linearGradient>
  </defs>
  <rect width="{width}" height="{height}" fill="url(#bg-{h % 10000})" rx="12"/>
  <!-- Decorative pattern -->
  <g transform="translate({pattern_offset}, {pattern_offset}) rotate({pattern_rotation % 15}, 100, 100)" opacity="0.06">
    <circle cx="30" cy="30" r="25" fill="{dark}"/>
    <circle cx="130" cy="30" r="20" fill="{mid}"/>
    <circle cx="170" cy="130" r="30" fill="{dark}"/>
    <circle cx="30" cy="170" r="15" fill="{mid}"/>
  </g>
  <!-- Fashion icon -->
  <g transform="translate(20, 15) scale(0.85)">
    {icon}
  </g>
  <!-- Product initial -->
  <text x="170" y="35" font-family="Georgia, serif" font-size="28" font-weight="bold" fill="{dark}" opacity="0.25" text-anchor="end">{initial}</text>
  <!-- Product name -->
  <text x="100" y="180" font-family="Georgia, serif" font-size="10" fill="{dark}" opacity="0.6" text-anchor="middle">
    {product_name[:28]}
  </text>
</svg>'''
    return svg


def generate_guide_svg(title, category='casual', width=600, height=400):
    """Generate a unique guide hero SVG (600x400)."""
    colors = CATEGORY_COLORS.get(category, CATEGORY_COLORS['casual'])
    dark, mid, light = colors

    h = int(hashlib.md5(title.encode()).hexdigest(), 16)
    # Unique decorative elements
    circle_x = 100 + (h % 400)
    circle_y = 80 + (h >> 4) % 240
    circle_r = 40 + (h >> 8) % 80
    rect_x = (h >> 12) % 300 + 50
    rect_y = (h >> 16) % 200 + 50
    rect_w = 80 + (h >> 20) % 120
    rect_h = 60 + (h >> 24) % 80
    rotation = (h >> 28) % 30 - 15

    # Split title for display
    words = title.split()
    line1 = ' '.join(words[:4])[:35]
    line2 = ' '.join(words[4:8])[:35] if len(words) > 4 else ''

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">
  <defs>
    <linearGradient id="gbg-{h % 10000}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{light}"/>
      <stop offset="40%" stop-color="white"/>
      <stop offset="100%" stop-color="{light}"/>
    </linearGradient>
    <linearGradient id="gaccent-{h % 10000}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{dark}" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="{mid}" stop-opacity="0.1"/>
    </linearGradient>
  </defs>
  <rect width="{width}" height="{height}" fill="url(#gbg-{h % 10000})" rx="16"/>
  <!-- Decorative shapes -->
  <g opacity="0.08">
    <circle cx="{circle_x}" cy="{circle_y}" r="{circle_r}" fill="{dark}"/>
    <rect x="{rect_x}" y="{rect_y}" width="{rect_w}" height="{rect_h}" rx="20" fill="{mid}" transform="rotate({rotation}, {rect_x + rect_w//2}, {rect_y + rect_h//2})"/>
    <circle cx="{(circle_x + 200) % 580 + 10}" cy="{(circle_y + 100) % 380 + 10}" r="{circle_r * 0.6}" fill="{mid}"/>
  </g>
  <!-- Elegant line decoration -->
  <line x1="60" y1="160" x2="200" y2="160" stroke="{mid}" stroke-width="2" opacity="0.4"/>
  <line x1="60" y1="166" x2="120" y2="166" stroke="{dark}" stroke-width="2" opacity="0.3"/>
  <!-- Title text -->
  <text x="60" y="210" font-family="Georgia, serif" font-size="26" font-weight="bold" fill="{dark}" opacity="0.85">
    {line1}
  </text>
  <text x="60" y="245" font-family="Georgia, serif" font-size="22" fill="{dark}" opacity="0.6">
    {line2}
  </text>
  <!-- Category badge -->
  <rect x="60" y="290" width="{len(category)*10 + 20}" height="28" rx="14" fill="{dark}" opacity="0.12"/>
  <text x="70" y="309" font-family="Arial, sans-serif" font-size="12" fill="{dark}" opacity="0.7" font-weight="600" text-transform="uppercase">{category.upper()}</text>
  <!-- StyleMeDaily watermark -->
  <text x="540" y="380" font-family="Georgia, serif" font-size="10" fill="{dark}" opacity="0.2" text-anchor="end">StyleMeDaily</text>
</svg>'''
    return svg


def generate_blog_svg(title, cat='Style', width=600, height=400):
    """Generate a unique blog post hero SVG."""
    colors = CATEGORY_COLORS.get(cat.lower(), CATEGORY_COLORS['blog'])
    dark, mid, light = colors

    h = int(hashlib.md5(('blog-' + title).encode()).hexdigest(), 16)
    cx1 = 100 + (h % 400)
    cy1 = 100 + (h >> 4) % 200
    r1 = 60 + (h >> 8) % 100

    words = title.split()
    line1 = ' '.join(words[:5])[:40]
    line2 = ' '.join(words[5:9])[:40] if len(words) > 5 else ''

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">
  <defs>
    <linearGradient id="bbg-{h % 10000}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{light}"/>
      <stop offset="50%" stop-color="white"/>
      <stop offset="100%" stop-color="{light}"/>
    </linearGradient>
  </defs>
  <rect width="{width}" height="{height}" fill="url(#bbg-{h % 10000})" rx="16"/>
  <g opacity="0.07">
    <circle cx="{cx1}" cy="{cy1}" r="{r1}" fill="{dark}"/>
    <circle cx="{(cx1 + 250) % 560 + 20}" cy="{(cy1 + 150) % 360 + 20}" r="{r1 * 0.7}" fill="{mid}"/>
    <rect x="{(cx1 + 100) % 400 + 50}" y="{(cy1 + 50) % 280 + 30}" width="100" height="60" rx="15" fill="{mid}" transform="rotate({(h>>12) % 20 - 10}, 300, 200)"/>
  </g>
  <line x1="50" y1="170" x2="250" y2="170" stroke="{mid}" stroke-width="2" opacity="0.3"/>
  <rect x="50" y="120" width="{len(cat)*9 + 16}" height="24" rx="12" fill="{dark}" opacity="0.1"/>
  <text x="58" y="137" font-family="Arial, sans-serif" font-size="11" fill="{dark}" opacity="0.6" font-weight="600">{cat.upper()}</text>
  <text x="50" y="210" font-family="Georgia, serif" font-size="24" font-weight="bold" fill="{dark}" opacity="0.8">
    {line1}
  </text>
  <text x="50" y="245" font-family="Georgia, serif" font-size="20" fill="{dark}" opacity="0.5">
    {line2}
  </text>
  <text x="550" y="380" font-family="Georgia, serif" font-size="10" fill="{dark}" opacity="0.2" text-anchor="end">StyleMeDaily</text>
</svg>'''
    return svg


def generate_category_svg(name, width=600, height=400):
    """Generate a category banner SVG."""
    cat_key = name.lower().replace(' ', '-')
    colors = CATEGORY_COLORS.get(cat_key, CATEGORY_COLORS['casual'])
    dark, mid, light = colors
    h = int(hashlib.md5(('cat-' + name).encode()).hexdigest(), 16)

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">
  <defs>
    <linearGradient id="cbg-{h % 10000}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{light}"/>
      <stop offset="100%" stop-color="white"/>
    </linearGradient>
  </defs>
  <rect width="{width}" height="{height}" fill="url(#cbg-{h % 10000})" rx="16"/>
  <g opacity="0.06">
    <circle cx="450" cy="200" r="180" fill="{dark}"/>
    <circle cx="150" cy="300" r="120" fill="{mid}"/>
  </g>
  <text x="300" y="190" font-family="Georgia, serif" font-size="42" font-weight="bold" fill="{dark}" opacity="0.8" text-anchor="middle">{name}</text>
  <line x1="200" y1="210" x2="400" y2="210" stroke="{mid}" stroke-width="2" opacity="0.4"/>
  <text x="300" y="250" font-family="Georgia, serif" font-size="16" fill="{dark}" opacity="0.4" text-anchor="middle">StyleMeDaily Collection</text>
</svg>'''
    return svg


# ===== MAIN: Generate all images =====

def main():
    count = 0

    # ---- 1. All unique product images ----
    # Map of Unsplash URL -> (product_name, is_product_200x200)
    # We need to extract every unique unsplash photo ID and map it to a local path
    # Instead, we create product SVGs by product name (which is unique per product)

    # All products from guides-data.ts
    products = [
        # Guide 1: coastal grandmother - no products
        # Guide 2: refined-90s-minimalism
        'Slim-cut tailored trousers in wool crepe',
        'Bias-cut silk slip dress',
        'Oversized single-breasted blazer',
        'Cashmere crewneck sweater',
        'Elongated column skirt',
        # Guide 3: coquette
        'Satin Bow Hair Clips Set',
        'Lace Trim Camisole Top',
        'Ballet Flats with Bow',
        'Pearl Drop Earrings',
        # Guide 4: gorpcore
        'Waterproof Hiking Boots',
        'Fleece Half-Zip Pullover',
        'Cargo Jogger Pants',
        # Guide 5: cottagecore
        'Floral Midi Wrap Dress',
        'Straw Sun Hat',
        'Puff Sleeve Linen Blouse',
        # Guide 6: clean girl
        'Gold Hoop Earrings Set',
        'Slicked-Back Headband Set',
        'Fitted Ribbed Tank Top 3-Pack',
        # Guide 7: balletcore
        'Wrap Ballet Flats',
        'Mesh Overlay Midi Skirt',
        'Cropped Wrap Cardigan',
        # Guide 8: gorpcore tips
        'Puffer Vest',
        'Trail Running Sneakers',
        'Nylon Belt Bag',
        # Guide 9: eclectic grandpa
        'Oversized Knit Cardigan',
        'Corduroy Wide-Leg Trousers',
        'Argyle Sweater Vest',
        # Guide 10: office siren
        'Fitted Pencil Skirt',
        'Sheer Button-Down Blouse',
        'Pointed-Toe Kitten Heels',
        # Guide 11: indie sleaze
        'Distressed Band Tee',
        'Faux Leather Mini Skirt',
        'Chunky Platform Boots',
        # Guide 12: soft girl
        'Pastel Cardigan with Pearl Buttons',
        'Pleated Tennis Skirt',
        'Cloud Slides Pastel Pink',
        # Guide 13: mob wife
        'Faux Fur Coat',
        'Chunky Gold Chain Necklace',
        'Leopard Print Scarf',
        # Guide 14: maximalist vintage
        'Vintage Patchwork Jacket',
        'Printed Maxi Skirt',
        'Chunky Statement Rings Set',
        # Guide 15: capsule wardrobe
        'Tailored Blazer',
        'High-Rise Wide Leg Pants',
        'Silk Camisole',
        'Classic Pumps',
        # Guide 16: casual expensive
        'Oversized Linen Shirt',
        'Straight Leg Jeans',
        'White Sneakers',
        # Guide 17: first date
        'Satin Midi Dress',
        'Strappy Heels',
        'Statement Earrings',
        # Guide 18: body shape
        'Wrap Dress (Hourglass)',
        'A-Line Skirt (Pear)',
        'Structured Blazer (Rectangle)',
        # Guide 19: nordstrom vs asos
        'Work Blazer',
        'Work Tote Bag',
        # Guide 20: wedding 2026
        'Wedding Guest Dress',
        'Elegant Heels',
        # Guide 21: best jeans
        # uses: Straight Leg Jeans, Wide Leg Pants (already listed)
        'Wide Leg Pants',
        # Guide 22: spring workwear
        'Linen Blazer',
        'Silk Blouse',
        # Guide 23: work outfits
        'Oversized Wool Blazer',
        'High-Waisted Trousers',
        'Silk Button-Down Shirt',
        'Pointed Toe Pumps',
        # Guide 24: date night
        'Strappy Heeled Sandals',
        'Clutch Bag',
        # Guide 25: best jeans every body
        # uses existing products
        # Guide 26: spring fashion trends
        'Linen Blend Blazer',
        'Woven Tote Bag',
        # Guide 27: best work bags
        'Professional Tote Bag',
        # Guide 28: affordable fashion
        # uses existing products
        # Guide 29: minimalist wardrobe
        'Classic White Camisole',
        'Versatile Wide Leg Pants',
        # Guide 30: best white sneakers
        # uses existing products
        # Guide 31: professional outfits
        'Wide Leg Trousers',
        # Guide 32: stitch fix
        'Build Your Own Style Kit',
        # Guide 33: best affordable blazers
        'Classic Tailored Blazer',
        'Wide Leg Pants (Pair With)',
        'Silk Camisole (Layer Under)',
        # Guide 34: job interview
        'Navy Tailored Blazer',
        'Slim Dress Pants',
        'Structured Handbag',
        # Guide 35: spring must have
        'Leather Jacket',
        'Cigarette Jeans',
        'Large Tote Bag',
        'Oversized Trench Coat',
        'Vanilla Yellow Blouse',
        # Guide 36: trending accessories
        'Lace Midi Skirt',
        'Quarter Zip Knit',
        'Floral Midi Dress',
        'Oversized Sunglasses',
        'Almond Toe Heels',
        # Guide 37: running shoes
        'Lightweight Running Shoes',
        'Cushioned Trail Runners',
        'Budget Running Shoes',
        'Running Leggings',
        'Sports Bra (High Impact)',
        # Guide 38: laptop bags
        'Leather Laptop Tote',
        'Laptop Backpack (Slim)',
        'Convertible Messenger Bag',
        'Laptop Sleeve (Padded)',
        'Structured Work Blazer',
        # Guide 39: sunglasses face shape
        'Oversized Square Sunglasses',
        'Cat Eye Sunglasses',
        'Round Sunglasses',
        'Aviator Sunglasses',
        'Polarized Sport Sunglasses',
        # Guide 40: amazon finds under 30
        'Satin Pleated Skirt',
        'Gold Layered Necklace Set',
        'Ribbed Bodysuit',
        'Crossbody Bag',
        # Guide 41: summer essentials
        'Linen Wide Leg Pants',
        'Cotton Sundress',
        'Straw Tote Bag',
        'Flat Sandals (Leather)',
        # Guide 42: plus size
        'Wrap Maxi Dress',
        'High-Waist Wide Leg Pants',
        'Stretchy Bodycon Dress',
        'Block Heel Sandals (Wide)',
        # Guide 43: fall fashion
        'Chunky Knit Sweater',
        'Faux Leather Trousers',
        'Ankle Boots',
        'Plaid Mini Skirt',
        # Guide 44: petite fashion
        'High-Waist Skinny Jeans',
        'Midi Dress with Belt',
        'Pointed Toe Kitten Heels',
        'Cropped Blazer',
        # Guide 45: amazon prime
        'Fleece Pullover Hoodie',
        'Yoga Pants (High Waist)',
        'Satin Slip Dress',
        'V-Neck Cardigan',
        'Platform Sneakers',
        # Guide 46: dress for 50s
        'Tailored Ponte Blazer',
        'Straight Leg Jeans (Mid Rise)',
        'Silk Blouse (Plus & Standard)',
        'Block Heel Pumps',
        # Guide 47: gym outfits
        'High-Waist Workout Leggings',
        'Seamless Sports Bra',
        'Oversized Gym T-Shirt',
        'Running Sneakers',
        'Gym Duffel Bag',
        # Guide 48: vacation outfits
        'Linen Button-Up Shirt Dress',
        'Bikini Set (Adjustable)',
        'Straw Hat (Beach)',
        'Lightweight Sandals',
        'Rattan Crossbody Bag',
        # Guide 49: editors choice trends
        'Ballet Flat (Square Toe)',
        'Cashmere Blend Sweater',
        'Barrel Leg Jeans',
        'Mesh Ballet Skirt',
        # Guide 50: oversized blazer
        'Oversized Blazer (Neutral)',
        'Biker Shorts',
        'Pointed Toe Boots',
        'White Straight Leg Jeans',
        # Guide 51: wedding guest dresses
        'Floral Midi Wrap Dress',
        'Chiffon Maxi Dress',
        'Satin Slip Midi Dress',
        'Beaded Clutch',
        # Guide 52: winter essentials
        'Wool Blend Coat',
        'Cashmere Turtleneck Sweater',
        'Thermal Lined Leggings',
        'Knee-High Boots',
        'Chunky Knit Scarf',
        # Guide 53: business casual
        'Ponte Knit Blazer',
        'Wide Leg Dress Pants',
        'Mock Neck Blouse',
        'Pointed Toe Loafers',
        'Leather Tote Bag',
        # Guide 54: color theory
        'Color Block Sweater',
        'Neutral Tone Midi Skirt',
        'Silk Scarf (Multi-way)',
        'White Linen Shirt',
        # Guide 55: brunch outfits
        'Floral Mini Dress',
        'Linen Co-ord Set',
        'Strappy Block Heel Sandals',
        'Woven Straw Bag',
        'Dainty Gold Earrings Set',
        # Guide 56: ankle boots
        'Chelsea Ankle Boots',
        'Block Heel Ankle Boots',
        'Combat Ankle Boots',
        'Western Ankle Boots',
        'Pointed Toe Ankle Boots',
        # Guide 57: festival outfits
        'Crochet Maxi Dress',
        'Sequin Mini Skirt',
        'Fringe Crop Top',
        'Platform Chunky Sneakers',
        'Boho Bucket Hat',
        # Guide 58: korean fashion
        'Oversized Blazer Set',
        'Mini Pleated Skirt',
        'Ribbed Knit Cardigan',
        'Mary Jane Platform Shoes',
        'Micro Shoulder Bag',
        # Guide 59: hourglass figure
        'Wrap Midi Dress',
        'Belted Trench Coat',
        'High Waist Pencil Skirt',
        'Fitted Ribbed Bodysuit',
        # Guide 60: smart casual
        'Straight Leg Dark Jeans',
        'Silk Blend Blouse',
        'White Leather Sneakers',
        'Structured Crossbody Bag',
        # Guide 61: accessories under 50
        'Reversible Leather Belt',
        'Mini Shoulder Bag',
        'Silk Hair Scrunchies Set',
        # Guide 62: quiet luxury
        'Cashmere-Blend Crewneck Sweater',
        'Tailored Wide-Leg Trousers',
        'Classic Wool-Blend Coat',
        'Leather Ballet Flats',
        'Minimalist Gold Jewelry Set',
        # Guide 63: leather jacket
        'AllSaints Balfern Leather Biker Jacket',
        "Levi's Faux Leather Moto Jacket",
        'Madewell Washed Leather Motorcycle Jacket',
        'BLANKNYC Faux Leather Jacket',
        'Sezane Emile Leather Jacket',
        # Guide 64: dark feminine
        'Satin Corset Top',
        'High-Waist Faux Leather Pants',
        'Velvet Blazer',
        'Layered Gold Chain Necklace Set',
        # Guide 65: dopamine dressing
        'Oversized Satin Blazer in Fuchsia',
        'Wide-Leg Trousers in Cobalt Blue',
        'Chunky Gold Statement Earrings',
        'Color-Block Knit Sweater',
        'Bright Orange Crossbody Bag',
        # Guide 66: winter to spring
        'Lightweight Trench Coat',
        'Cotton-Cashmere Crewneck',
        'High-Waisted Wide-Leg Jeans',
        'Quilted Vest',
        # Guide 67: valentines
        'Red Satin Slip Dress',
        'Heart Pendant Necklace',
        'Velvet Clutch Bag',
        # Guide 68: summer date
        'Floral Wrap Midi Dress',
        'Straw Clutch Bag',
        # Guide 69: casual date
        'Ribbed Knit Bodysuit',
        'High-Waist Straight Leg Jeans',
        'Clean White Sneakers',
        'Mini Crossbody Bag',
        # Guide 70: anniversary
        'Satin Midi Dress (Black)',
        'Pointed Toe Stiletto Heels',
        'Crystal Drop Earrings',
        'Embellished Evening Clutch',
        'Cashmere Wrap Shawl',
        # Guide 71: trench coat
        'Classic Tan Trench Coat',
        'Waterproof Chelsea Boots',
        'Striped Breton Tee',
        'Structured Crossbody Bag',
    ]

    # Remove duplicates
    unique_products = list(dict.fromkeys(products))

    print(f"Generating {len(unique_products)} product SVGs...")
    for name in unique_products:
        slug = slugify(name)
        filepath = os.path.join(PRODUCTS_DIR, f'{slug}.svg')
        svg = generate_product_svg(name)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(svg)
        count += 1

    # ---- 2. All guide hero images ----
    guide_titles = [
        ('Coastal Grandmother Style Guide', 'casual'),
        ('Refined 90s Minimalism Understated Luxury', 'casual'),
        ('Coquette Aesthetic Feminine Style 2026', 'casual'),
        ('Gorpcore for Women Complete Style Guide', 'casual'),
        ('Cottagecore Spring Outfits', 'seasonal'),
        ('Clean Girl Aesthetic 2026', 'casual'),
        ('Balletcore Essentials Viral Trend', 'casual'),
        ('Gorpcore Styling Tips Outfit Ideas', 'casual'),
        ('Eclectic Grandpa Style Gen Z Guide', 'casual'),
        ('Office Siren Workwear Trend', 'workwear'),
        ('Indie Sleaze Style Guide 2025', 'casual'),
        ('Soft Girl Aesthetic Dreamy Style', 'casual'),
        ('Mob Wife Aesthetic Bold Luxe Trend', 'seasonal'),
        ('Maximalist Vintage Revival', 'casual'),
        ('Capsule Wardrobe Working Women 2026', 'workwear'),
        ('Casual Outfits That Look Expensive', 'casual'),
        ('First Date Outfits Every Vibe', 'date-night'),
        ('Dressing for Body Shape Guide', 'body-type'),
        ('Nordstrom vs ASOS Professional Women', 'workwear'),
        ('Wedding Guest Outfit 2026', 'occasion'),
        ('Best Jeans for Women 2026', 'casual'),
        ('Spring Workwear Capsule 2026', 'workwear'),
        ('Work Outfits That Mean Business', 'workwear'),
        ('What to Wear Date Night', 'date-night'),
        ('Best Jeans Every Body Type', 'casual'),
        ('Spring Fashion Trends 2026', 'seasonal'),
        ('Best Work Bags Under 100', 'workwear'),
        ('Affordable Fashion Brands Guide', 'budget'),
        ('How to Build Minimalist Wardrobe', 'casual'),
        ('Best White Sneakers Women 2026', 'casual'),
        ('Professional Outfits Women 2026', 'workwear'),
        ('Stitch Fix vs Personal Stylist', 'budget'),
        ('Best Affordable Blazers Under 100', 'budget'),
        ('What to Wear Job Interview 2026', 'workwear'),
        ('Spring 2026 Must Have Items', 'seasonal'),
        ('Trending Spring Accessories 2026', 'seasonal'),
        ('Best Running Shoes Women 2026', 'athleisure'),
        ('Best Laptop Bags Women 2026', 'workwear'),
        ('Best Sunglasses Face Shape 2026', 'accessories'),
        ('Amazon Fashion Finds Under 30', 'budget'),
        ('Summer Fashion Essentials 2026', 'seasonal'),
        ('Plus Size Fashion Guide 2026', 'body-type'),
        ('Fall Fashion Trends 2026', 'seasonal'),
        ('Petite Fashion Guide 2026', 'body-type'),
        ('Amazon Prime Fashion Deals 2026', 'budget'),
        ('How to Dress in Your 50s', 'occasion'),
        ('Best Gym Outfits Women 2026', 'athleisure'),
        ('Vacation Outfits Women 2026', 'occasion'),
        ('Editors Choice Fashion Trends 2026', 'casual'),
        ('How to Style Oversized Blazer', 'casual'),
        ('Best Wedding Guest Dresses Under 100', 'occasion'),
        ('Winter Fashion Essentials 2026', 'seasonal'),
        ('Business Casual Outfits Women 2026', 'workwear'),
        ('Color Theory Fashion Guide', 'casual'),
        ('Best Brunch Outfits Women 2026', 'occasion'),
        ('Best Ankle Boots Women 2026', 'budget'),
        ('Festival Outfits Women 2026', 'occasion'),
        ('Korean Fashion Trends 2026', 'casual'),
        ('Hourglass Figure Style Guide', 'body-type'),
        ('Smart Casual Outfits Women 2026', 'casual'),
        ('Best Accessories Under 50 2026', 'accessories'),
        ('Quiet Luxury Style Guide 2026', 'casual'),
        ('How to Style Leather Jacket Women', 'casual'),
        ('Dark Feminine Aesthetic Guide 2026', 'date-night'),
        ('Dopamine Dressing Bold Color Outfits', 'casual'),
        ('Winter to Spring Transition Outfits', 'seasonal'),
        ('Valentines Day Outfit Ideas 2026', 'date-night'),
        ('Summer Date Night Outfits 2026', 'date-night'),
        ('Casual Date Night Outfits 2026', 'date-night'),
        ('Anniversary Dinner Outfit Ideas', 'date-night'),
        ('Trench Coat Outfits Styling Guide', 'seasonal'),
    ]

    print(f"Generating {len(guide_titles)} guide SVGs...")
    for title, category in guide_titles:
        slug = slugify(title)
        filepath = os.path.join(GUIDES_DIR, f'{slug}.svg')
        svg = generate_guide_svg(title, category)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(svg)
        count += 1

    # ---- 3. Blog post images ----
    blog_posts = [
        ('Quiet Luxury Guide', 'Style'),
        ('Spring Color Trends 2026', 'Trends'),
        ('Capsule Wardrobe Mistakes', 'Guide'),
        ('Nordstrom vs ASOS Comparison', 'Comparison'),
        ('Best Jeans Buying Guide', 'Review'),
        ('Body Shape Dressing Guide', 'Guide'),
        ('Amazon Fashion Haul Under 30', 'Finds'),
        ('Spring Workwear Capsule', 'Workwear'),
        ('Interview Outfits Guide', 'Guide'),
        ('Summer 2026 Fashion Preview', 'Preview'),
        ('Sunglasses Face Shape Guide', 'Accessories'),
        ('Stitch Fix Review After 6 Months', 'Review'),
    ]

    print(f"Generating {len(blog_posts)} blog SVGs...")
    for title, cat in blog_posts:
        slug = slugify(title)
        filepath = os.path.join(BLOG_DIR, f'{slug}.svg')
        svg = generate_blog_svg(title, cat)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(svg)
        count += 1

    # ---- 4. Pinterest pin images (from page.tsx) ----
    pinterest_pins = [
        ('Capsule Wardrobe Guide 2026', 'workwear'),
        ('Casual Outfits That Look Expensive', 'casual'),
        ('First Date Outfits', 'date-night'),
        ('Spring Fashion Trends', 'seasonal'),
    ]

    print(f"Generating {len(pinterest_pins)} pinterest pin SVGs...")
    for title, cat in pinterest_pins:
        slug = slugify(title)
        filepath = os.path.join(GUIDES_DIR, f'pin-{slug}.svg')
        svg = generate_guide_svg(title, cat, 400, 600)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(svg)
        count += 1

    # ---- 5. Category SVGs ----
    categories_list = [
        'Workwear', 'Casual', 'Date Night', 'Seasonal',
        'Body Type', 'Budget', 'Occasion', 'Accessories',
    ]

    print(f"Generating {len(categories_list)} category SVGs...")
    for name in categories_list:
        slug = slugify(name)
        filepath = os.path.join(CATEGORIES_DIR, f'{slug}.svg')
        svg = generate_category_svg(name)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(svg)
        count += 1

    print(f"\nDone! Generated {count} total SVG files.")
    print(f"  Products: {PRODUCTS_DIR}")
    print(f"  Guides:   {GUIDES_DIR}")
    print(f"  Blog:     {BLOG_DIR}")
    print(f"  Categories: {CATEGORIES_DIR}")


if __name__ == '__main__':
    main()
