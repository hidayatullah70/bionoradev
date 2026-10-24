import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, Pause, Play, Sparkles, Building2 } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonialsData } from '../../data/testimonials';

export function Testimonials({ locale = 'id', t }) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate data to create a seamless infinite right-to-left marquee loop
  const marqueeItems = [...testimonialsData, ...testimonialsData];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-surface-muted/30 relative overflow-hidden">
      <Container>
        <SectionHeading
          badge={t.testimonials.badge}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />
      </Container>

      {/* Marquee Slider Wrapper */}
      <div 
        className="relative w-full overflow-hidden mt-2 sm:mt-4 py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Soft edge gradient masks for premium visual blending */}
        <div 
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 bg-gradient-to-r from-bg via-bg/70 to-transparent z-10" 
          aria-hidden="true" 
        />
        <div 
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 bg-gradient-to-l from-bg via-bg/70 to-transparent z-10" 
          aria-hidden="true" 
        />

        {/* Continuous Track moving smoothly from right to left */}
        <div
          className={`animate-marquee-track gap-5 sm:gap-6 px-4 ${isPaused ? 'marquee-paused' : ''}`}
          role="region"
          aria-label="Testimonial slider track"
        >
          {marqueeItems.map((item, index) => {
            const quoteText = item.quote[locale] || item.quote.id;
            const roleText = item.role[locale] || item.role.id;
            const categoryText = item.category[locale] || item.category.id;

            return (
              <div
                key={`${item.id}-${index}`}
                className="w-[310px] sm:w-[380px] md:w-[420px] shrink-0 rounded-2xl sm:rounded-3xl bg-surface/90 dark:bg-surface/80 border border-border/80 dark:border-border/60 hover:border-brand-blue/50 dark:hover:border-brand-cyan/40 p-6 sm:p-7 flex flex-col justify-between shadow-card-light dark:shadow-card-dark transition-all duration-300 hover:shadow-glow-blue/10 relative group"
              >
                {/* Top Row: Category Pill & Star Rating */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue/10 dark:bg-brand-cyan/10 text-brand-blue dark:text-brand-cyan border border-brand-blue/20 dark:border-brand-cyan/20">
                      <Sparkles className="w-3 h-3" />
                      <span>{categoryText}</span>
                    </span>

                    <div className="flex items-center gap-1 bg-surface-muted/60 px-2.5 py-1 rounded-full border border-border/40">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-[11px] font-bold text-txt-muted ml-0.5">5.0</span>
                    </div>
                  </div>

                  {/* Quote icon & Quote text */}
                  <div className="relative mb-6">
                    <Quote className="w-7 h-7 text-brand-blue/20 dark:text-brand-cyan/20 rotate-180 mb-2 shrink-0" />
                    <blockquote className="text-sm sm:text-base text-txt font-medium leading-relaxed italic">
                      “{quoteText}”
                    </blockquote>
                  </div>
                </div>

                {/* Bottom Row: Client Grid metadata */}
                <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Client Avatar with gradient and initials */}
                    <div
                      className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${item.avatarColor} text-white font-bold text-base flex items-center justify-center shadow-sm shrink-0`}
                      aria-hidden="true"
                    >
                      {item.initial}
                    </div>

                    {/* Author & Client Information */}
                    <div className="min-w-0">
                      <h4 className="font-heading font-semibold text-txt text-sm sm:text-base leading-tight truncate">
                        {item.author}
                      </h4>
                      <p className="text-xs text-txt-muted leading-tight mt-0.5 truncate">
                        {roleText}
                      </p>
                      <div className="flex items-center gap-1 text-[11px] font-medium text-brand-blue dark:text-brand-cyan mt-1 truncate">
                        <Building2 className="w-3 h-3 shrink-0" />
                        <span className="truncate">{item.client}</span>
                      </div>
                    </div>
                  </div>

                  {/* Verified Badge */}
                  <div
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold shrink-0"
                    title={t.testimonials.verifiedClient}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="hidden sm:inline">{t.testimonials.verifiedClient}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Controls & Accessibility Pause Indicator */}
      <Container>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 px-2 text-xs text-txt-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t.testimonials.pauseNotice}</span>
          </div>

          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-xs font-semibold text-txt hover:text-brand-blue hover:border-brand-blue/50 dark:hover:border-brand-cyan/50 transition-colors shadow-sm cursor-pointer"
            aria-label={isPaused ? t.testimonials.playButton : t.testimonials.pauseButton}
          >
            {isPaused ? (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{t.testimonials.playButton}</span>
              </>
            ) : (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>{t.testimonials.pauseButton}</span>
              </>
            )}
          </button>
        </div>
      </Container>
    </section>
  );
}
