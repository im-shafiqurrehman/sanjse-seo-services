import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { LocalSeoSection } from './components/LocalSeoSection';
import { SmallBusinessSeoSection } from './components/SmallBusinessSeoSection';
import { ProcessSection } from './components/ProcessSection';
import { WhySanjseSection } from './components/WhySanjseSection';
import { ResultsRoiSection } from './components/ResultsRoiSection';
import { NationalSeoSection } from './components/NationalSeoSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { ScrollReveal } from './components/ScrollReveal';
import { AuthPage } from './components/AuthPage';
import { AdminPage } from './components/AdminPage';
import { ProfilePage } from './components/ProfilePage';

function MainApp() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [auditPrefillService, setAuditPrefillService] = useState('');
  const [auditPrefillUrl, setAuditPrefillUrl] = useState('');
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

  const handleOpenAudit = (serviceOrPlan?: string, url?: string) => {
    setAuditPrefillService(serviceOrPlan || '');
    setAuditPrefillUrl(url || '');
    setIsAuditModalOpen(true);
  };

  const renderPageContent = () => {
    switch (currentPath) {
      case '/signin':
        return <AuthPage mode="signin" />;
      case '/signup':
        return <AuthPage mode="signup" />;
      case '/admin':
        return <AdminPage />;
      case '/profile':
        return <ProfilePage />;
      case '/services':
        return <ScrollReveal><ServicesSection onOpenAudit={(service) => handleOpenAudit(service)} /></ScrollReveal>;
      case '/local-seo':
        return <ScrollReveal><LocalSeoSection onOpenAudit={(service) => handleOpenAudit(service)} /></ScrollReveal>;
      case '/about':
        return <ScrollReveal><WhySanjseSection onOpenAudit={() => handleOpenAudit('Strategy Consultation')} /></ScrollReveal>;
      case '/national-seo':
        return <ScrollReveal><NationalSeoSection onOpenAudit={(service) => handleOpenAudit(service)} /></ScrollReveal>;
      case '/process':
        return <ScrollReveal><ProcessSection onOpenAudit={() => handleOpenAudit('Full SEO Implementation Sprint')} /></ScrollReveal>;
      case '/results':
        return <ScrollReveal><ResultsRoiSection onOpenAudit={() => handleOpenAudit('Revenue Growth Campaign')} /></ScrollReveal>;
      case '/faqs':
        return <ScrollReveal><FaqSection /></ScrollReveal>;
      case '/contact':
        return <ScrollReveal><FinalCtaSection onOpenAudit={() => handleOpenAudit()} /></ScrollReveal>;
      case '/':
      default:
        return (
          <>
            <ScrollReveal duration={0.8}><Hero onOpenAudit={(url) => handleOpenAudit(undefined, url)} /></ScrollReveal>
            <ScrollReveal><ServicesSection onOpenAudit={(service) => handleOpenAudit(service)} /></ScrollReveal>
            <ScrollReveal delay={0.05}><LocalSeoSection onOpenAudit={(service) => handleOpenAudit(service)} /></ScrollReveal>
            <ScrollReveal delay={0.05}><SmallBusinessSeoSection onOpenAudit={(service) => handleOpenAudit(service)} /></ScrollReveal>
            <ScrollReveal><ProcessSection onOpenAudit={() => handleOpenAudit('Full SEO Implementation Sprint')} /></ScrollReveal>
            <ScrollReveal delay={0.05}><WhySanjseSection onOpenAudit={() => handleOpenAudit('Strategy Consultation')} /></ScrollReveal>
            <ScrollReveal><ResultsRoiSection onOpenAudit={() => handleOpenAudit('Revenue Growth Campaign')} /></ScrollReveal>
            <ScrollReveal delay={0.05}><NationalSeoSection onOpenAudit={(service) => handleOpenAudit(service)} /></ScrollReveal>
            <ScrollReveal><WhyChooseUsSection /></ScrollReveal>
            <ScrollReveal delay={0.05}><TestimonialsSection /></ScrollReveal>
            <ScrollReveal><FaqSection /></ScrollReveal>
            <ScrollReveal delay={0.05}><FinalCtaSection onOpenAudit={() => handleOpenAudit()} /></ScrollReveal>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#07172C] text-[#0A2540] dark:text-[#F8FAFC] selection:bg-[#D4AF37] selection:text-[#0A2540] flex flex-col font-['Manrope',sans-serif] transition-colors duration-200">
      {/* Sticky Header Navigation */}
      <Header onOpenAudit={() => handleOpenAudit()} />

      <main className="flex-1">{renderPageContent()}</main>

      {/* Multi-Column Footer */}
      <ScrollReveal><Footer onOpenAudit={(service) => handleOpenAudit(service)} /></ScrollReveal>

      {/* Direct WhatsApp Contact Floating Widget */}
      <WhatsAppWidget phoneNumber="923376248458" />

      {/* Global 15-Point Free SEO Audit Lead Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        prefillService={auditPrefillService}
        prefillUrl={auditPrefillUrl}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}


