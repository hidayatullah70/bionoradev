import React, { useState, useEffect } from 'react';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { cn } from '../../lib/utils';

export function FloatingWhatsApp({ locale, t }) {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const oneThirdScreen = window.innerHeight / 3;

      // WhatsApp CTA muncul saat mulai menggulir (melewati 80px)
      setShowWhatsApp(scrollY > 80);

      // Tombol CTA Back To Top muncul setelah layar di-scroll ke bawah 1/3 layar
      setShowBackToTop(scrollY > oneThirdScreen);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const whatsAppUrl = buildWhatsAppUrl({ locale });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside
      aria-label={locale === 'id' ? 'Aksi Cepat Mengambang' : 'Floating Quick Actions'}
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none pointer-events-none"
    >
      {/* 1. Tombol CTA WhatsApp */}
      <div
        className={cn(
          "transition-all duration-300 ease-out transform",
          showWhatsApp
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-90 pointer-events-none h-0 overflow-hidden"
        )}
      >
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 sm:gap-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50 rounded-full"
          aria-label={locale === 'id' ? 'Chat Konsultasi via WhatsApp' : 'Chat Consultation via WhatsApp'}
        >
          {/* Hover Pill: Border Chat Konsultasi */}
          <div
            className="flex items-center px-4 py-1.5 sm:py-2 rounded-full border-2 border-[#25D366] bg-white dark:bg-brand-ink/95 shadow-md shadow-black/5 dark:shadow-black/40 text-slate-800 dark:text-white text-xs sm:text-[13px] font-semibold whitespace-nowrap opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto"
          >
            <span>{locale === 'id' ? 'Chat Konsultasi' : 'Chat Consultation'}</span>
          </div>

          {/* 3D Button Container with Radar Waves */}
          <div className="relative flex items-center justify-center shrink-0">
            {/* Radar Wave Pulse Rings (Warna Hijau Brand WhatsApp) */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10"
            >
              {/* Rotating Radar Sweep Cone in WhatsApp Green */}
              <div
                className="absolute w-20 h-20 sm:w-22 sm:h-22 rounded-full animate-radar-sweep opacity-20 dark:opacity-30 pointer-events-none"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(37, 211, 102, 0.4) 360deg)',
                }}
              />

              {/* Concentric radar waves */}
              <span className="absolute w-full h-full rounded-full border border-[#25D366]/60 bg-[#25D366]/15 animate-radar-1" />
              <span className="absolute w-full h-full rounded-full border border-[#22c55e]/50 bg-[#22c55e]/10 animate-radar-2" />
              <span className="absolute w-full h-full rounded-full border border-[#10b981]/40 bg-[#10b981]/5 animate-radar-3" />
            </div>

            {/* 3D WhatsApp Green Sphere Button */}
            <div
              className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-[0_4px_16px_rgba(37,211,102,0.45)] dark:shadow-[0_0_24px_rgba(37,211,102,0.6)] transition-all duration-200 group-hover:scale-105 active:scale-95 overflow-hidden"
              style={{
                background:
                  'radial-gradient(circle at 35% 30%, #4ade80 0%, #22c55e 38%, #16a34a 65%, #065f46 100%)',
              }}
            >
              {/* 3D Specular Glass Gloss Curved Reflection */}
              <span
                aria-hidden="true"
                className="absolute inset-x-1.5 top-0.5 h-3.5 sm:h-4 rounded-full pointer-events-none opacity-85"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.3) 60%, transparent 100%)',
                }}
              />

              {/* Ambient Bottom Rim Reflection */}
              <span
                aria-hidden="true"
                className="absolute inset-x-2 bottom-0.5 h-2 rounded-full pointer-events-none opacity-40"
                style={{
                  background:
                    'radial-gradient(ellipse at bottom, rgba(255, 255, 255, 0.75) 0%, transparent 80%)',
                }}
              />

              {/* 3D White Phone Handset Icon */}
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-white text-white drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.35)] relative z-10 transition-transform duration-200 group-hover:rotate-[-6deg]"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.24 1.02l-2.21 2.19z" />
              </svg>
            </div>
          </div>
        </a>
      </div>

      {/* 2. Tombol Back To Top 3 Dimensi (Warna Brand-Blue, Posisi di bawah CTA WhatsApp) */}
      <div
        className={cn(
          "transition-all duration-300 ease-out transform",
          showBackToTop
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-75 pointer-events-none h-0 overflow-hidden"
        )}
      >
        <button
          onClick={scrollToTop}
          tabIndex={showBackToTop ? 0 : -1}
          aria-hidden={!showBackToTop}
          className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-brand-blue shadow-[0_4px_16px_rgba(0,128,240,0.45)] dark:shadow-[0_0_24px_rgba(0,128,240,0.65)] transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/50 cursor-pointer overflow-hidden"
          style={{
            background:
              'radial-gradient(circle at 35% 30%, #67e8f9 0%, #0080F0 38%, #0050c0 68%, #001f7a 88%, #001040 100%)',
          }}
          aria-label={locale === 'id' ? 'Kembali ke atas halaman' : 'Back to top'}
          title={locale === 'id' ? 'Kembali ke atas' : 'Back to top'}
        >
          {/* 3D Specular Glass Gloss Curved Reflection */}
          <span
            aria-hidden="true"
            className="absolute inset-x-1.5 top-0.5 h-3.5 sm:h-4 rounded-full pointer-events-none opacity-85"
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.25) 55%, transparent 100%)',
            }}
          />

          {/* Ambient Bottom Rim Reflection */}
          <span
            aria-hidden="true"
            className="absolute inset-x-2 bottom-0.5 h-2 rounded-full pointer-events-none opacity-40"
            style={{
              background:
                'radial-gradient(ellipse at bottom, rgba(255, 255, 255, 0.75) 0%, transparent 80%)',
            }}
          />

          {/* 3D Upward Arrow Icon in brand-white */}
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-brand-white drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.45)] relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      </div>
    </aside>
  );
}

export default FloatingWhatsApp;
