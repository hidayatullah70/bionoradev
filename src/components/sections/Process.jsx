import React from 'react';
import { MessageSquare, FileCode, Palette, Code2, Rocket } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { useReveal } from '../../hooks/useReveal';

export function Process({ t }) {
  const revealRef = useReveal();

  const stepIcons = [
    <MessageSquare key="1" className="w-5 h-5 text-cyan-400" />,
    <FileCode key="2" className="w-5 h-5 text-blue-400" />,
    <Palette key="3" className="w-5 h-5 text-sky-400" />,
    <Code2 key="4" className="w-5 h-5 text-indigo-400" />,
    <Rocket key="5" className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section id="process" className="py-20 sm:py-28 bg-surface-muted/30 relative scroll-mt-16 overflow-hidden">
      <Container className="relative z-10">
        <SectionHeading
          badge={t.process.badge}
          title={t.process.title}
          subtitle={t.process.subtitle}
        />

        <div ref={revealRef} className="relative mt-16">
          {/* Desktop connecting horizontal line */}
          <div className="hidden lg:block absolute top-10 left-8 right-8 h-0.5 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-emerald-500/30 -z-0" />

          {/* Grid Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {t.process.steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start lg:items-center text-left lg:text-center group"
              >
                {/* Step Circle with Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-surface border-2 border-border group-hover:border-accent flex items-center justify-center shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-glow-cyan/20">
                    {stepIcons[idx]}
                  </div>
                  <span className="absolute -top-2 -right-2 font-brand text-xs font-bold px-2 py-0.5 rounded-full bg-brand-blue text-white shadow-sm">
                    {step.step}
                  </span>
                </div>

                {/* Step Content */}
                <h3 className="text-base font-bold text-txt mb-2 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-txt-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
