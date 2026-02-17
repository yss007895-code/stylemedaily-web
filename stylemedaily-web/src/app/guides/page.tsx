'use client';
import { useState } from 'react';
import { guides, categories } from '@/lib/guides-data';
import GuideCard from '@/components/GuideCard';

export default function GuidesPage() {
  const [cat, setCat] = useState('all');
  const [search, setSearch] = useState('');
  const filtered = guides
    .filter(g => cat === 'all' || g.category === cat)
    .filter(g => !search || g.title.toLowerCase().includes(search.toLowerCase()) || g.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="pt-8">
      <div className="mb-8">
        <h1 className="section-title">Style Guides</h1>
        <p className="text-gray-500 mt-1">200+ curated guides for every woman, every occasion</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input type="text" placeholder="Search guides..." value={search} onChange={e => setSearch(e.target.value)}
          className="flex-1 bg-white border border-blush-200/60 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-100" />
      </div>
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {categories.map(c => (
          <button key={c.slug} onClick={() => setCat(c.slug)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              cat === c.slug ? 'bg-gradient-to-r from-blush-500 to-purple-500 text-white shadow-md shadow-blush-200' : 'bg-white border border-blush-100/60 text-gray-500 hover:text-blush-600 hover:border-blush-200'
            }`}>
            {c.icon} {c.name}
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-400 mb-4 font-mono">{filtered.length} guide{filtered.length !== 1 ? 's' : ''} found</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(g => <GuideCard key={g.slug} guide={g} />)}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <div className="text-4xl mb-4">👗</div>
          <p className="text-gray-400">No guides found. Try a different search or category.</p>
        </div>
      )}
    </div>
  );
}
