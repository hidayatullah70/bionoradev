import React, { useState, useEffect, useRef } from 'react';
import { SiWhatsapp, SiTelegram, SiDiscord } from 'react-icons/si';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { siteConfig } from '../../config/siteConfig';
import { cn } from '../../lib/utils';

export function FloatingWhatsApp({ locale = 'id', t }) {
  const [showWidget, setShowWidget] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);
  const closeTimeoutRef = useRef(null);
  const toastTimeoutRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const oneThirdScreen = window.innerHeight / 3;

      // Widget CTA muncul setelah scroll sedikit (> 40px)
      setShowWidget(scrollY > 40);

      // Tombol Back To Top muncul setelah 1/3 layar di-scroll ke bawah
      setShowBackToTop(scrollY > oneThirdScreen);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  // Handle klik di luar area widget untuk menutup menu di perangkat mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Hover handlers dengan delay toleransi agar kursor tidak sengaja menutup menu
  const handleMouseEnter = () => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      closeTimeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 240);
    }
  };

  const handleTriggerClick = (e) => {
    // Pada layar sentuh atau klik langsung, toggle state buka/tutup
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  // Teks konsultasi standar: "Halo BionoraDev, saya ingin berdiskusi mengenai kebutuhan website untuk bisnis saya."
  const consultationMessage =
    siteConfig.defaults?.whatsappMessage?.[locale] ||
    siteConfig.defaults?.whatsappMessage?.id ||
    'Halo BionoraDev, saya ingin berdiskusi mengenai kebutuhan website untuk bisnis saya.';
  const encodedMessage = encodeURIComponent(consultationMessage);

  // URL WhatsApp terpusat dengan teks konsultasi otomatis
  const whatsAppUrl = buildWhatsAppUrl({ locale, message: consultationMessage });

  // URL Telegram dengan nomor +6281384224733 dan teks konsultasi otomatis
  const telegramUrl = `https://t.me/${siteConfig.contact.telegramNumber || '+6281384224733'}?text=${encodedMessage}`;

  // URL Discord dengan nomor/ID 081384224733 dan pesan otomatis
  const discordUrl = `https://discord.com/users/${siteConfig.contact.discordNumber || '081384224733'}?message=${encodedMessage}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubCtaClick = () => {
    // Salin teks pesan ke clipboard secara otomatis sehingga pengguna dapat langsung menempelkannya (paste)
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(consultationMessage).catch(() => {});
      setCopiedToast(true);
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
      toastTimeoutRef.current = setTimeout(() => {
        setCopiedToast(false);
      }, 2500);
    }

    // Pada perangkat mobile, tutup menu setelah item dipilih
    if (window.matchMedia('(hover: none)').matches) {
      setIsOpen(false);
    }
  };

  // Daftar 3 Tombol Sub CTA (WhatsApp, Telegram, Discord)
  const subCtaItems = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      label: locale === 'id' ? 'Chat via WhatsApp' : 'Chat via WhatsApp',
      href: whatsAppUrl,
      icon: SiWhatsapp,
      ariaLabel: locale === 'id' ? 'Hubungi via WhatsApp' : 'Contact via WhatsApp',
      // Warna & Tema
      theme: {
        borderLight: 'border-[#25D366]',
        borderDark: 'dark:border-[#25D366]',
        hoverLight: 'hover:bg-emerald-50 hover:border-[#1ebe5d]',
        hoverDark: 'dark:hover:bg-[#072719] dark:hover:border-[#25D366]',
        glowRing: 'focus-visible:ring-[#25D366]/50',
        sphereBg: 'radial-gradient(circle at 35% 30%, #4ade80 0%, #25D366 38%, #16a34a 65%, #065f46 100%)',
        sphereShadow: 'shadow-[0_4px_16px_rgba(37,211,102,0.45)] dark:shadow-[0_0_20px_rgba(37,211,102,0.65)]',
      },
    },
    {
      id: 'telegram',
      name: 'Telegram',
      label: locale === 'id' ? 'Chat via Telegram' : 'Chat via Telegram',
      href: telegramUrl,
      icon: SiTelegram,
      ariaLabel: locale === 'id' ? 'Hubungi via Telegram' : 'Contact via Telegram',
      // Warna & Tema
      theme: {
        borderLight: 'border-[#229ED9]',
        borderDark: 'dark:border-[#229ED9]',
        hoverLight: 'hover:bg-sky-50 hover:border-[#0088cc]',
        hoverDark: 'dark:hover:bg-[#08283d] dark:hover:border-[#229ED9]',
        glowRing: 'focus-visible:ring-[#229ED9]/50',
        sphereBg: 'radial-gradient(circle at 35% 30%, #67e8f9 0%, #229ED9 38%, #0088cc 65%, #005a8c 100%)',
        sphereShadow: 'shadow-[0_4px_16px_rgba(34,158,217,0.45)] dark:shadow-[0_0_20px_rgba(34,158,217,0.65)]',
      },
    },
    {
      id: 'discord',
      name: 'Discord',
      label: locale === 'id' ? 'Chat via Discord' : 'Chat via Discord',
      href: discordUrl,
      icon: SiDiscord,
      ariaLabel: locale === 'id' ? 'Hubungi via Discord' : 'Contact via Discord',
      // Warna & Tema
      theme: {
        borderLight: 'border-[#5865F2]',
        borderDark: 'dark:border-[#5865F2]',
        hoverLight: 'hover:bg-indigo-50 hover:border-[#4752c4]',
        hoverDark: 'dark:hover:bg-[#15193b] dark:hover:border-[#5865F2]',
        glowRing: 'focus-visible:ring-[#5865F2]/50',
        sphereBg: 'radial-gradient(circle at 35% 30%, #a5b4fc 0%, #5865F2 38%, #4752C4 65%, #2c327c 100%)',
        sphereShadow: 'shadow-[0_4px_16px_rgba(88,101,242,0.45)] dark:shadow-[0_0_20px_rgba(88,101,242,0.65)]',
      },
    },
  ];

  return (
    <aside
      aria-label={locale === 'id' ? 'Aksi Cepat Live Chat BionoraDev' : 'BionoraDev Live Chat Quick Actions'}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 select-none pointer-events-none"
    >
      {/* 1. Container Live Chat dengan 3 Sub-CTA (WhatsApp, Telegram, Discord) */}
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative flex flex-col items-end transition-all duration-300 ease-out transform pointer-events-auto",
          showWidget
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-90 pointer-events-none"
        )}
      >
        {/* Notifikasi Toast saat teks pesan tersalin otomatis */}
        {copiedToast && (
          <div
            aria-live="polite"
            className="absolute -top-10 right-0 px-3.5 py-1.5 rounded-full bg-slate-900/95 dark:bg-white/95 text-white dark:text-slate-900 text-xs font-semibold shadow-xl border border-cyan-400/50 backdrop-blur-md pointer-events-none whitespace-nowrap z-50 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{locale === 'id' ? 'Teks konsultasi tersalin!' : 'Consultation text copied!'}</span>
          </div>
        )}

        {/* Menu Sub-CTA yang muncul ke atas saat di-hover / dibuka */}
        <div
          className={cn(
            "absolute bottom-[calc(100%+0.75rem)] right-0 flex flex-col items-end gap-2.5 sm:gap-3 transition-all duration-300 ease-out",
            isOpen
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-4 scale-90 pointer-events-none invisible"
          )}
          role="menu"
          aria-orientation="vertical"
          aria-hidden={!isOpen}
        >
          {subCtaItems.map((item, idx) => {
            const IconComponent = item.icon;
            // Delay staggered untuk efek pop-up halus
            const delayStyles = {
              transitionDelay: isOpen ? `${(subCtaItems.length - 1 - idx) * 45}ms` : '0ms',
            };

            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSubCtaClick}
                tabIndex={isOpen ? 0 : -1}
                aria-label={item.ariaLabel}
                style={delayStyles}
                className={cn(
                  "group flex items-center gap-2.5 sm:gap-3 focus:outline-none rounded-full transition-all duration-200 transform",
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                )}
                role="menuitem"
              >
                {/* Pill Label Text di sebelah kiri */}
                <div
                  className={cn(
                    "flex items-center px-4 py-1.5 sm:py-2 rounded-full border-2 bg-white dark:bg-[#0B1220]/95 shadow-md shadow-black/10 dark:shadow-black/50 text-slate-800 dark:text-white transition-all duration-200 group-hover:scale-102 group-hover:-translate-x-1",
                    item.theme.borderLight,
                    item.theme.borderDark,
                    item.theme.hoverLight,
                    item.theme.hoverDark
                  )}
                >
                  <span className="text-xs sm:text-[13px] font-semibold whitespace-nowrap">
                    {item.label}
                  </span>
                </div>

                {/* 3D Sphere Button Icon di sebelah kanan */}
                <div className="relative flex items-center justify-center shrink-0">
                  <div
                    className={cn(
                      "relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white dark:border-white/80 transition-all duration-200 group-hover:scale-110 active:scale-95 overflow-hidden",
                      item.theme.sphereShadow
                    )}
                    style={{ background: item.theme.sphereBg }}
                  >
                    {/* 3D Specular Glass Gloss */}
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

                    {/* Official Brand SVG Icon */}
                    <IconComponent className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.35)] relative z-10 transition-transform duration-200 group-hover:rotate-[-6deg]" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Tombol Utama Trigger (Live Chat Headset Icon Flaticon 8744028) */}
        <button
          type="button"
          onClick={handleTriggerClick}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          aria-label={
            isOpen
              ? locale === 'id'
                ? 'Tutup Menu Chat Konsultasi'
                : 'Close Consultation Chat Menu'
              : locale === 'id'
              ? 'Buka Menu Live Chat (WhatsApp, Telegram, Discord)'
              : 'Open Live Chat Menu (WhatsApp, Telegram, Discord)'
          }
          className="group relative flex items-center gap-2.5 sm:gap-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/50 rounded-full cursor-pointer"
        >
          {/* Label Pill Samping saat Hover di Desktop (ketika menu belum dibuka) */}
          <div
            className={cn(
              "flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 rounded-full border-2 border-brand-blue/60 dark:border-cyan-400/60 bg-white dark:bg-[#0B1220]/95 shadow-md shadow-black/10 dark:shadow-black/50 text-slate-800 dark:text-white text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-300 ease-out pointer-events-none",
              isOpen
                ? "opacity-0 translate-x-3 pointer-events-none"
                : "opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0"
            )}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{locale === 'id' ? 'Live Chat Konsultasi' : 'Live Consultation Chat'}</span>
          </div>

          {/* 3D Button Container dengan Radar Wave Animation */}
          <div className="relative flex items-center justify-center shrink-0">
            {/* Radar Wave Pulse Rings (Brand Cyan / Blue Pulse) */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10"
            >
              {/* Rotating Radar Sweep Cone */}
              <div
                className="absolute w-20 h-20 sm:w-22 sm:h-22 rounded-full animate-radar-sweep opacity-25 dark:opacity-35 pointer-events-none"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(0, 229, 255, 0.45) 360deg)',
                }}
              />

              {/* Concentric radar waves */}
              <span className="absolute w-full h-full rounded-full border border-cyan-400/60 bg-cyan-400/15 animate-radar-1" />
              <span className="absolute w-full h-full rounded-full border border-sky-400/50 bg-sky-400/10 animate-radar-2" />
              <span className="absolute w-full h-full rounded-full border border-brand-blue/40 bg-brand-blue/5 animate-radar-3" />
            </div>

            {/* 3D Sphere Trigger Button (Ukuran persis sama dengan tombol Back To Top) */}
            <div
              className={cn(
                "relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white/90 dark:border-cyan-400/70 transition-all duration-300 overflow-hidden",
                "shadow-[0_4px_20px_rgba(0,128,240,0.35)] dark:shadow-[0_0_24px_rgba(0,229,255,0.55)]",
                isOpen
                  ? "scale-105 ring-4 ring-cyan-400/40"
                  : "group-hover:scale-105 active:scale-95"
              )}
              style={{
                background:
                  'radial-gradient(circle at 35% 30%, #ffffff 0%, #f0f9ff 35%, #e0f2fe 70%, #bae6fd 100%)',
              }}
            >
              {/* Dark mode background overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 dark:block hidden opacity-100"
                style={{
                  background:
                    'radial-gradient(circle at 35% 30%, #1e293b 0%, #0f172a 45%, #0B1220 85%, #020617 100%)',
                }}
              />

              {/* 3D Specular Glass Gloss */}
              <span
                aria-hidden="true"
                className="absolute inset-x-1.5 top-0.5 h-3.5 sm:h-4 rounded-full pointer-events-none opacity-85 z-20"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.3) 60%, transparent 100%)',
                }}
              />

              {/* Ambient Bottom Rim Reflection */}
              <span
                aria-hidden="true"
                className="absolute inset-x-2 bottom-0.5 h-2 rounded-full pointer-events-none opacity-40 z-20"
                style={{
                  background:
                    'radial-gradient(ellipse at bottom, rgba(255, 255, 255, 0.75) 0%, transparent 80%)',
                }}
              />

              {/* Gambar 1: Flaticon 8744028 Live Chat Icon */}
              <img
                src="/assets/icons/live-chat.png"
                alt="BionoraDev Live Chat"
                width={32}
                height={32}
                className={cn(
                  "w-6 h-6 sm:w-6.5 sm:h-6.5 object-contain relative z-10 transition-transform duration-300 drop-shadow-[0_2px_4px_rgba(0,128,240,0.3)] dark:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]",
                  isOpen ? "rotate-[-10deg] scale-110" : "group-hover:rotate-6 group-hover:scale-105"
                )}
              />

              {/* Active Indicator Ping Dot */}
              <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white dark:border-[#0B1220] z-30 animate-pulse" />
            </div>
          </div>
        </button>
      </div>

      {/* 2. Tombol Back To Top (Terletak di BAWAH tombol Live Chat) */}
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
          className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-brand-blue/50 dark:border-cyan-400/50 shadow-[0_4px_16px_rgba(0,128,240,0.4)] dark:shadow-[0_0_22px_rgba(0,229,255,0.45)] transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/50 cursor-pointer overflow-hidden shrink-0"
          style={{
            background:
              'radial-gradient(circle at 35% 30%, #67e8f9 0%, #0080F0 38%, #0050c0 68%, #001f7a 88%, #001040 100%)',
          }}
          aria-label={locale === 'id' ? 'Kembali ke atas halaman' : 'Back to top'}
          title={locale === 'id' ? 'Kembali ke atas' : 'Back to top'}
        >
          {/* 3D Specular Glass Gloss */}
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

          {/* Upward Arrow Icon */}
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.45)] relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5"
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
