import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../src/index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sanjoseagencyseo.com'),
  title: 'SEO Services San Jose | Local SEO & Digital Marketing | Sanjose SEO Services',
  description: 'Looking for SEO services in San Jose? Get expert local SEO and search engine optimization to rank higher on Google, attract more local customers, and grow your business.',
  keywords: ['SEO services San Jose', 'local SEO San Jose', 'technical SEO San Jose', 'Google Maps SEO San Jose'],
  openGraph: {
    title: 'SEO Services San Jose | Sanjose SEO Services',
    description: 'Looking for SEO services in San Jose? Get expert local SEO and search engine optimization to rank higher on Google, attract more local customers, and grow your business.',
    type: 'website',
    url: 'https://www.sanjoseagencyseo.com',
  },
  alternates: { canonical: 'https://www.sanjoseagencyseo.com' },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Sanjose SEO Services',
  description: 'Looking for SEO services in San Jose? Get expert local SEO and search engine optimization to rank higher on Google, attract more local customers, and grow your business.',
  url: 'https://www.sanjoseagencyseo.com',
  image: 'https://www.sanjoseagencyseo.com/og-image.jpg',
  priceRange: '$$',
  areaServed: {
    '@type': 'City',
    name: 'San Jose',
    addressCountry: 'US',
  },
  serviceType: ['Local SEO', 'Technical SEO', 'SEO Audit', 'Google Business Profile Optimization'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    availableLanguage: 'English',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-[#0F172A] antialiased selection:bg-[#FEF3C7] selection:text-[#1E40AF] font-['Manrope',sans-serif]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
