import React from 'react';
import { DollarSign, Zap, CheckCircle, ArrowRight, Sparkles, Building2, Target } from 'lucide-react';

interface SmallBusinessSeoSectionProps {
  onOpenAudit: (servicePrefill?: string) => void;
}

export const SmallBusinessSeoSection: React.FC<SmallBusinessSeoSectionProps> = ({ onOpenAudit }) => {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#07172C] transition-colors duration-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#FEF3C7] text-xs font-bold mb-3.5 border border-[#E5C882] dark:border-[#D4AF37]/50 shadow-2xs">
            <Target className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Small Business Growth Accelerator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2540] dark:text-white tracking-tight">
            Small Business SEO in San Jose
          </h2>
          <p className="text-base sm:text-lg text-[#334E68] dark:text-slate-300 mt-4 leading-relaxed">
            You don’t need a massive enterprise budget to win on Google. We help independent San Jose businesses, professional service firms, and local clinics outrank corporate competitors with high-intent localized search strategies.
          </p>
        </div>

        {/* 3 Value Pillars for Small Businesses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white dark:bg-[#0E2F54] p-7 rounded-2xl border border-[#E2E8F0] dark:border-[#1E3A8A] shadow-sm hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#FAF6EB] dark:bg-[#0A2540] text-[#1E40AF] dark:text-[#E5C882] flex items-center justify-center mb-5 border border-[#E5C882] dark:border-[#D4AF37]/40 shadow-xs">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0A2540] dark:text-white">
              Budget-Focused High ROI
            </h3>
            <p className="text-sm text-[#334E68] dark:text-slate-300 mt-2.5 leading-relaxed">
              Paid Google Ads stop generating leads the second you turn off your ad spend. Our organic SEO strategies compound in value, lowering your cost per lead month after month.
            </p>
            <ul className="mt-5 space-y-2 text-xs text-[#0A2540] dark:text-slate-200 pt-4 border-t border-[#E2E8F0] dark:border-[#1E3A8A] font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Zero waste on irrelevant clicks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Transparent fixed monthly pricing</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-[#0E2F54] p-7 rounded-2xl border border-[#E2E8F0] dark:border-[#1E3A8A] shadow-sm hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#FAF6EB] dark:bg-[#0A2540] text-[#1E40AF] dark:text-[#E5C882] flex items-center justify-center mb-5 border border-[#E5C882] dark:border-[#D4AF37]/40 shadow-xs">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0A2540] dark:text-white">
              Fast Agile Execution
            </h3>
            <p className="text-sm text-[#334E68] dark:text-slate-300 mt-2.5 leading-relaxed">
              Large corporate agencies move slowly with bloated account management layers. At Sanjose, you work directly with experienced SEO specialists who fix issues and push updates rapidly.
            </p>
            <ul className="mt-5 space-y-2 text-xs text-[#0A2540] dark:text-slate-200 pt-4 border-t border-[#E2E8F0] dark:border-[#1E3A8A] font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Direct WhatsApp & phone communication</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Rapid Core Web Vitals resolution</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-[#0E2F54] p-7 rounded-2xl border border-[#E2E8F0] dark:border-[#1E3A8A] shadow-sm hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#FAF6EB] dark:bg-[#0A2540] text-[#1E40AF] dark:text-[#E5C882] flex items-center justify-center mb-5 border border-[#E5C882] dark:border-[#D4AF37]/40 shadow-xs">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0A2540] dark:text-white">
              Local San Jose Edge
            </h3>
            <p className="text-sm text-[#334E68] dark:text-slate-300 mt-2.5 leading-relaxed">
              We leverage your local presence with localized reviews, neighborhood citations, and geo-targeted schema markup that big national franchises simply cannot replicate.
            </p>
            <ul className="mt-5 space-y-2 text-xs text-[#0A2540] dark:text-slate-200 pt-4 border-t border-[#E2E8F0] dark:border-[#1E3A8A] font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Targeted San Jose sub-market rankings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Hyper-targeted "near me" capture</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Small Business Quick Action Card */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenAudit('Small Business SEO San Jose')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#0A2540] hover:from-[#1E40AF] hover:to-[#2563EB] text-white text-sm sm:text-base font-bold rounded-xl shadow-md transition-all cursor-pointer border border-[#D4AF37]/50"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Get a Small Business SEO Assessment</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </button>
        </div>

      </div>
    </section>
  );
};


