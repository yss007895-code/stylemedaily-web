import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { guides } from '@/lib/guides-data';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import TrendingProducts from '@/components/TrendingProducts';
import AdUnit from '@/components/AdUnit';

export default function HomePage() {
  const stories = guides.slice(0, 4);

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://www.pinterest.com/stylemedaily/',
      'https://www.pinterest.com/stylemedaily_official/',
      'https://twitter.com/stylemedaily',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@stylemedaily.org',
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
          text: 'Browse our Body Shape Guide for tailored outfit recommendations based on your unique proportions, or explore our curated style guides.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are the product recommendations affordable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We feature products across all price ranges, from everyday finds under $30 to investment pieces. Each guide includes options for every budget.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div>
        {/* Hero — Editorial asymmetric split */}
        <section className="pt-10 pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="lg:pr-8">
              <p className="text-[11px] tracking-editorial uppercase text-editorial-muted font-body font-medium mb-6">
                EDITORIAL, SPRING 2026
              </p>
              <h1 className="font-display text-[3rem] sm:text-[4rem] lg:text-[4.5rem] font-light leading-[1.05] text-editorial-text mb-6">
                Refining Your{' '}
                <em className="italic">Daily Style</em>
              </h1>
              <p className="text-sm text-editorial-muted font-body leading-relaxed max-w-md mb-8">
                Curated recommendations for the woman who values substance over spectacle. Discover timeless pieces that define your personal narrative.
              </p>
              <Link href="/shop" className="btn-primary inline-block">
                EXPLORE THE EDIT
              </Link>
            </div>
            <div>
              {guides[0]?.image && (
                <div className="relative aspect-[3/4] overflow-hidden">
                  <SafeImage
                    src={guides[0].image}
                    alt="Featured editorial"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        <AdUnit slot="8863913673" format="horizontal" className="mb-4" />

        {/* The Edit — Products */}
        <TrendingProducts />

        {/* Editorial divider */}
        <div className="editorial-divider !my-10" aria-hidden="true">
          <span className="text-[10px] tracking-editorial uppercase text-editorial-muted">Style Me Daily</span>
        </div>

        {/* Stories — Editorial cards with horizontal scroll */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="font-display text-4xl sm:text-5xl font-light italic text-editorial-text">Stories</h2>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide">
            {stories.map(g => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group flex-shrink-0 w-[340px] lg:w-[380px]"
              >
                {g.image && (
                  <div className="relative h-56 overflow-hidden bg-editorial-light">
                    <SafeImage
                      src={g.image}
                      alt={g.title}
                      fill
                      sizes="380px"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] tracking-editorial uppercase text-editorial-accent font-body font-medium">
                      {g.tag === 'Guide' ? 'TRENDS' : g.tag.toUpperCase()}
                    </span>
                    <span className="text-[10px] text-editorial-muted font-body">
                      {new Date(g.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-normal text-editorial-text group-hover:text-editorial-accent transition-colors leading-snug mb-2 line-clamp-2">
                    {g.title}
                  </h3>
                  <p className="text-sm text-editorial-muted font-body line-clamp-2 leading-relaxed">{g.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <AdUnit slot="8863913673" format="horizontal" className="mb-4" />
      </div>
    </>
  );
}
