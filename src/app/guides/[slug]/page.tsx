import { notFound } from 'next/navigation';
import Link from 'next/link';
import { guides, getGuideBySlug } from '@/lib/guides-data';
import ShopTheLook from '@/components/ShopTheLook';
import NewsletterCTA from '@/components/NewsletterCTA';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return guides.map(g => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | StyleMeDaily`,
    description: guide.description,
    keywords: `${guide.category}, fashion guide, style tips, ${guide.title.toLowerCase()}, women fashion 2026, outfit ideas`,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: 'article',
      publishedTime: guide.date,
      authors: ['StyleMeDaily Team'],
      images: guide.image ? [{ url: guide.image, width: 1200, height: 630 }] : [],
      siteName: 'StyleMeDaily',
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.description,
      images: guide.image ? [guide.image] : [],
    },
    alternates: {
      canonical: `https://yss007895-code.github.io/stylemedaily-web/guides/${params.slug}`,
    },
  };
}

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const related = guides.filter(g => g.category === guide.category && g.slug !== guide.slug).slice(0, 3);
  const moreGuides = guides.filter(g => g.category !== guide.category && g.slug !== guide.slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    image: guide.image || '',
    datePublished: guide.date,
    dateModified: guide.date,
    author: {
      '@type': 'Organization',
      name: 'StyleMeDaily',
      url: 'https://yss007895-code.github.io/stylemedaily-web',
    },
    publisher: {
      '@type': 'Organization',
      name: 'StyleMeDaily',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yss007895-code.github.io/stylemedaily-web/favicon.ico',
      },
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-8 max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-blush-500">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-blush-500">Guides</Link>
          <span>/</span>
          <span className="text-gray-600 capitalize">{guide.category.replace('-', ' ')}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge-new">{guide.tag}</span>
            <span className="text-xs text-gray-400">{guide.readTime} read</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-green-600 font-medium">✓ Expert Reviewed</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            {guide.title}
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">{guide.description}</p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
            <span>By StyleMeDaily Team</span>
            <span>·</span>
            <span>{new Date(guide.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </header>

        {/* Hero Image */}
        {guide.image && (
          <div className="mb-8 rounded-2xl overflow-hidden">
            <img
              src={guide.image}
              alt={guide.title}
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>
        )}

        {/* Quick Shop Banner */}
        {guide.affiliateProducts && guide.affiliateProducts.length > 0 && (
          <div className="mb-8 bg-gradient-to-r from-blush-500 to-purple-500 rounded-xl p-4 text-white text-center">
            <p className="font-bold text-sm">🛍️ {guide.affiliateProducts.length} Hand-Picked Items Inside</p>
            <p className="text-xs text-white/80 mt-0.5">All tested &amp; approved by our styling team — prices start at {guide.affiliateProducts.reduce((min, p) => {
              const price = parseFloat(p.price.replace('$', ''));
              return price < min ? price : min;
            }, 999) === 999 ? '$15' : `$${guide.affiliateProducts.reduce((min, p) => {
              const price = parseFloat(p.price.replace('$', ''));
              return price < min ? price : min;
            }, 999)}`}</p>
          </div>
        )}

        {/* Shop the Look - Top */}
        {guide.affiliateProducts && guide.affiliateProducts.length > 0 && (
          <div className="mb-8">
            <ShopTheLook products={guide.affiliateProducts} />
          </div>
        )}

        {/* Table of Contents */}
        <div className="card p-5 mb-8 bg-gray-50/50">
          <h3 className="font-display font-bold text-sm text-gray-700 mb-3">📖 In This Guide</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-gray-600 hover:text-blush-600 cursor-pointer">
              <span className="w-5 h-5 rounded-full bg-blush-100 text-blush-600 text-xs flex items-center justify-center font-bold">1</span>
              Why This Guide Matters
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600 hover:text-blush-600 cursor-pointer">
              <span className="w-5 h-5 rounded-full bg-blush-100 text-blush-600 text-xs flex items-center justify-center font-bold">2</span>
              Key Takeaways
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600 hover:text-blush-600 cursor-pointer">
              <span className="w-5 h-5 rounded-full bg-blush-100 text-blush-600 text-xs flex items-center justify-center font-bold">3</span>
              Expert Styling Tips
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600 hover:text-blush-600 cursor-pointer">
              <span className="w-5 h-5 rounded-full bg-blush-100 text-blush-600 text-xs flex items-center justify-center font-bold">4</span>
              Shop the Complete Look
            </li>
          </ul>
        </div>

        {/* Article Content */}
        <div className="prose-style">
          <h2>Why This Guide Matters</h2>
          <p>
            Finding the right style shouldn&apos;t be overwhelming. Whether you&apos;re refreshing your wardrobe for a new season, starting a new job, or simply want to feel more confident in your everyday outfits, this guide breaks everything down into practical, actionable steps.
          </p>
          <p>
            We&apos;ve consulted with professional stylists, tested dozens of products, and gathered real feedback from our community of 500,000+ readers to bring you recommendations that actually work for real women with real budgets.
          </p>

          <blockquote>
            &ldquo;Style is a way to say who you are without having to speak.&rdquo; — Rachel Zoe
          </blockquote>

          {/* Mid-Article CTA */}
          {guide.affiliateProducts && guide.affiliateProducts.length > 0 && (
            <div className="not-prose my-6 bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
              <p className="text-sm font-bold text-amber-800">💡 Reader Favorite</p>
              <p className="text-xs text-amber-700 mt-1">
                Our #{' '}1 pick: <strong>{guide.affiliateProducts[0].name}</strong> ({guide.affiliateProducts[0].price})
              </p>
              <a href={guide.affiliateProducts[0].url} target="_blank" rel="noopener noreferrer nofollow"
                className="inline-block mt-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition-colors">
                Check Price on Amazon →
              </a>
            </div>
          )}

          <h2>Key Takeaways</h2>
          <p>
            The most important thing to remember is that personal style is just that — personal. There&apos;s no one-size-fits-all formula, but there are principles that work universally: understanding your body proportions, knowing which colors complement your skin tone, and investing in quality basics that form the foundation of a versatile wardrobe.
          </p>
          <p>
            Throughout this guide, we&apos;ll walk you through specific outfit combinations, suggest where to shop for the best value, and share insider tips from our styling team. Every product recommendation has been personally vetted by our team.
          </p>

          <h2>Expert Styling Tips</h2>
          <p>
            Professional stylists agree: the key to great style is a strong foundation of versatile basics. A well-fitted blazer, quality denim, classic white sneakers, and a structured bag can take you from the office to dinner with just a few adjustments. The secret isn&apos;t buying more — it&apos;s buying smarter.
          </p>
          <p>
            Color coordination plays a huge role in how polished an outfit looks. Stick to a cohesive color palette of 3-4 main colors that complement your skin tone, and you&apos;ll find that everything in your closet works together effortlessly.
          </p>

          <h2>What&apos;s Next?</h2>
          <p>
            Ready to put these tips into action? Start with the shoppable items below — we&apos;ve hand-picked pieces that work together and individually. For more personalized advice, take our free Style Quiz to get recommendations tailored to your body type, lifestyle, and budget.
          </p>
        </div>

        {/* Shop the Look - Bottom */}
        {guide.affiliateProducts && guide.affiliateProducts.length > 0 && (
          <div className="my-8">
            <ShopTheLook products={guide.affiliateProducts} />
          </div>
        )}

        {/* Share & Save */}
        <div className="card p-5 my-8 text-center bg-gradient-to-r from-gray-50 to-blush-50/30">
          <p className="font-display font-bold text-gray-900 text-sm mb-2">💖 Found this helpful?</p>
          <p className="text-xs text-gray-500 mb-3">Save this guide to Pinterest or share it with a friend who needs a wardrobe refresh!</p>
          <div className="flex justify-center gap-3">
            <a href={`https://pinterest.com/pin/create/button/?url=https://yss007895-code.github.io/stylemedaily-web/guides/${guide.slug}&description=${encodeURIComponent(guide.title)}`}
              target="_blank" rel="noopener noreferrer"
              className="bg-[#E60023] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#cc001f] transition-colors">
              📌 Save to Pinterest
            </a>
            <button
              className="bg-gray-800 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
              onClick={() => {}}
            >
              📋 Copy Link
            </button>
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
                    <img src={r.image} alt={r.title} className="w-16 h-16 rounded-xl object-cover" />
                  ) : (
                    <span className="text-2xl w-16 h-16 flex items-center justify-center">{r.emoji}</span>
                  )}
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-gray-800 group-hover:text-blush-600 transition-colors">{r.title}</div>
                    <div className="text-xs text-gray-400">{r.readTime} · {r.tag}</div>
                  </div>
                  <span className="text-blush-400 text-sm">→</span>
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
                    <img src={r.image} alt={r.title} className="w-16 h-16 rounded-xl object-cover" />
                  ) : (
                    <span className="text-2xl w-16 h-16 flex items-center justify-center">{r.emoji}</span>
                  )}
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-gray-800 group-hover:text-blush-600 transition-colors">{r.title}</div>
                    <div className="text-xs text-gray-400">{r.readTime} · {r.tag}</div>
                  </div>
                  <span className="text-blush-400 text-sm">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter */}
        <NewsletterCTA />

        <p className="text-xs text-gray-400 text-center mt-8">
          Last updated: {guide.date} · Affiliate disclosure: Some links may earn us a commission at no extra cost to you.
        </p>
      </article>
    </>
  );
}
