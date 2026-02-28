export default function NewsletterCTA() {
  return (
    <div className="border-t border-b border-editorial-border py-14 text-center">
      <p className="text-[10px] tracking-editorial uppercase text-editorial-accent mb-4 font-body">Every Thursday</p>
      <h3 className="font-display text-3xl font-light text-editorial-text mb-3">The Weekly Edit</h3>
      <p className="text-editorial-muted text-sm mb-8 max-w-sm mx-auto leading-relaxed font-body">
        Style notes, new arrivals, and considered recommendations.
      </p>
      <iframe
        src="https://yss007895.substack.com/embed"
        title="Newsletter signup form"
        width="100%"
        height="130"
        style={{ border: 'none', background: 'transparent', maxWidth: '400px', display: 'block', margin: '0 auto' }}
        frameBorder={0}
        scrolling="no"
      />
      <p className="text-[10px] text-editorial-muted mt-4 tracking-wide-editorial font-body">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
