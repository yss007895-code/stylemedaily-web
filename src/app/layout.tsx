import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { default: 'StyleMeDaily – Personal Style Guides for Every Woman', template: '%s | StyleMeDaily' },
  description: 'Expert styling guides, curated outfit ideas, and personalized fashion advice for every woman, every occasion, every body.',
  keywords: ['personal stylist', 'fashion guide', 'outfit ideas', 'capsule wardrobe', 'what to wear', 'style tips women'],import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { default: 'StyleMeDaily – Personal Style Guides for Every Woman', template: '%s | StyleMeDaily' },
  description: 'Expert styling guides, curated outfit ideas, and personalized fashion advice for every woman, every occasion, every body.',
  keywords: ['personal stylist', 'fashion guide', 'outfit ideas', 'capsule wardrobe', 'what to wear', 'style tips women'],
  verification: {
    google: 'v9fb-JiTMvkHcxCMF',
  },
  other: {
    'p:domain_verify': 'c4d58b4c8b49f1f1f37420d23dc4b510',
    'google-adsense-account': 'ca-pub-8049649445649586',
  },
  openGraph: {
    type: 'website', locale: 'en_US', url: 'https://stylemedaily.com', siteName: 'StyleMeDaily',
    title: 'StyleMeDaily – Personal Style Guides for Every Woman',
    description: 'Expert styling guides, curated outfit ideas, and personalized fashion advice.',
  },
  twitter: { card: 'summary_large_image', site: '@stylemedaily', creator: '@stylemedaily' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream antialiased">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8049649445649586"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://s.skimresources.com/js/298887X1786506.skimlinks.js"
          strategy="afterInteractive"
        />
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

  verification: {
    google: 'v9fb-JiTMvkHcxCMF',
  },
  other: {
    'p:domain_verify': 'c4d58b4c8b49f1f1f37420d23dc4b510',
    'google-adsense-account': 'ca-pub-8049649445649586',
  },
  openGraph: {
    type: 'website', locale: 'en_US', url: 'https://stylemedaily.com', siteName: 'StyleMeDaily',
    title: 'StyleMeDaily – Personal Style Guides for Every Woman',
    description: 'Expert styling guides, curated outfit ideas, and personalized fashion advice.',
  },
  twitter: { card: 'summary_large_image', site: '@stylemedaily', creator: '@stylemedaily' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream antialiased">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8049649445649586"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
