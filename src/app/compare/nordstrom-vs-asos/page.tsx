import Link from 'next/link';
import NewsletterCTA from '@/components/NewsletterCTA';
import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Nordstrom vs ASOS 2026: Which Is Better for Women?',
  description: 'We compared Nordstrom and ASOS across quality, price, sizing, returns, and style for women. Honest breakdown of which retailer deserves your money in 2026.',
  keywords: ['nordstrom vs asos', 'online shopping comparison', 'best online store women', 'nordstrom review', 'asos review 2026', 'where to shop online women'],
  alternates: { canonical: `${SITE_URL}/compare/nordstrom-vs-asos` },
  openGraph: {
    title: 'Nordstrom vs ASOS 2026: Which Is Better for Women?',
    description: 'We compared Nordstrom and ASOS across quality, price, sizing, returns, and style. Honest breakdown of which wins.',
    type: 'article',
    url: `${SITE_URL}/compare/nordstrom-vs-asos`,
    siteName: SITE_NAME,
    images: [{ url: '/images/blog/nordstrom-vs-asos-comparison.webp', width: 1200, height: 630, alt: 'Nordstrom vs ASOS Comparison 2026' }],
  },
  twitter: { card: 'summary_large_image', site: '@stylemedaily' },
};

const data = [
  { feature: 'Price Range', nordstrom: '$$–$$$$', asos: '$–$$', winner: 'asos' },
  { feature: 'Quality', nordstrom: 'Excellent', asos: 'Good', winner: 'nordstrom' },
  { feature: 'Size Range', nordstrom: 'XXS–3X', asos: 'XXS–4XL (Petite/Tall)', winner: 'asos' },
  { feature: 'Returns', nordstrom: 'Free, no time limit', asos: 'Free within 45 days', winner: 'nordstrom' },
  { feature: 'Shipping Speed', nordstrom: '3–5 days (free)', asos: '4–7 days (free $50+)', winner: 'nordstrom' },
  { feature: 'Trend Speed', nordstrom: 'Moderate', asos: 'Very Fast', winner: 'asos' },
  { feature: 'Work Clothes', nordstrom: 'Excellent', asos: 'Good', winner: 'nordstrom' },
  { feature: 'Casual/Going Out', nordstrom: 'Good', asos: 'Excellent', winner: 'asos' },
  { feature: 'Sustainability', nordstrom: 'Improving', asos: 'Responsible Edit line', winner: 'tie' },
];

const faqs = [
  {
    q: 'Which has better quality, Nordstrom or ASOS?',
    a: 'Nordstrom wins on quality across the board. Their curated brand mix and own private labels (like Treasure & Bond and Halogen) use better fabrics and construction than ASOS Own Brand. That said, ASOS carries premium labels like Topshop and French Connection that compete on quality. For ASOS, stick to brands rather than their cheapest own-brand pieces.'
  },
  {
    q: 'Which is more size-inclusive, Nordstrom or ASOS?',
    a: 'ASOS is the clear winner with dedicated Petite, Tall, Curve, and Maternity lines ranging from XXS to 4XL. Nearly every style is available across multiple fits. Nordstrom is improving but most brands top out at 3X, and petite/tall options depend on each brand rather than being built-in.'
  },
  {
    q: 'Which has better sales, Nordstrom or ASOS?',
    a: 'Both run excellent sales but with different rhythms. Nordstrom\'s Anniversary Sale each July is legendary — deep discounts on premium brands that sell out fast. ASOS runs 20–30% off promotions year-round and their sale section is always stocked. For budget shopping, ASOS is easier to access deals any time. For premium brand discounts, plan around Nordstrom\'s sale calendar.'
  },
  {
    q: 'Does Nordstrom ship internationally?',
    a: 'Nordstrom ships to a limited number of countries. International shipping is available via their Nordstrom.com site for Canada and select countries, but selection and pricing are more limited than US shopping. ASOS has a much stronger international presence with local warehouses in multiple countries, often faster and cheaper international shipping.'
  },
  {
    q: 'Which is better for petites, Nordstrom or ASOS?',
    a: 'ASOS edges ahead for petites thanks to their dedicated Petite line that runs across hundreds of styles. Inseam adjustments, proportioned bodices, and shorter sleeve lengths are built into the cut rather than just sized down. Nordstrom carries petite sections from brands like Vince Camuto and Caslon, but the range is smaller and less consistent.'
  },
];

export default function NordstromVsAsos() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Nordstrom vs ASOS 2026: Which Is Better for Women?',
    description: 'We compared Nordstrom and ASOS across quality, price, sizing, returns, and style for women.',
    image: `${SITE_URL}/images/blog/nordstrom-vs-asos-comparison.webp`,
    datePublished: '2026-02-15',
    dateModified: '2026-02-26',
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/compare/nordstrom-vs-asos` },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: `${SITE_URL}/compare` },
      { '@type': 'ListItem', position: 3, name: 'Nordstrom vs ASOS', item: `${SITE_URL}/compare/nordstrom-vs-asos` },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="pt-8 max-w-3xl mx-auto">

        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>/</span>
          <Link href="/compare" className="hover:text-gray-600">Compare</Link>
          <span>/</span>
          <span className="text-gray-600">Nordstrom vs ASOS</span>
        </nav>

        <header className="mb-8">
          <span className="badge-new mb-3 inline-block">Updated Feb 2026</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Nordstrom vs ASOS: Which Online Retailer Wins in 2026?
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            We compared both retailers across 9 categories — quality, pricing, sizing, returns, and more — to help you decide where to spend your fashion budget this year.
          </p>
        </header>

        {/* Quick Verdict */}
        <div className="border border-gray-100 rounded-xl p-6 mb-8 bg-white">
          <h2 className="font-display text-lg font-bold text-gray-900 mb-4">Quick Verdict</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-4 border border-gray-100 rounded-xl">
              <p className="font-display text-xl font-bold text-gray-900 mb-1">Nordstrom</p>
              <p className="text-sm text-gray-400 mb-2">Best for: quality basics, work clothes, no-hassle returns</p>
              <p className="font-mono text-2xl font-bold text-gray-900 mb-3">4.5<span className="text-sm text-gray-400">/5</span></p>
              <a href="https://nordstrom.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary inline-block text-sm !px-4 !py-2">Shop Nordstrom</a>
            </div>
            <div className="text-center p-4 border border-gray-100 rounded-xl">
              <p className="font-display text-xl font-bold text-gray-900 mb-1">ASOS</p>
              <p className="text-sm text-gray-400 mb-2">Best for: trends, budget fashion, size inclusivity</p>
              <p className="font-mono text-2xl font-bold text-gray-900 mb-3">4.3<span className="text-sm text-gray-400">/5</span></p>
              <a href="https://asos.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary inline-block text-sm !px-4 !py-2">Shop ASOS</a>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="border border-gray-100 rounded-xl overflow-hidden mb-8 bg-white">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 text-sm font-mono font-semibold text-gray-700">Feature</th>
                <th className="text-center px-4 py-3 text-sm font-mono font-semibold text-gray-700">Nordstrom</th>
                <th className="text-center px-4 py-3 text-sm font-mono font-semibold text-gray-700">ASOS</th>
              </tr>
            </thead>
            <tbody>
              {data.map((r, i) => (
                <tr key={i} className="border-t border-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700 font-medium">{r.feature}</td>
                  <td className={`px-4 py-3 text-sm text-center ${r.winner === 'nordstrom' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                    {r.nordstrom}
                  </td>
                  <td className={`px-4 py-3 text-sm text-center ${r.winner === 'asos' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                    {r.asos}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-style">

          <h2>Quality Deep Dive</h2>
          <p>
            Nordstrom&apos;s quality advantage is real, but it&apos;s not uniform. Their private labels — Treasure &amp; Bond, Halogen, and Nordstrom Made — are legitimately good. Halogen blazers and trousers, for example, use fabric blends you&apos;d expect from brands three times the price. The seaming is cleaner, the lining sits properly, and the structure holds after washing. These pieces last years, not seasons.
          </p>
          <p>
            ASOS is more variable. Their own-brand basics are fine for the price — cotton tees, jersey dresses, that sort of thing. But anything structured or tailored from ASOS&apos;s cheapest tier often shows its fast-fashion origins within a few months. The sweet spot on ASOS is shopping brands within their marketplace: Topshop, French Connection, Whistles, and similar mid-tier labels offer quality that rivals lower-end Nordstrom brands at a better price.
          </p>

          <div className="not-prose my-6 p-4 bg-gray-50 rounded-xl flex flex-col sm:flex-row gap-3 items-center justify-between">
            <p className="text-sm text-gray-700 font-medium">Ready to shop quality basics?</p>
            <div className="flex gap-3">
              <a href="https://nordstrom.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary text-sm !px-4 !py-2">Shop Nordstrom</a>
              <a href="https://asos.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary text-sm !px-4 !py-2 !bg-gray-800">Shop ASOS</a>
            </div>
          </div>

          <h2>Shop by Occasion</h2>
          <p>
            <strong>Work clothes:</strong> Nordstrom wins this easily. The range of professional pieces — blazers, structured trousers, quality blouses, dresses that read as polished — is both wider and better constructed. Brands like Lafayette 148, Vince, and Theory appear here at prices that feel steep until you compare them to department store alternatives. ASOS has office-appropriate options but the quality ceiling is lower.
          </p>
          <p>
            <strong>Date night:</strong> ASOS takes this one. Their range of cocktail dresses, going-out tops, and trend-driven statement pieces is updated constantly. The prices mean you can buy something you&apos;ll wear once without feeling guilty. Nordstrom has beautiful evening options but you&apos;ll spend $150+ for equivalent coverage.
          </p>
          <p>
            <strong>Casual everyday:</strong> Honest tie. Nordstrom carries better casual brands (Madewell, Caslon, AG Jeans), but you pay for it. ASOS has solid options for jeans, sweatshirts, and weekend wear at prices that make stocking up easy. If budget matters, ASOS wins. If you want something you&apos;ll still be wearing in 5 years, Nordstrom.
          </p>
          <p>
            <strong>Special occasions:</strong> Nordstrom, no question. Their formal gown and special occasion selection is edited well, with tailoring options available in-store. ASOS has dresses that photograph beautifully but require careful measurement and a willingness to return if fit is off.
          </p>

          <div className="not-prose my-6 p-4 bg-gray-50 rounded-xl flex flex-col sm:flex-row gap-3 items-center justify-between">
            <p className="text-sm text-gray-700 font-medium">Find your perfect occasion outfit</p>
            <div className="flex gap-3">
              <a href="https://nordstrom.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary text-sm !px-4 !py-2">Nordstrom Work &amp; Occasion</a>
              <a href="https://asos.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary text-sm !px-4 !py-2 !bg-gray-800">ASOS Going Out</a>
            </div>
          </div>

          <h2>Sale Events Calendar</h2>
          <p>
            Both retailers have strong sale moments, but the strategies differ completely. Nordstrom&apos;s flagship sale event — the Anniversary Sale each July — is worth knowing. Card members get early access to discounts on new-season merchandise (not clearance). Premium brands like Zella, UGG, and Caslon drop meaningfully. Good pieces sell out before public access opens, so card membership genuinely pays off here.
          </p>
          <p>
            Beyond July, Nordstrom runs the Half-Yearly Sale (June and December) with clearance pricing on end-of-season stock. Their Rack outlet has heavy discounts year-round, and app-only flash sales appear occasionally. The discounts are real but they&apos;re event-driven.
          </p>
          <p>
            ASOS operates differently — their sale section is permanent and well-stocked, and promotional codes (20–30% off) appear regularly. Black Friday at ASOS is aggressive. The tradeoff is that sale items at ASOS are often sizes that remain after popular sizes sell through. If you&apos;re a common size, moving fast matters more than planning around event dates.
          </p>

          <div className="not-prose my-6 p-4 bg-gray-50 rounded-xl flex flex-col sm:flex-row gap-3 items-center justify-between">
            <p className="text-sm text-gray-700 font-medium">Shop current sale sections</p>
            <div className="flex gap-3">
              <a href="https://nordstrom.com/sale" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary text-sm !px-4 !py-2">Nordstrom Sale</a>
              <a href="https://asos.com/women/sale" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary text-sm !px-4 !py-2 !bg-gray-800">ASOS Sale</a>
            </div>
          </div>

          <h2>Our Recommendation</h2>
          <p>
            Use both — strategically. Nordstrom is your investment-piece retailer. Blazers, quality denim, leather goods, work staples, and anything you want to own for more than two seasons. The no-time-limit return policy means zero buying risk. If it doesn&apos;t work when it arrives, it goes back, period.
          </p>
          <p>
            ASOS is for filling gaps and experimenting. Trend pieces you&apos;ll wear for a season, accessories, going-out dresses, and testing whether you actually like a silhouette before investing in a quality version. Their Petite and Tall lines are genuinely good for women who struggle with standard sizing. The key is learning which ASOS brands are worth it — Topshop and their own premium tier are safe bets; the cheapest own-brand items are not.
          </p>

          <h2>FAQ</h2>
          {faqs.map((f, i) => (
            <div key={i} className="mb-4">
              <h3 className="!mt-4 !mb-1">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>

        {/* More Comparisons */}
        <div className="my-8">
          <h3 className="font-display font-bold text-gray-900 mb-4">More Comparisons</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link href="/compare/zara-vs-hm" className="card-hover p-5 group">
              <p className="font-display font-bold text-sm text-gray-900 group-hover:text-gray-600 transition-colors">Zara vs H&amp;M</p>
              <p className="text-xs text-gray-400 mt-1">Fast fashion showdown — quality, price, and style compared</p>
            </Link>
            <Link href="/compare/shein-vs-asos" className="card-hover p-5 group">
              <p className="font-display font-bold text-sm text-gray-900 group-hover:text-gray-600 transition-colors">SHEIN vs ASOS</p>
              <p className="text-xs text-gray-400 mt-1">Ultra-budget vs mid-range — which delivers more value?</p>
            </Link>
          </div>
        </div>

        <NewsletterCTA />
      </article>
    </>
  );
}
