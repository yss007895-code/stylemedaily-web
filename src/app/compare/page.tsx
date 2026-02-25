import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Fashion Comparisons & Reviews | StyleMeDaily',
  description: 'Honest side-by-side comparisons of top fashion retailers, brands, and styling services. Make smarter shopping decisions with our in-depth guides.',
  keywords: ['fashion retailer comparison', 'nordstrom vs asos', 'zara vs h&m', 'shein vs asos', 'best online fashion store'],
  alternates: { canonical: `${SITE_URL}/compare` },
  openGraph: {
    title: 'Fashion Comparisons & Reviews | StyleMeDaily',
    description: 'Honest side-by-side comparisons of top fashion retailers, brands, and styling services.',
    url: `${SITE_URL}/compare`,
    siteName: 'StyleMeDaily',
    type: 'website',
    images: [{ url: '/images/guides/hero-women-fashion.webp', width: 1200, height: 630, alt: 'StyleMeDaily Fashion Comparisons' }],
  },
  twitter: { card: 'summary_large_image', site: '@stylemedaily' },
};

const comparisons = [
  {
    href: '/compare/nordstrom-vs-asos',
    title: 'Nordstrom vs ASOS 2026',
    description: 'We compared both on quality, price, sizing, returns, and trend selection to find out which is worth your money.',
    tag: 'Retailers',
    badge: 'Most Popular',
  },
  {
    href: '/compare/shein-vs-asos',
    title: 'SHEIN vs ASOS 2026',
    description: 'Budget fashion showdown: quality, ethics, sizing, and which actually delivers style that lasts more than one wash.',
    tag: 'Budget',
    badge: 'Editor Pick',
  },
  {
    href: '/compare/zara-vs-hm',
    title: 'Zara vs H&M 2026',
    description: 'Two fast-fashion giants head to head. Which has better quality, trend timing, and value for money this season?',
    tag: 'Fast Fashion',
    badge: 'New',
  },
];

export default function ComparePage() {
  return (
    <main className="pt-8 max-w-4xl mx-auto px-4">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <span>/</span>
        <span className="text-gray-600">Compare</span>
      </nav>

      <header className="mb-10">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3">
          Fashion Comparisons
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl">
          Honest, independent comparisons of the brands, retailers, and styling services you actually care about. No sponsored opinions — just the facts.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {comparisons.map(c => (
          <Link
            key={c.href}
            href={c.href}
            className="card-hover p-6 flex flex-col group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-medium tracking-wider uppercase text-gold-500 bg-gold-50 px-2 py-1 rounded">{c.tag}</span>
              <span className="badge-new text-[10px]">{c.badge}</span>
            </div>
            <h2 className="font-display font-bold text-gray-900 text-lg leading-snug mb-2 group-hover:text-gray-700 transition-colors">
              {c.title}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed flex-1">{c.description}</p>
            <div className="mt-4 flex items-center text-xs font-medium text-gold-500 group-hover:text-gold-600 transition-colors">
              Read comparison
              <svg className="ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      <section className="border-t border-gray-100 pt-8 mb-8">
        <h2 className="font-display font-bold text-gray-900 text-xl mb-3">How We Compare</h2>
        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
          Every comparison on StyleMeDaily is independently researched. We evaluate retailers and brands on quality, sizing inclusivity, price transparency, return policies, trend relevance, and actual customer experience. We purchase items ourselves where possible and consult real buyer reviews.
        </p>
        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mt-3">
          Some links in our comparisons are affiliate links — this means we may earn a small commission if you purchase through them, at no extra cost to you. This never influences our ratings or recommendations.
        </p>
      </section>
    </main>
  );
}
