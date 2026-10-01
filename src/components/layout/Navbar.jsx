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
      setScrolled(window.scrollY > 20);

      if (window.scrollY < 200) {
        setActiveSection('');
        return;
      }

      const scrollPosition = window.scrollY + 180;
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
    <header className="fixed top-2.5 sm:top-4 md:top-5 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none transition-all duration-300 w-full">
      {/* Floating Pill Navbar Dock */}
      <nav
        aria-label="Main Navigation"
        className={cn(
          "pointer-events-auto rounded-full border transition-all duration-300 flex items-center justify-between gap-1 sm:gap-2.5 lg:gap-3 p-1 sm:p-2",
          "w-full max-w-[calc(100vw-1rem)] lg:max-w-fit shadow-xl backdrop-blur-xl",
          // Dark mode glassmorphism
          "dark:bg-brand-ink/85 dark:border-white/10 dark:shadow-[0_12px_36px_-6px_rgba(0,0,0,0.7)] dark:ring-1 dark:ring-white/5",
          // Light mode glassmorphism
          "bg-surface/85 border-border/80 shadow-[0_12px_36px_-6px_rgba(11,18,32,0.08)] ring-1 ring-black/5",
          scrolled && "shadow-2xl dark:bg-brand-ink/90 bg-surface/95 dark:border-white/15 border-border"
        )}
      >
        {/* Brand Logo & Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('');
          }}
          className={cn(
            "flex items-center gap-1.5 sm:gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-full pl-1 sm:pl-1.5 pr-2 sm:pr-2.5 py-0.5 sm:py-1 transition-all border shrink-0 min-w-0",
            activeSection === ''
              ? "bg-surface-muted/90 dark:bg-brand-blue/20 shadow-sm border-border/50 dark:border-brand-blue"
              : "hover:border-brand-blue hover:bg-surface-muted/50 dark:hover:border-brand-blue dark:hover:bg-white/5 border-transparent"
          )}
          aria-label="BionoraDev Home"
        >
          <img
            src={siteConfig.brand.logo || "/assets/logo/logoAja.png"}
            alt="BionoraDev Logo"
            width="32"
            height="32"
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain shrink-0 group-hover:scale-105 transition-transform duration-200"
          />
          <div className="flex items-baseline font-brand tracking-wider text-xs sm:text-base md:text-lg font-bold whitespace-nowrap">
            <span className="text-txt transition-colors">{siteConfig.brand.wordmarkFirst}</span>
            <span className="text-brand-blue ml-0.5">{siteConfig.brand.wordmarkSecond}</span>
          </div>
        </a>

        {/* Desktop Navigation Links (Segmented Pill Style) */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={cn(
                  "group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs xl:text-sm font-brand font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue whitespace-nowrap border",
                  isActive
                    ? "bg-brand-blue text-brand-white border-brand-blue shadow-sm shadow-brand-blue/25 font-bold dark:bg-brand-blue/25 dark:border-brand-blue dark:text-white dark:shadow-[0_0_12px_rgba(0,180,255,0.35)]"
                    : "text-txt-muted border-transparent hover:border-brand-blue hover:bg-brand-blue hover:text-brand-white dark:hover:border-brand-blue dark:hover:bg-brand-blue/20 dark:hover:text-white"
                )}
              >
                {Icon && (
                  <Icon
                    className={cn(
                      "w-3.5 h-3.5 transition-colors",
                      isActive
                        ? "text-brand-white dark:text-brand-cyan"
                        : "text-txt-muted group-hover:text-brand-white dark:group-hover:text-brand-cyan"
                    )}
                  />
                )}
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>

        {/* Vertical Divider before Controls (Desktop Only) */}
        <div className="hidden lg:block h-4 w-px bg-border/70 dark:bg-white/15 mx-0.5 sm:mx-1 shrink-0" aria-hidden="true" />

        {/* Desktop Controls (Language, Theme, WhatsApp CTA) */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {/* Language Switcher Pill */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold rounded-full border border-border/60 dark:border-white/10 bg-surface-muted/50 dark:bg-white/5 hover:border-brand-blue hover:bg-brand-blue hover:text-brand-white dark:hover:border-brand-blue dark:hover:bg-brand-blue/20 dark:hover:text-white text-txt transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue group"
            aria-label={t.nav.langToggle}
            title={t.nav.langToggle}
          >
            <Globe className="w-3.5 h-3.5 text-accent group-hover:text-brand-white dark:group-hover:text-brand-cyan transition-colors" />
            <span className="uppercase">{locale}</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border/60 dark:border-white/10 bg-surface-muted/50 dark:bg-white/5 hover:border-brand-blue hover:bg-brand-blue/10 dark:hover:border-brand-blue dark:hover:bg-brand-blue/20 text-txt transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            aria-label={t.nav.themeToggle}
            title={`Theme: ${theme}`}
          >
            {theme === 'dark' ? (
              <Moon className="w-4 h-4 text-brand-cyan" />
            ) : theme === 'light' ? (
              <Sun className="w-4 h-4 text-amber-500" />
            ) : (
              <Monitor className="w-4 h-4 text-accent" />
            )}
          </button>

          {/* WhatsApp CTA Button */}
          <Button
            href={whatsAppUrl}
            variant="gradient"
            size="sm"
            className="gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold shadow-glow-cyan/20 shrink-0"
          >
            <WhatsAppIcon3D className="w-4 h-4" size={16} />
            <span className="hidden xl:inline">{t.nav.ctaWhatsApp}</span>
            <span className="xl:hidden">WhatsApp</span>
          </Button>
        </div>

        {/* Mobile Controls (< lg) */}
        <div className="flex lg:hidden items-center gap-1 sm:gap-1.5 shrink-0">
          {/* Quick Language Toggle */}
          <button
            onClick={toggleLocale}
            className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-[11px] sm:text-xs font-bold rounded-full border border-border/60 dark:border-white/10 bg-surface-muted/50 dark:bg-white/5 text-txt uppercase hover:border-brand-blue hover:bg-brand-blue hover:text-brand-white dark:hover:border-brand-blue dark:hover:bg-brand-blue/20 dark:hover:text-white transition-all"
            aria-label={t.nav.langToggle}
          >
            {locale}
          </button>

          {/* Quick Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1 sm:p-1.5 md:p-2 rounded-full border border-border/60 dark:border-white/10 bg-surface-muted/50 dark:bg-white/5 text-txt hover:border-brand-blue hover:bg-brand-blue/10 dark:hover:border-brand-blue dark:hover:bg-brand-blue/20 transition-all"
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
            className="p-1 sm:p-1.5 md:p-2 rounded-full border border-brand-cyan/40 dark:border-brand-cyan/40 bg-brand-cyan/10 dark:bg-brand-cyan/15 text-brand-cyan hover:border-brand-blue dark:hover:border-brand-blue transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-txt" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan" />}
          </button>
        </div>
      </nav>

      {/* Mobile Floating Menu Card */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Dismiss Overlay */}
          <div
            className="fixed inset-0 z-40 bg-bg/60 backdrop-blur-sm lg:hidden pointer-events-auto animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Floating Dropdown Card */}
          <div className="fixed top-16 sm:top-20 left-3 right-3 sm:left-4 sm:right-4 z-50 max-w-md mx-auto rounded-3xl border border-border/80 dark:border-white/10 bg-surface/95 dark:bg-brand-ink/95 backdrop-blur-2xl shadow-2xl p-4 sm:p-5 animate-in fade-in zoom-in-95 duration-200 pointer-events-auto">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={cn(
                      "group flex items-center gap-3 px-4 py-2.5 rounded-full text-sm font-brand font-semibold tracking-wide transition-all text-left border",
                      isActive
                        ? "bg-brand-blue text-brand-white border-brand-blue font-bold shadow-sm dark:bg-brand-blue/25 dark:border-brand-blue dark:text-white"
                        : "text-txt-muted border-transparent hover:border-brand-blue hover:bg-brand-blue hover:text-brand-white dark:hover:border-brand-blue dark:hover:bg-brand-blue/20 dark:hover:text-white"
                    )}
                  >
                    {Icon && (
                      <Icon
                        className={cn(
                          "w-4 h-4 shrink-0 transition-colors",
                          isActive
                            ? "text-brand-white dark:text-brand-cyan"
                            : "text-txt-muted group-hover:text-brand-white dark:group-hover:text-brand-cyan"
                        )}
                      />
                    )}
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-4 pt-4 border-t border-border/60 dark:border-white/10 flex flex-col gap-3">
              <Button
                href={whatsAppUrl}
                variant="gradient"
                size="md"
                className="w-full justify-center gap-2 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <WhatsAppIcon3D className="w-4 h-4" size={18} />
                <span>{t.nav.ctaWhatsApp}</span>
              </Button>

              <div className="flex items-center justify-between px-3 text-xs text-txt-muted">
                <span>
                  Bahasa: <strong className="text-txt uppercase">{locale}</strong>
                </span>
                <span>
                  Tema: <strong className="text-txt capitalize">{theme}</strong>
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
