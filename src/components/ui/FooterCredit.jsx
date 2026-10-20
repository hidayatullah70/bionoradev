import { siteConfig } from '../../config/siteConfig';

export function FooterCredit({ variant = 'dark' }) {
  const year = new Date().getFullYear();
  const isDark = variant === 'dark';

  return (
    <p
      className={`text-sm flex flex-wrap items-center justify-center gap-x-1 ${
        isDark ? 'text-white' : 'text-gray-600'
      }`}
    >
      <span>© {year}</span>
      <a
        href={siteConfig.brand.websiteUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 rounded-sm transition-opacity"
      >
        <span className={isDark ? 'text-white' : 'text-gray-600'}>bionora</span>
        <span className={`${isDark ? 'text-cyan-400' : 'text-cyan-500'} font-bold`}>Dev
        </span>
      </a>
      <span>. All rights reserved. Made with</span>
      <span className={`${isDark ? 'text-cyan-400' : 'text-cyan-500'} mx-1`}>
        💙
      </span>
      <span>in Indonesia</span>
    </p>
  );
}

export default FooterCredit;
