import React from 'react';
import { Check, ArrowRight, MessageCircle, Sparkles, HelpCircle } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { SectionHeading } from '../ui/SectionHeading';
import { pricingData } from '../../data/pricing';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { WhatsAppIcon3D } from '../ui/WhatsAppIcon3D';
import { useReveal } from '../../hooks/useReveal';

export function Pricing({ locale, t }) {
  const revealRef = useReveal();

  return (
    <section id="pricing" className="hallmark-section hallmark-section-pricing py-20 sm:py-28 relative scroll-mt-16 overflow-hidden">
      <Container className="relative z-10">
        <SectionHeading
          badge={t.pricing.badge}
          title={t.pricing.title}
          subtitle={t.pricing.subtitle}
        />

        <div ref={revealRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingData.map((plan) => {
            const whatsAppUrl = buildWhatsAppUrl({
              locale,
              message: plan.whatsappContext[locale] || plan.whatsappContext.id,
            });

            return (
              <Card
                key={plan.id}
                className={`flex flex-col justify-between relative ${
                  plan.popular
                    ? 'border-brand-blue/80 dark:border-brand-blue/60 bg-surface'
                    : 'border-border bg-surface'
                }`}
              >
                {/* Recommendation Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-md bg-brand-blue text-white dark:bg-brand-blue dark:text-white text-xs font-medium shadow-sm">
                      {t.pricing.popularBadge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-brand-deep dark:text-brand-cyan mb-1">
                      {plan.name[locale] || plan.name.id}
                    </h3>
                    <div className="text-xl font-heading font-semibold text-txt mb-2">
                      {plan.service[locale] || plan.service.id}
                    </div>
                    <p className="text-xs text-txt-muted min-h-[32px]">
                      {plan.tagline[locale] || plan.tagline.id}
                    </p>
                  </div>

                  {/* Price Row */}
                  <div className="py-6 border-y border-border mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-heading font-semibold text-txt tracking-tight font-mono tabular-nums">
                        {plan.price[locale] || plan.price.id}
                      </span>
                    </div>
                    <span className="text-xs text-txt-muted italic mt-1 block">
                      * {plan.period[locale] || plan.period.id}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-semibold text-txt block">
                      {locale === 'id' ? 'Fitur Termasuk:' : 'Included Features:'}
                    </span>
                    {(plan.features[locale] || plan.features.id).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-txt/90">
                        <div className="p-0.5 rounded bg-brand-blue/10 text-brand-deep dark:text-brand-cyan shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action */}
                <Button
                  href={whatsAppUrl}
                  variant={plan.popular ? "gradient" : "secondary"}
                  size="md"
                  className="w-full justify-center gap-2"
                >
                  <WhatsAppIcon3D className="w-4 h-4 shrink-0" size={16} />
                  <span>{t.pricing.consultCta}</span>
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Pricing Disclaimer */}
        <div className="mt-8 text-center text-xs text-txt-muted/80 max-w-2xl mx-auto">
          {t.pricing.disclaimer}
        </div>
      </Container>
    </section>
  );
}
