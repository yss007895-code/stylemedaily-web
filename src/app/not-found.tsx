import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-20 pb-20 text-center max-w-lg mx-auto">
      <p className="font-display text-8xl font-bold text-noir-200 mb-6">404</p>
      <h1 className="font-display text-2xl font-bold text-editorial-text mb-3">
        Page not found
      </h1>
      <p className="text-editorial-muted font-body mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/" className="btn-primary text-sm">Go Home</Link>
        <Link href="/guides" className="btn-secondary text-sm">Browse Guides</Link>
        <Link href="/shop" className="btn-secondary text-sm">Shop All Items</Link>
      </div>

      <div className="mt-14 border-t border-noir-200 pt-8">
        <h2 className="text-[11px] tracking-editorial uppercase font-body font-semibold text-editorial-text mb-5">Popular right now</h2>
        <div className="space-y-0 text-left">
          {[
            { title: 'Quiet Luxury Essentials', href: '/guides/quiet-luxury-essentials-investment-pieces-2026' },
            { title: 'Office Siren Corporate Wear', href: '/guides/office-siren-corporate-wear-guide-2026' },
            { title: 'How to Style Wide Leg Jeans', href: '/guides/how-to-style-wide-leg-jeans-like-a-pro-2026' },
            { title: 'Mob Wife Glamour Aesthetic', href: '/guides/mob-wife-glamour-aesthetic-guide-2026' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="flex items-center gap-3 py-3 text-sm font-body text-editorial-muted hover:text-editorial-text transition-colors border-b border-noir-200">
              <span className="text-editorial-accent">&rarr;</span>
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
