import { notFound } from 'next/navigation';
import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import NewsletterCTA from '@/components/NewsletterCTA';
import type { Metadata } from 'next';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  cat: string;
  image: string;
  content: { heading: string; paragraphs: string[] }[];
  relatedGuides: { title: string; slug: string }[];
}

const blogPosts: Record<string, BlogPost> = {
  'quiet-luxury-guide': {
    slug: 'quiet-luxury-guide',
    title: 'Quiet Luxury in 2026: How to Nail the "Old Money" Look on Any Budget',
    excerpt: 'The quiet luxury trend isn\'t going anywhere. Here\'s how to achieve that understated, expensive-looking aesthetic without spending a fortune.',
    date: '2026-02-18',
    cat: 'Style',
    image: '/images/blog/quiet-luxury-guide.webp',
    content: [
      { heading: 'What Is Quiet Luxury?', paragraphs: [
        'Quiet luxury is the antithesis of logo-heavy fashion. Think The Row, not Gucci. It\'s about investing in well-made pieces in neutral tones with impeccable fit — clothing that whispers wealth rather than screaming it.',
        'The trend gained cultural momentum with prestige TV aesthetics and has evolved into a lasting style movement. In 2026, it\'s less about status signaling and more about building a wardrobe of timeless, quality pieces that you wear for years rather than seasons.',
        'The philosophy is simple: buy less, buy better. A single well-made cashmere sweater worn 50 times delivers more value and style than 10 fast-fashion tops worn twice. Quiet luxury is ultimately a mindset shift as much as a wardrobe shift.',
      ] },
      { heading: 'The Key Pieces You Need', paragraphs: [
        'Start with a well-fitting cashmere or merino sweater in cream, navy, or gray. Add tailored trousers in a straight or wide-leg cut — the silhouette reads as instantly elevated regardless of price point.',
        'A structured blazer in black or camel is non-negotiable. For shoes, leather loafers or clean minimalist sneakers in white or cream. A quality leather tote or structured shoulder bag ties the entire look together without competing with the clothing.',
        'The secret is fabric quality — even at lower price points, look for high wool content, real leather, and dense cotton. Avoid anything shiny, logo-covered, or overly trendy. The goal is to look expensive without looking like you tried.',
      ] },
      { heading: 'How to Get the Look on a Budget', paragraphs: [
        'Amazon has genuinely excellent quiet luxury options if you know what to look for. Search for merino wool sweaters ($35-55), wide-leg trousers in ponte or crepe fabric ($28-45), and structured blazers in neutral tones ($40-65). Read the fabric content before buying and stick to natural fibers where possible.',
        'Focus on fit over brand — a $30 blazer that fits perfectly looks more expensive than a $300 one that doesn\'t. Uniqlo and COS offer well-made basics at accessible prices. Thrift stores regularly yield quality cashmere and silk pieces for $10-20.',
        'Stick to a neutral palette: black, white, cream, navy, camel, and gray. Avoid bright colors and prints. Invest in one quality leather bag and one pair of good shoes — these are the details people notice most.',
      ] },
      { heading: 'Common Mistakes to Avoid', paragraphs: [
        'Don\'t confuse quiet luxury with boring. The look should feel intentional and polished, not like you gave up trying. Accessories matter enormously — a silk scarf, quality sunglasses, or simple gold jewelry elevates everything.',
        'Avoid going full monochrome head-to-toe without texture variation. Mix materials (cashmere with cotton, leather with silk) to add visual interest while keeping the palette restrained. A cream cashmere sweater over cream wide-leg trousers looks intentional when one is knit and one is crepe.',
        'Also skip anything with visible logos or branding. Quiet luxury is the opposite of logomania — the quality should speak for itself. If you can see the brand from across the room, it\'s not quiet luxury.',
      ] },
    ],
    relatedGuides: [
      { title: 'Casual Outfits That Look Expensive', slug: 'casual-outfits-look-expensive' },
      { title: 'How to Build a Minimalist Wardrobe', slug: 'how-to-build-minimalist-wardrobe' },
      { title: 'Capsule Wardrobe Guide', slug: 'capsule-wardrobe-working-women-2026' },
    ],
  },
  'spring-color-trends': {
    slug: 'spring-color-trends',
    title: 'The 5 Colors That Will Dominate Spring 2026 (And How to Wear Them)',
    excerpt: 'Vanilla yellow, soft sage, powder blue, warm terracotta, and lavender are this season\'s key colors.',
    date: '2026-02-17',
    cat: 'Trends',
    image: '/images/blog/spring-color-trends-2026.webp',
    content: [
      { heading: 'Vanilla Yellow: The Biggest Color of Spring 2026', paragraphs: [
        'The biggest color of spring 2026 is vanilla yellow — a soft, buttery shade that flatters every skin tone. It showed up in multiple major runway collections and is already translating beautifully into everyday wear.',
        'Wear it as a blouse, knit top, or midi dress. Pair with white jeans, cream trousers, or denim for a clean, editorial look. For a bolder statement, try head-to-toe vanilla with different shades and textures in the same color family.',
        'On Amazon, you can find excellent vanilla yellow pieces from $22 to $45 — lightweight knit tops and breezy midi dresses in this shade are already selling fast. It\'s a color that photographs beautifully and reads as both polished and relaxed.',
      ] },
      { heading: 'Soft Sage: The Neutral Alternative', paragraphs: [
        'Sage green continues its reign as the neutral alternative to gray. This muted, earthy green works beautifully in linen blazers, cargo pants, and lightweight knits. It has a calming, grounded quality that makes it especially strong in workwear contexts.',
        'Style it with cream, white, or other earth tones for a sophisticated, grounded look. A sage linen blazer over a white tee with cream wide-leg trousers is one of the most effortless spring outfits in the color\'s repertoire.',
        'The key is keeping the shade muted — avoid anything too bright or saturated. The version of sage that works best for spring 2026 is closer to dusty green than fresh green.',
      ] },
      { heading: 'Powder Blue and Terracotta: The Accent Colors', paragraphs: [
        'Powder blue is a perennial spring favorite that feels fresh and optimistic this season. It\'s showing up in structured silhouettes — tailored shorts, button-downs, and even suiting — which gives it a more grown-up energy than past iterations. Pair with navy for a sophisticated tonal look, or contrast with warm browns and tans.',
        'Terracotta brings warmth to spring wardrobes and is earthy without being autumnal. It\'s softer than rust and more muted than burnt orange, making it flattering across warm and medium skin tones. Try it in linen (the texture reads beautifully), a structured crossbody bag, or statement earrings.',
        'These two colors work especially well together — a powder blue linen top with terracotta trousers creates a palette that feels both warm and cool simultaneously, and reads as intentionally styled rather than matched.',
      ] },
      { heading: 'Lavender: Sophisticated Return', paragraphs: [
        'Lavender makes a soft comeback this spring, but in a far more sophisticated form than its previous iterations. The 2026 version is less vivid lilac and more dusty, muted lavender — closer to gray-violet than bright purple.',
        'This version of lavender works in soft fabrics: silk, cashmere, and quality cotton jersey. A lavender knit with white trousers is one of the easiest, most polished spring outfits you can build. It also pairs unexpectedly well with sage green for a soft, cool-toned palette that feels very editorial.',
        'To avoid the lavender looking costume-adjacent, keep everything else in the outfit neutral. White shoes, minimal gold jewelry, and a structured bag in cream or white let the lavender be the focal point without overwhelming the look.',
      ] },
    ],
    relatedGuides: [
      { title: 'Spring Fashion Trends 2026', slug: 'spring-fashion-trends-2026' },
      { title: '10 Must-Have Fashion Items for Spring', slug: 'spring-2026-must-have-items' },
      { title: 'Spring 2026 Accessories Trends', slug: 'trending-spring-accessories-2026' },
    ],
  },
  'capsule-wardrobe-mistakes': {
    slug: 'capsule-wardrobe-mistakes',
    title: '7 Capsule Wardrobe Mistakes That Are Costing You Money',
    excerpt: 'Building a capsule wardrobe sounds simple, but most people get it wrong.',
    date: '2026-02-16',
    cat: 'Guide',
    image: '/images/blog/capsule-wardrobe-mistakes.webp',
    content: [
      { heading: 'Mistake 1: Too Many Neutrals, Not Enough Personality', paragraphs: [
        'The biggest capsule wardrobe mistake is building a closet full of black, white, and gray and wondering why getting dressed feels boring every morning. You need at least 2-3 accent pieces — a colored blazer, a printed scarf, a statement shoe — to make the neutrals feel alive.',
        'A capsule wardrobe should feel like you, just edited. If you love color, keep color. The goal is fewer pieces you love, not fewer pieces of personality. A red blazer that you reach for constantly is more capsule than 10 black tops you cycle through without feeling anything.',
        'The practical fix: before your next shopping trip, identify one color beyond neutrals that genuinely excites you. Build a single accent around it — a blouse, a bag, or a shoe — and watch how differently your existing neutrals feel.',
      ] },
      { heading: 'Mistake 2: Ignoring Fit (The Most Expensive Mistake)', paragraphs: [
        'Spending $200 on a quality blazer that doesn\'t fit properly is worse than a $40 one that does. Fit is the single biggest factor in whether clothes look expensive, intentional, or just expensive enough to be disappointing.',
        'Budget $50-100 per year for tailoring. Getting pants hemmed, blazers taken in at the waist, and sleeves shortened transforms mid-range clothes into elevated ones. A tailor is the best investment most people overlook.',
        'Quick rule: if you wouldn\'t wear it out of the dressing room exactly as it fits right now, don\'t buy it unless you\'re willing to pay for alterations. Clothes don\'t improve on their own.',
      ] },
      { heading: 'Mistakes 3-4: Wrong Items and Wrong Lifestyle', paragraphs: [
        'Every capsule wardrobe guide prescribes a white button-down. But if you hate wearing button-downs, that shirt will sit unworn and make you feel guilty. Replace prescribed items with your version of the function it serves — a clean silk tee, a structured polo, a lightweight turtleneck.',
        'The same logic applies to lifestyle fit. If you work from home four days a week, building a capsule around office suits is backwards. Build around what you actually wear. Track your outfits for two weeks — you\'ll find the real gaps and the real repeats.',
        'The best capsule wardrobe is one you actually wear, not one that looks good on a Pinterest board. Pinterest capsules are styled for photos, not lives.',
      ] },
      { heading: 'Mistakes 5-7: Overbuying, Rushing, and Skipping Seasons', paragraphs: [
        'Don\'t buy everything at once. Start with 15 pieces and live with them for a month before adding more. You\'ll quickly discover what\'s genuinely missing without spending money on redundant items.',
        'Rushing the process is how you end up with a closet full of clothes and nothing to wear. The best capsule wardrobes are built slowly, over multiple seasons, as you identify actual gaps rather than imagined ones.',
        'Build seasonally — a summer capsule needs different fabrics and weights than a winter one, and attempting a single year-round capsule usually results in compromise pieces that work for nothing specifically. And always test-drive expensive purchases mentally: can you build 5 different outfits with this piece using things you already own? If no, keep looking.',
      ] },
    ],
    relatedGuides: [
      { title: 'Capsule Wardrobe Guide for Working Women', slug: 'capsule-wardrobe-working-women-2026' },
      { title: 'How to Build a Minimalist Wardrobe', slug: 'how-to-build-minimalist-wardrobe' },
      { title: '12 Affordable Fashion Brands', slug: 'affordable-fashion-brands-guide' },
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
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
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

  return (
    <article className="pt-8 max-w-3xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-gray-600">Blog</Link>
        <span>/</span>
        <span className="text-gray-600">{post.cat}</span>
      </nav>

      <header className="mb-8">
        <span className="badge-new mb-3 inline-block">{post.cat}</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">{post.title}</h1>
        <p className="text-lg text-gray-400 leading-relaxed">{post.excerpt}</p>
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
          <span>By StyleMeDaily Team</span>
          <span>·</span>
          <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </header>

      <div className="mb-8 rounded-2xl overflow-hidden relative h-64 sm:h-80">
        <SafeImage src={post.image} alt={post.title} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
      </div>

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
        <div className="mt-10 mb-8">
          <h3 className="font-display font-bold text-gray-900 mb-4">Related Guides</h3>
          <div className="grid gap-3">
            {post.relatedGuides.map(g => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="card-hover p-4 flex items-center gap-4 group">
                <div className="flex-1">
                  <p className="font-semibold text-sm text-gray-800 group-hover:text-gray-600 transition-colors">{g.title}</p>
                </div>
                <span className="text-gray-400 text-sm">View guide</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <NewsletterCTA />
    </article>
  );
}
