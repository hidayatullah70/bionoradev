import React from 'react';
import { ShieldCheck, Zap, Users } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { useReveal } from '../../hooks/useReveal';

export function WhyBionoraDev({ t }) {
  const revealRef = useReveal();

  const numbers = ["01", "02", "03", "04", "05"];

  return (
    <section id="why" className="py-20 sm:py-28 bg-surface-muted/20 relative scroll-mt-16">
      <Container className="relative z-10">
        <div ref={revealRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Studio Philosophy & Manifesto */}
          <div className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-28">
            <Badge variant="gradient" className="mb-4">
              {t.why.badge}
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-txt tracking-tight leading-tight">
              {t.why.title}
            </h2>

            <p className="mt-5 text-base sm:text-lg text-txt-muted leading-relaxed">
              {t.why.subtitle}
            </p>

            {/* Studio Commitments Box */}
            <div className="mt-8 p-6 rounded-2xl bg-surface border border-border/80 shadow-sm w-full space-y-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-accent block">
                Komitmen Standar Studio
              </span>
              <div className="flex items-center gap-2.5 text-xs text-txt/90">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                <span>100% Kepemilikan kode sumber & aset digital milik klien</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-txt/90">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Arsitektur statis ultra cepat tanpa beban dependensi berlebih</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-txt/90">
                <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Komunikasi langsung tanpa perantara atau birokrasi berbelit</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Principles List (03-UI-GUIDELINE.md Section 8.10) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-border">
            {t.why.cards.map((card, idx) => (
              <div
                key={idx}
                className="py-7 first:pt-0 last:pb-0 flex items-start gap-5 sm:gap-6 group"
              >
                {/* Principle Number */}
                <span className="font-brand text-xl sm:text-2xl font-bold text-brand-blue shrink-0 pt-0.5">
                  {numbers[idx] || `0${idx + 1}`}
                </span>

                {/* Principle Body */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-txt group-hover:text-accent transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-txt-muted leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyBionoraDev;
