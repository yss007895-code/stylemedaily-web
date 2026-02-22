import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer for StyleMeDaily - affiliate disclosure and content disclaimer.',
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h1 className="font-display text-3xl font-bold text-gray-900 mb-8">Disclaimer</h1>

      <div className="prose-style space-y-6 text-sm">
        <p className="text-gray-500">Last updated: February 22, 2026</p>

        <h2>Affiliate Disclosure</h2>
        <p>StyleMeDaily is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
        <p>We also participate in other affiliate programs including Skimlinks, ShareASale, and other networks. When you click on links to various merchants on this site and make a purchase, this may result in a commission for us.</p>

        <h2>Advertising Disclosure</h2>
        <p>This site displays advertisements served by Google AdSense and other advertising partners. These ads may use cookies and web beacons to collect non-personal information to provide personalized advertising.</p>

        <h2>Content Disclaimer</h2>
        <p>The information provided on StyleMeDaily is for general informational and entertainment purposes only. We make no representations or warranties about the accuracy or completeness of any information on this site.</p>
        <p>Fashion advice and style recommendations are subjective and based on our editorial team{"'"}s opinions. Individual results may vary based on personal preferences, body type, and budget.</p>

        <h2>Product Reviews</h2>
        <p>Our product reviews and recommendations are based on research and editorial judgment. While we strive to be objective, some products may have been provided for review, and affiliate relationships may exist with brands mentioned.</p>

        <h2>Pricing Information</h2>
        <p>Product prices and availability are subject to change. We make our best efforts to keep pricing information accurate, but prices displayed may differ from actual prices at the time of purchase. Always verify prices on the retailer{"'"}s website before purchasing.</p>

        <h2>External Links</h2>
        <p>StyleMeDaily contains links to external websites. We are not responsible for the content, accuracy, or privacy practices of these external sites.</p>

        <h2>Contact</h2>
        <p>If you have questions about this disclaimer, contact us at <a href="mailto:yss007895@gmail.com">yss007895@gmail.com</a>.</p>
      </div>
    </div>
  );
}
