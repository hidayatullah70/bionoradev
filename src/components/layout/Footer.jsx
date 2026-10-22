import React from 'react';
import { MessageCircle, ArrowUpRight, ShieldCheck, Mail, Globe } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { WhatsAppIcon3D } from '../ui/WhatsAppIcon3D';
import { SocialLinks } from '../ui/SocialLinks';
import { FooterCredit } from '../ui/FooterCredit';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { scrollToSection } from '../../lib/utils';
import { siteConfig } from '../../config/siteConfig';

export function Footer({ locale, t, theme = 'dark' }) {
  const whatsAppUrl = buildWhatsAppUrl({ locale });

  const navLinks = [
    { label: t.nav.services, id: 'services' },
    { label: t.nav.solutions, id: 'solutions' },
    { label: t.nav.portfolio, id: 'portfolio' },
    { label: t.nav.process, id: 'process' },
    { label: t.nav.pricing, id: 'pricing' },
    { label: t.nav.why, id: 'why' },
    { label: t.nav.faq, id: 'faq' },
  ];

  const serviceLinks = [
    { label: "Landing Page", id: "services" },
    { label: "Business Website", id: "services" },
    { label: "Web Application", id: "services" },
    { label: "Web Dashboard", id: "services" },
  ];

  return (
    <footer className="border-t border-border bg-surface-muted/50 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="glow-ambient-cyan w-96 h-96 -bottom-48 -left-48" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-border">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg w-fit"
              aria-label="BionoraDev Home"
            >
              {/* Light Mode Logo */}
              <img
                src={siteConfig.brand.logoLight || "/assets/logo/logoLight.png"}
                alt="BionoraDev Logo"
                width="180"
                height="48"
                className="h-8 sm:h-9 md:h-10 w-auto max-w-[160px] sm:max-w-[190px] md:max-w-[220px] object-contain shrink-0 block dark:hidden group-hover:opacity-90 transition-opacity"
              />
              {/* Dark Mode Logo */}
              <img
                src={siteConfig.brand.logoDark || "/assets/logo/logoDark.png"}
                alt="BionoraDev Logo"
                width="180"
                height="48"
                className="h-8 sm:h-9 md:h-10 w-auto max-w-[160px] sm:max-w-[190px] md:max-w-[220px] object-contain shrink-0 hidden dark:block group-hover:opacity-90 transition-opacity"
              />
            </a>

            <p className="text-sm text-txt-muted max-w-sm leading-relaxed">
              {t.footer.description}
            </p>

            <div className="mt-2 flex flex-col items-start gap-3">
              <Button
                href={whatsAppUrl}
                variant="outline"
                size="sm"
                className="gap-2 group"
              >
                <WhatsAppIcon3D className="w-4 h-4 group-hover:scale-110 transition-transform" size={16} />
                <span>WhatsApp Langsung</span>
              </Button>

              {/* Social Media Links */}
              <SocialLinks className="mt-0.5" />
            </div>
          </div>

          {/* Quick Nav Col */}
          <div>
            <h3 className="text-xs font-heading font-semibold uppercase tracking-wider text-txt mb-4">
              {t.footer.quickLinksTitle}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-txt-muted hover:text-accent transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h3 className="text-xs font-heading font-semibold uppercase tracking-wider text-txt mb-4">
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-txt-muted hover:text-accent transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-xs font-heading font-semibold uppercase tracking-wider text-txt mb-4">
              {t.footer.contactTitle}
            </h3>
            <div className="space-y-3 text-sm text-txt-muted">
              <div className="flex items-center gap-2">
                <WhatsAppIcon3D className="w-4 h-4 shrink-0" size={16} />
                <span>+62 813-8422-4733</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-accent shrink-0" />
                <span>Indonesia (Online Support)</span>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-xs text-txt-muted/80">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{t.footer.truthNote}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-txt-muted">
          <FooterCredit variant={theme === 'light' ? 'light' : 'dark'} />
          <p className="text-center sm:text-right text-txt-muted/70">
            {siteConfig.brand.taglineBullets}
          </p>
        </div>
      </Container>
    </footer>
  );
}
