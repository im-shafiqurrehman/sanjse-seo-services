import React from 'react';
import { AboutGraphic } from './illustrations/AboutGraphic';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface WhySanjseSectionProps {
  onOpenAudit: () => void;
}

export const WhySanjseSection: React.FC<WhySanjseSectionProps> = ({ onOpenAudit }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white dark:bg-[#07172C] transition-colors duration-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#FEF3C7] text-xs font-bold border border-[#E5C882] dark:border-[#D4AF37]/50 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Agency Values & Execution</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2540] dark:text-white tracking-tight leading-tight">
              SEO Built on Strategy, Data & Measurable Results
            </h2>

            <p className="text-base text-[#334E68] dark:text-slate-300 leading-relaxed">
              At Sanjose SEO Services, we believe high search rankings shouldn’t be a mystery or a game of risky shortcuts. Modern search engine algorithms reward websites that offer superior user experience, fast technical foundations, and genuinely helpful content that answers searcher intent.
            </p>

            <p className="text-sm text-[#334E68] dark:text-slate-300 leading-relaxed">
              Serving businesses across San Jose, Silicon Valley, and the greater Bay Area, our team unites technical web developers, seasoned conversion copywriters, and local SEO analysts to execute cohesive campaigns that drive real phone calls, qualified sales inquiries, and sustainable revenue.
            </p>

            {/* Core Values Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#E5C882] border border-[#E5C882] dark:border-[#D4AF37]/40 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-2xs">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0A2540] dark:text-white">100% White-Hat Google Compliance</h4>
                  <p className="text-xs text-[#334E68] dark:text-slate-300">We never use private blog networks (PBNs) or automated spam links that risk Google manual penalties.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#E5C882] border border-[#E5C882] dark:border-[#D4AF37]/40 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-2xs">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0A2540] dark:text-white">Live Transparent Reporting Dashboards</h4>
                  <p className="text-xs text-[#334E68] dark:text-slate-300">Access a Google Looker Studio dashboard showing agreed search and lead measures.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#E5C882] border border-[#E5C882] dark:border-[#D4AF37]/40 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-2xs">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0A2540] dark:text-white">Custom Strategy for Every San Jose Client</h4>
                  <p className="text-xs text-[#334E68] dark:text-slate-300">No generic cookie-cutter plans. Every campaign is built around your specific competitors and revenue goals.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAudit}
                className="px-7 py-3.5 bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#0A2540] hover:from-[#1E40AF] hover:to-[#2563EB] text-white text-sm font-bold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer border border-[#D4AF37]/50"
              >
                <span>Schedule a 1-on-1 Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>

          </div>

          {/* Right Column: Custom Graphics */}
          <div className="lg:col-span-6">
            <AboutGraphic />
          </div>

        </div>

      </div>
    </section>
  );
};


