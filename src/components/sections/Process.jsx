import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  MessageSquare,
  FileCode,
  Palette,
  Code2,
  Rocket,
  Check,
  Play,
  Pause,
  RotateCcw,
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { useReveal } from '../../hooks/useReveal';

// S-curve wave path connecting the 5 step centers at y=60:
// Step 1: (100, 60), Step 2: (300, 60), Step 3: (500, 60), Step 4: (700, 60), Step 5: (900, 60)
const PATH_D = "M 100 60 C 160 15, 240 15, 300 60 C 360 105, 440 105, 500 60 C 560 15, 640 15, 700 60 C 760 105, 840 105, 900 60";

const DRAW_DURATION = 5000; // 5.0 seconds draw
const HOLD_DURATION = 2400; // 2.4 seconds live badge hold
const RESET_DURATION = 600; // 0.6 seconds reset fade
const TOTAL_CYCLE = DRAW_DURATION + HOLD_DURATION + RESET_DURATION;

export function Process({ t }) {
  const revealRef = useReveal();
  const pathRef = useRef(null);
  const startTimeRef = useRef(null);
  const rafRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [tipPos, setTipPos] = useState({ x: 100, y: 60 });
  const [pathLength, setPathLength] = useState(950);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Icons corresponding to each of the 5 steps
  const stepIcons = [
    <MessageSquare key="1" className="w-5 h-5 sm:w-6 sm:h-6" />,
    <FileCode key="2" className="w-5 h-5 sm:w-6 sm:h-6" />,
    <Palette key="3" className="w-5 h-5 sm:w-6 sm:h-6" />,
    <Code2 key="4" className="w-5 h-5 sm:w-6 sm:h-6" />,
    <Rocket key="5" className="w-5 h-5 sm:w-6 sm:h-6" />,
  ];

  // Measure path length on mount
  useEffect(() => {
    if (pathRef.current) {
      try {
        const len = pathRef.current.getTotalLength();
        if (len > 0) {
          setPathLength(len);
        }
      } catch (err) {
        // SVG length fallback
      }
    }
  }, []);

  const [isInView, setIsInView] = useState(true);
  const sectionRef = useRef(null);

  // Monitor viewport visibility with mobile-friendly threshold
  useEffect(() => {
    const elem = sectionRef.current;
    if (!elem || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(elem);
    return () => observer.disconnect();
  }, []);

  // Safe hover handlers that ignore touch devices
  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return; // Ignore synthetic mouseenter on touch devices
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const effectivelyPaused = isPaused || isHovered || !isInView;

  // Animation Loop via requestAnimationFrame (runs continuously when in view)
  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      if (!effectivelyPaused) {
        const elapsed = (timestamp - startTimeRef.current) % TOTAL_CYCLE;

        let currentProg = 0;
        if (elapsed <= DRAW_DURATION) {
          currentProg = elapsed / DRAW_DURATION;
        } else {
          currentProg = 1; // Hold at 100%
        }

        setProgress(currentProg);

        if (pathRef.current) {
          try {
            const total = pathRef.current.getTotalLength() || pathLength;
            if (total > 0) {
              const pt = pathRef.current.getPointAtLength(currentProg * total);
              if (pt && typeof pt.x === 'number') {
                setTipPos({ x: pt.x, y: pt.y });
              }
            }
          } catch (e) {
            // fallback
          }
        }
      } else {
        // Sync timestamp when paused so there is no sudden jump on resume
        startTimeRef.current = timestamp - progress * DRAW_DURATION;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [effectivelyPaused, pathLength, progress]);

  // Restart animation
  const handleRestart = useCallback(() => {
    startTimeRef.current = performance.now();
    setProgress(0);
    setTipPos({ x: 100, y: 60 });
  }, []);

  // Jump to specific step on click
  const handleStepClick = useCallback(
    (idx) => {
      const targetProg = idx * 0.25;
      setProgress(targetProg);
      startTimeRef.current = performance.now() - targetProg * DRAW_DURATION;

      if (pathRef.current) {
        try {
          const total = pathRef.current.getTotalLength() || pathLength;
          if (total > 0) {
            const pt = pathRef.current.getPointAtLength(targetProg * total);
            if (pt && typeof pt.x === 'number') {
              setTipPos({ x: pt.x, y: pt.y });
            }
          }
        } catch (e) {
          // ignore
        }
      }
    },
    [pathLength]
  );

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-surface-muted/30 relative scroll-mt-16 overflow-hidden select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background ambient lighting */}
      <div className="glow-ambient-cyan w-[600px] h-[300px] top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40 dark:opacity-70" />

      <Container className="relative z-10">
        <SectionHeading
          badge={t.process.badge}
          title={t.process.title}
          subtitle={t.process.subtitle}
        />

        <div ref={revealRef} className="relative mt-12 sm:mt-16">
          {/* ========================================================== */}
          {/* DESKTOP VIEW: S-Curved SVG Wave Line Drawing Animation (lg+) */}
          {/* ========================================================== */}
          <div className="hidden lg:block relative">
            {/* SVG Wave Path Layer */}
            <div className="absolute top-0 left-0 right-0 h-28 pointer-events-none z-0">
              <svg
                viewBox="0 0 1000 120"
                preserveAspectRatio="none"
                className="w-full h-full overflow-visible"
              >
                <defs>
                  {/* Glowing draw line gradient */}
                  <linearGradient id="process-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00E5FF" />
                    <stop offset="45%" stopColor="#00B4FF" />
                    <stop offset="100%" stopColor="#0066FF" />
                  </linearGradient>

                  {/* Neon Glow Filter */}
                  <filter id="process-glow" x="-20%" y="-40%" width="140%" height="180%">
                    <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#00E5FF" floodOpacity="0.75" />
                    <feDropShadow dx="0" dy="0" stdDeviation="12" floodColor="#00B4FF" floodOpacity="0.45" />
                  </filter>

                  {/* Tip Dot Glow Filter */}
                  <filter id="process-dot-glow" x="-100%" y="-100%" width="300%" height="300%">
                    <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#00E5FF" floodOpacity="0.9" />
                  </filter>
                </defs>

                {/* 1. Background Dim Track (Dashed) */}
                <path
                  d={PATH_D}
                  fill="none"
                  stroke="currentColor"
                  className="text-border dark:text-white/10"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                />

                {/* 2. Active Glowing Drawing Line */}
                <path
                  ref={pathRef}
                  d={PATH_D}
                  fill="none"
                  stroke="url(#process-line-gradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray={pathLength}
                  strokeDashoffset={pathLength * (1 - progress)}
                  filter="url(#process-glow)"
                  className="transition-[stroke-dashoffset] duration-75 ease-linear"
                />

                {/* 3. Glowing Leading Tip Head Dot */}
                {progress > 0.005 && progress < 0.995 && (
                  <g className="transition-transform duration-75 ease-linear pointer-events-none">
                    <circle
                      cx={tipPos.x}
                      cy={tipPos.y}
                      r="12"
                      fill="#00E5FF"
                      opacity="0.3"
                      className="animate-ping"
                    />
                    <circle
                      cx={tipPos.x}
                      cy={tipPos.y}
                      r="6.5"
                      fill="#00E5FF"
                      filter="url(#process-dot-glow)"
                    />
                    <circle
                      cx={tipPos.x}
                      cy={tipPos.y}
                      r="2.5"
                      fill="#FFFFFF"
                    />
                  </g>
                )}
              </svg>
            </div>

            {/* Step Nodes & Cards (5 Columns) */}
            <div className="grid grid-cols-5 gap-3 xl:gap-5 relative z-10">
              {t.process.steps.map((step, idx) => {
                const stepFraction = idx * 0.25;
                const isReached = progress >= stepFraction - 0.02;
                const isCurrent =
                  isReached &&
                  (idx === 4 ? progress >= 0.95 : progress < (idx + 1) * 0.25 - 0.02);

                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center cursor-pointer group"
                    onClick={() => handleStepClick(idx)}
                    title={`Langkah ${step.step}: ${step.title}`}
                  >
                    {/* Circle Node on the Wave Baseline */}
                    <div className="h-28 flex items-center justify-center relative">
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center transition-all duration-300 relative ${
                          isReached
                            ? 'bg-surface border-2 border-brand-blue dark:border-brand-cyan text-brand-blue dark:text-brand-cyan shadow-lg shadow-brand-blue/20 dark:shadow-[0_0_24px_rgba(0,229,255,0.45)] scale-100 ring-4 ring-brand-blue/10 dark:ring-cyan-400/20'
                            : 'bg-surface/80 dark:bg-surface/50 border-2 border-border/80 dark:border-white/10 text-txt-muted shadow-sm scale-95 opacity-60 group-hover:scale-100 group-hover:opacity-90 group-hover:border-accent/40'
                        } ${isCurrent ? 'animate-pulse' : ''}`}
                      >
                        {stepIcons[idx]}

                        {/* Top-Right Step Badge / Springing Checkmark */}
                        <div className="absolute -top-2.5 -right-2.5 transition-all duration-300">
                          {isReached ? (
                            <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/40 animate-in zoom-in-75 duration-200">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </span>
                          ) : (
                            <span className="font-heading text-[11px] font-bold px-2 py-0.5 rounded-full bg-surface-muted border border-border text-txt-muted">
                              {step.step}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Step Card Details below */}
                    <article
                      className={`w-full rounded-2xl border p-4 sm:p-5 transition-all duration-300 text-left ${
                        isReached
                          ? 'bg-surface border-border shadow-md text-txt opacity-100 translate-y-0 dark:border-white/15'
                          : 'bg-surface/40 border-border/50 text-txt-muted opacity-60 translate-y-1 dark:border-white/5'
                      } ${
                        isCurrent
                          ? 'border-brand-blue/50 dark:border-cyan-400/50 shadow-lg shadow-brand-blue/10 dark:shadow-[0_0_20px_rgba(0,229,255,0.2)] ring-1 ring-brand-blue/30'
                          : ''
                      }`}
                    >
                      <h3
                        className={`text-sm sm:text-base font-heading font-semibold mb-2 transition-colors ${
                          isCurrent
                            ? 'text-brand-blue dark:text-brand-cyan font-bold'
                            : isReached
                            ? 'text-txt'
                            : 'text-txt-muted'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-txt-muted leading-relaxed">
                        {step.desc}
                      </p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========================================================== */}
          {/* MOBILE & TABLET VIEW: Vertical Animated Progress Timeline (< lg) */}
          {/* ========================================================== */}
          <div className="lg:hidden relative pl-12 sm:pl-16 space-y-6 sm:space-y-8">
            {/* Background Dim Dashed Track */}
            <div className="absolute left-5 sm:left-7 top-4 bottom-8 w-1 border-l-2 border-dashed border-border/70 dark:border-white/10 z-0" />

            {/* Active Drawing Glow Track */}
            <div
              className="absolute left-5 sm:left-7 top-4 w-1 bg-gradient-to-b from-brand-cyan via-brand-blue to-brand-deep-blue shadow-[0_0_14px_#00E5FF] rounded-full z-10 transition-[height] duration-75 ease-linear"
              style={{ height: `${Math.min(100, Math.max(0, progress * 100))}%` }}
            />

            {/* Glowing Leading Dot on Mobile */}
            {progress > 0.01 && progress < 0.99 && (
              <div
                className="absolute left-5 sm:left-7 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-cyan shadow-[0_0_14px_#00E5FF] border-2 border-white z-20 pointer-events-none transition-[top] duration-75 ease-linear"
                style={{ top: `calc(1rem + ${progress * 100}% * 0.94)` }}
              />
            )}

            {/* Mobile Step Cards */}
            {t.process.steps.map((step, idx) => {
              const stepFraction = idx * 0.25;
              const isReached = progress >= stepFraction - 0.02;
              const isCurrent =
                isReached &&
                (idx === 4 ? progress >= 0.95 : progress < (idx + 1) * 0.25 - 0.02);

              return (
                <div
                  key={idx}
                  className="relative cursor-pointer group"
                  onClick={() => handleStepClick(idx)}
                >
                  {/* Step Node Marker on Vertical Line */}
                  <div
                    className={`absolute -left-12 sm:-left-16 top-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isReached
                        ? 'border-emerald-500 bg-emerald-500 text-white shadow-md shadow-emerald-500/30 scale-105'
                        : 'border-border bg-surface text-txt-muted text-xs font-bold scale-95 opacity-70'
                    }`}
                  >
                    {isReached ? (
                      <Check className="w-4 h-4 stroke-[3]" />
                    ) : (
                      <span className="text-xs font-bold">{step.step}</span>
                    )}
                  </div>

                  {/* Card Content */}
                  <article
                    className={`rounded-2xl border p-4 sm:p-5 transition-all duration-300 ${
                      isReached
                        ? 'bg-surface border-border shadow-md text-txt opacity-100 dark:border-white/15'
                        : 'bg-surface/50 border-border/50 text-txt-muted opacity-60 dark:border-white/5'
                    } ${
                      isCurrent
                        ? 'border-brand-blue dark:border-cyan-400 shadow-lg shadow-brand-blue/10 dark:shadow-[0_0_15px_rgba(0,229,255,0.2)]'
                        : ''
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-1.5 rounded-lg bg-surface-muted text-accent">
                        {stepIcons[idx]}
                      </div>
                      <h3
                        className={`text-sm sm:text-base font-heading font-semibold ${
                          isCurrent ? 'text-brand-blue dark:text-brand-cyan' : 'text-txt'
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-txt-muted leading-relaxed">
                      {step.desc}
                    </p>
                  </article>
                </div>
              );
            })}
          </div>

          {/* ========================================================== */}
          {/* BOTTOM LIVE STATUS BADGE & INTERACTIVE CONTROLS            */}
          {/* ========================================================== */}
          <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center gap-4">
            {/* "Website Siap Online" Live Pill Badge */}
            <div
              className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all duration-500 ${
                progress >= 0.95
                  ? 'opacity-100 translate-y-0 scale-100 bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)]'
                  : 'opacity-40 translate-y-1 scale-95 bg-surface border-border/60 text-txt-muted'
              }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className={`absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${
                    progress >= 0.95 ? 'animate-ping' : ''
                  }`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                    progress >= 0.95 ? 'bg-emerald-500' : 'bg-slate-400'
                  }`}
                />
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                {t.process.liveBadge}
              </span>
            </div>

            {/* Play/Pause & Replay Accessibility Controls */}
            <div className="flex items-center gap-3 text-xs text-txt-muted select-none">
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="hover:text-txt inline-flex items-center gap-1.5 transition-colors px-2.5 py-1 rounded-full border border-border/50 bg-surface/70 hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={isPaused ? t.process.resumeText : t.process.pauseText}
              >
                {isPaused ? (
                  <Play className="w-3.5 h-3.5 text-accent" />
                ) : (
                  <Pause className="w-3.5 h-3.5" />
                )}
                <span>{isPaused ? t.process.resumeText : t.process.pauseText}</span>
              </button>

              <span>•</span>

              <button
                type="button"
                onClick={handleRestart}
                className="hover:text-txt inline-flex items-center gap-1.5 transition-colors px-2.5 py-1 rounded-full border border-border/50 bg-surface/70 hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.process.replayButton}</span>
              </button>

              <span className="hidden sm:inline">•</span>

              <span className="hidden sm:inline text-[11px] opacity-75">
                {t.process.pauseNotice}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
