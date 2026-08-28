import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/seoData';
import { ServiceItem } from '../types';
import { 
  Cpu, 
  FileCode2, 
  Search, 
  PenTool, 
  MapPin, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Layout,
  X
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenAudit: (servicePrefill?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAudit }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-[#1E40AF] dark:text-[#E5C882]";
    switch (iconName) {
      case 'Cpu': return <Cpu className={iconClass} />;
      case 'FileCode2': return <FileCode2 className={iconClass} />;
      case 'Search': return <Search className={iconClass} />;
      case 'PenTool': return <PenTool className={iconClass} />;
      case 'MapPin': return <MapPin className={iconClass} />;
      case 'BarChart3': return <BarChart3 className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white dark:bg-[#07172C] transition-colors duration-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#FEF3C7] text-xs font-bold mb-3.5 border border-[#E5C882] dark:border-[#D4AF37]/50 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Full-Spectrum Search Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2540] dark:text-white tracking-tight">
            SEO Services That Drive Real Growth
          </h2>
          <p className="text-base sm:text-lg text-[#334E68] dark:text-slate-300 mt-4 leading-relaxed">
            From technical foundations to content authority and local Google Maps domination, we build SEO strategies engineered around measurable revenue outcomes for San Jose businesses.
          </p>
        </div>

        {/* 6 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-[#0E2F54] rounded-2xl border border-[#E2E8F0] dark:border-[#1E3A8A] p-7 shadow-[0_4px_20px_rgba(10,37,64,0.04)] hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Optional Service Badge */}
              {service.badge && (
                <span className="absolute top-6 right-6 text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-1 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#FEF3C7] border border-[#E5C882] dark:border-[#D4AF37]/50">
                  {service.badge}
                </span>
              )}

              <div>
                {/* Icon Container & Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-[#FAF6EB] dark:bg-[#0A2540] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-[#E5C882] dark:border-[#D4AF37]/40 shadow-xs">
                    {getIcon(service.iconName)}
                  </div>
                  {!service.badge && (
                    <span className="text-sm font-mono font-bold text-[#627D98] dark:text-slate-400">
                      {service.number}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0A2540] dark:text-white transition-colors group-hover:text-[#1E40AF] dark:group-hover:text-[#E5C882]">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#334E68] dark:text-slate-300 mt-3 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Features List */}
                <div className="mt-5 pt-5 border-t border-[#E2E8F0] dark:border-[#1E3A8A] space-y-2">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#0A2540] dark:text-slate-200 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="mt-6 pt-4 flex items-center justify-between border-t border-[#E2E8F0] dark:border-[#1E3A8A]/80">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-[#0A2540] dark:text-[#E5C882] hover:text-[#1E40AF] dark:hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Explore Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onOpenAudit(service.title)}
                  className="text-[11px] font-bold text-[#627D98] hover:text-[#0A2540] dark:hover:text-[#FEF3C7] transition-colors"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Integrated Digital Solutions: Web Design & Social Synergy Banner */}
        <div className="mt-16 bg-[#FAF6EB] dark:bg-[#0E2F54] border border-[#E5C882] dark:border-[#1E3A8A] rounded-2xl p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#0A2540] text-[#0A2540] dark:text-[#FEF3C7] text-xs font-bold border border-[#E5C882] dark:border-[#D4AF37]/50 shadow-xs">
                <Layout className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Web Development & Digital Synergy</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] dark:text-white">
                SEO-Friendly Web Design & Multi-Channel Marketing
              </h3>
              <p className="text-sm sm:text-base text-[#334E68] dark:text-slate-300 leading-relaxed">
                Great rankings require a high-speed, mobile-first website. We build custom, fast WordPress, Webflow, and React websites with clean code, lightning speed, and built-in schema markup. Coupled with targeted social media marketing in San Jose, your brand builds organic authority on all fronts.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-medium text-[#0A2540] dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Ultra-fast Core Web Vitals (under 1.2s LCP)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#0A2540] dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Mobile-first & conversion-optimized UI</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#0A2540] dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Pre-configured Local Schema JSON-LD</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#0A2540] dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>San Jose social media audience engagement</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white dark:bg-[#0A2540] p-6 rounded-xl border border-[#E5C882] dark:border-[#1E3A8A] shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] dark:border-[#1E3A8A]">
                <span className="text-xs font-extrabold text-[#0A2540] dark:text-white">Development & Marketing Specs</span>
                <span className="text-[11px] font-extrabold text-[#0A2540] dark:text-[#FEF3C7] bg-[#FAF6EB] dark:bg-[#133358] px-2.5 py-0.5 rounded-full border border-[#E5C882] dark:border-[#D4AF37]/50">
                  Full Service
                </span>
              </div>
              <div className="space-y-2 text-xs text-[#334E68] dark:text-slate-300">
                <p>• <strong>WordPress & Modern Web:</strong> Clean semantic HTML5, zero bloat, mobile-perfect styling.</p>
                <p>• <strong>Conversion Architecture:</strong> Clear CTAs, phone click-to-call, lead capture forms.</p>
                <p>• <strong>Social Media Brand Awareness:</strong> Targeted Instagram & LinkedIn amplification.</p>
              </div>
              <button
                onClick={() => onOpenAudit('Web Design & SEO Bundle')}
                className="w-full py-3.5 bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#0A2540] hover:from-[#1E40AF] hover:to-[#2563EB] text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer border border-[#D4AF37]/50"
              >
                <span>Inquire About Web + SEO Bundle</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-[#0A2540]/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#0E2F54] rounded-2xl border border-[#E5C882] dark:border-[#1E3A8A] max-w-xl w-full p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-[#627D98] hover:text-[#0A2540] dark:hover:text-white hover:bg-[#FAF6EB] dark:hover:bg-[#0A2540] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF6EB] dark:bg-[#0A2540] flex items-center justify-center text-[#0A2540] dark:text-white border border-[#E5C882] dark:border-[#D4AF37]/50">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-[#627D98] dark:text-slate-400 uppercase tracking-wider">
                  Service {selectedService.number} Details
                </span>
                <h3 className="text-xl font-bold text-[#0A2540] dark:text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#334E68] dark:text-slate-300 leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="mb-6 space-y-2">
              <h4 className="text-xs font-bold text-[#0A2540] dark:text-white uppercase tracking-wider">
                What’s Included in This Service:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {selectedService.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#0A2540] dark:text-slate-200 p-2 bg-[#FAF6EB] dark:bg-[#0A2540]/80 rounded-lg border border-[#E5C882] dark:border-[#1E3A8A]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-[#0A2540] dark:text-white uppercase tracking-wider mb-2">
                Tangible Deliverables:
              </h4>
              <div className="space-y-1.5">
                {selectedService.deliverables.map((deliv, i) => (
                  <div key={i} className="text-xs text-[#334E68] dark:text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#E2E8F0] dark:border-[#1E3A8A]">
              <button
                onClick={() => {
                  const sTitle = selectedService.title;
                  setSelectedService(null);
                  onOpenAudit(sTitle);
                }}
                className="flex-1 py-3 bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#0A2540] hover:from-[#1E40AF] hover:to-[#2563EB] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer border border-[#D4AF37]/50"
              >
                <span>Request {selectedService.title} Audit</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-3 bg-[#FAF6EB] dark:bg-[#0A2540] hover:bg-[#F3EAD3] dark:hover:bg-[#133358] text-[#0A2540] dark:text-[#FEF3C7] text-xs sm:text-sm font-bold rounded-xl transition-colors border border-[#E5C882] dark:border-[#D4AF37]/40"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};


