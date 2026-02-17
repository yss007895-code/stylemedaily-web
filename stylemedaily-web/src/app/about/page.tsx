import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'About StyleMeDaily' };

export default function AboutPage() {
  return (
    <div className="pt-8 max-w-3xl mx-auto prose-style">
      <h1 className="font-display text-3xl font-extrabold text-gray-900 mb-6">About StyleMeDaily</h1>
      <p>StyleMeDaily was born from a simple idea: every woman deserves access to great style advice, regardless of her budget, body type, or lifestyle.</p>
      <p>We create practical, real-world styling guides that help you look and feel your best without spending hours scrolling through fashion magazines or Instagram. Our content is written by real stylists who understand that most women need outfits that work for school drop-offs, board meetings, date nights, and everything in between.</p>
      <h2>What We Do</h2>
      <p>We publish in-depth style guides, outfit ideas, product reviews, and retailer comparisons — all designed to save you time and money. Every recommendation is personally tested and vetted by our team.</p>
      <h2>Affiliate Disclosure</h2>
      <p>Some links on StyleMeDaily are affiliate links. This means we may earn a small commission if you purchase through our links, at no extra cost to you. This helps us keep creating free content. Our recommendations are never influenced by affiliate relationships.</p>
      <h2>Contact</h2>
      <p>Questions or partnerships? Email us at <a href="mailto:hello@stylemedaily.com">hello@stylemedaily.com</a> or follow us on <a href="https://pinterest.com/stylemedaily" target="_blank" rel="noopener noreferrer">Pinterest</a> and <a href="https://instagram.com/stylemedaily" target="_blank" rel="noopener noreferrer">Instagram</a>.</p>
    </div>
  );
}
