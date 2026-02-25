import Link from 'next/link';
import type { Metadata } from 'next';
import { teamMembers } from '@/lib/team';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About StyleMeDaily — Our Mission & Team',
  description: 'StyleMeDaily provides expert styling guides and personalized fashion advice for every woman. Learn about our mission and editorial standards.',
  keywords: ['about stylemedaily', 'fashion blog team', 'women fashion editors', 'style advice editorial'],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About StyleMeDaily — Our Mission & Team',
    description: 'StyleMeDaily provides expert styling guides and personalized fashion advice for every woman.',
    type: 'website',
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    images: [{ url: '/images/guides/hero-women-fashion.webp', width: 1200, height: 630, alt: 'StyleMeDaily Team' }],
  },
  twitter: { card: 'summary_large_image', site: '@stylemedaily' },
};

export default function AboutPage() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/guides/hero-women-fashion.webp`,
    description: 'Expert styling guides and personalized fashion advice for every woman.',
    contactPoint: { '@type': 'ContactPoint', email: 'contact@stylemedaily.org', contactType: 'customer service' },
    sameAs: ['https://www.pinterest.com/stylemedaily/'],
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="pt-12 max-w-3xl mx-auto">
      <header className="mb-12">
        <p className="text-sm text-gray-400 font-mono uppercase tracking-wide mb-3">About Us</p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Style advice that actually works
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          We create practical, no-nonsense styling guides for women who want to look great without spending hours or a fortune.
        </p>
      </header>

      <div className="prose-style">
        <h2>Our Mission</h2>
        <p>
          StyleMeDaily was born from a simple idea: every woman deserves access to great style advice, regardless of her budget, body type, or lifestyle. We believe getting dressed should feel easy, not stressful.
        </p>
        <p>
          Our team creates in-depth style guides, honest product reviews, and retailer comparisons that save you time and money. Every recommendation is personally tested and vetted before we publish it.
        </p>

        <h2>What We Cover</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
          {[
            { title: 'Style Guides', desc: 'Step-by-step outfit guides for every occasion' },
            { title: 'Product Reviews', desc: 'Honest, tested reviews of clothing and accessories' },
            { title: 'Retailer Comparisons', desc: 'Side-by-side breakdowns to help you shop smarter' },
            { title: 'Capsule Wardrobes', desc: 'Minimalist wardrobe plans that maximize outfits' },
            { title: 'Body Type Guides', desc: 'Flattering styles for every shape and size' },
            { title: 'Trend Reports', desc: 'What to buy now and what to skip' },
          ].map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-4 bg-white">
              <h3 className="font-display font-bold text-sm text-gray-900 mb-1">{item.title}</h3>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>Editorial Standards</h2>
        <p>
          We only recommend products we genuinely believe in. Our editorial team tests items firsthand, compares prices across retailers, and verifies quality before any product makes it into a guide. We never let affiliate relationships influence our recommendations.
        </p>

        <h2>Affiliate Disclosure</h2>
        <p>
          Some links on StyleMeDaily are affiliate links. This means we may earn a small commission if you purchase through our links, at no extra cost to you. This helps us keep creating free content for our readers.
        </p>
      </div>

      {/* Meet the Team */}
      <section className="mt-14 mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Meet the Team</h2>
        <p className="text-sm text-gray-400 mb-8">The people behind every guide, review, and recommendation.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="border border-gray-100 rounded-2xl p-6 bg-white text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-display font-bold mx-auto mb-4 ${member.color}`}>
                {member.initials}
              </div>
              <h3 className="font-display font-bold text-gray-900 text-base">{member.name}</h3>
              <p className="text-xs text-gold-500 font-medium tracking-wide uppercase mt-1 mb-3">{member.role}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="prose-style">
        <h2>Get in Touch</h2>
        <p>
          Questions, feedback, or partnership inquiries? Reach us at{' '}
          <a href="mailto:contact@stylemedaily.org">contact@stylemedaily.org</a>.
          You can also follow us on{' '}
          <a href="https://www.pinterest.com/stylemedaily/" target="_blank" rel="noopener noreferrer">Pinterest</a> for daily outfit inspiration.
        </p>
      </div>

      <div className="mt-12 border border-gray-100 rounded-xl p-6 bg-white text-center">
        <h3 className="font-display font-bold text-gray-900 mb-2">Start exploring</h3>
        <p className="text-sm text-gray-400 mb-4">Find your next favorite outfit</p>
        <div className="flex justify-center gap-3">
          <Link href="/guides" className="btn-primary text-sm">Browse Guides</Link>
          <Link href="/style-quiz" className="btn-secondary text-sm">Take Style Quiz</Link>
        </div>
      </div>
    </div>
    </>
  );
}
