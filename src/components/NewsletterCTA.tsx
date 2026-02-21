'use client';
import { useState } from 'react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="border border-gray-100 rounded-xl p-8 text-center bg-white">
      <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">The Weekly Style Edit</h3>
      <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
        Outfit ideas, trend analysis, and curated picks delivered every Thursday.
      </p>
      {submitted ? (
        <p className="text-rose-500 font-semibold text-sm">Thanks for subscribing! Check your inbox.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
          />
          <button type="submit" className="bg-rose-500 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-rose-600 transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </form>
      )}
      <p className="text-[11px] text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
