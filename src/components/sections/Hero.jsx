import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, Smartphone, Zap, Shield, Layout, TrendingUp, CheckCircle2, Code2, Monitor, Search } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { WhatsAppIcon3D } from '../ui/WhatsAppIcon3D';
import { scrollToSection } from '../../lib/utils';
import { useReveal } from '../../hooks/useReveal';
import { siteConfig } from '../../config/siteConfig';

export function Hero({ locale, t }) {
  const revealRef = useReveal();
  const whatsAppUrl = buildWhatsAppUrl({ locale });

  const bulletIcons = [
    <Smartphone key="1" className="w-4 h-4 text-cyan-400" />,
    <WhatsAppIcon3D key="2" className="w-4 h-4" size={16} />,
    <Layout key="3" className="w-4 h-4 text-blue-400" />,
    <Zap key="4" className="w-4 h-4 text-amber-400" />,
  ];

  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-transparent">
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
              {/* Top Badge (Kicker from bionoraDevUI.jpeg) */}
              <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 dark:bg-surface/80 border border-white/20 dark:border-brand-blue/30 backdrop-blur-md shadow-sm">
                <Sparkles className="w-4 h-4 text-brand-cyan animate-pulse" />
                <span className="text-xs font-bold tracking-wider text-white dark:text-txt">
                  {t.hero.badge}
                </span>
              </div>

              {/* Single H1 for SEO with Brand Accent - headlineLine1 stays on 1 line */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-heading font-semibold tracking-tight text-white dark:text-txt leading-[1.15]">
                <span className="block whitespace-nowrap">{t.hero.headlineLine1}</span>
                <span className="brand-gradient-text block mt-1 sm:mt-2">{t.hero.headlineLine2}</span>
              </h1>

              {/* Subheadline - constrained max-w to prevent overlapping text on laptop */}
              <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-200 dark:text-txt-muted leading-relaxed max-w-lg lg:max-w-[460px] xl:max-w-[480px]">
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

              {/* Checklist Selling Points */}
              {t.hero.checklist && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md sm:max-w-lg">
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

              {/* Primary & Secondary CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Button
                  href={whatsAppUrl}
                  variant="gradient"
                  size="lg"
                  className="gap-3 group font-bold"
                >
                  <WhatsAppIcon3D className="w-5 h-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" size={20} />
                  <span>{t.hero.ctaPrimary}</span>
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  className="gap-2 group font-semibold text-white dark:text-txt border-white/20 dark:border-border hover:bg-white/10"
                  onClick={() => scrollToSection('portfolio')}
                >
                  <span>{t.hero.ctaSecondary}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Right Column Spacer: Completely clear space for background 3D workstation/laptop */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-6 min-h-[300px] pointer-events-none" />
          </div>

          {/* Bottom Row: 4 Capability Bullets (Left) & Compact Transparent Container (Right) */}
          <div className="mt-12 pt-8 border-t border-white/20 dark:border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: 4 Capability Bullets */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
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

            {/* Right Column: Compact Transparent Container */}
            <div className="lg:col-span-5 flex justify-start lg:justify-end w-full">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-sm rounded-2xl bg-transparent border border-white/20 dark:border-white/20 p-2.5 sm:p-3 backdrop-blur-[2px] shadow-sm flex flex-col gap-2">
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
