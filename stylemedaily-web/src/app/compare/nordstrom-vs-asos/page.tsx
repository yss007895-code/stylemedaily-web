import Link from 'next/link';
import NewsletterCTA from '@/components/NewsletterCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nordstrom vs ASOS 2026: Best Online Shopping for Women',
  description: 'We compared Nordstrom and ASOS on quality, price, sizing, returns, and style. Find out which is better for your wardrobe and budget.',
};

const data = [
  { feature: 'Price Range', nordstrom: '$$-$$$$', asos: '$-$$', winner: 'asos' },
  { feature: 'Quality', nordstrom: '⭐⭐⭐⭐⭐', asos: '⭐⭐⭐', winner: 'nordstrom' },
  { feature: 'Size Range', nordstrom: 'XXS-3X', asos: 'XXS-4XL (Petite/Tall)', winner: 'asos' },
  { feature: 'Returns', nordstrom: 'Free, no time limit', asos: 'Free within 45 days', winner: 'nordstrom' },
  { feature: 'Shipping Speed', nordstrom: '3-5 days (free)', asos: '4-7 days (free $50+)', winner: 'nordstrom' },
  { feature: 'Trend Speed', nordstrom: 'Moderate', asos: 'Very Fast', winner: 'asos' },
  { feature: 'Work Clothes', nordstrom: 'Excellent', asos: 'Good', winner: 'nordstrom' },
  { feature: 'Casual/Going Out', nordstrom: 'Good', asos: 'Excellent', winner: 'asos' },
  { feature: 'Sustainability', nordstrom: 'Improving', asos: 'Responsible Edit line', winner: 'tie' },
];

export default function NordstromVsAsos() {
  return (
    <article className="pt-8 max-w-3xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blush-500">Home</Link>
        <span>/</span>
        <span className="text-gray-600">Compare</span>
      </nav>

      <header className="mb-8">
        <span className="badge-hot mb-3 inline-block">Updated Feb 2026</span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          Nordstrom vs ASOS: Best Online Shopping for Women in 2026
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed">
          We compared both retailers across 9 categories to help you decide where to spend your fashion budget.
        </p>
      </header>

      {/* Quick Verdict */}
      <div className="card p-6 mb-8 bg-gradient-to-r from-blush-50/50 to-purple-50/30 border-blush-200/40">
        <h2 className="font-display text-lg font-bold text-blush-700 mb-4">Quick Verdict</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="font-display text-xl font-bold text-gray-900 mb-1">Nordstrom</div>
            <div className="text-sm text-gray-500 mb-2">Best for: quality basics, work clothes, returns</div>
            <div className="font-mono text-2xl font-bold text-blush-600">4.5<span className="text-sm text-gray-400">/5</span></div>
            <a href="https://nordstrom.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary mt-3 inline-block text-sm !px-4 !py-2">Shop Nordstrom →</a>
          </div>
          <div className="text-center">
            <div className="font-display text-xl font-bold text-gray-900 mb-1">ASOS</div>
            <div className="text-sm text-gray-500 mb-2">Best for: trends, budget fashion, size inclusivity</div>
            <div className="font-mono text-2xl font-bold text-purple-600">4.3<span className="text-sm text-gray-400">/5</span></div>
            <a href="https://asos.com" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary mt-3 inline-block text-sm !px-4 !py-2 !from-purple-500 !to-indigo-500">Shop ASOS →</a>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="card overflow-hidden mb-8">
        <table className="w-full">
          <thead>
            <tr className="bg-blush-50">
              <th className="text-left px-4 py-3 text-sm font-mono font-semibold text-blush-700">Feature</th>
              <th className="text-center px-4 py-3 text-sm font-mono font-semibold text-blush-700">Nordstrom</th>
              <th className="text-center px-4 py-3 text-sm font-mono font-semibold text-blush-700">ASOS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r, i) => (
              <tr key={i} className="border-t border-blush-50">
                <td className="px-4 py-3 text-sm text-gray-700 font-medium">{r.feature}</td>
                <td className={`px-4 py-3 text-sm text-center ${r.winner === 'nordstrom' ? 'text-emerald-600 font-semibold' : 'text-gray-500'}`}>
                  {r.nordstrom} {r.winner === 'nordstrom' && '🏆'}
                </td>
                <td className={`px-4 py-3 text-sm text-center ${r.winner === 'asos' ? 'text-emerald-600 font-semibold' : 'text-gray-500'}`}>
                  {r.asos} {r.winner === 'asos' && '🏆'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose-style">
        <h2>Our Recommendation</h2>
        <p>
          Both Nordstrom and ASOS serve different needs, and the smartest approach is to use both strategically. Shop Nordstrom for investment pieces you&apos;ll wear for years — blazers, quality denim, leather goods, and classic work staples. Their no-questions-asked return policy means zero risk.
        </p>
        <p>
          Turn to ASOS for trend-driven pieces you want to try without breaking the bank. Their size range is unmatched, and their &ldquo;new in&rdquo; section is updated multiple times per week. For special occasions on a budget, ASOS consistently delivers.
        </p>

        <h2>FAQ</h2>
        {[
          { q: 'Which has better quality?', a: 'Nordstrom wins on quality across the board. You\'re paying for better fabrics, construction, and longevity. ASOS is great for trends but expect fast-fashion quality at fast-fashion prices.' },
          { q: 'Which is more size-inclusive?', a: 'ASOS is the clear winner with dedicated Petite, Tall, Curve, and Maternity lines, ranging from XXS to 4XL. Nordstrom has been expanding but currently tops out at 3X for most brands.' },
          { q: 'Which has better sales?', a: 'Both have excellent sales. Nordstrom\'s Anniversary Sale (July) and Half-Yearly Sale offer deep discounts on premium brands. ASOS runs frequent 20-30% off promotions year-round.' },
        ].map((f, i) => (
          <div key={i} className="mb-4">
            <h3 className="!mt-4 !mb-1">{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <a href="https://nordstrom.com" target="_blank" rel="noopener noreferrer nofollow" className="card p-6 text-center hover:border-blush-300 transition-all group">
          <div className="font-display text-lg font-bold text-gray-900 group-hover:text-blush-600 transition-colors mb-2">Shop Nordstrom</div>
          <p className="text-sm text-gray-400 mb-3">Free shipping & returns. No time limit.</p>
          <span className="btn-primary text-sm">Visit Nordstrom →</span>
        </a>
        <a href="https://asos.com" target="_blank" rel="noopener noreferrer nofollow" className="card p-6 text-center hover:border-purple-300 transition-all group">
          <div className="font-display text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">Shop ASOS</div>
          <p className="text-sm text-gray-400 mb-3">Free shipping on $50+. XXS-4XL.</p>
          <span className="btn-primary text-sm !from-purple-500 !to-indigo-500">Visit ASOS →</span>
        </a>
      </div>

      <NewsletterCTA />
    </article>
  );
}
