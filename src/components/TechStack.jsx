import React from 'react';
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaReact, FaServer } from 'react-icons/fa';
import {
  SiExpress,
  SiGithubpages,
  SiMysql,
  SiNetlify,
  SiRailway,
  SiTailwindcss,
  SiVercel,
  SiVite,
} from 'react-icons/si';
import { Container } from './ui/Container';
import { useReveal } from '../hooks/useReveal';

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
    ],
  },
  {
    id: 'deployment',
    technologies: [
      { name: 'Vercel', icon: SiVercel, color: '#111827', darkTone: true },
      { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
      { name: 'GitHub Pages', icon: SiGithubpages, color: '#111827', darkTone: true },
    ],
  },
];

export function TechStack({ t }) {
  const revealRef = useReveal();
  const technology = t.technology;

  return (
    <section
      id="technology"
      className="relative overflow-hidden border-y border-border bg-bg py-20 text-txt sm:py-28 dark:border-white/[0.06] dark:bg-[#080808] dark:text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,rgba(0,180,255,0.10),transparent_68%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(0,180,255,0.16),transparent_68%)]"
      />

      <Container className="relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface-muted px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-txt-muted dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
            <span className="text-brand-cyan" aria-hidden="true">●</span>
            <span>{technology.badge}</span>
          </div>
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-txt sm:text-3xl lg:text-4xl dark:text-white">
            {technology.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-txt-muted sm:text-lg">
            {technology.subtitle}
          </p>
        </div>

        <div ref={revealRef} className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          {techCategories.map((category) => (
            <article
              key={category.id}
              className="rounded-[20px] border border-border bg-surface p-5 transition-colors duration-200 hover:border-accent/40 dark:border-white/[0.08] dark:bg-[#121212] dark:hover:border-white/[0.16]"
            >
              <h3 className="font-heading text-sm font-semibold tracking-wide text-txt dark:text-white">
                {technology.categories[category.id]}
              </h3>

              <ul className="mt-5 space-y-2.5">
                {category.technologies.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <li key={tech.name}>
                      <div className="group/item flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm text-txt-muted transition-colors duration-200 hover:bg-surface-muted hover:text-txt dark:hover:bg-white/[0.06] dark:hover:text-white">
                        <Icon
                          aria-hidden="true"
                          className={`h-5 w-5 shrink-0 transition-transform duration-200 group-hover/item:scale-110 ${tech.darkTone ? 'dark:brightness-0 dark:invert' : ''}`}
                          style={{ color: tech.color }}
                        />
                        <span>{tech.name}</span>
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
