import React, { useState } from 'react';
import { FAQ_DATA } from '../data/seoData';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'General SEO', 'Local SEO & Maps', 'Pricing & ROI', 'Technical & Web'];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#FAF6EB]/50 dark:bg-[#07172C] transition-colors duration-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#FEF3C7] text-xs font-bold mb-3.5 border border-[#E5C882] dark:border-[#D4AF37]/50 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2540] dark:text-white tracking-tight">
            Everything You Need to Know About SEO
          </h2>
          <p className="text-base sm:text-lg text-[#334E68] dark:text-slate-300 mt-4 leading-relaxed">
            Clear answers to common questions about San Jose SEO pricing, timelines, Google Maps optimization, and deliverables.
          </p>

          {/* Search Bar for FAQs */}
          <div className="mt-8 relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#627D98] dark:text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. cost, timeline, maps)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#0E2F54] border border-[#E2E8F0] dark:border-[#1E3A8A] rounded-xl text-xs sm:text-sm text-[#0A2540] dark:text-white placeholder:text-[#829AB1] dark:placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] shadow-xs"
            />
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0A2540] text-white dark:bg-[#D4AF37] dark:text-[#0A2540] shadow-2xs border border-[#D4AF37]/50'
                    : 'bg-white dark:bg-[#0E2F54] text-[#334E68] dark:text-slate-300 border border-[#E2E8F0] dark:border-[#1E3A8A] hover:text-[#0A2540] dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white dark:bg-[#0E2F54] rounded-2xl border border-[#E2E8F0] dark:border-[#1E3A8A] shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? '' : faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF6EB]/40 dark:hover:bg-[#0A2540]/60 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#0A2540] dark:text-white">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#0A2540] text-[#E5C882] dark:bg-[#D4AF37] dark:text-[#0A2540] rotate-180' : 'bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#E5C882] border border-[#E5C882] dark:border-[#D4AF37]/40'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#334E68] dark:text-slate-300 leading-relaxed border-t border-[#E2E8F0] dark:border-[#1E3A8A] animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                      <div className="mt-3 pt-3 border-t border-[#E2E8F0]/70 dark:border-[#1E3A8A] flex items-center justify-between text-xs text-[#627D98] dark:text-slate-400">
                        <span>Category: <strong className="text-[#0A2540] dark:text-[#E5C882]">{faq.category}</strong></span>
                        <span className="text-[#1E40AF] dark:text-[#E5C882] font-semibold">Have more questions? Ask our team</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 bg-white dark:bg-[#0E2F54] rounded-2xl border border-[#E2E8F0] dark:border-[#1E3A8A]">
              <p className="text-sm text-[#627D98] dark:text-slate-400">No questions matched your search term.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-2 text-xs font-bold text-[#0A2540] dark:text-[#E5C882] underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};


