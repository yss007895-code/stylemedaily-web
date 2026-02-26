import Link from 'next/link';
import NewsletterCTA from '@/components/NewsletterCTA';
import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Zara vs H&M 2026: Which Fast Fashion Brand Wins?',
  description: 'We compared Zara and H&M across quality, price, sustainability, sizing, and style for 2026. Find out which fast fashion brand actually deserves your money.',
  keywords: ['zara vs hm', 'zara vs h&m', 'fast fashion comparison', 'best fast fashion brand 2026', 'zara review', 'h&m review', 'zara or hm which is better'],
  alternates: { canonical: `${SITE_URL}/compare/zara-vs-hm` },
  openGraph: {
    title: 'Zara vs H&M 2026: Which Fast Fashion Brand Wins?',
    description: 'We compared Zara and H&M on quality, price, sustainability, and sizing. Honest breakdown of which wins for your wardrobe.',
    type: 'article',
    url: `${SITE_URL}/compare/zara-vs-hm`,
    siteName: SITE_NAME,
    images: [{ url: '/images/guides/hero-women-fashion.webp', width: 1200, height: 630, alt: 'Zara vs H&M Comparison 2026' }],
  },
  twitter: { card: 'summary_large_image', site: '@stylemedaily' },
};

const data = [
  { feature: 'Price Range', zara: '$$', hm: '$–$$', winner: 'hm' },
  { feature: 'Quality', zara: 'Good–Very Good', hm: 'Fair–Good', winner: 'zara' },
  { feature: 'Trend Speed', zara: 'Runway to store in 2 weeks', hm: '4–6 weeks', winner: 'zara' },
  { feature: 'Size Range', zara: 'XS–XL (limited)', hm: 'XXS–4XL', winner: 'hm' },
  { feature: 'Sustainability', zara: 'Join Life collection', hm: 'Conscious Choice line', winner: 'hm' },
  { feature: 'Work Clothes', zara: 'Excellent', hm: 'Good', winner: 'zara' },
  { feature: 'Basics', zara: 'Good', hm: 'Excellent', winner: 'hm' },
  { feature: 'Returns', zara: '30 days', hm: '30 days (members: 60)', winner: 'hm' },
  { feature: 'Online Experience', zara: 'Minimal, editorial', hm: 'Feature-rich, filters', winner: 'tie' },
];

const faqs = [
  {
    q: 'Is Zara better quality than H&M?',
    a: 'Generally yes, though it depends heavily on the category. Zara\'s structured pieces — blazers, coats, tailored trousers — use better fabrics and construction than equivalent H&M items. H&M\'s casualwear and basics are solid at their price point and often outlast Zara\'s trend pieces. For workwear and occasion dressing, Zara is worth the premium. For t-shirts and everyday essentials, H&M often offers better value.'
  },
  {
    q: 'Which is cheaper, Zara or H&M?',
    a: 'H&M is consistently cheaper across comparable items. H&M basics start under $10, while Zara rarely goes below $20 for anything. However, Zara pieces at the $50–80 range tend to last significantly longer than H&M items at $25–35, which can make the cost-per-wear similar or even favor Zara for investment pieces. The key is knowing which category you\'re shopping in.'
  },
  {
    q: 'Which has better sustainability practices?',
    a: 'H&M has a slight edge in transparency. Their Conscious Choice line uses recycled or sustainably sourced materials, and their garment collection program lets you drop off old clothing in-store for recycling. Zara\'s Join Life collection is growing with organic cotton and recycled polyester options. Both are fast fashion companies making incremental improvements rather than systemic changes, so neither can claim genuine sustainability credentials yet.'
  },
  {
    q: 'Does Zara have plus sizes?',
    a: 'Zara\'s size range is a real limitation — most of their women\'s clothing goes up to XL, which is roughly a US size 12-14 depending on the item. They have started expanding some lines but the extended size range is much smaller than their core offerings. H&M runs up to 4XL across most of their women\'s range, including extended sizes both in-store and online, making it the clear winner for size inclusivity.'
  },
  {
    q: 'Which is better for work clothes, Zara or H&M?',
    a: 'Zara is the stronger choice for professional clothing. Their tailoring — blazers, structured dresses, quality trousers — is consistently better than H&M\'s equivalent pieces. Zara\'s minimalist aesthetic also translates well to office environments. H&M has decent office basics (blouses, simple trousers) but the quality ceiling is lower and the fit less polished. If you\'re building a work wardrobe on a budget, start with Zara for key pieces and supplement with H&M basics.'
  },
];

export default function ZaraVsHM() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Zara vs H&M 2026: Which Fast Fashion Brand Wins?',
    description: 'We compared Zara and H&M on quality, price, sustainability, style, and sizing.',
    image: `${SITE_URL}/images/guides/hero-women-fashion.webp`,
    datePublished: '2026-02-20',
    dateModified: '2026-02-26',
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/compare/zara-vs-hm` },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: `${SITE_URL}/compare` },
      { '@type': 'ListItem', position: 3, name: 'Zara vs H&M', item: `${SITE_URL}/compare/zara-vs-hm` },
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
          <span className="text-gray-600">Zara vs H&M</span>
        </nav>

        <header className="mb-8">
          <span className="badge-new mb-3 inline-block">2026 Update</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Zara vs H&amp;M: Which Fast Fashion Brand Is Better in 2026?
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Two of the world&apos;s biggest fast fashion retailers, compared across 9 categories. We break down quality, price, sizing, sustainability, and exactly who should shop where.
          </p>
        </header>

        {/* Quick Verdict */}
        <div className="border border-gray-100 rounded-xl p-6 mb-8 bg-white">
          <h2 className="font-display text-lg font-bold text-gray-900 mb-4">Quick Verdict</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-4 border border-gray-100 rounded-xl">
              <p className="font-display text-xl font-bold text-gray-900 mb-1">Zara</p>
              <p className="text-sm text-gray-400 mb-2">Best for: trend-forward pieces, work outfits, quality</p>
              <p className="font-mono text-2xl font-bold text-gray-900 mb-3">4.4<span className="text-sm text-gray-400">/5</span></p>
              <a href="https://zara.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary inline-block text-sm !px-4 !py-2">Shop Zara</a>
            </div>
            <div className="text-center p-4 border border-gray-100 rounded-xl">
              <p className="font-display text-xl font-bold text-gray-900 mb-1">H&amp;M</p>
              <p className="text-sm text-gray-400 mb-2">Best for: basics, budget, size inclusivity</p>
              <p className="font-mono text-2xl font-bold text-gray-900 mb-3">4.2<span className="text-sm text-gray-400">/5</span></p>
              <a href="https://hm.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary inline-block text-sm !px-4 !py-2">Shop H&amp;M</a>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="border border-gray-100 rounded-xl overflow-hidden mb-8 bg-white">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 text-sm font-mono font-semibold text-gray-700">Feature</th>
                <th className="text-center px-4 py-3 text-sm font-mono font-semibold text-gray-700">Zara</th>
                <th className="text-center px-4 py-3 text-sm font-mono font-semibold text-gray-700">H&amp;M</th>
              </tr>
            </thead>
            <tbody>
              {data.map((r, i) => (
                <tr key={i} className="border-t border-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700 font-medium">{r.feature}</td>
                  <td className={`px-4 py-3 text-sm text-center ${r.winner === 'zara' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>{r.zara}</td>
                  <td className={`px-4 py-3 text-sm text-center ${r.winner === 'hm' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>{r.hm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-style">

          <h2>Category Breakdown</h2>
          <p>
            <strong>Basics and essentials:</strong> H&M wins here, and it&apos;s not close. Their cotton tees, plain hoodies, underwear, loungewear, and wardrobe staples offer solid quality at prices ($5–20) that make stocking up straightforward. Zara&apos;s basics exist but the prices are higher for comparable quality. If you need 5 white t-shirts, buy them at H&M.
          </p>
          <p>
            <strong>Workwear and tailored pieces:</strong> Zara is the clear winner. Their blazers, structured trousers, and tailored dresses hold their shape, use better lining, and look more polished than H&M&apos;s equivalent pieces. A Zara blazer at $90 genuinely looks like it costs more than it does. An H&M blazer at $60 often reads fast-fashion at closer inspection.
          </p>
          <p>
            <strong>Occasion and going-out wear:</strong> Zara&apos;s editorial aesthetic translates particularly well to occasion dressing. Their dresses and separates have a distinctly runway-influenced quality that photographs well and stands out. H&M&apos;s occasion options are fine but rarely distinctive. For anything where you want to look intentional, not just presentable, Zara is the stronger choice.
          </p>
          <p>
            <strong>Denim:</strong> Honestly, a tie. Zara&apos;s denim uses better fabric and fits more precisely, but their narrow size range is a problem. H&M&apos;s extended denim range means more women can actually shop it, and their mid-tier denim (around $30–40) is quite good for the price.
          </p>

          <div className="not-prose my-6 p-4 bg-gray-50 rounded-xl flex flex-col sm:flex-row gap-3 items-center justify-between">
            <p className="text-sm text-gray-700 font-medium">Shop what works for your wardrobe</p>
            <div className="flex gap-3">
              <a href="https://zara.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary text-sm !px-4 !py-2">Zara New In</a>
              <a href="https://hm.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary text-sm !px-4 !py-2 !bg-gray-800">H&amp;M Basics</a>
            </div>
          </div>

          <h2>Price Per Wear Analysis</h2>
          <p>
            The price difference between Zara and H&M is real but often overstated when you factor in longevity. H&M is cheaper upfront — a blazer at $35 vs Zara&apos;s $65–90. But that H&M blazer typically holds its shape for 20–30 wears before showing wear. A comparable Zara blazer, used similarly, can hit 80–100+ wears before looking tired. At those numbers, Zara is actually cheaper per wear.
          </p>
          <p>
            This logic doesn&apos;t apply to everything. For trend pieces — something you&apos;ll wear one season and move on from — H&M&apos;s lower price is obviously better. For wardrobe investments that you plan to build outfits around for two or three years, Zara&apos;s higher quality often justifies the premium.
          </p>

          <h2>Designer Collaboration History</h2>
          <p>
            H&M has one of fashion&apos;s most celebrated collaboration programs, partnering annually with major designers. Past collabs — Balmain, Versace, Marni, Moschino, Simone Rocha — sell out instantly and often resell for multiples of retail. The H&M x designer model democratizes runway fashion in a way nothing else at this price point does. If you follow these drops, H&M is a genuinely exciting place to shop.
          </p>
          <p>
            Zara doesn&apos;t do external designer collaborations in the same way. Instead, their in-house design team moves fast enough to react to runway trends within weeks of shows. It&apos;s a different model — you get the aesthetic of the moment without the designer label rather than the label itself at an accessible price.
          </p>

          <h2>Our Recommendation</h2>
          <p>
            Use both strategically rather than picking one. Zara is your statement-piece and workwear retailer — blazers, structured trousers, coats, and anything you want to look put-together in. H&M covers basics, underlayers, loungewear, and casual everyday pieces where quality matters less than price.
          </p>
          <p>
            Size is a deciding factor for many women. If you&apos;re above a US 12–14, H&M&apos;s extended range makes it the practical choice simply by having stock that fits. Zara is improving but slowly. The H&M collaboration program is also worth following if you want designer-adjacent pieces at genuinely accessible prices.
          </p>

          <div className="not-prose my-6 p-4 bg-gray-50 rounded-xl flex flex-col sm:flex-row gap-3 items-center justify-between">
            <p className="text-sm text-gray-700 font-medium">Start shopping smarter today</p>
            <div className="flex gap-3">
              <a href="https://zara.com/woman" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary text-sm !px-4 !py-2">Shop Zara Woman</a>
              <a href="https://hm.com/ladies" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary text-sm !px-4 !py-2 !bg-gray-800">Shop H&amp;M Ladies</a>
            </div>
          </div>

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
            <Link href="/compare/nordstrom-vs-asos" className="card-hover p-5 group">
              <p className="font-display font-bold text-sm text-gray-900 group-hover:text-gray-600 transition-colors">Nordstrom vs ASOS</p>
              <p className="text-xs text-gray-400 mt-1">Premium vs mid-range online shopping</p>
            </Link>
            <Link href="/compare/shein-vs-asos" className="card-hover p-5 group">
              <p className="font-display font-bold text-sm text-gray-900 group-hover:text-gray-600 transition-colors">SHEIN vs ASOS</p>
              <p className="text-xs text-gray-400 mt-1">Ultra-budget vs mid-range fashion</p>
            </Link>
          </div>
        </div>

        <NewsletterCTA />
      </article>
    </>
  );
}
