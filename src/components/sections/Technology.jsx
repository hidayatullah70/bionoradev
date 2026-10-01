import React from 'react';
import { Code, Terminal, Palette, Zap, Cloud, GitBranch } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { useReveal } from '../../hooks/useReveal';

export function Technology({ t }) {
  const revealRef = useReveal();

  const techStack = [
    { name: "React", role: "UI Library", icon: <Code className="w-5 h-5 text-cyan-400" /> },
    { name: "Vite", role: "Next-Gen Bundler", icon: <Zap className="w-5 h-5 text-amber-400" /> },
    { name: "Tailwind CSS", role: "Utility Styling", icon: <Palette className="w-5 h-5 text-sky-400" /> },
    { name: "JavaScript", role: "Core Language", icon: <Terminal className="w-5 h-5 text-yellow-400" /> },
    { name: "Cloudflare", role: "Global CDN & Edge", icon: <Cloud className="w-5 h-5 text-orange-400" /> },
    { name: "GitHub", role: "Version Control", icon: <GitBranch className="w-5 h-5 text-slate-300" /> },
  ];

  return (
    <section className="py-20 sm:py-28 relative">
      <Container>
        <SectionHeading
          badge={t.technology.badge}
          title={t.technology.title}
          subtitle={t.technology.subtitle}
        />

        <div ref={revealRef} className="max-w-4xl mx-auto">
          {/* Tech Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-surface border border-border/80 hover:border-accent/40 flex flex-col items-center text-center gap-2.5 transition-all duration-200 group hover:-translate-y-1 shadow-sm"
              >
                <div className="p-2.5 rounded-xl bg-surface-muted border border-border group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div>
                  <span className="text-sm font-bold text-txt block">
                    {tech.name}
                  </span>
                  <span className="text-[10px] text-txt-muted">
                    {tech.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Supporting Copy Box */}
          <div className="mt-8 p-5 rounded-2xl bg-surface-muted/60 border border-border text-center text-xs sm:text-sm text-txt-muted max-w-2xl mx-auto">
            {t.technology.copy}
          </div>
        </div>
      </Container>
    </section>
  );
}
