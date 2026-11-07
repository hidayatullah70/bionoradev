import React from 'react';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { WhatsAppIcon3D } from '../ui/WhatsAppIcon3D';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { scrollToSection } from '../../lib/utils';
import { useReveal } from '../../hooks/useReveal';
import { siteConfig } from '../../config/siteConfig';

export function FinalCTA({ locale, t }) {
  const revealRef = useReveal();
  const whatsAppUrl = buildWhatsAppUrl({ locale });

  return (
    <section className="hallmark-section hallmark-section-final-cta py-20 sm:py-28 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="glow-ambient-cyan w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <Container className="relative z-10">
        <div
          ref={revealRef}
          className="relative rounded-card bg-gradient-to-br from-surface to-surface-muted border border-border p-8 sm:p-12 lg:p-16 text-center shadow-2xl overflow-hidden"
        >
          {/* Decorative subtle background pattern */}
          <div className="absolute inset-0 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <Badge variant="gradient" className="mb-4">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              {t.cta.badge}
            </Badge>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-semibold text-txt tracking-tight leading-tight">
              {t.cta.title}
            </h2>

            <p className="mt-5 text-sm sm:text-base text-txt-muted leading-relaxed">
              {t.cta.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button
                href={whatsAppUrl}
                variant="gradient"
                size="lg"
                className="w-full sm:w-auto gap-3 group font-bold"
              >
                <WhatsAppIcon3D className="w-5 h-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" size={20} />
                <span>{t.cta.buttonLabel}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto"
              >
                {t.cta.secondaryLabel}
              </Button>
            </div>

            <div className="mt-8 text-xs text-txt-muted flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span>Respon Cepat via WhatsApp • Konsultasi Terbuka</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
