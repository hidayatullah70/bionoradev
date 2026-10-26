import React from 'react';
import { cn } from '../../lib/utils';

export function Badge({ children, variant = 'default', className, ...props }) {
  const variants = {
    default: "bg-surface-muted text-txt-muted border-border",
    cyan: "bg-blue-900/[0.08] text-blue-900 border-blue-900/25 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20",
    blue: "bg-blue-900/[0.08] text-blue-900 border-blue-900/25 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20",
    accent: "bg-blue-900/[0.08] text-blue-900 border-blue-900/25 dark:bg-accent/10 dark:text-accent dark:border-accent/25",
    gradient: "bg-gradient-to-r from-blue-900/[0.08] to-indigo-900/[0.06] text-blue-900 border-blue-900/30 dark:from-cyan-500/15 dark:to-blue-500/15 dark:text-cyan-300 dark:border-cyan-500/30 font-semibold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border transition-colors",
        variants[variant] || variants.default,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
