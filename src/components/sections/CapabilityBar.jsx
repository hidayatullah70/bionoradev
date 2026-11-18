import React from 'react';
import { ChevronsRight, Code2, ShieldCheck, TrendingUp } from 'lucide-react';
import { Container } from '../ui/Container';
import { useReveal } from '../../hooks/useReveal';

export function CapabilityBar({ t }) {
  const revealRef = useReveal();

  const icons = [
    <ChevronsRight key="1" className="w-5 h-5 sm:w-6 sm:h-6 text-brand-deep dark:text-brand-cyan" />,
    <Code2 key="2" className="w-5 h-5 sm:w-6 sm:h-6 text-brand-deep dark:text-brand-cyan" />,
    <ShieldCheck key="3" className="w-5 h-5 sm:w-6 sm:h-6 text-brand-deep dark:text-brand-cyan" />,
    <TrendingUp key="4" className="w-5 h-5 sm:w-6 sm:h-6 text-brand-deep dark:text-brand-cyan" />,
  ];

  return (
    <section className="hallmark-capability-bar py-8 sm:py-12 border-y border-border bg-surface-muted/30 relative overflow-hidden">
      <Container>
        <div ref={revealRef} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {t.capability.items.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-surface/60 border border-border/80 hover:border-slate-300 dark:hover:border-white/20 transition-colors duration-150 flex flex-col gap-2.5 sm:gap-3 group"
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-surface-muted border border-border flex items-center justify-center">
                {icons[idx]}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-heading font-semibold text-txt transition-colors">
                  {item.title}
                </h3>
                <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-txt-muted leading-snug sm:leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
