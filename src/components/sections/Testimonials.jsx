import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Star,
  Quote,
  CheckCircle2,
  Pause,
  Play,
  Sparkles,
  Building2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonialsData } from '../../data/testimonials';

export function Testimonials({ locale = 'id', t }) {
  const total = testimonialsData.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDir, setSwipeDir] = useState('left'); // 'left' or 'right'
  const [starKey, setStarKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Gestures refs
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const mouseStartXRef = useRef(0);
  const isMouseDownRef = useRef(false);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Dealing next card off the deck (swipe to left)
  const handleNext = useCallback(() => {
    if (isSwiping) return;
    setIsSwiping(true);
    setSwipeDir('left');

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
      setIsSwiping(false);
      setStarKey((k) => k + 1);
    }, 450);
  }, [isSwiping, total]);

  // Dealing previous card back onto the deck (swipe to right)
  const handlePrev = useCallback(() => {
    if (isSwiping) return;
    setIsSwiping(true);
    setSwipeDir('right');

    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + total) % total);
      setIsSwiping(false);
      setStarKey((k) => k + 1);
    }, 450);
  }, [isSwiping, total]);

  // Jump to specific index from pagination dots
  const jumpToIndex = useCallback(
    (targetIdx) => {
      if (targetIdx === currentIndex || isSwiping) return;
      setIsSwiping(true);
      setSwipeDir(targetIdx > currentIndex ? 'left' : 'right');

      setTimeout(() => {
        setCurrentIndex(targetIdx);
        setIsSwiping(false);
        setStarKey((k) => k + 1);
      }, 400);
    },
    [currentIndex, isSwiping]
  );

  // Auto-shuffle interval timer
  const autoPlayActive = !isPaused && !isHovered && !prefersReducedMotion;
  useEffect(() => {
    if (!autoPlayActive) return;

    // Shuffle deal every 3.8s
    const timer = setInterval(() => {
      handleNext();
    }, 3800);

    return () => clearInterval(timer);
  }, [autoPlayActive, handleNext]);

  // Touch gesture handlers
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const diffX = e.changedTouches[0].clientX - touchStartXRef.current;
    const diffY = e.changedTouches[0].clientY - touchStartYRef.current;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    mouseStartXRef.current = e.clientX;
    isMouseDownRef.current = true;
  };

  const handleMouseUp = (e) => {
    if (!isMouseDownRef.current) return;
    isMouseDownRef.current = false;
    const diffX = e.clientX - mouseStartXRef.current;
    if (Math.abs(diffX) > 45) {
      if (diffX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-surface-muted/30 relative overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="glow-ambient-cyan w-[600px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 dark:opacity-60 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          badge={t.testimonials.badge}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        {/* ============================================================== */}
        {/* REVIEW SHUFFLE CARD STACK DECK                                 */}
        {/* ============================================================== */}
        <div
          className="relative max-w-xl xl:max-w-2xl mx-auto mt-16 sm:mt-20 pt-16 pb-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            isMouseDownRef.current = false;
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {/* Stack Cards Container (height container for stacked cards) */}
          <div className="relative w-full h-[320px] sm:h-[310px] md:h-[300px]">
            {testimonialsData.map((item, idx) => {
              const relIndex = (idx - currentIndex + total) % total;
              const isFront = relIndex === 0 && !isSwiping;
              const isExiting = isSwiping && relIndex === 0;

              // Calculate stack position
              let pos = relIndex;
              if (isSwiping) {
                // When swiping, remaining cards in the stack ease forward by 1 position
                pos = Math.max(0, relIndex - 1);
              }

              // Card styling depending on position in the deck
              let transformStyle = '';
              let opacityStyle = 1;
              let zIndexStyle = 40;
              let transitionStyle =
                'transform 450ms cubic-bezier(0.16, 1, 0.3, 1), opacity 450ms ease-out';

              if (isExiting) {
                // Card swiping off the deck
                const translateX = swipeDir === 'left' ? '-130%' : '130%';
                const rotateDeg = swipeDir === 'left' ? '-12deg' : '12deg';
                transformStyle = `translate3d(${translateX}, -10px, 0) rotate(${rotateDeg})`;
                opacityStyle = 0;
                zIndexStyle = 50;
                transitionStyle =
                  'transform 450ms cubic-bezier(0.4, 0, 0.2, 1), opacity 380ms ease-out';
              } else if (pos === 0) {
                // Top/Front active card
                transformStyle = 'translate3d(0, 0px, 0) scale(1)';
                opacityStyle = 1;
                zIndexStyle = 40;
              } else if (pos === 1) {
                // 1 card behind
                transformStyle = 'translate3d(0, -22px, 0) scale(0.94)';
                opacityStyle = 0.88;
                zIndexStyle = 30;
              } else if (pos === 2) {
                // 2 cards behind
                transformStyle = 'translate3d(0, -44px, 0) scale(0.88)';
                opacityStyle = 0.65;
                zIndexStyle = 20;
              } else if (pos === 3) {
                // 3 cards behind
                transformStyle = 'translate3d(0, -64px, 0) scale(0.82)';
                opacityStyle = 0.38;
                zIndexStyle = 10;
              } else {
                // Hidden in the back of the deck
                transformStyle = 'translate3d(0, -80px, 0) scale(0.76)';
                opacityStyle = 0;
                zIndexStyle = 0;
              }

              const quoteText = item.quote[locale] || item.quote.id;
              const roleText = item.role[locale] || item.role.id;
              const categoryText = item.category[locale] || item.category.id;

              return (
                <article
                  key={item.id}
                  className={`absolute inset-0 rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col justify-between border cursor-grab active:cursor-grabbing transition-colors duration-200 ${
                    pos === 0
                      ? 'bg-surface border-border shadow-2xl dark:border-white/15 dark:bg-[#0E1726]/95 dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] shadow-slate-900/10'
                      : pos === 1
                      ? 'bg-surface/90 border-border/70 dark:border-white/10 dark:bg-[#0B1322] shadow-xl'
                      : 'bg-surface/80 border-border/50 dark:border-white/5 dark:bg-[#09101C] shadow-lg'
                  }`}
                  style={{
                    transform: transformStyle,
                    opacity: opacityStyle,
                    zIndex: zIndexStyle,
                    transition: transitionStyle,
                    pointerEvents: pos === 0 && !isSwiping ? 'auto' : 'none',
                    willChange: 'transform, opacity',
                  }}
                  aria-hidden={pos !== 0}
                >
                  {/* Top Row: Category Pill & Star Rating with Star Pop */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-900/[0.08] dark:bg-brand-cyan/10 text-blue-900 dark:text-brand-cyan border border-blue-900/25 dark:border-brand-cyan/20">
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{categoryText}</span>
                    </span>

                    {/* Star Rating with sequential Star Pop animation */}
                    <div className="flex items-center gap-1 bg-surface-muted/60 dark:bg-white/[0.04] px-2.5 py-1 rounded-full border border-border/40 shrink-0">
                      {[...Array(item.rating)].map((_, i) => (
                        <span
                          key={`${starKey}-${i}`}
                          className="inline-block"
                          style={{
                            animation:
                              isFront && !prefersReducedMotion
                                ? `starPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                                    i * 85 + 60
                                  }ms both`
                                : 'none',
                          }}
                        >
                          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.4)]" />
                        </span>
                      ))}
                      <span className="text-[11px] sm:text-xs font-bold text-txt-muted ml-1">
                        5.0
                      </span>
                    </div>
                  </div>

                  {/* Middle Row: Quote with Quote Icon */}
                  <div className="relative my-auto py-2">
                    <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-brand-blue/20 dark:text-brand-cyan/20 rotate-180 mb-2 shrink-0" />
                    <blockquote className="text-sm sm:text-base md:text-[17px] text-txt font-medium leading-relaxed italic">
                      “{quoteText}”
                    </blockquote>
                  </div>

                  {/* Bottom Row: Author details & Verified badge */}
                  <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Avatar initial badge */}
                      <div
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br ${item.avatarColor} text-white font-bold text-base flex items-center justify-center shadow-sm shrink-0`}
                        aria-hidden="true"
                      >
                        {item.initial}
                      </div>

                      {/* Author Name, Role & Company */}
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

                    {/* Verified Client Badge */}
                    <div
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold shrink-0"
                      title={t.testimonials.verifiedClient}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span className="hidden sm:inline">
                        {t.testimonials.verifiedClient}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ============================================================== */}
          {/* UNDER THE STACK: RATING SUMMARY & DECK NAVIGATION CONTROLS     */}
          {/* ============================================================== */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4">
            {/* Rating Summary Pill (like Gambar 2) */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/70 bg-surface/80 dark:bg-surface/50 shadow-sm backdrop-blur-sm text-xs sm:text-sm font-semibold text-txt">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-txt">5.0</span>
              <span className="text-txt-muted">•</span>
              <span className="text-txt-muted">
                {locale === 'en'
                  ? 'Average rating from all verified clients'
                  : 'Rating rata-rata dari seluruh klien terverifikasi'}
              </span>
            </div>

            {/* Interactive Deck Controls: Previous, Pagination Dots, Next, Pause */}
            <div className="flex items-center gap-3 sm:gap-4 select-none">
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                disabled={isSwiping}
                className="w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center text-txt hover:text-brand-blue hover:border-brand-blue/50 dark:hover:border-brand-cyan/50 shadow-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer"
                aria-label={t.testimonials.prevButton || 'Sebelumnya'}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Dots Pagination */}
              <div
                className="flex items-center gap-1.5"
                aria-label="Testimonial navigation dots"
              >
                {testimonialsData.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => jumpToIndex(idx)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      currentIndex === idx
                        ? 'w-7 h-2 bg-brand-blue dark:bg-brand-cyan shadow-sm shadow-brand-blue/30'
                        : 'w-2 h-2 bg-border hover:bg-txt-muted/50'
                    }`}
                    aria-label={`Jump to ${item.author}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                disabled={isSwiping}
                className="w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center text-txt hover:text-brand-blue hover:border-brand-blue/50 dark:hover:border-brand-cyan/50 shadow-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer"
                aria-label={t.testimonials.nextButton || 'Berikutnya'}
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Play / Pause Toggle Button */}
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="ml-1 sm:ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-border text-xs font-semibold text-txt hover:text-brand-blue hover:border-brand-blue/50 dark:hover:border-brand-cyan/50 shadow-sm transition-all active:scale-95 cursor-pointer"
                aria-label={
                  isPaused
                    ? t.testimonials.playButton
                    : t.testimonials.pauseButton
                }
              >
                {isPaused ? (
                  <Play className="w-3.5 h-3.5 fill-current text-accent" />
                ) : (
                  <Pause className="w-3.5 h-3.5 fill-current" />
                )}
                <span className="hidden sm:inline">
                  {isPaused
                    ? t.testimonials.playButton
                    : t.testimonials.pauseButton}
                </span>
              </button>
            </div>

            {/* Hover / Swipe Notice */}
            <p className="text-[11px] text-txt-muted opacity-75">
              {t.testimonials.pauseNotice}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
