'use client';
import { useState, useMemo } from 'react';
import type { AffiliateProduct } from '@/lib/guides-data';

type ProductWithSource = AffiliateProduct & { fromGuide: string; fromGuideSlug: string; category?: string };

interface ShopPageClientProps {
  products: ProductWithSource[];
  categories: { slug: string; name: string }[];
}

function isPlaceholderImage(url?: string): boolean {
  if (!url) return true;
  if (url.includes('placehold.co')) return true;
  return false;
}

export default function ShopPageClient({ products, categories }: ShopPageClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (activeCategory === 'all') return true;
      return p.category === activeCategory;
    });
  }, [products, activeCategory]);

  const handleImageError = (index: number) => {
    setFailedImages(prev => new Set(prev).add(index));
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters */}
      <div className="w-full md:w-56 flex-shrink-0">
        <h3 className="text-[11px] tracking-editorial uppercase font-body font-medium text-editorial-text mb-4 pb-3 border-b border-editorial-border">Categories</h3>
        <ul className="space-y-3">
          {categories.map(cat => (
            <li key={cat.slug}>
              <button
                onClick={() => setActiveCategory(cat.slug)}
                className={`text-[12px] tracking-wide-editorial uppercase font-body hover:text-editorial-text transition-colors ${
                  activeCategory === cat.slug ? 'text-editorial-text font-medium' : 'text-editorial-muted'
                }`}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid */}
      <div className="flex-1">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
          {filtered.map((p, i) => {
            const hasValidImage = !isPlaceholderImage(p.image) && !failedImages.has(i);

            return (
              <div key={`${p.name}-${i}`} className="group relative">
                <a href={p.url} target="_blank" rel="noopener noreferrer nofollow sponsored" className="block">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-editorial-light">
                    {hasValidImage ? (
                      <img
                        src={p.image!}
                        alt={p.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        onError={() => handleImageError(i)}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                        <span className="text-[10px] tracking-editorial uppercase text-editorial-muted font-body mb-1">{p.brand}</span>
                        <span className="font-display text-sm text-editorial-text leading-tight line-clamp-3">{p.name}</span>
                      </div>
                    )}
                    {/* Quick Shop Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      <span className="block w-full bg-editorial-text text-white font-body font-medium uppercase tracking-editorial py-2.5 text-[10px] text-center">
                        Shop on Amazon
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <p className="text-[10px] text-editorial-muted tracking-editorial uppercase font-body">{p.brand}</p>
                    <h4 className="font-display text-sm text-editorial-text line-clamp-1 group-hover:text-editorial-accent transition-colors mt-0.5">
                      {p.name}
                    </h4>
                    <p className="text-sm font-body text-editorial-text mt-1">{p.price}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16 text-editorial-muted tracking-editorial uppercase text-[11px] font-body">
            No items available in this category.
          </div>
        )}
      </div>
    </div>
  );
}
