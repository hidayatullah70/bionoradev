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
    <section id="pricing" className="py-20 sm:py-28 relative scroll-mt-16 overflow-hidden">
      {/* Background glow */}
      <div className="glow-ambient-blue w-96 h-96 top-1/3 -right-48" />

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
                className={`flex flex-col justify-between relative transition-all duration-300 ${
                  plan.popular
                    ? 'border-accent shadow-xl lg:-translate-y-2 bg-surface/90'
                    : 'border-border bg-surface/60'
                }`}
              >
                {/* Recommendation Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-surface border border-accent/40 text-accent text-xs font-bold shadow-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      {t.pricing.popularBadge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="font-brand text-sm font-bold tracking-wider uppercase text-brand-blue mb-1">
                      {plan.name[locale] || plan.name.id}
                    </h3>
                    <div className="text-xl font-brand font-bold text-txt mb-2">
                      {plan.service[locale] || plan.service.id}
                    </div>
                    <p className="text-xs text-txt-muted min-h-[32px]">
                      {plan.tagline[locale] || plan.tagline.id}
                    </p>
                  </div>

                  {/* Price Row */}
                  <div className="py-6 border-y border-border mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-brand font-extrabold text-txt tracking-tight">
                        {plan.price[locale] || plan.price.id}
                      </span>
                    </div>
                    <span className="text-xs text-txt-muted italic mt-1 block">
                      * {plan.period[locale] || plan.period.id}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-txt block">
                      {locale === 'id' ? 'Fitur Termasuk:' : 'Included Features:'}
                    </span>
                    {(plan.features[locale] || plan.features.id).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-txt/90">
                        <div className="p-0.5 rounded-full bg-accent/15 text-accent shrink-0 mt-0.5">
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
                  <WhatsAppIcon3D className="w-4 h-4 group-hover:scale-110 transition-transform" size={16} />
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
