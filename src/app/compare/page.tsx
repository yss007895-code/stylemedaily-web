import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Fashion Comparisons & Reviews | StyleMeDaily',
  description: 'Honest side-by-side comparisons of top fashion retailers, brands, and styling services.',
  alternates: { canonical: `${SITE_URL}/compare` },
  openGraph: {
    title: 'Fashion Comparisons & Reviews | StyleMeDaily',
    description: 'Honest side-by-side comparisons of top fashion retailers.',
    url: `${SITE_URL}/compare`,
    siteName: 'StyleMeDaily',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', site: '@stylemedaily' },
};

const comparisons = [
  {
    href: '/compare/nordstrom-vs-asos',
    title: 'Nordstrom vs ASOS 2026',
    description: 'Quality, price, sizing, returns, and trend selection compared side by side.',
    tag: 'Retailers',
  },
  {
    href: '/compare/shein-vs-asos',
    title: 'SHEIN vs ASOS 2026',
    description: 'Budget fashion showdown: quality, ethics, sizing, and lasting style.',
    tag: 'Budget',
  },
  {
    href: '/compare/zara-vs-hm',
    title: 'Zara vs H&M 2026',
    description: 'Two fast-fashion giants compared on quality, trend timing, and value.',
    tag: 'Fast Fashion',
  },
];

export default function ComparePage() {
  return (
    <main className="pt-16 pb-20">
      <div className="text-center mb-16">
        <p className="text-[11px] tracking-editorial uppercase text-editorial-muted font-body font-medium mb-4">INDEPENDENT REVIEWS</p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-editorial-text mb-4">
          Fashion Comparisons
        </h1>
        <p className="font-display text-lg italic text-editorial-muted max-w-xl mx-auto">
          Honest, independent comparisons of the brands and retailers you actually care about.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        {comparisons.map(c => (
          <Link
            key={c.href}
            href={c.href}
            className="group block border-b border-editorial-border pb-6 hover:opacity-80 transition-opacity"
          >
            <span className="text-[10px] tracking-editorial uppercase text-editorial-muted font-body font-medium">{c.tag}</span>
            <h2 className="font-display text-xl text-editorial-text mt-2 mb-2 group-hover:text-editorial-accent transition-colors">
              {c.title}
            </h2>
            <p className="text-sm text-editorial-muted font-body leading-relaxed">{c.description}</p>
            <span className="inline-block mt-3 text-[11px] tracking-editorial uppercase text-editorial-text font-body font-medium">
              Read comparison &rarr;
            </span>
          </Link>
        ))}
      </div>

      <div className="max-w-2xl mx-auto mt-16 pt-8 border-t border-editorial-border">
        <h2 className="font-display text-xl text-editorial-text mb-3">How We Compare</h2>
        <p className="text-sm text-editorial-muted font-body leading-relaxed">
          Every comparison on StyleMeDaily is independently researched. We evaluate retailers on quality, sizing, price transparency, return policies, and actual customer experience. Some links are affiliate links.
        </p>
      </div>
    </main>
  );
}
