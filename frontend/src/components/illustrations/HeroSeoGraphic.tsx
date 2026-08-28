import React, { useState } from 'react';
import { Search, TrendingUp, Sparkles, ArrowUpRight, ShieldCheck, Zap, Globe, CheckCircle2 } from 'lucide-react';

export const HeroSeoGraphic: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'traffic' | 'rankings' | 'audit'>('traffic');
  const [searchQuery, setSearchQuery] = useState('seo services san jose');

  return (
    <div id="hero-graphic-container" className="relative w-full max-w-[560px] mx-auto select-none">
      {/* Soft Background Glow */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-zinc-200/50 dark:bg-zinc-800/30 rounded-full filter blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-60 h-60 bg-zinc-100 dark:bg-zinc-900/40 rounded-full filter blur-2xl opacity-60 pointer-events-none" />

      {/* Floating Decorative Elements */}
      <div className="absolute -top-4 left-6 w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-600 animate-float opacity-80" />
      <div className="absolute top-1/3 -right-3 w-4 h-4 rounded-full bg-zinc-800 dark:bg-zinc-200 animate-float-reverse opacity-70" />
      <div className="absolute -bottom-2 right-12 w-2.5 h-2.5 rounded-full bg-zinc-900 dark:bg-white animate-float opacity-60" />
      
      {/* Decorative Floating Sparkle */}
      <div className="absolute -top-6 right-16 text-zinc-900 dark:text-zinc-100 animate-float">
        <Sparkles className="w-5 h-5" />
      </div>

      {/* Main Glass/White/Dark Card Container */}
      <div className="relative bg-white dark:bg-[#121214] rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-6 sm:p-7 transition-all duration-300 overflow-hidden">
        
        {/* Sleek Window Control Dots & Status Pill */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-800 dark:bg-zinc-300"></div>
          </div>
          <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-full border border-zinc-200 dark:border-zinc-800 text-[11px] font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white animate-ping"></span>
            <span>SAN JOSE SEO RADAR</span>
          </div>
        </div>

        {/* Mock Search Bar Header */}
        <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-2.5 mb-5 flex items-center gap-2 shadow-inner">
          <div className="p-1.5 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
            placeholder="Type your domain or keyword..."
          />
          <button 
            type="button"
            className="px-3 py-1.5 bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-950 text-xs font-semibold rounded-lg transition-colors shrink-0 flex items-center gap-1 shadow-xs"
          >
            <span>Scan</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Popular Category Chips */}
        <div className="flex items-center gap-2 mb-5 overflow-x-auto pb-1 text-[11px] sm:text-xs">
          <span className="text-zinc-500 dark:text-zinc-400 font-medium shrink-0">Popular:</span>
          <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-semibold shrink-0 border border-zinc-200 dark:border-zinc-800">
            Google Maps 3-Pack
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-zinc-50 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 font-medium shrink-0 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition-colors border border-zinc-100 dark:border-zinc-800">
            Local San Jose
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-zinc-50 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 font-medium shrink-0 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition-colors border border-zinc-100 dark:border-zinc-800">
            Core Web Vitals
          </span>
        </div>

        {/* Interactive Feature Tabs */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-zinc-50 dark:bg-zinc-900/90 rounded-xl mb-5 border border-zinc-200 dark:border-zinc-800">
          <button
            onClick={() => setActiveTab('traffic')}
            className={`py-2 px-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'traffic'
                ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-xs'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-800'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Organic Growth</span>
          </button>
          <button
            onClick={() => setActiveTab('rankings')}
            className={`py-2 px-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'rankings'
                ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-xs'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-800'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Rank Tracker</span>
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            className={`py-2 px-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'audit'
                ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-xs'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-800'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Site Health</span>
          </button>
        </div>

        {/* Tab Content 1: Organic Growth Chart View */}
        {activeTab === 'traffic' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Monthly Organic Clicks</p>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl font-bold text-zinc-950 dark:text-white">Your data</span>
                  <span className="text-xs font-bold text-zinc-950 dark:text-white bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 flex items-center">
                    Connect Search Console
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Est. Search Value</p>
                <p className="text-base font-bold text-zinc-950 dark:text-white mt-0.5">Measured value</p>
              </div>
            </div>

            {/* Custom SVG Traffic Growth Curve in Sleek Monochrome */}
            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-xl p-3 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
              <div className="flex justify-between text-[10px] text-zinc-500 dark:text-zinc-400 mb-1 font-mono">
                <span>Month 1 (Audit)</span>
                <span>Month 3 (Local Pack)</span>
                <span>Month 6 (Domination)</span>
              </div>
              <svg className="w-full h-24 overflow-visible" viewBox="0 0 400 100" fill="none">
                <defs>
                  <linearGradient id="growthGradientBW" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#71717A" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#71717A" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Grid horizontal lines */}
                <line x1="0" y1="20" x2="400" y2="20" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800" strokeDasharray="3 3" />
                <line x1="0" y1="50" x2="400" y2="50" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800" strokeDasharray="3 3" />
                <line x1="0" y1="80" x2="400" y2="80" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800" strokeDasharray="3 3" />
                
                {/* Area Fill */}
                <path
                  d="M 0,85 C 80,82 140,75 200,55 C 260,35 320,18 400,10 L 400,100 L 0,100 Z"
                  fill="url(#growthGradientBW)"
                />
                
                {/* Upward Line */}
                <path
                  d="M 0,85 C 80,82 140,75 200,55 C 260,35 320,18 400,10"
                  stroke="currentColor"
                  className="text-zinc-950 dark:text-white"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Key Points */}
                <circle cx="0" cy="85" r="4" fill="currentColor" className="text-white dark:text-zinc-950" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="200" cy="55" r="4" fill="currentColor" className="text-white dark:text-zinc-950" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="400" cy="10" r="5" fill="currentColor" className="text-zinc-950 dark:text-white" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            {/* Metrics Mini-Grid */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              <div className="bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 rounded-lg p-2.5 text-center">
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block">Top 3 Keywords</span>
                <span className="text-sm font-bold text-zinc-950 dark:text-white">48 Keywords</span>
              </div>
              <div className="bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 rounded-lg p-2.5 text-center">
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block">GBP Map Calls</span>
                <span className="text-sm font-bold text-zinc-950 dark:text-white">Track calls</span>
              </div>
              <div className="bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 rounded-lg p-2.5 text-center">
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block">Bounce Rate</span>
                <span className="text-sm font-bold text-zinc-950 dark:text-white">-34%</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Live Rank Tracker */}
        {activeTab === 'rankings' && (
          <div className="space-y-2.5 animate-in fade-in duration-300">
            <div className="flex items-center justify-between text-xs pb-1 border-b border-zinc-200 dark:border-zinc-800 font-semibold text-zinc-500 dark:text-zinc-400">
              <span>Target Query (San Jose, CA)</span>
              <span>Google Rank</span>
            </div>
            
            <div className="flex items-center justify-between p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zinc-950 dark:bg-white" />
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">seo services san jose</span>
              </div>
              <span className="text-xs font-bold text-zinc-950 dark:text-white bg-white dark:bg-zinc-900 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">
                #1 Position
              </span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zinc-950 dark:bg-white" />
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">local seo company san jose</span>
              </div>
              <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                #2 Position
              </span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zinc-950 dark:bg-white" />
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">google maps seo san jose</span>
              </div>
              <span className="text-xs font-bold text-zinc-950 dark:text-white bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                #1 in 3-Pack
              </span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zinc-950 dark:bg-white" />
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">technical seo audit san jose</span>
              </div>
              <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                #3 Position
              </span>
            </div>
          </div>
        )}

        {/* Tab Content 3: Site Health Audit */}
        {activeTab === 'audit' && (
          <div className="space-y-3 animate-in fade-in duration-300">
            <div className="flex items-center justify-between p-3 bg-zinc-100 dark:bg-zinc-800/80 rounded-xl border border-zinc-200 dark:border-zinc-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center font-bold text-sm shadow-xs">
                  98
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-950 dark:text-white">Overall Site SEO Score</h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">0 Critical Errors • 48 Passed Checks</p>
                </div>
              </div>
              <ShieldCheck className="w-6 h-6 text-zinc-950 dark:text-white" />
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <span className="flex items-center gap-1.5 text-zinc-900 dark:text-zinc-100">
                  <CheckCircle2 className="w-4 h-4 text-zinc-950 dark:text-white" />
                  Core Web Vitals (Mobile LCP 1.1s)
                </span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">Passed (Good)</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <span className="flex items-center gap-1.5 text-zinc-900 dark:text-zinc-100">
                  <CheckCircle2 className="w-4 h-4 text-zinc-950 dark:text-white" />
                  Schema & Rich Snippets Structure
                </span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">100% Valid</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <span className="flex items-center gap-1.5 text-zinc-900 dark:text-zinc-100">
                  <CheckCircle2 className="w-4 h-4 text-zinc-950 dark:text-white" />
                  Google Business Profile Sync
                </span>
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">Synced (80+ Dirs)</span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Status Row */}
        <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-zinc-950 dark:bg-white animate-ping" />
            <span className="font-medium">Live San Jose Rank Tracker Active</span>
          </div>
          <span className="font-bold text-zinc-950 dark:text-white flex items-center gap-0.5">
            100% White-Hat Verified
          </span>
        </div>

      </div>
    </div>
  );
};


