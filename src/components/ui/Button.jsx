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
  const baseStyles = "inline-flex items-center justify-center font-brand font-bold tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants = {
    primary: "bg-gradient-to-r from-brand-blue to-brand-deep-blue text-white rounded-full shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/45 hover:brightness-110 active:scale-[0.98]",
    gradient: "brand-gradient-bg text-black font-bold rounded-full shadow-glow-cyan hover:opacity-95 active:scale-[0.98]",
    secondary: "bg-surface-muted/80 hover:bg-surface border border-border/80 hover:border-brand-blue text-txt rounded-full active:scale-[0.98]",
    outline: "bg-transparent border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white rounded-full active:scale-[0.98]",
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
