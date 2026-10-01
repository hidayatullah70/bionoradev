/**
 * Merges conditional class names.
 * @param  {...any} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Smoothly scrolls to an element by ID.
 * @param {string} id
 * @param {Function} [onComplete]
 */
export function scrollToSection(id, onComplete) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (onComplete) {
      onComplete();
    }
  }
}
