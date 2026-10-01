import React from 'react';
import { MessageCircle, ArrowUpRight, ShieldCheck, Mail, Globe } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { WhatsAppIcon3D } from '../ui/WhatsAppIcon3D';
import { SocialLinks } from '../ui/SocialLinks';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { scrollToSection } from '../../lib/utils';
import { siteConfig } from '../../config/siteConfig';

export function Footer({ locale, t }) {
  const currentYear = new Date().getFullYear();
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
            <div className="flex items-center gap-2.5 sm:gap-3">
              <img
                src={siteConfig.brand.logo || "/assets/logo/logoAja.png"}
                alt="BionoraDev Logo"
                width="40"
                height="40"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain shrink-0"
              />
              <div className="flex flex-col">
                <div className="font-brand text-lg sm:text-xl font-bold tracking-wider whitespace-nowrap">
                  <span className="text-txt">{siteConfig.brand.wordmarkFirst}</span>
                  <span className="text-brand-blue ml-0.5">{siteConfig.brand.wordmarkSecond}</span>
                </div>
                <span className="text-[10px] font-brand tracking-wider text-brand-blue uppercase font-bold">
                  {siteConfig.brand.taglineUppercase}
                </span>
              </div>
            </div>

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
            <h3 className="text-xs font-bold uppercase tracking-wider text-txt mb-4">
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
            <h3 className="text-xs font-bold uppercase tracking-wider text-txt mb-4">
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
            <h3 className="text-xs font-bold uppercase tracking-wider text-txt mb-4">
              {t.footer.contactTitle}
            </h3>
            <div className="space-y-3 text-sm text-txt-muted">
              <p className="flex items-center gap-2">
                <WhatsAppIcon3D className="w-4 h-4 shrink-0" size={16} />
                <span>+62 813-8422-4733</span>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-accent shrink-0" />
                <span>Indonesia (Online Support)</span>
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs text-txt-muted/80">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{t.footer.truthNote}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-txt-muted">
          <p>
            © {currentYear}{" "}
            <span className="font-brand font-bold text-txt">
              {siteConfig.brand.wordmarkFirst}
              <span className="text-brand-blue">{siteConfig.brand.wordmarkSecond}</span>
            </span>
            . {t.footer.rights}
          </p>
          <p className="text-center sm:text-right text-txt-muted/70">
            {siteConfig.brand.taglineBullets}
          </p>
        </div>
      </Container>
    </footer>
  );
}
