import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Contact Us' };

export default function ContactPage() {
  return (
    <div className="pt-8 max-w-3xl mx-auto">
      <h1 className="section-title mb-2">Contact Us</h1>
      <p className="text-gray-500 mb-10">We&apos;d love to hear from you!</p>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { icon: '📧', title: 'General', email: 'hello@stylemedaily.com' },
          { icon: '🤝', title: 'Partnerships', email: 'partners@stylemedaily.com' },
          { icon: '📌', title: 'Pinterest', email: '@stylemedaily' },
          { icon: '📸', title: 'Instagram', email: '@stylemedaily' },
        ].map((c, i) => (
          <div key={i} className="card p-6">
            <div className="text-2xl mb-2">{c.icon}</div>
            <h3 className="font-display font-bold text-gray-900 text-sm mb-1">{c.title}</h3>
            <span className="text-blush-500 text-sm">{c.email}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
