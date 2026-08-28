import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/seoData';
import { Star, MessageSquare } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Local Business', 'Tech & B2B', 'Professional Services'];

  const filtered = selectedCategory === 'All'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter(t => t.category === selectedCategory);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white dark:bg-[#07172C] transition-colors duration-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#FEF3C7] text-xs font-bold mb-3.5 border border-[#E5C882] dark:border-[#D4AF37]/50 shadow-2xs">
            <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Verified Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2540] dark:text-white tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-[#334E68] dark:text-slate-300 mt-4 leading-relaxed">
            Real growth starts with an organic search strategy tailored to your market. Read how San Jose businesses achieved top Google visibility.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0A2540] text-white dark:bg-[#D4AF37] dark:text-[#0A2540] shadow-sm border border-[#D4AF37]/40'
                    : 'bg-[#FAF6EB] dark:bg-[#0E2F54] text-[#334E68] dark:text-slate-300 hover:text-[#0A2540] dark:hover:text-white border border-[#E5C882]/60 dark:border-[#1E3A8A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filtered.map((test) => (
            <div
              key={test.id}
              className="bg-white dark:bg-[#0E2F54] rounded-2xl border border-[#E2E8F0] dark:border-[#1E3A8A] p-7 sm:p-8 shadow-xs hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                {/* Rating & Result Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#D4AF37]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#0A2540] dark:text-[#FEF3C7] bg-[#FAF6EB] dark:bg-[#0A2540] px-2.5 py-1 rounded-full border border-[#E5C882] dark:border-[#D4AF37]/50">
                    {test.resultMetric} {test.resultLabel}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-[#1E293B] dark:text-slate-200 leading-relaxed italic mb-6">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#E2E8F0] dark:border-[#1E3A8A] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={test.avatarUrl}
                    alt={test.name}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#E5C882] dark:border-[#D4AF37]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540] dark:text-white">{test.name}</h4>
                    <p className="text-xs text-[#627D98] dark:text-slate-400">{test.role} • {test.company}</p>
                    <p className="text-[11px] text-[#829AB1] dark:text-slate-500">{test.location}</p>
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A2540] dark:text-[#FEF3C7] bg-[#FAF6EB] dark:bg-[#0A2540] px-2 py-1 rounded border border-[#E5C882] dark:border-[#D4AF37]/40">
                  {test.category}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


