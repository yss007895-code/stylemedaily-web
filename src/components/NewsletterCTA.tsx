export default function NewsletterCTA() {
  return (
    <div className="relative border border-gray-100 rounded-2xl p-8 sm:p-10 text-center bg-white overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blush-50 rounded-full blur-2xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-50 rounded-full blur-2xl opacity-50 pointer-events-none" />

      <div className="relative">
        <p className="text-sm font-mono text-blush-500 uppercase tracking-wider mb-2">Every Thursday</p>
        <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">The Weekly Style Edit</h3>
        <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto leading-relaxed">
          Outfit ideas, trend analysis, and curated picks - delivered straight to your inbox.
        </p>
        <iframe
          src="https://yss007895.substack.com/embed"
          title="Newsletter signup form"
          width="100%"
          height="130"
          style={{ border: '1px solid #EEE', background: 'white', borderRadius: '12px', maxWidth: '480px', display: 'block', margin: '0 auto' }}
          frameBorder={0}
          scrolling="no"
        />
        <p className="text-[11px] text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
