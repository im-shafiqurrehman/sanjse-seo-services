import React from 'react';
import { MapPin, Clock, Mail } from 'lucide-react';
import { contactEmail } from '../lib/contact';

interface FooterProps {
  onOpenAudit: (servicePrefill?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit }) => {
  return (
    <footer className="bg-white dark:bg-[#061528] border-t border-[#E2E8F0] dark:border-[#1E3A8A] text-[#0A2540] dark:text-white pt-16 pb-12 relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#E2E8F0] dark:border-[#1E3A8A]">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0A2540] to-[#1E40AF] dark:from-[#D4AF37] dark:to-[#E5C882] rounded-lg flex items-center justify-center shadow-2xs border border-[#E5C882]/50">
                <div className="w-3.5 h-3.5 border-2 border-[#E5C882] dark:border-[#0A2540] rounded-xs"></div>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-[#0A2540] dark:text-white">
                  Sanjose<span className="text-[#D4AF37] font-semibold">SEO</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#627D98] dark:text-slate-400 block -mt-1">
                  San Jose, California
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-[#334E68] dark:text-slate-300 leading-relaxed max-w-sm">
              Helping businesses in San Jose and Silicon Valley get found on Google, attract qualified local search traffic, and turn search intent into sustainable revenue.
            </p>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A2540] dark:text-[#E5C882]">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#334E68] dark:text-slate-300">
              <li><a href="/" className="hover:text-[#1E40AF] dark:hover:text-[#E5C882] transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-[#1E40AF] dark:hover:text-[#E5C882] transition-colors">About Sanjose</a></li>
              <li><a href="/services" className="hover:text-[#1E40AF] dark:hover:text-[#E5C882] transition-colors">All Services</a></li>
              <li><a href="/process" className="hover:text-[#1E40AF] dark:hover:text-[#E5C882] transition-colors">SEO Process</a></li>
              <li><a href="/results" className="hover:text-[#1E40AF] dark:hover:text-[#E5C882] transition-colors">Results & ROI</a></li>
              <li><a href="/national-seo" className="hover:text-[#1E40AF] dark:hover:text-[#E5C882] transition-colors">National SEO (ART)</a></li>
              <li><a href="/faqs" className="hover:text-[#1E40AF] dark:hover:text-[#E5C882] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Column 3: SEO Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A2540] dark:text-[#E5C882]">
              SEO Solutions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#334E68] dark:text-slate-300">
              <li>
                <button onClick={() => onOpenAudit('Local SEO San Jose')} className="hover:text-[#1E40AF] dark:hover:text-[#E5C882] transition-colors text-left cursor-pointer">
                  Local SEO San Jose
                </button>
              </li>
              <li>
                <button onClick={() => onOpenAudit('Google Maps SEO')} className="hover:text-[#1E40AF] dark:hover:text-[#E5C882] transition-colors text-left cursor-pointer">
                  Google Maps 3-Pack Optimization
                </button>
              </li>
              <li>
                <button onClick={() => onOpenAudit('Technical SEO')} className="hover:text-[#1E40AF] dark:hover:text-[#E5C882] transition-colors text-left cursor-pointer">
                  Technical SEO & Core Web Vitals
                </button>
              </li>
              <li>
                <button onClick={() => onOpenAudit('Keyword Research')} className="hover:text-[#1E40AF] dark:hover:text-[#E5C882] transition-colors text-left cursor-pointer">
                  Keyword Research & Mapping
                </button>
              </li>
              <li>
                <button onClick={() => onOpenAudit('SEO-Friendly Web Design')} className="hover:text-[#1E40AF] dark:hover:text-[#E5C882] transition-colors text-left cursor-pointer">
                  SEO-Friendly Web Design
                </button>
              </li>
              <li>
                <button onClick={() => onOpenAudit('SEO Audit')} className="hover:text-[#1E40AF] dark:hover:text-[#E5C882] transition-colors text-left font-bold text-[#0A2540] dark:text-[#FEF3C7] cursor-pointer">
                  Free 15-Point SEO Audit →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A2540] dark:text-[#E5C882]">
              Location & Hours
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#334E68] dark:text-slate-300">
              <a href={`mailto:${contactEmail}`} className="flex items-start gap-2 hover:text-[#1E40AF] dark:hover:text-[#E5C882] transition-colors">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="min-w-0 break-words">{contactEmail}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>100 S 1st St, San Jose, CA 95113</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#627D98] dark:text-slate-400">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Mon – Fri: 8:30 AM – 6:00 PM San Jose time</span>
              </div>
            </div>
          </div>

        </div>

        {/* Local Neighborhoods SEO Footprint Index */}
        <div className="py-6 border-b border-[#E2E8F0] dark:border-[#1E3A8A] text-xs text-[#627D98] dark:text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="font-semibold text-[#0A2540] dark:text-white">Areas We Serve in Santa Clara County:</span>
          <div className="flex flex-wrap gap-2 text-[11px] text-[#627D98] dark:text-slate-400">
            <span>Downtown San Jose</span> •
            <span>Willow Glen</span> •
            <span>Santana Row</span> •
            <span>North San Jose</span> •
            <span>Almaden Valley</span> •
            <span>Santa Clara</span> •
            <span>Campbell</span> •
            <span>Sunnyvale</span> •
            <span>Cupertino</span> •
            <span>Milpitas</span>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#627D98] dark:text-slate-400">
          <p>© 2026 Sanjose SEO Services. All rights reserved. Clean, minimal, high-performance SEO.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-[#0A2540] dark:hover:text-[#E5C882] transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#0A2540] dark:hover:text-[#E5C882] transition-colors">Terms of Service</a>
            <a href="/sitemap.xml" className="hover:text-[#0A2540] dark:hover:text-[#E5C882] transition-colors">XML Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

