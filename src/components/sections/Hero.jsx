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
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Ambient background glows matching UI-GUIDELINE */}
      <div className="glow-ambient-cyan w-[500px] h-[500px] -top-24 -left-24 sm:-left-12" />
      <div className="glow-ambient-blue w-[600px] h-[600px] top-1/4 -right-36" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <Container className="relative z-10">
        <div ref={revealRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy + CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Badge (Kicker from bionoraDevUI.jpeg) */}
            <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/80 border border-brand-blue/30 backdrop-blur-md shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-cyan animate-pulse" />
              <span className="text-xs font-brand font-bold tracking-wider text-txt">
                {t.hero.badge}
              </span>
            </div>

            {/* Single H1 for SEO with Brand Accent (bionoraDevUI.jpeg) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-brand font-extrabold tracking-tight text-txt leading-[1.15]">
              {locale === 'id' ? (
                <>
                  Membangun Pengalaman <br />
                  <span className="brand-gradient-text">Digital yang Berdampak</span>
                </>
              ) : (
                <>
                  We Build <br />
                  <span className="brand-gradient-text">Digital Experiences</span>
                </>
              )}
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-txt-muted leading-relaxed max-w-2xl">
              {t.hero.subheadline}
            </p>

            {/* Tagline Bullets */}
            <div className="mt-4 inline-block px-3 py-1 rounded-lg bg-surface-muted/60 border border-border text-xs font-semibold text-accent">
              {siteConfig.brand.taglineBullets}
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button
                href={whatsAppUrl}
                variant="gradient"
                size="lg"
                className="gap-3 group"
              >
                <WhatsAppIcon3D className="w-5 h-5 group-hover:scale-110 transition-transform" size={20} />
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('portfolio')}
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>

            {/* 4 Capability Bullets */}
            <div className="mt-12 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {t.hero.capabilityBullets.map((bullet, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    {bulletIcons[idx] || <CheckCircle2 className="w-4 h-4 text-accent" />}
                    <span className="text-xs font-bold text-txt">{bullet.label}</span>
                  </div>
                  <span className="text-[11px] text-txt-muted">{bullet.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-tech UI / Dashboard Mockup (CSS-based, no fake stock) */}
          <div className="lg:col-span-5 relative">
            {/* Background Decorative Rings */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl bg-surface border border-border/80 shadow-2xl overflow-hidden p-1">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-surface-muted border-b border-border rounded-t-xl text-xs text-txt-muted">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="font-mono text-[11px] bg-bg/80 px-4 py-0.5 rounded-md border border-border text-txt-muted truncate max-w-[200px]">
                    https://bionoradev.com/app
                  </div>
                  <div className="w-4" />
                </div>

                {/* Mockup Dashboard Content */}
                <div className="p-4 sm:p-5 bg-bg/95 flex flex-col gap-4">
                  {/* Web Development Showcase Card directly from bionoraDevUI.jpeg */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-surface/90 border border-brand-blue/30 shadow-lg flex flex-col gap-3 group">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-brand-blue shrink-0 group-hover:scale-105 transition-transform">
                          <Code2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-brand font-bold text-sm sm:text-base text-txt group-hover:text-brand-blue transition-colors">
                            Web Development
                          </h3>
                          <p className="text-xs text-txt-muted mt-0.5 leading-relaxed">
                            {locale === 'id'
                              ? 'Website modern, cepat, aman dan responsif untuk bisnis Anda.'
                              : 'Modern, fast, secure, and responsive websites for your business.'}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border/60">
                      <button
                        onClick={() => scrollToSection('services')}
                        className="inline-flex items-center gap-1.5 text-xs font-brand font-bold text-brand-blue hover:text-brand-cyan transition-colors"
                      >
                        <span>{locale === 'id' ? 'Selengkapnya' : 'Learn More'}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      {/* 3 Pill Badges from bionoraDevUI.jpeg: Responsive, Performance, SEO Friendly */}
                      <div className="flex items-center gap-1.5 text-[10px] text-txt-muted font-medium">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-muted border border-border">
                          <Monitor className="w-3 h-3 text-brand-cyan" />
                          <span>Responsive</span>
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-muted border border-border">
                          <Zap className="w-3 h-3 text-amber-400" />
                          <span>Performance</span>
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-muted border border-border">
                          <Search className="w-3 h-3 text-emerald-400" />
                          <span>SEO Friendly</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Top KPI row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-surface border border-border flex flex-col justify-between">
                      <span className="text-xs text-txt-muted">{t.hero.mockup.activeUsers}</span>
                      <div className="mt-2 flex items-baseline justify-between">
                        <span className="text-xl font-brand font-bold text-txt">14,280</span>
                        <span className="text-xs font-semibold text-emerald-400 flex items-center gap-0.5">
                          <TrendingUp className="w-3 h-3" />
                          {t.hero.mockup.weeklyGrowth}
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-surface border border-border flex flex-col justify-between">
                      <span className="text-xs text-txt-muted">{t.hero.mockup.conversionRate}</span>
                      <div className="mt-2 flex items-baseline justify-between">
                        <span className="text-xl font-brand font-bold text-brand-cyan">{t.hero.mockup.conversionVal}</span>
                        <Badge variant="cyan" className="text-[10px] px-1.5 py-0 font-brand">High</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Mini Integration Row */}
                  <div className="p-3 rounded-xl bg-surface border border-border flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-brand-cyan/10">
                        <WhatsAppIcon3D className="w-5 h-5" size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-brand font-bold text-txt">WhatsApp Lead Sync</span>
                        <span className="text-[10px] text-txt-muted">{t.hero.mockup.fastResponse}</span>
                      </div>
                    </div>
                    <Badge variant="cyan" className="text-[10px] font-brand">Connected</Badge>
                  </div>
                </div>
              </div>

              {/* Floating UI Accent Card (Calm and purposeful, no bouncing) */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 p-3.5 rounded-xl bg-surface/90 backdrop-blur-xl border border-border shadow-xl flex items-center gap-3 hidden sm:flex">
                <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-brand text-xs font-bold text-txt tracking-wide">
                    Bionora<span className="text-brand-blue">Dev</span>
                  </div>
                  <div className="text-[10px] text-txt-muted">Fast & Modern Static Stack</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
