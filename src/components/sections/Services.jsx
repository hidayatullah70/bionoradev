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
    'landing-page': <LayoutTemplate className="w-6 h-6 text-brand-cyan" />,
    'business-website': <Building2 className="w-6 h-6 text-brand-blue" />,
    'web-app': <Cpu className="w-6 h-6 text-sky-400" />,
    'web-dashboard': <LineChart className="w-6 h-6 text-indigo-400" />,
  };

  return (
    <section id="services" className="py-20 sm:py-28 relative scroll-mt-16 overflow-hidden">
      {/* Subtle background glow */}
      <div className="glow-ambient-cyan w-96 h-96 top-1/2 -left-48" />

      <Container className="relative z-10">
        <SectionHeading
          badge={t.services.badge}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div ref={revealRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.items.map((service) => {
            const whatsAppUrl = buildWhatsAppUrl({
              locale,
              message: service.whatsappMsg,
            });

            return (
              <Card
                key={service.id}
                className="flex flex-col justify-between group hover:border-accent/50"
              >
                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-surface-muted border border-border flex items-center justify-center group-hover:scale-105 transition-transform">
                      {serviceIcons[service.id]}
                    </div>
                    <span className="font-mono text-2xl font-bold text-txt-muted/40 group-hover:text-accent/60 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-txt mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-txt-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8 pt-4 border-t border-border">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-txt/90">
                        <div className="p-0.5 rounded-full bg-accent/10 text-accent shrink-0 mt-0.5">
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
                  className="w-full justify-between group/btn hover:border-accent hover:bg-accent/10"
                >
                  <span>{service.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-accent" />
                </Button>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
