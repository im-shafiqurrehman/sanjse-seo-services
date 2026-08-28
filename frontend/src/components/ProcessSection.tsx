import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/seoData';
import { ProcessGraphic } from './illustrations/ProcessGraphic';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProcessSectionProps {
  onOpenAudit: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenAudit }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-16 lg:py-24 bg-[#FAF6EB]/60 dark:bg-[#07172C] rounded-t-[40px] rounded-b-[40px] my-6 relative overflow-hidden border-y border-[#E5C882]/70 dark:border-[#1E3A8A] transition-colors duration-200">
      {/* Decorative background shapes */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#E5C882]/20 dark:bg-[#1E40AF]/20 rounded-full filter blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#1E40AF]/10 dark:bg-[#0A2540]/60 rounded-full filter blur-3xl opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#FEF3C7] text-xs font-bold mb-3.5 border border-[#E5C882] dark:border-[#D4AF37]/50 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2540] dark:text-white tracking-tight">
            A Simple SEO Process. Built Around Your Growth.
          </h2>
          <p className="text-base sm:text-lg text-[#334E68] dark:text-slate-300 mt-4 leading-relaxed">
            We replace vague promises with a transparent 4-phase search engine optimization framework tailored to your San Jose business objectives.
          </p>
        </div>

        {/* 2-Column Process Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Visual */}
          <div className="lg:col-span-5">
            <ProcessGraphic activeStep={activeStep} onSelectStep={setActiveStep} />
          </div>

          {/* Right Column: 4-Step Vertical Connected Roadmap */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-[#E5C882] dark:before:bg-[#1E3A8A]">
              
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.step}
                    onClick={() => setActiveStep(idx)}
                    className={`relative cursor-pointer transition-all duration-300 ${
                      isActive ? 'translate-x-1' : 'opacity-85 hover:opacity-100'
                    }`}
                  >
                    {/* Numbered Circle Indicator */}
                    <div
                      className={`absolute -left-6 sm:-left-8 top-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-[#0A2540] dark:bg-[#D4AF37] text-white dark:text-[#0A2540] ring-4 ring-[#FAF6EB] dark:ring-[#07172C] shadow-md scale-110'
                          : 'bg-white dark:bg-[#0E2F54] text-[#334E68] dark:text-slate-400 border border-[#E5C882]/80 dark:border-[#1E3A8A]'
                      }`}
                    >
                      {step.step}
                    </div>

                    {/* Step Content Card */}
                    <div className={`p-5 sm:p-6 rounded-2xl transition-all ${
                      isActive
                        ? 'bg-white dark:bg-[#0E2F54] border-2 border-[#D4AF37] shadow-md'
                        : 'bg-white/90 dark:bg-[#0E2F54]/70 border border-[#E2E8F0] dark:border-[#1E3A8A] hover:bg-white dark:hover:bg-[#0E2F54]'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] dark:text-white">
                          {step.title}
                        </h3>
                        <span className="text-[11px] font-extrabold text-[#0A2540] dark:text-[#FEF3C7] bg-[#FAF6EB] dark:bg-[#0A2540] px-2.5 py-0.5 rounded-full border border-[#E5C882] dark:border-[#D4AF37]/50">
                          {step.timeline}
                        </span>
                      </div>

                      <p className="text-sm text-[#334E68] dark:text-slate-300 leading-relaxed">
                        {step.shortDesc}
                      </p>

                      {/* Detailed Bullet Points */}
                      {isActive && (
                        <div className="mt-4 pt-4 border-t border-[#E2E8F0] dark:border-[#1E3A8A] space-y-2 animate-in fade-in duration-200">
                          {step.details.map((d, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-2 text-xs text-[#0A2540] dark:text-slate-200 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                              <span>{d}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Bottom Dual Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenAudit}
                className="bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#0A2540] hover:from-[#1E40AF] hover:to-[#2563EB] text-white px-7 py-3.5 rounded-xl font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm border border-[#D4AF37]/50"
              >
                <span>Start Your SEO Journey</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
              
              <a
                href="/contact"
                className="border border-[#E5C882] dark:border-[#1E3A8A] bg-white dark:bg-[#0E2F54] text-[#0A2540] dark:text-white px-7 py-3.5 rounded-xl font-bold hover:bg-[#FAF6EB] dark:hover:bg-[#0A2540] transition-colors text-center text-sm"
              >
                See Pricing & Plans
              </a>
            </div>

          </div>

        </div>

        {/* Bottom process summary without unsupported performance claims */}
        <div className="mt-14 pt-8 border-t border-[#E2E8F0] dark:border-[#1E3A8A] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 sm:gap-14">
            <div className="text-center md:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] dark:text-white">01</div>
              <div className="text-[11px] text-[#627D98] dark:text-slate-400 font-bold uppercase tracking-wider mt-0.5">Audit first</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] dark:text-white">02</div>
              <div className="text-[11px] text-[#627D98] dark:text-slate-400 font-bold uppercase tracking-wider mt-0.5">Prioritize work</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] dark:text-white">03</div>
              <div className="text-[11px] text-[#627D98] dark:text-slate-400 font-bold uppercase tracking-wider mt-0.5">Measure progress</div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs sm:text-[13px] font-medium text-[#334E68] dark:text-slate-300">Ready to improve search visibility across San Jose?</p>
            <button
              onClick={onOpenAudit}
              className="text-[#0A2540] dark:text-[#E5C882] font-bold text-sm underline underline-offset-4 cursor-pointer mt-0.5 hover:text-[#1E40AF] dark:hover:text-white transition-colors"
            >
              Request Your Free Audit Today →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};


