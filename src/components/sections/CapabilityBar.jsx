import React from 'react';
import { ChevronsRight, Code2, ShieldCheck, TrendingUp } from 'lucide-react';
import { Container } from '../ui/Container';
import { useReveal } from '../../hooks/useReveal';

export function CapabilityBar({ t }) {
  const revealRef = useReveal();

  const icons = [
    <ChevronsRight key="1" className="w-6 h-6 text-brand-cyan" />,
    <Code2 key="2" className="w-6 h-6 text-brand-blue" />,
    <ShieldCheck key="3" className="w-6 h-6 text-sky-400" />,
    <TrendingUp key="4" className="w-6 h-6 text-emerald-400" />,
  ];

  return (
    <section className="py-12 border-y border-border bg-surface-muted/30 relative">
      <Container>
        <div ref={revealRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.capability.items.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-surface/60 border border-border/80 hover:border-accent/40 transition-all duration-200 flex flex-col gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-muted border border-border flex items-center justify-center group-hover:scale-105 transition-transform">
                {icons[idx]}
              </div>
              <div>
                <h3 className="text-sm font-brand font-bold text-txt group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-txt-muted leading-relaxed">
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
