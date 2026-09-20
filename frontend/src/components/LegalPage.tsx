import React from 'react';
import { contactEmail } from '../lib/contact';

interface LegalPageProps {
  type: 'privacy' | 'terms';
}

const placeholders = {
  company: '[COMPANY LEGAL NAME REQUIRED]',
  email: contactEmail,
  address: '[BUSINESS ADDRESS REQUIRED]',
};

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const isPrivacy = type === 'privacy';
  return (
    <main className="flex-1 bg-[#FAF6EB]/50 dark:bg-[#07172C] px-4 py-16 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto bg-white dark:bg-[#0E2F54] border border-[#D9E2EC] dark:border-[#1E3A8A] rounded-2xl p-6 sm:p-10 text-[#334E68] dark:text-slate-300">
        <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Sanjose SEO Services</p>
        <h1 className="mt-2 text-3xl font-extrabold text-[#0A2540] dark:text-white">{isPrivacy ? 'Privacy Policy' : 'Terms of Service'}</h1>
        <p className="mt-3 text-sm">Effective date: August 29, 2026</p>

        {isPrivacy ? (
          <div className="mt-8 space-y-7 text-sm leading-relaxed">
            <section><h2 className="text-lg font-bold text-[#0A2540] dark:text-white">Information We Collect</h2><p className="mt-2">We may collect your name, business name, email address, phone number, website URL, and message when you submit a contact or audit form. We may also receive basic website usage, device, and browser information needed to operate and improve this site.</p></section>
            <section><h2 className="text-lg font-bold text-[#0A2540] dark:text-white">Cookies and Analytics</h2><p className="mt-2">This site may use essential cookies for authentication and preferences. Analytics services may collect aggregated usage data if enabled in the production configuration. No analytics provider should be enabled without updating this policy.</p></section>
            <section><h2 className="text-lg font-bold text-[#0A2540] dark:text-white">How We Use Information</h2><p className="mt-2">Form information is used to respond to inquiries, evaluate SEO requests, provide services, maintain security, and communicate about a request. We do not sell form submissions.</p></section>
            <section><h2 className="text-lg font-bold text-[#0A2540] dark:text-white">Third-Party Services and Retention</h2><p className="mt-2">Submissions may be processed by the configured email provider and stored in the configured application database. We retain information only as long as reasonably needed for the request, business records, security, or legal obligations.</p></section>
            <section><h2 className="text-lg font-bold text-[#0A2540] dark:text-white">Security and Your Rights</h2><p className="mt-2">We use reasonable technical and organizational safeguards, but no online system is guaranteed secure. Depending on your location, you may request access, correction, deletion, or an explanation of how your information is used.</p></section>
            <section><h2 className="text-lg font-bold text-[#0A2540] dark:text-white">Contact</h2><p className="mt-2">{placeholders.company}<br />{placeholders.address}<br />{placeholders.email}</p></section>
            <section><h2 className="text-lg font-bold text-[#0A2540] dark:text-white">Updates</h2><p className="mt-2">We may update this policy as the website, services, or legal requirements change. The effective date above will be updated when changes are published.</p></section>
          </div>
        ) : (
          <div className="mt-8 space-y-7 text-sm leading-relaxed">
            <section><h2 className="text-lg font-bold text-[#0A2540] dark:text-white">Acceptance of Terms</h2><p className="mt-2">By using this website or requesting services, you agree to these terms. If you do not agree, please do not use the website.</p></section>
            <section><h2 className="text-lg font-bold text-[#0A2540] dark:text-white">Services and Limitations</h2><p className="mt-2">SEO services may include technical recommendations, content guidance, local search optimization, reporting, and related consulting. Search engines control their algorithms and rankings. No ranking, traffic, lead, or revenue outcome is guaranteed.</p></section>
            <section><h2 className="text-lg font-bold text-[#0A2540] dark:text-white">User Responsibilities</h2><p className="mt-2">You are responsible for the accuracy of information supplied to us, access you authorize, approval of published materials, and ensuring that your business activities comply with applicable law.</p></section>
            <section><h2 className="text-lg font-bold text-[#0A2540] dark:text-white">Intellectual Property and Third Parties</h2><p className="mt-2">Website content and original materials remain protected by applicable intellectual property law. Third-party tools and platforms are governed by their own terms and availability.</p></section>
            <section><h2 className="text-lg font-bold text-[#0A2540] dark:text-white">Payment, Termination, and Liability</h2><p className="mt-2">Payment terms, if applicable, must be agreed in writing before work begins. Either party may end an engagement according to its written agreement. To the extent permitted by law, liability is limited to the fees paid for the relevant service, excluding liabilities that cannot legally be limited.</p></section>
            <section><h2 className="text-lg font-bold text-[#0A2540] dark:text-white">Governing Law and Contact</h2><p className="mt-2">[GOVERNING LAW AND JURISDICTION REQUIRED]<br />{placeholders.company}<br />{placeholders.address}<br />{placeholders.email}</p></section>
          </div>
        )}
      </article>
    </main>
  );
};
