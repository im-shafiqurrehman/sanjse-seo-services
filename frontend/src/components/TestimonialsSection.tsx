import React from 'react';
import { MessageSquare } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white dark:bg-[#07172C] transition-colors duration-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#FEF3C7] text-xs font-bold mb-3.5 border border-[#E5C882] dark:border-[#D4AF37]/50 shadow-2xs">
            <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2540] dark:text-white tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-[#334E68] dark:text-slate-300 mt-4 leading-relaxed">
            We are collecting permissioned client feedback and verified performance stories for this library.
          </p>
        </div>

        <div className="max-w-2xl mx-auto rounded-2xl border border-dashed border-[#E5C882] dark:border-[#1E3A8A] bg-[#FAF6EB]/60 dark:bg-[#0E2F54]/60 p-8 text-center">
          <h3 className="text-xl font-bold text-[#0A2540] dark:text-white">Client testimonials coming soon.</h3>
          <p className="mt-2 text-sm text-[#627D98] dark:text-slate-400">Only approved, attributable feedback and source-backed results will appear here.</p>
        </div>

      </div>
    </section>
  );
};


