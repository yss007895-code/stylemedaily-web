import SafeImage from '@/components/SafeImage';
import type { AffiliateProduct } from '@/lib/guides-data';

interface ProductCardProps {
  product: AffiliateProduct & { fromGuide?: string; fromGuideSlug?: string };
  size?: 'sm' | 'md' | 'lg';
  showFrom?: boolean;
}

export default function ProductCard({ product, size = 'md', showFrom = false }: ProductCardProps) {
  const p = product;
  const imageHeight = size === 'sm' ? 'h-48' : size === 'lg' ? 'h-80' : 'h-64';

  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className="group block text-center"
    >
      {p.image ? (
        <div className={`relative ${imageHeight} overflow-hidden bg-editorial-light`}>
          <SafeImage
            src={p.image}
            alt={p.name}
            fill
            sizes={size === 'lg' ? '(max-width: 640px) 100vw, 33vw' : '(max-width: 640px) 50vw, 33vw'}
            className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      ) : (
        <div className={`${imageHeight} bg-editorial-light flex items-center justify-center`}>
          <span className="text-editorial-muted text-sm font-body">No image</span>
        </div>
      )}
      <div className="pt-4">
        <p className="text-[10px] text-editorial-muted tracking-editorial uppercase font-body">{p.brand}</p>
        <h4 className="font-display text-base font-normal text-editorial-text group-hover:text-editorial-accent transition-colors leading-tight mt-1 line-clamp-2">
          {p.name}
        </h4>
        <span className="text-sm font-body text-editorial-text mt-1.5 block">{p.price}</span>
        {showFrom && p.fromGuide && (
          <p className="text-[10px] text-editorial-muted mt-2 font-body italic">
            From: {p.fromGuide}
          </p>
        )}
      </div>
    </a>
  );
}
