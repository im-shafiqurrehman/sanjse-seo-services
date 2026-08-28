export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  badge?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  shortDesc: string;
  details: string[];
  timeline: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  category: 'Local Business' | 'Tech & B2B' | 'Professional Services' | 'Retail & E-commerce';
  location: string;
  avatarUrl: string;
  rating: number;
  quote: string;
  resultMetric: string;
  resultLabel: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  monthlyPrice: string;
  period: string;
  idealFor: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General SEO' | 'Local SEO & Maps' | 'Pricing & ROI' | 'Technical & Web';
}

export interface AuditFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  websiteUrl: string;
  primaryGoal: string;
  currentTraffic: string;
  message: string;
}

export interface LocalArea {
  name: string;
  type: string;
  highlight: string;
}
