import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { default: 'StyleMeDaily — Personal Style Guides for Every Woman', template: '%s | StyleMeDaily' },
  description: 'Expert styling guides, curated outfit ideas, and personalized fashion advice for every woman, every occasion, every body.',
  keywords: ['personal stylist', 'fashion guide', 'outfit ideas', 'capsule wardrobe', 'what to wear', 'style tips women'],
  openGraph: {
    type: 'website', locale: 'en_US', url: 'https://stylemedaily.com', siteName: 'StyleMeDaily',
    title: 'StyleMeDaily — Personal Style Guides for Every Woman',
    description: 'Expert styling guides, curated outfit ideas, and personalized fashion advice.',
  },
  twitter: { card: 'summary_large_image', site: '@stylemedaily', creator: '@stylemedaily' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream antialiased">
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
