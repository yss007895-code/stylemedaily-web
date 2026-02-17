'use client';
import { useState } from 'react';

const questions = [
  { q: 'What best describes your daily life?', options: ['Corporate / Office', 'Creative / Freelance', 'Stay-at-home Mom', 'Student / Campus Life'] },
  { q: 'Your ideal weekend outfit is...', options: ['Jeans & a nice top', 'Flowy dress & sandals', 'Athleisure everything', 'Something bold & trendy'] },
  { q: 'Your style icon is closest to...', options: ['Amal Clooney (classic elegance)', 'Zendaya (bold & fashion-forward)', 'Jennifer Aniston (effortless casual)', 'Hailey Bieber (streetwear chic)'] },
  { q: 'Your monthly fashion budget is...', options: ['Under $50', '$50-150', '$150-300', '$300+'] },
  { q: 'When shopping, you prioritize...', options: ['Quality & longevity', 'Trendy & fun', 'Comfort above all', 'Versatility & mix-match'] },
];

const results: Record<string, { style: string; desc: string; recs: string[]; emoji: string }> = {
  default: {
    style: 'Classic Chic',
    desc: 'You gravitate toward timeless pieces with a modern twist. Your wardrobe is built on quality basics that never go out of style, elevated with thoughtful accessories.',
    recs: ['Capsule Wardrobe Guide for Working Women', 'The 10 Best Jeans for Women 2026', 'Nordstrom vs ASOS Comparison'],
    emoji: '✨',
  },
};

export default function StyleQuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const handleAnswer = (idx: number) => {
    const newAnswers = [...answers, idx];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length);
    }
  };

  const result = results.default;

  return (
    <div className="pt-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="font-display text-3xl font-extrabold text-gray-900 mb-2">
          Discover Your <span className="gradient-text italic">Style Personality</span>
        </h1>
        <p className="text-gray-500">Answer 5 quick questions and get personalized style recommendations.</p>
      </div>

      {step < questions.length ? (
        <div className="animate-fade-in">
          {/* Progress */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-blush-500 font-mono font-semibold">Question {step + 1}/{questions.length}</span>
          </div>
          <div className="h-1.5 bg-blush-100 rounded-full mb-8 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blush-500 to-purple-500 rounded-full transition-all duration-500" style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
          </div>

          <div className="card p-8 text-center">
            <h2 className="font-display text-xl font-bold text-gray-900 mb-6">{questions[step].q}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {questions[step].options.map((opt, i) => (
                <button key={i} onClick={() => handleAnswer(i)}
                  className="p-4 rounded-xl text-left font-medium text-gray-700 bg-white border-2 border-blush-100 hover:border-blush-400 hover:bg-blush-50 transition-all">
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : !done ? (
        <div className="card p-8 text-center animate-slide-up">
          <div className="text-5xl mb-4">{result.emoji}</div>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Your Style: {result.style}</h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">{result.desc}</p>

          <div className="card p-4 bg-blush-50/50 mb-6 text-left">
            <h3 className="font-display font-bold text-sm text-gray-900 mb-3">Recommended Guides for You:</h3>
            {result.recs.map((r, i) => (
              <div key={i} className="flex items-center gap-2 py-1.5 text-sm text-blush-600">
                <span>→</span> {r}
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 mb-3">Get your full results + personalized recommendations via email:</p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)}
              className="flex-1 bg-white border border-blush-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blush-400" />
            <button onClick={() => setDone(true)} className="btn-primary text-sm !px-5">Get Results</button>
          </div>
        </div>
      ) : (
        <div className="card p-8 text-center animate-fade-in">
          <div className="text-5xl mb-4">💌</div>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Check Your Inbox!</h2>
          <p className="text-gray-500 mb-4">Your personalized style profile is on its way. Welcome to the StyleMeDaily community!</p>
          <a href="/guides" className="btn-primary inline-block">Browse Style Guides →</a>
        </div>
      )}
    </div>
  );
}
