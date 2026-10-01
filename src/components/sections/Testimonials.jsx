import React from 'react';
import { MessageSquareQuote, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { useReveal } from '../../hooks/useReveal';

export function Testimonials({ t }) {
  const revealRef = useReveal();

  return (
    <section className="py-20 sm:py-28 bg-surface-muted/30 relative overflow-hidden">
      <Container>
        <SectionHeading
          badge={t.testimonials.badge}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        {/* Honest, Clear Placeholder Banner (Zero Fabricated Social Proof) */}
        <div
          ref={revealRef}
          className="max-w-3xl mx-auto p-8 sm:p-12 rounded-card bg-surface border border-border text-center flex flex-col items-center gap-4 relative overflow-hidden"
        >
          <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
            <MessageSquareQuote className="w-7 h-7" />
          </div>

          <div className="max-w-xl">
            <h3 className="text-lg font-bold text-txt mb-2">
              {t.testimonials.placeholderNotice}
            </h3>
            <p className="text-xs sm:text-sm text-txt-muted leading-relaxed">
              {t.testimonials.placeholderSub}
            </p>
          </div>

          <div className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-muted border border-border text-xs text-txt-muted">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Transparansi & Kejujuran Konten Terverifikasi</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
