import React from 'react';
import { 
  Sparkles, 
  Search, 
  TrendingUp, 
  MousePointerClick, 
  ShoppingBag, 
  ShieldCheck, 
  FileText, 
  Cpu, 
  ArrowRight,
  Award,
  CheckCircle2,
  Lock
} from 'lucide-react';

interface NationalSeoSectionProps {
  onOpenAudit: (servicePrefill?: string) => void;
}

export const NationalSeoSection: React.FC<NationalSeoSectionProps> = ({ onOpenAudit }) => {
  const stats = [
    {
      value: "3.5 Billion",
      label: "Daily Searches on Google",
      sublabel: "Massive constant search intent happening every single day",
      icon: Search,
      badge: "Search Volume"
    },
    {
      value: "~60%",
      label: "National Traffic from Organic",
      sublabel: "The dominant driver of long-term sustainable web visits",
      icon: TrendingUp,
      badge: "Market Share"
    },
    {
      value: ">60%",
      label: "Research Before Buying",
      sublabel: "Buyers thoroughly evaluate online before purchase decisions",
      icon: ShoppingBag,
      badge: "Buyer Behavior"
    },
    {
      value: ">90%",
      label: "Clicks Go to Organic Listings",
      sublabel: "Searchers trust organic results far more than paid ad banners",
      icon: MousePointerClick,
      badge: "Trust Factor"
    }
  ];

  const artPillars = [
    {
      letter: "A",
      title: "Authority",
      tagline: "Link acquisition from high authority sites to help improve your national SEO rankings",
      description: "We build authoritative backlink profiles through white-hat editorial outreach, digital PR placements, and reputable industry citations that signal unshakeable domain trust to search engines.",
      icon: ShieldCheck,
      deliverables: [
        "High-domain authority backlink acquisition",
        "Editorial placements & niche-relevant mentions",
        "Continuous toxic link auditing & disavowal",
        "Brand entity citation hardening"
      ],
      highlightColor: "from-[#0A2540] to-[#1E40AF]"
    },
    {
      letter: "R",
      title: "Relevancy",
      tagline: "Optimizing your content so that search engines can better understand your business offering",
      description: "We structure and refine your entire content architecture with topical clusters, search intent mapping, and semantically rich copy that answers exactly what qualified prospects are searching for.",
      icon: FileText,
      deliverables: [
        "Semantic search entity optimization",
        "High-intent keyword mapping & cluster content",
        "E-E-A-T authoritativeness & thought leadership",
        "On-page metadata, headers & contextual schema"
      ],
      highlightColor: "from-[#0E2F54] to-[#1E3A8A]"
    },
    {
      letter: "T",
      title: "Technology",
      tagline: "Search engines reward optimized, secure, sites with a great user experience",
      description: "We tune your website's underlying architecture for lightning-fast speeds, rock-solid security, mobile-first responsiveness, and clean indexability so Google can crawl and rank every page effortlessly.",
      icon: Cpu,
      deliverables: [
        "Core Web Vitals & sub-second page performance",
        "Clean crawl budget & structured XML sitemaps",
        "HTTPS security & responsive mobile usability",
        "Rich snippet schema & zero indexation blockers"
      ],
      highlightColor: "from-[#0A2540] to-[#2563EB]"
    }
  ];

  return (
    <section id="national-seo" className="py-20 lg:py-28 bg-white dark:bg-[#07172C] transition-colors duration-200 relative overflow-hidden">
      {/* Background Decorative Ambient Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAF6EB]/80 dark:bg-[#1E40AF]/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E5C882]/10 dark:bg-[#0A2540]/40 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#FEF3C7] text-xs font-bold mb-3.5 border border-[#E5C882] dark:border-[#D4AF37]/50 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Award-Winning National SEO Strategy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2540] dark:text-white tracking-tight leading-tight">
            Harness High-Converting Organic Search Traffic
          </h2>
          <p className="text-base sm:text-lg text-[#334E68] dark:text-slate-300 mt-4 leading-relaxed">
            By optimizing your E.A.T. (expertise, authoritativeness, and trustworthiness), we’ll help drive new qualified traffic to your website without constantly paying for clicks.
          </p>
        </div>

        {/* 4 Market Reality Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#0E2F54] rounded-2xl p-6 border border-[#E2E8F0] dark:border-[#1E3A8A] shadow-xs hover:border-[#D4AF37] dark:hover:border-[#D4AF37] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1E40AF] dark:text-[#E5C882] bg-[#FAF6EB] dark:bg-[#0A2540] px-2.5 py-1 rounded-full border border-[#E5C882]/60 dark:border-[#D4AF37]/40">
                      {stat.badge}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#FAF6EB] dark:bg-[#0A2540] text-[#1E40AF] dark:text-[#E5C882] flex items-center justify-center border border-[#E5C882] dark:border-[#D4AF37]/30">
                      <Icon className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] dark:text-white tracking-tight">
                    {stat.value}
                  </div>
                  <h3 className="text-sm font-bold text-[#0A2540] dark:text-[#FEF3C7] mt-1.5">
                    {stat.label}
                  </h3>
                </div>
                <p className="text-xs text-[#627D98] dark:text-slate-300 mt-3 pt-3 border-t border-[#E2E8F0] dark:border-[#1E3A8A] leading-relaxed">
                  {stat.sublabel}
                </p>
              </div>
            );
          })}
        </div>

        {/* Strategic Deep-Dive Container */}
        <div className="bg-gradient-to-br from-[#0A2540] via-[#0E2F54] to-[#0A2540] rounded-3xl p-8 sm:p-12 text-white border-2 border-[#D4AF37]/60 shadow-xl mb-16 relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#D4AF37]/15 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E40AF]/60 text-[#FEF3C7] text-xs font-bold border border-[#D4AF37]/40">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Crack the Code of Sustainable Search</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Turn Search Intent Into Long-Term Brand Equity
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                There are currently <strong>3.5 billion daily searches on Google</strong>, and around <strong>60% of national web traffic</strong> comes from organic search. Additionally, more than <strong>60% of users research product information online</strong> before buying, and over <strong>90% of clicks go to organic (rather than paid) listings</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Our Award-Winning National SEO services will help you <em>‘crack the code’</em> and harness high-converting organic traffic. By optimizing your <strong>E.A.T. (expertise, authoritativeness, and trustworthiness)</strong>, we’ll help drive new traffic to your site without paying for clicks. A correctly implemented National SEO strategy will increase your brand awareness, online lead generation, and, most importantly, your bottom-line revenue.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#07172C]/80 backdrop-blur-md rounded-2xl p-6 border border-[#D4AF37]/50 shadow-inner flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5C882] block mb-2">
                  Proven Business Impact
                </span>
                <h4 className="text-lg font-bold text-white mb-3">
                  Why National SEO Wins
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Zero cost per click once ranked</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Compounding long-term asset value</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Higher consumer trust than banner ads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Dominant national brand visibility</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenAudit('National SEO Strategy')}
                className="mt-6 w-full py-3 bg-gradient-to-r from-[#D4AF37] via-[#E5C882] to-[#D4AF37] hover:brightness-105 text-[#0A2540] text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Audit My National Visibility</span>
                <ArrowRight className="w-4 h-4 text-[#0A2540]" />
              </button>
            </div>
          </div>
        </div>

        {/* The ART of National SEO Framework */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#FEF3C7] text-xs font-bold mb-3 border border-[#E5C882] dark:border-[#D4AF37]/50">
            <span className="text-[#D4AF37]">✦</span>
            <span>The Strategic Methodology</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] dark:text-white tracking-tight">
            We Accomplish This by Executing the ART of National SEO
          </h3>
          <p className="text-sm sm:text-base text-[#334E68] dark:text-slate-300 mt-2 max-w-2xl mx-auto">
            A balanced tripartite engine powering authority, semantic relevancy, and high-performance technical engineering.
          </p>
        </div>

        {/* 3 ART Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {artPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#0E2F54] rounded-3xl p-8 border border-[#E2E8F0] dark:border-[#1E3A8A] shadow-md hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Badge & Letter Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0A2540] dark:bg-[#061528] text-[#D4AF37] font-extrabold text-2xl flex items-center justify-center border-2 border-[#D4AF37] shadow-sm">
                      {pillar.letter}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF6EB] dark:bg-[#0A2540] text-[#1E40AF] dark:text-[#E5C882] flex items-center justify-center border border-[#E5C882] dark:border-[#D4AF37]/40">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                  </div>

                  {/* Title & Tagline from User Request */}
                  <h4 className="text-2xl font-extrabold text-[#0A2540] dark:text-white tracking-tight mb-2">
                    {pillar.title}
                  </h4>
                  <div className="p-3.5 bg-[#FAF6EB] dark:bg-[#0A2540] rounded-xl border border-[#E5C882] dark:border-[#D4AF37]/40 mb-4">
                    <p className="text-xs sm:text-sm font-bold text-[#0A2540] dark:text-[#FEF3C7] leading-snug">
                      "{pillar.tagline}"
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-[#334E68] dark:text-slate-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-5 border-t border-[#E2E8F0] dark:border-[#1E3A8A]">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1E40AF] dark:text-[#E5C882] block mb-3">
                    Execution Deliverables:
                  </span>
                  <ul className="space-y-2">
                    {pillar.deliverables.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-xs text-[#0A2540] dark:text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#D4AF37] border border-[#E5C882] dark:border-[#D4AF37]/50 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Strategy Callout Bar */}
        <div className="p-6 bg-[#FAF6EB] dark:bg-[#0A2540] border border-[#E5C882] dark:border-[#1E3A8A] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#0E2F54] text-[#D4AF37] flex items-center justify-center border border-[#E5C882] dark:border-[#D4AF37]/40 shrink-0">
              <Lock className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0A2540] dark:text-white">
                Ready to harness the ART of National SEO for your domain?
              </h4>
              <p className="text-xs text-[#334E68] dark:text-slate-300 mt-0.5">
                Get a custom audit analyzing your site's current Authority, Relevancy, and Technical health.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenAudit('ART of National SEO Consultation')}
            className="px-5 py-2.5 bg-white dark:bg-[#0E2F54] hover:bg-[#FAF6EB] dark:hover:bg-[#1E40AF] text-[#0A2540] dark:text-white border border-[#E5C882] dark:border-[#D4AF37]/50 text-xs font-bold rounded-xl transition-colors shrink-0 shadow-2xs cursor-pointer"
          >
            Claim Strategy Diagnostic
          </button>
        </div>

      </div>
    </section>
  );
};
