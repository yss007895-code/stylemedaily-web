'use client';
import { useState } from 'react';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';

interface QuizOption {
  label: string;
  description: string;
  image: string;
}

interface QuizQuestion {
  heading: string;
  subtitle: string;
  options: QuizOption[];
}

const questions: QuizQuestion[] = [
  {
    heading: 'Define Your Signature Aesthetic',
    subtitle: 'Which silhouette best describes your daily uniform?',
    options: [
      {
        label: 'OVERSIZED & EFFORTLESS',
        description: 'Relaxed fits, draped layers, comfort-first dressing',
        image: '/images/guides/quiet-luxury-essentials-investment-pieces-2026-hero.jpg',
      },
      {
        label: 'TAILORED & SHARP',
        description: 'Structured blazers, clean lines, polished precision',
        image: '/images/guides/office-siren-corporate-wear-guide-2026-hero.jpg',
      },
      {
        label: 'SOFT & ROMANTIC',
        description: 'Flowing fabrics, delicate details, feminine charm',
        image: '/images/guides/coquette-aesthetic-2026-ultimate-guide-hero.jpg',
      },
      {
        label: 'AVANT-GARDE',
        description: 'Bold shapes, experimental cuts, artistic expression',
        image: '/images/guides/gorpcore-womens-style-guide-2026-hero.jpg',
      },
    ],
  },
  {
    heading: 'Your Color Palette',
    subtitle: 'Which color family dominates your wardrobe?',
    options: [
      {
        label: 'NEUTRALS & EARTH',
        description: 'Beige, cream, camel, olive, warm browns',
        image: '/images/guides/old-money-summer-aesthetic-guide-2026-hero.jpg',
      },
      {
        label: 'MONOCHROME',
        description: 'Black, white, grey, stark contrast',
        image: '/images/guides/how-to-master-the-clean-girl-aesthetic-your-ultimate-guide-2026-hero.jpg',
      },
      {
        label: 'SOFT PASTELS',
        description: 'Blush, lavender, powder blue, mint',
        image: '/images/guides/balletcore-style-guide-how-to-dress-like-a-ballerina-off-duty-2026-hero.jpg',
      },
      {
        label: 'BOLD & VIBRANT',
        description: 'Rich jewel tones, statement-making hues',
        image: '/images/guides/mob-wife-glamour-aesthetic-guide-2026-hero.jpg',
      },
    ],
  },
  {
    heading: 'Weekend Wardrobe',
    subtitle: 'What does your ideal Saturday outfit look like?',
    options: [
      {
        label: 'ELEVATED CASUAL',
        description: 'Great jeans, a perfect knit, clean sneakers',
        image: '/images/guides/eclectic-grandpa-chic-style-guide-2026-hero.jpg',
      },
      {
        label: 'DRESSED UP',
        description: 'A beautiful dress, heels, going-out ready',
        image: '/images/guides/editors-choice-fashion-trends-2026.webp',
      },
      {
        label: 'ATHLEISURE',
        description: 'Chic leggings, oversized hoodie, comfort first',
        image: '/images/guides/y2k-fashion-revival-ultimate-guide-2026-hero.jpg',
      },
      {
        label: 'BOHEMIAN',
        description: 'Flowy maxi, layered jewelry, free-spirited',
        image: '/images/guides/clean-girl-aesthetic-2026.webp',
      },
    ],
  },
  {
    heading: 'Investment Philosophy',
    subtitle: 'How do you approach building your wardrobe?',
    options: [
      {
        label: 'CAPSULE CURATOR',
        description: 'Fewer, better pieces that mix and match endlessly',
        image: '/images/guides/quiet-luxury-essentials-investment-pieces-2026-hero.jpg',
      },
      {
        label: 'TREND CHASER',
        description: 'Always first to try the latest runway looks',
        image: '/images/guides/y2k-fashion-revival-ultimate-guide-2026-hero.jpg',
      },
      {
        label: 'VINTAGE HUNTER',
        description: 'One-of-a-kind finds, thrift stores, pre-loved treasures',
        image: '/images/guides/eclectic-grandpa-chic-style-guide-2026-hero.jpg',
      },
      {
        label: 'PRACTICAL LUXE',
        description: 'Quality basics with a few statement splurges',
        image: '/images/guides/old-money-summer-aesthetic-guide-2026-hero.jpg',
      },
    ],
  },
];

interface StyleResult {
  style: string;
  desc: string;
  guides: { title: string; slug: string }[];
  products: { name: string; price: string; url: string }[];
}

const styleProfiles: Record<string, StyleResult> = {
  classic: {
    style: 'Classic Chic',
    desc: 'You gravitate toward timeless pieces with a modern twist. Your wardrobe is built on quality basics that never go out of style, elevated with thoughtful accessories.',
    guides: [
      { title: 'Capsule Wardrobe Guide for Working Women', slug: 'capsule-wardrobe-working-women-2026' },
      { title: 'Professional Outfits for Women', slug: 'professional-outfits-women-2026' },
      { title: 'Best Affordable Blazers Under $100', slug: 'best-affordable-blazers-under-100' },
    ],
    products: [
      { name: 'Tailored Blazer', price: '$49', url: 'https://amzn.to/4rVjOFg' },
      { name: 'Silk Camisole', price: '$25', url: 'https://amzn.to/3Mro3JB' },
      { name: 'Wide Leg Pants', price: '$38', url: 'https://amzn.to/3ZCaw4S' },
      { name: 'Classic Pumps', price: '$45', url: 'https://amzn.to/3OhrhzW' },
    ],
  },
  trendy: {
    style: 'Trend Explorer',
    desc: 'You love staying ahead of the curve and experimenting with new looks. Your wardrobe is a mix of statement pieces and trend-forward essentials.',
    guides: [
      { title: 'Spring Fashion Trends 2026', slug: 'spring-fashion-trends-2026' },
      { title: '10 Must-Have Fashion Items for Spring 2026', slug: 'spring-2026-must-have-items' },
      { title: 'Spring 2026 Accessories Trends', slug: 'trending-spring-accessories-2026' },
    ],
    products: [
      { name: 'Leather Jacket', price: '$59', url: 'https://amzn.to/4az8Vlh' },
      { name: 'Satin Midi Dress', price: '$42', url: 'https://amzn.to/4tH7kT9' },
      { name: 'Oversized Sunglasses', price: '$18', url: 'https://amzn.to/4tEIRhl' },
      { name: 'Cigarette Jeans', price: '$42', url: 'https://amzn.to/4kJhrTx' },
    ],
  },
  casual: {
    style: 'Effortless Casual',
    desc: 'Comfort is queen but you never sacrifice style. You master the art of looking put-together in the most relaxed pieces.',
    guides: [
      { title: '15 Casual Outfits That Look Expensive', slug: 'casual-outfits-look-expensive' },
      { title: 'Best Jeans for Every Body Type', slug: 'best-jeans-every-body-type' },
      { title: 'Best White Sneakers for Women', slug: 'best-white-sneakers-women-2026' },
    ],
    products: [
      { name: 'Straight Leg Jeans', price: '$39', url: 'https://amzn.to/4rfVnSQ' },
      { name: 'White Sneakers', price: '$45', url: 'https://amzn.to/3Mro7cj' },
      { name: 'Oversized Linen Shirt', price: '$28', url: 'https://amzn.to/4rVjOFg' },
      { name: 'Crossbody Bag', price: '$24', url: 'https://amzn.to/4anggFT' },
    ],
  },
  streetwear: {
    style: 'Modern Minimalist',
    desc: 'Less is more for you. Clean lines, neutral tones, and a capsule approach define your wardrobe. Every piece earns its place.',
    guides: [
      { title: 'How to Build a Minimalist Wardrobe', slug: 'how-to-build-minimalist-wardrobe' },
      { title: 'Amazon Fashion Finds Under $30', slug: 'amazon-fashion-finds-under-30' },
      { title: '12 Affordable Fashion Brands', slug: 'affordable-fashion-brands-guide' },
    ],
    products: [
      { name: 'Ribbed Bodysuit', price: '$18', url: 'https://amzn.to/4tH7kT9' },
      { name: 'Classic White Camisole', price: '$25', url: 'https://amzn.to/3Mro3JB' },
      { name: 'Gold Layered Necklace Set', price: '$14', url: 'https://amzn.to/3Mro3JB' },
      { name: 'Versatile Wide Leg Pants', price: '$38', url: 'https://amzn.to/3ZCaw4S' },
    ],
  },
};

function computeResult(answers: number[]): StyleResult {
  const scores = { classic: 0, trendy: 0, casual: 0, streetwear: 0 };

  // Q1: Silhouette
  if (answers[0] === 0) { scores.casual += 3; scores.streetwear += 1; }
  if (answers[0] === 1) { scores.classic += 3; scores.trendy += 1; }
  if (answers[0] === 2) { scores.trendy += 2; scores.casual += 2; }
  if (answers[0] === 3) { scores.trendy += 3; scores.streetwear += 1; }

  // Q2: Color palette
  if (answers[1] === 0) { scores.classic += 3; scores.casual += 1; }
  if (answers[1] === 1) { scores.streetwear += 3; scores.classic += 1; }
  if (answers[1] === 2) { scores.trendy += 2; scores.casual += 2; }
  if (answers[1] === 3) { scores.trendy += 3; scores.streetwear += 1; }

  // Q3: Weekend
  if (answers[2] === 0) { scores.casual += 4; }
  if (answers[2] === 1) { scores.classic += 3; scores.trendy += 1; }
  if (answers[2] === 2) { scores.casual += 3; scores.streetwear += 1; }
  if (answers[2] === 3) { scores.trendy += 2; scores.casual += 2; }

  // Q4: Investment
  if (answers[3] === 0) { scores.streetwear += 3; scores.classic += 1; }
  if (answers[3] === 1) { scores.trendy += 4; }
  if (answers[3] === 2) { scores.casual += 2; scores.trendy += 2; }
  if (answers[3] === 3) { scores.classic += 3; scores.streetwear += 1; }

  const sorted = Object.entries(scores).sort(([, a], [, b]) => b - a);
  return styleProfiles[sorted[0][0]];
}

export default function StyleQuizClient() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [result, setResult] = useState<StyleResult | null>(null);

  const totalQuestions = questions.length;
  const progress = Math.round(((step + 1) / totalQuestions) * 100);
  const currentQ = questions[step];

  const handleAnswer = (idx: number) => {
    const newAnswers = [...answers, idx];
    setAnswers(newAnswers);
    if (step < totalQuestions - 1) {
      setStep(step + 1);
    } else {
      setResult(computeResult(newAnswers));
      setStep(totalQuestions);
    }
  };

  const handleRetake = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
    setDone(false);
    setEmail('');
  };

  return (
    <div className="pt-8">
      {step < totalQuestions && currentQ ? (
        <div className="animate-fade-in">
          {/* Progress bar */}
          <div className="flex items-center gap-6 mb-16">
            <span className="text-[11px] tracking-editorial uppercase text-editorial-muted font-body font-medium whitespace-nowrap">
              QUESTION {step + 1} OF {totalQuestions}
            </span>
            <div className="flex-1 h-1 bg-editorial-border overflow-hidden" role="progressbar" aria-valuenow={step + 1} aria-valuemin={0} aria-valuemax={totalQuestions}>
              <div className="h-full bg-editorial-accent transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
            <span className="text-[11px] tracking-editorial uppercase text-editorial-muted font-body font-medium whitespace-nowrap">
              {progress}% COMPLETED
            </span>
          </div>

          {/* Question */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-editorial-text mb-3">
              {currentQ.heading}
            </h2>
            <p className="font-display text-lg italic text-editorial-muted">
              {currentQ.subtitle}
            </p>
          </div>

          {/* Option cards — 4 across */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {currentQ.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="group text-left transition-opacity hover:opacity-90"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-editorial-light mb-4">
                  <SafeImage
                    src={opt.image}
                    alt={opt.label}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <h3 className="text-[12px] tracking-editorial uppercase font-body font-semibold text-editorial-text mb-1">
                  {opt.label}
                </h3>
                <p className="font-display text-sm italic text-editorial-muted leading-snug">
                  {opt.description}
                </p>
              </button>
            ))}
          </div>

          {/* Next step */}
          {step < totalQuestions - 1 && (
            <div className="text-right">
              <span className="text-[11px] tracking-editorial uppercase text-editorial-muted font-body">
                Select an option to continue
              </span>
            </div>
          )}
        </div>
      ) : result && !done ? (
        <div className="max-w-2xl mx-auto text-center animate-slide-up pt-12">
          <p className="text-[11px] tracking-editorial uppercase text-editorial-accent font-body font-medium mb-4">YOUR STYLE PROFILE</p>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-editorial-text mb-4">{result.style}</h2>
          <p className="text-editorial-muted font-body leading-relaxed mb-10 max-w-md mx-auto">{result.desc}</p>

          {/* Recommended Products */}
          <div className="text-left mb-8">
            <h3 className="text-[11px] tracking-editorial uppercase text-editorial-text font-body font-medium mb-4">Your Starter Kit</h3>
            <div className="grid grid-cols-2 gap-4">
              {result.products.map((p, i) => (
                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer nofollow sponsored"
                  className="flex items-center gap-3 py-3 border-b border-editorial-border hover:bg-editorial-light transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-body text-editorial-text">{p.name}</p>
                    <p className="text-sm font-body text-editorial-muted">{p.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Recommended Guides */}
          <div className="text-left mb-8">
            <h3 className="text-[11px] tracking-editorial uppercase text-editorial-text font-body font-medium mb-4">Recommended Guides</h3>
            <div className="space-y-2">
              {result.guides.map((g, i) => (
                <Link key={i} href={`/guides/${g.slug}`}
                  className="flex items-center gap-2 py-2 text-sm text-editorial-muted hover:text-editorial-text font-body transition-colors">
                  <span>&rarr;</span>
                  <span>{g.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <p className="text-sm text-editorial-muted font-body mb-4">Get your full style profile via email:</p>
          <div className="flex gap-3 max-w-sm mx-auto">
            <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)}
              className="flex-1 bg-transparent border border-editorial-border px-4 py-3 text-sm font-body focus:outline-none focus:border-editorial-accent" />
            <button onClick={() => setDone(true)} className="btn-primary !px-6">GET RESULTS</button>
          </div>

          <button
            onClick={handleRetake}
            className="mt-6 text-[11px] tracking-editorial uppercase text-editorial-muted hover:text-editorial-text font-body font-medium transition-colors"
          >
            Retake Quiz
          </button>
        </div>
      ) : result ? (
        <div className="max-w-2xl mx-auto text-center animate-fade-in pt-12">
          <h2 className="font-display text-3xl font-light text-editorial-text mb-3">Check Your Inbox</h2>
          <p className="text-editorial-muted font-body mb-8">Your personalized style profile is on its way.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/guides" className="btn-primary inline-block">Browse Style Guides</Link>
            <button onClick={handleRetake} className="btn-secondary inline-block">Retake Quiz</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
