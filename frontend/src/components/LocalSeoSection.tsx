import React, { useState } from 'react';
import { LOCAL_SAN_JOSE_AREAS } from '../data/seoData';
import { MapPin, Star, Phone, Navigation, ArrowRight, Building } from 'lucide-react';

interface LocalSeoSectionProps {
  onOpenAudit: (servicePrefill?: string) => void;
}

export const LocalSeoSection: React.FC<LocalSeoSectionProps> = ({ onOpenAudit }) => {
  const [selectedArea, setSelectedArea] = useState<string>('Downtown San Jose');

  return (
    <section id="local-seo" className="py-20 lg:py-28 bg-[#FAF6EB]/50 dark:bg-[#07172C] transition-colors duration-200 relative overflow-hidden">
      {/* Decorative Blur Circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#E5C882]/20 dark:bg-[#1E40AF]/20 rounded-full filter blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1E40AF]/10 dark:bg-[#0A2540]/60 rounded-full filter blur-3xl opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#FEF3C7] text-xs font-bold mb-3.5 border border-[#E5C882] dark:border-[#D4AF37]/50 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Local Search Dominance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2540] dark:text-white tracking-tight">
            Local SEO & Google Maps Optimization in San Jose
          </h2>
          <p className="text-base sm:text-lg text-[#334E68] dark:text-slate-300 mt-4 leading-relaxed">
            When potential customers in San Jose search for services "near me", we make sure your business is the first one they see in the Google Maps 3-Pack and local search results.
          </p>
        </div>

        {/* 2-Column Feature Breakdown & Interactive Map Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Local SEO Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-[#0E2F54] p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] dark:border-[#1E3A8A] shadow-sm space-y-5">
              <h3 className="text-xl font-bold text-[#0A2540] dark:text-white">
                How We Put Your Business at the Top of Google Maps
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#E5C882] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-[#E5C882] dark:border-[#D4AF37]/40 shadow-xs">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540] dark:text-white">Google Business Profile (GBP) Optimization</h4>
                    <p className="text-xs text-[#334E68] dark:text-slate-300 mt-1 leading-relaxed">
                      Complete profile verification, accurate primary and secondary category selection, geo-tagged photo uploads, product/service menus, and weekly optimized updates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#E5C882] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-[#E5C882] dark:border-[#D4AF37]/40 shadow-xs">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540] dark:text-white">NAP Citation Synchronization (80+ Directories)</h4>
                    <p className="text-xs text-[#334E68] dark:text-slate-300 mt-1 leading-relaxed">
                      Ensuring 100% exact Name, Address, and Phone consistency across Apple Maps, Bing, Yelp, YellowPages, Better Business Bureau, and local Silicon Valley business registries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#E5C882] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-[#E5C882] dark:border-[#D4AF37]/40 shadow-xs">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540] dark:text-white">Hyper-Localized Landing Pages & Schema</h4>
                    <p className="text-xs text-[#334E68] dark:text-slate-300 mt-1 leading-relaxed">
                      Dedicated pages tailored to San Jose neighborhoods (e.g. Willow Glen, Santana Row, Campbell) embedded with geotagged LocalBusiness Schema structured data.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#E5C882] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-[#E5C882] dark:border-[#D4AF37]/40 shadow-xs">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540] dark:text-white">Reputation Management & Review Generation</h4>
                    <p className="text-xs text-[#334E68] dark:text-slate-300 mt-1 leading-relaxed">
                      Automated systems and staff guidelines to consistently generate authentic 5-star customer reviews on Google with natural keyword mentions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onOpenAudit('Local SEO San Jose & Google Maps')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#0A2540] hover:from-[#1E40AF] hover:to-[#2563EB] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#D4AF37]/50"
                >
                  <span>Claim Your Local SEO Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Local Heatmap / 3-Pack Visualizer */}
          <div className="lg:col-span-6">
            <div className="bg-white dark:bg-[#0E2F54] p-6 sm:p-7 rounded-2xl border border-[#E2E8F0] dark:border-[#1E3A8A] shadow-sm space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] dark:border-[#1E3A8A]">
                <div>
                  <span className="text-[11px] font-bold text-[#627D98] dark:text-slate-400 uppercase tracking-wider block">
                    Silicon Valley Geographic Coverage
                  </span>
                  <h4 className="text-base font-bold text-[#0A2540] dark:text-white">
                    San Jose & Surrounding Market Targeting
                  </h4>
                </div>
                <div className="p-2 bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#E5C882] rounded-lg border border-[#E5C882] dark:border-[#D4AF37]/40">
                  <Navigation className="w-4 h-4" />
                </div>
              </div>

              {/* Interactive Neighborhood Selector */}
              <div>
                <label className="text-xs font-bold text-[#334E68] dark:text-slate-300 block mb-2">
                  Select a targeted local San Jose market area:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {LOCAL_SAN_JOSE_AREAS.slice(0, 6).map((area) => (
                    <button
                      key={area.name}
                      onClick={() => setSelectedArea(area.name)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        selectedArea === area.name
                          ? 'bg-[#0A2540] dark:bg-[#D4AF37] text-white dark:text-[#0A2540] shadow-xs'
                          : 'bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-slate-300 hover:bg-[#F3EAD3] dark:hover:bg-[#133358] border border-[#E5C882]/70 dark:border-[#1E3A8A]'
                      }`}
                    >
                      {area.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Simulated Local 3-Pack Live Ranking Card for Selected Area */}
              {(() => {
                const currentArea = LOCAL_SAN_JOSE_AREAS.find(a => a.name === selectedArea) || LOCAL_SAN_JOSE_AREAS[0];
                return (
                  <div className="p-4 bg-[#FAF6EB]/60 dark:bg-[#0A2540]/80 rounded-xl border border-[#E5C882] dark:border-[#1E3A8A] space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0A2540] dark:text-white flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {currentArea.name} ({currentArea.type})
                      </span>
                      <span className="px-2.5 py-0.5 bg-[#0A2540] dark:bg-[#D4AF37] text-[#FAF6EB] dark:text-[#0A2540] text-[10px] font-extrabold rounded-full">
                        Google Maps visibility
                      </span>
                    </div>

                    <p className="text-xs text-[#334E68] dark:text-slate-300 leading-relaxed">
                      <strong>Market Opportunity:</strong> {currentArea.highlight}.
                    </p>

                    <div className="bg-white dark:bg-[#133358] p-3 rounded-lg border border-[#E5C882]/60 dark:border-[#1E3A8A] flex items-center justify-between shadow-2xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-[#0A2540] dark:bg-[#D4AF37] text-white dark:text-[#0A2540] flex items-center justify-center text-xs font-bold shadow-xs">
                          A
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#0A2540] dark:text-white">Your Business Listing</p>
                          <div className="flex items-center text-[#D4AF37] text-[10px]">
                            <span className="text-[#627D98] dark:text-slate-400">Track your profile data • {currentArea.name}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#0A2540] dark:text-[#E5C882] font-bold">
                        <Phone className="w-3.5 h-3.5" />
                        <span>Direct Call</span>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* All Covered Areas Cloud */}
              <div className="pt-2 border-t border-[#E2E8F0] dark:border-[#1E3A8A]">
                <p className="text-[11px] text-[#627D98] dark:text-slate-400 font-bold mb-2">
                  Full Service Area Coverage:
                </p>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-[#334E68] dark:text-slate-300">
                  {LOCAL_SAN_JOSE_AREAS.map((a) => (
                    <span key={a.name} className="px-2 py-0.5 bg-[#FAF6EB] dark:bg-[#0A2540] border border-[#E5C882]/60 dark:border-[#1E3A8A] rounded-md font-medium">
                      {a.name}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


