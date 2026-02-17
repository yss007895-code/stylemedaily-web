import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <div className="pt-8 max-w-3xl mx-auto prose-style">
      <h1 className="font-display text-3xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: February 17, 2026</p>
      <p>StyleMeDaily (&quot;we&quot;) respects your privacy. This policy explains how we collect, use, and protect your data when you visit stylemedaily.com.</p>
      <h2>Information We Collect</h2>
      <p>We may collect: email address (newsletter subscription), usage data via analytics (pages visited, referral sources), cookies for analytics and advertising, and information from contact forms.</p>
      <h2>How We Use Your Information</h2>
      <p>To provide and improve our content, send newsletters (opt-in only), analyze site usage, display relevant ads via Google AdSense, and respond to inquiries.</p>
      <h2>Third-Party Services</h2>
      <p>We use Google Analytics, Google AdSense, affiliate tracking (Nordstrom, ASOS, H&M, etc.), and email service providers. Each has its own privacy policy.</p>
      <h2>Cookies</h2>
      <p>We use cookies for analytics and advertising. You can control cookies through your browser settings.</p>
      <h2>Your Rights</h2>
      <p>You can access, correct, or delete your data, unsubscribe from our newsletter, and opt out of personalized ads at any time.</p>
      <h2>Contact</h2>
      <p>Privacy questions: <a href="mailto:privacy@stylemedaily.com">privacy@stylemedaily.com</a></p>
    </div>
  );
}
