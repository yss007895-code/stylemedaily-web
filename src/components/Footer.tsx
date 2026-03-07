import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-noir-200">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Footer grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-[11px] tracking-editorial uppercase font-body font-semibold text-editorial-text mb-4">
              Sections
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/shop" className="text-[12px] text-editorial-muted hover:text-editorial-text transition-colors font-body">Shop</Link></li>
              <li><Link href="/style-guides" className="text-[12px] text-editorial-muted hover:text-editorial-text transition-colors font-body">Style Guides</Link></li>
              <li><Link href="/blog" className="text-[12px] text-editorial-muted hover:text-editorial-text transition-colors font-body">Blog</Link></li>
              <li><Link href="/style-quiz" className="text-[12px] text-editorial-muted hover:text-editorial-text transition-colors font-body">Style Quiz</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] tracking-editorial uppercase font-body font-semibold text-editorial-text mb-4">
              Compare
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/compare/zara-vs-hm" className="text-[12px] text-editorial-muted hover:text-editorial-text transition-colors font-body">Zara vs H&M</Link></li>
              <li><Link href="/compare/nordstrom-vs-asos" className="text-[12px] text-editorial-muted hover:text-editorial-text transition-colors font-body">Nordstrom vs ASOS</Link></li>
              <li><Link href="/compare/shein-vs-asos" className="text-[12px] text-editorial-muted hover:text-editorial-text transition-colors font-body">SHEIN vs ASOS</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] tracking-editorial uppercase font-body font-semibold text-editorial-text mb-4">
              Follow
            </h4>
            <ul className="space-y-2.5">
              <li><a href="https://www.pinterest.com/stylemedaily/" target="_blank" rel="noopener noreferrer" className="text-[12px] text-editorial-muted hover:text-editorial-text transition-colors font-body">Pinterest</a></li>
              <li><a href="https://twitter.com/stylemedaily" target="_blank" rel="noopener noreferrer" className="text-[12px] text-editorial-muted hover:text-editorial-text transition-colors font-body">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] tracking-editorial uppercase font-body font-semibold text-editorial-text mb-4">
              About
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-[12px] text-editorial-muted hover:text-editorial-text transition-colors font-body">About Us</Link></li>
              <li><Link href="/contact" className="text-[12px] text-editorial-muted hover:text-editorial-text transition-colors font-body">Contact</Link></li>
              <li><Link href="/privacy" className="text-[12px] text-editorial-muted hover:text-editorial-text transition-colors font-body">Privacy</Link></li>
              <li><Link href="/terms" className="text-[12px] text-editorial-muted hover:text-editorial-text transition-colors font-body">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-noir-200 pt-6">
          <p className="text-[11px] text-editorial-muted leading-relaxed mb-4 max-w-2xl">
            <span className="tracking-editorial uppercase text-[10px] font-medium">Disclosure</span> — StyleMeDaily participates in the Amazon Associates Program. Some links are affiliate links; purchases through them may earn a small commission at no extra cost to you.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[11px] text-editorial-muted font-display tracking-wide">
              STYLE ME DAILY &copy; {new Date().getFullYear()}
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-[10px] text-editorial-muted hover:text-editorial-text transition-colors tracking-editorial uppercase">Privacy</Link>
              <Link href="/terms" className="text-[10px] text-editorial-muted hover:text-editorial-text transition-colors tracking-editorial uppercase">Terms</Link>
              <Link href="/disclaimer" className="text-[10px] text-editorial-muted hover:text-editorial-text transition-colors tracking-editorial uppercase">Disclaimer</Link>
              <Link href="/contact" className="text-[10px] text-editorial-muted hover:text-editorial-text transition-colors tracking-editorial uppercase">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
