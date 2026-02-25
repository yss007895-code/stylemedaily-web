import Link from 'next/link';

export default function AffiliateDisclosureBanner() {
  return (
    <div className="mb-6 p-4 border border-noir-800 bg-noir-900/50 text-[11px] text-noir-400 leading-relaxed">
      <span className="font-medium text-gold-400/80 uppercase tracking-wide text-[10px]">Affiliate Disclosure</span>{' '}
      &mdash; Some links in this article are affiliate links. We may earn a small commission if you make a purchase through these links, at no additional cost to you. Prices may vary &mdash; always check the official site.{' '}
      <Link href="/affiliate-disclosure" className="text-gold-400 hover:underline">Learn more</Link>.
    </div>
  );
}
