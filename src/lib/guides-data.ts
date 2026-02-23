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

export const guides: StyleGuide[] = [  {
    slug: 'y2k-fashion-revival-outfit-guide-2026',
    title: 'The Ultimate Y2K Fashion Revival Guide: 2026\'s Must-Have Outfits & Where to Buy Them',
    category: 'casual',
    description: 'Ready to rock the Y2K trend? Our 2026 guide reveals the top Y2K fashion revival outfits, from low-rise jeans to baby tees. Shop the look now!',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '👗',
    image: '/images/guides/y2k-fashion-revival-outfit-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Floerns Women\'s Low Rise Flare Leg Denim Pants', brand: 'Amazon', price: '$45', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/y2k-fashion-revival-outfit-guide-2026-prod0.jpg' },
      { name: 'JW PEI Women\'s Gabbi Ruched Hobo Handbag', brand: 'Amazon', price: '$80', url: 'https://amzn.to/example', tag: 'Best Accessory', image: '/images/guides/y2k-fashion-revival-outfit-guide-2026-prod1.jpg' },
      { name: 'Lyaner Women\'s Tie Front Cropped Cardigan Sweater', brand: 'Amazon', price: '$28', url: 'https://amzn.to/example', tag: 'Best Top', image: '/images/guides/y2k-fashion-revival-outfit-guide-2026-prod2.jpg' },
      { name: 'Soda Pioneer Women\'s Lug Sole Chunky Heel Platform Sandals', brand: 'Amazon', price: '$35', url: 'https://amzn.to/example', tag: 'Best Footwear', image: '/images/guides/y2k-fashion-revival-outfit-guide-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'quiet-luxury-essentials-2026',
    title: 'The Ultimate Quiet Luxury Guide: 12 Essentials to Look Expensive in 2026',
    category: 'casual',
    description: 'Unlock the secrets to \'quiet luxury\'. Discover timeless, high-quality essentials that create an effortlessly chic and expensive look without the logos.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '👗',
    image: '/images/guides/quiet-luxury-essentials-2026-hero.jpg',
    affiliateProducts: [
      { name: 'State Cashmere The Crewneck Sweater 100% Pure Cashmere', brand: 'State Cashmere', price: '$125', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/quiet-luxury-essentials-2026-prod0.jpg' },
      { name: 'London Fog Women\'s Double-Breasted Trench Coat with Belt', brand: 'London Fog', price: '$150', url: 'https://amzn.to/example', tag: 'Best Trench', image: '/images/guides/quiet-luxury-essentials-2026-prod1.jpg' },
      { name: 'The Drop Women\'s Kiki Loose-Fit High-Waist Pleated Pant', brand: 'The Drop', price: '$60', url: 'https://amzn.to/example', tag: 'Best Value', image: '/images/guides/quiet-luxury-essentials-2026-prod2.jpg' },
      { name: 'Fossil Women\'s Rachel Leather Satchel Purse Handbag', brand: 'Fossil', price: '$180', url: 'https://amzn.to/example', tag: 'Best Accessory', image: '/images/guides/quiet-luxury-essentials-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'balletcore-style-guide-how-to-dress-like-a-ballerina-2026',
    title: 'Balletcore Style Guide 2026: How to Master the Viral Ballerina Aesthetic (Effortlessly Chic!)',
    category: 'casual',
    description: 'Unlock the secrets to the viral Balletcore trend. Our 2026 style guide shows you how to get the graceful, chic ballerina aesthetic with key pieces.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '👗',
    image: '/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Dream Pairs Women\'s Sole-Shine Rhinestone Ankle Strap Ballet Flats', brand: 'Amazon', price: '$32', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-2026-prod0.jpg' },
      { name: 'The Drop Women\'s Noa Faux-Wrap Long Sleeve Top', brand: 'Amazon', price: '$39', url: 'https://amzn.to/example', tag: 'Essential Top', image: '/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-2026-prod1.jpg' },
      { name: 'WDPL Women\'s A-Line Layered Tulle Midi Skirt', brand: 'Amazon', price: '$28', url: 'https://amzn.to/example', tag: 'Statement Piece', image: '/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-2026-prod2.jpg' },
      { name: 'Leotruny Women\'s 80s Ribbed Knit Leg Warmers', brand: 'Amazon', price: '$15', url: 'https://amzn.to/example', tag: 'Cozy Accessory', image: '/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'gorpcore-for-women-style-guide-2026',
    title: 'Gorpcore for Women: The Ultimate Guide to Nailing The Outdoor Trend in 2026',
    category: 'casual',
    description: 'Unlock the Gorpcore aesthetic! Our guide shows how to style functional outdoor gear like puffers and cargo pants for an effortlessly cool, urban look.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '🏔️',
    image: '/images/guides/gorpcore-for-women-style-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'The North Face Women\'s 1996 Retro Nuptse Jacket', brand: 'The North Face', price: '$330', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/gorpcore-for-women-style-guide-2026-prod0.jpg' },
      { name: 'Patagonia Women\'s Classic Retro-X Fleece Jacket', brand: 'Patagonia', price: '$229', url: 'https://amzn.to/example', tag: 'Essential Layer', image: '/images/guides/gorpcore-for-women-style-guide-2026-prod1.jpg' },
      { name: 'Salomon XT-6 Unisex Trail Running Shoes', brand: 'Salomon', price: '$190', url: 'https://amzn.to/example', tag: 'Must-Have Footwear', image: '/images/guides/gorpcore-for-women-style-guide-2026-prod2.jpg' },
      { name: 'Carhartt Women\'s Crawford Double Front Bib Overalls', brand: 'Carhartt', price: '$89', url: 'https://amzn.to/example', tag: 'Trend-Forward Bottoms', image: '/images/guides/gorpcore-for-women-style-guide-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'coquette-aesthetic-2026-ultimate-guide',
    title: 'The 2026 Coquette Aesthetic: Your Ultimate Guide to the Hyper-Feminine Trend',
    category: 'casual',
    description: 'Master the 2026 Coquette Aesthetic. Our guide reveals the key pieces, styling tips, and top Amazon finds to perfect your dreamy, hyper-feminine look.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '👗',
    image: '/images/guides/coquette-aesthetic-2026-ultimate-guide-hero.jpg',
    affiliateProducts: [
      { name: 'Lilysilk Women\'s Vintage Lace Trim Silk Camisole Dress', brand: 'Amazon', price: '$129', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/coquette-aesthetic-2026-ultimate-guide-prod0.jpg' },
      { name: 'Coutgo Women\'s Platform Mary Janes with Chunky Heel and Ankle Strap', brand: 'Amazon', price: '$45', url: 'https://amzn.to/example', tag: 'Top Rated', image: '/images/guides/coquette-aesthetic-2026-ultimate-guide-prod1.jpg' },
      { name: 'VEYOLFINA 8-Pack Large Velvet Hair Bows with Long Tail', brand: 'Amazon', price: '$15', url: 'https://amzn.to/example', tag: 'Budget Find', image: '/images/guides/coquette-aesthetic-2026-ultimate-guide-prod2.jpg' },
      { name: 'GRACE KARIN Women\'s Pearl Button Cropped Cardigan Sweater', brand: 'Amazon', price: '$38', url: 'https://amzn.to/example', tag: 'Essential Layer', image: '/images/guides/coquette-aesthetic-2026-ultimate-guide-prod3.jpg' },
    ],
  },
  {
    slug: 'mob-wife-glamour-aesthetic-guide-2026',
    title: 'The Ultimate Mob Wife Aesthetic Guide: How to Master Opulent Glamour',
    category: 'date-night',
    description: 'Ready for the Mob Wife aesthetic? Our guide shows you how to rock faux fur, leopard print, and gold jewelry for ultimate opulent glamour. Get the look now!',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '👗',
    image: '/images/guides/mob-wife-glamour-aesthetic-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Apparis Anouck Faux Fur Coat in Noir', brand: 'Amazon', price: '$395', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/mob-wife-glamour-aesthetic-guide-2026-prod0.jpg' },
      { name: 'The Drop Women\'s Ana Silky V-Neck Midi Slip Dress, Leopard Print', brand: 'Amazon', price: '$50', url: 'https://amzn.to/example', tag: 'Statement Piece', image: '/images/guides/mob-wife-glamour-aesthetic-guide-2026-prod1.jpg' },
      { name: 'PAVOI 14K Gold Plated Chunky Open Hoops', brand: 'Amazon', price: '$14', url: 'https://amzn.to/example', tag: 'Essential Accessory', image: '/images/guides/mob-wife-glamour-aesthetic-guide-2026-prod2.jpg' },
      { name: 'Commando Women\'s Faux Leather Legging with Perfect Control', brand: 'Amazon', price: '$118', url: 'https://amzn.to/example', tag: 'Sleek Staple', image: '/images/guides/mob-wife-glamour-aesthetic-guide-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'old-money-summer-aesthetic-guide-2026',
    title: 'Old Money Summer: Your Ultimate Guide to Timeless, Elegant Style',
    category: 'seasonal',
    description: 'Unlock the secrets to the Old Money Summer aesthetic. Learn to dress with quiet luxury, timeless elegance, and effortless sophistication. Your guide awaits.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '👗',
    image: '/images/guides/old-money-summer-aesthetic-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'The Drop Women\'s Blake Long-Sleeve Loose-Fit Button-Down Shirt', brand: 'The Drop', price: '$50', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/old-money-summer-aesthetic-guide-2026-prod0.jpg' },
      { name: 'J.Crew Mercantile Women\'s 5" Stretch Chino Short', brand: 'J.Crew', price: '$35', url: 'https://amzn.to/example', tag: 'Essential Short', image: '/images/guides/old-money-summer-aesthetic-guide-2026-prod1.jpg' },
      { name: 'Soludos Women\'s Classic 3.5" Wedge Espadrille', brand: 'Soludos', price: '$95', url: 'https://amzn.to/example', tag: 'Perfect Footwear', image: '/images/guides/old-money-summer-aesthetic-guide-2026-prod2.jpg' },
      { name: 'YNIQUE Satchel Purses and Handbags for Women Shoulder Tote Bag', brand: 'YNIQUE', price: '$30', url: 'https://amzn.to/example', tag: 'Budget Find', image: '/images/guides/old-money-summer-aesthetic-guide-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'clean-girl-aesthetic-essentials-guide-2026',
    title: 'The Ultimate Guide to Mastering the Clean Girl Aesthetic in 2026',
    category: 'casual',
    description: 'Nail the viral Clean Girl Aesthetic! Our guide shows you the key outfits, essentials, and Amazon finds for that polished, minimalist, \'it-girl\' look.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '👗',
    image: '/images/guides/clean-girl-aesthetic-essentials-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'The Drop Women\'s Kiko Ribbed Cut-In-Neck Tank', brand: 'Amazon', price: '$30', url: 'https://amzn.to/example', tag: 'Core Essential', image: '/images/guides/clean-girl-aesthetic-essentials-guide-2026-prod0.jpg' },
      { name: 'PAVOI 14K Gold Plated Lightweight Chunky Open Hoops', brand: 'Amazon', price: '$14', url: 'https://amzn.to/example', tag: 'Best Accessory', image: '/images/guides/clean-girl-aesthetic-essentials-guide-2026-prod1.jpg' },
      { name: 'Cicy Bell Women\'s Casual Oversized Blazer', brand: 'Amazon', price: '$55', url: 'https://amzn.to/example', tag: 'Best Layering Piece', image: '/images/guides/clean-girl-aesthetic-essentials-guide-2026-prod2.jpg' },
      { name: 'TOCESS 4.3 Inch Large Hair Claw Clips for Thick Hair', brand: 'Amazon', price: '$10', url: 'https://amzn.to/example', tag: 'Best Budget Find', image: '/images/guides/clean-girl-aesthetic-essentials-guide-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'eclectic-grandpa-chic-style-guide-2026',
    title: 'Eclectic Grandpa Chic: The Ultimate Guide to Nailing the Trend in 2026',
    category: 'casual',
    description: 'Master the Eclectic Grandpa Chic trend! Our 2026 guide shows you how to style cardigans, loafers, and vintage finds for an effortlessly cool look.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '👗',
    image: '/images/guides/eclectic-grandpa-chic-style-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'The Drop Women\'s Brigitte Chunky Button Front Pocket Ribbed Cardigan', brand: 'The Drop', price: '$55', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/eclectic-grandpa-chic-style-guide-2026-prod0.jpg' },
      { name: 'Amazon Essentials Women\'s Loafer', brand: 'Amazon Essentials', price: '$30', url: 'https://amzn.to/example', tag: 'Best Value', image: '/images/guides/eclectic-grandpa-chic-style-guide-2026-prod1.jpg' },
      { name: 'Grace Karin Women\'s High Waist Pleated Trousers with Pockets', brand: 'Grace Karin', price: '$40', url: 'https://amzn.to/example', tag: 'Top Trouser', image: '/images/guides/eclectic-grandpa-chic-style-guide-2026-prod2.jpg' },
      { name: 'Amazon Essentials Women\'s Classic Fit Sleeveless Sweater Vest', brand: 'Amazon Essentials', price: '$25', url: 'https://amzn.to/example', tag: 'Essential Layer', image: '/images/guides/eclectic-grandpa-chic-style-guide-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'office-siren-corporate-wear-guide-2026',
    title: 'The Ultimate Office Siren Guide: How to Master 90s Corporate Wear in 2026',
    category: 'workwear',
    description: 'Unlock the power of the office siren aesthetic. Our 2026 guide shows you how to nail the viral 90s corporate wear trend with key pieces & styling tips.',
    readTime: '12 min',
    date: '2026-02-23',
    tag: 'Guide',
    emoji: '👗',
    image: '/images/guides/office-siren-corporate-wear-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'MANGOPOP Women\'s Mock Turtle Neck Long Sleeve Bodysuit', brand: 'MANGOPOP', price: '$28', url: 'https://amzn.to/example', tag: 'Best Overall', image: '/images/guides/office-siren-corporate-wear-guide-2026-prod0.jpg' },
      { name: 'GRACE KARIN Women\'s High Waist Pencil Skirt with Belt', brand: 'GRACE KARIN', price: '$35', url: 'https://amzn.to/example', tag: 'Essential Skirt', image: '/images/guides/office-siren-corporate-wear-guide-2026-prod1.jpg' },
      { name: 'SOJOS Retro 90s Rectangle Sunglasses for Women \'Bayonetta Glasses\'', brand: 'SOJOS', price: '$15', url: 'https://amzn.to/example', tag: 'Key Accessory', image: '/images/guides/office-siren-corporate-wear-guide-2026-prod2.jpg' },
      { name: 'DREAM PAIRS Women\'s Stiletto Pointed Toe Slip On Pumps', brand: 'DREAM PAIRS', price: '$46', url: 'https://amzn.to/example', tag: 'Power Heel', image: '/images/guides/office-siren-corporate-wear-guide-2026-prod3.jpg' },
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
export function getAllProducts(): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string })[] {
  const seen = new Set<string>();
  const products: (AffiliateProduct & { fromGuide: string; fromGuideSlug: string })[] = [];
  for (const guide of guides) {
    if (!guide.affiliateProducts) continue;
    for (const p of guide.affiliateProducts) {
      const key = `${p.name}|${p.brand}`;
      if (seen.has(key)) continue;
      seen.add(key);
      products.push({ ...p, fromGuide: guide.title, fromGuideSlug: guide.slug });
    }
  }
  return products;
}

/** Get featured products based on tags like Editor Pick, Best Overall, etc. */
export function getFeaturedProducts(count: number = 8): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string })[] {
  const all = getAllProducts();
  const priorityTags = ['Editor Pick', 'Best Overall', 'Best Value', 'Best Seller', 'Trend Pick', 'Must Have', '#1 Must Have', 'Top Pick'];
  const featured = all.filter(p => p.tag && priorityTags.includes(p.tag));
  const rest = all.filter(p => !p.tag || !priorityTags.includes(p.tag));
  return [...featured, ...rest].slice(0, count);
}

/** Get products filtered by guide category */
export function getProductsByCategory(category: string, count: number = 8): (AffiliateProduct & { fromGuide: string; fromGuideSlug: string })[] {
  const seen = new Set<string>();
  const products: (AffiliateProduct & { fromGuide: string; fromGuideSlug: string })[] = [];
  const categoryGuides = category === 'all' ? guides : guides.filter(g => g.category === category);
  for (const guide of categoryGuides) {
    if (!guide.affiliateProducts) continue;
    for (const p of guide.affiliateProducts) {
      const key = `${p.name}|${p.brand}`;
      if (seen.has(key)) continue;
      seen.add(key);
      products.push({ ...p, fromGuide: guide.title, fromGuideSlug: guide.slug });
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
