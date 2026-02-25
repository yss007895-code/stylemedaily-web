import { notFound } from 'next/navigation';
import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import { guides, getGuideBySlug } from '@/lib/guides-data';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { guidesContent } from '@/lib/guides-content';
import ShopTheLook from '@/components/ShopTheLook';
import MidArticleCTA from '@/components/MidArticleCTA';
import StickyShopBar from '@/components/StickyShopBar';
import NewsletterCTA from '@/components/NewsletterCTA';
import AdUnit from '@/components/AdUnit';
import ShareButtons from '@/components/ShareButtons';
import AffiliateDisclosureBanner from '@/components/AffiliateDisclosureBanner';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return guides.map(g => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    keywords: `${guide.category}, fashion guide, style tips, ${guide.title.toLowerCase()}, women fashion 2026, outfit ideas`,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: 'article',
      publishedTime: guide.date,
      authors: ['StyleMeDaily Team'],
      images: guide.image ? [{ url: guide.image, width: 1200, height: 630 }] : [],
      siteName: SITE_NAME,
      url: `${SITE_URL}/guides/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.description,
      images: guide.image ? [guide.image] : [],
    },
    alternates: {
      canonical: `${SITE_URL}/guides/${params.slug}`,
    },
  };
}

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const related = guides.filter(g => g.category === guide.category && g.slug !== guide.slug).slice(0, 3);
  const moreGuides = guides.filter(g => g.category !== guide.category && g.slug !== guide.slug).slice(0, 3);
  const products = guide.affiliateProducts || [];
  const minPrice = products.reduce((min, p) => {
    const price = parseFloat(p.price.replace('$', ''));
    return price < min ? price : min;
  }, 999);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    image: guide.image || '',
    datePublished: guide.date,
    dateModified: guide.date,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/guides/${guide.slug}` },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
      { '@type': 'ListItem', position: 3, name: guide.title, item: `${SITE_URL}/guides/${guide.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Product schema for rich snippets */}
      {products.map((p, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: p.name,
          brand: { '@type': 'Brand', name: p.brand },
          image: p.image || guide.image || '',
          description: `${p.name} by ${p.brand} — featured in ${guide.title}`,
          offers: {
            '@type': 'Offer',
            price: p.price.replace('$', ''),
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: p.url,
          },
        }) }} />
      ))}
      {/* FAQ schema for search snippets */}
      {guidesContent[guide.slug] && guidesContent[guide.slug].length > 1 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: guidesContent[guide.slug].slice(0, 5).map(section => ({
            '@type': 'Question',
            name: section.heading.endsWith('?') ? section.heading : `What about ${section.heading.toLowerCase()}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: section.paragraphs[0] || guide.description,
            },
          })),
        }) }} />
      )}

      <article className="pt-8 max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-gray-600">Guides</Link>
          <span>/</span>
          <span className="text-gray-600 capitalize">{guide.category.replace('-', ' ')}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge-new">{guide.tag}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {guide.title}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">{guide.description}</p>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-9 h-9 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-display font-bold text-gold-700">SM</span>
            </div>
            <div className="text-sm text-gray-400">
              <span className="font-medium text-gray-600">Sarah Mitchell</span>
              <span className="mx-2">·</span>
              <span>{new Date(guide.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="mx-2">·</span>
              <span>{guide.readTime} read</span>
            </div>
          </div>
        </header>

        {/* Affiliate Disclosure Banner */}
        <AffiliateDisclosureBanner />

        {/* Hero Image */}
        {guide.image && (
          <div className="mb-8 rounded-2xl overflow-hidden relative h-64 sm:h-80">
            <SafeImage src={guide.image} alt={guide.title} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
          </div>
        )}

        {/* Quick Shop Banner — Clean */}
        {products.length > 0 && (
          <div className="mb-8 bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="font-semibold text-sm text-gray-900">{products.length} curated items in this guide</p>
              <p className="text-xs text-gray-400 mt-0.5">Prices start at {minPrice < 999 ? `$${minPrice}` : '$15'}</p>
            </div>
            <a href="#shop-the-look" className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors">
              View all
            </a>
          </div>
        )}

        {/* Shop the Look - Top */}
        {products.length > 0 && (
          <div className="mb-8" id="shop-the-look">
            <ShopTheLook products={products} />
          </div>
        )}

        {/* Table of Contents */}
        {guidesContent[guide.slug] && (
          <div className="border border-gray-100 rounded-xl p-5 mb-8 bg-white">
            <h3 className="font-display font-bold text-sm text-gray-700 mb-3">In This Guide</h3>
            <ul className="space-y-2">
              {guidesContent[guide.slug].map((section, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-500 text-xs flex items-center justify-center font-medium">{idx + 1}</span>
                  {section.heading}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Content */}
        <div className="prose-style">
          {guidesContent[guide.slug] ? (
            guidesContent[guide.slug].map((section, idx) => (
              <div key={idx}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}

                {/* Mid-Article CTA after first section — hero with image */}
                {idx === 0 && products.length > 0 && (
                  <MidArticleCTA products={products} variant="hero" />
                )}

                {/* In-Article AdSense after second section */}
                {idx === 1 && (
                  <AdUnit slot="7545186477" format="fluid" layout="in-article" />
                )}

                {/* Mid-Article CTA after third section — pair */}
                {idx === 2 && products.length > 1 && (
                  <MidArticleCTA products={products.slice(1)} variant="pair" />
                )}

                {/* Rectangle ad after 4th section */}
                {idx === 3 && (
                  <AdUnit slot="6237750336" format="rectangle" style={{ minHeight: 280 }} />
                )}
              </div>
            ))
          ) : (
            <>
              <h2>Why This Guide Matters</h2>
              <p>{guide.description}</p>
            </>
          )}
        </div>

        {/* Shop the Look - Bottom */}
        {products.length > 0 && (
          <div className="my-8">
            <ShopTheLook products={products} />
          </div>
        )}

        {/* Share & Save */}
        <div className="border border-gray-100 rounded-xl p-5 my-8 bg-white">
          <p className="font-display font-bold text-gray-900 text-sm mb-1 text-center">Found this helpful?</p>
          <p className="text-xs text-gray-400 mb-4 text-center">Share it with someone who&apos;d love it.</p>
          <ShareButtons
            url={`${SITE_URL}/guides/${guide.slug}`}
            title={guide.title}
            image={guide.image}
          />
        </div>

        {/* Author Bio Box */}
        <div className="border border-gray-100 rounded-2xl p-6 my-8 bg-white flex items-start gap-5">
          <div className="w-14 h-14 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
            <span className="text-base font-display font-bold text-gold-700">SM</span>
          </div>
          <div>
            <p className="text-[10px] font-medium text-gold-500 tracking-ultra-wide uppercase mb-0.5">Written by</p>
            <h4 className="font-display font-bold text-gray-900 text-base">Sarah Mitchell</h4>
            <p className="text-[11px] text-gold-600 font-medium tracking-wide uppercase mb-2">Editor-in-Chief</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Sarah has 10+ years of experience in fashion editorial. She leads our team&apos;s style direction and ensures every guide meets our standards for accuracy, inclusivity, and real-world wearability.
            </p>
          </div>
        </div>

        {/* Related Guides */}
        {related.length > 0 && (
          <div className="mt-10 mb-8">
            <h3 className="font-display font-bold text-gray-900 mb-4">You Might Also Like</h3>
            <div className="grid gap-3">
              {related.map(r => (
                <Link key={r.slug} href={`/guides/${r.slug}`} className="card-hover p-4 flex items-center gap-4 group">
                  {r.image ? (
                    <SafeImage src={r.image} alt={r.title} width={64} height={64} className="rounded-xl object-cover" />
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-gray-100" />
                  )}
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-gray-800 group-hover:text-gray-600 transition-colors">{r.title}</p>
                    <p className="text-xs text-gray-400">{r.readTime} · {r.tag}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* More From StyleMeDaily */}
        {moreGuides.length > 0 && (
          <div className="mb-8">
            <h3 className="font-display font-bold text-gray-900 mb-4">Explore More Guides</h3>
            <div className="grid gap-3">
              {moreGuides.map(r => (
                <Link key={r.slug} href={`/guides/${r.slug}`} className="card-hover p-4 flex items-center gap-4 group">
                  {r.image ? (
                    <SafeImage src={r.image} alt={r.title} width={64} height={64} className="rounded-xl object-cover" />
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-gray-100" />
                  )}
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-gray-800 group-hover:text-gray-600 transition-colors">{r.title}</p>
                    <p className="text-xs text-gray-400">{r.readTime} · {r.tag}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter */}
        <NewsletterCTA />

        {/* Bottom AdSense Banner */}
        <AdUnit slot="8863913673" format="horizontal" className="mt-8" />

        <p className="text-xs text-gray-400 text-center mt-8">
          Last updated: {guide.date} · Affiliate disclosure: Some links may earn us a commission at no extra cost to you.
        </p>
      </article>

      {/* Mobile Sticky Shop Bar */}
      {products.length > 0 && (
        <StickyShopBar productCount={products.length} firstProductUrl={products[0].url} />
      )}
    </>
  );
}
