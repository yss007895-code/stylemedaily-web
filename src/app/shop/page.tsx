import type { Metadata } from 'next';
import { getAllProducts, shopCategories } from '@/lib/guides-data';
import ShopPageClient from './ShopPageClient';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'The Edit — Curated Fashion Picks | StyleMeDaily',
  description: 'A curated selection of considered fashion pieces, drawn from our style guides. Filter by category and price to find yours.',
  keywords: ['curated fashion', 'editorial picks', 'affordable women fashion', 'style guide picks 2026'],
  alternates: { canonical: `${SITE_URL}/shop` },
  openGraph: {
    title: 'The Edit — Curated Fashion Picks | StyleMeDaily',
    description: 'A curated selection of considered fashion pieces, drawn from our style guides.',
    url: `${SITE_URL}/shop`,
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: '/images/guides/hero-women-fashion.webp', width: 1200, height: 630, alt: 'StyleMeDaily Curated Fashion Picks' }],
  },
  twitter: { card: 'summary_large_image', site: '@stylemedaily' },
};

export default function ShopPage() {
  const allProducts = getAllProducts();

  return (
    <div className="pt-16 pb-32 max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-20">
      {/* Editorial masthead */}
      <div className="mb-20 border-b border-noir-100 pb-12">
        <p className="text-[9px] tracking-[0.28em] uppercase text-noir-300 font-medium mb-6">
          SS 2026 &nbsp;/&nbsp; {allProducts.length} Pieces
        </p>
        <h1 className="font-display font-light italic text-5xl sm:text-6xl text-noir-900 tracking-tight leading-none">
          The Edit
        </h1>
      </div>

      <ShopPageClient products={allProducts} categories={shopCategories} />
    </div>
  );
}
