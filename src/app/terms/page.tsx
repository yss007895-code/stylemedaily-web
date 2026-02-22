import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for StyleMeDaily - read our usage terms and conditions.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto py-16">
      <h1 className="font-display text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>

      <div className="prose-style space-y-6 text-sm">
        <p className="text-gray-500">Last updated: February 22, 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using StyleMeDaily ("the Site"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Site.</p>

        <h2>2. Use of the Site</h2>
        <p>StyleMeDaily provides fashion guides, style advice, product recommendations, and curated outfit ideas. The content is for informational purposes only and does not constitute professional advice.</p>

        <h2>3. Affiliate Links and Advertising</h2>
        <p>The Site participates in affiliate programs including Amazon Services LLC Associates Program and other affiliate networks. This means we may earn a commission when you click on affiliate links and make a purchase, at no additional cost to you.</p>
        <p>The Site also displays advertisements through Google AdSense and other advertising networks. These ads may use cookies to serve relevant content.</p>

        <h2>4. Intellectual Property</h2>
        <p>All content on StyleMeDaily, including text, graphics, logos, and design elements, is the property of StyleMeDaily and protected by copyright laws. You may not reproduce, distribute, or modify any content without written permission.</p>

        <h2>5. User Conduct</h2>
        <p>You agree not to use the Site in any way that could damage, disable, or impair the Site, or interfere with any other party{"'"}s use of the Site.</p>

        <h2>6. Product Information</h2>
        <p>We strive to provide accurate product information, prices, and availability. However, prices and availability may change without notice. We are not responsible for errors in product listings or third-party retailer information.</p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>The Site is provided "as is" without warranties of any kind. We do not guarantee that the Site will be uninterrupted, error-free, or free of harmful components.</p>

        <h2>8. Limitation of Liability</h2>
        <p>StyleMeDaily shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site or any products purchased through affiliate links.</p>

        <h2>9. Third-Party Links</h2>
        <p>The Site contains links to third-party websites, including retail partners. We are not responsible for the content, privacy policies, or practices of these external sites.</p>

        <h2>10. Changes to Terms</h2>
        <p>We reserve the right to modify these Terms at any time. Continued use of the Site after changes constitutes acceptance of the updated Terms.</p>

        <h2>11. Contact</h2>
        <p>For questions about these Terms, please contact us at <a href="mailto:yss007895@gmail.com">yss007895@gmail.com</a>.</p>
      </div>
    </div>
  );
}
