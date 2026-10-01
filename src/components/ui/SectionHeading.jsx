import React from 'react';
import { Badge } from './Badge';
import { cn } from '../../lib/utils';

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
}) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 sm:mb-16",
        align === 'center' ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div className={cn("mb-4 flex", align === 'center' ? "justify-center" : "justify-start")}>
          <Badge variant="gradient">{badge}</Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-brand font-bold tracking-tight text-txt">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-txt-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
