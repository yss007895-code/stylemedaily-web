import type { Metadata } from 'next';
import { getAllProducts, shopCategories } from '@/lib/guides-data';
import ShopPageClient from './ShopPageClient';

export const metadata: Metadata = {
  title: 'Shop All Items — Curated Fashion Picks',
  description: 'Browse all curated fashion items from our style guides. Filter by category and price to find your perfect pieces.',
  keywords: ['shop fashion', 'curated fashion', 'affordable fashion', 'women clothing', 'style picks 2026'],
};

export default function ShopPage() {
  const allProducts = getAllProducts();

  return (
    <div className="pt-8 max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="font-display text-4xl sm:text-5xl font-light italic text-editorial-text">Shop All Items</h1>
        <p className="text-editorial-muted mt-2 text-sm font-body">
          {allProducts.length} curated items from our style guides
        </p>
      </div>
      <ShopPageClient products={allProducts} categories={shopCategories} />
    </div>
  );
}
