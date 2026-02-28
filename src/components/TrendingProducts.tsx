import { getFeaturedProducts } from '@/lib/guides-data';
import ProductCard from './ProductCard';
import Link from 'next/link';

export default function TrendingProducts() {
  const products = getFeaturedProducts(3);

  return (
    <section className="mb-24">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl font-light italic text-editorial-text">The Edit</h2>
          <p className="text-sm text-editorial-muted font-body mt-2">Handpicked luxury for the discerning taste.</p>
        </div>
        <Link
          href="/shop"
          className="text-[11px] tracking-editorial uppercase text-editorial-muted hover:text-editorial-text font-body font-medium transition-colors hidden sm:block"
        >
          VIEW ALL ARRIVALS
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <ProductCard key={`${p.name}-${i}`} product={p} size="lg" />
        ))}
      </div>
      <Link
        href="/shop"
        className="text-[11px] tracking-editorial uppercase text-editorial-muted hover:text-editorial-text font-body font-medium transition-colors mt-6 block sm:hidden"
      >
        VIEW ALL ARRIVALS
      </Link>
    </section>
  );
}
