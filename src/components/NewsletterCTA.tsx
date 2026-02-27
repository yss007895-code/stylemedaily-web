export default function NewsletterCTA() {
  return (
    <div className="relative border border-noir-200 p-10 sm:p-14 text-center bg-noir-950 overflow-hidden">
      {/* Gold accent corners */}
      <div className="absolute top-0 left-0 w-16 h-px bg-gold-400" />
      <div className="absolute top-0 left-0 w-px h-16 bg-gold-400" />
      <div className="absolute bottom-0 right-0 w-16 h-px bg-gold-400" />
      <div className="absolute bottom-0 right-0 w-px h-16 bg-gold-400" />

      <div className="relative">
        <p className="text-[10px] font-medium text-gold-400 tracking-ultra-wide uppercase mb-3">Every Thursday</p>
        <h3 className="font-display text-3xl font-light text-white mb-3 tracking-wide">The Weekly Style Edit</h3>
        <p className="text-noir-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
          Outfit ideas, trend analysis, and curated picks -- delivered straight to your inbox.
        </p>
        <iframe
          src="https://stylemedaily.substack.com/embed"
          title="Newsletter signup form"
          width="100%"
          height="130"
          style={{ border: 'none', background: 'transparent', maxWidth: '420px', display: 'block', margin: '0 auto' }}
          frameBorder={0}
          scrolling="no"
        />
        <p className="text-[10px] text-noir-600 mt-4 tracking-wide">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
