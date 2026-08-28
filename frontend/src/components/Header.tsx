import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Sun, Moon, UserRound } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { apiUrl } from '../lib/api';

interface HeaderProps {
  onOpenAudit: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAudit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const [currentUser, setCurrentUser] = useState<{ name: string; role: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetch(apiUrl('/api/auth/me'), { credentials: 'include' })
      .then((response) => response.json())
      .then((result) => setCurrentUser(result.authenticated ? result.user : null))
      .catch(() => setCurrentUser(null));
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Local SEO', href: '/local-seo' },
    { label: 'National SEO', href: '/national-seo' },
    { label: 'Process', href: '/process' },
    { label: 'Results & ROI', href: '/results' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#07172C]/95 backdrop-blur-md border-b border-[#E2E8F0] dark:border-[#1E3A8A]/80 shadow-[0_4px_20px_rgba(10,37,64,0.06)] py-3.5'
          : 'bg-white/80 dark:bg-[#07172C]/80 backdrop-blur-xs py-4 sm:py-5 border-b border-[#E2E8F0]/60 dark:border-[#1E3A8A]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo / Wordmark in Royal Navy & Gold */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-gradient-to-br from-[#0A2540] via-[#1E40AF] to-[#0A2540] text-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-200 border border-[#D4AF37]/60">
            <div className="w-4 h-4 border-2 border-[#D4AF37] rounded-xs flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-xs"></div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-0.5">
              <span className="text-xl font-extrabold tracking-tight text-[#0A2540] dark:text-white">
                Sanjose<span className="text-[#D4AF37] font-bold">SEO</span>
              </span>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#627D98] dark:text-[#E5C882] block -mt-1">
              San Jose, California
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13.5px] font-semibold text-[#334E68] dark:text-slate-300 hover:text-[#1E40AF] dark:hover:text-[#F59E0B] transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          id="theme-toggle-btn"
          onClick={toggleTheme}
          className="ml-auto mr-2 sm:mr-3 lg:ml-6 lg:mr-0 p-2 rounded-full text-[#0A2540] dark:text-[#E5C882] hover:text-[#1E40AF] dark:hover:text-white bg-[#FAF6EB] dark:bg-[#0A2540] hover:bg-[#F3EAD3] dark:hover:bg-[#133358] border border-[#E5C882] dark:border-[#1E3A8A] transition-all cursor-pointer"
          aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-[#0A2540]" />}
        </button>

        {currentUser && (
          <div className="relative group ml-1 mr-3 sm:mr-4">
            <a
              href={currentUser.role === 'admin' ? '/admin' : '/profile'}
              className="flex items-center gap-1.5 rounded-full border border-[#E5C882] dark:border-[#1E3A8A] px-3 py-2 text-xs font-bold text-[#0A2540] dark:text-[#E5C882] hover:bg-[#FAF6EB] dark:hover:bg-[#0A2540] transition-colors"
              aria-label={currentUser.role === 'admin' ? 'Open admin dashboard' : 'Open profile'}
            >
              <UserRound className="w-4 h-4" />
              <span>Profile</span>
            </a>
            <div className="invisible absolute right-0 top-full z-50 mt-2 w-48 translate-y-1 rounded-xl border border-[#E5C882] dark:border-[#1E3A8A] bg-white dark:bg-[#0E2F54] p-3 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <p className="truncate px-2 py-1 text-sm font-bold text-[#0A2540] dark:text-white">{currentUser.name}</p>
              <button onClick={() => { void (async () => { await fetch(apiUrl('/api/auth/signout'), { method: 'POST', credentials: 'include' }); window.location.href = '/'; })(); }} className="mt-2 flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-xs font-semibold text-[#334E68] hover:bg-[#FAF6EB] dark:text-slate-300 dark:hover:bg-[#07172C] cursor-pointer"><span>Logout</span></button>
            </div>
          </div>
        )}

        {/* Right Action Area: Free Audit */}
        <div className="hidden sm:flex items-center gap-2.5">
          {!currentUser && <a href="/signin" className="px-3 py-2 rounded-full border border-[#E5C882] dark:border-[#1E3A8A] text-xs font-bold text-[#0A2540] dark:text-[#E5C882] hover:bg-[#FAF6EB] dark:hover:bg-[#0A2540] transition-colors">Sign in</a>}
          {/* Free SEO Audit Button */}
          <button
            id="nav-audit-button"
            onClick={onOpenAudit}
            className="bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#0A2540] hover:from-[#1E40AF] hover:to-[#2563EB] text-white px-4.5 py-2 rounded-full text-[13.5px] font-bold shadow-[0_4px_14px_rgba(10,37,64,0.25)] border border-[#D4AF37]/50 transition-all duration-200 hover:scale-[1.02] cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Free SEO Audit</span>
          </button>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#0A2540] dark:text-white hover:bg-[#FAF6EB] dark:hover:bg-[#0A2540] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0A2540] border-b border-[#E5C882] dark:border-[#1E3A8A] px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#0A2540] dark:text-slate-200 hover:text-[#1E40AF] dark:hover:text-[#F59E0B] py-2 border-b border-zinc-100 dark:border-zinc-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-3 bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#0A2540] text-white text-sm font-bold rounded-xl shadow-md border border-[#D4AF37]/40 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Request Free 15-Point Audit</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


