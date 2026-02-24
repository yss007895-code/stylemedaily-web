'use client';
import { useState, useMemo } from 'react';
import type { AffiliateProduct } from '@/lib/guides-data';

type ProductWithSource = AffiliateProduct & { fromGuide: string; fromGuideSlug: string; category?: string };

interface ShopPageClientProps {
  products: ProductWithSource[];
  categories: { slug: string; name: string }[];
}

export default function ShopPageClient({ products, categories }: ShopPageClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const fallbackImage = '/images/guides/editors-choice-fashion-trends-2026.svg';

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (activeCategory === 'all') return true;
      return p.category === activeCategory;
    });
  }, [products, activeCategory]);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters - Revolve Style */}
      <div className="w-full md:w-64 flex-shrink-0">
        <h3 className="font-bold text-lg mb-4 uppercase tracking-wider border-b border-gray-200 pb-3">Categories</h3>
        <ul className="space-y-3">
          {categories.map(cat => (
            <li key={cat.slug}>
              <button
                onClick={() => setActiveCategory(cat.slug)}
                className={`text-sm uppercase tracking-wide hover:text-black transition-colors ${
                  activeCategory === cat.slug ? 'text-black font-bold' : 'text-gray-500'
                }`}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid - Princess Polly / Revolve Style */}
      <div className="flex-1">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
          {filtered.map((p, i) => (
            <div key={`${p.name}-${i}`} className="group relative">
              <a href={p.url} target="_blank" rel="noopener noreferrer nofollow sponsored" className="block">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                  <img
                    src={p.image || fallbackImage}
                    alt={p.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.currentTarget.src = fallbackImage; }}
                  />
                  {/* Quick Shop Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <button className="w-full bg-white/90 backdrop-blur text-black font-semibold uppercase tracking-wider py-3 text-xs border border-gray-200 shadow-sm hover:bg-black hover:text-white transition-colors">
                      Shop on Amazon
                    </button>
                  </div>
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-widest">{p.brand}</p>
                  <h4 className="text-sm text-gray-700 line-clamp-1 group-hover:text-black transition-colors">
                    {p.name}
                  </h4>
                  <p className="text-sm font-medium text-gray-900">{p.price}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-500 uppercase tracking-widest text-sm">
            No items available in this category.
          </div>
        )}
      </div>
    </div>
  );
}
