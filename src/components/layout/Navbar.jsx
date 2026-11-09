import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Sun,
  Moon,
  Monitor,
  MessageCircle,
  Globe,
  Sparkles,
  Cpu,
  Briefcase,
  Workflow,
  Tag,
  ShieldCheck,
  HelpCircle,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { WhatsAppIcon3D } from '../ui/WhatsAppIcon3D';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { scrollToSection, cn } from '../../lib/utils';
import { siteConfig } from '../../config/siteConfig';

export function Navbar({ theme, setTheme, toggleTheme, locale, toggleLocale, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Synchronize effective dark/light mode state reactively
  useEffect(() => {
    const checkDark = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, [theme]);

  const navLinks = [
    { label: t.nav.services, id: 'services', icon: Sparkles },
    { label: t.nav.solutions, id: 'solutions', icon: Cpu },
    { label: t.nav.portfolio, id: 'portfolio', icon: Briefcase },
    { label: t.nav.process, id: 'process', icon: Workflow },
    { label: t.nav.pricing, id: 'pricing', icon: Tag },
    { label: t.nav.why, id: 'why', icon: ShieldCheck },
    { label: t.nav.faq, id: 'faq', icon: HelpCircle },
  ];

  // ScrollSpy to track active section and scroll state
  useEffect(() => {
    const sectionIds = ['services', 'solutions', 'portfolio', 'process', 'pricing', 'why', 'faq'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      if (scrollY < 200) {
        setActiveSection('');
        return;
      }

      const scrollPosition = scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (id) => {
    scrollToSection(id, () => {
      setActiveSection(id);
      setMobileMenuOpen(false);
    });
  };

  const whatsAppUrl = buildWhatsAppUrl({ locale });

  return (
    <header className="hallmark-navbar fixed top-2.5 sm:top-4 md:top-5 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none transition-all duration-300 w-full">
      {/* Floating Pill Navbar Dock */}
      <nav
        aria-label="Main Navigation"
        className={cn(
          "pointer-events-auto rounded-2xl border transition-all duration-300 flex items-center justify-between gap-1 sm:gap-2.5 lg:gap-3 p-1.5 sm:p-2",
          "w-full max-w-[calc(100vw-1rem)] lg:max-w-fit shadow-xl backdrop-blur-xl",
          // Light mode glassmorphism
          "bg-white/90 border-slate-200/90 shadow-[0_12px_36px_-6px_rgba(11,18,32,0.08)] ring-1 ring-black/5",
          // Dark mode glassmorphism (matches reference dock)
          "dark:bg-[#071328]/95 dark:border-white/10 dark:shadow-[0_12px_36px_-6px_rgba(0,0,0,0.7)] dark:ring-1 dark:ring-white/5",
          scrolled && "shadow-2xl bg-white/95 border-slate-300/80 dark:bg-[#060f20]/95 dark:border-white/15"
        )}
      >
        {/* Brand Logo with Dynamic Theme Detection */}
        {(() => {
          const currentLogoSrc = isDarkMode
            ? "/assets/logo/logoTransDarkMode.png"
            : "/assets/logo/logoTransLightMode.png";

          const currentCapsuleClass = isDarkMode
            ? (activeSection === ''
                ? "bg-brand-blue/20 border-brand-blue/40 shadow-sm shadow-brand-blue/20"
                : "bg-white/5 border-white/10 hover:border-brand-blue/40 hover:bg-brand-blue/15")
            : (activeSection === ''
                ? "bg-blue-50/90 border-brand-blue/40 shadow-sm shadow-brand-blue/10"
                : "bg-slate-100/90 border-slate-200/90 shadow-sm hover:bg-white hover:border-brand-blue/40");

          return (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection('');
              }}
              className={cn(
                "flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 transition-all duration-300 border shrink-0 min-w-0 shadow-sm",
                currentCapsuleClass
              )}
              aria-label="BionoraDev Home"
            >
              <img
                key={currentLogoSrc}
                src={currentLogoSrc}
                alt="BionoraDev Logo"
                width="130"
                height="35"
                className="h-6 sm:h-7 md:h-8 w-auto max-w-[110px] sm:max-w-[130px] md:max-w-[150px] object-contain shrink-0 group-hover:scale-[1.02] transition-transform duration-200"
              />
            </a>
          );
        })()}

        {/* Desktop Navigation Links (.nav-menu specification) */}
        <div className="nav-menu hidden lg:flex items-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
                  isActive && "active"
                )}
              >
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>

        {/* Vertical Divider before Controls (Desktop Only) */}
        <div className="hidden lg:block h-5 w-px bg-slate-300/80 dark:bg-white/15 mx-0.5 sm:mx-1 shrink-0" aria-hidden="true" />

        {/* Desktop Controls (Language, Theme, WhatsApp CTA) */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {/* Language Switcher Pill */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold rounded-full border border-slate-200/80 dark:border-white/10 bg-slate-100/90 dark:bg-white/5 hover:border-brand-blue/40 hover:bg-brand-blue/10 hover:text-brand-deep dark:hover:border-brand-blue dark:hover:bg-brand-blue/20 dark:hover:text-white text-slate-700 dark:text-txt transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue group"
            aria-label={t.nav.langToggle}
            title={t.nav.langToggle}
          >
            <Globe className="w-3.5 h-3.5 text-brand-blue group-hover:text-brand-deep dark:text-accent dark:group-hover:text-brand-cyan transition-colors" />
            <span className="uppercase">{locale}</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-200/80 dark:border-white/10 bg-slate-100/90 dark:bg-white/5 hover:border-brand-blue/40 hover:bg-brand-blue/10 hover:text-brand-deep dark:hover:border-brand-blue dark:hover:bg-brand-blue/20 text-slate-700 dark:text-txt transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            aria-label={t.nav.themeToggle}
            title={`Theme: ${theme}`}
          >
            {theme === 'dark' ? (
              <Moon className="w-4 h-4 text-brand-cyan" />
            ) : theme === 'light' ? (
              <Sun className="w-4 h-4 text-amber-500" />
            ) : (
              <Monitor className="w-4 h-4 text-brand-blue dark:text-accent" />
            )}
          </button>

          {/* WhatsApp CTA Button */}
          <Button
            href={whatsAppUrl}
            variant="gradient"
            size="sm"
            className="group gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold shrink-0"
          >
            <WhatsAppIcon3D className="w-4 h-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" size={16} />
            <span className="hidden xl:inline">{t.nav.ctaWhatsApp}</span>
            <span className="xl:hidden">WhatsApp</span>
          </Button>
        </div>

        {/* Mobile Controls (< lg) */}
        <div className="flex lg:hidden items-center gap-1 sm:gap-1.5 shrink-0">
          {/* Quick Language Toggle */}
          <button
            onClick={toggleLocale}
            className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-[11px] sm:text-xs font-bold rounded-full border border-slate-200/80 dark:border-white/10 bg-slate-100/90 dark:bg-white/5 text-slate-700 dark:text-txt uppercase hover:border-brand-blue/40 hover:bg-brand-blue/10 hover:text-brand-deep dark:hover:border-brand-blue dark:hover:bg-brand-blue/20 dark:hover:text-white transition-all"
            aria-label={t.nav.langToggle}
          >
            {locale}
          </button>

          {/* Quick Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1 sm:p-1.5 md:p-2 rounded-full border border-slate-200/80 dark:border-white/10 bg-slate-100/90 dark:bg-white/5 text-slate-700 dark:text-txt hover:border-brand-blue/40 hover:bg-brand-blue/10 hover:text-brand-deep dark:hover:border-brand-blue dark:hover:bg-brand-blue/20 transition-all"
            aria-label={t.nav.themeToggle}
          >
            {theme === 'dark' ? (
              <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-cyan" />
            ) : (
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 sm:p-1.5 md:p-2 rounded-full border border-slate-200/80 dark:border-brand-cyan/40 bg-slate-100/90 dark:bg-brand-cyan/15 text-slate-700 dark:text-brand-cyan hover:border-brand-blue/40 hover:bg-brand-blue/10 hover:text-brand-deep dark:hover:border-brand-blue transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800 dark:text-txt" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800 dark:text-brand-cyan" />}
          </button>
        </div>
      </nav>

      {/* Mobile Floating Menu Card */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Dismiss Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/40 dark:bg-black/70 backdrop-blur-sm lg:hidden pointer-events-auto animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Floating Dropdown Card */}
          <div className="fixed top-16 sm:top-20 left-3 right-3 sm:left-4 sm:right-4 z-50 max-w-md mx-auto rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-brand-ink/95 backdrop-blur-2xl shadow-2xl p-4 sm:p-5 animate-in fade-in zoom-in-95 duration-200 pointer-events-auto">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      "relative flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all text-left",
                      isActive
                        ? "text-brand-deep font-bold bg-brand-blue/10 dark:bg-brand-blue/15 dark:text-brand-cyan"
                        : "text-slate-700 hover:text-brand-deep hover:bg-slate-100/80 dark:text-slate-300 dark:hover:text-brand-cyan dark:hover:bg-white/5"
                    )}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-4 rounded-full bg-brand-deep dark:bg-brand-cyan shadow-[0_0_8px_currentColor]" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-white/10 flex flex-col gap-3">
              <Button
                href={whatsAppUrl}
                variant="gradient"
                size="md"
                className="group w-full justify-center gap-2 rounded-full font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <WhatsAppIcon3D className="w-4 h-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" size={18} />
                <span>{t.nav.ctaWhatsApp}</span>
              </Button>

              <div className="flex items-center justify-between px-3 text-xs text-slate-500 dark:text-txt-muted">
                <span>
                  Bahasa: <strong className="text-slate-800 dark:text-txt uppercase">{locale}</strong>
                </span>
                <span>
                  Tema: <strong className="text-slate-800 dark:text-txt capitalize">{theme}</strong>
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
