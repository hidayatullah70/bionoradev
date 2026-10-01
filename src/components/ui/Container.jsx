import React from 'react';
import { cn } from '../../lib/utils';

export function Container({ children, className, ...props }) {
  return (
    <div className={cn("max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12", className)} {...props}>
      {children}
    </div>
  );
}
