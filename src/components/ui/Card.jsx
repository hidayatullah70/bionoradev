import React from 'react';
import { cn } from '../../lib/utils';

export function Card({ children, className, hover = true, glow = false, ...props }) {
  return (
    <div
      className={cn(
        "rounded-card bg-surface border border-border p-6 sm:p-8 transition-all duration-300",
        hover && "hover:border-accent/40 hover:-translate-y-1 hover:shadow-card-dark dark:hover:shadow-glow-cyan/10",
        glow && "relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-500/5 before:to-transparent before:pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
