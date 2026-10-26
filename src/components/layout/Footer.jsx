import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { WhatsAppIcon3D } from '../ui/WhatsAppIcon3D';
import { FooterCredit } from '../ui/FooterCredit';
import { InstagramIcon, YouTubeIcon, TikTokIcon, FacebookIcon, XIcon } from '../ui/SocialLinks';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { scrollToSection } from '../../lib/utils';
import { siteConfig } from '../../config/siteConfig';

export function Footer({ locale, t, theme = 'dark' }) {
  const whatsAppUrl = buildWhatsAppUrl({ locale });
  const isDark = theme === 'dark';

  const navLinks = [
    { label: locale === 'id' ? 'Beranda' : 'Home', id: 'hero' },
    { label: t.nav.services, id: 'services' },
    { label: t.nav.solutions, id: 'solutions' },
    { label: t.nav.portfolio, id: 'portfolio' },
    { label: t.nav.process, id: 'process' },
    { label: t.nav.pricing, id: 'pricing' },
    { label: t.nav.why, id: 'why' },
    { label: t.nav.faq, id: 'faq' },
  ];

  const socialItems = [
    {
      id: 'instagram',
      name: 'Instagram',
      tooltip: 'Instagram',
      url: 'https://www.instagram.com/prabu.nusantara/',
      icon: InstagramIcon,
      hoverClass: 'hover:text-[#E1306C]',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      tooltip: 'YouTube',
      url: 'https://www.youtube.com/@BionoraDev',
      icon: YouTubeIcon,
      hoverClass: 'hover:text-[#FF0000]',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      tooltip: 'TikTok',
      url: 'https://www.tiktok.com/@bionoradev',
      icon: TikTokIcon,
      hoverClass: 'hover:text-white',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      tooltip: 'Facebook',
      url: 'https://web.facebook.com/BionoraDev',
      icon: FacebookIcon,
      hoverClass: 'hover:text-[#1877F2]',
    },
    {
      id: 'x',
      name: 'X',
      tooltip: 'X (Twitter)',
      url: 'https://x.com/bionoradev/',
      icon: XIcon,
      hoverClass: 'hover:text-white',
    },
  ];

  return (
    <footer className="relative bg-surface-muted/60 dark:bg-[#0B1220] pt-16 sm:pt-20 pb-12 overflow-hidden border-t border-border/80">
      {/* ============================================================ */}
      {/* Animated Multi-Layer SVG Waves Background (footer-16 effect) */}
      {/* ============================================================ */}
      <div 
        className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden h-[300px] sm:h-[380px] md:h-[430px] z-0 select-none"
        aria-hidden="true"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1600 900"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200vw] sm:w-[150vw] lg:w-[125vw] min-w-[1200px] h-full pointer-events-none origin-bottom scale-[2.2] sm:scale-[1.7] lg:scale-[1.3]"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Dark Mode Wave Gradient: Vibrant Cyan into Deep Ocean Blue */}
            <linearGradient id="bionora-wave-dark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.45" />
              <stop offset="45%" stopColor="#0066FF" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#0B1220" stopOpacity="0.95" />
            </linearGradient>

            {/* Light Mode Wave Gradient: Soft Cyan Sky into Marine Blue */}
            <linearGradient id="bionora-wave-light" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00B4FF" stopOpacity="0.32" />
              <stop offset="50%" stopColor="#0066FF" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#F1F5F9" stopOpacity="0.85" />
            </linearGradient>

            {/* Single SVG Wave Path from footer-16 */}
            <path
              id="bionora-wave-path"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0 s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>

          <g>
            {/* Wave Layer 1: Slow background swell (dur=5.5s) */}
            <use 
              href="#bionora-wave-path" 
              xlinkHref="#bionora-wave-path" 
              fill={isDark ? "url(#bionora-wave-dark)" : "url(#bionora-wave-light)"} 
              opacity="0.35"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="5.5s"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>

            {/* Wave Layer 2: Medium middle swell (dur=3.8s) */}
            <use 
              href="#bionora-wave-path" 
              xlinkHref="#bionora-wave-path" 
              fill={isDark ? "url(#bionora-wave-dark)" : "url(#bionora-wave-light)"} 
              opacity="0.6"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="3.8s"
                calcMode="spline"
                values="-270 230; 243 220; -270 230"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>

            {/* Wave Layer 3: Foreground dynamic surge (dur=2.8s) */}
            <use 
              href="#bionora-wave-path" 
              xlinkHref="#bionora-wave-path" 
              fill={isDark ? "url(#bionora-wave-dark)" : "url(#bionora-wave-light)"} 
              opacity="0.9"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="2.8s"
                calcMode="spline"
                values="0 230; -140 200; 0 230"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div>

      {/* ============================================================ */}
      {/* Foreground Content Structure (Aligned with footer-16 visual)  */}
      {/* ============================================================ */}
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center gap-7 sm:gap-9 max-w-4xl mx-auto">
          {/* Logo & Return to Top */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-xl"
            aria-label="BionoraDev Home"
          >
            {/* Light Mode Logo */}
            <img
              src={siteConfig.brand.logoLight || "/assets/logo/logoTransLightMode.png"}
              alt="BionoraDev Logo"
              width="200"
              height="52"
              className="h-9 sm:h-10 md:h-11 w-auto max-w-[190px] sm:max-w-[220px] object-contain shrink-0 block dark:hidden group-hover:opacity-90 transition-opacity"
            />
            {/* Dark Mode Logo */}
            <img
              src={siteConfig.brand.logoDark || "/assets/logo/logoTransDarkMode.png"}
              alt="BionoraDev Logo"
              width="200"
              height="52"
              className="h-9 sm:h-10 md:h-11 w-auto max-w-[190px] sm:max-w-[220px] object-contain shrink-0 hidden dark:block group-hover:opacity-90 transition-opacity"
            />
          </a>

          {/* Tagline & Short Description */}
          <div className="max-w-xl">
            <p className="text-base sm:text-lg font-heading font-medium text-txt leading-snug">
              {siteConfig.brand.tagline}
            </p>
            <p className="mt-2 text-xs sm:text-sm text-txt-muted leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* WhatsApp Direct CTA Button */}
          <div className="inline-flex items-center gap-3">
            <Button
              href={whatsAppUrl}
              variant="outline"
              size="sm"
              className="gap-2.5 rounded-full px-5 py-2.5 bg-surface/80 dark:bg-surface/60 border-brand-blue/30 hover:border-brand-blue hover:bg-brand-blue backdrop-blur-md shadow-sm group"
            >
              <WhatsAppIcon3D className="w-4 h-4 group-hover:scale-110 transition-transform" size={17} />
              <span className="text-xs font-semibold text-txt group-hover:text-white transition-colors">
                Konsultasi WhatsApp
              </span>
            </Button>
          </div>

          {/* ============================================================ */}
          {/* Social Icons Row with Animated Tooltips (footer-16 .socials) */}
          {/* ============================================================ */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 my-1">
            {socialItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tooltip={item.tooltip}
                  aria-label={item.name}
                  className={`footer-social-btn text-txt hover:text-white ${item.hoverClass}`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200" />
                </a>
              );
            })}
          </div>

          {/* ============================================================ */}
          {/* Navigation Links with Focus Dimming Effect (footer-16 .links) */}
          {/* ============================================================ */}
          <nav 
            className="footer-nav-dim gap-x-6 sm:gap-x-8 gap-y-3 pt-2 text-xs sm:text-sm font-medium"
            aria-label="Footer Navigation"
          >
            {navLinks.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-txt-muted hover:text-brand-blue dark:hover:text-brand-cyan transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-border to-transparent my-1" />

          {/* ============================================================ */}
          {/* Bottom Legal Notice (footer-16 .legal)                       */}
          {/* ============================================================ */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full text-xs text-txt-muted gap-3">
            <FooterCredit variant={isDark ? 'dark' : 'light'} />
            <p className="text-center sm:text-right text-txt-muted/70">
              {siteConfig.brand.taglineBullets}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;
