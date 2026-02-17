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
  };

  return (
    <Link href={`/guides/${guide.slug}`} className="card-hover p-5 block group">
      <div className="text-3xl mb-3">{guide.emoji}</div>
      <div className="flex items-center gap-2 mb-2">
        <span className={`badge border ${tagColors[guide.tag] || 'bg-gray-50 text-gray-500 border-gray-100'}`}>{guide.tag}</span>
        <span className="text-xs text-gray-400">{guide.readTime}</span>
      </div>
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
    </Link>
  );
}
