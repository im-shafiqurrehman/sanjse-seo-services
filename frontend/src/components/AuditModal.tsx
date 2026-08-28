import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, Lock, Globe, Phone, Mail, Building, User } from 'lucide-react';
import { AuditFormData } from '../types';
import { apiUrl } from '../lib/api';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillService?: string;
  prefillUrl?: string;
}

export const AuditModal: React.FC<AuditModalProps> = ({
  isOpen,
  onClose,
  prefillService = '',
  prefillUrl = ''
}) => {
  const [formData, setFormData] = useState<AuditFormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    websiteUrl: prefillUrl || '',
    primaryGoal: prefillService || 'Rank in Google Maps 3-Pack',
    currentTraffic: 'Under 1,000 visits/month',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (prefillUrl) {
      setFormData(prev => ({ ...prev, websiteUrl: prefillUrl }));
    }
    if (prefillService) {
      setFormData(prev => ({ ...prev, primaryGoal: prefillService }));
    }
  }, [prefillUrl, prefillService]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(apiUrl('/api/audit-requests'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || 'We could not send your request. Please try again.');
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'We could not send your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const goalsList = [
    'Rank in Google Maps 3-Pack',
    'Increase Organic Lead Volume',
    'Technical SEO & Core Web Vitals Fix',
    'New High-Converting Web Design',
    'Competitor Keyword Dominance'
  ];

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#07172C]/85 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        // Close if clicking outside the modal content container
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white dark:bg-[#0E2F54] rounded-3xl border-2 border-[#E5C882] dark:border-[#D4AF37]/50 max-w-2xl w-full p-6 sm:p-9 shadow-2xl relative my-8 animate-in zoom-in-95 duration-200">
        
        {/* Prominent Cross (Close) Button on top right of popup window */}
        <button
          id="close-audit-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl text-[#0A2540] dark:text-[#E5C882] hover:text-white bg-[#FAF6EB] dark:bg-[#0A2540] hover:bg-[#0A2540] dark:hover:bg-[#1E40AF] transition-all duration-200 cursor-pointer border border-[#E5C882] dark:border-[#D4AF37]/40 shadow-xs group z-20 flex items-center gap-1"
          aria-label="Close window (Esc)"
          title="Close window (Esc)"
        >
          <span className="hidden sm:inline-block text-[11px] font-bold tracking-wide pl-1">Close</span>
          <X className="w-5 h-5 text-[#0A2540] dark:text-[#E5C882] group-hover:text-white transition-colors" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#FEF3C7] text-xs font-bold mb-2.5 border border-[#E5C882] dark:border-[#D4AF37]/50 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>100% Free • No Obligation Diagnostic</span>
              </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] dark:text-white">
                Get Your Free 15-Point SEO Audit
              </h3>
              <p className="text-xs sm:text-sm text-[#334E68] dark:text-slate-300 mt-1.5">
                Our San Jose SEO analysts will manually inspect your domain, uncover ranking roadblocks, and map out your highest-impact keyword opportunities.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#0A2540] dark:text-white mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#627D98] dark:text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-[#FAF6EB]/40 dark:bg-[#0A2540] border border-[#E2E8F0] dark:border-[#1E3A8A] rounded-xl text-xs sm:text-sm text-[#0A2540] dark:text-white placeholder:text-[#829AB1] dark:placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#061528]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A2540] dark:text-white mb-1">
                    Business / Company Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#627D98] dark:text-slate-400">
                      <Building className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="San Jose Dental Spa"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-[#FAF6EB]/40 dark:bg-[#0A2540] border border-[#E2E8F0] dark:border-[#1E3A8A] rounded-xl text-xs sm:text-sm text-[#0A2540] dark:text-white placeholder:text-[#829AB1] dark:placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#061528]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#0A2540] dark:text-white mb-1">
                    Work Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#627D98] dark:text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="jane@yourcompany.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-[#FAF6EB]/40 dark:bg-[#0A2540] border border-[#E2E8F0] dark:border-[#1E3A8A] rounded-xl text-xs sm:text-sm text-[#0A2540] dark:text-white placeholder:text-[#829AB1] dark:placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#061528]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A2540] dark:text-white mb-1">
                    Phone Number (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#627D98] dark:text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      placeholder="(408) 555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3.5 py-2.5 bg-[#FAF6EB]/40 dark:bg-[#0A2540] border border-[#E2E8F0] dark:border-[#1E3A8A] rounded-xl text-xs sm:text-sm text-[#0A2540] dark:text-white placeholder:text-[#829AB1] dark:placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#061528]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A2540] dark:text-white mb-1">
                  Website URL to Audit *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#627D98] dark:text-slate-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="https://yourbusiness.com"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    className="w-full pl-9 pr-3.5 py-2.5 bg-[#FAF6EB]/40 dark:bg-[#0A2540] border border-[#E2E8F0] dark:border-[#1E3A8A] rounded-xl text-xs sm:text-sm text-[#0A2540] dark:text-white placeholder:text-[#829AB1] dark:placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#061528]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A2540] dark:text-white mb-1">
                  Primary SEO Objective
                </label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF6EB]/40 dark:bg-[#0A2540] border border-[#E2E8F0] dark:border-[#1E3A8A] rounded-xl text-xs sm:text-sm text-[#0A2540] dark:text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  {goalsList.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A2540] dark:text-white mb-1">
                  Specific Challenges or Competitors to Analyze
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us what you want to achieve or which competitors you want to beat in San Jose..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 bg-[#FAF6EB]/40 dark:bg-[#0A2540] border border-[#E2E8F0] dark:border-[#1E3A8A] rounded-xl text-xs sm:text-sm text-[#0A2540] dark:text-white placeholder:text-[#829AB1] dark:placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#0A2540] hover:from-[#1E40AF] hover:to-[#2563EB] disabled:opacity-60 text-white text-sm sm:text-base font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#D4AF37]/50"
                >
                  {isSubmitting ? (
                    <span>Generating Custom Audit Ticket...</span>
                  ) : (
                    <>
                      <span>Request My Free SEO Audit</span>
                      <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                    </>
                  )}
                </button>
              </div>

              {submitError && (
                <p role="alert" className="text-center text-xs font-semibold text-red-600 dark:text-red-300">
                  {submitError}
                </p>
              )}

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#627D98] dark:text-slate-400 text-center pt-1">
                <Lock className="w-3 h-3 text-[#D4AF37]" />
                <span>Your information is kept 100% private. Zero spam policy.</span>
              </div>

            </form>
          </div>
        ) : (
          /* Submission Success State */
          <div className="text-center py-8 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-[#FAF6EB] dark:bg-[#0A2540] text-[#D4AF37] flex items-center justify-center mx-auto border-2 border-[#E5C882]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0A2540] dark:text-white">
                Audit Request Received!
              </h3>
              <p className="text-sm text-[#334E68] dark:text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Our senior SEO analyst has queued <strong>{formData.websiteUrl || 'your domain'}</strong> for a full 15-point inspection. We will email your custom PDF report and opportunity breakdown to <strong>{formData.email}</strong> within 1 business day.
              </p>
            </div>

            <div className="p-4 bg-[#FAF6EB] dark:bg-[#0A2540] rounded-2xl border border-[#E5C882] dark:border-[#1E3A8A] text-left max-w-md mx-auto text-xs space-y-1.5 text-[#0A2540] dark:text-slate-200">
              <p>• <strong>Target Website:</strong> {formData.websiteUrl || 'Domain queued'}</p>
              <p>• <strong>Primary Focus:</strong> {formData.primaryGoal}</p>
              <p>• <strong>Assigned Lead:</strong> San Jose Technical Review Team</p>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-3 bg-gradient-to-r from-[#0A2540] to-[#1E40AF] hover:from-[#1E40AF] hover:to-[#2563EB] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer border border-[#D4AF37]/50"
            >
              Done & Return to Site
            </button>
          </div>
        )}

      </div>
    </div>
  );
};


