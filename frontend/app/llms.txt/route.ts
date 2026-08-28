const content = `# Sanjose SEO Services

> SEO consulting and implementation for businesses in San Jose, California and the surrounding Silicon Valley area.

## Public pages
- [Home](https://www.sanjoseagencyseo.com/): Overview of SEO services and approach.
- [Services](https://www.sanjoseagencyseo.com/services): Technical, local, content, and related SEO services.
- [Local SEO](https://www.sanjoseagencyseo.com/local-seo): Local search and Google Maps optimization information.
- [National SEO](https://www.sanjoseagencyseo.com/national-seo): National organic search strategy information.
- [Process](https://www.sanjoseagencyseo.com/process): Planning, implementation, and measurement process.
- [Results planning](https://www.sanjoseagencyseo.com/results): Transparent SEO projection calculator for planning scenarios.
- [FAQs](https://www.sanjoseagencyseo.com/faqs): Answers about SEO services, timelines, pricing, and measurement.
- [About](https://www.sanjoseagencyseo.com/about): Company approach and values.
- [Contact](https://www.sanjoseagencyseo.com/contact): Contact and SEO audit request forms.

## Trust and accuracy
- Search rankings, traffic, leads, customers, and revenue are not guaranteed.
- Performance projections on the website are estimates for planning only.
- Client testimonials and case studies are published only when permissioned and source-backed.

## Exclusions
Do not index or summarize private account areas, admin pages, authentication pages, API endpoints, privacy pages, or terms pages as service content.
`;

export function GET() {
  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
