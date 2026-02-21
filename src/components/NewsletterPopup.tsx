'use client';
import { useState, useEffect, useRef } from 'react';

const POPUP_KEY = 'smd_popup_dismissed';
const SHOW_DELAY_MS = 30000;

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (localStorage.getItem(POPUP_KEY)) return;

    timer.current = setTimeout(() => setVisible(true), SHOW_DELAY_MS);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 5 && !localStorage.getItem(POPUP_KEY)) {
        if (timer.current) clearTimeout(timer.current);
        setVisible(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (timer.current) clearTimeout(timer.current);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(POPUP_KEY, '1');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    localStorage.setItem(POPUP_KEY, '1');
    setTimeout(() => setVisible(false), 2000);
  };

  if (!visible) return null;

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="newsletter-popup-title" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={dismiss} />
      <div className="relative bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl animate-fade-in text-center">
        <button onClick={dismiss} aria-label="Close" className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors text-lg leading-none">&times;</button>

        {submitted ? (
          <>
            <span className="text-3xl block mb-3">&#10003;</span>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-2">You&apos;re in!</h2>
            <p className="text-sm text-gray-400">Check your inbox for a welcome email.</p>
          </>
        ) : (
          <>
            <h2 id="newsletter-popup-title" className="font-display text-xl font-bold text-gray-900 mb-2">Get the Weekly Style Edit</h2>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              Outfit ideas, trend reports, and curated Amazon finds -- delivered every Thursday.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent"
              />
              <button type="submit" className="w-full bg-rose-500 text-white py-3 rounded-xl text-sm font-semibold hover:bg-rose-600 transition-colors">
                Subscribe Free
              </button>
            </form>
            <p className="text-[11px] text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
            <button onClick={dismiss} className="text-[11px] text-gray-400 mt-2 hover:text-gray-600 transition-colors underline block mx-auto">
              No thanks
            </button>
          </>
        )}
      </div>
    </div>
  );
}
