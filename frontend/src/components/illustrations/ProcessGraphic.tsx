import React from 'react';
import { Search, Compass, Cpu, TrendingUp, CheckCircle, ArrowRight, Target } from 'lucide-react';

interface ProcessGraphicProps {
  activeStep: number;
  onSelectStep: (stepIndex: number) => void;
}

export const ProcessGraphic: React.FC<ProcessGraphicProps> = ({ activeStep, onSelectStep }) => {
  const stepsVisual = [
    {
      title: '01 Discover & Audit',
      icon: Search,
      tag: '15-Point Inspection',
      items: ['Crawl & indexation review', 'Competitor keyword gap mapping', 'Backlink quality review']
    },
    {
      title: '02 Roadmap Strategy',
      icon: Compass,
      tag: 'Custom Blueprint',
      items: ['Commercial search intent target', 'Local 3-Pack action plan', 'Information architecture map']
    },
    {
      title: '03 Technical & Content',
      icon: Cpu,
      tag: 'Live Execution',
      items: ['Core Web Vitals acceleration', 'Schema structured data code', 'Authoritative topic clusters']
    },
    {
      title: '04 Measure & Improve',
      icon: TrendingUp,
      tag: 'Sustainable Growth',
      items: ['Real-time Looker dashboard', 'Continuous link acquisition', 'Conversion rate optimization']
    }
  ];

  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none">
      {/* Soft decorative background circles */}
      <div className="absolute -top-6 -left-6 w-48 h-48 bg-zinc-200/50 dark:bg-zinc-800/30 rounded-full filter blur-xl opacity-80 pointer-events-none" />
      <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-zinc-100 dark:bg-zinc-900/40 rounded-full filter blur-xl opacity-90 pointer-events-none" />
      
      {/* Decorative Dots */}
      <div className="absolute top-2 right-4 w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-600 opacity-80 animate-float" />
      <div className="absolute bottom-10 left-2 w-2.5 h-2.5 rounded-full bg-zinc-800 dark:bg-zinc-200 opacity-80 animate-float-reverse" />

      {/* Main Process Card */}
      <div className="relative bg-white dark:bg-[#121214] rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-6 transition-all duration-300">
        
        {/* Card Header with Progress Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-zinc-600 dark:text-zinc-400 uppercase block">
              SEO Implementation Engine
            </span>
            <h4 className="text-base font-bold text-zinc-950 dark:text-white">
              Step-by-Step Growth Framework
            </h4>
          </div>
          <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white text-xs font-bold rounded-full border border-zinc-200 dark:border-zinc-700">
            Step {activeStep + 1} of 4
          </div>
        </div>

        {/* Interactive Step Blocks */}
        <div className="space-y-3">
          {stepsVisual.map((s, idx) => {
            const Icon = s.icon;
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => onSelectStep(idx)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-zinc-100 dark:bg-zinc-800/90 border-zinc-950 dark:border-white shadow-xs translate-x-1.5'
                    : 'bg-white dark:bg-[#18181B] border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs transition-colors ${
                      isActive ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className={`text-sm font-bold ${isActive ? 'text-zinc-950 dark:text-white' : 'text-zinc-700 dark:text-zinc-300'}`}>
                        {s.title}
                      </h5>
                      <span className="text-[11px] text-zinc-500 dark:text-zinc-400">{s.tag}</span>
                    </div>
                  </div>
                  {isActive ? (
                    <span className="w-6 h-6 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                  ) : (
                    <ArrowRight className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                  )}
                </div>

                {/* Expanded Details when Active */}
                {isActive && (
                  <div className="mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-700 grid grid-cols-1 gap-1.5 animate-in fade-in duration-200">
                    {s.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-2 text-xs text-zinc-900 dark:text-zinc-100">
                        <CheckCircle className="w-3.5 h-3.5 text-zinc-950 dark:text-white shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-5 p-3.5 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-zinc-950 dark:text-white shrink-0" />
            <p className="text-xs font-semibold text-zinc-950 dark:text-white">
              100% White-Hat Google Compliance Guarantee
            </p>
          </div>
          <span className="text-xs font-bold text-zinc-950 dark:text-white underline cursor-pointer">
            View Roadmap
          </span>
        </div>

      </div>
    </div>
  );
};


