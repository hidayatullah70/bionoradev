import React, { useState } from 'react';
import { Layers, ExternalLink, Sparkles, Laptop, Eye, X, MessageCircle, CheckCircle, Globe } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolio';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { WhatsAppIcon3D } from '../ui/WhatsAppIcon3D';
import { useReveal } from '../../hooks/useReveal';

export function Portfolio({ locale, t }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const revealRef = useReveal();

  const filters = [
    { id: 'all', label: t.portfolio.filterLabels.all },
    { id: 'landing-page', label: t.portfolio.filterLabels['landing-page'] },
    { id: 'website', label: t.portfolio.filterLabels.website },
    { id: 'web-app', label: t.portfolio.filterLabels['web-app'] },
    { id: 'dashboard', label: t.portfolio.filterLabels.dashboard },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? portfolioData
    : portfolioData.filter(
        (item) => item.category === selectedFilter || item.categories?.includes(selectedFilter)
      );

  return (
    <section id="portfolio" className="py-20 sm:py-28 relative scroll-mt-16 overflow-hidden">
      <Container className="relative z-10">
        <SectionHeading
          badge={t.portfolio.badge}
          title={t.portfolio.title}
          subtitle={t.portfolio.subtitle}
        />

        {/* Filter Buttons */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filters.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 dark:focus-visible:ring-accent ${
                selectedFilter === tab.id
                  ? 'bg-blue-900 text-white dark:bg-accent dark:text-brand-dark-navy shadow-md shadow-blue-900/20 dark:shadow-accent/20 border border-blue-900 dark:border-accent font-bold'
                  : 'bg-surface-muted text-txt-muted hover:text-txt hover:bg-surface border border-border hover:border-blue-900/40 dark:hover:border-accent/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div ref={revealRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isConcept = project.status === 'concept';
            const isDemo = project.status === 'demo';

            return (
              <Card
                key={project.id}
                className="flex flex-col justify-between overflow-hidden group border-border hover:border-accent/50 transition-all duration-300"
              >
                <div>
                  {/* Mockup Preview Surface with Full Client Screenshot Background */}
                  <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] rounded-xl overflow-hidden mb-5 border border-border/80 group-hover:border-accent/50 transition-all duration-300 bg-surface-muted shadow-sm">
                    {/* Actual Client Screenshot */}
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.name} Screenshot`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`} />
                    )}

                    {/* Gradient Overlays for High Text Contrast in Both Light & Dark Mode */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/55 pointer-events-none transition-opacity duration-300" />

                    {/* Top Row: Category & Status Badge */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/65 backdrop-blur-md border border-white/20 text-white shadow-sm">
                        {t.portfolio.filterLabels[project.category] || project.category}
                      </span>

                      {/* Status Badge */}
                      {isConcept ? (
                        <Badge variant="cyan" className="shadow-sm">
                          {t.portfolio.labels.conceptBadge}
                        </Badge>
                      ) : isDemo ? (
                        <Badge variant="blue" className="shadow-sm">
                          {t.portfolio.labels.demoBadge}
                        </Badge>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/25 border border-emerald-400/40 text-emerald-300 backdrop-blur-md shadow-sm">
                          <CheckCircle className="w-3 h-3 text-emerald-400" />
                          <span>{t.portfolio.labels.clientBadge}</span>
                        </span>
                      )}
                    </div>

                    {/* Bottom Bar inside Screenshot: Live Indicator & Highlight */}
                    <div className="absolute bottom-3 inset-x-3 z-10 flex items-end justify-between gap-2">
                      <div className="flex flex-col min-w-0 pr-2">
                        <span className="text-xs font-semibold text-white drop-shadow-md truncate">
                          {project.stats[locale] || project.stats.id}
                        </span>
                        {project.domain && (
                          <span className="text-[11px] text-slate-300 drop-shadow flex items-center gap-1.5 mt-0.5">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                            <span className="truncate">{project.domain}</span>
                          </span>
                        )}
                      </div>

                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white text-[11px] font-medium inline-flex items-center gap-1 transition-all group-hover:scale-105 shrink-0 shadow-sm"
                          onClick={(e) => e.stopPropagation()}
                          title={t.portfolio.labels.visitSite}
                        >
                          <span className="hidden xs:inline">{t.portfolio.labels.visitSite}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Meta */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-between mb-1 gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-heading font-semibold text-txt group-hover:text-accent transition-colors">
                        {project.name}
                      </h3>
                      <span className="text-xs text-accent font-medium">
                        {project.industry[locale] || project.industry.id}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-txt-muted leading-relaxed line-clamp-3 mt-2">
                      {project.description[locale] || project.description.id}
                    </p>

                    {/* Technologies pills */}
                    <div className="flex items-center gap-1.5 flex-wrap mt-3">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-md bg-surface-muted border border-border text-txt-muted font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-border flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5 text-xs text-txt-muted">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="text-[11px] text-txt-muted truncate max-w-[120px] sm:max-w-[150px]">
                      {project.domain || (isConcept ? "Konsep Desain UI" : "Live Deployment")}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setActiveModalProject(project)}
                      className="gap-1.5 text-xs font-semibold text-txt-muted hover:text-txt"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">{t.portfolio.labels.viewProject}</span>
                    </Button>

                    {project.url && (
                      <Button
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        size="sm"
                        className="gap-1.5 text-xs font-semibold text-accent hover:border-accent hover:bg-accent/10"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{t.portfolio.labels.visitSite}</span>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-txt-muted">
            {t.portfolio.labels.noProjects}
          </div>
        )}
      </Container>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-surface border border-border p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-surface-muted text-txt-muted hover:text-txt transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="accent">
                {activeModalProject.status === 'client'
                  ? t.portfolio.labels.clientBadge
                  : activeModalProject.status === 'demo'
                  ? t.portfolio.labels.demoBadge
                  : t.portfolio.labels.conceptBadge}
              </Badge>
              <span className="text-xs text-txt-muted uppercase">
                {t.portfolio.filterLabels[activeModalProject.category] || activeModalProject.category}
              </span>
            </div>

            <h3 className="text-2xl font-heading font-semibold text-txt mb-1">
              {activeModalProject.name}
            </h3>
            <p className="text-xs text-accent font-medium mb-4">
              {activeModalProject.industry[locale] || activeModalProject.industry.id}
            </p>

            {/* Modal Screenshot Preview */}
            {activeModalProject.image && (
              <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] rounded-xl overflow-hidden border border-border mb-4 bg-surface-muted shadow-sm">
                <img
                  src={activeModalProject.image}
                  alt={`${activeModalProject.name} Full Preview`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}

            <div className="p-4 rounded-xl bg-surface-muted border border-border text-sm text-txt leading-relaxed mb-4">
              {activeModalProject.description[locale] || activeModalProject.description.id}
            </div>

            {/* Live Link Callout */}
            {activeModalProject.url && (
              <div className="mb-5 p-3 rounded-xl bg-surface-muted/60 border border-border flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs truncate">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-txt-muted truncate">{activeModalProject.url}</span>
                </div>
                <Button
                  href={activeModalProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  className="gap-1 shrink-0 text-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{t.portfolio.labels.visitSite}</span>
                </Button>
              </div>
            )}

            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-txt-muted block mb-2">
                {t.portfolio.labels.tech}
              </span>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-bg border border-border text-txt"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal WhatsApp Action */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <Button
                href={buildWhatsAppUrl({
                  locale,
                  message: `Halo BionoraDev, saya tertarik dengan proyek ${activeModalProject.name} (${activeModalProject.url || ''}) dan ingin berdiskusi untuk bisnis saya.`,
                })}
                variant="gradient"
                size="md"
                className="w-full justify-center gap-2"
              >
                <WhatsAppIcon3D className="w-4 h-4 group-hover:scale-110 transition-transform" size={16} />
                <span>Diskusikan Proyek Serupa</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
