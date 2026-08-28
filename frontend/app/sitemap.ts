import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.sanjoseagencyseo.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/local-seo', '/national-seo', '/process', '/results', '/faqs', '/about', '/contact', '/privacy', '/terms'];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
