import { ServiceItem, ProcessStep, Testimonial, PricingPlan, FaqItem, LocalArea } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'technical-seo',
    number: '01',
    title: 'Technical SEO & Core Web Vitals',
    shortDesc: 'Eliminate crawl bottlenecks, fix indexing flaws, accelerate page speed, and ensure structured data accuracy for peak search engine crawling.',
    fullDesc: 'Technical SEO forms the foundation of your organic search performance. We audit and optimize site architecture, mobile viewport rendering, HTTPS security, XML sitemaps, canonical tags, schema markup, and Google Core Web Vitals (LCP, INP, CLS) to make sure search engine crawlers can index every valuable page without hindrance.',
    iconName: 'Cpu',
    features: ['Crawl budget & indexation fixes', 'Core Web Vitals acceleration', 'Schema.org structured data markup', 'JavaScript SEO & hydration audit', 'Broken redirect & canonical repair'],
    deliverables: ['Full 50+ Point Technical Audit', 'Implementation Roadmap for Devs', 'Monthly Core Web Vitals Report'],
    badge: 'Foundation'
  },
  {
    id: 'on-page-seo',
    number: '02',
    title: 'On-Page SEO & Content Intent',
    shortDesc: 'Optimize title tags, meta descriptions, semantic header structures, internal link flows, and keyword placement aligned with searcher intent.',
    fullDesc: 'We fine-tune every on-page element so Google and searchers understand your topical authority immediately. We craft compelling meta titles, structured H1-H4 hierarchies, keyword mapping, semantic entity enrichment, and context-rich internal linking that keeps visitors engaged.',
    iconName: 'FileCode2',
    features: ['Search intent alignment & mapping', 'Title tag & meta description optimization', 'Semantic heading & entity enrichment', 'Internal linking architecture', 'Image compression & alt optimization'],
    deliverables: ['Keyword-to-URL Mapping Matrix', 'Optimized Metadata Copy Deck', 'Content Gap Analysis Report']
  },
  {
    id: 'keyword-research',
    number: '03',
    title: 'Keyword Research & Competitor Gap Analysis',
    shortDesc: 'Uncover high-intent transactional search queries, commercial keywords, and local search terms your competitors are overlooking.',
    fullDesc: 'Effective SEO starts with knowing what your customers actually type into the search bar. We analyze search volume, keyword difficulty, business value, and competitor organic footprints across San Jose and national markets to target revenue-driving queries.',
    iconName: 'Search',
    features: ['High-intent transactional keywords', 'Competitor keyword theft analysis', 'Long-tail & voice search opportunities', 'Search intent classification', 'Search volume & difficulty forecasting'],
    deliverables: ['Custom Keyword Master Sheet', 'Competitor Keyword Gap Matrix', 'Priority Content Roadmap']
  },
  {
    id: 'content-seo',
    number: '04',
    title: 'Content Strategy & Topical Authority',
    shortDesc: 'Produce authoritative, people-first content clusters that establish industry thought leadership and rank for competitive head terms.',
    fullDesc: 'Google rewards comprehensive, helpful, and experienced content. We build topic clusters, helpful guide frameworks, and service landing pages that answer genuine customer questions while demonstrating real-world expertise and driving natural backlinks.',
    iconName: 'PenTool',
    features: ['E-E-A-T guideline implementation', 'Topic cluster & pillar page planning', 'Editorial content brief generation', 'Content refreshing & decay prevention', 'Call-to-action conversion optimization'],
    deliverables: ['Quarterly Content Editorial Calendar', 'Pillar & Cluster Wireframes', 'Published High-Authority Articles']
  },
  {
    id: 'local-seo',
    number: '05',
    title: 'Local SEO & Google Maps Optimization',
    shortDesc: 'Dominate Google Maps 3-Pack rankings, location-based queries, and "near me" searches across San Jose and surrounding Bay Area communities.',
    fullDesc: 'For businesses serving San Jose, Willow Glen, Campbell, Santa Clara, and Silicon Valley, Local SEO is the fastest way to drive inbound calls and foot traffic. We optimize your Google Business Profile (GBP), sync NAP citations across 80+ directories, manage local reviews, and build geotargeted landing pages.',
    iconName: 'MapPin',
    features: ['Google Business Profile (GBP) 3-Pack optimization', 'Local citation & NAP consistency building', 'Geotargeted service landing pages', 'Review generation & reputation guidance', 'Local link & community sponsorship outreach'],
    deliverables: ['GBP Audit & Complete Setup', 'Local Citation Sync in 80+ Directories', 'Local Rank Grid & Heatmap Tracking'],
    badge: 'High Inbound ROI'
  },
  {
    id: 'seo-audits',
    number: '06',
    title: 'Comprehensive SEO Audits & Roadmap',
    shortDesc: 'Identify algorithmic penalties, ranking drops, competitor strengths, and high-impact revenue opportunities with clear action steps.',
    fullDesc: 'Whether your website suffered a sudden Google algorithm drop or plateaued in rankings, our comprehensive audit provides a clear diagnostic. We inspect technical health, on-page factors, backlink toxicity, and competitor positioning with a prioritized sprint roadmap.',
    iconName: 'BarChart3',
    features: ['Algorithmic penalty recovery analysis', 'Backlink profile health & toxic link audit', 'Competitor organic benchmarking', 'Conversion rate optimization (CRO) review', 'Prioritized 90-day action plan'],
    deliverables: ['Executive Summary Deck (PDF)', 'Developer Action Item Checklist', '1-on-1 Strategy Review Meeting']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover & Deep Audit',
    shortDesc: 'We analyze your current website performance, historical rankings, technical infrastructure, target audience, and local competitors in San Jose.',
    details: [
      'Comprehensive technical health crawl & indexation review',
      'Benchmark current organic visibility, keyword positions, and traffic',
      'Analyze competitor strengths, backlink gaps, and content deficits'
    ],
    timeline: 'Week 1 - 2'
  },
  {
    step: '02',
    title: 'Strategize & Roadmap',
    shortDesc: 'We construct a customized, prioritized SEO strategy based on commercial intent, high-value keyword opportunities, and quick-win technical fixes.',
    details: [
      'Keyword mapping aligned with transactional & informational search intent',
      'Information architecture & URL structure optimization plan',
      'Clear 90-day execution milestone calendar with priority deliverables'
    ],
    timeline: 'Week 3'
  },
  {
    step: '03',
    title: 'Optimize & Execute',
    shortDesc: 'We implement on-page enhancements, fix Core Web Vitals, optimize your Google Business Profile, and publish high-authority topic clusters.',
    details: [
      'On-page title, meta, schema, and internal link improvements',
      'Technical speed optimization, server cache tuning, and mobile fixes',
      'Local citation synchronization and Google Maps 3-Pack optimization'
    ],
    timeline: 'Week 4 - 8'
  },
  {
    step: '04',
    title: 'Grow, Measure & Scale',
    shortDesc: 'We track real keyword movements, monitor lead conversions, provide transparent reporting dashboards, and continuously iterate to capture more market share.',
    details: [
      'Weekly ranking monitors and Google Analytics 4 conversion tracking',
      'Transparent, jargon-free monthly executive reporting calls',
      'Continuous link authority building and new keyword expansion'
    ],
    timeline: 'Ongoing Growth'
  }
];

export const LOCAL_SAN_JOSE_AREAS: LocalArea[] = [
  { name: 'Downtown San Jose', type: 'Urban Core & Tech Hub', highlight: 'High commercial intent & professional services search volume' },
  { name: 'Willow Glen', type: 'Historic Retail & Dining', highlight: 'Dominant local consumer "near me" searches & boutique foot traffic' },
  { name: 'Santana Row / Valley Fair', type: 'Luxury Shopping & Lifestyle', highlight: 'High-volume retail, medical spa & premium dining queries' },
  { name: 'North San Jose / Silicon Valley', type: 'B2B & Enterprise Tech', highlight: 'High-value SaaS, software, engineering & industrial terms' },
  { name: 'Almaden Valley', type: 'Residential & Family Services', highlight: 'Home improvement, dental, legal & educational services' },
  { name: 'Campbell & Los Gatos Border', type: 'South Bay Commerce', highlight: 'Competitive regional trades, fitness & auto repair searches' },
  { name: 'Santa Clara', type: 'Commercial & University District', highlight: 'B2B vendors, contractors & local hospitality search' },
  { name: 'Sunnyvale & Mountain View', type: 'Silicon Valley Corridor', highlight: 'High competition B2B technology & specialist services' },
  { name: 'Milpitas & Berryessa', type: 'East Bay Gateway', highlight: 'Industrial supply, local trade & multi-location business queries' }
];

export const TESTIMONIALS_DATA: Testimonial[] = [];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'local-growth',
    name: 'Local Growth Sprint',
    badge: 'Small Business & Local Services',
    monthlyPrice: '$1,250',
    period: 'per month / transparent billing',
    idealFor: 'Ideal for local businesses, clinics, contractors, and retail shops looking to dominate San Jose Google Maps and local search.',
    features: [
      'Complete Google Business Profile (GBP) optimization',
      'Local citation synchronization (80+ directories)',
      'Up to 25 target local & "near me" keywords tracked',
      'On-page optimization for up to 8 core service pages',
      'Technical health monitoring & speed audit',
      'Monthly localized review generation guidance',
      'Transparent monthly executive video report'
    ],
    popular: false,
    ctaText: 'Start Local Growth'
  },
  {
    id: 'growth-accelerate',
    name: 'Full SEO Accelerate',
    badge: 'Most Popular for Growth Companies',
    monthlyPrice: '$2,450',
    period: 'per month / 6-month recommended sprint',
    idealFor: 'Designed for competitive businesses, B2B firms, and multi-location companies ready to capture significant market share.',
    features: [
      'Comprehensive Technical SEO & Core Web Vitals fixes',
      'Up to 75 target commercial & transactional keywords',
      'On-page optimization for up to 25 strategic URLs',
      '2 In-depth authoritative content clusters produced monthly',
      'High-authority white-hat link acquisition & PR outreach',
      'Competitor rank tracking & keyword gap monitoring',
      'Custom Google Looker Studio live dashboard',
      'Bi-weekly strategy check-in & priority support'
    ],
    popular: true,
    ctaText: 'Claim Growth Plan'
  },
  {
    id: 'market-leader',
    name: 'Enterprise Market Leader',
    badge: 'Enterprise & Multi-Location',
    monthlyPrice: '$4,800',
    period: 'per month / tailored engagement',
    idealFor: 'For regional market leaders, high-competition industries, and SaaS brands demanding aggressive organic expansion.',
    features: [
      'Full-stack technical engineering & custom schema deployment',
      'Unlimited keyword tracking with multi-location segmentations',
      '4 Deep-dive high-authority content assets per month',
      'Dedicated digital PR & tier-1 editorial link acquisition',
      'Conversion Rate Optimization (CRO) & UX heatmaps',
      'Google Algorithm Penalty protection & proactive monitoring',
      'Dedicated Senior SEO Strategist & Slack channel access',
      'Weekly strategy calls & quarterly executive presentation'
    ],
    popular: false,
    ctaText: 'Contact for Enterprise'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General SEO',
    question: 'What are SEO services, and how do they help my business?',
    answer: 'Search Engine Optimization (SEO) is the practice of optimizing your website’s technical architecture, content quality, relevance, and authority so search engines like Google rank your pages higher for queries entered by potential customers. Rather than paying for every single click with ads, SEO builds permanent organic search visibility that brings consistent, qualified traffic to your website 24/7.'
  },
  {
    id: 'faq-2',
    category: 'General SEO',
    question: 'How long does it take for SEO to produce measurable results in San Jose?',
    answer: 'SEO is a compounding marketing channel. For local businesses and Google Maps optimization, clients typically begin seeing initial ranking improvements and increased calls within 60 to 90 days. For competitive organic head terms and comprehensive site overhauls, significant traffic and revenue growth typically materializes within 4 to 6 months of steady optimization.'
  },
  {
    id: 'faq-3',
    category: 'Local SEO & Maps',
    question: 'What is Local SEO and how does Google Maps 3-Pack optimization work?',
    answer: 'Local SEO focuses on optimizing your online footprint to capture searches with geographic intent, such as "dentist in San Jose" or "HVAC repair near me". Google Maps optimization involves verifying and optimizing your Google Business Profile (GBP), maintaining 100% consistent Name, Address, and Phone (NAP) citations across directory ecosystems, collecting authentic customer reviews, and optimizing on-page location signals.'
  },
  {
    id: 'faq-4',
    category: 'Pricing & ROI',
    question: 'How much do SEO services cost in San Jose?',
    answer: 'Professional SEO services in San Jose generally range from $1,250/month for focused local SEO to $2,450 – $5,000+/month for comprehensive regional or enterprise campaigns. Pricing depends on your website’s current health, industry competitiveness, and the speed at which you want to scale. At Sanjose SEO Services, we provide transparent, custom quotes with zero hidden fees.'
  },
  {
    id: 'faq-5',
    category: 'Local SEO & Maps',
    question: 'How can SEO help a small business in San Jose compete with large corporations?',
    answer: 'Small businesses have an enormous geographic advantage in local search. While national corporations have generic pages, a local San Jose business with optimized Google Business signals, genuine neighborhood reviews, and hyper-targeted localized content can consistently outrank massive corporations in the Google Maps 3-Pack and regional search results.'
  },
  {
    id: 'faq-6',
    category: 'Technical & Web',
    question: 'What is included in a Sanjose SEO Audit?',
    answer: 'Our comprehensive SEO audit evaluates over 50 crucial factors across your website: site crawlability, indexation status, mobile responsiveness, Core Web Vitals speed scores, title and meta tag health, schema markup, duplicate content, broken backlinks, Google Search Console errors, and keyword gap analysis against your top 3 local competitors.'
  },
  {
    id: 'faq-7',
    category: 'Technical & Web',
    question: 'Do you provide SEO-friendly Web Design and WordPress development?',
    answer: 'Yes! High-performing SEO requires a fast, clean, and mobile-friendly website foundation. We design and develop custom, ultra-fast websites on WordPress, Webflow, and modern React frameworks that come pre-configured with semantic HTML, optimized Core Web Vitals, structured schema markup, and conversion-focused layouts.'
  },
  {
    id: 'faq-8',
    category: 'Pricing & ROI',
    question: 'Can you guarantee rankings on Google?',
    answer: 'No agency can guarantee a specific Google ranking because search algorithms and competitors change. We use white-hat technical SEO, useful content, local optimization, and transparent reporting to improve search visibility and measure progress responsibly.'
  }
];
