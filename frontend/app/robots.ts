import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/signin', '/signup', '/profile', '/api/'],
    },
    sitemap: 'https://www.sanjoseagencyseo.com/sitemap.xml',
  };
}
