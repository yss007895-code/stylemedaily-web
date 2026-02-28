'use client';
import { useState } from 'react';
import SafeImage from '@/components/SafeImage';
import { shopCategories, getProductsByCategory } from '@/lib/guides-data';
import type { AffiliateProduct } from '@/lib/guides-data';

const categoryProducts: Record<string, (AffiliateProduct & { fromGuide: string; fromGuideSlug: string })[]> = {};
for (const cat of shopCategories) {
  categoryProducts[cat.slug] = getProductsByCategory(cat.slug, 4);
}

export default function ShopByCategory() {
  const [active, setActive] = useState('all');
  const products = categoryProducts[active] || [];

  return (
    <section className="mb-24">
      <div className="mb-8">
        <h2 className="font-display text-3xl sm:text-4xl font-light text-editorial-text">By Category</h2>
      </div>

      <div className="flex gap-6 mb-8 overflow-x-auto">
        {shopCategories.map(cat => (
          <button
            key={cat.slug}
            onClick={() => setActive(cat.slug)}
            className={`text-[11px] tracking-editorial uppercase font-body font-medium whitespace-nowrap pb-2 transition-colors border-b ${
              active === cat.slug
                ? 'text-editorial-text border-editorial-accent'
                : 'text-editorial-muted hover:text-editorial-text border-transparent'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p, i) => (
          <a
            key={`${p.name}-${i}`}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="group block"
          >
            {p.image ? (
              <div className="relative h-44 overflow-hidden bg-editorial-light">
                <SafeImage
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            ) : (
              <div className="h-44 bg-editorial-light flex items-center justify-center">
                <span className="text-editorial-muted text-sm">No image</span>
              </div>
            )}
            <div className="pt-3">
              <p className="text-[10px] text-editorial-muted tracking-editorial uppercase">{p.brand}</p>
              <h4 className="font-display text-base font-normal text-editorial-text group-hover:text-editorial-accent transition-colors leading-tight mt-1 line-clamp-2">
                {p.name}
              </h4>
              <span className="text-sm text-editorial-text mt-1.5 block">{p.price}</span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8">
        <a href="/shop" className="text-[11px] tracking-editorial uppercase text-editorial-muted hover:text-editorial-text font-body font-medium transition-colors border-b border-editorial-border pb-1">
          View all items
        </a>
      </div>
    </section>
  );
}
