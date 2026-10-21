import React from 'react';
import { siteConfig } from '../../config/siteConfig';

export function FooterCredit({ variant = 'dark' }) {
  const currentYear = new Date().getFullYear();

  return (
    <p className="text-xs sm:text-sm font-medium text-txt-muted flex flex-wrap items-center justify-center sm:justify-start gap-x-1">
      <span>Copyright © {currentYear}</span>
      <a
        href={siteConfig.brand.websiteUrl || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-baseline font-semibold group transition-all duration-200 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-0.5"
        title="BionoraDev Official Website"
        aria-label="BionoraDev Website"
      >
        <span className="text-txt transition-colors group-hover:opacity-80">
          {siteConfig.brand.wordmarkFirst || 'Bionora'}
        </span>
        <span className="text-brand-blue dark:text-brand-cyan font-bold transition-colors group-hover:opacity-80">
          {siteConfig.brand.wordmarkSecond || 'Dev'}
        </span>
      </a>
      <span>- All Rights Reserved</span>
    </p>
  );
}

export default FooterCredit;
