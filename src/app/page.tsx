import Link from 'next/link';
import { guides } from '@/lib/guides-data';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import GuideCard from '@/components/GuideCard';
import NewsletterCTA from '@/components/NewsletterCTA';
import TrendingProducts from '@/components/TrendingProducts';
import ShopByCategory from '@/components/ShopByCategory';
import AdUnit from '@/components/AdUnit';

export default function HomePage() {
  const editorPicks = guides.slice(0, 3);

  const trendingGuides = [
    { title: 'Capsule Wardrobe Guide 2026', emoji: '\uD83D\uDC57', color: 'from-rose-400 to-pink-500', url: '/guides/capsule-wardrobe-working-women-2026' },
    { title: 'Casual Outfits That Look Expensive', emoji: '\u2728', color: 'from-amber-400 to-orange-500', url: '/guides/casual-outfits-look-expensive' },
    { title: 'First Date Outfits', emoji: '\uD83C\uDF39', color: 'from-purple-400 to-indigo-500', url: '/guides/first-date-outfits-every-vibe' },
    { title: 'Spring Fashion Trends', emoji: '\uD83C\uDF38', color: 'from-emerald-400 to-teal-500', url: '/guides/spring-fashion-trends-2026' },
  ];

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://www.pinterest.com/yss007895/',
      'https://instagram.com/stylemedaily',
      'https://twitter.com/stylemedaily',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'yss007895@gmail.com',
      contactType: 'customer service',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is StyleMeDaily?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'StyleMeDaily is a personal styling platform that provides expert fashion guides, curated outfit ideas, and product recommendations for every woman, every occasion, and every budget.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I find the right outfit for my body type?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Take our free Style Quiz to discover your personal style profile, or browse our Body Shape Guide for tailored outfit recommendations based on your unique proportions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are the product recommendations affordable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We curate products across all price ranges, from budget-friendly finds under $30 to investment pieces. Each guide includes options for every budget.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div>
        {/* Hero */}
        <section className="pt-16 pb-20 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-blush-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
          <div className="absolute -top-10 right-0 w-56 h-56 bg-purple-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

          <p className="text-sm text-gray-400 font-mono tracking-wide uppercase mb-4 relative">
            Your Daily Style Edit
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5 text-gray-900 relative">
            Fashion that fits{' '}
            <span className="font-display italic bg-gradient-to-r from-blush-500 to-purple-400 bg-clip-text text-transparent">your life</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-lg mb-8 leading-relaxed relative">
            Curated style guides, honest product reviews, and outfit inspiration
            for every occasion and every budget.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 relative">
            <Link href="/shop" className="btn-primary text-center">Shop Editor&apos;s Picks</Link>
            <Link href="/guides" className="btn-secondary text-center">Browse Style Guides</Link>
          </div>
        </section>

        {/* Ad banner */}
        <AdUnit slot="8863913673" format="horizontal" className="mb-4" />

        {/* Trending Products */}
        <TrendingProducts />

        {/* Editor Picks */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="section-title">Editor&apos;s Picks</h2>
              <p className="text-sm text-gray-400 mt-1">Hand-selected guides by our styling team</p>
            </div>
            <Link href="/guides" className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors">View all</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {editorPicks.map(g => <GuideCard key={g.slug} guide={g} />)}
          </div>
        </section>

        {/* Ad banner */}
        <AdUnit slot="8863913673" format="horizontal" className="mb-4" />

        {/* Shop by Category */}
        <ShopByCategory />

        {/* Newsletter */}
        <section className="mb-20">
          <NewsletterCTA />
        </section>

        {/* Trending Styles - Gradient cards */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="section-title">Trending Styles</h2>
              <p className="text-sm text-gray-400 mt-1">Our most popular style guides this week</p>
            </div>
            <a href="https://www.pinterest.com/yss007895/" target="_blank" rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors">
              Follow
            </a>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {trendingGuides.map((guide, i) => (
              <Link key={i} href={guide.url} className="group relative rounded-xl overflow-hidden aspect-[2/3] block">
                <div className={`absolute inset-0 bg-gradient-to-br ${guide.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-4xl mb-4">{guide.emoji}</span>
                  <p className="font-display font-bold text-white text-base sm:text-lg leading-tight drop-shadow-sm">
                    {guide.title}
                  </p>
                  <span className="mt-3 text-white/80 text-xs font-medium border border-white/30 px-3 py-1 rounded-full group-hover:bg-white/20 transition-colors">
                    Read Guide
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
