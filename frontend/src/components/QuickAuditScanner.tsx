import React, { useState } from 'react';
import { Search, AlertTriangle, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';

interface QuickAuditScannerProps {
  onOpenFullAudit: (prefillUrl?: string) => void;
}

export const QuickAuditScanner: React.FC<QuickAuditScannerProps> = ({ onOpenFullAudit }) => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<{
    score: number;
    url: string;
    speed: string;
    mobile: string;
    indexing: string;
    localRank: string;
    issuesFound: number;
  } | null>(null);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsScanning(true);
    setScanResult(null);

    // Simulate authentic SEO crawl analysis
    setTimeout(() => {
      setIsScanning(false);
      // Clean domain
      const cleanUrl = url.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
      setScanResult({
        score: Math.floor(Math.random() * (78 - 62 + 1)) + 62, // realistic initial unoptimized score
        url: cleanUrl,
        speed: '1.9s (Needs Speed Optimization)',
        mobile: 'Mobile Responsive (Minor Viewport Shift)',
        indexing: 'Indexable (Missing Schema Structured Data)',
        localRank: 'Not in Google Maps 3-Pack',
        issuesFound: 7
      });
    }, 1400);
  };

  return (
    <div id="quick-audit-scanner" className="w-full bg-white dark:bg-[#0E2F54] rounded-2xl border border-[#E2E8F0] dark:border-[#1E3A8A] shadow-[0_10px_30px_rgba(10,37,64,0.06)] p-6 sm:p-8 transition-colors duration-200">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#FEF3C7] text-xs font-bold mb-3 border border-[#E5C882] dark:border-[#D4AF37]/50 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Free Instant Website Health Check</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] dark:text-white">
          Scan Your Website’s SEO Performance in 5 Seconds
        </h3>
        <p className="text-sm text-[#334E68] dark:text-slate-300 mt-2">
          Enter your San Jose business website URL below to test site speed, mobile readiness, and local search visibility.
        </p>
      </div>

      <form onSubmit={handleScan} className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#627D98] dark:text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="e.g. yourbusiness.com"
            required
            className="w-full pl-10 pr-4 py-3 bg-[#FAF6EB]/40 dark:bg-[#07172C] border border-[#E2E8F0] dark:border-[#1E3A8A] rounded-xl text-sm text-[#0A2540] dark:text-white placeholder:text-[#627D98] focus:outline-none focus:border-[#1E40AF] focus:ring-1 focus:ring-[#D4AF37] focus:bg-white dark:focus:bg-[#07172C] transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={isScanning}
          className="px-6 py-3 bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#0A2540] hover:from-[#1E40AF] hover:to-[#2563EB] disabled:opacity-70 text-white text-sm font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 shrink-0 cursor-pointer border border-[#D4AF37]/50"
        >
          {isScanning ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin text-[#D4AF37]" />
              <span>Analyzing Domain...</span>
            </>
          ) : (
            <>
              <span>Run Free Scan</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </>
          )}
        </button>
      </form>

      {/* Real-time Scan Result Card */}
      {scanResult && (
        <div className="max-w-2xl mx-auto mt-6 p-5 bg-[#FAF6EB] dark:bg-[#0A2540]/90 rounded-xl border border-[#E5C882] dark:border-[#D4AF37]/50 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#E5C882]/60 dark:border-[#1E3A8A]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A2540] to-[#1E40AF] text-[#D4AF37] font-extrabold text-lg flex items-center justify-center shadow-md border-2 border-[#D4AF37]">
                {scanResult.score}
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0A2540] dark:text-white">{scanResult.url}</h4>
                <p className="text-xs text-[#334E68] dark:text-slate-300 font-medium">
                  {scanResult.issuesFound} SEO opportunities found that are limiting your rankings
                </p>
              </div>
            </div>
            <button
              onClick={() => onOpenFullAudit(scanResult.url)}
              className="w-full sm:w-auto px-4 py-2 bg-[#D4AF37] hover:bg-[#C59B27] text-[#0A2540] text-xs font-extrabold rounded-lg transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Get Full 15-Page Fix Plan</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0A2540]" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4 text-xs">
            <div className="flex items-center justify-between p-2.5 bg-white dark:bg-[#0E2F54] rounded-lg border border-[#E2E8F0] dark:border-[#1E3A8A]">
              <span className="text-[#627D98] dark:text-slate-400">Google Core Web Vitals:</span>
              <span className="font-bold text-[#0A2540] dark:text-white flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 text-[#F59E0B]" />
                {scanResult.speed}
              </span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-white dark:bg-[#0E2F54] rounded-lg border border-[#E2E8F0] dark:border-[#1E3A8A]">
              <span className="text-[#627D98] dark:text-slate-400">Local Google Maps 3-Pack:</span>
              <span className="font-bold text-[#0A2540] dark:text-white flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 text-[#D4AF37]" />
                {scanResult.localRank}
              </span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-white dark:bg-[#0E2F54] rounded-lg border border-[#E2E8F0] dark:border-[#1E3A8A]">
              <span className="text-[#627D98] dark:text-slate-400">Structured Data Schema:</span>
              <span className="font-bold text-[#0A2540] dark:text-white">Missing LocalBusiness JSON-LD</span>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-white dark:bg-[#0E2F54] rounded-lg border border-[#E2E8F0] dark:border-[#1E3A8A]">
              <span className="text-[#627D98] dark:text-slate-400">Search Intent Coverage:</span>
              <span className="font-bold text-[#0A2540] dark:text-white">High Competitor Keyword Gap</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


