import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Methodology — How We Test & Review | StyleMeDaily',
  description: 'Learn about StyleMeDaily\'s rigorous product testing process, style guide research methods, and commitment to editorial independence.',
  alternates: { canonical: `${SITE_URL}/methodology` },
  openGraph: {
    title: 'Our Methodology — How We Test & Review | StyleMeDaily',
    description: 'Learn about StyleMeDaily\'s rigorous product testing process, style guide research methods, and commitment to editorial independence.',
    type: 'website',
    url: `${SITE_URL}/methodology`,
    siteName: SITE_NAME,
  },
};

export default function MethodologyPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Methodology', item: `${SITE_URL}/methodology` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <p className="text-sm text-gray-400 font-mono uppercase tracking-wide mb-3">Transparency</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Methodology
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            How we create style guides, test products, and ensure our recommendations are worth your time and money.
          </p>
        </header>

        <div className="prose-style">
          <h2>Product Testing Process</h2>
          <p>
            At StyleMeDaily, we believe that hands-on experience is the only way to truly evaluate a product. Before a clothing item, accessory, or beauty product makes it into one of our guides, it undergoes a rigorous testing process.
          </p>
          <p>
            Our editors wear the items in real-life scenarios—to the office, on weekends, and during travel—to assess comfort, durability, and versatility. We pay close attention to fabric quality, stitching, and how the garment holds up after washing. If a product doesn&apos;t meet our standards for quality and fit, we don&apos;t recommend it.
          </p>

          <h2>Style Guide Research</h2>
          <p>
            Our style guides are the result of extensive research and trend analysis. We monitor runway shows, street style trends, and retail data to identify the most relevant looks for the modern woman.
          </p>
          <p>
            However, we don&apos;t just follow trends blindly. We filter them through a lens of practicality and timelessness. We ask: &quot;Is this wearable for a real person with a real job?&quot; &quot;Will this look good on different body types?&quot; &quot;Can this piece be styled in multiple ways?&quot; This ensures our guides are not just aspirational, but actionable.
          </p>

          <h2>Price Comparison Method</h2>
          <p>
            We understand that value is just as important as style. When recommending products, we compare prices across major retailers to ensure you&apos;re getting the best deal.
          </p>
          <p>
            We also look for high-quality alternatives at different price points. For every investment piece we feature, we strive to find a &quot;budget-friendly&quot; option that doesn&apos;t compromise on style. Our goal is to make great style accessible, regardless of your budget.
          </p>

          <h2>Editorial Independence Disclosure</h2>
          <p>
            StyleMeDaily is an editorially independent publication. Our content is driven by our editors&apos; expertise and our readers&apos; needs, not by advertisers.
          </p>
          <p>
            While we do use affiliate links (as detailed in our Affiliate Disclosure), our product selections are made independently of any affiliate partnerships. Brands cannot pay to be included in our editorial guides. If we recommend something, it&apos;s because we genuinely like it and believe it will add value to your wardrobe.
          </p>
        </div>
      </div>
    </>
  );
}
