import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'DMCA Policy | StyleMeDaily',
  description: 'StyleMeDaily DMCA copyright infringement reporting policy and procedures.',
  alternates: { canonical: `${SITE_URL}/dmca` },
  robots: { index: false, follow: true },
};

export default function DmcaPage() {
  return (
    <div className="pt-12 max-w-3xl mx-auto">
      <header className="mb-10">
        <h1 className="font-display text-3xl font-bold text-gray-900 mb-2">DMCA Policy</h1>
        <p className="text-sm text-gray-400">Last updated: February 26, 2026</p>
      </header>

      <div className="prose-style">
        <p>{SITE_NAME} respects intellectual property rights. In accordance with the Digital Millennium Copyright Act of 1998, we will respond promptly to valid claims of copyright infringement submitted to our designated DMCA agent.</p>

        <h2>Filing a DMCA Takedown Notice</h2>
        <p>If you believe content on {SITE_NAME} infringes your copyright, submit a written notice containing all of the following:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm mb-6">
          <li>A physical or electronic signature of the person authorized to act on behalf of the copyright owner</li>
          <li>Identification of the copyrighted work claimed to have been infringed</li>
          <li>Identification of the infringing material with sufficient information to permit us to locate it (URL is sufficient)</li>
          <li>Your contact information: address, telephone number, and email address</li>
          <li>A statement that you have a good faith belief that use of the material is not authorized by the copyright owner, its agent, or the law</li>
          <li>A statement, under penalty of perjury, that the information in the notification is accurate and that you are authorized to act on behalf of the copyright owner</li>
        </ul>

        <h2>Where to Send DMCA Notices</h2>
        <p>Submit your DMCA takedown notice to our designated copyright agent:</p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 my-4">
          <p className="text-gray-700 text-sm font-medium">DMCA Agent — StyleMeDaily</p>
          <p className="text-gray-500 text-sm mt-1">Email: <a href="mailto:dmca@stylemedaily.org" className="text-gold-600 hover:underline">dmca@stylemedaily.org</a></p>
          <p className="text-gray-400 text-xs mt-2">Please include &quot;DMCA Notice&quot; in the subject line.</p>
        </div>
        <p>We will respond to all valid DMCA notices within 5 business days and remove or disable access to the allegedly infringing material promptly.</p>

        <h2>Counter-Notification</h2>
        <p>If you believe that material we removed in response to a DMCA notice is not infringing, or that you have authorization to use the material, you may submit a counter-notification to our DMCA agent. A valid counter-notification must include all elements required by 17 U.S.C. &sect; 512(g)(3).</p>

        <h2>Repeat Infringers</h2>
        <p>It is our policy to terminate the accounts of users who are repeat infringers in appropriate circumstances.</p>

        <h2>Disclaimer</h2>
        <p>The information on this page does not constitute legal advice. If you have questions about copyright law or the DMCA, consult a qualified attorney.</p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'DMCA Policy', item: `${SITE_URL}/dmca` },
            ],
          }),
        }}
      />
    </div>
  );
}
