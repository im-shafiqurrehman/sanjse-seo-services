import React from 'react';
import { MapPin, Star, TrendingUp } from 'lucide-react';

export const AboutGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none">
      {/* Background soft glow circles */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-zinc-200/50 dark:bg-zinc-800/30 rounded-full filter blur-2xl opacity-70 pointer-events-none" />
      <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-zinc-100 dark:bg-zinc-900/40 rounded-full filter blur-2xl opacity-80 pointer-events-none" />

      {/* Floating Accent Dots */}
      <div className="absolute -top-4 right-10 w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-600 animate-float opacity-80" />
      <div className="absolute bottom-16 -left-3 w-3.5 h-3.5 rounded-full bg-zinc-800 dark:bg-zinc-200 animate-float-reverse opacity-80" />

      {/* Main Agency Analytics Command Box */}
      <div className="relative bg-white dark:bg-[#121214] rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-6 transition-all duration-300">
        
        {/* Top Header: Google Business Profile 3-Pack Simulation */}
        <div className="bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 mb-5">
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2">
              <span className="p-1 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 rounded-md">
                <MapPin className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-bold text-zinc-950 dark:text-white">Google Maps 3-Pack Preview</span>
            </div>
            <span className="text-[10px] font-bold text-zinc-950 dark:text-white bg-white dark:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">
              #1 San Jose Result
            </span>
          </div>

          <div className="bg-white dark:bg-[#18181B] rounded-lg p-3 border border-zinc-200 dark:border-zinc-800 shadow-xs">
            <div className="flex items-start justify-between">
              <div>
                <h5 className="text-xs font-bold text-zinc-950 dark:text-white">Client Local Business Profile</h5>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-xs font-bold text-zinc-950 dark:text-white">5.0</span>
                  <div className="flex text-zinc-900 dark:text-zinc-100">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400">(142 verified reviews)</span>
                </div>
                <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-1">San Jose, CA • Open 24 Hours • Full SEO Verified</p>
              </div>
              <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white border border-zinc-200 dark:border-zinc-700 text-[10px] font-bold rounded">
                Rank #1
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Analytics Comparison */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="p-3.5 bg-white dark:bg-[#18181B] rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">Core Web Vitals</span>
              <span className="w-2 h-2 rounded-full bg-zinc-950 dark:bg-white" />
            </div>
            <p className="text-xl font-bold text-zinc-950 dark:text-white">99<span className="text-xs font-normal text-zinc-500 dark:text-zinc-400">/100</span></p>
            <p className="text-[10px] text-zinc-600 dark:text-zinc-400 font-semibold mt-0.5">0.8s LCP • 0.00 CLS</p>
          </div>

          <div className="p-3.5 bg-white dark:bg-[#18181B] rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">Organic Lead Share</span>
              <TrendingUp className="w-3.5 h-3.5 text-zinc-950 dark:text-white" />
            </div>
            <p className="text-xl font-bold text-zinc-950 dark:text-white">+240%</p>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">vs Paid Ad Dependency</p>
          </div>
        </div>

        {/* Key Agency Guarantees Checklist */}
        <div className="space-y-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center justify-between text-xs text-zinc-900 dark:text-zinc-100">
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-[10px] font-bold">✓</span>
              Dedicated Senior SEO Strategist in Silicon Valley
            </span>
            <span className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">Local Team</span>
          </div>
          <div className="flex items-center justify-between text-xs text-zinc-900 dark:text-zinc-100">
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-[10px] font-bold">✓</span>
              Zero Lock-In Contracts • Cancel Anytime Flexibility
            </span>
            <span className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">100% Trust</span>
          </div>
          <div className="flex items-center justify-between text-xs text-zinc-900 dark:text-zinc-100">
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-[10px] font-bold">✓</span>
              Live 24/7 Google Looker Studio Reporting Portal
            </span>
            <span className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">Transparent</span>
          </div>
        </div>

      </div>
    </div>
  );
};


