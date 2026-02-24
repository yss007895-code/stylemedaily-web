export interface StyleGuide {
  slug: string;
  title: string;
  category: string;
  description: string;
  readTime: string;
  date: string;
  tag: string;
  emoji: string;
  image?: string;
  affiliateProducts?: AffiliateProduct[];
}

export interface AffiliateProduct {
  name: string;
  brand: string;
  price: string;
  url: string;
  tag?: string;
  image?: string;
}

export const categories = [
  { slug: 'all', name: 'All Styles', icon: '✨' },
  { slug: 'workwear', name: 'Workwear', icon: '👔' },
  { slug: 'casual', name: 'Casual Chic', icon: '👗' },
  { slug: 'date-night', name: 'Date Night', icon: '💃' },
  { slug: 'seasonal', name: 'Seasonal', icon: '🌸' },
  { slug: 'body-type', name: 'Body Types', icon: '💖' },
  { slug: 'budget', name: 'On a Budget', icon: '💰' },
  { slug: 'occasion', name: 'Occasions', icon: '🎉' },
];

export const guides: StyleGuide[] = [
  {
    slug: 'the-coastal-grandmother-aesthetic-your-ultimate-style-guide',
    title: 'The Coastal Grandmother Aesthetic: Your Ultimate Style Guide',
    category: 'Style Guide',
    description: 'Ready to enter your coastal grandmother era? Our Gen Z-approved style guide breaks down the viral TikTok trend with easy outfit ideas and tips on how to wear linen, neutrals, and more.',
    readTime: '10 min',
    date: '2026-02-24',
    tag: 'CoastalGrandmother',
    emoji: '🐚',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop',
    affiliateProducts: [],
  },
  {
    slug: 'y2k-fashion-revival-ultimate-guide-2026',
    title: 'The Ultimate Y2K Fashion Revival Guide (2026): How to Rock Low-Rise Jeans & Baby Tees',
    category: 'casual',
    description: 'Ready for the Y2K comeback? Our 2026 guide shows you how to style low-rise jeans, butterfly clips, and more. Shop the best Y2K looks on Amazon now!',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '👗',
    image: 'https://stylemedaily.org/images/guides/y2k-fashion-revival-ultimate-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Levi\'s Women\'s Low Pro Jeans', brand: 'Amazon', price: '$79', url: 'https://amzn.to/example', tag: 'Best Low-Rise', image: 'https://stylemedaily.org/images/guides/y2k-fashion-revival-ultimate-guide-2026-prod0.jpg' },
      { name: 'Juicy Couture Women\'s Classic Velour Hoodie', brand: 'Amazon', price: '$89', url: 'https://amzn.to/example', tag: 'Iconic Throwback', image: 'https://stylemedaily.org/images/guides/y2k-fashion-revival-ultimate-guide-2026-prod1.jpg' },
      { name: 'JW PEI Women\'s Eva Shoulder Handbag', brand: 'Amazon', price: '$59', url: 'https://amzn.to/example', tag: 'Best Accessory', image: 'https://stylemedaily.org/images/guides/y2k-fashion-revival-ultimate-guide-2026-prod2.jpg' },
      { name: 'Steve Madden Women\'s Slinky30 Platform Sandal', brand: 'Amazon', price: '$99', url: 'https://amzn.to/example', tag: 'Best Footwear', image: 'https://stylemedaily.org/images/guides/y2k-fashion-revival-ultimate-guide-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'quiet-luxury-essentials-investment-pieces-2026',
    title: 'Quiet Luxury Essentials: Your Ultimate Guide to Timeless Elegance & Investment Pieces',
    category: 'casual',
    description: 'Unlock the secret to timeless style. Our 2026 guide to quiet luxury essentials reveals the key pieces you need for an effortlessly elegant wardrobe.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '👗',
    image: 'https://stylemedaily.org/images/guides/quiet-luxury-essentials-investment-pieces-2026-hero.jpg',
    affiliateProducts: [
      { name: 'The Drop Women\'s Noa Trench Coat', brand: 'Amazon', price: '$99', url: 'https://amzn.to/example', tag: 'Best Overall', image: 'https://stylemedaily.org/images/guides/quiet-luxury-essentials-investment-pieces-2026-prod0.jpg' },
      { name: 'State Cashmere Women\'s 100% Pure Cashmere Crewneck Sweater', brand: 'Amazon', price: '$125', url: 'https://amzn.to/example', tag: 'Top Rated', image: 'https://stylemedaily.org/images/guides/quiet-luxury-essentials-investment-pieces-2026-prod1.jpg' },
      { name: 'BOSTANTEN Women\'s Leather Tote Bag', brand: 'Amazon', price: '$119', url: 'https://amzn.to/example', tag: 'Best for Work', image: 'https://stylemedaily.org/images/guides/quiet-luxury-essentials-investment-pieces-2026-prod2.jpg' },
      { name: 'The Drop Women\'s Ian Mid Rise Relaxed-Fit Wide Leg Trousers', brand: 'Amazon', price: '$54', url: 'https://amzn.to/example', tag: 'Best Value', image: 'https://stylemedaily.org/images/guides/quiet-luxury-essentials-investment-pieces-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'balletcore-style-guide-how-to-dress-like-a-ballerina-off-duty-2026',
    title: 'Balletcore Style Guide 2026: How to Master the Viral Ballerina Trend',
    category: 'casual',
    description: 'Unlock the secrets to the dreamy balletcore aesthetic. Our 2026 guide shows you how to style wrap tops, tulle skirts, and ballet flats like a pro.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '👗',
    image: 'https://stylemedaily.org/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-off-duty-2026-hero.jpg',
    affiliateProducts: [
      { name: 'DreamPairs Women\'s Classic Slip-On Ballet Flats', brand: 'Amazon', price: '$28', url: 'https://amzn.to/example', tag: 'Best Overall', image: 'https://stylemedaily.org/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-off-duty-2026-prod0.jpg' },
      { name: 'MEROKEETY Women\'s Ribbed Long Sleeve Wrap Sweater', brand: 'Amazon', price: '$39', url: 'https://amzn.to/example', tag: 'Top Layer', image: 'https://stylemedaily.org/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-off-duty-2026-prod1.jpg' },
      { name: 'MANGOPOP Women\'s Scoop Neck Bodysuit', brand: 'Amazon', price: '$25', url: 'https://amzn.to/example', tag: 'Essential Base', image: 'https://stylemedaily.org/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-off-duty-2026-prod2.jpg' },
      { name: 'Belle Poque Women\'s A-Line Layered Tulle Midi Skirt', brand: 'Amazon', price: '$35', url: 'https://amzn.to/example', tag: 'Statement Piece', image: 'https://stylemedaily.org/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-off-duty-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'gorpcore-womens-style-guide-2026',
    title: 'Gorpcore for Women: The Ultimate 2026 Guide to Styling Functional Fashion',
    category: 'casual',
    description: 'Unlock the Gorpcore trend! Our guide shows you how to style puffers, cargos, and hiking boots for a chic, functional look. Get the best picks now.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '👗',
    image: 'https://stylemedaily.org/images/guides/gorpcore-womens-style-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'The North Face Women\'s 1996 Retro Nuptse Jacket', brand: 'The North Face', price: '$330', url: 'https://amzn.to/example', tag: 'Best Overall', image: 'https://stylemedaily.org/images/guides/gorpcore-womens-style-guide-2026-prod0.jpg' },
      { name: 'Dickies Women\'s Relaxed Fit Straight Leg Cargo Pants', brand: 'Dickies', price: '$45', url: 'https://amzn.to/example', tag: 'Best Value', image: 'https://stylemedaily.org/images/guides/gorpcore-womens-style-guide-2026-prod1.jpg' },
      { name: 'Salomon Women\'s XT-6 Trail Running Shoes', brand: 'Salomon', price: '$190', url: 'https://amzn.to/example', tag: 'Top Footwear', image: 'https://stylemedaily.org/images/guides/gorpcore-womens-style-guide-2026-prod2.jpg' },
      { name: 'Carhartt Knit Cuffed Beanie A18', brand: 'Carhartt', price: '$20', url: 'https://amzn.to/example', tag: 'Essential Accessory', image: 'https://stylemedaily.org/images/guides/gorpcore-womens-style-guide-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'coquette-aesthetic-2026-ultimate-guide',
    title: 'The Coquette Aesthetic 2026: Your Ultimate Guide to Mastering the Viral Trend',
    category: 'casual',
    description: 'Master the 2026 Coquette Aesthetic! Our guide covers key pieces, outfits, and the best Amazon finds to nail this hyper-feminine, romantic look.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '👗',
    image: 'https://stylemedaily.org/images/guides/coquette-aesthetic-2026-ultimate-guide-hero.jpg',
    affiliateProducts: [
      { name: 'Simplee Women\'s Lace Trim Satin Cami Slip Dress', brand: 'Amazon', price: '$32', url: 'https://amzn.to/example', tag: 'Best Overall', image: 'https://stylemedaily.org/images/guides/coquette-aesthetic-2026-ultimate-guide-prod0.jpg' },
      { name: 'Offray Grosgrain Craft Ribbon, 3/8-Inch, 18-Yard Spool, Light Pink', brand: 'Amazon', price: '$8', url: 'https://amzn.to/example', tag: 'Essential Accessory', image: 'https://stylemedaily.org/images/guides/coquette-aesthetic-2026-ultimate-guide-prod1.jpg' },
      { name: 'DREAM PAIRS Women\'s Ankle Strap Mary Jane Platform Pumps', brand: 'Amazon', price: '$45', url: 'https://amzn.to/example', tag: 'Perfect Footwear', image: 'https://stylemedaily.org/images/guides/coquette-aesthetic-2026-ultimate-guide-prod2.jpg' },
      { name: 'Grace Karin Women\'s Ruffle Trim Knit Cardigan Sweater', brand: 'Amazon', price: '$38', url: 'https://amzn.to/example', tag: 'Cozy Layer', image: 'https://stylemedaily.org/images/guides/coquette-aesthetic-2026-ultimate-guide-prod3.jpg' },
    ],
  },
  {
    slug: 'mob-wife-glamour-aesthetic-guide-2026',
    title: 'The Ultimate Mob Wife Glamour Guide: Master the Aesthetic in 2026',
    category: 'date-night',
    description: 'Unlock the mob wife aesthetic! Our 2026 guide shows you how to rock faux fur, bold gold jewelry, and leopard print for ultimate glamour and confidence.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '👗',
    image: 'https://stylemedaily.org/images/guides/mob-wife-glamour-aesthetic-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Bellivera Women\'s Faux Fur Shaggy Winter Coat', brand: 'Amazon', price: '$89', url: 'https://amzn.to/example', tag: 'Best Overall', image: 'https://stylemedaily.org/images/guides/mob-wife-glamour-aesthetic-guide-2026-prod0.jpg' },
      { name: 'SPANX Faux Leather Leggings for Women', brand: 'Amazon', price: '$98', url: 'https://amzn.to/example', tag: 'Sleek Base', image: 'https://stylemedaily.org/images/guides/mob-wife-glamour-aesthetic-guide-2026-prod1.jpg' },
      { name: 'PAVOI 14K Gold Plated Chunky Open Hoops', brand: 'Amazon', price: '$14', url: 'https://amzn.to/example', tag: 'Statement Jewelry', image: 'https://stylemedaily.org/images/guides/mob-wife-glamour-aesthetic-guide-2026-prod2.jpg' },
      { name: 'Floerns Women\'s V Neck Long Sleeve Leopard Print Bodycon Dress', brand: 'Amazon', price: '$38', url: 'https://amzn.to/example', tag: 'Iconic Print', image: 'https://stylemedaily.org/images/guides/mob-wife-glamour-aesthetic-guide-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'old-money-summer-aesthetic-guide-2026',
    title: 'The Old Money Summer Guide: 12 Key Pieces for Effortless Quiet Luxury',
    category: 'casual',
    description: 'Unlock the secrets to the Old Money aesthetic this summer. Our expert guide reveals the key pieces and timeless looks to master quiet luxury. Shop now.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '👗',
    image: 'https://stylemedaily.org/images/guides/old-money-summer-aesthetic-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'The Drop Women\'s Britt Tiered Maxi Tent Dress', brand: 'The Drop', price: '$59', url: 'https://amzn.to/example', tag: 'Best Overall', image: 'https://stylemedaily.org/images/guides/old-money-summer-aesthetic-guide-2026-prod0.jpg' },
      { name: 'Amazon Essentials Women\'s Linen Blend Drawstring Wide Leg Pant', brand: 'Amazon', price: '$34', url: 'https://amzn.to/example', tag: 'Linen Essential', image: 'https://stylemedaily.org/images/guides/old-money-summer-aesthetic-guide-2026-prod1.jpg' },
      { name: 'JW PEI Women\'s Eva Shoulder Handbag', brand: 'JW PEI', price: '$58', url: 'https://amzn.to/example', tag: 'Must-Have Accessory', image: 'https://stylemedaily.org/images/guides/old-money-summer-aesthetic-guide-2026-prod2.jpg' },
      { name: 'CUSHIONAIRE Women\'s Lane Cork Footbed Sandal with +Comfort', brand: 'CUSHIONAIRE', price: '$29', url: 'https://amzn.to/example', tag: 'Timeless Footwear', image: 'https://stylemedaily.org/images/guides/old-money-summer-aesthetic-guide-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'how-to-master-the-clean-girl-aesthetic-your-ultimate-guide-2026',
    title: 'The Ultimate Clean Girl Aesthetic Guide: 10 Must-Have Pieces for Effortless Style in 2026',
    category: 'casual',
    description: 'Unlock the secrets to the viral Clean Girl Aesthetic. Get the minimalist, polished look with our expert guide to essential fashion, beauty, and accessories.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '👗',
    image: 'https://stylemedaily.org/images/guides/how-to-master-the-clean-girl-aesthetic-your-ultimate-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'The Drop Women\'s Blake Long-Sleeve T-Shirt', brand: 'Amazon', price: '$25', url: 'https://amzn.to/example', tag: 'Best Overall', image: 'https://stylemedaily.org/images/guides/how-to-master-the-clean-girl-aesthetic-your-ultimate-guide-2026-prod0.jpg' },
      { name: 'The Drop Women\'s Sia Loose-Fit High-Waist Wide Leg Trouser Pant', brand: 'Amazon', price: '$55', url: 'https://amzn.to/example', tag: 'Essential Bottoms', image: 'https://stylemedaily.org/images/guides/how-to-master-the-clean-girl-aesthetic-your-ultimate-guide-2026-prod1.jpg' },
      { name: 'PAVOI 14K Gold Plated Lightweight Chunky Open Hoops', brand: 'Amazon', price: '$14', url: 'https://amzn.to/example', tag: 'Perfect Accessory', image: 'https://stylemedaily.org/images/guides/how-to-master-the-clean-girl-aesthetic-your-ultimate-guide-2026-prod2.jpg' },
      { name: 'TOCESS Big Hair Claw Clips for Thick Hair', brand: 'Amazon', price: '$10', url: 'https://amzn.to/example', tag: 'Must-Have Hair', image: 'https://stylemedaily.org/images/guides/how-to-master-the-clean-girl-aesthetic-your-ultimate-guide-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'eclectic-grandpa-chic-style-guide-2026',
    title: 'How to Master Eclectic Grandpa Chic in 2026 (Without Raiding Grandpa\'s Closet)',
    category: 'casual',
    description: 'Unlock the secrets to Eclectic Grandpa Chic! Our 2026 guide shows you how to style cardigans, loafers, and vintage finds for a modern, cool look.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '👗',
    image: 'https://stylemedaily.org/images/guides/eclectic-grandpa-chic-style-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'The KENSINGTON Men\'s Chunky Knit Argyle Cardigan Sweater', brand: 'Amazon', price: '$48', url: 'https://amzn.to/example', tag: 'Best Overall', image: 'https://stylemedaily.org/images/guides/eclectic-grandpa-chic-style-guide-2026-prod0.jpg' },
      { name: 'DREAM PAIRS Women\'s Classic Lug Sole Penny Loafers', brand: 'Amazon', price: '$39', url: 'https://amzn.to/example', tag: 'Top Footwear', image: 'https://stylemedaily.org/images/guides/eclectic-grandpa-chic-style-guide-2026-prod1.jpg' },
      { name: 'GRACE KARIN Women\'s High Waisted Pleated Trousers with Pockets', brand: 'Amazon', price: '$35', url: 'https://amzn.to/example', tag: 'Must-Have Pant', image: 'https://stylemedaily.org/images/guides/eclectic-grandpa-chic-style-guide-2026-prod2.jpg' },
      { name: 'HOTSOX Men\'s Famous Artist Series Novelty Crew Socks', brand: 'Amazon', price: '$15', url: 'https://amzn.to/example', tag: 'Essential Accessory', image: 'https://stylemedaily.org/images/guides/eclectic-grandpa-chic-style-guide-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'office-siren-corporate-wear-guide-2026',
    title: 'Office Siren Aesthetic: Your Ultimate Guide to Nailing the Corporate Wear Trend in 2026',
    category: 'workwear',
    description: 'Unlock the office siren trend. Our 2026 guide shows you how to master corporate wear with key pieces, styling tips, and the best Amazon finds. Look sharp.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '👗',
    image: 'https://stylemedaily.org/images/guides/office-siren-corporate-wear-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'GRACE KARIN Women\'s Pencil Skirt High Waist Stretchy Bodycon Skirt', brand: 'Amazon', price: '$32', url: 'https://amzn.to/example', tag: 'Best Overall', image: 'https://stylemedaily.org/images/guides/office-siren-corporate-wear-guide-2026-prod0.jpg' },
      { name: 'SOJOS Retro 90s Rectangle Sunglasses for Women Men Narrow Small Frame SJ2107', brand: 'Amazon', price: '$15', url: 'https://amzn.to/example', tag: 'Key Accessory', image: 'https://stylemedaily.org/images/guides/office-siren-corporate-wear-guide-2026-prod1.jpg' },
      { name: 'Cicy Bell Women\'s Casual Blazer Open Front Long Sleeve Work Office Jacket', brand: 'Amazon', price: '$55', url: 'https://amzn.to/example', tag: 'Top Layer', image: 'https://stylemedaily.org/images/guides/office-siren-corporate-wear-guide-2026-prod2.jpg' },
      { name: 'MANGOPOP Women\'s Mock Turtle Neck Long Sleeve Bodysuit', brand: 'Amazon', price: '$25', url: 'https://amzn.to/example', tag: 'Perfect Base', image: 'https://stylemedaily.org/images/guides/office-siren-corporate-wear-guide-2026-prod3.jpg' },
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find(g => g.slug === slug);
}

export function getGuidesByCategory(category: string) {
  if (category === 'all') return guides;
  return guides.filter(g => g.category === category);
}

/** Extract all products from all guides, deduplicated by name+brand */
export function getAllProducts(): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string; category: string })[] {
  const seen = new Set<string>();
  const products: (AffiliateProduct & { fromGuide: string; fromGuideSlug: string; category: string })[] = [];
  for (const guide of guides) {
    if (!guide.affiliateProducts) continue;
    for (const p of guide.affiliateProducts) {
      const key = `${p.name}|${p.brand}`;
      if (seen.has(key)) continue;
      seen.add(key);
      products.push({ ...p, fromGuide: guide.title, fromGuideSlug: guide.slug, category: guide.category });
    }
  }
  return products;
}

/** Get featured products based on tags like Editor Pick, Best Overall, etc. */
export function getFeaturedProducts(count: number = 8): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string; category: string })[] {
  const all = getAllProducts();
  const priorityTags = ['Editor Pick', 'Best Overall', 'Best Value', 'Best Seller', 'Trend Pick', 'Must Have', '#1 Must Have', 'Top Pick'];
  const featured = all.filter(p => p.tag && priorityTags.includes(p.tag));
  const rest = all.filter(p => !p.tag || !priorityTags.includes(p.tag));
  return [...featured, ...rest].slice(0, count);
}

/** Get products filtered by guide category */
export function getProductsByCategory(category: string, count: number = 8): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string; category: string })[] {
  const seen = new Set<string>();
  const products: (AffiliateProduct & { fromGuide: string; fromGuideSlug: string; category: string })[] = [];
  const categoryGuides = category === 'all' ? guides : guides.filter(g => g.category === category);
  for (const guide of categoryGuides) {
    if (!guide.affiliateProducts) continue;
    for (const p of guide.affiliateProducts) {
      const key = `${p.name}|${p.brand}`;
      if (seen.has(key)) continue;
      seen.add(key);
      products.push({ ...p, fromGuide: guide.title, fromGuideSlug: guide.slug, category: guide.category });
    }
  }
  return products.slice(0, count);
}

/** Category mapping for shop tabs */
export const shopCategories = [
  { slug: 'all', name: 'All' },
  { slug: 'workwear', name: 'Workwear' },
  { slug: 'casual', name: 'Casual' },
  { slug: 'date-night', name: 'Date Night' },
  { slug: 'seasonal', name: 'Seasonal' },
  { slug: 'budget', name: 'Budget Finds' },
];
