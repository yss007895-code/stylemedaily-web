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
    slug: 'spring-fashion-trends-2026',
    title: 'Spring 2026 Fashion Trends: What\'s In & What\'s Out',
    category: 'seasonal',
    description: 'From butter yellow to sheer layers, these are the spring 2026 trends you\'ll actually want to wear. Plus, affordable ways to try each one.',
    readTime: '9 min',
    date: '2026-02-10',
    tag: 'New',
    emoji: '🌸',
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
];

export function getGuideBySlug(slug: string) {
  return guides.find(g => g.slug === slug);
}

export function getGuidesByCategory(category: string) {
  if (category === 'all') return guides;
  return guides.filter(g => g.category === category);
}
