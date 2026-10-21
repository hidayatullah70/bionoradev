import React from 'react';
import { motion } from 'framer-motion';

export interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  [key: string]: any;
}

/**
 * Reusable Reveal-on-Scroll FadeUp Component
 * Props:
 * - children: React.ReactNode
 * - delay: optional number in seconds (e.g. 0.2)
 * - duration: optional number in seconds (default: 0.8s)
 * - className: optional string for styling
 *
 * Animation logic:
 * - initial: opacity 0, y: 80
 * - whileInView: opacity 1, y: 0
 * - viewport: once true
 */
export function FadeUp({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default FadeUp;
