export interface StyleGuide {
  slug: string;
  title: string;
  category: string;
  description: string;
  readTime: string;
  date: string;
  tag: string;
  emoji: string;
  affiliateProducts?: AffiliateProduct[];
}

export interface AffiliateProduct {
  name: string;
  brand: string;
  price: string;
  url: string;
  tag?: string;
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
    slug: 'capsule-wardrobe-working-women-2026',
    title: 'The Ultimate Capsule Wardrobe Guide for Working Women 2026',
    category: 'workwear',
    description: 'Build a 30-piece wardrobe that creates 100+ outfits. From boardroom to brunch, this minimalist guide saves you time, money, and closet space.',
    readTime: '14 min',
    date: '2026-02-17',
    tag: 'Pillar Guide',
    emoji: '👔',
    affiliateProducts: [
      { name: 'Tailored Blazer', brand: 'Nordstrom', price: '$89', url: 'https://nordstrom.com', tag: 'Editor Pick' },
      { name: 'High-Rise Wide Leg Pants', brand: 'ASOS', price: '$45', url: 'https://asos.com' },
      { name: 'Silk Camisole', brand: 'H&M', price: '$29', url: 'https://hm.com' },
      { name: 'Classic Pumps', brand: 'Zappos', price: '$65', url: 'https://zappos.com' },
    ],
  },
  {
    slug: 'casual-outfits-look-expensive',
    title: '15 Effortless Casual Outfits That Look Expensive on a Budget',
    category: 'casual',
    description: 'You don\'t need designer labels to look put-together. These 15 outfit formulas use affordable basics to create an elevated everyday look.',
    readTime: '10 min',
    date: '2026-02-15',
    tag: 'Trending',
    emoji: '👗',
    affiliateProducts: [
      { name: 'Oversized Linen Shirt', brand: 'H&M', price: '$35', url: 'https://hm.com', tag: 'Best Value' },
      { name: 'Straight Leg Jeans', brand: 'ASOS', price: '$48', url: 'https://asos.com' },
      { name: 'White Sneakers', brand: 'Zappos', price: '$55', url: 'https://zappos.com' },
    ],
  },
  {
    slug: 'first-date-outfits-every-vibe',
    title: 'What to Wear on a First Date: 20 Outfits for Every Vibe',
    category: 'date-night',
    description: 'Coffee date? Rooftop dinner? Hiking adventure? We\'ve got the perfect outfit for every type of first date, from low-key to dressed up.',
    readTime: '12 min',
    date: '2026-02-14',
    tag: 'Popular',
    emoji: '💃',
    affiliateProducts: [
      { name: 'Satin Midi Dress', brand: 'REVOLVE', price: '$120', url: 'https://revolve.com', tag: 'Date Night Fave' },
      { name: 'Strappy Heels', brand: 'Nordstrom', price: '$75', url: 'https://nordstrom.com' },
      { name: 'Statement Earrings', brand: 'ShopBop', price: '$42', url: 'https://shopbop.com' },
    ],
  },
  {
    slug: 'dress-for-body-shape-guide',
    title: 'Dressing for Your Body Shape: A Complete Visual Guide',
    category: 'body-type',
    description: 'Pear, apple, hourglass, rectangle, or inverted triangle? Find your body type and discover the cuts, fabrics, and silhouettes that flatter you most.',
    readTime: '16 min',
    date: '2026-02-12',
    tag: 'Evergreen',
    emoji: '💖',
    affiliateProducts: [
      { name: 'Wrap Dress (Hourglass)', brand: 'Nordstrom', price: '$68', url: 'https://nordstrom.com' },
      { name: 'A-Line Skirt (Pear)', brand: 'H&M', price: '$32', url: 'https://hm.com' },
      { name: 'Structured Blazer (Rectangle)', brand: 'ASOS', price: '$72', url: 'https://asos.com' },
    ],
  },
  {
    slug: 'nordstrom-vs-asos-professional-women',
    title: 'Nordstrom vs ASOS: Best Online Shopping for Professional Women',
    category: 'workwear',
    description: 'We compared both retailers on quality, price, sizing, returns, and style range. Here\'s which one is better for building your work wardrobe.',
    readTime: '11 min',
    date: '2026-02-08',
    tag: 'Comparison',
    emoji: '🛍️',
  },
  {
    slug: 'what-to-wear-to-wedding-2026',
    title: 'What to Wear to a Wedding in 2026: Guest Outfit Guide',
    category: 'occasion',
    description: 'Black tie, garden party, beach ceremony, or city hall? The complete wedding guest outfit guide with do\'s, don\'ts, and shoppable looks.',
    readTime: '13 min',
    date: '2026-02-06',
    tag: 'Seasonal',
    emoji: '🎉',
  },
  {
    slug: 'best-jeans-for-women-2026',
    title: 'The 10 Best Jeans for Women in 2026 (Tested & Reviewed)',
    category: 'casual',
    description: 'We tried 40+ pairs across every body type and budget. These are the 10 that actually deliver on fit, comfort, and style.',
    readTime: '15 min',
    date: '2026-02-04',
    tag: 'Product Review',
    emoji: '👖',
    affiliateProducts: [
      { name: 'Levi\'s 501 Original', brand: 'Nordstrom', price: '$98', url: 'https://nordstrom.com', tag: 'Best Overall' },
      { name: 'AGOLDE 90s Pinch Waist', brand: 'ShopBop', price: '$198', url: 'https://shopbop.com', tag: 'Best Premium' },
      { name: 'Abercrombie Curve Love', brand: 'Abercrombie', price: '$90', url: 'https://abercrombie.com', tag: 'Best for Curves' },
    ],
  },
  {
    slug: 'spring-workwear-capsule-2026',
    title: 'Spring 2026 Workwear Capsule: 15 Pieces, 30 Outfits',
    category: 'workwear',
    description: 'Build a complete spring work wardrobe with just 15 versatile pieces.',
    readTime: '12 min',
    date: '2026-03-01',
    tag: 'New',
    emoji: '🌸',
    affiliateProducts: [
      { name: 'Linen Blazer', brand: 'Nordstrom', price: '$89', url: 'https://nordstrom.com', tag: 'Editor Pick' },
      { name: 'Wide Leg Pants', brand: 'ASOS', price: '$52', url: 'https://asos.com' },
      { name: 'Silk Blouse', brand: 'H&M', price: '$35', url: 'https://hm.com' },
    ],
  },
  {
    slug: 'work-outfits-that-mean-business',
    title: '10 Work Outfits That Mean Business: Office Style Guide 2026',
    category: 'workwear',
    description: 'From power blazers to smart casual Friday — 10 effortlessly chic work outfits for the modern professional woman.',
    readTime: '14 min',
    date: '2026-02-17',
    tag: 'New',
    emoji: '💼',
    affiliateProducts: [
      { name: 'Oversized Wool Blazer', brand: 'Nordstrom', price: '$149', url: 'https://nordstrom.com', tag: 'Editor Pick' },
      { name: 'High-Waisted Trousers', brand: 'ASOS', price: '$58', url: 'https://asos.com', tag: 'Best Value' },
      { name: 'Silk Button-Down Shirt', brand: 'H&M', price: '$45', url: 'https://hm.com' },
      { name: 'Pointed Toe Pumps', brand: 'Nordstrom', price: '$120', url: 'https://nordstrom.com' },
    ],
  },
  {
    slug: 'what-to-wear-date-night',
    title: 'What to Wear on a Date Night: 7 Stunning Looks for Every Occasion',
    category: 'date-night',
    description: 'From fancy dinner to casual coffee — 7 gorgeous date night outfits that will make you feel confident and beautiful.',
    readTime: '11 min',
    date: '2026-02-17',
    tag: 'Trending',
    emoji: '💕',
    affiliateProducts: [
      { name: 'Satin Midi Dress', brand: 'Nordstrom', price: '$89', url: 'https://nordstrom.com', tag: 'Editor Pick' },
      { name: 'Strappy Heeled Sandals', brand: 'ASOS', price: '$62', url: 'https://asos.com' },
      { name: 'Statement Earrings', brand: 'H&M', price: '$18', url: 'https://hm.com', tag: 'Budget Pick' },
      { name: 'Clutch Bag', brand: 'Nordstrom', price: '$55', url: 'https://nordstrom.com' },
    ],
  },
  {
    slug: 'best-jeans-every-body-type',
    title: 'Best Jeans for Every Body Type 2026: The Ultimate Denim Guide',
    category: 'casual',
    description: 'Find your perfect pair — the best jeans for pear, apple, hourglass, athletic, and petite body types.',
    readTime: '15 min',
    date: '2026-02-17',
    tag: 'Popular',
    emoji: '👖',
    affiliateProducts: [
      { name: 'Levi\'s Ribcage Straight', brand: 'Nordstrom', price: '$98', url: 'https://nordstrom.com', tag: 'Best Overall' },
      { name: 'AGOLDE 90s Pinch Waist', brand: 'ShopBop', price: '$198', url: 'https://shopbop.com', tag: 'Best Premium' },
      { name: 'Abercrombie Curve Love', brand: 'Abercrombie', price: '$90', url: 'https://abercrombie.com', tag: 'Best for Curves' },
      { name: 'Good American Good Legs', brand: 'Nordstrom', price: '$159', url: 'https://nordstrom.com' },
      { name: 'H&M Slim Mom Jeans', brand: 'H&M', price: '$35', url: 'https://hm.com', tag: 'Budget Pick' },
    ],
  },
  {
    slug: 'spring-fashion-trends-2026',
    title: 'Spring Fashion Trends 2026: What to Wear This Season',
    category: 'seasonal',
    description: 'The biggest spring 2026 fashion trends and how to style them — from soft pastels to bold statement pieces.',
    readTime: '13 min',
    date: '2026-02-17',
    tag: 'Hot',
    emoji: '🌷',
    affiliateProducts: [
      { name: 'Linen Blend Blazer', brand: 'H&M', price: '$49', url: 'https://hm.com', tag: 'Trend Pick' },
      { name: 'Pleated Midi Skirt', brand: 'ASOS', price: '$45', url: 'https://asos.com' },
      { name: 'Woven Tote Bag', brand: 'Nordstrom', price: '$78', url: 'https://nordstrom.com', tag: 'Must Have' },
      { name: 'Platform Sandals', brand: 'ASOS', price: '$55', url: 'https://asos.com' },
    ],
  },
  {
    slug: 'best-work-bags-under-100',
    title: 'The 10 Best Work Bags for Women Under $100 in 2026',
    category: 'workwear',
    description: 'Professional totes, structured satchels, and laptop-friendly bags that look expensive but won\'t break the bank.',
    readTime: '12 min',
    date: '2026-02-18',
    tag: 'Product Review',
    emoji: '👜',
    affiliateProducts: [
      { name: 'Madewell Transport Tote', brand: 'Nordstrom', price: '$98', url: 'https://nordstrom.com', tag: 'Best Overall' },
      { name: 'ASOS Structured Laptop Bag', brand: 'ASOS', price: '$52', url: 'https://asos.com', tag: 'Best Value' },
      { name: 'H&M Faux Leather Tote', brand: 'H&M', price: '$35', url: 'https://hm.com', tag: 'Budget Pick' },
    ],
  },
  {
    slug: 'affordable-fashion-brands-guide',
    title: '12 Affordable Fashion Brands That Look High-End in 2026',
    category: 'budget',
    description: 'From H&M to Quince — these budget-friendly brands deliver quality, style, and sustainability without the designer price tag.',
    readTime: '11 min',
    date: '2026-02-18',
    tag: 'Budget',
    emoji: '💰',
    affiliateProducts: [
      { name: 'Quince Cashmere Sweater', brand: 'Quince', price: '$50', url: 'https://quince.com', tag: 'Best Quality' },
      { name: 'Uniqlo Heattech Top', brand: 'Uniqlo', price: '$15', url: 'https://uniqlo.com' },
      { name: 'H&M Premium Collection Blazer', brand: 'H&M', price: '$65', url: 'https://hm.com', tag: 'Editor Pick' },
    ],
  },
  {
    slug: 'how-to-build-minimalist-wardrobe',
    title: 'How to Build a Minimalist Wardrobe: Step-by-Step Guide',
    category: 'casual',
    description: 'Declutter your closet and build a wardrobe that sparks joy. A practical guide to owning less but looking better every day.',
    readTime: '13 min',
    date: '2026-02-18',
    tag: 'Guide',
    emoji: '🪄',
    affiliateProducts: [
      { name: 'Classic White T-Shirt 3-Pack', brand: 'H&M', price: '$25', url: 'https://hm.com', tag: 'Wardrobe Essential' },
      { name: 'Cashmere Crewneck', brand: 'Nordstrom', price: '$89', url: 'https://nordstrom.com', tag: 'Worth the Splurge' },
      { name: 'Versatile Wrap Dress', brand: 'ASOS', price: '$48', url: 'https://asos.com' },
    ],
  },
  {
    slug: 'best-white-sneakers-women-2026',
    title: 'The 8 Best White Sneakers for Women in 2026 (Tested & Ranked)',
    category: 'casual',
    description: 'We tested 25+ pairs for comfort, durability, and style. These are the white sneakers that actually stay clean and look great with everything.',
    readTime: '14 min',
    date: '2026-02-18',
    tag: 'Product Review',
    emoji: '👟',
    affiliateProducts: [
      { name: 'Nike Air Force 1', brand: 'Nordstrom', price: '$115', url: 'https://nordstrom.com', tag: 'Best Classic' },
      { name: 'Veja Campo', brand: 'ShopBop', price: '$165', url: 'https://shopbop.com', tag: 'Best Sustainable' },
      { name: 'Adidas Stan Smith', brand: 'Zappos', price: '$95', url: 'https://zappos.com', tag: 'Best Value' },
      { name: 'New Balance 550', brand: 'Nordstrom', price: '$110', url: 'https://nordstrom.com' },
    ],
  },
  {
    slug: 'professional-outfits-women-2026',
    title: 'Professional Outfits for Women: Complete Office Wardrobe Guide',
    category: 'workwear',
    description: 'Whether your office is corporate, business casual, or creative — build a professional wardrobe that commands respect and looks amazing.',
    readTime: '15 min',
    date: '2026-02-18',
    tag: 'Comprehensive',
    emoji: '👩‍💼',
    affiliateProducts: [
      { name: 'Theory Tailored Blazer', brand: 'Nordstrom', price: '$395', url: 'https://nordstrom.com', tag: 'Investment Piece' },
      { name: 'ASOS Cigarette Pants', brand: 'ASOS', price: '$42', url: 'https://asos.com', tag: 'Best Value' },
      { name: 'Everlane Silk Blouse', brand: 'Everlane', price: '$88', url: 'https://everlane.com' },
      { name: 'Sam Edelman Pumps', brand: 'Zappos', price: '$130', url: 'https://zappos.com' },
    ],
  },
  {
    slug: 'stitch-fix-vs-personal-stylist',
    title: 'Stitch Fix vs Hiring a Personal Stylist: Which is Right for You?',
    category: 'budget',
    description: 'We break down the cost, convenience, and styling quality of Stitch Fix versus traditional personal styling services.',
    readTime: '10 min',
    date: '2026-02-18',
    tag: 'Comparison',
    emoji: '🤔',
  },
  {
    slug: 'best-affordable-blazers-under-100',
    title: 'Best Affordable Blazers Under $100: 10 Picks for Every Style',
    category: 'budget',
    description: 'A great blazer transforms any outfit. These 10 affordable blazers deliver tailored quality and modern style without the premium price.',
    readTime: '12 min',
    date: '2026-02-18',
    tag: 'Product Review',
    emoji: '🧥',
    affiliateProducts: [
      { name: 'H&M Double-Breasted Blazer', brand: 'H&M', price: '$55', url: 'https://hm.com', tag: 'Best Under $60' },
      { name: 'ASOS Oversized Blazer', brand: 'ASOS', price: '$72', url: 'https://asos.com', tag: 'Best Oversized' },
      { name: 'Nordstrom Rack Wool Blend', brand: 'Nordstrom', price: '$89', url: 'https://nordstrom.com', tag: 'Best Quality' },
      { name: 'Zara Cropped Blazer', brand: 'Zara', price: '$69', url: 'https://zara.com' },
    ],
  },
  {
    slug: 'what-to-wear-job-interview-2026',
    title: 'What to Wear to a Job Interview in 2026: Dress Code Guide',
    category: 'workwear',
    description: 'First impressions matter. The complete guide to interview outfits for corporate, startup, creative, and remote job interviews.',
    readTime: '11 min',
    date: '2026-02-18',
    tag: 'Essential',
    emoji: '🤝',
    affiliateProducts: [
      { name: 'Navy Tailored Blazer', brand: 'Nordstrom', price: '$95', url: 'https://nordstrom.com', tag: 'Corporate Pick' },
      { name: 'Slim Dress Pants', brand: 'ASOS', price: '$48', url: 'https://asos.com' },
      { name: 'Pointed Toe Flats', brand: 'Zappos', price: '$65', url: 'https://zappos.com', tag: 'Comfort Pick' },
      { name: 'Structured Handbag', brand: 'H&M', price: '$40', url: 'https://hm.com' },
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
