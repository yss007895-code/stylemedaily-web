import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer & FTC Disclosure',
  description: 'StyleMeDaily disclaimer, affiliate disclosure, and FTC compliance information.',
};

export default function DisclaimerPage() {
  return (
    <div className="pt-12 max-w-3xl mx-auto">
      <header className="mb-10">
        <h1 className="font-display text-3xl font-bold text-gray-900 mb-2">Disclaimer & FTC Disclosure</h1>
        <p className="text-sm text-gray-400">Last updated: February 21, 2026</p>
      </header>

      <div className="prose-style">
        <h2>General Disclaimer</h2>
        <p>
          The information provided on StyleMeDaily is for general informational and educational purposes only. All content is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on this site.
        </p>
        <p>
          Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
        </p>

        <h2>FTC Affiliate Disclosure</h2>
        <p>
          In accordance with the Federal Trade Commission (FTC) guidelines, we want to be transparent about our affiliate relationships:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm mb-4">
          <li><strong>StyleMeDaily is a participant in the Amazon Services LLC Associates Program</strong>, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</li>
          <li>Some links on this site are affiliate links. This means if you click on the link and purchase an item, we will receive an affiliate commission at no extra cost to you.</li>
          <li>We only recommend products or services we believe will add value to our readers.</li>
          <li>Affiliate relationships do not influence our editorial content or recommendations.</li>
        </ul>

        <h2>Advertising Disclosure</h2>
        <p>
          This site may display advertisements from third parties, including Google AdSense. These ads may use cookies and web beacons to collect information about your browsing activity to serve targeted advertising. You can opt out of personalized advertising by visiting Google&apos;s Ads Settings.
        </p>

        <h2>Professional Disclaimer</h2>
        <p>
          The site cannot and does not contain professional advice. The content is provided for general informational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
        </p>

        <h2>Product Reviews</h2>
        <p>
          Our product reviews and comparisons represent our honest opinions based on research and, where possible, hands-on testing. Prices, features, and availability are subject to change. We encourage readers to verify current information before making purchasing decisions.
        </p>

        <h2>DMCA Notice</h2>
        <p>
          If you believe that content on this website infringes your copyright, please send a DMCA notice to <a href="mailto:contact@stylemedaily.org">contact@stylemedaily.org</a>. We will respond to legitimate DMCA requests promptly.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this disclaimer? Contact us at <a href="mailto:contact@stylemedaily.org">contact@stylemedaily.org</a>.
        </p>
      </div>
    </div>
  );
}
