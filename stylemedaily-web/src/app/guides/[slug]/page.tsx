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
    title: guide.title,
    description: guide.description,
  };
}

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const related = guides.filter(g => g.category === guide.category && g.slug !== guide.slug).slice(0, 3);

  return (
    <article className="pt-8 max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blush-500">Home</Link>
        <span>/</span>
        <Link href="/guides" className="hover:text-blush-500">Guides</Link>
        <span>/</span>
        <span className="text-gray-600">{guide.category}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="badge-new">{guide.tag}</span>
          <span className="text-xs text-gray-400">{guide.readTime} read</span>
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

      {/* Shop the Look (if products available) */}
      {guide.affiliateProducts && guide.affiliateProducts.length > 0 && (
        <div className="mb-8">
          <ShopTheLook products={guide.affiliateProducts} />
        </div>
      )}

      {/* Article Content Placeholder */}
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

        <h2>Key Takeaways</h2>
        <p>
          The most important thing to remember is that personal style is just that — personal. There&apos;s no one-size-fits-all formula, but there are principles that work universally: understanding your body proportions, knowing which colors complement your skin tone, and investing in quality basics that form the foundation of a versatile wardrobe.
        </p>
        <p>
          Throughout this guide, we&apos;ll walk you through specific outfit combinations, suggest where to shop for the best value, and share insider tips from our styling team. Every product recommendation has been personally vetted by our team.
        </p>

        <h2>What&apos;s Next?</h2>
        <p>
          Ready to put these tips into action? Start with the shoppable items above — we&apos;ve hand-picked pieces that work together and individually. For more personalized advice, take our free Style Quiz to get recommendations tailored to your body type, lifestyle, and budget.
        </p>
      </div>

      {/* Shop the Look again at bottom */}
      {guide.affiliateProducts && guide.affiliateProducts.length > 0 && (
        <div className="my-8">
          <ShopTheLook products={guide.affiliateProducts} />
        </div>
      )}

      {/* Related Guides */}
      {related.length > 0 && (
        <div className="mt-10 mb-8">
          <h3 className="font-display font-bold text-gray-900 mb-4">You Might Also Like</h3>
          <div className="grid gap-3">
            {related.map(r => (
              <Link key={r.slug} href={`/guides/${r.slug}`} className="card-hover p-4 flex items-center gap-4 group">
                <span className="text-2xl">{r.emoji}</span>
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
  );
}
