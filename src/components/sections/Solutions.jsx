import React from 'react';
import { Rocket, Target, Sliders, Workflow, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { useReveal } from '../../hooks/useReveal';

export function Solutions({ locale, t }) {
  const revealRef = useReveal();

  const solutionIcons = [
    <Rocket key="1" className="w-5 h-5 text-cyan-400" />,
    <Target key="2" className="w-5 h-5 text-emerald-400" />,
    <Sliders key="3" className="w-5 h-5 text-blue-400" />,
    <Workflow key="4" className="w-5 h-5 text-indigo-400" />,
    <Sparkles key="5" className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-surface-muted/30 relative scroll-mt-16 overflow-hidden">
      <Container className="relative z-10">
        <SectionHeading
          badge={t.solutions.badge}
          title={t.solutions.title}
          subtitle={t.solutions.subtitle}
        />

        <div ref={revealRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.solutions.items.map((item, idx) => {
            const whatsAppUrl = buildWhatsAppUrl({
              locale,
              message: item.whatsappMsg,
            });

            const isLastWide = idx === 4;

            return (
              <Card
                key={item.id}
                className={`flex flex-col justify-between ${
                  isLastWide ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Problem Banner */}
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-surface-muted border border-border mb-5 text-xs text-txt-muted">
                    <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="italic">{item.problem}</span>
                  </div>

                  {/* Solution Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-surface-muted border border-border">
                      {solutionIcons[idx]}
                    </div>
                    <h3 className="text-base font-bold text-txt">
                      {item.solution}
                    </h3>
                  </div>

                  {/* Solution Description */}
                  <p className="text-xs sm:text-sm text-txt-muted leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* WhatsApp Action */}
                <Button
                  href={whatsAppUrl}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between border border-border/80 hover:border-accent/40 text-xs font-semibold hover:bg-surface-muted"
                >
                  <span>{item.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent" />
                </Button>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
