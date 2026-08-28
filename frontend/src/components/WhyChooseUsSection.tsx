import React from 'react';
import { BarChart3, FileText, Settings, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const benefits = [
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      desc: 'Every recommendation is guided by hard search volume, competitor keyword gaps, and user intent metrics—never guesswork.'
    },
    {
      icon: FileText,
      title: 'Transparent Reporting',
      desc: 'Clear Google Looker Studio dashboards and regular executive summaries so you know exactly what is being done and why.'
    },
    {
      icon: Settings,
      title: 'Customized Strategy',
      desc: 'No copy-paste SEO packages. We analyze your specific San Jose market niche and build a roadmap tailored to your profit margins.'
    },
    {
      icon: ShieldCheck,
      title: 'Long-Term Sustainable Growth',
      desc: 'We use ethical SEO practices, avoid manipulative shortcuts, and build a search presence that can adapt as algorithms and competitors change.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF6EB]/50 dark:bg-[#07172C] transition-colors duration-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#FEF3C7] text-xs font-bold mb-3.5 border border-[#E5C882] dark:border-[#D4AF37]/50 shadow-2xs">
            <span className="text-[#D4AF37]">✦</span>
            <span>The Sanjose Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2540] dark:text-white tracking-tight">
            Why Businesses Choose Sanjose SEO Services
          </h2>
          <p className="text-base sm:text-lg text-[#334E68] dark:text-slate-300 mt-4 leading-relaxed">
            We operate as an extension of your growth team, combining technical engineering and search strategy to capture qualified customers.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#0E2F54] p-7 rounded-2xl border border-[#E2E8F0] dark:border-[#1E3A8A] shadow-xs hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF6EB] dark:bg-[#0A2540] text-[#1E40AF] dark:text-[#E5C882] flex items-center justify-center mb-5 border border-[#E5C882] dark:border-[#D4AF37]/40 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] dark:text-white">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#334E68] dark:text-slate-300 mt-2.5 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-[#E2E8F0] dark:border-[#1E3A8A] flex items-center gap-1.5 text-xs font-bold text-[#0A2540] dark:text-[#E5C882]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Guaranteed White-Hat</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


