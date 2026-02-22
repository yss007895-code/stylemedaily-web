'use client';
import { useState, useMemo } from 'react';
import SafeImage from '@/components/SafeImage';
import type { AffiliateProduct } from '@/lib/guides-data';

type ProductWithSource = AffiliateProduct & { fromGuide: string; fromGuideSlug: string };

interface ShopPageClientProps {
  products: ProductWithSource[];
  categories: { slug: string; name: string }[];
}

const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under $25', min: 0, max: 25 },
  { label: '$25 – $50', min: 25, max: 50 },
  { label: '$50+', min: 50, max: Infinity },
];

export default function ShopPageClient({ products, categories }: ShopPageClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePriceRange, setActivePriceRange] = useState(0);

  const filtered = useMemo(() => {
    const range = priceRanges[activePriceRange];
    return products.filter(p => {
      const price = parseFloat(p.price.replace('$', ''));
      const priceMatch = price >= range.min && price < range.max;
      if (activeCategory === 'all') return priceMatch;
      const catMap: Record<string, string[]> = {
        workwear: ['work', 'professional', 'office', 'interview', 'laptop', 'blazer'],
        casual: ['casual', 'jeans', 'sneakers', 'minimalist', 'running'],
        'date-night': ['date', 'night'],
        seasonal: ['spring', 'summer', 'trending', 'must-have', 'accessories'],
        budget: ['affordable', 'budget', 'under-30', 'under-100', 'amazon-fashion'],
      };
      const keywords = catMap[activeCategory] || [];
      const slug = p.fromGuideSlug || '';
      const categoryMatch = keywords.some(k => slug.includes(k));
      return priceMatch && categoryMatch;
    });
  }, [products, activeCategory, activePriceRange]);

  return (
    <div>
      {/* Filters — minimal horizontal rule style */}
      <div className="flex flex-col sm:flex-row gap-0 mb-16 border-b border-noir-100 pb-8">
        <div className="flex gap-0 overflow-x-auto flex-1">
          {categories.map(cat => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-5 py-2 text-[10px] font-medium tracking-[0.18em] uppercase whitespace-nowrap transition-colors ${
                activeCategory === cat.slug
                  ? 'text-noir-900 border-b-2 border-noir-900 -mb-px'
                  : 'text-noir-300 hover:text-noir-600'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="flex gap-0 items-center sm:border-l sm:border-noir-100 sm:pl-8">
          {priceRanges.map((range, i) => (
            <button
              key={range.label}
              onClick={() => setActivePriceRange(i)}
              className={`px-4 py-2 text-[10px] tracking-[0.14em] uppercase font-medium transition-colors ${
                activePriceRange === i
                  ? 'text-noir-900'
                  : 'text-noir-300 hover:text-noir-600'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results count — ultra-small */}
      <p className="text-[9px] tracking-[0.22em] uppercase text-noir-300 mb-12">
        {filtered.length} pieces
      </p>

      {/* Product Grid — 2 col mobile, 3 col desktop, massive whitespace */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {filtered.map((p, i) => (
          <a
            key={`${p.name}-${i}`}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="group block"
          >
            {/* Image container — tall 3:4 ratio, no border radius */}
            <div className="relative overflow-hidden bg-noir-50 mb-6" style={{ aspectRatio: '3/4' }}>
              {p.image ? (
                <>
                  <SafeImage
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Hover overlay — reveals price + CTA */}
                  <div className="absolute inset-0 bg-noir-950/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-[10px] tracking-[0.22em] uppercase font-medium mb-3">
                      View Item
                    </span>
                    <span className="text-white font-display italic text-xl">
                      {p.price}
                    </span>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-noir-300">No image</span>
                </div>
              )}
            </div>

            {/* Text — minimal, no price shown by default */}
            <div className="space-y-1.5">
              <p className="text-[9px] tracking-[0.22em] uppercase text-noir-300 font-medium">
                {p.brand}
              </p>
              <h4 className="font-display font-normal italic text-sm text-noir-800 leading-snug group-hover:text-noir-500 transition-colors">
                {p.name}
              </h4>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-32">
          <p className="text-[10px] tracking-[0.22em] uppercase text-noir-300">No items match your filters.</p>
          <button
            onClick={() => { setActiveCategory('all'); setActivePriceRange(0); }}
            className="mt-6 text-[10px] tracking-[0.18em] uppercase text-noir-400 hover:text-noir-900 font-medium transition-colors border-b border-current pb-0.5"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
