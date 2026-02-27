import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-noir-950 mt-20">
      {/* Gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <span className="font-display text-xl font-light text-white tracking-editorial">
              STYLE<span className="text-gold-400">ME</span>DAILY
            </span>
            <p className="text-sm text-noir-500 leading-relaxed mt-4">Expert styling guides and curated fashion advice for the modern woman.</p>
            <a href="mailto:contact@stylemedaily.org" className="inline-block mt-3 text-xs text-noir-500 hover:text-gold-400 transition-colors tracking-wide">
              contact@stylemedaily.org
            </a>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4">
              <a href="https://www.pinterest.com/stylemedaily/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-noir-500 hover:text-gold-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
              <a href="https://twitter.com/stylemedaily" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="text-noir-500 hover:text-gold-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-medium text-gold-400 tracking-ultra-wide uppercase mb-4">Explore</h4>
            <div className="space-y-2.5">
              <Link href="/shop" className="block text-sm text-noir-400 hover:text-white transition-colors">Shop All Items</Link>
              <Link href="/guides" className="block text-sm text-noir-400 hover:text-white transition-colors">Style Guides</Link>
              <Link href="/blog" className="block text-sm text-noir-400 hover:text-white transition-colors">Blog</Link>
              <Link href="/style-quiz" className="block text-sm text-noir-400 hover:text-white transition-colors">Style Quiz</Link>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-medium text-gold-400 tracking-ultra-wide uppercase mb-4">Popular</h4>
            <div className="space-y-2.5">
              <Link href="/guides/capsule-wardrobe-working-women-2026" className="block text-sm text-noir-400 hover:text-white transition-colors">Capsule Wardrobe</Link>
              <Link href="/guides/dress-for-body-shape-guide" className="block text-sm text-noir-400 hover:text-white transition-colors">Body Shape Guide</Link>
              <Link href="/compare/nordstrom-vs-asos" className="block text-sm text-noir-400 hover:text-white transition-colors">Nordstrom vs ASOS</Link>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-medium text-gold-400 tracking-ultra-wide uppercase mb-4">Company</h4>
            <div className="space-y-2.5">
              <Link href="/about" className="block text-sm text-noir-400 hover:text-white transition-colors">About</Link>
              <Link href="/methodology" className="block text-sm text-noir-400 hover:text-white transition-colors">Methodology</Link>
              <Link href="/contact" className="block text-sm text-noir-400 hover:text-white transition-colors">Contact</Link>
              <Link href="/privacy" className="block text-sm text-noir-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block text-sm text-noir-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/affiliate-disclosure" className="block text-sm text-noir-400 hover:text-white transition-colors">Affiliate Disclosure</Link>
              <Link href="/disclaimer" className="block text-sm text-noir-400 hover:text-white transition-colors">Disclaimer</Link>
              <Link href="/dmca" className="block text-sm text-noir-400 hover:text-white transition-colors">DMCA Policy</Link>
              <Link href="/cookie-policy" className="block text-sm text-noir-400 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-10 p-5 bg-noir-900 border border-noir-800">
          <p className="text-[11px] text-noir-500 leading-relaxed">
            <span className="text-gold-400/80 font-medium tracking-wide uppercase text-[10px]">Affiliate Disclosure</span> &mdash; StyleMeDaily is a participant in the Amazon Services LLC Associates Program and other affiliate programs. Some links on this site are affiliate links, meaning we may earn a small commission at no extra cost to you when you make a purchase through our links.
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-noir-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-noir-600 tracking-wide">&copy; {new Date().getFullYear()} StyleMeDaily. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/privacy" className="text-[11px] text-noir-500 hover:text-gold-400 transition-colors tracking-wide uppercase">Privacy</Link>
            <Link href="/terms" className="text-[11px] text-noir-500 hover:text-gold-400 transition-colors tracking-wide uppercase">Terms</Link>
            <Link href="/affiliate-disclosure" className="text-[11px] text-noir-500 hover:text-gold-400 transition-colors tracking-wide uppercase">Affiliate</Link>
            <Link href="/disclaimer" className="text-[11px] text-noir-500 hover:text-gold-400 transition-colors tracking-wide uppercase">Disclaimer</Link>
            <Link href="/dmca" className="text-[11px] text-noir-500 hover:text-gold-400 transition-colors tracking-wide uppercase">DMCA</Link>
            <Link href="/cookie-policy" className="text-[11px] text-noir-500 hover:text-gold-400 transition-colors tracking-wide uppercase">Cookies</Link>
            <Link href="/about" className="text-[11px] text-noir-500 hover:text-gold-400 transition-colors tracking-wide uppercase">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
