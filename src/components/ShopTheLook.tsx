import Image from 'next/image';
import type { AffiliateProduct } from '@/lib/guides-data';

export default function ShopTheLook({ products }: { products: AffiliateProduct[] }) {
  return (
    <div className="card p-6 bg-gradient-to-r from-blush-50/50 to-purple-50/30 border-blush-200/40">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-display font-bold text-gray-900 flex items-center gap-2">
          <span>🛍️</span> Shop the Look
        </h3>
        <span className="text-[10px] font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100 animate-pulse">
          🔥 Today&apos;s Deals
        </span>
      </div>
      <p className="text-xs text-gray-400 mb-4">Tap any item to shop. Prices may change — we may earn a small commission.</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {products.map((p, i) => (
          <a key={i} href={p.url} target="_blank" rel="noopener noreferrer nofollow"
            className="bg-white rounded-xl overflow-hidden border border-blush-100/60 hover:border-blush-300 hover:shadow-lg hover:shadow-blush-100/40 transition-all group relative">
            {i === 0 && (
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[9px] font-bold text-center py-0.5 z-10">
                ⭐ #1 BEST SELLER
              </div>
            )}
            {p.image ? (
              <div className="relative h-32 overflow-hidden bg-gray-50">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {p.tag && i !== 0 && (
                  <span className="absolute top-2 left-2 badge-new text-[9px]">{p.tag}</span>
                )}
              </div>
            ) : (
              <div className="p-3 pb-0 text-center">
                {p.tag && (
                  <span className="badge-new text-[9px] mb-2 inline-block">{p.tag}</span>
                )}
                <div className="text-2xl mb-2">👚</div>
              </div>
            )}
            <div className="p-3 text-center">
              <div className="font-semibold text-xs text-gray-800 group-hover:text-blush-600 transition-colors mb-0.5 leading-tight">{p.name}</div>
              <div className="flex items-center justify-center gap-0.5 my-1">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className="text-[10px] text-amber-400">★</span>
                ))}
                <span className="text-[9px] text-gray-400 ml-0.5">4.5</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <span className="text-[10px] text-gray-400 line-through">{`$${(parseFloat(p.price.replace('$', '')) * 1.4).toFixed(0)}`}</span>
                <span className="font-mono font-bold text-sm text-red-600">{p.price}</span>
              </div>
              <div className="mt-1.5 bg-blush-500 hover:bg-blush-600 text-white text-[10px] font-bold py-1 px-2 rounded-lg transition-colors">
                Shop Now →
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-3 text-center">
        <p className="text-[10px] text-gray-400">💡 Pro tip: Items sell out fast — tap to check current availability on Amazon</p>
      </div>
    </div>
  );
}
