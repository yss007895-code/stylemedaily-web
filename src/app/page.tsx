import Image from 'next/image';
import Link from 'next/link';
import { guides } from '@/lib/guides-data';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import GuideCard from '@/components/GuideCard';
import NewsletterCTA from '@/components/NewsletterCTA';

export default function HomePage() {
  const featured = guides.slice(0, 6);

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    sameAs: [
      'https://www.pinterest.com/yss007895/',
      'https://instagram.com/stylemedaily',
      'https://twitter.com/stylemedaily',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@stylemedaily.com',
      contactType: 'customer service',
    },
  };

  const pinterestPins = [
    { title: 'Capsule Wardrobe Guide 2026', image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&h=600&fit=crop', url: '/guides/capsule-wardrobe-working-women-2026', color: 'from-purple-500 to-violet-500' },
    { title: 'Casual Outfits That Look Expensive', image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=600&fit=crop', url: '/guides/casual-outfits-look-expensive', color: 'from-pink-400 to-rose-400' },
    { title: 'First Date Outfits', image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&h=600&fit=crop', url: '/guides/first-date-outfits-every-vibe', color: 'from-red-400 to-pink-500' },
    { title: 'Best Jeans 2026', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=600&fit=crop', url: '/guides/best-jeans-every-body-type', color: 'from-blue-500 to-indigo-500' },
    { title: 'Spring Fashion Trends', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop', url: '/guides/spring-fashion-trends-2026', color: 'from-orange-400 to-yellow-400' },
    { title: 'Work Outfits 2026', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop', url: '/guides/work-outfits-that-mean-business', color: 'from-gray-700 to-gray-900' },
    { title: 'Must-Have Spring Items', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop', url: '/guides/spring-2026-must-have-items', color: 'from-red-500 to-orange-500' },
    { title: 'Best White Sneakers', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=600&fit=crop', url: '/guides/best-white-sneakers-women-2026', color: 'from-gray-400 to-gray-500' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
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

      {/* Pinterest Gallery */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="section-title flex items-center gap-2">
              <span className="text-[#E60023]">📌</span> Trending on Pinterest
            </h2>
            <p className="text-sm text-gray-400 mt-1">Our most pinned style guides — follow us for daily outfit inspo</p>
          </div>
          <a href="https://www.pinterest.com/yss007895/" target="_blank" rel="noopener noreferrer"
            className="text-sm text-[#E60023] hover:text-red-700 font-medium">
            Follow →
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {pinterestPins.map((pin, i) => (
            <Link key={i} href={pin.url} className="group relative rounded-xl overflow-hidden aspect-[2/3] block">
              <Image
                src={pin.image}
                alt={pin.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="font-display font-bold text-white text-sm leading-tight drop-shadow-lg">
                  {pin.title}
                </div>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="text-[10px] text-white/80 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    📌 Save to Pinterest
                  </span>
                </div>
              </div>
            </Link>
          ))}
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
            <p className="text-sm text-gray-500">Daily outfit inspiration, mood boards, and shoppable pins.</p>
          </div>
          <a href="https://www.pinterest.com/yss007895/" target="_blank" rel="noopener noreferrer"
            className="bg-[#E60023] text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#cc001f] transition-colors whitespace-nowrap">
            Follow on Pinterest
          </a>
        </div>
      </section>
    </div>
    </>
  );
}
