import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Star } from 'lucide-react';
import { HeroSeoGraphic } from './illustrations/HeroSeoGraphic';
import { QuickAuditScanner } from './QuickAuditScanner';

interface HeroProps {
  onOpenAudit: (prefillUrl?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  const whatsappUrl = "https://wa.me/923376248458?text=Hello%20Sanjose%20SEO%2C%20I%20would%20like%20to%20discuss%20SEO%20services%20for%20my%20business.";

  const WhatsAppIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.1.55 4.15 1.6 5.96L.1 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.24-6.16-3.45-8.44ZM12.09 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.23-.38a9.88 9.88 0 0 1-1.52-5.28C2.2 6.43 6.63 2 12.08 2c2.64 0 5.12 1.03 6.98 2.9a9.87 9.87 0 0 1 2.9 7c0 5.45-4.43 9.9-9.87 9.9Zm5.42-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.57-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.5.71.31 1.27.5 1.7.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );

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

            {/* Action Buttons with WhatsApp Direct Option */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                id="hero-primary-audit-btn"
                onClick={() => onOpenAudit()}
                className="bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#0A2540] hover:from-[#1E40AF] hover:to-[#2563EB] text-white px-7 py-4 rounded-xl font-bold shadow-[0_8px_25px_rgba(10,37,64,0.3)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base border border-[#D4AF37]/50"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Start Your SEO Journey</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#25D366]/70 bg-[#F2FFF6] dark:bg-[#0A2540] text-[#0A2540] dark:text-white hover:bg-[#DCFCE7] dark:hover:bg-[#133358] px-6 py-4 rounded-xl font-bold transition-all text-center flex items-center justify-center gap-2 text-sm sm:text-base shadow-xs hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
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

            {/* Local Client Rating Snippet */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" 
                  alt="Client avatar" 
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 rounded-full border-2 border-white dark:border-[#07172C] object-cover" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" 
                  alt="Client avatar" 
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 rounded-full border-2 border-white dark:border-[#07172C] object-cover" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&q=80" 
                  alt="Client avatar" 
                  referrerPolicy="no-referrer"
                  className="w-8 h-8 rounded-full border-2 border-white dark:border-[#07172C] object-cover" 
                />
              </div>
              <div className="text-xs">
                <div className="flex items-center text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                  <span className="ml-1.5 font-bold text-[#0A2540] dark:text-white">5.0 Client Rating</span>
                </div>
                <span className="text-[#627D98] dark:text-slate-400 font-medium">Trusted by leading businesses across San Jose & Silicon Valley</span>
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


