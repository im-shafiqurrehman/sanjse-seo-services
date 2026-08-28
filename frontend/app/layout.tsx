import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../src/index.css';

export const metadata: Metadata = {
  title: 'SEO Services San Jose | Local SEO & Digital Marketing | Sanjose SEO Services',
  description: 'Sanjose SEO Services helps San Jose businesses improve search visibility, attract qualified organic traffic, and grow with data-driven SEO strategies, local SEO, and technical optimization.',
  keywords: ['SEO services San Jose', 'local SEO San Jose', 'technical SEO San Jose', 'Google Maps SEO San Jose'],
  openGraph: {
    title: 'SEO Services San Jose | Sanjose SEO Services',
    description: 'Helping San Jose businesses get found, grow traffic, and turn search demand into sustainable revenue with data-driven SEO.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-[#0F172A] antialiased selection:bg-[#FEF3C7] selection:text-[#1E40AF] font-['Manrope',sans-serif]">
        {children}
      </body>
    </html>
  );
}
