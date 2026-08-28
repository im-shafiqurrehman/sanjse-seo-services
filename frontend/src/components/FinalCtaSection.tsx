import React, { useState } from 'react';
import { Sparkles, ArrowRight, Phone, CheckCircle2, Mail, User, Send } from 'lucide-react';
import { apiUrl } from '../lib/api';

interface FinalCtaSectionProps {
  onOpenAudit: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenAudit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors: Record<string, string> = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedMessage = formData.message.trim();

    if (trimmedName.length < 2) errors.name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) errors.email = 'Please enter a valid email address.';
    if (trimmedPhone && !/^[+()\d\s.-]{7,20}$/.test(trimmedPhone)) errors.phone = 'Please enter a valid phone number.';
    if (trimmedMessage.length < 10) errors.message = 'Please tell us a little more about your project.';

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setSubmitState('error');
      setSubmitError('Please correct the highlighted fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitState('idle');
    setSubmitError('');
    setValidationErrors({});

    try {
      const response = await fetch(apiUrl('/api/contact-requests'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail, phone: trimmedPhone, message: trimmedMessage }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || 'Unable to send your message.');
      }

      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitState('success');
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setSubmitState('error');
      setSubmitError(error instanceof Error ? error.message : 'We could not send your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF6EB]/60 dark:bg-[#07172C] relative overflow-hidden border-t border-[#E5C882]/70 dark:border-[#1E3A8A] transition-colors duration-200">
      {/* Decorative Floating Circles */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#E5C882]/20 dark:bg-[#1E40AF]/20 rounded-full filter blur-2xl opacity-70 pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-[#1E40AF]/10 dark:bg-[#0A2540]/60 rounded-full filter blur-2xl opacity-80 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6EB] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#FEF3C7] text-xs font-bold mb-4 border border-[#E5C882] dark:border-[#D4AF37]/50 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Transform Your Search Presence</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] dark:text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Ready to Turn Search Traffic Into Sustainable Growth?
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[#334E68] dark:text-slate-300 mt-4 leading-relaxed max-w-2xl mx-auto">
          Let’s find the revenue opportunities hiding in your website and build a clear, data-driven roadmap to the top of Google Search and Google Maps in San Jose.
        </p>

        {/* Dual Conversion Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#0A2540] hover:from-[#1E40AF] hover:to-[#2563EB] text-white text-sm sm:text-base font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#D4AF37]/50"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Get Your Free SEO Audit</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </button>

          <a
            href="https://wa.me/923376248458?text=Hello%20Sanjose%20SEO%20Services%2C%20I%20would%20like%20to%20discuss%20an%20SEO%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-[#0E2F54] hover:bg-[#FAF6EB] dark:hover:bg-[#1E40AF] text-[#0A2540] dark:text-white border border-[#E5C882] dark:border-[#D4AF37]/40 text-sm sm:text-base font-bold rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mt-10 text-left bg-white/80 dark:bg-[#0A2540]/80 border border-[#E5C882] dark:border-[#1E3A8A] rounded-2xl p-5 sm:p-7 shadow-sm">
          <div className="mb-5">
            <h3 className="text-xl font-extrabold text-[#0A2540] dark:text-white">Contact Us</h3>
            <p className="text-sm text-[#627D98] dark:text-slate-400 mt-1">Tell us what you need and we will get back to you shortly.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="block text-xs font-bold text-[#0A2540] dark:text-white mb-1.5">Full name *</span>
              <span className="relative block">
                <User className="absolute left-3 top-3 w-4 h-4 text-[#627D98]" aria-hidden="true" />
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  aria-invalid={Boolean(validationErrors.name)}
                  aria-describedby={validationErrors.name ? 'contact-name-error' : undefined}
                  placeholder="Jane Doe"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#E2E8F0] dark:border-[#1E3A8A] bg-[#FAF6EB]/50 dark:bg-[#07172C] text-sm text-[#0A2540] dark:text-white placeholder:text-[#829AB1] focus:outline-none focus:border-[#D4AF37]"
                />
              </span>
              {validationErrors.name && <span id="contact-name-error" className="mt-1 block text-xs font-semibold text-red-600 dark:text-red-300">{validationErrors.name}</span>}
            </label>

            <label className="block">
              <span className="block text-xs font-bold text-[#0A2540] dark:text-white mb-1.5">Email address *</span>
              <span className="relative block">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-[#627D98]" aria-hidden="true" />
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  aria-invalid={Boolean(validationErrors.email)}
                  aria-describedby={validationErrors.email ? 'contact-email-error' : undefined}
                  placeholder="jane@yourcompany.com"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#E2E8F0] dark:border-[#1E3A8A] bg-[#FAF6EB]/50 dark:bg-[#07172C] text-sm text-[#0A2540] dark:text-white placeholder:text-[#829AB1] focus:outline-none focus:border-[#D4AF37]"
                />
              </span>
              {validationErrors.email && <span id="contact-email-error" className="mt-1 block text-xs font-semibold text-red-600 dark:text-red-300">{validationErrors.email}</span>}
            </label>
          </div>

          <label className="block mt-4">
            <span className="block text-xs font-bold text-[#0A2540] dark:text-white mb-1.5">Phone number <span className="font-normal text-[#627D98]">(optional)</span></span>
            <span className="relative block">
              <Phone className="absolute left-3 top-3 w-4 h-4 text-[#627D98]" aria-hidden="true" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                aria-invalid={Boolean(validationErrors.phone)}
                aria-describedby={validationErrors.phone ? 'contact-phone-error' : undefined}
                placeholder="(408) 555-0123"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#E2E8F0] dark:border-[#1E3A8A] bg-[#FAF6EB]/50 dark:bg-[#07172C] text-sm text-[#0A2540] dark:text-white placeholder:text-[#829AB1] focus:outline-none focus:border-[#D4AF37]"
              />
            </span>
            {validationErrors.phone && <span id="contact-phone-error" className="mt-1 block text-xs font-semibold text-red-600 dark:text-red-300">{validationErrors.phone}</span>}
          </label>

          <label className="block mt-4">
            <span className="block text-xs font-bold text-[#0A2540] dark:text-white mb-1.5">How can we help? *</span>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(event) => setFormData({ ...formData, message: event.target.value })}
              aria-invalid={Boolean(validationErrors.message)}
              aria-describedby={validationErrors.message ? 'contact-message-error' : undefined}
              placeholder="Tell us about your business and your SEO goals..."
              className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0] dark:border-[#1E3A8A] bg-[#FAF6EB]/50 dark:bg-[#07172C] text-sm text-[#0A2540] dark:text-white placeholder:text-[#829AB1] focus:outline-none focus:border-[#D4AF37] resize-y"
            />
            {validationErrors.message && <span id="contact-message-error" className="mt-1 block text-xs font-semibold text-red-600 dark:text-red-300">{validationErrors.message}</span>}
          </label>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-5">
            <div className="text-xs" aria-live="polite">
              {submitState === 'success' && <span className="font-semibold text-green-700 dark:text-green-300">Thanks, your message has been sent.</span>}
              {submitState === 'error' && <span className="font-semibold text-red-600 dark:text-red-300">{submitError}</span>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-6 py-3 bg-[#0A2540] hover:bg-[#1E40AF] disabled:opacity-60 text-white text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <Send className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>
        </form>

        {/* Reassurance Footer */}
        <div className="mt-8 pt-6 border-t border-[#E2E8F0] dark:border-[#1E3A8A] flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#334E68] dark:text-slate-300">
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
            No contracts or obligation
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
            100% White-Hat strategies
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
            Direct Silicon Valley specialist access
          </span>
        </div>

      </div>
    </section>
  );
};


