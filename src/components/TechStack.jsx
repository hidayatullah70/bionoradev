import React from 'react';
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaReact, FaServer } from 'react-icons/fa';
import {
  SiClaude,
  SiCloudflarepages,
  SiCursor,
  SiExpress,
  SiFirebase,
  SiFlydotio,
  SiGit,
  SiGithub,
  SiGithubpages,
  SiGoogle,
  SiInfinityfree,
  SiMysql,
  SiNetlify,
  SiRailway,
  SiRender,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
  SiVite,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { RotateCcw, Shield, Cloud, Terminal, Activity, Layers, Sparkles } from 'lucide-react';
import { Container } from './ui/Container';
import { useReveal } from '../hooks/useReveal';
import { cn } from '../lib/utils';

function LovableIcon({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <defs>
        <radialGradient
          id="lovable-grad"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-1 22.5 -30.45 -1.35 14 3)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="30%" stopColor="#FE7B02" />
          <stop offset="40%" stopColor="#FE4230" />
          <stop offset="50%" stopColor="#FE529A" />
          <stop offset="70%" stopColor="#DD67EE" />
          <stop offset="90%" stopColor="#4B73FF" />
        </radialGradient>
      </defs>
      <path
        fill="url(#lovable-grad)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 0c4 0 7.2 3.2 7.2 7.1v2.7h2.3a7 7 0 0 1 0 14.2H0V7.1A7 7 0 0 1 7 0"
      />
    </svg>
  );
}

function SupabaseFirebaseIcon({ className = '', style = {} }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center -space-x-1 sm:-space-x-1.5 shrink-0 ${className}`}
      style={style}
    >
      <SiSupabase className="h-3.5 w-3.5 sm:h-4 sm:w-4" style={{ color: '#3ECF8E' }} />
      <SiFirebase className="h-3.5 w-3.5 sm:h-4 sm:w-4" style={{ color: '#FFCA28' }} />
    </span>
  );
}

const techCategories = [
  {
    id: 'frontend',
    technologies: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
      { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    ],
  },
  {
    id: 'styling',
    technologies: [
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    ],
  },
  {
    id: 'backend',
    technologies: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#111827', darkTone: true },
      { name: 'REST API', icon: FaServer, color: '#A78BFA' },
    ],
  },
  {
    id: 'database',
    technologies: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Railway', icon: SiRailway, color: '#111827', darkTone: true },
      { name: 'Render.com', icon: SiRender, color: '#111827', darkTone: true },
      { name: 'Fly.io', icon: SiFlydotio, color: '#7B3FE4' },
      { name: 'Supabase / Firebase', icon: SupabaseFirebaseIcon },
    ],
  },
  {
    id: 'deployment',
    technologies: [
      { name: 'Vercel', icon: SiVercel, color: '#111827', darkTone: true },
      { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
      { name: 'Cloudflare Pages', icon: SiCloudflarepages, color: '#F38020' },
      { name: 'GitHub Pages', icon: SiGithubpages, color: '#111827', darkTone: true },
      { name: 'InfinityFree', icon: SiInfinityfree, color: '#0052CC' },
    ],
  },
  {
    id: 'tools',
    technologies: [
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
      { name: 'Google Antigravity', icon: SiGoogle, color: '#4285F4' },
      { name: 'Cursor', icon: SiCursor, color: '#111827', darkTone: true },
      { name: 'Claude', icon: SiClaude, color: '#D97757' },
      { name: 'Lovable', icon: LovableIcon },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Github', icon: SiGithub, color: '#111827', darkTone: true },
    ],
  },
];

export function TechStack({ t }) {
  const revealRef = useReveal();
  const sectionRef = React.useRef(null);
  const gridRef = React.useRef(null);
  const technology = t.technology;

  // 06 Bento Build sequence state (Loop every 7s, pause on hover/reduced motion)
  const [cycleKey, setCycleKey] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isInView, setIsInView] = React.useState(true);
  const hasTriggeredRef = React.useRef(false);
  const touchTimeoutRef = React.useRef(null);

  // Spotlight cursor tracking
  const [mousePos, setMousePos] = React.useState({ x: 50, y: 35, isManual: false });

  // Typewriter text state for Frontend tile ("Writes your copy" equivalent)
  const fullTypedText = "const app = createModernUI({ fast: true, seo: true });";
  const [typedText, setTypedText] = React.useState("");

  // Intersection observer to track section visibility on both mobile & desktop
  React.useEffect(() => {
    const elem = sectionRef.current;
    if (!elem || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        // Trigger fresh bento build snap animation when user scrolls into view
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          setCycleKey((k) => k + 1);
        }
      },
      { threshold: 0.05, rootMargin: '80px 0px' }
    );

    observer.observe(elem);
    return () => {
      observer.disconnect();
      if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
    };
  }, []);

  // 7s auto-loop
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

  // Handle manual replay
  const handleReplay = (e) => {
    if (e) e.stopPropagation();
    setCycleKey((prev) => prev + 1);
  };

  // Typewriter effect triggered on cycleKey
  React.useEffect(() => {
    setTypedText("");
    let currentIdx = 0;
    const startDelay = setTimeout(() => {
      const typeTimer = setInterval(() => {
        if (currentIdx < fullTypedText.length) {
          setTypedText(fullTypedText.slice(0, currentIdx + 1));
          currentIdx++;
        } else {
          clearInterval(typeTimer);
        }
      }, 35);
      return () => clearInterval(typeTimer);
    }, 450);

    return () => clearTimeout(startDelay);
  }, [cycleKey]);

  // Handle mouse move over bento grid for interactive radial spotlight
  const handleMouseMove = (e) => {
    if (!gridRef.current) return;
    const rect = gridRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setMousePos({ x, y, isManual: true });
  };

  const handleMouseEnter = () => {
    // Only register hover if device has true mouse pointer
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setIsHovered(true);
    }
  };

  const handleMouseLeaveGrid = () => {
    setMousePos((prev) => ({ ...prev, isManual: false }));
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

  const handleTouchMove = (e) => {
    if (!gridRef.current || !e.touches || !e.touches[0]) return;
    const rect = gridRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((touch.clientY - rect.top) / rect.height) * 100));
    setMousePos({ x, y, isManual: true });
  };

  return (
    <section
      id="technology"
      ref={sectionRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeaveGrid}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      className="relative overflow-hidden border-y border-border bg-bg py-14 sm:py-20 lg:py-28 text-txt dark:border-white/[0.06] dark:bg-[#070B12] dark:text-white"
    >
      {/* Ambient Top Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_top,rgba(0,180,255,0.12),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.15),transparent_70%)]"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="mx-auto mb-10 sm:mb-14 lg:mb-16 max-w-3xl text-center">
          <div className="mb-3.5 sm:mb-4 inline-flex items-center gap-2.5">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-900/20 dark:border-brand-blue/30 bg-blue-900/[0.06] dark:bg-brand-blue/[0.08] px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-blue-900 dark:text-brand-cyan shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-900 dark:bg-brand-cyan animate-pulse" aria-hidden="true" />
              <span>{technology.badge}</span>
            </div>

            {/* Bento Reveal Status & Manual Replay Button */}
            <button
              type="button"
              onClick={handleReplay}
              title="Bento Build · Auto-loop 7s (Klik untuk replay)"
              aria-label="Replay Bento Build animation"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 dark:bg-surface/50 dark:hover:bg-surface border border-white/10 dark:border-white/15 text-[11px] font-medium text-slate-400 dark:text-txt-muted hover:text-brand-cyan transition-all duration-200 cursor-pointer group select-none"
            >
              <RotateCcw className={cn("w-3 h-3 transition-transform duration-500", isHovered ? "" : "group-hover:-rotate-90")} />
              <span className="hidden sm:inline font-mono text-[10px] tracking-wide">
                {isHovered ? 'Ditahan' : 'Bento 7s'}
              </span>
              <span className="relative flex h-2 w-2">
                <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", isHovered ? "bg-amber-400" : "bg-brand-cyan")} />
                <span className={cn("relative inline-flex rounded-full h-2 w-2", isHovered ? "bg-amber-400" : "bg-brand-cyan")} />
              </span>
            </button>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight text-txt dark:text-white leading-tight">
            {technology.title}
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-xs sm:text-base leading-relaxed text-txt-muted">
            {technology.subtitle}
          </p>
        </div>

        {/* 06 Bento Grid Container with Dynamic Radial Spotlight */}
        <div
          ref={(node) => {
            gridRef.current = node;
            if (revealRef) revealRef.current = node;
          }}
          onMouseMove={handleMouseMove}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {/* Soft Radial Spotlight: Tracks cursor or glides ambiently across tiles */}
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 rounded-3xl",
              mousePos.isManual ? "" : "bento-spotlight-glide"
            )}
            style={{
              background: `radial-gradient(550px circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 229, 255, 0.14), rgba(0, 102, 255, 0.04) 50%, transparent 70%)`,
            }}
          />

          {/* ============================================================== */}
          {/* TILE 0: Frontend (Spans 2 cols on lg) - "Writes your copy" */}
          {/* ============================================================== */}
          <article
            key={`bento-0-${cycleKey}`}
            className="bento-snap-0 relative z-10 lg:col-span-2 rounded-2xl sm:rounded-3xl border border-border bg-surface/90 dark:border-white/[0.08] dark:bg-[#0D1524]/85 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-brand-cyan/50 hover:shadow-[0_10px_35px_rgba(0,180,255,0.12)] flex flex-col justify-between overflow-hidden group will-change-transform"
            style={{ animationDelay: '0ms' }}
          >
            <div>
              {/* Header with pill badge */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-brand-cyan shrink-0">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-semibold text-txt dark:text-white">
                      {technology.categories.frontend}
                    </h3>
                    <span className="text-[10px] font-mono text-txt-muted">Client-Side Architecture</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-cyan-500/10 text-brand-cyan border border-cyan-500/25">
                  High Performance
                </span>
              </div>

              {/* Mini Interactive Terminal: Types out sentence with blinking caret */}
              <div className="rounded-xl border border-border/80 dark:border-white/10 bg-slate-900/90 text-slate-200 p-3 sm:p-4 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[10px] text-slate-400">BionoraUI.jsx</span>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-cyan-300">Vite · React 18</span>
                </div>
                <div className="text-slate-300 min-h-[22px] flex items-center flex-wrap">
                  <span className="text-pink-400 mr-2">const</span>
                  <span className="text-cyan-300 mr-1.5">{typedText}</span>
                  <span className="bento-caret inline-block w-2 h-4 bg-brand-cyan ml-0.5" />
                </div>
              </div>
            </div>

            {/* Frontend Tech Pills */}
            <div className="mt-5 pt-4 border-t border-border/60 dark:border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {techCategories[0].technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-muted/60 dark:bg-white/[0.04] border border-border/40 dark:border-white/[0.05] hover:border-brand-cyan/40 hover:bg-surface-muted dark:hover:bg-white/[0.08] transition-all group/item"
                  >
                    <Icon className="w-4 h-4 shrink-0 transition-transform group-hover/item:scale-110" style={{ color: tech.color }} />
                    <span className="text-xs font-semibold text-txt dark:text-slate-200 truncate">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </article>

          {/* ============================================================== */}
          {/* TILE 1: Styling (Span 1 col on lg) */}
          {/* ============================================================== */}
          <article
            key={`bento-1-${cycleKey}`}
            className="bento-snap-1 relative z-10 lg:col-span-1 rounded-2xl sm:rounded-3xl border border-border bg-surface/90 dark:border-white/[0.08] dark:bg-[#0D1524]/85 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-sky-400/50 hover:shadow-[0_10px_35px_rgba(6,182,212,0.12)] flex flex-col justify-between overflow-hidden group will-change-transform"
            style={{ animationDelay: '120ms' }}
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-semibold text-txt dark:text-white">
                      {technology.categories.styling}
                    </h3>
                    <span className="text-[10px] font-mono text-txt-muted">Responsive Layouts</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/25">
                  Tokens
                </span>
              </div>

              {/* Mini Design System Widget */}
              <div className="p-3.5 rounded-xl border border-border/80 dark:border-white/10 bg-surface-muted/50 dark:bg-white/[0.03] flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-txt-muted">
                  <span>Breakpoints</span>
                  <div className="flex gap-1.5">
                    <span className="px-1.5 py-0.5 rounded bg-sky-500/15 text-sky-400 font-bold text-[9px]">SM</span>
                    <span className="px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400 font-bold text-[9px]">MD</span>
                    <span className="px-1.5 py-0.5 rounded bg-purple-500/15 text-purple-400 font-bold text-[9px]">LG</span>
                  </div>
                </div>
                <div className="h-2 rounded-full w-full bg-gradient-to-r from-cyan-400 via-sky-500 to-brand-deep shadow-sm" />
                <span className="text-[10px] text-txt-muted">Tailwind JIT · Zero Unused CSS</span>
              </div>
            </div>

            {/* Styling Tech Pills */}
            <div className="mt-5 pt-4 border-t border-border/60 dark:border-white/[0.08] flex flex-col gap-2">
              {techCategories[1].technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-surface-muted/60 dark:bg-white/[0.04] border border-border/40 dark:border-white/[0.05] hover:border-sky-400/40 hover:bg-surface-muted dark:hover:bg-white/[0.08] transition-all group/item"
                  >
                    <Icon className="w-4 h-4 shrink-0 transition-transform group-hover/item:scale-110" style={{ color: tech.color }} />
                    <span className="text-xs font-semibold text-txt dark:text-slate-200">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </article>

          {/* ============================================================== */}
          {/* TILE 2: Backend & API (Span 1 col) - "Live analytics" */}
          {/* ============================================================== */}
          <article
            key={`bento-2-${cycleKey}`}
            className="bento-snap-2 relative z-10 lg:col-span-1 rounded-2xl sm:rounded-3xl border border-border bg-surface/90 dark:border-white/[0.08] dark:bg-[#0D1524]/85 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_10px_35px_rgba(16,185,129,0.12)] flex flex-col justify-between overflow-hidden group will-change-transform"
            style={{ animationDelay: '240ms' }}
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-semibold text-txt dark:text-white">
                      {technology.categories.backend}
                    </h3>
                    <span className="text-[10px] font-mono text-txt-muted">Fast Endpoints</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                  200 OK
                </span>
              </div>

              {/* Live Analytics Growing Bars Widget (Gambar 2 equivalent) */}
              <div className="p-3.5 rounded-xl border border-border/80 dark:border-white/10 bg-surface-muted/50 dark:bg-white/[0.03] flex flex-col gap-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-txt-muted">
                  <span>Throughput</span>
                  <span className="text-emerald-400 font-bold text-[10px]">99.9% Uptime</span>
                </div>
                {/* 5 growing vertical bars */}
                <div className="h-14 flex items-end justify-between gap-2 px-2 pt-2">
                  <div
                    className="bento-bar-grow w-full rounded-md bg-slate-300 dark:bg-slate-700"
                    style={{ height: '42%', animationDelay: '800ms' }}
                  />
                  <div
                    className="bento-bar-grow w-full rounded-md bg-slate-300 dark:bg-slate-700"
                    style={{ height: '68%', animationDelay: '920ms' }}
                  />
                  <div
                    className="bento-bar-grow w-full rounded-md bg-gradient-to-t from-emerald-500 to-cyan-400 shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                    style={{ height: '95%', animationDelay: '1040ms' }}
                  />
                  <div
                    className="bento-bar-grow w-full rounded-md bg-slate-300 dark:bg-slate-700"
                    style={{ height: '58%', animationDelay: '1160ms' }}
                  />
                  <div
                    className="bento-bar-grow w-full rounded-md bg-slate-300 dark:bg-slate-700"
                    style={{ height: '82%', animationDelay: '1280ms' }}
                  />
                </div>
              </div>
            </div>

            {/* Backend Tech Pills */}
            <div className="mt-5 pt-4 border-t border-border/60 dark:border-white/[0.08] flex flex-col gap-2">
              {techCategories[2].technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-surface-muted/60 dark:bg-white/[0.04] border border-border/40 dark:border-white/[0.05] hover:border-emerald-400/40 hover:bg-surface-muted dark:hover:bg-white/[0.08] transition-all group/item"
                  >
                    <Icon className={`w-4 h-4 shrink-0 transition-transform group-hover/item:scale-110 ${tech.darkTone ? 'dark:brightness-0 dark:invert' : ''}`} style={{ color: tech.color }} />
                    <span className="text-xs font-semibold text-txt dark:text-slate-200">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </article>

          {/* ============================================================== */}
          {/* TILE 3: Database (Span 1 col) - "Bank-grade security" */}
          {/* ============================================================== */}
          <article
            key={`bento-3-${cycleKey}`}
            className="bento-snap-3 relative z-10 lg:col-span-1 rounded-2xl sm:rounded-3xl border border-border bg-surface/90 dark:border-white/[0.08] dark:bg-[#0D1524]/85 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_10px_35px_rgba(168,85,247,0.12)] flex flex-col justify-between overflow-hidden group will-change-transform"
            style={{ animationDelay: '360ms' }}
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-semibold text-txt dark:text-white">
                      {technology.categories.database}
                    </h3>
                    <span className="text-[10px] font-mono text-txt-muted">ACID / Cloud DB</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/25">
                  Secure
                </span>
              </div>

              {/* Shield with Drawing Checkmark & Pulse Rings (Gambar 2 equivalent) */}
              <div className="p-3 rounded-xl border border-border/80 dark:border-white/10 bg-surface-muted/50 dark:bg-white/[0.03] flex items-center justify-center relative min-h-[76px] overflow-hidden">
                {/* Concentric Pulse Rings */}
                <div className="absolute w-12 h-12 rounded-full border border-purple-400/30 animate-ping opacity-60" />
                <div className="absolute w-16 h-16 rounded-full border border-purple-400/15 animate-pulse" />

                {/* Shield SVG with Animated Checkmark */}
                <div className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full bg-purple-500/15 border border-purple-400/40 text-purple-400">
                  <svg className="w-5 h-5 overflow-visible" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="#A855F7"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="bento-check-draw"
                      style={{ animationDelay: '900ms' }}
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Database Tech Pills */}
            <div className="mt-5 pt-4 border-t border-border/60 dark:border-white/[0.08] flex flex-wrap gap-1.5">
              {techCategories[3].technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-muted/60 dark:bg-white/[0.04] border border-border/40 dark:border-white/[0.05] hover:border-purple-400/40 transition-all text-xs"
                  >
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${tech.darkTone ? 'dark:brightness-0 dark:invert' : ''}`} style={{ color: tech.color }} />
                    <span className="text-[11px] font-semibold text-txt dark:text-slate-200">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </article>

          {/* ============================================================== */}
          {/* TILE 4: Deployment (Span 1 col) - "200+ integrations" */}
          {/* ============================================================== */}
          <article
            key={`bento-4-${cycleKey}`}
            className="bento-snap-4 relative z-10 lg:col-span-1 rounded-2xl sm:rounded-3xl border border-border bg-surface/90 dark:border-white/[0.08] dark:bg-[#0D1524]/85 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-amber-400/50 hover:shadow-[0_10px_35px_rgba(245,158,11,0.12)] flex flex-col justify-between overflow-hidden group will-change-transform"
            style={{ animationDelay: '480ms' }}
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 shrink-0">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-semibold text-txt dark:text-white">
                      {technology.categories.deployment}
                    </h3>
                    <span className="text-[10px] font-mono text-txt-muted">Global CDN Edge</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/25">
                  Edge
                </span>
              </div>

              {/* Orbiting concentric rings (Gambar 2 equivalent) */}
              <div className="p-2 rounded-xl border border-border/80 dark:border-white/10 bg-surface-muted/50 dark:bg-white/[0.03] flex items-center justify-center relative min-h-[90px] overflow-hidden">
                {/* Central Deployment Hub */}
                <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center z-10 shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                  <Cloud className="w-3.5 h-3.5 text-amber-400" />
                </div>

                {/* Inner Orbit (CCW) */}
                <div className="bento-orbit-ccw absolute w-[64px] h-[64px] rounded-full border border-dashed border-amber-400/30 flex items-center justify-center">
                  <div className="bento-counter-ccw absolute -top-1.5 w-3 h-3 rounded-full bg-cyan-400 shadow-sm" />
                  <div className="bento-counter-ccw absolute -bottom-1.5 w-3 h-3 rounded-full bg-orange-400 shadow-sm" />
                </div>

                {/* Outer Orbit (CW) */}
                <div className="bento-orbit-cw absolute w-[100px] h-[100px] rounded-full border border-white/15 dark:border-white/10 flex items-center justify-center">
                  <div className="bento-counter-cw absolute -left-1.5 w-3 h-3 rounded-full bg-emerald-400 shadow-sm" />
                  <div className="bento-counter-cw absolute -right-1.5 w-3 h-3 rounded-full bg-blue-500 shadow-sm" />
                  <div className="bento-counter-cw absolute top-1.5 right-2 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-sm" />
                </div>
              </div>
            </div>

            {/* Deployment Tech Pills */}
            <div className="mt-5 pt-4 border-t border-border/60 dark:border-white/[0.08] flex flex-wrap gap-1.5">
              {techCategories[4].technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-muted/60 dark:bg-white/[0.04] border border-border/40 dark:border-white/[0.05] hover:border-amber-400/40 transition-all text-xs"
                  >
                    <Icon className={`w-3.5 h-3.5 shrink-0 ${tech.darkTone ? 'dark:brightness-0 dark:invert' : ''}`} style={{ color: tech.color }} />
                    <span className="text-[11px] font-semibold text-txt dark:text-slate-200">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </article>

          {/* ============================================================== */}
          {/* TILE 5: Tools & Workflow (Spans 3 cols on lg) - "Built for teams" */}
          {/* ============================================================== */}
          <article
            key={`bento-5-${cycleKey}`}
            className="bento-snap-5 relative z-10 lg:col-span-3 rounded-2xl sm:rounded-3xl border border-border bg-surface/90 dark:border-white/[0.08] dark:bg-[#0D1524]/85 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-brand-blue/50 hover:shadow-[0_10px_35px_rgba(0,180,255,0.12)] flex flex-col justify-between overflow-hidden group will-change-transform"
            style={{ animationDelay: '600ms' }}
          >
            {/* Top Bar with Sliding Avatars Stack into Place */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/25 flex items-center justify-center text-brand-blue shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading text-sm sm:text-base font-semibold text-txt dark:text-white">
                    {technology.categories.tools}
                  </h3>
                  <span className="text-[10px] font-mono text-txt-muted">AI-Assisted & Developer Workflow</span>
                </div>
              </div>

              {/* Sliding Avatars Stack (Gambar 2 equivalent: 4 avatars slide in then +12 chip) */}
              <div className="flex items-center -space-x-2 overflow-visible">
                {techCategories[5].technologies.slice(0, 5).map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="bento-avatar-slide relative z-10 w-8 h-8 rounded-full border-2 border-surface dark:border-[#0D1524] bg-surface-muted dark:bg-[#1A263D] flex items-center justify-center shadow-sm"
                      style={{ animationDelay: `${700 + idx * 110}ms` }}
                      title={tech.name}
                    >
                      <Icon className={`w-4 h-4 ${tech.darkTone ? 'dark:brightness-0 dark:invert' : ''}`} style={{ color: tech.color }} />
                    </div>
                  );
                })}
                {/* Pop-in +7 Active Tools Chip */}
                <div
                  className="bento-avatar-slide relative z-20 px-2.5 py-1 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-black font-bold text-[10px] tracking-wide shadow-sm"
                  style={{ animationDelay: `${700 + 5 * 110}ms` }}
                >
                  +7 Tools
                </div>
              </div>
            </div>

            {/* All 7 Tools Row */}
            <div className="pt-4 border-t border-border/60 dark:border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {techCategories[5].technologies.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-muted/60 dark:bg-white/[0.04] border border-border/40 dark:border-white/[0.05] hover:border-brand-blue/40 hover:bg-surface-muted dark:hover:bg-white/[0.08] transition-all group/item truncate"
                    title={tech.name}
                  >
                    <Icon className={`w-4 h-4 shrink-0 transition-transform group-hover/item:scale-110 ${tech.darkTone ? 'dark:brightness-0 dark:invert' : ''}`} style={{ color: tech.color }} />
                    <span className="text-xs font-semibold text-txt dark:text-slate-200 truncate">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}

