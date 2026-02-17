import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Fashion Tips, Trends & Style News',
  description: 'The latest fashion tips, trend reports, and style advice for modern women.',
};

const posts = [
  { slug: 'nordstrom-vs-asos', title: 'Nordstrom vs ASOS: Best Online Shopping for Women in 2026', excerpt: 'We compared both retailers across 9 categories. Find out which deserves your budget.', date: 'Feb 17, 2026', time: '11 min', cat: 'Comparison', link: '/compare/nordstrom-vs-asos' },
  { slug: 'spring-trends', title: 'Spring 2026 Fashion Trends: What\'s In & What\'s Out', excerpt: 'From butter yellow to sheer layers — trends you\'ll actually want to wear.', date: 'Feb 15, 2026', time: '9 min', cat: 'Trends', link: '/guides/spring-fashion-trends-2026' },
  { slug: 'capsule', title: 'The Ultimate Capsule Wardrobe Guide for Working Women', excerpt: '30 pieces, 100+ outfits. The minimalist approach that saves time and money.', date: 'Feb 12, 2026', time: '14 min', cat: 'Guide', link: '/guides/capsule-wardrobe-working-women-2026' },
  { slug: 'jeans', title: 'The 10 Best Jeans for Women in 2026 (Tested)', excerpt: 'We tried 40+ pairs. These 10 actually deliver on fit, comfort, and style.', date: 'Feb 8, 2026', time: '15 min', cat: 'Review', link: '/guides/best-jeans-for-women-2026' },
  { slug: 'body-shape', title: 'Dressing for Your Body Shape: Complete Visual Guide', excerpt: 'Find your body type and discover silhouettes that flatter you most.', date: 'Coming Soon', time: '16 min', cat: 'Guide', link: '#' },
];

export default function BlogPage() {
  return (
    <div className="pt-8 max-w-3xl mx-auto">
      <div className="mb-10">
        <h1 className="section-title">Blog</h1>
        <p className="text-gray-500 mt-1">Fashion tips, trend reports, and style advice</p>
      </div>
      <div className="space-y-4">
        {posts.map(p => (
          <Link key={p.slug} href={p.link} className="card-hover p-6 block group">
            <div className="flex items-center gap-3 mb-2">
              <span className="badge-category">{p.cat}</span>
              <span className="text-xs text-gray-400">{p.date}</span>
              <span className="text-xs text-gray-400">· {p.time}</span>
            </div>
            <h2 className="font-display text-lg font-bold text-gray-900 group-hover:text-blush-600 transition-colors mb-2">{p.title}</h2>
            <p className="text-sm text-gray-400">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
