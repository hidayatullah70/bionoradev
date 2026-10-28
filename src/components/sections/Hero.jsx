import React from 'react';
import { ArrowRight, Sparkles, Smartphone, Zap, Layout, TrendingUp, CheckCircle2, Code2, Monitor, Search, RotateCcw } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { WhatsAppIcon3D } from '../ui/WhatsAppIcon3D';
import { scrollToSection, cn } from '../../lib/utils';
import { useReveal } from '../../hooks/useReveal';
import { siteConfig } from '../../config/siteConfig';

export function Hero({ locale, t }) {
  const revealRef = useReveal();
  const sectionRef = React.useRef(null);
  const whatsAppUrl = buildWhatsAppUrl({ locale });

  // Hero Reveal sequence state (Gambar 2: 7s loop, pauses on hover/reduced motion)
  const [cycleKey, setCycleKey] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isInView, setIsInView] = React.useState(true);
  const touchTimeoutRef = React.useRef(null);

  // Monitor viewport visibility so we don't loop off-screen
  React.useEffect(() => {
    const elem = sectionRef.current;
    if (!elem || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05, rootMargin: '60px 0px' }
    );

    observer.observe(elem);
    return () => {
      observer.disconnect();
      if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
    };
  }, []);

  // 7s sequence loop as specified in Gambar 2
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    if (isHovered || !isInView) return;

    const timer = setInterval(() => {
      setCycleKey((prev) => prev + 1);
    }, 7000);

    return () => clearInterval(timer);
  }, [isHovered, isInView]);

  const handleReplay = (e) => {
    if (e) e.stopPropagation();
    setCycleKey((prev) => prev + 1);
  };

  const handleMouseEnter = () => {
    // Only pause on hover if device has true cursor/mouse pointer
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
    touchTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 2000);
  };

  // Split headline lines into individual words for staggered blur-to-sharp reveal
  const line1Words = React.useMemo(() => {
    return (t.hero.headlineLine1 || '').trim().split(/\s+/).filter(Boolean);
  }, [t.hero.headlineLine1]);

  const line2Words = React.useMemo(() => {
    return (t.hero.headlineLine2 || '').trim().split(/\s+/).filter(Boolean);
  }, [t.hero.headlineLine2]);

  const totalWords = line1Words.length + line2Words.length;

  const bulletIcons = [
    <Smartphone key="1" className="w-4 h-4 text-cyan-400" />,
    <WhatsAppIcon3D key="2" className="w-4 h-4" size={16} />,
    <Layout key="3" className="w-4 h-4 text-blue-400" />,
    <Zap key="4" className="w-4 h-4 text-amber-400" />,
  ];

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-transparent"
    >
      {/* Hero Background Image: Ken Burns Effect auto zoom-in 1.0 -> 1.15 infinite alternate */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden bg-transparent">
        <img
          src="/assets/hero/hero01.png"
          alt=""
          aria-hidden="true"
          className="w-full h-screen min-h-full object-cover object-center lg:object-right animate-kenburns will-change-transform"
          style={{ transformOrigin: 'center center' }}
        />
      </div>

      <Container className="relative z-10">
        <div ref={revealRef} className="flex flex-col">
          {/* Top Row: Left Column with Copy & CTAs, Right area open so text never overlaps laptop showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Width-constrained so text does NOT overlap laptop image */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left max-w-xl xl:max-w-2xl">
              {/* Top Badge (Kicker & Reveal Loop Indicator) */}
              <div className="mb-6 flex flex-wrap items-center gap-2.5">
                {/* 1. Badge Drops in 16px and fades in (0.6s) */}
                <div
                  key={`badge-${cycleKey}`}
                  className="hero-badge-drop inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 dark:bg-surface/80 border border-white/20 dark:border-brand-blue/30 backdrop-blur-md shadow-sm will-change-transform"
                  style={{ animationDelay: '40ms' }}
                >
                  <Sparkles className="w-4 h-4 text-brand-cyan animate-pulse" />
                  <span className="text-xs font-bold tracking-wider text-white dark:text-txt">
                    {t.hero.badge}
                  </span>
                </div>

                {/* Hero Reveal Auto-loop Status & Manual Replay Button */}
                <button
                  type="button"
                  onClick={handleReplay}
                  title={locale === 'id' ? 'Hero Reveal · Auto-loop 7s (Klik untuk replay)' : 'Hero Reveal · 7s auto-loop (Click to replay)'}
                  aria-label="Replay Hero Reveal animation"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 dark:bg-surface/50 dark:hover:bg-surface border border-white/10 dark:border-white/15 text-[11px] font-medium text-slate-300 dark:text-txt-muted hover:text-brand-cyan transition-all duration-200 cursor-pointer group select-none"
                >
                  <RotateCcw className={cn("w-3 h-3 transition-transform duration-500", isHovered ? "" : "group-hover:-rotate-90")} />
                  <span className="hidden sm:inline font-mono text-[10px] tracking-wide">
                    {isHovered ? (locale === 'id' ? 'Ditahan' : 'Paused') : 'Reveal 7s'}
                  </span>
                  <span className="relative flex h-2 w-2">
                    <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", isHovered ? "bg-amber-400" : "bg-brand-cyan")} />
                    <span className={cn("relative inline-flex rounded-full h-2 w-2", isHovered ? "bg-amber-400" : "bg-brand-cyan")} />
                  </span>
                </button>
              </div>

              {/* 2. Single H1 for SEO with Staggered Word Reveal (rises 28px from 14px blur to sharp, staggered 90ms) */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-heading font-semibold tracking-tight text-white dark:text-txt leading-[1.15]">
                {/* Line 1 Words */}
                <span className="block sm:whitespace-nowrap">
                  {line1Words.map((word, idx) => (
                    <span
                      key={`l1-${idx}-${cycleKey}`}
                      className="hero-word-reveal inline-block mr-[0.28em] will-change-transform"
                      style={{
                        animationDelay: `${120 + idx * 90}ms`,
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </span>

                {/* Line 2 Words with Brand Accent + 3. Animated SVG Underline */}
                <span className="relative inline-block mt-1 sm:mt-2">
                  {line2Words.map((word, idx) => {
                    const globalIdx = line1Words.length + idx;
                    return (
                      <span
                        key={`l2-${idx}-${cycleKey}`}
                        className="brand-gradient-text hero-word-reveal inline-block mr-[0.28em] will-change-transform"
                        style={{
                          animationDelay: `${120 + globalIdx * 90}ms`,
                        }}
                      >
                        {word}
                      </span>
                    );
                  })}

                  {/* 3. Accent Underline SVG draws from left to right */}
                  <svg
                    key={`underline-${cycleKey}`}
                    className="absolute -bottom-1.5 sm:-bottom-2.5 left-0 w-full h-2.5 sm:h-3.5 pointer-events-none overflow-visible z-10"
                    viewBox="0 0 320 14"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 9 C 80 2, 220 2, 318 8"
                      stroke="url(#hero-accent-underline-gradient)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      className="hero-underline-draw"
                      style={{
                        animationDelay: `${120 + totalWords * 90 + 50}ms`,
                      }}
                    />
                    <defs>
                      <linearGradient id="hero-accent-underline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00E5FF" />
                        <stop offset="50%" stopColor="#00B4FF" />
                        <stop offset="100%" stopColor="#0066FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              {/* 4. Subheadline Supporting Copy: Fades up smoothly */}
              <p
                key={`subheadline-${cycleKey}`}
                className="hero-copy-fade mt-5 text-base sm:text-lg lg:text-xl text-slate-200 dark:text-txt-muted leading-relaxed max-w-lg lg:max-w-[460px] xl:max-w-[480px] will-change-transform"
                style={{
                  animationDelay: `${120 + totalWords * 90 + 120}ms`,
                }}
              >
                {(() => {
                  const parts = t.hero.subheadline.split('BionoraDev');
                  if (parts.length > 1) {
                    return (
                      <>
                        {parts[0]}
                        <strong className="font-bold whitespace-nowrap">
                          <span className="text-white">Bionora</span>
                          <span className="text-brand-cyan bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
                            Dev
                          </span>
                        </strong>
                        {parts[1]}
                      </>
                    );
                  }
                  return t.hero.subheadline;
                })()}
              </p>

              {/* Checklist Selling Points: Fades up with copy */}
              {t.hero.checklist && (
                <div
                  key={`checklist-${cycleKey}`}
                  className="hero-copy-fade mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md sm:max-w-lg will-change-transform"
                  style={{
                    animationDelay: `${120 + totalWords * 90 + 220}ms`,
                  }}
                >
                  {t.hero.checklist.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-white dark:text-txt">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* 5. Primary & Secondary CTAs Spring from 0.6 to 1 with slight overshoot */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <div
                  key={`btn-primary-${cycleKey}`}
                  className="hero-button-spring relative will-change-transform"
                  style={{
                    animationDelay: `${120 + totalWords * 90 + 340}ms`,
                  }}
                >
                  <Button
                    href={whatsAppUrl}
                    variant="gradient"
                    size="lg"
                    className="gap-3 group font-bold w-full sm:w-auto relative overflow-hidden"
                  >
                    {/* 6. Soft shine sweeps across primary button once */}
                    <span
                      key={`shine-${cycleKey}`}
                      aria-hidden="true"
                      className="hero-shine-sweep absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                      style={{
                        animationDelay: `${120 + totalWords * 90 + 950}ms`,
                      }}
                    />
                    <WhatsAppIcon3D className="w-5 h-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" size={20} />
                    <span>{t.hero.ctaPrimary}</span>
                  </Button>
                </div>

                <div
                  key={`btn-secondary-${cycleKey}`}
                  className="hero-button-spring will-change-transform"
                  style={{
                    animationDelay: `${120 + totalWords * 90 + 440}ms`,
                  }}
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="gap-2 group font-semibold text-white dark:text-txt border-white/20 dark:border-border hover:bg-white/10 w-full sm:w-auto"
                    onClick={() => scrollToSection('portfolio')}
                  >
                    <span>{t.hero.ctaSecondary}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column Spacer: Completely clear space for background 3D workstation/laptop */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-6 min-h-[300px] pointer-events-none" />
          </div>

          {/* Bottom Row: 4 Capability Bullets (Left) & 7. Dashboard Card peeking up (Right) */}
          <div className="mt-12 pt-8 border-t border-white/20 dark:border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: 4 Capability Bullets */}
            <div
              key={`capability-${cycleKey}`}
              className="hero-copy-fade lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full will-change-transform"
              style={{
                animationDelay: `${120 + totalWords * 90 + 460}ms`,
              }}
            >
              {t.hero.capabilityBullets.map((bullet, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    {bulletIcons[idx] || <CheckCircle2 className="w-4 h-4 text-accent" />}
                    <span className="text-xs font-bold text-white dark:text-txt">{bullet.label}</span>
                  </div>
                  <span className="text-[11px] text-slate-300 dark:text-txt-muted">{bullet.desc}</span>
                </div>
              ))}
            </div>

            {/* Right Column: 7. Compact Dashboard Card peeking up, tilts from rotateX(28deg) 240px lower into place */}
            <div className="lg:col-span-5 flex justify-start lg:justify-end w-full overflow-visible">
              <div
                key={`dashboard-card-${cycleKey}`}
                className="hero-card-tilt w-full max-w-sm sm:max-w-md lg:max-w-sm rounded-2xl bg-transparent border border-white/20 dark:border-white/20 p-2.5 sm:p-3 backdrop-blur-[2px] shadow-sm flex flex-col gap-2 will-change-transform"
                style={{
                  animationDelay: `${120 + totalWords * 90 + 260}ms`,
                }}
              >
                {/* Mini Browser Bar */}
                <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-transparent border border-white/15 dark:border-white/10 text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-[10px] bg-transparent px-2 py-0.5 rounded border border-white/15 dark:border-white/10 text-slate-300 dark:text-txt-muted font-mono truncate max-w-[170px]">
                    https://bionora.my.id/
                  </div>
                  <div className="w-3" />
                </div>

                {/* Compact Transparent Web Development Card */}
                <div className="p-2.5 rounded-xl bg-transparent border border-brand-blue/40 flex flex-col gap-2 group">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-brand-blue shrink-0 group-hover:scale-105 transition-transform">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-xs text-white dark:text-txt group-hover:text-brand-blue transition-colors">
                          Web Development
                        </h3>
                        <p className="text-[10px] text-slate-300 dark:text-txt-muted leading-tight mt-0.5">
                          {locale === 'id'
                            ? 'Website modern, cepat, aman & responsif.'
                            : 'Modern, fast, secure & responsive website.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-1.5 pt-1.5 border-t border-white/15 dark:border-white/10">
                    <button
                      onClick={() => scrollToSection('services')}
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-cyan hover:text-brand-blue transition-colors"
                    >
                      <span>{locale === 'id' ? 'Selengkapnya' : 'Learn More'}</span>
                      <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-1 text-[9px] text-slate-300 dark:text-txt-muted font-medium">
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full border border-white/20 dark:border-white/15">
                        <Monitor className="w-2.5 h-2.5 text-brand-cyan" />
                        <span>Responsive</span>
                      </span>
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full border border-white/20 dark:border-white/15">
                        <Zap className="w-2.5 h-2.5 text-amber-400" />
                        <span>Fast</span>
                      </span>
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full border border-white/20 dark:border-white/15">
                        <Search className="w-2.5 h-2.5 text-emerald-400" />
                        <span>SEO</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Compact Transparent Stats & Integration Row */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded-xl bg-transparent border border-white/15 dark:border-white/15 flex flex-col justify-between">
                    <span className="text-[10px] text-slate-300 dark:text-txt-muted truncate">{t.hero.mockup.activeUsers}</span>
                    <div className="mt-1 flex items-baseline justify-between">
                      <span className="text-sm font-semibold text-white dark:text-txt">14,280</span>
                      <span className="text-[9px] font-semibold text-emerald-400 flex items-center gap-0.5">
                        <TrendingUp className="w-2.5 h-2.5" />
                        {t.hero.mockup.weeklyGrowth}
                      </span>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-transparent border border-white/15 dark:border-white/15 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <div className="p-1 rounded-md bg-brand-cyan/10 shrink-0">
                        <WhatsAppIcon3D className="w-3.5 h-3.5" size={14} />
                      </div>
                      <div className="flex flex-col truncate">
                        <span className="text-[10px] font-bold text-white dark:text-txt truncate">WhatsApp Sync</span>
                        <span className="text-[9px] text-slate-300 dark:text-txt-muted truncate">{t.hero.mockup.fastResponse}</span>
                      </div>
                    </div>
                    <Badge variant="cyan" className="text-[9px] px-1 py-0 shrink-0">Sync</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

