import React from 'react';
import { cn } from '../../lib/utils';

export function Badge({ children, variant = 'default', className, ...props }) {
  const variants = {
    default: "bg-surface-muted text-txt-muted border-border",
    cyan: "bg-brand-blue/10 text-brand-deep border-brand-blue/20 dark:bg-brand-cyan/10 dark:text-brand-cyan dark:border-brand-cyan/20",
    blue: "bg-brand-blue/10 text-brand-deep border-brand-blue/20 dark:bg-brand-blue/15 dark:text-brand-blue dark:border-brand-blue/30",
    accent: "bg-brand-blue/10 text-brand-deep border-brand-blue/20 dark:bg-brand-cyan/10 dark:text-brand-cyan dark:border-brand-cyan/25",
    gradient: "bg-surface-muted text-txt border-border font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-lg border transition-colors",
        variants[variant] || variants.default,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
