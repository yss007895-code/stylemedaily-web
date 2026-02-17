'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '/guides', label: 'Style Guides' },
    { href: '/compare/nordstrom-vs-asos', label: 'Compare' },
    { href: '/blog', label: 'Blog' },
    { href: '/style-quiz', label: 'Style Quiz', badge: 'Free' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blush-100/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blush-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blush-200/50 group-hover:shadow-blush-300/60 transition-shadow">
              <span className="text-white font-display font-bold text-lg italic">S</span>
            </div>
            <div>
              <span className="font-display font-bold text-lg text-gray-900">Style<span className="text-blush-500">Me</span>Daily</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-blush-600 rounded-lg hover:bg-blush-50 transition-all">
                {l.label}
                {l.badge && <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">{l.badge}</span>}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/style-quiz" className="hidden sm:block btn-primary text-sm !px-4 !py-2">Take Style Quiz</Link>
            <button onClick={() => setOpen(!open)} className="md:hidden text-gray-400 hover:text-blush-500 p-2 text-xl">{open ? '✕' : '☰'}</button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden pb-4 pt-2 animate-fade-in">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-gray-600 hover:text-blush-600 hover:bg-blush-50 rounded-lg">
                {l.label}
              </Link>
            ))}
            <Link href="/style-quiz" className="block mx-4 mt-3 btn-primary text-sm text-center">Take Style Quiz</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
