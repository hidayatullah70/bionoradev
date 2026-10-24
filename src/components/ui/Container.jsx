import React from 'react';
import { cn } from '../../lib/utils';

export function Container({ children, className, ...props }) {
  const hasCustomMaxWidth = className && className.includes('max-w-');
  return (
    <div
      className={cn(
        "w-full px-5 sm:px-8 lg:px-12 xl:px-16 mx-auto",
        !hasCustomMaxWidth && "max-w-7xl xl:max-w-none 2xl:max-w-[1920px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
