import { useEffect, useRef } from 'react';

/**
 * Hook for scroll reveal animation using IntersectionObserver.
 * Respects prefers-reduced-motion.
 */
export function useReveal(options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) {
  const ref = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (ref.current) {
        ref.current.classList.add('reveal-visible');
      }
      return;
    }

    const currentElem = ref.current;
    if (!currentElem) return;

    currentElem.classList.add('reveal-init');

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        currentElem.classList.add('reveal-visible');
        observer.unobserve(currentElem);
      }
    }, options);

    observer.observe(currentElem);

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [options]);

  return ref;
}
