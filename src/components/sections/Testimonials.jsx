import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Star, Quote, CheckCircle2, Pause, Play, Sparkles, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonialsData } from '../../data/testimonials';

export function Testimonials({ locale = 'id', t }) {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Interaction tracking refs
  const isInteractingRef = useRef(false);
  const resumeTimeoutRef = useRef(null);
  const scrollPosRef = useRef(0);
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);

  // Triple set for seamless infinite scrolling in both directions
  const tripleItems = [
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
  ];
  const totalOriginal = testimonialsData.length;

  // Initialize scroll position to middle set for seamless backward/forward looping
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const timer = setTimeout(() => {
      if (slider.scrollWidth > slider.clientWidth) {
        const setWidth = slider.scrollWidth / 3;
        slider.scrollLeft = setWidth;
        scrollPosRef.current = setWidth;
      }
    }, 60);

    return () => clearTimeout(timer);
  }, []);

  // Update active dot index based on scroll position
  const handleScroll = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const setWidth = slider.scrollWidth / 3;
    if (setWidth <= 0) return;

    // Normalize scroll position within one set
    const normalizedScroll = ((slider.scrollLeft % setWidth) + setWidth) % setWidth;
    const cardWidthWithGap = setWidth / totalOriginal;
    const rawIndex = Math.round(normalizedScroll / cardWidthWithGap) % totalOriginal;
    setActiveIndex(rawIndex);

    // Keep scroll within safe bounds when interacting
    if (isInteractingRef.current) {
      scrollPosRef.current = slider.scrollLeft;
    }
  }, [totalOriginal]);

  // Handle interaction resume after delay (touch or drag ends)
  const scheduleResume = useCallback((delay = 2000) => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      const slider = sliderRef.current;
      if (slider) {
        scrollPosRef.current = slider.scrollLeft;
      }
      isInteractingRef.current = false;
    }, delay);
  }, []);

  // Continuous auto-scroll loop via requestAnimationFrame
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId;
    let lastTime = performance.now();
    // Gentle, readable speed: ~42px per second
    const speed = 0.042;

    const step = (now) => {
      const elapsed = Math.min(now - lastTime, 100);
      lastTime = now;

      if (!isPaused && !isInteractingRef.current) {
        // Sync scrollPosRef if external scroll happened
        if (Math.abs(scrollPosRef.current - slider.scrollLeft) > 6) {
          scrollPosRef.current = slider.scrollLeft;
        }

        scrollPosRef.current += speed * elapsed;

        const setWidth = slider.scrollWidth / 3;
        if (setWidth > 0) {
          // Wrap around seamlessly
          if (scrollPosRef.current >= setWidth * 2) {
            scrollPosRef.current -= setWidth;
            slider.scrollLeft = scrollPosRef.current;
          } else if (scrollPosRef.current < setWidth * 0.5) {
            scrollPosRef.current += setWidth;
            slider.scrollLeft = scrollPosRef.current;
          } else {
            slider.scrollLeft = scrollPosRef.current;
          }
        }
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [isPaused]);

  // Touch handlers for mobile (Android & iPhone)
  const handleTouchStart = () => {
    isInteractingRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleTouchEnd = () => {
    scheduleResume(2200);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e) => {
    const slider = sliderRef.current;
    if (!slider) return;
    isMouseDownRef.current = true;
    isInteractingRef.current = true;
    startXRef.current = e.pageX - slider.offsetLeft;
    startScrollLeftRef.current = slider.scrollLeft;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleMouseMove = (e) => {
    const slider = sliderRef.current;
    if (!isMouseDownRef.current || !slider) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;
    slider.scrollLeft = startScrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    if (!isMouseDownRef.current) return;
    isMouseDownRef.current = false;
    scheduleResume(2000);
  };

  const handleMouseLeave = () => {
    if (isMouseDownRef.current) {
      isMouseDownRef.current = false;
    }
    scheduleResume(1500);
  };

  // Manual Previous/Next buttons
  const scrollPrev = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    isInteractingRef.current = true;
    const firstCard = slider.querySelector('[data-testimonial-card]');
    const cardWidth = firstCard ? firstCard.offsetWidth + 20 : 340;
    slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    scheduleResume(3000);
  };

  const scrollNext = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    isInteractingRef.current = true;
    const firstCard = slider.querySelector('[data-testimonial-card]');
    const cardWidth = firstCard ? firstCard.offsetWidth + 20 : 340;
    slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
    scheduleResume(3000);
  };

  // Direct dot click navigation
  const scrollToClientIndex = (targetIndex) => {
    const slider = sliderRef.current;
    if (!slider) return;
    isInteractingRef.current = true;
    const setWidth = slider.scrollWidth / 3;
    const cardWidthWithGap = setWidth / totalOriginal;
    const targetScroll = setWidth + targetIndex * cardWidthWithGap;
    slider.scrollTo({ left: targetScroll, behavior: 'smooth' });
    setActiveIndex(targetIndex);
    scheduleResume(3500);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-surface-muted/30 relative overflow-hidden">
      <Container>
        <SectionHeading
          badge={t.testimonials.badge}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />
      </Container>

      {/* Slider Viewport with Left/Right Edge Fades */}
      <div className="relative w-full mt-4 py-2">
        {/* Left Gradient Fade */}
        <div 
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 md:w-32 bg-gradient-to-r from-bg via-bg/70 to-transparent z-10" 
          aria-hidden="true" 
        />
        {/* Right Gradient Fade */}
        <div 
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 md:w-32 bg-gradient-to-l from-bg via-bg/70 to-transparent z-10" 
          aria-hidden="true" 
        />

        {/* Native Touch-Scrollable & Mouse-Draggable Track */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => {
            isInteractingRef.current = true;
            if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
          }}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-4 px-4 sm:px-6 cursor-grab active:cursor-grabbing select-none"
          style={{
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x pan-y',
          }}
          role="region"
          aria-label="Client Testimonials Slider"
        >
          {tripleItems.map((item, index) => {
            const quoteText = item.quote[locale] || item.quote.id;
            const roleText = item.role[locale] || item.role.id;
            const categoryText = item.category[locale] || item.category.id;

            return (
              <div
                key={`${item.id}-${index}`}
                data-testimonial-card="true"
                className="w-[84vw] max-w-[340px] sm:w-[380px] md:w-[410px] shrink-0 rounded-2xl sm:rounded-3xl bg-surface/95 dark:bg-surface/85 border border-border/80 dark:border-border/60 hover:border-brand-blue/50 dark:hover:border-brand-cyan/40 p-5 sm:p-7 flex flex-col justify-between shadow-card-light dark:shadow-card-dark transition-all duration-300 hover:shadow-glow-blue/10 relative"
              >
                {/* Top Row: Category Pill & Star Rating */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-900/[0.08] dark:bg-brand-cyan/10 text-blue-900 dark:text-brand-cyan border border-blue-900/25 dark:border-brand-cyan/20">
                      <Sparkles className="w-3 h-3 shrink-0" />
                      <span className="truncate">{categoryText}</span>
                    </span>

                    <div className="flex items-center gap-1 bg-surface-muted/60 px-2.5 py-1 rounded-full border border-border/40 shrink-0">
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

      {/* Interactive Controls Bar: Dots, Navigation Arrows, Play/Pause */}
      <Container>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
          {/* Touch Screen & Mouse Indicator */}
          <div className="flex items-center gap-2 text-xs text-txt-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t.testimonials.pauseNotice}</span>
          </div>

          {/* Dots Indicator for 6 Clients */}
          <div className="flex items-center gap-1.5" aria-label="Client navigation dots">
            {testimonialsData.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToClientIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === idx
                    ? 'w-6 h-2 bg-brand-blue dark:bg-brand-cyan'
                    : 'w-2 h-2 bg-border hover:bg-txt-muted/50'
                }`}
                aria-label={`Jump to ${item.client}`}
              />
            ))}
          </div>

          {/* Controls: Prev, Play/Pause, Next */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-txt hover:text-brand-blue hover:border-brand-blue/50 dark:hover:border-brand-cyan/50 transition-colors shadow-sm cursor-pointer"
              aria-label={t.testimonials.prevButton || "Sebelumnya"}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-semibold text-txt hover:text-brand-blue hover:border-brand-blue/50 dark:hover:border-brand-cyan/50 transition-colors shadow-sm cursor-pointer"
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

            <button
              type="button"
              onClick={scrollNext}
              className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-txt hover:text-brand-blue hover:border-brand-blue/50 dark:hover:border-brand-cyan/50 transition-colors shadow-sm cursor-pointer"
              aria-label={t.testimonials.nextButton || "Berikutnya"}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
