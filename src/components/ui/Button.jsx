import React from 'react';
import { cn } from '../../lib/utils';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  onClick,
  target,
  rel,
  type = 'button',
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-colors transition-transform duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants = {
    primary: "bg-brand-blue hover:bg-brand-deep text-white rounded-xl shadow-sm hover:shadow active:scale-[0.98]",
    gradient: "bg-brand-blue hover:bg-brand-deep dark:bg-brand-blue dark:hover:bg-brand-deep text-white rounded-xl shadow-sm hover:shadow active:scale-[0.98]",
    secondary: "bg-surface-muted/90 hover:bg-surface border border-border hover:border-slate-300 dark:hover:border-white/20 text-txt rounded-xl active:scale-[0.98]",
    outline: "bg-transparent border border-border hover:border-brand-blue text-txt hover:bg-surface-muted rounded-xl active:scale-[0.98]",
    ghost: "bg-transparent hover:bg-surface-muted text-txt-muted hover:text-txt rounded-xl",
    link: "bg-transparent text-accent hover:underline p-0 h-auto font-sans font-medium",
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 gap-2.5",
  };

  const combinedClasses = cn(
    baseStyles,
    variants[variant] || variants.primary,
    variant !== 'link' && sizes[size],
    className
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('//') || href.startsWith('https://wa.me');
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
