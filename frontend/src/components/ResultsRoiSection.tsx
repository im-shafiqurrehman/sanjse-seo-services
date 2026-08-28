import React, { useState } from 'react';
import { TrendingUp, Calculator, ArrowRight, Sparkles } from 'lucide-react';

interface ResultsRoiSectionProps {
  onOpenAudit: () => void;
}

export const ResultsRoiSection: React.FC<ResultsRoiSectionProps> = ({ onOpenAudit }) => {
  // Calculator interactive state
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(2500);
  const [conversionRate, setConversionRate] = useState<number>(2.5); // %
  const [closeRate, setCloseRate] = useState<number>(20); // %
  const [avgCustomerValue, setAvgCustomerValue] = useState<number>(650); // $

  // Calculations
  const monthlyLeads = monthlyVisitors * (conversionRate / 100);
  const monthlyCustomers = monthlyLeads * (closeRate / 100);
  const monthlyRevenue = monthlyCustomers * avgCustomerValue;
  const annualRevenue = monthlyRevenue * 12;

  return (
    <section id="results" className="py-20 lg:py-28 bg-[#FAF6EB]/50 dark:bg-[#07172C] transition-colors duration-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#FEF3C7] text-xs font-bold mb-3.5 border border-[#E5C882] dark:border-[#D4AF37]/50 shadow-2xs">
            <TrendingUp className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Measurable Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2540] dark:text-white tracking-tight">
            SEO Is More Than Rankings. It’s Business Growth.
          </h2>
          <p className="text-base sm:text-lg text-[#334E68] dark:text-slate-300 mt-4 leading-relaxed">
            Rankings are only a metric; the real goal is qualified leads, high-intent traffic, and sustainable pipeline growth for your San Jose business.
          </p>
        </div>

        {/* Planning model, not historical performance claims */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="bg-white dark:bg-[#0E2F54] p-6 rounded-2xl border border-[#E2E8F0] dark:border-[#1E3A8A] shadow-xs text-center hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] dark:text-[#E5C882] block mb-1">
              4 inputs
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#0A2540] dark:text-white block">
              Planning model
            </span>
            <span className="text-[11px] text-[#627D98] dark:text-slate-400 mt-1 block">
              Use your own baseline data
            </span>
          </div>

          <div className="bg-white dark:bg-[#0E2F54] p-6 rounded-2xl border border-[#E2E8F0] dark:border-[#1E3A8A] shadow-xs text-center hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] dark:text-[#E5C882] block mb-1">
              Lead rate
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#0A2540] dark:text-white block">
              Conversion assumption
            </span>
            <span className="text-[11px] text-[#627D98] dark:text-slate-400 mt-1 block">
              Adjust the calculator below
            </span>
          </div>

          <div className="bg-white dark:bg-[#0E2F54] p-6 rounded-2xl border border-[#E2E8F0] dark:border-[#1E3A8A] shadow-xs text-center hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] dark:text-[#E5C882] block mb-1">
              Close rate
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#0A2540] dark:text-white block">
              Customer assumption
            </span>
            <span className="text-[11px] text-[#627D98] dark:text-slate-400 mt-1 block">
              Set your sales conversion rate
            </span>
          </div>

          <div className="bg-white dark:bg-[#0E2F54] p-6 rounded-2xl border border-[#E2E8F0] dark:border-[#1E3A8A] shadow-xs text-center hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] dark:text-[#E5C882] block mb-1">
              No guarantee
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#0A2540] dark:text-white block">
              Search visibility
            </span>
            <span className="text-[11px] text-[#627D98] dark:text-slate-400 mt-1 block">
              Outcomes depend on many factors
            </span>
          </div>
        </div>

        {/* Interactive SEO Revenue & ROI Calculator */}
        <div className="bg-white dark:bg-[#0E2F54] rounded-3xl border border-[#E2E8F0] dark:border-[#1E3A8A] shadow-md p-6 sm:p-10 lg:p-12">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#FEF3C7] text-xs font-bold mb-2 border border-[#E5C882] dark:border-[#D4AF37]/50">
              <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Interactive ROI Forecast</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] dark:text-white">
              Calculate Your Organic Search Revenue Potential
            </h3>
            <p className="text-sm text-[#334E68] dark:text-slate-300 mt-2">
              Adjust the inputs below to estimate a planning scenario. These calculations do not predict rankings or guarantee traffic, leads, customers, or revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Sliders Area (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Monthly Visitors */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-bold text-[#0A2540] dark:text-slate-200">
                  <span>Current Monthly Website Visitors:</span>
                  <span className="text-[#1E40AF] dark:text-[#E5C882] font-mono text-base font-bold">{monthlyVisitors.toLocaleString()} visits/mo</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="20000"
                  step="250"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E2E8F0] dark:bg-[#0A2540] rounded-lg appearance-none cursor-pointer accent-[#1E40AF] dark:accent-[#D4AF37]"
                />
                <div className="flex justify-between text-[11px] text-[#627D98] dark:text-slate-400">
                  <span>500</span>
                  <span>10,000</span>
                  <span>20,000+</span>
                </div>
              </div>

              {/* Slider 2: Average Customer Value */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-bold text-[#0A2540] dark:text-slate-200">
                  <span>Average Customer Deal / Lifetime Value:</span>
                  <span className="text-[#1E40AF] dark:text-[#E5C882] font-mono text-base font-bold">${avgCustomerValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="50"
                  value={avgCustomerValue}
                  onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E2E8F0] dark:bg-[#0A2540] rounded-lg appearance-none cursor-pointer accent-[#1E40AF] dark:accent-[#D4AF37]"
                />
                <div className="flex justify-between text-[11px] text-[#627D98] dark:text-slate-400">
                  <span>$100</span>
                  <span>$2,500</span>
                  <span>$5,000+</span>
                </div>
              </div>

              {/* Slider 3: Conversion Rate */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-bold text-[#0A2540] dark:text-slate-200">
                  <span>Estimated Lead Conversion Rate:</span>
                  <span className="text-[#1E40AF] dark:text-[#E5C882] font-mono text-base font-bold">{conversionRate.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="5.0"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E2E8F0] dark:bg-[#0A2540] rounded-lg appearance-none cursor-pointer accent-[#1E40AF] dark:accent-[#D4AF37]"
                />
                <div className="flex justify-between text-[11px] text-[#627D98] dark:text-slate-400">
                  <span>0.5% (Low)</span>
                  <span>2.5% (Average)</span>
                  <span>5.0% (High Converting)</span>
                </div>
              </div>

              {/* Slider 4: Close Rate */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-bold text-[#0A2540] dark:text-slate-200">
                  <span>Lead-to-Customer Rate:</span>
                  <span className="text-[#1E40AF] dark:text-[#E5C882] font-mono text-base font-bold">{closeRate.toFixed(0)}%</span>
                </div>
                <input type="range" min="0" max="100" step="1" value={closeRate} onChange={(e) => setCloseRate(Number(e.target.value))} aria-label="Lead-to-customer rate" className="w-full h-2.5 bg-[#E2E8F0] dark:bg-[#0A2540] rounded-lg appearance-none cursor-pointer accent-[#1E40AF] dark:accent-[#D4AF37]" />
                <div className="flex justify-between text-[11px] text-[#627D98] dark:text-slate-400"><span>0%</span><span>50%</span><span>100%</span></div>
              </div>

            </div>

            {/* Projected Revenue Box (5 cols) */}
            <div className="lg:col-span-5 bg-[#FAF6EB] dark:bg-[#0A2540] border-2 border-[#E5C882] dark:border-[#D4AF37]/50 rounded-2xl p-6 sm:p-7 space-y-5 shadow-sm">
              <div className="border-b border-[#E5C882]/60 dark:border-[#1E3A8A] pb-3 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0A2540] dark:text-white">Planning Estimate</span>
                <span className="text-[10px] font-bold text-[#0A2540] dark:text-[#FEF3C7] bg-white dark:bg-[#0E2F54] border border-[#E5C882] dark:border-[#D4AF37]/40 px-2 py-0.5 rounded">
                  User inputs
                </span>
              </div>

              <div>
                <p className="text-xs text-[#334E68] dark:text-slate-400 font-medium">Estimated Annual Revenue</p>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] dark:text-[#E5C882] mt-1 tracking-tight">
                  ${annualRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  <span className="text-xs font-normal text-[#627D98] dark:text-slate-400">/year</span>
                </p>
                <p className="text-xs text-[#0A2540] dark:text-slate-200 font-semibold mt-1">
                  Based on {monthlyVisitors.toLocaleString()} visitors, {monthlyLeads.toFixed(1)} leads, and {monthlyCustomers.toFixed(1)} customers per month
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#334E68] dark:text-slate-300 pt-2 border-t border-[#E5C882]/60 dark:border-[#1E3A8A]">
                <div className="flex justify-between">
                  <span>Monthly visitors:</span>
                  <span className="font-bold text-[#0A2540] dark:text-white">{monthlyVisitors.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated monthly revenue:</span>
                  <span className="font-bold text-[#1E40AF] dark:text-[#E5C882]">${monthlyRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between"><span>Estimated annual revenue:</span><span className="font-bold text-[#1E40AF] dark:text-[#E5C882]">${annualRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span></div>
              </div>

              <p className="text-[11px] leading-relaxed text-[#627D98] dark:text-slate-400">SEO projections are estimates for planning purposes only and are not guarantees of future traffic, leads, rankings, or revenue.</p>

              <button
                onClick={onOpenAudit}
                className="w-full py-3.5 bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#0A2540] hover:from-[#1E40AF] hover:to-[#2563EB] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#D4AF37]/50"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Unlock This Growth with a Free Audit</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

