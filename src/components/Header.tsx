'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { href: '/shop', label: 'Shop' },
    { href: '/guides', label: 'Style Guides' },
    { href: '/blog', label: 'Blog' },
    { href: '/compare', label: 'Compare' },
    { href: '/style-quiz', label: 'Style Quiz' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === '';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-noir-950 border-b border-gold-400/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display text-2xl font-light text-white tracking-editorial">
              STYLE<span className="text-gold-400">ME</span>DAILY
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-0">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`px-4 py-5 text-[11px] font-medium tracking-wider uppercase transition-all border-b-2 ${
                  isActive(l.href)
                    ? 'text-gold-400 border-gold-400'
                    : 'text-noir-400 hover:text-white border-transparent hover:border-gold-400/50'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/style-quiz" className="hidden sm:block text-[10px] font-medium tracking-wider uppercase text-noir-950 bg-gold-400 px-5 py-2 hover:bg-gold-300 transition-colors">
              Style Quiz
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-noir-400 hover:text-white p-2"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden pb-4 pt-2 animate-fade-in border-t border-noir-800">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`block px-4 py-3 text-xs tracking-wider uppercase ${
                  isActive(l.href)
                    ? 'text-gold-400 font-medium'
                    : 'text-noir-400 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/style-quiz" className="block mx-4 mt-3 text-center text-[10px] font-medium tracking-wider uppercase text-noir-950 bg-gold-400 px-5 py-2.5 hover:bg-gold-300 transition-colors">
              Style Quiz
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
