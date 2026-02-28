import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-editorial-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
        {/* Affiliate Disclosure — subtle */}
        <p className="text-[11px] text-editorial-muted leading-relaxed mb-8 max-w-2xl">
          <span className="tracking-editorial uppercase text-[10px]">Disclosure</span> — StyleMeDaily participates in the Amazon Associates Program. Some links are affiliate links; purchases through them may earn a small commission at no extra cost to you.
        </p>

        {/* Minimal footer line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-editorial-border">
          <p className="text-[11px] text-editorial-muted tracking-wide-editorial font-display">
            STYLE ME DAILY &copy; {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-[11px] text-editorial-muted hover:text-editorial-text transition-colors tracking-editorial uppercase font-body">Instagram</a>
            <a href="https://www.pinterest.com/stylemedaily/" target="_blank" rel="noopener noreferrer" className="text-[11px] text-editorial-muted hover:text-editorial-text transition-colors tracking-editorial uppercase font-body">Pinterest</a>
            <a href="https://twitter.com/stylemedaily" target="_blank" rel="noopener noreferrer" className="text-[11px] text-editorial-muted hover:text-editorial-text transition-colors tracking-editorial uppercase font-body">Twitter</a>
          </div>
        </div>

        {/* Legal links */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <Link href="/privacy" className="text-[10px] text-editorial-muted hover:text-editorial-text transition-colors tracking-editorial uppercase">Privacy</Link>
          <Link href="/terms" className="text-[10px] text-editorial-muted hover:text-editorial-text transition-colors tracking-editorial uppercase">Terms</Link>
          <Link href="/disclaimer" className="text-[10px] text-editorial-muted hover:text-editorial-text transition-colors tracking-editorial uppercase">Disclaimer</Link>
          <Link href="/contact" className="text-[10px] text-editorial-muted hover:text-editorial-text transition-colors tracking-editorial uppercase">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
