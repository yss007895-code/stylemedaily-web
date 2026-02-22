"""
Replace all Unsplash URLs in source files with local SVG paths.
This script maps each Unsplash URL to the appropriate local SVG.
"""
import re
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def slugify(text):
    text = text.lower().strip()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s]+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text[:60]

# =========================================================
# GUIDE IMAGE MAPPING: guide slug -> SVG filename
# =========================================================
GUIDE_SLUG_TO_SVG = {
    'coastal-grandmother-style-guide-how-to-wear-the-viral-trend-that-lives-in-my-head-rentfree': 'coastal-grandmother-style-guide',
    'refined-90s-minimalism-understated-luxury-curated-essentials': 'refined-90s-minimalism-understated-luxury',
    'coquette-aesthetic-guide-feminine-style-2026': 'coquette-aesthetic-feminine-style-2026',
    'gorpcore-for-women-your-complete-style-guide': 'gorpcore-for-women-complete-style-guide',
    'cottagecore-spring-outfits-that-are-trending-everywhere': 'cottagecore-spring-outfits',
    'clean-girl-aesthetic-2026-the-effortless-style-guide-everyones-obsessing-over': 'clean-girl-aesthetic-2026',
    'balletcore-essentials-how-to-master-this-viral-trend': 'balletcore-essentials-viral-trend',
    'gorpcore-for-women-3-styling-tips-outfit-ideas-that-own-the-trend': 'gorpcore-styling-tips-outfit-ideas',
    'eclectic-grandpa-style-the-ultimate-gen-z-trend-guide': 'eclectic-grandpa-style-gen-z-guide',
    'office-siren-the-seductive-workwear-trend-you-need-to-try': 'office-siren-workwear-trend',
    'indie-sleaze-is-back-heres-how-to-nail-it-in-2025': 'indie-sleaze-style-guide-2025',
    'soft-girl-aesthetic-101-your-dreamy-style-guide': 'soft-girl-aesthetic-dreamy-style',
    'mob-wife-aesthetic-the-bold-luxe-trend-taking-over-2024': 'mob-wife-aesthetic-bold-luxe-trend',
    'maximalist-vintage-revival-how-to-master-the-moreismore-trend': 'maximalist-vintage-revival',
    'capsule-wardrobe-working-women-2026': 'capsule-wardrobe-working-women-2026',
    'casual-outfits-look-expensive': 'casual-outfits-that-look-expensive',
    'first-date-outfits-every-vibe': 'first-date-outfits-every-vibe',
    'dress-for-body-shape-guide': 'dressing-for-body-shape-guide',
    'nordstrom-vs-asos-professional-women': 'nordstrom-vs-asos-professional-women',
    'what-to-wear-to-wedding-2026': 'wedding-guest-outfit-2026',
    'best-jeans-for-women-2026': 'best-jeans-for-women-2026',
    'spring-workwear-capsule-2026': 'spring-workwear-capsule-2026',
    'work-outfits-that-mean-business': 'work-outfits-that-mean-business',
    'what-to-wear-date-night': 'what-to-wear-date-night',
    'best-jeans-every-body-type': 'best-jeans-every-body-type',
    'spring-fashion-trends-2026': 'spring-fashion-trends-2026',
    'best-work-bags-under-100': 'best-work-bags-under-100',
    'affordable-fashion-brands-guide': 'affordable-fashion-brands-guide',
    'how-to-build-minimalist-wardrobe': 'how-to-build-minimalist-wardrobe',
    'best-white-sneakers-women-2026': 'best-white-sneakers-women-2026',
    'professional-outfits-women-2026': 'professional-outfits-women-2026',
    'stitch-fix-vs-personal-stylist': 'stitch-fix-vs-personal-stylist',
    'best-affordable-blazers-under-100': 'best-affordable-blazers-under-100',
    'what-to-wear-job-interview-2026': 'what-to-wear-job-interview-2026',
    'spring-2026-must-have-items': 'spring-2026-must-have-items',
    'trending-spring-accessories-2026': 'trending-spring-accessories-2026',
    'best-running-shoes-women-2026': 'best-running-shoes-women-2026',
    'best-laptop-bags-women-2026': 'best-laptop-bags-women-2026',
    'best-sunglasses-face-shape-2026': 'best-sunglasses-face-shape-2026',
    'amazon-fashion-finds-under-30': 'amazon-fashion-finds-under-30',
    'summer-fashion-essentials-2026': 'summer-fashion-essentials-2026',
    'plus-size-fashion-guide-2026': 'plus-size-fashion-guide-2026',
    'fall-fashion-trends-2026': 'fall-fashion-trends-2026',
    'petite-fashion-guide-2026': 'petite-fashion-guide-2026',
    'amazon-prime-fashion-deals-2026': 'amazon-prime-fashion-deals-2026',
    'how-to-dress-for-your-age-50s': 'how-to-dress-in-your-50s',
    'best-gym-workout-outfits-women-2026': 'best-gym-outfits-women-2026',
    'vacation-outfits-women-2026': 'vacation-outfits-women-2026',
    'editors-choice-fashion-trends-2026': 'editors-choice-fashion-trends-2026',
    'how-to-style-oversized-blazer': 'how-to-style-oversized-blazer',
    'best-dresses-for-wedding-guest-under-100': 'best-wedding-guest-dresses-under-100',
    'winter-fashion-essentials-2026': 'winter-fashion-essentials-2026',
    'business-casual-outfits-women-2026': 'business-casual-outfits-women-2026',
    'color-theory-fashion-guide': 'color-theory-fashion-guide',
    'brunch-outfits-women-2026': 'best-brunch-outfits-women-2026',
    'best-ankle-boots-women-2026': 'best-ankle-boots-women-2026',
    'festival-outfits-women-2026': 'festival-outfits-women-2026',
    'korean-fashion-trends-2026': 'korean-fashion-trends-2026',
    'hourglass-figure-style-guide': 'hourglass-figure-style-guide',
    'smart-casual-outfits-women-2026': 'smart-casual-outfits-women-2026',
    'best-accessories-under-50-2026': 'best-accessories-under-50-2026',
    'quiet-luxury-style-guide-2026': 'quiet-luxury-style-guide-2026',
    'how-to-style-leather-jacket-women-2026': 'how-to-style-leather-jacket-women',
    'dark-feminine-aesthetic-guide-2026': 'dark-feminine-aesthetic-guide-2026',
    'dopamine-dressing-bold-color-outfits-2026': 'dopamine-dressing-bold-color-outfits',
    'winter-to-spring-transition-outfits-2026': 'winter-to-spring-transition-outfits',
    'valentines-day-outfit-ideas-2026': 'valentines-day-outfit-ideas-2026',
    'summer-date-night-outfits-2026': 'summer-date-night-outfits-2026',
    'casual-date-night-outfits-2026': 'casual-date-night-outfits-2026',
    'anniversary-dinner-outfit-ideas-2026': 'anniversary-dinner-outfit-ideas',
    'trench-coat-outfits-styling-guide-2026': 'trench-coat-outfits-styling-guide',
}

# =========================================================
# PRODUCT NAME -> SVG filename mapping
# =========================================================
def product_svg_path(name):
    return f'/images/products/{slugify(name)}.svg'

def guide_svg_path(guide_slug):
    svg_name = GUIDE_SLUG_TO_SVG.get(guide_slug, slugify(guide_slug))
    return f'/images/guides/{svg_name}.svg'

# =========================================================
# BLOG IMAGE MAPPING
# =========================================================
BLOG_IMAGE_MAP = {
    'quiet-luxury-guide': '/images/blog/quiet-luxury-guide.svg',
    'spring-color-trends': '/images/blog/spring-color-trends-2026.svg',
    'capsule-wardrobe-mistakes': '/images/blog/capsule-wardrobe-mistakes.svg',
    'nordstrom-vs-asos': '/images/blog/nordstrom-vs-asos-comparison.svg',
    'jeans-buying-guide': '/images/blog/best-jeans-buying-guide.svg',
    'body-shape-dressing': '/images/blog/body-shape-dressing-guide.svg',
    'amazon-fashion-haul': '/images/blog/amazon-fashion-haul-under-30.svg',
    'spring-workwear': '/images/blog/spring-workwear-capsule.svg',
    'interview-outfits': '/images/blog/interview-outfits-guide.svg',
    'summer-preview': '/images/blog/summer-2026-fashion-preview.svg',
    'sunglasses-face-shape': '/images/blog/sunglasses-face-shape-guide.svg',
    'stitch-fix-review': '/images/blog/stitch-fix-review-after-6-months.svg',
}

# =========================================================
# Process guides-data.ts
# =========================================================
def process_guides_data():
    filepath = os.path.join(BASE_DIR, 'src', 'lib', 'guides-data.ts')
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find current guide slug context for guide hero images
    # Strategy: replace Unsplash URLs based on context
    # 1. For guide hero images: match slug then replace the image URL
    # 2. For product images: match product name then replace the image URL

    lines = content.split('\n')
    new_lines = []
    current_slug = None
    current_product_name = None
    replacements = 0

    for i, line in enumerate(lines):
        # Track current guide slug
        slug_match = re.search(r"slug:\s*'([^']+)'", line)
        if slug_match:
            current_slug = slug_match.group(1)

        # Track current product name
        name_match = re.search(r"name:\s*'([^']+)'", line)
        if name_match:
            current_product_name = name_match.group(1)

        # Replace unsplash URLs
        if 'images.unsplash.com' in line:
            unsplash_match = re.search(r"'(https://images\.unsplash\.com/[^']+)'", line)
            if unsplash_match:
                old_url = unsplash_match.group(1)
                # Determine if this is a guide hero image or product image
                # Guide hero images have w=600&h=400 or similar large sizes
                # Product images have w=200&h=200
                if 'w=200' in old_url or 'w=200' in line:
                    # This is a product image - use product name
                    if current_product_name:
                        new_url = product_svg_path(current_product_name)
                        line = line.replace(old_url, new_url)
                        replacements += 1
                elif 'w=600' in old_url or 'w=400' in old_url:
                    # This is a guide hero image
                    if current_slug and current_slug in GUIDE_SLUG_TO_SVG:
                        new_url = guide_svg_path(current_slug)
                        line = line.replace(old_url, new_url)
                        replacements += 1
                    else:
                        # Fallback: use guide slug directly
                        if current_slug:
                            new_url = f'/images/guides/{slugify(current_slug[:60])}.svg'
                            line = line.replace(old_url, new_url)
                            replacements += 1

        new_lines.append(line)

    new_content = '\n'.join(new_lines)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"guides-data.ts: {replacements} replacements")
    return replacements

# =========================================================
# Process page.tsx (homepage)
# =========================================================
def process_page_tsx():
    filepath = os.path.join(BASE_DIR, 'src', 'app', 'page.tsx')
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    replacements = 0
    # Pinterest pins mapping
    pin_map = {
        'photo-1487222477894-8943e31ef7b2': '/images/guides/pin-capsule-wardrobe-guide-2026.svg',
        'photo-1485968579580-b6d095142e6e': '/images/guides/pin-casual-outfits-that-look-expensive.svg',
        'photo-1492707892479-7bc8d5a4ee93': '/images/guides/pin-first-date-outfits.svg',
        'photo-1515886657613-9f3515b0c78f': '/images/guides/pin-spring-fashion-trends.svg',
    }

    for photo_id, svg_path in pin_map.items():
        pattern = f"https://images.unsplash.com/{photo_id}?w=400&h=600&fit=crop"
        if pattern in content:
            content = content.replace(pattern, svg_path)
            replacements += 1

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"page.tsx: {replacements} replacements")
    return replacements

# =========================================================
# Process blog/page.tsx
# =========================================================
def process_blog_page():
    filepath = os.path.join(BASE_DIR, 'src', 'app', 'blog', 'page.tsx')
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Map blog slugs to Unsplash photo IDs in order
    blog_unsplash_map = {
        'photo-1487222477894-8943e31ef7b2?w=600&h=400&fit=crop': '/images/blog/quiet-luxury-guide.svg',
        'photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop': '/images/blog/spring-color-trends-2026.svg',
        'photo-1558171813-4c088753af8f?w=600&h=400&fit=crop': '/images/blog/capsule-wardrobe-mistakes.svg',
        'photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop': '/images/blog/nordstrom-vs-asos-comparison.svg',
        'photo-1541099649105-f69ad21f3246?w=600&h=400&fit=crop': '/images/blog/best-jeans-buying-guide.svg',
        'photo-1483985988355-763728e1935b?w=600&h=400&fit=crop': '/images/blog/body-shape-dressing-guide.svg',
        'photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop': '/images/blog/spring-workwear-capsule.svg',
        'photo-1560264280-88b68371db39?w=600&h=400&fit=crop': '/images/blog/interview-outfits-guide.svg',
        'photo-1469504512102-900f29606341?w=600&h=400&fit=crop': '/images/blog/summer-2026-fashion-preview.svg',
        'photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop': '/images/blog/sunglasses-face-shape-guide.svg',
        'photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop': '/images/blog/stitch-fix-review-after-6-months.svg',
    }

    replacements = 0
    for unsplash_suffix, svg_path in blog_unsplash_map.items():
        old = f'https://images.unsplash.com/{unsplash_suffix}'
        if old in content:
            content = content.replace(old, svg_path)
            replacements += 1

    # Handle the duplicate amazon-fashion-haul which also uses photo-1483985988355
    # It comes second in the file so the first replacement would have caught it
    # We need to check: the second occurrence of 'photo-1483985988355' maps to amazon-fashion-haul
    # Since both body-shape and amazon-fashion use the same unsplash ID, we handle by position
    # Actually the simple replace catches both. Let's handle the second one separately:
    if '/images/blog/body-shape-dressing-guide.svg' in content:
        # Find the second occurrence and replace it with amazon-fashion-haul
        idx = content.find('/images/blog/body-shape-dressing-guide.svg')
        if idx >= 0:
            idx2 = content.find('/images/blog/body-shape-dressing-guide.svg', idx + 1)
            if idx2 >= 0:
                content = content[:idx2] + '/images/blog/amazon-fashion-haul-under-30.svg' + content[idx2 + len('/images/blog/body-shape-dressing-guide.svg'):]
                replacements += 1

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"blog/page.tsx: {replacements} replacements")
    return replacements

# =========================================================
# Process blog/[slug]/page.tsx
# =========================================================
def process_blog_slug_page():
    filepath = os.path.join(BASE_DIR, 'src', 'app', 'blog', '[slug]', 'page.tsx')
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    blog_detail_map = {
        'photo-1487222477894-8943e31ef7b2?w=800&h=500&fit=crop': '/images/blog/quiet-luxury-guide.svg',
        'photo-1515886657613-9f3515b0c78f?w=800&h=500&fit=crop': '/images/blog/spring-color-trends-2026.svg',
        'photo-1558171813-4c088753af8f?w=800&h=500&fit=crop': '/images/blog/capsule-wardrobe-mistakes.svg',
    }

    replacements = 0
    for unsplash_suffix, svg_path in blog_detail_map.items():
        old = f'https://images.unsplash.com/{unsplash_suffix}'
        if old in content:
            content = content.replace(old, svg_path)
            replacements += 1

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"blog/[slug]/page.tsx: {replacements} replacements")
    return replacements

# =========================================================
# Main
# =========================================================
def main():
    total = 0
    total += process_guides_data()
    total += process_page_tsx()
    total += process_blog_page()
    total += process_blog_slug_page()
    print(f"\nTotal replacements: {total}")

    # Verify no unsplash remains
    print("\n--- Verification ---")
    for subdir in ['lib', 'app']:
        dirpath = os.path.join(BASE_DIR, 'src', subdir)
        for root, dirs, files in os.walk(dirpath):
            for fname in files:
                if fname.endswith(('.ts', '.tsx')) and not fname.endswith('.bak'):
                    fpath = os.path.join(root, fname)
                    with open(fpath, 'r', encoding='utf-8') as f:
                        text = f.read()
                    unsplash_count = text.count('unsplash')
                    pexels_count = text.count('pexels')
                    if unsplash_count > 0 or pexels_count > 0:
                        print(f"  WARNING: {fpath} still has {unsplash_count} unsplash, {pexels_count} pexels references")
                    else:
                        print(f"  OK: {fpath}")

if __name__ == '__main__':
    main()
