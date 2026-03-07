import { notFound } from 'next/navigation';
import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import NewsletterCTA from '@/components/NewsletterCTA';
import type { Metadata } from 'next';

interface BlogPost {
  slug: string;
  title: string;
  titleItalic?: string;
  excerpt: string;
  date: string;
  cat: string;
  author: string;
  volume: string;
  image: string;
  content: { heading: string; paragraphs: string[] }[];
  relatedGuides: { title: string; slug: string }[];
}

const blogPosts: Record<string, BlogPost> = {
  'quiet-luxury-guide': {
    slug: 'quiet-luxury-guide',
    title: 'The Silhouette of',
    titleItalic: 'the Season',
    excerpt: 'The quiet luxury trend isn\'t going anywhere. Here\'s how to achieve that understated, expensive-looking aesthetic without spending a fortune.',
    date: '2026-02-18',
    cat: 'EDITORIAL',
    author: 'Sophie Marceau',
    volume: 'VOL. 84',
    image: '/images/blog/quiet-luxury-guide.webp',
    content: [
      { heading: 'What Is Quiet Luxury?', paragraphs: [
        'Quiet luxury is the antithesis of logo-heavy fashion. Think The Row, not Gucci. It\'s about investing in well-made pieces in neutral tones with impeccable fit — clothing that whispers wealth rather than screaming it.',
        'The trend exploded in 2023 with shows like Succession and has evolved into a lasting style movement. In 2026, it\'s less about imitating billionaires and more about building a wardrobe of timeless, quality pieces.',
      ] },
      { heading: 'The Key Pieces You Need', paragraphs: [
        'Start with a well-fitting cashmere sweater in cream, navy, or gray. Add tailored trousers in a straight or wide-leg cut. A structured blazer in black or camel is non-negotiable. For shoes, leather loafers or clean minimalist sneakers.',
        'The secret is fabric quality — even at lower price points, look for high wool content, real leather, and dense cotton. Avoid anything shiny, logo-covered, or overly trendy.',
      ] },
      { heading: 'How to Get the Look on a Budget', paragraphs: [
        'Amazon, H&M\'s premium line, and Uniqlo are your best friends. Focus on fit over brand — a $30 blazer that fits perfectly looks more expensive than a $300 one that doesn\'t.',
        'Stick to a neutral palette: black, white, cream, navy, camel, and gray. Avoid bright colors and prints. Invest in one quality leather bag and one pair of good shoes — these are the details people notice.',
      ] },
      { heading: 'Common Mistakes to Avoid', paragraphs: [
        'Don\'t confuse quiet luxury with boring. The look should feel intentional and polished, not like you gave up trying. Accessories matter — a silk scarf, quality sunglasses, or simple gold jewelry elevates everything.',
        'Also avoid going full monochrome head-to-toe. Mix textures (cashmere with cotton, leather with silk) to add visual interest while keeping the palette restrained.',
      ] },
    ],
    relatedGuides: [
      { title: 'Old Money Summer Aesthetic Guide', slug: 'old-money-summer-aesthetic-guide-2026' },
      { title: 'Quiet Luxury Essentials', slug: 'quiet-luxury-essentials-investment-pieces-2026' },
      { title: 'Clean Girl Aesthetic Guide', slug: 'how-to-master-the-clean-girl-aesthetic-your-ultimate-guide-2026' },
    ],
  },
  'spring-color-trends': {
    slug: 'spring-color-trends',
    title: 'The 5 Colors That Will Dominate',
    titleItalic: 'Spring 2026',
    excerpt: 'Vanilla yellow, soft sage, powder blue, warm terracotta, and lavender are this season\'s key colors.',
    date: '2026-02-17',
    cat: 'TRENDS',
    author: 'Claire Dubois',
    volume: 'VOL. 83',
    image: '/images/blog/spring-color-trends-2026.webp',
    content: [
      { heading: 'Vanilla Yellow', paragraphs: [
        'The biggest color of spring 2026 is vanilla yellow — a soft, buttery shade that flatters every skin tone. It showed up on runways from Bottega Veneta to Jacquemus and is already flooding fast fashion.',
        'Wear it as a blouse, knit top, or midi dress. Pair with white jeans, cream trousers, or denim. For a bolder look, try head-to-toe yellow with different shades and textures.',
      ] },
      { heading: 'Soft Sage', paragraphs: [
        'Sage green continues its reign as the neutral alternative to gray. This muted, earthy green works beautifully in linen blazers, cargo pants, and lightweight knits.',
        'Style it with cream, white, or other earth tones for a grounded, sophisticated look. It\'s especially strong in workwear this season.',
      ] },
      { heading: 'Powder Blue', paragraphs: [
        'A perennial spring favorite, powder blue feels fresh and optimistic. This season it\'s showing up in structured silhouettes — tailored shorts, button-downs, and even suiting.',
        'Pair with navy for a tonal look, or contrast with warm browns and tans.',
      ] },
      { heading: 'Warm Terracotta', paragraphs: [
        'Terracotta brings warmth to spring wardrobes. It\'s earthier than rust and softer than orange, making it surprisingly versatile and flattering on warm and medium skin tones.',
        'Try it in a linen dress, a structured bag, or statement earrings. It pairs beautifully with cream, olive, and chocolate brown.',
      ] },
      { heading: 'Lavender', paragraphs: [
        'Lavender makes a soft comeback after a brief retreat. This spring it\'s less "Gen Z purple" and more sophisticated — think muted, dusty tones rather than bright lilac.',
        'Best in soft fabrics like silk, cashmere, or cotton jersey. A lavender knit with white trousers is one of the easiest, most polished spring outfits you can put together.',
      ] },
    ],
    relatedGuides: [
      { title: 'Y2K Fashion Revival Guide', slug: 'y2k-fashion-revival-ultimate-guide-2026' },
      { title: 'Balletcore Style Guide', slug: 'balletcore-style-guide-how-to-dress-like-a-ballerina-off-duty-2026' },
      { title: 'Gorpcore Women\'s Style Guide', slug: 'gorpcore-womens-style-guide-2026' },
    ],
  },
  'capsule-wardrobe-mistakes': {
    slug: 'capsule-wardrobe-mistakes',
    title: '7 Capsule Wardrobe Mistakes',
    titleItalic: 'That Are Costing You Money',
    excerpt: 'Building a capsule wardrobe sounds simple, but most people get it wrong.',
    date: '2026-02-16',
    cat: 'GUIDE',
    author: 'Elise Martin',
    volume: 'VOL. 82',
    image: '/images/blog/capsule-wardrobe-mistakes.webp',
    content: [
      { heading: 'Mistake 1: Too Many Neutrals, Not Enough Personality', paragraphs: [
        'The biggest capsule wardrobe mistake is building a closet full of black, white, and gray and wondering why getting dressed feels boring. You need at least 2-3 "accent" pieces — a colored blazer, a printed scarf, a statement shoe.',
        'A capsule wardrobe should feel like you, just edited. If you love color, keep color. The goal is fewer pieces, not no personality.',
      ] },
      { heading: 'Mistake 2: Ignoring Fit', paragraphs: [
        'Spending $200 on a "quality" blazer that doesn\'t fit properly is worse than a $40 one that does. Fit is the single biggest factor in whether clothes look expensive.',
        'Budget $50-100 per year for tailoring. Getting pants hemmed, blazers taken in at the waist, and sleeves shortened transforms cheap clothes into expensive-looking ones.',
      ] },
      { heading: 'Mistake 3: Buying "Capsule Wardrobe" Items You Hate', paragraphs: [
        'Every capsule wardrobe guide says you need a white button-down. But if you hate wearing button-downs, that shirt will sit unworn. Replace prescribed items with YOUR version.',
        'Hate blazers? A structured cardigan works. Don\'t wear heels? Nice flats or loafers. The best capsule wardrobe is one you\'ll actually wear.',
      ] },
      { heading: 'Mistake 4: Not Considering Your Actual Lifestyle', paragraphs: [
        'If you work from home 4 days a week, 60% of your wardrobe should be elevated loungewear and casual pieces — not office suits. Build your capsule around how you actually live.',
        'Track what you wear for 2 weeks before building your capsule. You\'ll be surprised how different your real life is from your imagined wardrobe needs.',
      ] },
      { heading: 'Mistakes 5-7: Overbuying, Ignoring Seasons, and Not Testing', paragraphs: [
        'Don\'t buy everything at once. Start with 15 pieces and live with them for a month. You\'ll quickly learn what\'s missing without wasting money on things you don\'t need.',
        'Build seasonally — a summer capsule needs different fabrics and weights than a winter one. And always "test drive" expensive purchases by wearing the outfit 3 times mentally before buying.',
      ] },
    ],
    relatedGuides: [
      { title: 'Clean Girl Aesthetic Guide', slug: 'how-to-master-the-clean-girl-aesthetic-your-ultimate-guide-2026' },
      { title: 'Quiet Luxury Essentials', slug: 'quiet-luxury-essentials-investment-pieces-2026' },
      { title: 'How to Rock Jumpsuits for Any Occasion', slug: 'how-to-rock-jumpsuits-for-any-occasion-2026' },
    ],
  },
  'nordstrom-vs-asos': {
    slug: 'nordstrom-vs-asos',
    title: 'Nordstrom vs ASOS:',
    titleItalic: 'We Compared 9 Categories',
    excerpt: 'Quality, pricing, sizing, returns, sustainability — we spent weeks comparing both retailers to help you decide where your fashion budget goes further.',
    date: '2026-02-15',
    cat: 'COMPARISON',
    author: 'Claire Dubois',
    volume: 'VOL. 81',
    image: '/images/blog/nordstrom-vs-asos.webp',
    content: [
      { heading: 'The Real Difference in Quality', paragraphs: [
        'After ordering 30+ items from each retailer, the quality gap is narrower than you\'d expect. Nordstrom wins on knitwear — their Caslon and Halogen lines use denser cotton blends and better finishing. ASOS basics, particularly the jersey tees and ribbed tanks, pill after three washes. But ASOS Editions and their premium lines? Genuinely impressive for the price. We got a wool-blend coat for $120 that rivaled Nordstrom pieces twice the cost.',
        'Denim is where it gets interesting. ASOS\'s own-brand jeans run thin and stretch out fast, but their Topshop and Reclaimed Vintage lines hold up remarkably well. Nordstrom\'s exclusive AG and Paige collabs remain the gold standard for mid-range denim — heavier weight, better pocket placement, more flattering rise. If jeans are your priority, Nordstrom wins.',
      ] },
      { heading: 'Sizing, Returns, and the Shopping Experience', paragraphs: [
        'ASOS sizing is wildly inconsistent across their 800+ brands. A size 8 in ASOS Design fits like a 6 in their New Look range. Nordstrom is more predictable — their in-house brands run true, and the detailed size guides actually help. The real advantage? Nordstrom lets you try things on in-store. That alone saves you from the returns cycle that makes ASOS shopping feel like a part-time job.',
        'Returns are where Nordstrom crushes it. Free returns, no questions, no time limit for most items. ASOS gives you 28 days and has started flagging "serial returners" — a real concern if you\'re ordering multiple sizes. Nordstrom\'s alterations service is also an underrated perk. Getting a $60 dress hemmed for free transforms it from "fine" to "perfect."',
      ] },
      { heading: 'Our Verdict: Where to Spend Your Money', paragraphs: [
        'For trend-driven pieces you\'ll wear one season — going-out tops, statement accessories, seasonal prints — ASOS is the smarter spend. You\'re not investing in longevity, so pay less. Their trend cycle is faster than any department store, and new drops hit almost daily.',
        'For wardrobe foundations — a trench coat, quality denim, cashmere, leather goods — Nordstrom is worth the premium. The per-wear cost is lower because these pieces genuinely last. Our recommendation: split your budget 60/40, with the larger portion going to whichever retailer better fits your lifestyle.',
      ] },
    ],
    relatedGuides: [
      { title: 'Quiet Luxury Essentials', slug: 'quiet-luxury-essentials-investment-pieces-2026' },
      { title: 'How to Rock Jumpsuits for Any Occasion', slug: 'how-to-rock-jumpsuits-for-any-occasion-2026' },
    ],
  },
  'jeans-buying-guide': {
    slug: 'jeans-buying-guide',
    title: 'We Tried 40+ Pairs of Jeans',
    titleItalic: 'So You Don\'t Have To',
    excerpt: 'From high-waisted wide legs to the perfect straight cut — our honest, tested rankings for every body type and budget in 2026.',
    date: '2026-02-14',
    cat: 'GUIDE',
    author: 'Elise Martin',
    volume: 'VOL. 80',
    image: '/images/blog/jeans-buying-guide.webp',
    content: [
      { heading: 'The Wide-Leg Winners', paragraphs: [
        'Wide-leg jeans dominated our testing. The Agolde Low Slung Baggy in Rename ($198) was our overall favorite — the 100% organic cotton has genuine weight, the low rise sits perfectly at the hip, and the leg opening is dramatic without drowning petite frames. For a budget pick, Abercrombie\'s Curve Love Wide Leg ($90) has become a cult favorite for good reason. The fabric is surprisingly rigid for the price, and the curve-friendly rise eliminates the waist gap that plagues most jeans.',
        'We were disappointed by the Levi\'s Ribcage Wide Leg. At $98, the cotton-Tencel blend feels thin and the rise is so high it creates an unflattering bunching effect through the hip. Citizens of Humanity\'s Annina ($228) is beautiful but overpriced — the H&M wide-leg jean ($35) delivers 80% of the look at a fraction of the cost.',
      ] },
      { heading: 'The Best Straight-Leg for Every Budget', paragraphs: [
        'The straight leg is the most versatile silhouette right now, and our top pick is the Everlane Way-High Jean in Vintage Canvas ($78). Mid-weight organic cotton, a touch of stretch without that uncomfortable squeeze, and a flattering straight leg that tapers just enough at the ankle. It\'s the jean that works with loafers, sneakers, and heels equally well.',
        'At the luxury end, SLVRLAKE\'s London ($289) in their Bright Blue wash is genuinely special — Japanese selvedge denim with a beautiful drape. But honestly? For most people, the Madewell Perfect Vintage Straight ($128) hits the sweet spot. The "broken-in" feel is authentic, not that weird pre-distressed softness that cheaper brands attempt.',
      ] },
      { heading: 'What We\'d Actually Buy Again', paragraphs: [
        'After testing everything from $25 Amazon finds to $350 designer pairs, our ride-or-die list is short: Agolde for wide legs, Everlane for straight legs, and Abercrombie Curve Love for anyone who struggles with fit. Those three cover every need without the guilt of overspending.',
        'Skip the viral TikTok jeans from brands you\'ve never heard of. We tested six pairs from Instagram ads, and every single one used that flimsy stretch denim that loses its shape by lunchtime. Good denim should feel stiff when new and soften with wear — not the other way around.',
      ] },
    ],
    relatedGuides: [
      { title: 'How to Style Wide Leg Jeans', slug: 'how-to-style-wide-leg-jeans-like-a-pro-2026' },
      { title: 'Old Money Summer Aesthetic Guide', slug: 'old-money-summer-aesthetic-guide-2026' },
      { title: 'Clean Girl Aesthetic Guide', slug: 'how-to-master-the-clean-girl-aesthetic-your-ultimate-guide-2026' },
    ],
  },
  'body-shape-dressing': {
    slug: 'body-shape-dressing',
    title: 'The Visual Guide to Dressing',
    titleItalic: 'for Your Body Shape',
    excerpt: 'Pear, apple, hourglass, rectangle, or inverted triangle — find your type and discover the specific cuts, fabrics, and silhouettes that flatter you most.',
    date: '2026-02-13',
    cat: 'GUIDE',
    author: 'Sophie Marceau',
    volume: 'VOL. 79',
    image: '/images/blog/body-shape-dressing.webp',
    content: [
      { heading: 'Why Most Body Shape Advice Is Outdated', paragraphs: [
        'Here\'s the thing about traditional body shape guides: they\'re rooted in the idea that everyone should look like an hourglass. That\'s not styling advice — it\'s conformity dressed up as fashion. The real goal is understanding your proportions so you can choose silhouettes that make you feel good, not squeeze yourself into someone else\'s idea of "flattering."',
        'We\'re keeping the body shape framework because it\'s genuinely useful for understanding proportion, but throwing out the rules. A pear shape doesn\'t need to "balance" her hips with shoulder pads. She might want to highlight them in a bias-cut skirt from Reformation. An apple shape doesn\'t have to hide her midsection — she might love a fitted Skims bodysuit. This guide is about options, not prescriptions.',
      ] },
      { heading: 'Proportions That Actually Matter', paragraphs: [
        'Forget the fruit analogies for a second. What really matters in clothing fit are three measurements: where your natural waist sits, the width of your shoulders relative to your hips, and your torso length. A high natural waist means mid-rise jeans might cut you at the widest point — try a proper high-rise or a true low-rise instead. Broader shoulders? A raglan sleeve in soft jersey looks infinitely better than a structured shoulder in a stiff blazer.',
        'The fabric rule nobody talks about: structured fabrics (cotton poplin, denim, wool suiting) create shape, while drapey fabrics (silk, rayon, Tencel) reveal it. Neither is better — it depends on what you want. A boxy Cos poplin shirt creates a straight silhouette regardless of your shape. A Vince silk camisole follows your body exactly. Choose based on the effect you want that day, not some rigid body type system.',
      ] },
      { heading: 'The Pieces That Flatter Everyone', paragraphs: [
        'After fitting hundreds of women over the years, a few pieces are almost universally flattering. A wrap dress or top — the V-neckline elongates, the tie waist adjusts to any proportion. High-waisted wide-leg trousers with a defined waistband, like the COS tailored pair ($99) or Everlane\'s Way-High Drape ($88). And the unstructured blazer: not boxy, not fitted, just skimming the body with enough room to move. Mango and Zara both do excellent versions under $80.',
        'The universal mistake? Wearing clothes that are slightly too small, thinking it looks "fitted." A blazer that pulls at the button or jeans that create a muffin top aren\'t flattering on anyone, regardless of body shape. Size up, get it tailored if needed. The number on the tag is meaningless — the way it sits on your body is everything.',
      ] },
    ],
    relatedGuides: [
      { title: 'How to Rock Jumpsuits for Any Occasion', slug: 'how-to-rock-jumpsuits-for-any-occasion-2026' },
      { title: 'Quiet Luxury Essentials', slug: 'quiet-luxury-essentials-investment-pieces-2026' },
    ],
  },
  'amazon-fashion-haul': {
    slug: 'amazon-fashion-haul',
    title: '25 Amazon Fashion Finds Under $30',
    titleItalic: 'That Look Expensive',
    excerpt: 'From Editor\'s Choice picks to hidden gems — every item is rated 4+ stars and looks way more expensive than it is. Our honest take after testing each one.',
    date: '2026-02-12',
    cat: 'FINDS',
    author: 'Claire Dubois',
    volume: 'VOL. 78',
    image: '/images/blog/amazon-fashion-haul.webp',
    content: [
      { heading: 'The Pieces That Genuinely Surprised Us', paragraphs: [
        'The Drop\'s Ana silky scoop-neck camisole ($25) has no business looking this good at this price. The charmeuse fabric has a real weight to it — it doesn\'t cling or go static the way most polyester "silk" does. We tested it under a blazer for work and alone on a date night and it held up both times. The colorway in "Champagne" reads genuinely expensive. Only catch: hand wash only, or it loses that buttery drape.',
        'Another standout — the Amazon Essentials women\'s relaxed-fit french terry fleece sweatshirt ($18). Hear me out. This is not a fashion piece, but it\'s the best elevated-basic sweatshirt we\'ve tested under $50. The cotton-poly blend is dense enough to hold structure, the fit is intentionally relaxed without being sloppy, and the inside is genuinely soft. Tuck it into high-waisted trousers with loafers and you have a quiet luxury look for under $20.',
      ] },
      { heading: 'What to Skip', paragraphs: [
        'Not everything in our haul was a hit. The Amazon Essentials ponte pants ($24) that went viral on TikTok are, frankly, disappointing in person. The fabric is too thin — you can see underwear lines — and the elastic waist rolls down constantly. For work pants at this price, the IUGA bootcut yoga dress pants ($30) are genuinely better: thicker fabric, real pockets, a waistband that stays put.',
        'We also weren\'t impressed by most of the Amazon jewelry. The "14k gold plated" pieces tarnish within weeks. If you want affordable jewelry that actually lasts, spend the extra $5-10 on PAVOI or Gorjana\'s Amazon selections. Their plating is noticeably thicker and the designs look less "Amazon" and more "Mejuri."',
      ] },
      { heading: 'Our Top 5 Must-Buys', paragraphs: [
        'If you\'re only buying five things: The Drop Ana cami in Champagne ($25), the Amazon Essentials ballet flat in black leather ($26) which is a dead ringer for the $300 Mansur Gavriel version, the Lark & Ro georgette long sleeve blouse ($29) for work, the Daily Ritual terry cotton sweatshirt ($22) for weekends, and the AUTOMET oversized blazer ($30) that TikTok rightfully loves.',
        'One tip for shopping Amazon fashion: always check the "Customers Also Bought" section on winning items. Amazon\'s algorithm is surprisingly good at surfacing similar-quality pieces. And filter reviews by "Most Recent" — quality changes between manufacturing runs, so a piece that was great six months ago might have switched to cheaper fabric.',
      ] },
    ],
    relatedGuides: [
      { title: 'Quiet Luxury Essentials', slug: 'quiet-luxury-essentials-investment-pieces-2026' },
      { title: 'How to Rock Jumpsuits for Any Occasion', slug: 'how-to-rock-jumpsuits-for-any-occasion-2026' },
      { title: 'Old Money Summer Aesthetic Guide', slug: 'old-money-summer-aesthetic-guide-2026' },
    ],
  },
  'spring-workwear': {
    slug: 'spring-workwear',
    title: 'Spring Workwear Capsule:',
    titleItalic: '15 Pieces, 30 Outfits',
    excerpt: 'Transition your work wardrobe into spring with these 15 versatile pieces. We mapped out 30 outfit combinations so you never have to think about getting dressed.',
    date: '2026-02-11',
    cat: 'EDITORIAL',
    author: 'Elise Martin',
    volume: 'VOL. 77',
    image: '/images/blog/spring-workwear.webp',
    content: [
      { heading: 'The 15 Pieces and Why Each One Earns Its Spot', paragraphs: [
        'Every piece in this capsule had to pass one test: does it pair with at least four other items on the list? The lineup: a cream silk blouse (Everlane, $78), a navy cotton blazer (Zara, $70), sage wide-leg trousers (Mango, $60), a white cotton poplin shirt (Uniqlo, $30), a camel knit vest (H&M, $25), a black midi skirt in crepe (& Other Stories, $79), light-wash straight-leg jeans (Madewell, $128), a striped Breton tee (Saint James, $85), a powder blue button-down (Brooks Brothers, $88), tailored shorts in khaki (Banana Republic, $65), a linen-blend trench coat (COS, $175), black leather loafers (Sam Edelman, $130), white leather sneakers (Veja, $120), a structured leather tote in tan (Madewell, $178), and simple gold hoops (Mejuri, $60).',
        'Total cost: approximately $1,370 for a complete spring work wardrobe. That\'s $46 per outfit if you wear all 30 combinations. Many of these pieces cross over into weekend wear, so the real per-wear cost drops even further. The key is that everything shares a cohesive palette — cream, navy, sage, camel, and powder blue all play together without effort.',
      ] },
      { heading: 'Our Favorite Combinations', paragraphs: [
        'Monday: sage trousers + cream silk blouse + navy blazer + loafers. This is the combination that makes people ask where you shop. The sage-cream pairing reads expensive even though the pants are $60 Mango. Tuesday: black midi skirt + striped Breton tee + trench coat + sneakers. Parisian without trying. Wednesday: jeans + white poplin shirt + camel knit vest + loafers. Quiet luxury meets casual Friday.',
        'The formula for building combinations from these pieces: pick a bottom, add a top in a contrasting (not matching) tone, layer a structured piece if the office runs cold, and choose shoes based on your meeting schedule. Loafers for client days, sneakers for studio days. The gold hoops go with literally everything and save you from accessory decision fatigue. We mapped all 30 combos in the downloadable PDF linked below.',
      ] },
      { heading: 'Making It Work for Your Office Culture', paragraphs: [
        'If your office is more corporate: swap the jeans for a second pair of tailored trousers in charcoal, and swap the sneakers for pointed-toe flats. If your workplace is creative and casual: add a pair of statement earrings to the rotation and swap the blazer for an unstructured linen jacket. The bones of the capsule stay the same — the 15-piece structure works regardless.',
        'One thing we learned building this: you need exactly three "top halves" for every two "bottom halves." More tops than bottoms keeps your look fresh because people notice what\'s closest to your face. Nobody clocks that you\'re wearing the same sage trousers again if the blouse is different. Invest more in tops and outerwear, save on basics like the white tee and the khaki shorts.',
      ] },
    ],
    relatedGuides: [
      { title: 'Office Siren Corporate Wear Guide', slug: 'office-siren-corporate-wear-guide-2026' },
      { title: 'Clean Girl Aesthetic Guide', slug: 'how-to-master-the-clean-girl-aesthetic-your-ultimate-guide-2026' },
      { title: 'Old Money Summer Aesthetic Guide', slug: 'old-money-summer-aesthetic-guide-2026' },
    ],
  },
  'interview-outfits': {
    slug: 'interview-outfits',
    title: 'What to Wear to Every Type',
    titleItalic: 'of Job Interview in 2026',
    excerpt: 'Corporate, startup, creative agency, or remote — first impressions matter. The complete guide to looking professional without overdressing.',
    date: '2026-02-10',
    cat: 'GUIDE',
    author: 'Sophie Marceau',
    volume: 'VOL. 76',
    image: '/images/blog/interview-outfits.webp',
    content: [
      { heading: 'Corporate and Finance: The Power Play', paragraphs: [
        'For banking, consulting, law firms, and traditional corporate environments, the rules haven\'t changed as much as people claim. A well-fitted suit still reads as "I take this seriously." But the suit itself has evolved. Skip the matching skirt suit unless you\'re interviewing at a firm that still enforces pantyhose. A navy or charcoal wool-blend trouser suit with a silk shell underneath is the 2026 standard. Theory and Reiss make excellent options in the $300-400 range. Banana Republic\'s Italian wool suit ($250 for the set) punches well above its weight.',
        'The details that hiring managers actually notice: clean, polished shoes (not scuffed or worn-down heels), a bag that holds a portfolio without looking like a diaper bag, and nails that are groomed — not necessarily manicured, just clean. Skip statement jewelry. A simple watch and small earrings communicate "I focused on preparing for this interview, not on accessorizing." That energy reads more confident than any power blazer.',
      ] },
      { heading: 'Startups and Tech: The Polished Casual', paragraphs: [
        'The biggest mistake people make interviewing at startups is showing up in a suit when the CEO is in a hoodie. You\'ll look out of touch, which is the opposite of what you want. The sweet spot: tailored trousers (not jeans, not suit pants) with a quality knit top or a crisp blouse with one button undone. Everlane\'s Dream Pant ($68) with a Cos merino sweater ($89) is exactly right. Add clean white sneakers or simple leather flats.',
        'For more casual tech companies — the kind where engineers wear shorts — jeans are fine. But make them dark wash, well-fitting, and pair them with something that shows intentionality. A structured blazer over a plain tee and dark jeans says "I get the culture but I also showed up prepared." The Zara soft-touch blazer ($50) works perfectly for this. No logos, no graphic tees, no athleisure. You\'re interviewing, not heading to the gym.',
      ] },
      { heading: 'Remote Interviews: Yes, It Still Matters', paragraphs: [
        'The temptation with Zoom interviews is to only dress from the waist up. Resist it. Getting fully dressed changes your posture and confidence — interviewers can sense the difference even through a screen. A structured top in a solid color that pops on camera (think cobalt, emerald, or burgundy rather than white or black, which wash out under ring lights) makes a measurable difference. Avoid busy patterns that strobe on camera and anything sheer — laptop webcams pick up transparency that mirrors don\'t.',
        'Set up matters as much as outfit. Natural light from the front or side, a clean background (not a fake Zoom backdrop — interviewers find them distracting), and your camera at eye level. Wear the earrings but skip the necklace if it\'ll clink against your microphone. And iron your top. Wrinkles that are invisible in person become HD billboards on a webcam. A quick steam with a handheld steamer before the call takes 30 seconds and makes you look 30% more put-together.',
      ] },
    ],
    relatedGuides: [
      { title: 'The Ultimate Office Siren Style Guide', slug: 'the-ultimate-office-siren-style-guide-how-to-get-the-viral-tiktok-look' },
      { title: 'Office Siren Corporate Wear Guide', slug: 'office-siren-corporate-wear-guide-2026' },
    ],
  },
  'summer-preview': {
    slug: 'summer-preview',
    title: 'Summer 2026',
    titleItalic: 'Fashion Preview',
    excerpt: 'It\'s never too early to prep for summer. From linen everything to the return of the maxi dress — here\'s what we\'re buying now before it sells out.',
    date: '2026-02-09',
    cat: 'TRENDS',
    author: 'Claire Dubois',
    volume: 'VOL. 75',
    image: '/images/blog/summer-preview.webp',
    content: [
      { heading: 'Linen Is Having Its Best Season Yet', paragraphs: [
        'Every summer, linen has a moment. But 2026 feels different — this time, brands are actually solving linen\'s two biggest problems: the wrinkles and the see-through factor. COS\'s new linen-cotton blend trousers ($89) hold a crease without looking rumpled by noon. Reformation\'s linen midi dress ($218) has a built-in slip that eliminates the "underwear on display" issue. Even H&M\'s linen line ($25-40) has noticeably improved — denser weaves, better drape, fewer of those weird slubs that made old H&M linen look cheap.',
        'The colors to buy in linen: oatmeal, ecru, soft terracotta, and olive. Avoid white linen unless you\'re prepared to line it — even expensive white linen is somewhat transparent. A full linen suit (matching blazer and wide-leg trouser) is the power move of the season. Mango\'s version ($130 for the set) sold out twice during pre-order. It\'s giving Amalfi Coast energy without the Brunello Cucinelli price tag.',
      ] },
      { heading: 'The Maxi Dress Returns (For Real This Time)', paragraphs: [
        'After years of midi dominance, the maxi dress is back — and it\'s better than it was in 2019. The new maxis are less boho, more architectural. Think clean columns in ribbed jersey, A-line silhouettes in cotton poplin, and slip-style maxis in washed silk. The hemline hits the ankle, not the floor, which eliminates that "tripping hazard at brunch" problem.',
        'Our early favorite is the & Other Stories column maxi in black ribbed cotton ($79). It works with flat sandals for farmers market Saturday, with a belt and gold hoops for dinner, and with a denim jacket thrown over for a cool evening. If you only buy one dress this summer, make it a black column maxi. It\'s the warm-weather equivalent of the quiet luxury uniform.',
      ] },
      { heading: 'What We\'re Buying Now Before It Sells Out', paragraphs: [
        'The smart summer shoppers are already building their warm-weather capsules. Three things to grab now: a quality pair of flat leather sandals (the Ancient Greek Sandals Eleftheria at $185 or Madewell\'s boardwalk version at $50 — both excellent), a structured raffia or straw bag (not the floppy beach tote, but a rigid top-handle that works at a restaurant), and a cotton or linen button-down in an interesting color. Forget white — try butter yellow, soft peach, or dusty rose.',
        'What to wait on: swim. Every brand drops their "final" swim collection in April, and the prints and cuts improve dramatically from what\'s available now. Sunglasses are also worth waiting for — the spring collections from Le Specs and Quay land in March with better colorways than the early drops. Patience saves money and gets you better product.',
      ] },
    ],
    relatedGuides: [
      { title: 'Old Money Summer Aesthetic Guide', slug: 'old-money-summer-aesthetic-guide-2026' },
      { title: 'Y2K Fashion Revival Guide', slug: 'y2k-fashion-revival-ultimate-guide-2026' },
      { title: 'Balletcore Style Guide', slug: 'balletcore-style-guide-how-to-dress-like-a-ballerina-off-duty-2026' },
    ],
  },
  'sunglasses-face-shape': {
    slug: 'sunglasses-face-shape',
    title: 'The Only Sunglasses Guide',
    titleItalic: 'You Need',
    excerpt: 'Round, oval, square, or heart — we matched the best frame styles to every face shape, all under $50. Includes our tested top picks.',
    date: '2026-02-08',
    cat: 'GUIDE',
    author: 'Elise Martin',
    volume: 'VOL. 74',
    image: '/images/blog/sunglasses-face-shape.webp',
    content: [
      { heading: 'Forget the Rules — Start With Proportion', paragraphs: [
        'Every sunglasses guide tells you the same thing: round faces need angular frames, square faces need round ones. It\'s not wrong, but it\'s oversimplified. The real key is proportion. A frame should be as wide as or slightly wider than the widest part of your face. Too narrow and your face looks wider by contrast. Too wide and you look like a kid wearing mom\'s sunglasses. Hold a pair up to your face and check: do the outer edges line up with your temples? That\'s your starting point.',
        'The other proportion that matters is the frame height relative to your face length. If you have a shorter face, an oversized aviator with deep lenses will swallow your features. Choose a shallower lens — cat-eye shapes and clubmaster styles are your best friends. Longer faces can handle the oversized trend beautifully. A large square frame from Le Specs or a deep round frame from Quay provides the balance that smaller frames can\'t.',
      ] },
      { heading: 'Our Tested Picks Under $50', paragraphs: [
        'After testing 25 pairs under $50 — wearing each for a full week to check comfort, durability, and UV protection — our standouts: the Quay Rumours ($45) for round and heart faces (the angular cat-eye adds structure without being aggressive), the Le Specs Bandwagon ($60, often on sale for $42) for square faces (the soft rectangular shape with rounded edges works on practically everyone), and the SOJOS Classic Square ($14 on Amazon) as our budget king. At $14, the SOJOS shouldn\'t be this good. The acetate feels solid, the hinges are sturdy, and they actually block UV400.',
        'The pair we\'d recommend if you just want one: the Le Specs Air Heart in Black ($65, frequently discounted to $45). It\'s technically a cat-eye, but the proportions are so balanced that it flatters round, oval, square, and heart faces. We know because we tested it on all four. The polished acetate doesn\'t look cheap, the fit is comfortable without pinching, and the size is right for most faces. Worth every penny.',
      ] },
      { heading: 'What to Actually Look For When Shopping', paragraphs: [
        'UV protection is non-negotiable, and here\'s the thing most people don\'t know: the tint of the lens has nothing to do with UV protection. A clear lens can block 100% of UV rays, while a dark lens with no coating blocks nothing. Look for "UV400" or "100% UV protection" on the label. If it doesn\'t say either, skip it — no matter how cute the frames are. Your retinas are not worth the aesthetic.',
        'Material matters for longevity. Acetate frames (the material most quality frames use) are more durable and adjustable than injection-molded plastic. You can tell the difference by weight — acetate feels substantial, cheap plastic feels hollow. At the sub-$50 price point, Quay, Le Specs, and SOJOS use real acetate. Most gas station and fast fashion sunglasses use injection-molded plastic that snaps at the hinges within months.',
      ] },
    ],
    relatedGuides: [
      { title: 'Coquette Aesthetic Guide', slug: 'coquette-aesthetic-2026-ultimate-guide' },
      { title: 'Gorpcore Women\'s Style Guide', slug: 'gorpcore-womens-style-guide-2026' },
    ],
  },
  'stitch-fix-review': {
    slug: 'stitch-fix-review',
    title: 'Stitch Fix vs Personal Stylist:',
    titleItalic: 'An Honest Comparison',
    excerpt: 'We tested Stitch Fix for 6 months and compared it to working with a personal stylist. Here\'s the real cost breakdown and which option delivered better results.',
    date: '2026-02-07',
    cat: 'REVIEW',
    author: 'Sophie Marceau',
    volume: 'VOL. 73',
    image: '/images/blog/stitch-fix-review.webp',
    content: [
      { heading: 'Six Months With Stitch Fix: The Unfiltered Truth', paragraphs: [
        'I signed up for Stitch Fix expecting to be underwhelmed. The first box confirmed my suspicions — a polyester blouse that screamed "corporate clip art," a pair of straight-leg jeans that were fine but nothing special, and a cardigan in a color I\'d specifically said I didn\'t like in my style quiz. I kept the jeans ($68) and sent back the rest. The $20 styling fee gets credited if you keep something, which softens the blow, but those first impressions matter.',
        'By month three, things improved noticeably. My stylist (you get a real human, not just an algorithm) learned that I gravitate toward clean lines, natural fabrics, and muted colors. The boxes started including brands like Liverpool Los Angeles and Market & Spruce that I\'d never have found on my own. A merino wool sweater in sage ($54) became one of my most-worn pieces. The hit rate went from 1 out of 5 to 3 out of 5. That learning curve is real, but three months is a long time to pay $20/box for misses.',
      ] },
      { heading: 'Working With a Personal Stylist: Worth the Splurge?', paragraphs: [
        'For comparison, I hired a personal stylist for $350 (a one-time session that included a closet edit, a shopping list, and a 2-hour shopping trip). Within the first hour, she identified my color season (soft summer), explained why certain silhouettes feel "off" on my frame (I have a long torso and was choosing tops that cut at the wrong point), and pulled pieces I never would have tried. A cropped wide-leg trouser from Zara ($46) that I\'d walked past a dozen times became the best thing in my closet.',
        'The difference is expertise. Stitch Fix\'s stylist works from your quiz answers and return feedback. A personal stylist sees your body, your skin tone, your existing wardrobe, and — crucially — what makes your face light up when you try something on. That real-time feedback loop is something no algorithm can replicate. After one session, my styling success rate was essentially 100% because every piece was chosen specifically for me, in person.',
      ] },
      { heading: 'The Cost Breakdown and Our Recommendation', paragraphs: [
        'Over six months, Stitch Fix cost me $820: six $20 styling fees plus the items I kept. I kept 11 items total, averaging $65 each. Of those, I still wear 7 regularly — the others were fine but didn\'t earn their spot once the novelty wore off. The personal stylist cost $350 for the session plus about $500 in purchases she helped me select. I kept everything, and I wear all of it. Per "item I actually love," the personal stylist won by a wide margin.',
        'Our recommendation: if you genuinely have no idea what suits you and want a low-commitment way to experiment, Stitch Fix\'s monthly boxes are a reasonable starting point. Give it three months and be detailed in your feedback. But if you have $300-500 to invest in actually understanding your style — what colors, cuts, and fabrics work for your specific body — a one-time session with a personal stylist delivers more value. It\'s the difference between someone guessing what you might like and someone showing you exactly what works.',
      ] },
    ],
    relatedGuides: [
      { title: 'Gorpcore Women\'s Style Guide', slug: 'gorpcore-womens-style-guide-2026' },
      { title: 'Quiet Luxury Essentials', slug: 'quiet-luxury-essentials-investment-pieces-2026' },
      { title: 'Clean Girl Aesthetic Guide', slug: 'how-to-master-the-clean-girl-aesthetic-your-ultimate-guide-2026' },
    ],
  },
};

const allSlugs = Object.keys(blogPosts);

export function generateStaticParams() {
  return allSlugs.map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts[params.slug];
  if (!post) return {};
  const fullTitle = post.titleItalic ? `${post.title} ${post.titleItalic}` : post.title;
  return {
    title: fullTitle,
    description: post.excerpt,
    openGraph: {
      title: fullTitle,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630 }],
      siteName: SITE_NAME,
    },
    alternates: { canonical: `${SITE_URL}/blog/${params.slug}` },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  if (!post) notFound();

  const fullTitle = post.titleItalic ? (
    <>
      {post.title}{' '}
      <em className="italic">{post.titleItalic}</em>
    </>
  ) : post.title;

  return (
    <article className="pt-8">
      {/* Article header */}
      <header className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-[11px] tracking-editorial uppercase text-editorial-muted font-body font-medium mb-6">
          {post.cat} &gt; {post.volume}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-editorial-text leading-tight mb-6">
          {fullTitle}
        </h1>
        <p className="text-[11px] tracking-editorial uppercase text-editorial-muted font-body">
          BY {post.author.toUpperCase()}
        </p>
      </header>

      {/* Full-width hero image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-editorial-light mb-12">
        <SafeImage
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto">
        <div className="prose-style">
          {post.content.map((section, idx) => (
            <div key={idx}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>
          ))}
        </div>

        {post.relatedGuides.length > 0 && (
          <div className="mt-16 mb-8 pt-10 border-t border-editorial-border">
            <h3 className="text-[11px] tracking-editorial uppercase text-editorial-text font-body font-medium mb-6">Related Guides</h3>
            <div className="space-y-3">
              {post.relatedGuides.map(g => (
                <Link key={g.slug} href={`/guides/${g.slug}`}
                  className="flex items-center gap-3 py-3 text-sm font-body text-editorial-muted hover:text-editorial-text transition-colors border-b border-editorial-border">
                  <span>&rarr;</span>
                  <span>{g.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12">
          <NewsletterCTA />
        </div>
      </div>
    </article>
  );
}
