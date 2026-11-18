import React from 'react';
import { ArrowRight } from 'lucide-react';
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
      <Container className="relative z-10">
        <div
          ref={revealRef}
          className="relative rounded-3xl bg-surface border border-border p-8 sm:p-12 lg:p-16 text-center shadow-sm overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <Badge variant="default" className="mb-4">
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
                className="w-full sm:w-auto gap-2.5 font-semibold"
              >
                <WhatsAppIcon3D className="w-5 h-5 shrink-0" size={18} />
                <span>{t.cta.buttonLabel}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Respon Cepat via WhatsApp • Konsultasi Terbuka</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
