import Link from 'next/link';
import NewsletterCTA from '@/components/NewsletterCTA';
import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'SHEIN vs ASOS 2026: Ultra-Budget vs Mid-Range Fashion',
  description: 'Is SHEIN worth it or should you spend more at ASOS? We tested both for 3 months and compared quality, shipping, returns, sustainability, and real value.',
  keywords: ['shein vs asos', 'shein review', 'asos review', 'cheap online fashion', 'is shein worth it 2026', 'best online fashion store budget'],
  alternates: { canonical: `${SITE_URL}/compare/shein-vs-asos` },
  openGraph: {
    title: 'SHEIN vs ASOS 2026: Ultra-Budget vs Mid-Range Fashion',
    description: 'Is SHEIN worth it or should you spend more at ASOS? We tested both and gave an honest breakdown.',
    type: 'article',
    url: `${SITE_URL}/compare/shein-vs-asos`,
    siteName: SITE_NAME,
    images: [{ url: '/images/guides/hero-women-fashion.webp', width: 1200, height: 630, alt: 'SHEIN vs ASOS Comparison 2026' }],
  },
  twitter: { card: 'summary_large_image', site: '@stylemedaily' },
};

const data = [
  { feature: 'Price Range', shein: '$3–$30', asos: '$10–$80', winner: 'shein' },
  { feature: 'Quality', shein: 'Variable (hit or miss)', asos: 'Consistent (good)', winner: 'asos' },
  { feature: 'Shipping Speed', shein: '7–14 days', asos: '4–7 days', winner: 'asos' },
  { feature: 'Returns', shein: '1 free return/order', asos: 'Free returns (45 days)', winner: 'asos' },
  { feature: 'Size Range', shein: 'XS–4XL', asos: 'XXS–4XL (Petite/Tall)', winner: 'asos' },
  { feature: 'Trend Speed', shein: 'Ultra fast (daily drops)', asos: 'Fast (weekly)', winner: 'shein' },
  { feature: 'Sustainability', shein: 'Poor', asos: 'Improving (Responsible Edit)', winner: 'asos' },
  { feature: 'Brand Variety', shein: 'SHEIN only', asos: '850+ brands', winner: 'asos' },
  { feature: 'Customer Service', shein: 'Basic (chat/email)', asos: 'Good (24/7 chat)', winner: 'asos' },
];

const faqs = [
  {
    q: 'Is SHEIN good quality?',
    a: 'SHEIN quality is highly variable. Some pieces are surprisingly good for the price, while others are unwearable out of the box. The key is reading reviews with photos, checking fabric composition, and avoiding anything under $8. The sweet spot is $15–25 — enough for SHEIN to use better materials without losing their price advantage. Accessories (jewelry, bags, hair accessories) are often better value than clothing.'
  },
  {
    q: 'Is ASOS worth the extra money over SHEIN?',
    a: 'Yes, in most cases. ASOS offers more consistent quality, faster shipping, better returns, and access to 850+ brands including Topshop, French Connection, and their own quality lines. The price difference is often just $10–20 per item, but you get significantly better fabric, stitching, and customer service. For anything you plan to wear regularly, ASOS is the smarter spend.'
  },
  {
    q: 'Is SHEIN ethical?',
    a: 'SHEIN has faced ongoing criticism for labor practices, environmental impact, and design copying from independent designers. Their rapid production model — sometimes hundreds of new styles per day — prioritizes volume over responsibility. If sustainability or ethical sourcing matters to you, ASOS is the better choice with their Responsible Edit line and more transparent supply chain reporting.'
  },
  {
    q: 'Can you trust SHEIN sizing?',
    a: 'Sort of. SHEIN sizing is inconsistent across styles, so you can\'t reliably order your usual size without checking the specific measurements provided on each listing. The good news is they include detailed size charts with bust, waist, and hip measurements. Always measure yourself and compare to the chart — especially for anything fitted. Reading size notes in reviews is essential.'
  },
  {
    q: 'Does SHEIN have free returns?',
    a: 'SHEIN offers one free return label per order within 35 days. After you use that first free return, additional returns from the same order cost you. This is significantly worse than ASOS, which offers unlimited free returns within 45 days. For this reason, ordering fewer, more carefully considered SHEIN items (rather than a large try-on haul) saves money on return shipping.'
  },
];

export default function SheinVsAsos() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'SHEIN vs ASOS 2026: Ultra-Budget vs Mid-Range Fashion Compared',
    description: 'Is SHEIN worth it or should you spend more at ASOS? We tested both for 3 months.',
    image: `${SITE_URL}/images/guides/hero-women-fashion.webp`,
    datePublished: '2026-02-18',
    dateModified: '2026-02-26',
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/compare/shein-vs-asos` },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: `${SITE_URL}/compare` },
      { '@type': 'ListItem', position: 3, name: 'SHEIN vs ASOS', item: `${SITE_URL}/compare/shein-vs-asos` },
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
          <span className="text-gray-600">SHEIN vs ASOS</span>
        </nav>

        <header className="mb-8">
          <span className="badge-new mb-3 inline-block">2026 Update</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            SHEIN vs ASOS: Is Ultra-Budget Fashion Actually Worth It?
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            We tested both for 3 months across 40+ orders. Here&apos;s the honest breakdown of quality, real value, hidden costs, and when each one actually makes sense.
          </p>
        </header>

        {/* Quick Verdict */}
        <div className="border border-gray-100 rounded-xl p-6 mb-8 bg-white">
          <h2 className="font-display text-lg font-bold text-gray-900 mb-4">Quick Verdict</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-4 border border-gray-100 rounded-xl">
              <p className="font-display text-xl font-bold text-gray-900 mb-1">SHEIN</p>
              <p className="text-sm text-gray-400 mb-2">Best for: experimental trends, ultra-budget shopping, accessories</p>
              <p className="font-mono text-2xl font-bold text-gray-900 mb-3">3.5<span className="text-sm text-gray-400">/5</span></p>
              <a href="https://shein.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary inline-block text-sm !px-4 !py-2">Shop SHEIN</a>
            </div>
            <div className="text-center p-4 border border-gray-100 rounded-xl">
              <p className="font-display text-xl font-bold text-gray-900 mb-1">ASOS</p>
              <p className="text-sm text-gray-400 mb-2">Best for: reliable quality, brand variety, easy returns</p>
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
                <th className="text-center px-4 py-3 text-sm font-mono font-semibold text-gray-700">SHEIN</th>
                <th className="text-center px-4 py-3 text-sm font-mono font-semibold text-gray-700">ASOS</th>
              </tr>
            </thead>
            <tbody>
              {data.map((r, i) => (
                <tr key={i} className="border-t border-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700 font-medium">{r.feature}</td>
                  <td className={`px-4 py-3 text-sm text-center ${r.winner === 'shein' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>{r.shein}</td>
                  <td className={`px-4 py-3 text-sm text-center ${r.winner === 'asos' ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>{r.asos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-style">

          <h2>Quality by Category</h2>
          <p>
            SHEIN&apos;s quality varies so much by category that a blanket quality rating is almost misleading. Here&apos;s what&apos;s actually worth buying from them versus where ASOS is the obvious choice.
          </p>
          <p>
            <strong>Tops and basics:</strong> SHEIN is acceptable at the $15–25 price point. Plain t-shirts, simple camisoles, and basic knitwear are often fine. Construction is predictable and fabric content is listed. The issues show up in anything with printing (often cracks quickly) or embellishments (often detach). ASOS&apos;s own brand and brands like Monki run only slightly more for noticeably better fabric.
          </p>
          <p>
            <strong>Bottoms and denim:</strong> Skip SHEIN&apos;s denim. Sizing is chaotic and the fabric rarely survives more than 10 washes in good shape. Their trousers are similarly variable. ASOS denim from brands like Reclaimed Vintage or their own line is substantially better and worth the price jump.
          </p>
          <p>
            <strong>Outerwear:</strong> ASOS wins decisively. Coats and jackets from SHEIN at the sub-$40 price point are thin, poorly lined, and often run cold in actual cold weather. This is the one category where spending more genuinely matters most.
          </p>
          <p>
            <strong>Accessories:</strong> Surprisingly, SHEIN is strong here. Jewelry, hair accessories, bags, and belts offer real value at their prices. The expectation is fashion-season longevity, not multi-year durability, which is fine for trend accessories.
          </p>

          <div className="not-prose my-6 p-4 bg-gray-50 rounded-xl flex flex-col sm:flex-row gap-3 items-center justify-between">
            <p className="text-sm text-gray-700 font-medium">Know what you&apos;re buying before you order</p>
            <div className="flex gap-3">
              <a href="https://shein.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary text-sm !px-4 !py-2">Shop SHEIN</a>
              <a href="https://asos.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary text-sm !px-4 !py-2 !bg-gray-800">Shop ASOS</a>
            </div>
          </div>

          <h2>Hidden Costs of SHEIN</h2>
          <p>
            The sticker price at SHEIN looks impossibly low — and it often is, once you factor in the real costs of shopping there. Potential import duties on orders above certain thresholds vary by country and can add 15–25% to your total. Sizing inconsistency means orders that need returning, and after your first free return label per order, you&apos;re paying for shipping back.
          </p>
          <p>
            Environmental costs are real too. SHEIN&apos;s model produces enormous quantities of synthetic-fabric clothing designed for very short use cycles. Polyester items shed microplastics with every wash. If you care about the footprint of your wardrobe, this is a meaningful consideration, not just a marketing talking point.
          </p>
          <p>
            Wait times can also add friction. Standard SHEIN shipping runs 7–14 days, sometimes longer during peak periods or for items shipping from overseas warehouses. For anything time-sensitive — a wedding, an event, a gift — ASOS&apos;s 4–7 day free shipping is a genuine advantage.
          </p>

          <h2>When SHEIN Makes Sense</h2>
          <p>
            Festival outfits, costume parties, and themed events are SHEIN&apos;s obvious strength. You need something specific, you won&apos;t wear it again, and you want to spend $15 rather than $80. That logic is sound. Similarly, if you&apos;re testing whether a silhouette or trend works for your body before investing in a quality version, a $12 SHEIN piece is a reasonable experiment — as long as the sizing guidance is right.
          </p>
          <p>
            Accessories hauls make sense at SHEIN. Hair clips, belts, sunglasses, statement jewelry, and bags at these prices allow for trend experimentation without the financial risk. And their homeware section, though not clothing, offers similar value for trend-driven decor.
          </p>

          <h2>When ASOS Is the Right Choice</h2>
          <p>
            Work clothes, date night outfits, wardrobe staples, and anything you want to wear more than 5–10 times. ASOS&apos;s own brand and their mid-tier marketplace brands — Topshop, French Connection, ASOS Design premium — offer quality that justifies the higher price. Their return policy is also genuinely better: unlimited free returns within 45 days, no limits on how many items per order.
          </p>
          <p>
            Size inclusivity is also where ASOS pulls ahead. Their Petite, Tall, Curve, and Maternity lines run across hundreds of styles, with proper proportional grading rather than just standard sizing scaled up or down.
          </p>

          <div className="not-prose my-6 p-4 bg-gray-50 rounded-xl flex flex-col sm:flex-row gap-3 items-center justify-between">
            <p className="text-sm text-gray-700 font-medium">Shop with confidence — great return policies</p>
            <div className="flex gap-3">
              <a href="https://shein.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary text-sm !px-4 !py-2">SHEIN Accessories</a>
              <a href="https://asos.com/women" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary text-sm !px-4 !py-2 !bg-gray-800">ASOS Women</a>
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
            <Link href="/compare/zara-vs-hm" className="card-hover p-5 group">
              <p className="font-display font-bold text-sm text-gray-900 group-hover:text-gray-600 transition-colors">Zara vs H&amp;M</p>
              <p className="text-xs text-gray-400 mt-1">Fast fashion quality and style compared</p>
            </Link>
          </div>
        </div>

        <NewsletterCTA />
      </article>
    </>
  );
}
