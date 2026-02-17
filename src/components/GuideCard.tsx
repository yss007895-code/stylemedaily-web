import Image from 'next/image';
import Link from 'next/link';
import type { StyleGuide } from '@/lib/guides-data';

export default function GuideCard({ guide }: { guide: StyleGuide }) {
  const tagColors: Record<string, string> = {
    'Pillar Guide': 'bg-purple-50 text-purple-600 border-purple-100',
    'Trending': 'bg-amber-50 text-amber-600 border-amber-100',
    'Popular': 'bg-blush-50 text-blush-600 border-blush-100',
    'Evergreen': 'bg-teal-50 text-teal-600 border-teal-100',
    'New': 'bg-emerald-50 text-emerald-600 border-emerald-100',
    'Comparison': 'bg-blue-50 text-blue-600 border-blue-100',
    'Seasonal': 'bg-orange-50 text-orange-600 border-orange-100',
    'Product Review': 'bg-indigo-50 text-indigo-600 border-indigo-100',
    'Hot': 'bg-red-50 text-red-600 border-red-100',
    'Budget': 'bg-green-50 text-green-600 border-green-100',
    'Guide': 'bg-sky-50 text-sky-600 border-sky-100',
    'Comprehensive': 'bg-violet-50 text-violet-600 border-violet-100',
    'Essential': 'bg-rose-50 text-rose-600 border-rose-100',
  };

  return (
    <Link href={`/guides/${guide.slug}`} className="card-hover block group overflow-hidden rounded-xl">
      {guide.image ? (
        <div className="relative h-44 overflow-hidden">
          <Image
            src={guide.image}
            alt={guide.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className={`badge border ${tagColors[guide.tag] || 'bg-gray-50 text-gray-500 border-gray-100'} backdrop-blur-sm bg-opacity-90`}>
              {guide.tag}
            </span>
          </div>
          <div className="absolute top-3 right-3 text-xs text-white bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
            {guide.readTime}
          </div>
        </div>
      ) : (
        <div className="p-5 pb-0">
          <div className="text-3xl mb-3">{guide.emoji}</div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`badge border ${tagColors[guide.tag] || 'bg-gray-50 text-gray-500 border-gray-100'}`}>{guide.tag}</span>
            <span className="text-xs text-gray-400">{guide.readTime}</span>
          </div>
        </div>
      )}
      <div className="p-5">
        <h3 className="font-display font-bold text-gray-900 group-hover:text-blush-600 transition-colors mb-2 leading-snug">
          {guide.title}
        </h3>
        <p className="text-sm text-gray-400 line-clamp-2 mb-3">{guide.description}</p>
        {guide.affiliateProducts && guide.affiliateProducts.length > 0 && (
          <div className="flex items-center gap-1 text-xs text-blush-500 font-medium">
            <span>🛍️</span>
            <span>{guide.affiliateProducts.length} shoppable items</span>
          </div>
        )}
      </div>
    </Link>
  );
}
