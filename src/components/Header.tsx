'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { href: '/shop', label: 'SHOP' },
    { href: '/style-guides', label: 'STYLE GUIDES' },
    { href: '/blog', label: 'BLOG' },
    { href: '/compare/zara-vs-hm', label: 'COMPARE' },
    { href: '/style-quiz', label: 'STYLE QUIZ' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === '';
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-editorial-text">
              <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6L8 0Z" fill="currentColor" />
            </svg>
            <span className="font-display text-lg tracking-wide-editorial text-editorial-text uppercase font-light">
              Style Me Daily
            </span>
          </Link>

          {/* Center: Nav links */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`text-[11px] tracking-editorial uppercase font-body font-medium transition-colors ${
                  isActive(l.href)
                    ? 'text-editorial-text'
                    : 'text-editorial-muted hover:text-editorial-text'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right: Search, Cart, Login */}
          <div className="hidden lg:flex items-center gap-5">
            <button aria-label="Search" className="text-editorial-muted hover:text-editorial-text transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
            <button aria-label="Cart" className="text-editorial-muted hover:text-editorial-text transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </button>
            <Link
              href="/about"
              className="text-[11px] tracking-editorial uppercase font-body font-medium text-editorial-muted hover:text-editorial-text transition-colors"
            >
              LOG IN
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-editorial-muted hover:text-editorial-text p-2"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Gold separator line */}
      <div className="h-px bg-editorial-accent" />

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-[#FAFAF8] border-b border-editorial-border animate-fade-in">
          <div className="max-w-6xl mx-auto px-6 py-4">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`block py-3 text-[11px] tracking-editorial uppercase font-body ${
                  isActive(l.href)
                    ? 'text-editorial-text font-medium'
                    : 'text-editorial-muted hover:text-editorial-text'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="block py-3 text-[11px] tracking-editorial uppercase font-body text-editorial-muted hover:text-editorial-text"
            >
              LOG IN
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
