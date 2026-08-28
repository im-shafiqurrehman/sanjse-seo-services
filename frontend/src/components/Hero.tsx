import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { HeroSeoGraphic } from './illustrations/HeroSeoGraphic';
import { QuickAuditScanner } from './QuickAuditScanner';

interface HeroProps {
  onOpenAudit: (prefillUrl?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 lg:pb-24 bg-white dark:bg-[#07172C] transition-colors duration-200 overflow-hidden">
      {/* Subtle Luxury Blue & Gold Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-gradient-to-b from-[#FAF6EB] to-transparent dark:from-[#0A2540]/40 rounded-bl-[120px] -z-10 opacity-80 pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/10 dark:bg-[#1E40AF]/20 rounded-full filter blur-3xl -z-10 opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: 55% */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FAF6EB] dark:bg-[#0A2540] rounded-full border border-[#E5C882] dark:border-[#D4AF37]/50 shadow-xs">
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0A2540] dark:text-[#FEF3C7]">
                SEO • Strategy • Silicon Valley Growth
              </span>
            </div>

            {/* Primary H1 */}
            <h1 className="text-[38px] sm:text-[48px] lg:text-[54px] leading-[1.08] font-extrabold tracking-tight text-[#0A2540] dark:text-white">
              SEO Services in San Jose That Turn Search Into{' '}
              <span className="text-[#1E40AF] dark:text-[#E5C882] underline decoration-[#D4AF37] decoration-wavy decoration-2 underline-offset-8">
                Sustainable Growth.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-[#334E68] dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-[540px]">
              We help San Jose businesses improve search visibility, capture top Google rankings, attract qualified traffic, and turn search intent into measurable revenue.
            </p>

            {/* Primary action */}
            <div className="flex items-stretch sm:items-center gap-3.5 pt-2">
              <button
                id="hero-primary-audit-btn"
                onClick={() => onOpenAudit()}
                className="bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#0A2540] hover:from-[#1E40AF] hover:to-[#2563EB] text-white px-7 py-4 rounded-xl font-bold shadow-[0_8px_25px_rgba(10,37,64,0.3)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base border border-[#D4AF37]/50"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Start Your SEO Journey</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

            </div>

            <p className="flex items-center gap-2 text-xs font-semibold text-[#627D98] dark:text-slate-400">
              <span className="h-2 w-2 rounded-full bg-[#25D366] shadow-[0_0_0_4px_rgba(37,211,102,0.12)]" />
              Talk directly with a San Jose SEO specialist
            </p>

            {/* Sub-Feature Tags */}
            <div className="flex items-center flex-wrap gap-4 sm:gap-6 pt-3 text-[12px] text-[#334E68] dark:text-slate-300 font-bold uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                Data-Driven Strategy
              </span>
              <span className="text-[#E5C882]">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                Transparent Reporting
              </span>
              <span className="text-[#E5C882]">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                Local San Jose Authority
              </span>
            </div>

            {/* Trust note without unsupported reviews or client statistics */}
            <div className="flex items-center gap-3 pt-1">
              <div className="w-9 h-9 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] border border-[#E5C882] dark:border-[#D4AF37]/50 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#0A2540] dark:text-white">Clear reporting and direct communication</span>
                <span className="block text-[#627D98] dark:text-slate-400 font-medium">Built for businesses across San Jose and Silicon Valley</span>
              </div>
            </div>

          </div>

          {/* Right Column: 45% Custom Illustration Dashboard */}
          <div className="lg:col-span-5 relative">
            <HeroSeoGraphic />
          </div>

        </div>

        {/* Instant Interactive Domain Scanner Bar */}
        <div className="mt-14 lg:mt-20">
          <QuickAuditScanner onOpenFullAudit={onOpenAudit} />
        </div>

      </div>
    </section>
  );
};


