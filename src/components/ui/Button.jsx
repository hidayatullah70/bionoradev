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
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants = {
    primary: "bg-gradient-to-r from-brand-blue to-brand-deep-blue text-white rounded-full shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/45 hover:brightness-110 active:scale-[0.98]",
    gradient: "brand-gradient-bg text-black font-bold rounded-full relative overflow-hidden border border-blue-400/40 dark:border-cyan-300/35 shadow-[0_4px_14px_rgba(0,102,255,0.22)] dark:shadow-[0_0_20px_-2px_rgba(0,180,255,0.4)] hover:-translate-y-0.5 hover:scale-[1.02] hover:brightness-105 dark:hover:brightness-110 hover:shadow-[0_10px_25px_rgba(0,102,255,0.38)] hover:border-blue-500/70 dark:hover:shadow-[0_0_32px_rgba(0,229,255,0.75),0_0_14px_rgba(0,102,255,0.45)] dark:hover:border-cyan-200/80 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-out select-none before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 before:ease-in-out before:pointer-events-none",
    secondary: "bg-surface-muted/80 hover:bg-surface border border-border/80 hover:border-brand-blue text-txt rounded-full active:scale-[0.98]",
    outline: "bg-transparent border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white dark:border-brand-blue dark:text-brand-blue dark:hover:bg-brand-blue dark:hover:text-white rounded-full active:scale-[0.98]",
    ghost: "bg-transparent hover:bg-surface-muted text-txt-muted hover:text-txt rounded-full",
    link: "bg-transparent text-accent hover:underline p-0 h-auto font-sans font-medium",
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
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
