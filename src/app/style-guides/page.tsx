import type { Metadata } from 'next';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { guides } from '@/lib/guides-data';

export const metadata: Metadata = {
  title: 'The Seasonal Edit — Style Guides',
  description: 'Curated looks for the modern woman, defining elegance through every season. Browse our seasonal style guides and collections.',
  keywords: ['style guides', 'seasonal fashion', 'outfit ideas', 'fashion tips', 'capsule wardrobe'],
  alternates: { canonical: `${SITE_URL}/style-guides` },
  openGraph: {
    title: 'The Seasonal Edit — Style Guides',
    description: 'Curated looks for the modern woman, defining elegance through every season.',
    url: `${SITE_URL}/style-guides`,
    siteName: SITE_NAME,
    type: 'website',
  },
};

const collections = [
  {
    slug: guides[10]?.slug || 'old-money-summer-aesthetic-guide-2026',
    image: guides[10]?.image || '/images/guides/old-money-summer-aesthetic-guide-2026-hero.jpg',
    category: 'VACATION STYLE',
    title: 'Mediterranean Summer: The Art of Effortless Dressing',
    description: 'Linen, sun-washed hues, and a nonchalance that only comes from knowing exactly what works.',
  },
  {
    slug: guides[7]?.slug || 'gorpcore-womens-style-guide-2026',
    image: guides[7]?.image || '/images/guides/gorpcore-womens-style-guide-2026-hero.jpg',
    category: 'COLD WEATHER',
    title: 'Winter Layering Masterclass',
    description: 'The sophisticated approach to dressing for frost — cashmere, wool, and structured silhouettes.',
  },
  {
    slug: guides[12]?.slug || 'office-siren-corporate-wear-guide-2026',
    image: guides[12]?.image || '/images/guides/office-siren-corporate-wear-guide-2026-hero.jpg',
    category: 'WORKWEAR',
    title: 'The Power Wardrobe Reimagined',
    description: 'Modern office dressing that commands attention without saying a word.',
  },
  {
    slug: guides[9]?.slug || 'mob-wife-glamour-aesthetic-guide-2026',
    image: guides[9]?.image || '/images/guides/mob-wife-glamour-aesthetic-guide-2026-hero.jpg',
    category: 'BLACK TIE',
    title: 'Evening Elegance After Hours',
    description: 'From cocktail to gala — a guide to nighttime dressing with unmistakable poise.',
  },
  {
    slug: guides[4]?.slug || 'y2k-fashion-revival-ultimate-guide-2026',
    image: guides[4]?.image || '/images/guides/y2k-fashion-revival-ultimate-guide-2026-hero.jpg',
    category: 'OFF DUTY',
    title: 'Weekend Style Without Compromise',
    description: 'Casual never has to mean careless. Elevated weekend looks that feel as good as they look.',
  },
  {
    slug: guides[2]?.slug || 'your-ultimate-balletcore-style-guide',
    image: guides[2]?.image || '/images/guides/editors-choice-fashion-trends-2026.webp',
    category: 'DETAILS',
    title: 'The Accessory Edit: Small Things Matter',
    description: 'Scarves, jewelry, bags, and shoes — the finishing touches that elevate everything.',
  },
];

const featured = guides[5] || guides[0];

export default function StyleGuidesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'StyleMeDaily Seasonal Style Guides',
    description: 'Curated looks for the modern woman, defining elegance through every season.',
    url: `${SITE_URL}/style-guides`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: guides.length,
      itemListElement: guides.slice(0, 10).map((g, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/guides/${g.slug}`,
        name: g.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-10">
        {/* Page heading */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light italic text-editorial-text mb-4">
            The Seasonal Edit
          </h1>
          <p className="text-sm text-editorial-muted font-body max-w-lg mx-auto">
            Curated looks for the modern woman, defining elegance through every season.
          </p>
        </div>

        {/* Featured story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[3/4] overflow-hidden bg-editorial-light">
              {featured?.image && (
                <SafeImage
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              )}
            </div>
            <div className="lg:pl-6">
              <p className="text-[11px] tracking-editorial uppercase text-editorial-accent font-body font-medium mb-4">
                FEATURED STORY
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-editorial-text leading-snug mb-4">
                Spring Essentials: The New Romanticism
              </h2>
              <p className="text-sm text-editorial-muted font-body leading-relaxed mb-8 max-w-md">
                A soft rebellion against minimalism — this season embraces flowing silhouettes, delicate fabrics, and a palette inspired by English gardens and morning light.
              </p>
              <Link
                href={`/guides/${featured?.slug || ''}`}
                className="text-[11px] tracking-editorial uppercase text-editorial-text font-body font-medium hover:text-editorial-accent transition-colors"
              >
                READ THE GUIDE &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Collections grid */}
        <section className="mb-16">
          <h2 className="text-[11px] tracking-editorial uppercase text-editorial-text font-body font-medium mb-8">
            Latest Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {collections.map((item, i) => (
              <Link
                key={i}
                href={`/guides/${item.slug}`}
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-editorial-light mb-4">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <p className="text-[10px] tracking-editorial uppercase text-editorial-accent font-body font-medium mb-2">
                  {item.category}
                </p>
                <h3 className="font-display text-lg font-normal text-editorial-text group-hover:text-editorial-accent transition-colors leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-editorial-muted font-body line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter section */}
        <section className="mb-16 py-12 border-t border-b border-editorial-border">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="font-display text-3xl font-light italic text-editorial-text mb-3">
              The Weekly Edit
            </h2>
            <p className="text-sm text-editorial-muted font-body mb-8">
              Curated style inspiration delivered to your inbox every week.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent border border-editorial-border px-4 py-3 text-sm font-body focus:outline-none focus:border-editorial-accent"
              />
              <button className="bg-editorial-accent text-white font-body font-medium px-6 py-3 text-[11px] tracking-editorial uppercase hover:bg-gold-600 transition-colors">
                JOIN
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
