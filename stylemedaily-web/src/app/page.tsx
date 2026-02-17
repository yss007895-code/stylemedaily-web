import Link from 'next/link';
import { guides } from '@/lib/guides-data';
import GuideCard from '@/components/GuideCard';
import NewsletterCTA from '@/components/NewsletterCTA';

export default function HomePage() {
  const featured = guides.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-gradient-to-bl from-blush-100/40 via-purple-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-amber-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="inline-block mb-5">
          <span className="badge bg-blush-50 text-blush-600 border border-blush-100 text-xs px-3 py-1.5 font-mono tracking-wider">
            YOUR PERSONAL STYLIST — AVAILABLE 24/7
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5 text-gray-900">
          Find Your{' '}
          <span className="gradient-text italic">Perfect Style</span>
        </h1>

        <p className="text-lg text-gray-500 max-w-xl mb-8 leading-relaxed">
          Expert styling guides, curated outfit ideas, and personalized fashion advice
          for every woman, every occasion, every body.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/style-quiz" className="btn-primary text-center">Take the Style Quiz →</Link>
          <Link href="/guides" className="btn-secondary text-center">Browse Style Guides</Link>
        </div>

        <div className="flex gap-10 mt-12">
          {[
            { v: '500K+', l: 'Monthly Readers' },
            { v: '200+', l: 'Style Guides' },
            { v: '50+', l: 'Brand Partners' },
          ].map(s => (
            <div key={s.l}>
              <div className="font-mono text-2xl font-bold text-blush-600">{s.v}</div>
              <div className="text-xs text-gray-400 mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Guides */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="section-title">Latest Style Guides</h2>
            <p className="text-sm text-gray-400 mt-1">Curated by our styling team, updated weekly</p>
          </div>
          <Link href="/guides" className="text-sm text-blush-500 hover:text-blush-600 font-medium">View all →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map(g => <GuideCard key={g.slug} guide={g} />)}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="section-title mb-6">Style by Occasion</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { name: 'Work Outfits', emoji: '👔', count: 24, color: 'from-blue-50 to-indigo-50' },
            { name: 'Date Night', emoji: '💃', count: 18, color: 'from-rose-50 to-pink-50' },
            { name: 'Casual Chic', emoji: '👗', count: 32, color: 'from-amber-50 to-orange-50' },
            { name: 'Wedding Guest', emoji: '🎉', count: 12, color: 'from-purple-50 to-fuchsia-50' },
            { name: 'Body Shape Tips', emoji: '💖', count: 15, color: 'from-pink-50 to-rose-50' },
            { name: 'Budget Friendly', emoji: '💰', count: 20, color: 'from-emerald-50 to-teal-50' },
            { name: 'Seasonal Trends', emoji: '🌸', count: 16, color: 'from-yellow-50 to-amber-50' },
            { name: 'Capsule Wardrobe', emoji: '✨', count: 8, color: 'from-violet-50 to-purple-50' },
          ].map(cat => (
            <Link key={cat.name} href="/guides" className="card-hover p-5 text-center group">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mx-auto mb-3`}>
                <span className="text-xl">{cat.emoji}</span>
              </div>
              <div className="font-display font-semibold text-sm text-gray-800 group-hover:text-blush-600 transition-colors">{cat.name}</div>
              <div className="text-xs text-gray-400 font-mono mt-1">{cat.count} guides</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mb-16">
        <NewsletterCTA />
      </section>

      {/* Pinterest CTA */}
      <section>
        <div className="card p-6 flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-red-50/50 to-rose-50/30 border-red-100/50">
          <div className="text-5xl">📌</div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-display font-bold text-gray-900 mb-1">Follow us on Pinterest</h3>
            <p className="text-sm text-gray-500">Daily outfit inspiration, mood boards, and shoppable pins. 50K+ followers.</p>
          </div>
          <a href="https://pinterest.com/stylemedaily" target="_blank" rel="noopener noreferrer"
            className="bg-[#E60023] text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#cc001f] transition-colors whitespace-nowrap">
            Follow on Pinterest
          </a>
        </div>
      </section>
    </div>
  );
}
