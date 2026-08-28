import App from '../../src/App';
import type { Metadata } from 'next';

const pageMetadata: Record<string, Metadata> = {
  services: { title: 'SEO Services in San Jose | Technical, Local & Content SEO', description: 'Explore technical, local, content, and Google Maps SEO services for San Jose businesses.', alternates: { canonical: '/services' } },
  'local-seo': { title: 'Local SEO San Jose CA | Google Maps & Local Search', description: 'Local SEO and Google Maps optimization strategies for businesses serving San Jose and Silicon Valley.', alternates: { canonical: '/local-seo' } },
  'national-seo': { title: 'National SEO Services | Organic Search Growth', description: 'Build sustainable national organic visibility with technical SEO, content, and authority strategies.', alternates: { canonical: '/national-seo' } },
  process: { title: 'Our SEO Process | San Jose SEO Services', description: 'See how Sanjose SEO Services plans, executes, and reports on search optimization work.', alternates: { canonical: '/process' } },
  results: { title: 'SEO Results & ROI Planning | San Jose SEO Services', description: 'Use a transparent SEO planning model to understand visitors, leads, customers, and revenue estimates.', alternates: { canonical: '/results' } },
  faqs: { title: 'SEO FAQ | San Jose SEO Services', description: 'Answers to common questions about local SEO, technical SEO, timelines, pricing, and measurement.', alternates: { canonical: '/faqs' } },
  about: { title: 'About Our San Jose SEO Team', description: 'Learn about Sanjose SEO Services, our methodology, and our focus on San Jose and Silicon Valley businesses.', alternates: { canonical: '/about' } },
  contact: { title: 'Contact San Jose SEO Services', description: 'Contact Sanjose SEO Services to discuss your business, search visibility, and SEO goals.', alternates: { canonical: '/contact' } },
  privacy: { title: 'Privacy Policy | Sanjose SEO Services', description: 'Read the Sanjose SEO Services privacy policy.', alternates: { canonical: '/privacy' } },
  terms: { title: 'Terms of Service | Sanjose SEO Services', description: 'Read the Sanjose SEO Services terms of service.', alternates: { canonical: '/terms' } },
};

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata[slug?.[0] || ''] || {};
}

export default function Page() {
  return <App />;
}
