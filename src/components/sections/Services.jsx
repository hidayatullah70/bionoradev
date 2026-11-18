import React from 'react';
import { LayoutTemplate, Building2, Cpu, LineChart, Check, ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { useReveal } from '../../hooks/useReveal';

export function Services({ locale, t }) {
  const revealRef = useReveal();

  const serviceIcons = {
    'landing-page': <LayoutTemplate className="w-5 h-5 text-brand-deep dark:text-brand-cyan" />,
    'business-website': <Building2 className="w-5 h-5 text-brand-deep dark:text-brand-cyan" />,
    'web-app': <Cpu className="w-5 h-5 text-brand-deep dark:text-brand-cyan" />,
    'web-dashboard': <LineChart className="w-5 h-5 text-brand-deep dark:text-brand-cyan" />,
  };

  return (
    <section id="services" className="hallmark-section hallmark-section-services py-20 sm:py-28 relative scroll-mt-16 overflow-hidden">
      <Container className="relative z-10">
        <SectionHeading
          badge={t.services.badge}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div ref={revealRef} className="hallmark-services-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.items.map((service) => {
            const whatsAppUrl = buildWhatsAppUrl({
              locale,
              message: service.whatsappMsg,
            });

            return (
              <Card
                key={service.id}
                className="flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg bg-surface-muted border border-border flex items-center justify-center">
                      {serviceIcons[service.id]}
                    </div>
                    <span className="text-xl font-heading font-medium text-txt-muted/50 font-mono tabular-nums">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-heading font-semibold text-txt mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-txt-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-border">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-txt/90">
                        <div className="p-0.5 rounded bg-brand-blue/10 text-brand-deep dark:text-brand-cyan shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <Button
                  href={whatsAppUrl}
                  variant="secondary"
                  size="md"
                  className="w-full justify-between group/btn"
                >
                  <span>{service.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-txt-muted group-hover/btn:text-txt" />
                </Button>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
