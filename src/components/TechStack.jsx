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
import { Container } from './ui/Container';
import { useReveal } from '../hooks/useReveal';

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
  const technology = t.technology;

  return (
    <section
      id="technology"
      className="relative overflow-hidden border-y border-border bg-bg py-12 sm:py-20 lg:py-28 text-txt dark:border-white/[0.06] dark:bg-[#080808] dark:text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,rgba(0,180,255,0.10),transparent_68%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(0,180,255,0.16),transparent_68%)]"
      />

      <Container className="relative z-10">
        <div className="mx-auto mb-8 sm:mb-12 lg:mb-16 max-w-3xl text-center">
          <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-blue-900/20 dark:border-white/10 bg-blue-900/[0.05] dark:bg-white/[0.04] px-3 py-1 sm:px-3.5 sm:py-1.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] text-blue-900 dark:text-slate-300">
            <span className="text-blue-900 dark:text-brand-cyan" aria-hidden="true">●</span>
            <span>{technology.badge}</span>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl lg:text-4xl font-semibold tracking-tight text-txt dark:text-white">
            {technology.title}
          </h2>
          <p className="mx-auto mt-2.5 sm:mt-4 max-w-2xl text-xs sm:text-base leading-relaxed text-txt-muted">
            {technology.subtitle}
          </p>
        </div>

        <div ref={revealRef} className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-6">
          {techCategories.map((category) => (
            <article
              key={category.id}
              className="rounded-xl sm:rounded-[20px] border border-border bg-surface p-3.5 sm:p-5 transition-colors duration-200 hover:border-accent/40 dark:border-white/[0.08] dark:bg-[#121212] dark:hover:border-white/[0.16]"
            >
              <h3 className="font-heading text-xs sm:text-sm font-semibold tracking-wide text-txt dark:text-white">
                {technology.categories[category.id]}
              </h3>

              <ul className="mt-3 sm:mt-5 space-y-1.5 sm:space-y-2.5">
                {category.technologies.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <li key={tech.name}>
                      <div className="group/item flex items-center gap-2 sm:gap-3 rounded-lg sm:rounded-xl border border-transparent px-2 py-1.5 sm:px-3 sm:py-2.5 text-xs sm:text-sm text-txt-muted transition-colors duration-200 hover:bg-surface-muted hover:text-txt dark:hover:bg-white/[0.06] dark:hover:text-white">
                        <Icon
                          aria-hidden="true"
                          className={`h-4 w-4 sm:h-5 sm:w-5 shrink-0 transition-transform duration-200 group-hover/item:scale-110 ${tech.darkTone ? 'dark:brightness-0 dark:invert' : ''}`}
                          style={{ color: tech.color }}
                        />
                        <span className="truncate" title={tech.name}>
                          {tech.name}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
