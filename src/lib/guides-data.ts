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
  { slug: 'all', name: 'All Styles', icon: 'all' },
  { slug: 'workwear', name: 'Workwear', icon: 'work' },
  { slug: 'casual', name: 'Casual Chic', icon: 'casual' },
  { slug: 'date-night', name: 'Date Night', icon: 'date' },
  { slug: 'seasonal', name: 'Seasonal', icon: 'season' },
  { slug: 'body-type', name: 'Body Types', icon: 'body' },
  { slug: 'budget', name: 'On a Budget', icon: 'budget' },
  { slug: 'occasion', name: 'Occasions', icon: 'occasion' },
];

export const guides: StyleGuide[] = [
  {
    slug: 'the-ultimate-office-siren-style-guide-how-to-get-the-viral-tiktok-look',
    title: 'The Ultimate Office Siren Style Guide: How to Get the Viral TikTok Look',
    category: 'Style Guides',
    description: 'Unlock the viral office siren aesthetic with our ultimate style guide. Get chic outfit ideas, styling tips, and shop the essentials to master this 90s-inspired look.',
    readTime: '10 min',
    date: '2026-02-24',
    tag: 'office siren',
    emoji: '📠',
    image: '/images/guides/best-work-bags-under-100.svg',
    affiliateProducts: [
      {
        name: 'Calvin Klein Women\'s Classic Pencil Skirt',
        brand: 'Calvin Klein',
        price: '59.50',
        url: 'https://www.amazon.com/dp/B07K6YJ3B7?tag=stylemedaily-20',
        tag: 'office_siren_essential',
        image: '/images/guides/office-siren-pencil-skirt.jpg',
      },
      {
        name: 'MANGOPOP Women\'s Mock Turtle Neck Long Sleeve Bodysuit',
        brand: 'MANGOPOP',
        price: '22.98',
        url: 'https://www.amazon.com/dp/B07W3T4J7F?tag=stylemedaily-20',
        tag: 'office_siren_essential',
        image: '/images/guides/office-siren-bodysuit.jpg',
      },
      {
        name: 'FEISEDY Classic Square Cat Eye Reading Glasses',
        brand: 'FEISEDY',
        price: '15.99',
        url: 'https://www.amazon.com/dp/B09V7Y1Z5C?tag=stylemedaily-20',
        tag: 'office_siren_essential',
        image: '/images/guides/office-siren-glasses.jpg',
      },
      {
        name: 'DREAM PAIRS Women\'s Low Kitten Heel Pump Shoes',
        brand: 'DREAM PAIRS',
        price: '36.99',
        url: 'https://www.amazon.com/dp/B073WWL5P5?tag=stylemedaily-20',
        tag: 'office_siren_essential',
        image: '/images/guides/office-siren-kitten-heels.jpg',
      },
      {
        name: 'The Drop Women\'s Addison Soft Volume Top Handle Bag',
        brand: 'The Drop',
        price: '39.90',
        url: 'https://www.amazon.com/dp/B08KH1YQ8C?tag=stylemedaily-20',
        tag: 'office_siren_essential',
        image: '/images/guides/office-siren-top-handle-bag.jpg',
      },
    ],
  },

  {
    slug: 'your-viral-style-guide-to-the-eclectic-grandpa-trend',
    title: 'Your Viral Style Guide to the Eclectic Grandpa Trend',
    category: 'Style Guides',
    description: 'Slay the viral eclectic grandpa aesthetic with our expert style guide. We\'ve got the best outfit ideas, tips on how to wear the trend, and a shoppable list of essentials.',
    readTime: '10 min',
    date: '2026-02-24',
    tag: 'eclectic_grandpa',
    emoji: '👴',
    image: '/images/guides/how-to-master-the-clean-girl-aesthetic-your-ultimate-guide-2026-hero.jpg',
    affiliateProducts: [
      {
        name: 'The Drop Women\'s Standard Argyle V-Neck Sweater Vest',
        brand: 'The Drop',
        price: '34.90',
        url: 'https://www.amazon.com/dp/B09QFZ8Y9L?tag=stylemedaily-20',
        tag: 'stylemedaily-20',
        image: '/images/guides/eclectic-grandpa-chic-style-guide-2026-prod0.jpg',
      },
      {
        name: 'Amazon Essentials Women\'s Pleated Chino Wide Leg Pant',
        brand: 'Amazon Essentials',
        price: '29.30',
        url: 'https://www.amazon.com/dp/B0B3YJ5G5B?tag=stylemedaily-20',
        tag: 'stylemedaily-20',
        image: '/images/guides/eclectic-grandpa-chic-style-guide-2026-prod1.jpg',
      },
      {
        name: 'Franco Sarto Women\'s Carolynn Loafer Flat',
        brand: 'Franco Sarto',
        price: '99.00',
        url: 'https://www.amazon.com/dp/B096N6W89R?tag=stylemedaily-20',
        tag: 'stylemedaily-20',
        image: '/images/guides/eclectic-grandpa-chic-style-guide-2026-prod2.jpg',
      },
      {
        name: 'Timex Women\'s Easy Reader 25mm Watch',
        brand: 'Timex',
        price: '38.50',
        url: 'https://www.amazon.com/dp/B000B55AFE?tag=stylemedaily-20',
        tag: 'stylemedaily-20',
        image: '/images/guides/eclectic-grandpa-chic-style-guide-2026-prod3.jpg',
      },
      {
        name: 'Hue Women\'s Slouch Sock 3-Pair Pack',
        brand: 'HUE',
        price: '18.00',
        url: 'https://www.amazon.com/dp/B00FFUPQ9W?tag=stylemedaily-20',
        tag: 'stylemedaily-20',
        image: '/images/guides/eclectic-grandpa-chic-style-guide-2026-hero.jpg',
      },
    ],
  },

  {
    slug: 'your-ultimate-balletcore-style-guide',
    title: 'Your Ultimate Balletcore Style Guide 🩰',
    category: 'Style Guides',
    description: 'Unlock the viral balletcore aesthetic with our expert style guide. Get shoppable outfit ideas for TikTok\'s favorite trend, featuring ballet flats, wrap tops, and more balletcore essentials.',
    readTime: '10 min',
    date: '2026-02-24',
    tag: 'balletcore',
    emoji: '🩰',
    image: '/images/guides/editors-choice-fashion-trends-2026.svg',
    affiliateProducts: [
      {
        name: 'Urban CoCo Women\'s Long Sleeve Wrap Top',
        brand: 'Urban CoCo',
        price: '$23.85',
        url: 'https://www.amazon.com/dp/B073XJ4DBQ?tag=stylemedaily-20',
        tag: 'amazon_fashion',
        image: '/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-off-duty-2026-prod1.jpg',
      },
      {
        name: 'Amazon Essentials Women\'s Belice Ballet Flat',
        brand: 'Amazon Essentials',
        price: '$22.90',
        url: 'https://www.amazon.com/dp/B01N9O382K?tag=stylemedaily-20',
        tag: 'amazon_fashion',
        image: '/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-off-duty-2026-prod0.jpg',
      },
      {
        name: 'V28 Women 80s Ribbed Knit Leg Warmers',
        brand: 'V28',
        price: '$12.99',
        url: 'https://www.amazon.com/dp/B082LP32T3?tag=stylemedaily-20',
        tag: 'amazon_fashion',
        image: '/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-off-duty-2026-prod2.jpg',
      },
      {
        name: 'The Drop Women\'s Maya Silky Slip Skirt',
        brand: 'The Drop',
        price: '$49.90',
        url: 'https://www.amazon.com/dp/B09V7YFW8P?tag=stylemedaily-20',
        tag: 'amazon_fashion',
        image: '/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-off-duty-2026-prod3.jpg',
      },
      {
        name: 'MANGOPOP Women\'s Square Neck Short Sleeve Bodysuit',
        brand: 'MANGOPOP',
        price: '$25.98',
        url: 'https://www.amazon.com/dp/B08T9J5Z8R?tag=stylemedaily-20',
        tag: 'amazon_fashion',
        image: '/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-2026-prod2.jpg',
      },
    ],
  },

  {
    slug: 'the-coastal-grandmother-aesthetic-your-ultimate-style-guide',
    title: 'The Coastal Grandmother Aesthetic: Your Ultimate Style Guide',
    category: 'Style Guide',
    description: 'Ready to enter your coastal grandmother era? Our Gen Z-approved style guide breaks down the viral TikTok trend with easy outfit ideas and tips on how to wear linen, neutrals, and more.',
    readTime: '10 min',
    date: '2026-02-24',
    tag: 'CoastalGrandmother',
    emoji: '?릾',
    image: '/images/guides/clean-girl-aesthetic-2026.svg',
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
    emoji: '?몭',
    image: '/images/guides/y2k-fashion-revival-ultimate-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Levi\'s Women\'s Low Pro Jeans', brand: 'Amazon', price: '$79', url: 'https://www.amazon.com/s?k=Levi%27s%20Women%27s%20Low%20Pro%20Jeans&tag=stylemedaily-20', tag: 'Best Low-Rise', image: '/images/guides/y2k-fashion-revival-ultimate-guide-2026-prod0.jpg' },
      { name: 'Juicy Couture Women\'s Classic Velour Hoodie', brand: 'Amazon', price: '$89', url: 'https://www.amazon.com/s?k=Juicy%20Couture%20Women%27s%20Classic%20Velour%20Hoodie&tag=stylemedaily-20', tag: 'Iconic Throwback', image: '/images/guides/y2k-fashion-revival-ultimate-guide-2026-prod1.jpg' },
      { name: 'JW PEI Women\'s Eva Shoulder Handbag', brand: 'Amazon', price: '$59', url: 'https://www.amazon.com/s?k=JW%20PEI%20Women%27s%20Eva%20Shoulder%20Handbag&tag=stylemedaily-20', tag: 'Best Accessory', image: '/images/guides/y2k-fashion-revival-ultimate-guide-2026-prod2.jpg' },
      { name: 'Steve Madden Women\'s Slinky30 Platform Sandal', brand: 'Amazon', price: '$99', url: 'https://www.amazon.com/s?k=Steve%20Madden%20Women%27s%20Slinky30%20Platform%20Sandal&tag=stylemedaily-20', tag: 'Best Footwear', image: '/images/guides/y2k-fashion-revival-ultimate-guide-2026-prod3.jpg' },
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
    emoji: '?몭',
    image: '/images/guides/quiet-luxury-essentials-investment-pieces-2026-hero.jpg',
    affiliateProducts: [
      { name: 'The Drop Women\'s Noa Trench Coat', brand: 'Amazon', price: '$99', url: 'https://www.amazon.com/s?k=The%20Drop%20Women%27s%20Noa%20Trench%20Coat&tag=stylemedaily-20', tag: 'Best Overall', image: '/images/guides/quiet-luxury-essentials-investment-pieces-2026-prod0.jpg' },
      { name: 'State Cashmere Women\'s 100% Pure Cashmere Crewneck Sweater', brand: 'Amazon', price: '$125', url: 'https://www.amazon.com/s?k=State%20Cashmere%20Women%27s%20100%25%20Pure%20Cashmere%20Crewneck%20Sweater&tag=stylemedaily-20', tag: 'Top Rated', image: '/images/guides/quiet-luxury-essentials-investment-pieces-2026-prod1.jpg' },
      { name: 'BOSTANTEN Women\'s Leather Tote Bag', brand: 'Amazon', price: '$119', url: 'https://www.amazon.com/s?k=BOSTANTEN%20Women%27s%20Leather%20Tote%20Bag&tag=stylemedaily-20', tag: 'Best for Work', image: '/images/guides/quiet-luxury-essentials-investment-pieces-2026-prod2.jpg' },
      { name: 'The Drop Women\'s Ian Mid Rise Relaxed-Fit Wide Leg Trousers', brand: 'Amazon', price: '$54', url: 'https://www.amazon.com/s?k=The%20Drop%20Women%27s%20Ian%20Mid%20Rise%20Relaxed-Fit%20Wide%20Leg%20Trousers&tag=stylemedaily-20', tag: 'Best Value', image: '/images/guides/quiet-luxury-essentials-investment-pieces-2026-prod3.jpg' },
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
    emoji: '?몭',
    image: '/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-off-duty-2026-hero.jpg',
    affiliateProducts: [
      { name: 'DreamPairs Women\'s Classic Slip-On Ballet Flats', brand: 'Amazon', price: '$28', url: 'https://www.amazon.com/s?k=DreamPairs%20Women%27s%20Classic%20Slip-On%20Ballet%20Flats&tag=stylemedaily-20', tag: 'Best Overall', image: '/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-off-duty-2026-prod0.jpg' },
      { name: 'MEROKEETY Women\'s Ribbed Long Sleeve Wrap Sweater', brand: 'Amazon', price: '$39', url: 'https://www.amazon.com/s?k=MEROKEETY%20Women%27s%20Ribbed%20Long%20Sleeve%20Wrap%20Sweater&tag=stylemedaily-20', tag: 'Top Layer', image: '/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-off-duty-2026-prod1.jpg' },
      { name: 'MANGOPOP Women\'s Scoop Neck Bodysuit', brand: 'Amazon', price: '$25', url: 'https://www.amazon.com/s?k=MANGOPOP%20Women%27s%20Scoop%20Neck%20Bodysuit&tag=stylemedaily-20', tag: 'Essential Base', image: '/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-off-duty-2026-prod2.jpg' },
      { name: 'Belle Poque Women\'s A-Line Layered Tulle Midi Skirt', brand: 'Amazon', price: '$35', url: 'https://www.amazon.com/s?k=Belle%20Poque%20Women%27s%20A-Line%20Layered%20Tulle%20Midi%20Skirt&tag=stylemedaily-20', tag: 'Statement Piece', image: '/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-off-duty-2026-prod3.jpg' },
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
    emoji: '?몭',
    image: '/images/guides/gorpcore-womens-style-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'The North Face Women\'s 1996 Retro Nuptse Jacket', brand: 'The North Face', price: '$330', url: 'https://www.amazon.com/s?k=The%20North%20Face%20Women%27s%201996%20Retro%20Nuptse%20Jacket&tag=stylemedaily-20', tag: 'Best Overall', image: '/images/guides/gorpcore-womens-style-guide-2026-prod0.jpg' },
      { name: 'Dickies Women\'s Relaxed Fit Straight Leg Cargo Pants', brand: 'Dickies', price: '$45', url: 'https://www.amazon.com/s?k=Dickies%20Women%27s%20Relaxed%20Fit%20Straight%20Leg%20Cargo%20Pants&tag=stylemedaily-20', tag: 'Best Value', image: '/images/guides/gorpcore-womens-style-guide-2026-prod1.jpg' },
      { name: 'Salomon Women\'s XT-6 Trail Running Shoes', brand: 'Salomon', price: '$190', url: 'https://www.amazon.com/s?k=Salomon%20Women%27s%20XT-6%20Trail%20Running%20Shoes&tag=stylemedaily-20', tag: 'Top Footwear', image: '/images/guides/gorpcore-womens-style-guide-2026-prod2.jpg' },
      { name: 'Carhartt Knit Cuffed Beanie A18', brand: 'Carhartt', price: '$20', url: 'https://www.amazon.com/s?k=Carhartt%20Knit%20Cuffed%20Beanie%20A18&tag=stylemedaily-20', tag: 'Essential Accessory', image: '/images/guides/gorpcore-womens-style-guide-2026-prod3.jpg' },
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
    emoji: '?몭',
    image: '/images/guides/coquette-aesthetic-2026-ultimate-guide-hero.jpg',
    affiliateProducts: [
      { name: 'Simplee Women\'s Lace Trim Satin Cami Slip Dress', brand: 'Amazon', price: '$32', url: 'https://www.amazon.com/s?k=Simplee%20Women%27s%20Lace%20Trim%20Satin%20Cami%20Slip%20Dress&tag=stylemedaily-20', tag: 'Best Overall', image: '/images/guides/coquette-aesthetic-2026-ultimate-guide-prod0.jpg' },
      { name: 'Offray Grosgrain Craft Ribbon, 3/8-Inch, 18-Yard Spool, Light Pink', brand: 'Amazon', price: '$8', url: 'https://www.amazon.com/s?k=Offray%20Grosgrain%20Craft%20Ribbon%2C%203%2F8-Inch%2C%2018-Yard%20Spool%2C%20Light%20Pink&tag=stylemedaily-20', tag: 'Essential Accessory', image: '/images/guides/coquette-aesthetic-2026-ultimate-guide-prod1.jpg' },
      { name: 'DREAM PAIRS Women\'s Ankle Strap Mary Jane Platform Pumps', brand: 'Amazon', price: '$45', url: 'https://www.amazon.com/s?k=DREAM%20PAIRS%20Women%27s%20Ankle%20Strap%20Mary%20Jane%20Platform%20Pumps&tag=stylemedaily-20', tag: 'Perfect Footwear', image: '/images/guides/coquette-aesthetic-2026-ultimate-guide-prod2.jpg' },
      { name: 'Grace Karin Women\'s Ruffle Trim Knit Cardigan Sweater', brand: 'Amazon', price: '$38', url: 'https://www.amazon.com/s?k=Grace%20Karin%20Women%27s%20Ruffle%20Trim%20Knit%20Cardigan%20Sweater&tag=stylemedaily-20', tag: 'Cozy Layer', image: '/images/guides/coquette-aesthetic-2026-ultimate-guide-prod3.jpg' },
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
    emoji: '?몭',
    image: '/images/guides/mob-wife-glamour-aesthetic-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'Bellivera Women\'s Faux Fur Shaggy Winter Coat', brand: 'Amazon', price: '$89', url: 'https://www.amazon.com/s?k=Bellivera%20Women%27s%20Faux%20Fur%20Shaggy%20Winter%20Coat&tag=stylemedaily-20', tag: 'Best Overall', image: '/images/guides/mob-wife-glamour-aesthetic-guide-2026-prod0.jpg' },
      { name: 'SPANX Faux Leather Leggings for Women', brand: 'Amazon', price: '$98', url: 'https://www.amazon.com/s?k=SPANX%20Faux%20Leather%20Leggings%20for%20Women&tag=stylemedaily-20', tag: 'Sleek Base', image: '/images/guides/mob-wife-glamour-aesthetic-guide-2026-prod1.jpg' },
      { name: 'PAVOI 14K Gold Plated Chunky Open Hoops', brand: 'Amazon', price: '$14', url: 'https://www.amazon.com/s?k=PAVOI%2014K%20Gold%20Plated%20Chunky%20Open%20Hoops&tag=stylemedaily-20', tag: 'Statement Jewelry', image: '/images/guides/mob-wife-glamour-aesthetic-guide-2026-prod2.jpg' },
      { name: 'Floerns Women\'s V Neck Long Sleeve Leopard Print Bodycon Dress', brand: 'Amazon', price: '$38', url: 'https://www.amazon.com/s?k=Floerns%20Women%27s%20V%20Neck%20Long%20Sleeve%20Leopard%20Print%20Bodycon%20Dress&tag=stylemedaily-20', tag: 'Iconic Print', image: '/images/guides/mob-wife-glamour-aesthetic-guide-2026-prod3.jpg' },
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
    emoji: '?몭',
    image: '/images/guides/old-money-summer-aesthetic-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'The Drop Women\'s Britt Tiered Maxi Tent Dress', brand: 'The Drop', price: '$59', url: 'https://www.amazon.com/s?k=The%20Drop%20Women%27s%20Britt%20Tiered%20Maxi%20Tent%20Dress&tag=stylemedaily-20', tag: 'Best Overall', image: '/images/guides/old-money-summer-aesthetic-guide-2026-prod0.jpg' },
      { name: 'Amazon Essentials Women\'s Linen Blend Drawstring Wide Leg Pant', brand: 'Amazon', price: '$34', url: 'https://www.amazon.com/s?k=Amazon%20Essentials%20Women%27s%20Linen%20Blend%20Drawstring%20Wide%20Leg%20Pant&tag=stylemedaily-20', tag: 'Linen Essential', image: '/images/guides/old-money-summer-aesthetic-guide-2026-prod1.jpg' },
      { name: 'JW PEI Women\'s Eva Shoulder Handbag', brand: 'JW PEI', price: '$58', url: 'https://www.amazon.com/s?k=JW%20PEI%20Women%27s%20Eva%20Shoulder%20Handbag&tag=stylemedaily-20', tag: 'Must-Have Accessory', image: '/images/guides/old-money-summer-aesthetic-guide-2026-prod2.jpg' },
      { name: 'CUSHIONAIRE Women\'s Lane Cork Footbed Sandal with +Comfort', brand: 'CUSHIONAIRE', price: '$29', url: 'https://www.amazon.com/s?k=CUSHIONAIRE%20Women%27s%20Lane%20Cork%20Footbed%20Sandal%20with%20%2BComfort&tag=stylemedaily-20', tag: 'Timeless Footwear', image: '/images/guides/old-money-summer-aesthetic-guide-2026-prod3.jpg' },
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
    emoji: '?몭',
    image: '/images/guides/how-to-master-the-clean-girl-aesthetic-your-ultimate-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'The Drop Women\'s Blake Long-Sleeve T-Shirt', brand: 'Amazon', price: '$25', url: 'https://www.amazon.com/s?k=The%20Drop%20Women%27s%20Blake%20Long-Sleeve%20T-Shirt&tag=stylemedaily-20', tag: 'Best Overall', image: '/images/guides/how-to-master-the-clean-girl-aesthetic-your-ultimate-guide-2026-prod0.jpg' },
      { name: 'The Drop Women\'s Sia Loose-Fit High-Waist Wide Leg Trouser Pant', brand: 'Amazon', price: '$55', url: 'https://www.amazon.com/s?k=The%20Drop%20Women%27s%20Sia%20Loose-Fit%20High-Waist%20Wide%20Leg%20Trouser%20Pant&tag=stylemedaily-20', tag: 'Essential Bottoms', image: '/images/guides/how-to-master-the-clean-girl-aesthetic-your-ultimate-guide-2026-prod1.jpg' },
      { name: 'PAVOI 14K Gold Plated Lightweight Chunky Open Hoops', brand: 'Amazon', price: '$14', url: 'https://www.amazon.com/s?k=PAVOI%2014K%20Gold%20Plated%20Lightweight%20Chunky%20Open%20Hoops&tag=stylemedaily-20', tag: 'Perfect Accessory', image: '/images/guides/how-to-master-the-clean-girl-aesthetic-your-ultimate-guide-2026-prod2.jpg' },
      { name: 'TOCESS Big Hair Claw Clips for Thick Hair', brand: 'Amazon', price: '$10', url: 'https://www.amazon.com/s?k=TOCESS%20Big%20Hair%20Claw%20Clips%20for%20Thick%20Hair&tag=stylemedaily-20', tag: 'Must-Have Hair', image: '/images/guides/how-to-master-the-clean-girl-aesthetic-your-ultimate-guide-2026-prod3.jpg' },
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
    emoji: '?몭',
    image: '/images/guides/eclectic-grandpa-chic-style-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'The KENSINGTON Men\'s Chunky Knit Argyle Cardigan Sweater', brand: 'Amazon', price: '$48', url: 'https://www.amazon.com/s?k=The%20KENSINGTON%20Men%27s%20Chunky%20Knit%20Argyle%20Cardigan%20Sweater&tag=stylemedaily-20', tag: 'Best Overall', image: '/images/guides/eclectic-grandpa-chic-style-guide-2026-prod0.jpg' },
      { name: 'DREAM PAIRS Women\'s Classic Lug Sole Penny Loafers', brand: 'Amazon', price: '$39', url: 'https://www.amazon.com/s?k=DREAM%20PAIRS%20Women%27s%20Classic%20Lug%20Sole%20Penny%20Loafers&tag=stylemedaily-20', tag: 'Top Footwear', image: '/images/guides/eclectic-grandpa-chic-style-guide-2026-prod1.jpg' },
      { name: 'GRACE KARIN Women\'s High Waisted Pleated Trousers with Pockets', brand: 'Amazon', price: '$35', url: 'https://www.amazon.com/s?k=GRACE%20KARIN%20Women%27s%20High%20Waisted%20Pleated%20Trousers%20with%20Pockets&tag=stylemedaily-20', tag: 'Must-Have Pant', image: '/images/guides/eclectic-grandpa-chic-style-guide-2026-prod2.jpg' },
      { name: 'HOTSOX Men\'s Famous Artist Series Novelty Crew Socks', brand: 'Amazon', price: '$15', url: 'https://www.amazon.com/s?k=HOTSOX%20Men%27s%20Famous%20Artist%20Series%20Novelty%20Crew%20Socks&tag=stylemedaily-20', tag: 'Essential Accessory', image: '/images/guides/eclectic-grandpa-chic-style-guide-2026-prod3.jpg' },
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
    emoji: '?몭',
    image: '/images/guides/office-siren-corporate-wear-guide-2026-hero.jpg',
    affiliateProducts: [
      { name: 'GRACE KARIN Women\'s Pencil Skirt High Waist Stretchy Bodycon Skirt', brand: 'Amazon', price: '$32', url: 'https://www.amazon.com/s?k=GRACE%20KARIN%20Women%27s%20Pencil%20Skirt%20High%20Waist%20Stretchy%20Bodycon%20Skirt&tag=stylemedaily-20', tag: 'Best Overall', image: '/images/guides/office-siren-corporate-wear-guide-2026-prod0.jpg' },
      { name: 'SOJOS Retro 90s Rectangle Sunglasses for Women Men Narrow Small Frame SJ2107', brand: 'Amazon', price: '$15', url: 'https://www.amazon.com/s?k=SOJOS%20Retro%2090s%20Rectangle%20Sunglasses%20for%20Women%20Men%20Narrow%20Small%20Frame%20SJ2107&tag=stylemedaily-20', tag: 'Key Accessory', image: '/images/guides/office-siren-corporate-wear-guide-2026-prod1.jpg' },
      { name: 'Cicy Bell Women\'s Casual Blazer Open Front Long Sleeve Work Office Jacket', brand: 'Amazon', price: '$55', url: 'https://www.amazon.com/s?k=Cicy%20Bell%20Women%27s%20Casual%20Blazer%20Open%20Front%20Long%20Sleeve%20Work%20Office%20Jacket&tag=stylemedaily-20', tag: 'Top Layer', image: '/images/guides/office-siren-corporate-wear-guide-2026-prod2.jpg' },
      { name: 'MANGOPOP Women\'s Mock Turtle Neck Long Sleeve Bodysuit', brand: 'Amazon', price: '$25', url: 'https://www.amazon.com/s?k=MANGOPOP%20Women%27s%20Mock%20Turtle%20Neck%20Long%20Sleeve%20Bodysuit&tag=stylemedaily-20', tag: 'Perfect Base', image: '/images/guides/office-siren-corporate-wear-guide-2026-prod3.jpg' },
    ],
  },
  {
    slug: 'how-to-style-wide-leg-jeans-like-a-pro-2026',
    title: 'Your Ultimate Guide to Styling Wide Leg Jeans Like a Pro -- 2026 Edition',
    category: 'casual',
    description: 'Unlock the secrets to rocking wide leg jeans! From casual cool to polished chic, this guide shows you how to style them for every occasion in 2026. Get ready to look fab!',
    readTime: '10 min',
    date: '2026-02-21',
    tag: 'Guide',
    emoji: 'icon',
    image: 'https://placehold.co/600x400?text=Image',
    affiliateProducts: [
      { name: 'High-Waisted Dark Wash Wide Leg Jeans', brand: 'Amazon', price: '$78', url: 'https://amzn.to/4rVjOFg', tag: 'Best Overall', image: 'https://placehold.co/600x400?text=Image' },
      { name: 'Ribbed Knit Cropped Sweater', brand: 'Amazon', price: '$45', url: 'https://amzn.to/3OhrhzW', tag: 'Top Pick', image: 'https://placehold.co/600x400?text=Image' },
      { name: 'Chunky Platform Sneakers', brand: 'Amazon', price: '$90', url: 'https://amzn.to/4tH7kT9', tag: 'Casual Essential', image: 'https://placehold.co/600x400?text=Image' },
      { name: 'Fitted Black Bodysuit', brand: 'Amazon', price: '$35', url: 'https://amzn.to/3Mro7cj', tag: 'Versatile Base', image: 'https://placehold.co/600x400?text=Image' },
      { name: 'Structured Mini Crossbody Bag', brand: 'Amazon', price: '$60', url: 'https://amzn.to/4rUPDhk', tag: 'Accessory Must-Have', image: 'https://placehold.co/600x400?text=Image' },
    ],
  },
  {
    slug: 'how-to-rock-jumpsuits-for-any-occasion-2026',
    title: 'Your Ultimate Guide to Styling Jumpsuits: Look Chic for Any Occasion (2026)',
    category: 'occasion',
    description: 'Jumpsuits are a total game-changer! Learn how to style jumpsuits for work, casual outings, or date night with these best friend tips. Find your perfect fit!',
    readTime: '10 min',
    date: '2026-02-21',
    tag: 'Guide',
    emoji: '✨',
    image: 'https://placehold.co/600x400?text=Image',
    affiliateProducts: [
      { name: 'Classic Wide-Leg Black Jumpsuit', brand: 'Amazon', price: '$75', url: 'https://amzn.to/4rVjOFg', tag: 'Best Overall', image: 'https://placehold.co/600x400?text=Image' },
      { name: 'Denim Utility Jumpsuit', brand: 'Amazon', price: '$60', url: 'https://amzn.to/3OhrhzW', tag: 'Casual Favorite', image: 'https://placehold.co/600x400?text=Image' },
      { name: 'Statement Belt with Gold Buckle', brand: 'Amazon', price: '$30', url: 'https://amzn.to/4kNVNxy', tag: 'Accessorize', image: 'https://placehold.co/600x400?text=Image' },
      { name: 'Comfortable Block Heels', brand: 'Amazon', price: '$55', url: 'https://amzn.to/3OrVpsf', tag: 'Versatile Shoe', image: 'https://placehold.co/600x400?text=Image' },
      { name: 'Delicate Layered Necklace Set', brand: 'Amazon', price: '$25', url: 'https://amzn.to/4tH7kT9', tag: 'Jewelry Pick', image: 'https://placehold.co/600x400?text=Image' },
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

