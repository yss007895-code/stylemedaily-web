import type { AffiliateProduct } from '@/lib/guides-data';

export default function ShopTheLook({ products }: { products: AffiliateProduct[] }) {
  return (
    <div className="card p-6 bg-gradient-to-r from-blush-50/50 to-purple-50/30 border-blush-200/40">
      <h3 className="font-display font-bold text-gray-900 mb-1 flex items-center gap-2">
        <span>🛍️</span> Shop the Look
      </h3>
      <p className="text-xs text-gray-400 mb-4">Tap any item to shop. We may earn a small commission.</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {products.map((p, i) => (
          <a key={i} href={p.url} target="_blank" rel="noopener noreferrer nofollow"
            className="bg-white rounded-xl overflow-hidden border border-blush-100/60 hover:border-blush-300 hover:shadow-md hover:shadow-blush-100/40 transition-all group">
            {p.image ? (
              <div className="relative h-32 overflow-hidden bg-gray-50">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {p.tag && (
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
              <div className="text-[10px] text-gray-400">{p.brand}</div>
              <div className="font-mono font-bold text-sm text-blush-600 mt-1">{p.price}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
