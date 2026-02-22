import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'StyleMeDaily terms of service -- rules and guidelines for using our website.',
};

export default function TermsPage() {
  return (
    <div className="pt-12 max-w-3xl mx-auto">
      <header className="mb-10">
        <h1 className="font-display text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-400">Last updated: February 21, 2026</p>
      </header>

      <div className="prose-style">
        <p>By accessing and using StyleMeDaily (&quot;the Site&quot;), you accept and agree to be bound by these Terms of Service.</p>

        <h2>Use of the Site</h2>
        <p>You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm mb-4">
          <li>Use the Site in any way that violates applicable laws or regulations</li>
          <li>Reproduce, distribute, or create derivative works from our content without permission</li>
          <li>Attempt to gain unauthorized access to any part of the Site</li>
          <li>Use automated systems to scrape or collect data from the Site</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          All content on this Site, including text, graphics, logos, and images, is the property of StyleMeDaily or its content suppliers and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express written consent.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our Site contains links to third-party websites and services, including affiliate links. We are not responsible for the content, privacy policies, or practices of any third-party sites. We encourage you to review the terms and privacy policies of any third-party site you visit.
        </p>

        <h2>Disclaimer of Warranties</h2>
        <p>
          The Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties, expressed or implied, regarding the operation of the Site or the information, content, or materials included on the Site.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, StyleMeDaily shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Site.
        </p>

        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless StyleMeDaily and its affiliates from any claims, damages, or expenses arising from your use of the Site or violation of these Terms.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after any changes constitutes acceptance of the new Terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these Terms? Contact us at <a href="mailto:contact@stylemedaily.org">contact@stylemedaily.org</a>.
        </p>
      </div>
    </div>
  );
}
