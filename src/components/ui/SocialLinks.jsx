import React from 'react';
import { siteConfig } from '../../config/siteConfig';

// Official Brand SVG Icons with precise geometry
export function InstagramIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function YouTubeIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      {/* Kotak Merah YouTube */}
      <path
        fill="#FF0000"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
      />
      {/* Panah Putih YouTube */}
      <polygon fill="#FFFFFF" points="9.545 15.568 9.545 8.432 15.818 12" />
    </svg>
  );
}

export function TikTokIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

export function FacebookIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
      {/* Huruf f Putih Facebook */}
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.52-.14-2.884-.14-2.848 0-4.616 1.738-4.616 4.75V9.5H7v4h3V22h4v-8.5z" />
    </svg>
  );
}

export function XIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const iconComponentMap = {
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
  tiktok: TikTokIcon,
  facebook: FacebookIcon,
  x: XIcon,
};

const socialStyles = {
  instagram: {
    bgColor: 'bg-[#E1306C]',
    borderColor: 'border-[#E1306C]',
    textColor: 'text-white',
    hoverBg: 'hover:bg-[#0B1220]',
    hoverBorder: 'hover:border-[#E1306C]',
    hoverShadow: 'hover:shadow-[0_0_14px_rgba(225,48,108,0.5)]',
  },
  youtube: {
    bgColor: 'bg-[#FF0000]',
    borderColor: 'border-[#FF0000]',
    textColor: 'text-white',
    hoverBg: 'hover:bg-[#0B1220]',
    hoverBorder: 'hover:border-[#FF0000]',
    hoverShadow: 'hover:shadow-[0_0_14px_rgba(255,0,0,0.5)]',
  },
  tiktok: {
    bgColor: 'bg-black',
    borderColor: 'border-slate-700',
    textColor: 'text-white',
    hoverBg: 'hover:bg-[#0B1220]',
    hoverBorder: 'hover:border-white',
    hoverShadow: 'hover:shadow-[0_0_14px_rgba(255,255,255,0.4)]',
  },
  facebook: {
    bgColor: 'bg-[#1877F2]',
    borderColor: 'border-[#1877F2]',
    textColor: 'text-white',
    hoverBg: 'hover:bg-[#0B1220]',
    hoverBorder: 'hover:border-[#1877F2]',
    hoverShadow: 'hover:shadow-[0_0_14px_rgba(24,119,242,0.5)]',
  },
  x: {
    bgColor: 'bg-black',
    borderColor: 'border-slate-700',
    textColor: 'text-white',
    hoverBg: 'hover:bg-[#0B1220]',
    hoverBorder: 'hover:border-white',
    hoverShadow: 'hover:shadow-[0_0_14px_rgba(255,255,255,0.4)]',
  },
};

/**
 * SocialLinks Component
 * Renders social media icon links with brand colors and backgrounds:
 * - IG: Merah (#E1306C) dengan kamera putih
 * - YouTube: Kotak merah (#FF0000) dengan panah putih
 * - TikTok: Hitam (#000000) putih
 * - Facebook: Lingkaran biru (#1877F2) dengan huruf f putih
 * - X: Hitam (#000000) dengan huruf X putih
 * - Saat hover: SEMUA icon berlatar belakang brand-dark-navy: #0B1220 dengan glowing border brand.
 */
export function SocialLinks({ className = '' }) {
  const socials = siteConfig.socials || [];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {socials.map((item) => {
        const Icon = iconComponentMap[item.id] || iconComponentMap[item.name.toLowerCase()];
        const style = socialStyles[item.id] || socialStyles[item.name.toLowerCase()] || {};

        if (!Icon) return null;

        return (
          <a
            key={item.id || item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label || item.name}
            title={item.label || item.name}
            className={`group relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border transition-all duration-300 hover:scale-110 active:scale-95 ${style.borderColor || 'border-border'} ${style.bgColor || 'bg-surface'} ${style.hoverBg || 'hover:bg-[#0B1220]'} ${style.hoverBorder || 'hover:border-white'} ${style.hoverShadow || ''}`}
          >
            <Icon
              className={`w-4 h-4 transition-transform duration-200 group-hover:scale-105 ${style.textColor || 'text-white'}`}
            />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
