import React from 'react';
import { cn } from '../../lib/utils';

export function Card({ children, className, hover = true, glow = false, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-surface border border-border p-6 sm:p-8 transition-colors duration-150",
        hover && "hover:border-slate-300 dark:hover:border-white/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
