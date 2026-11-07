import React from 'react';

/**
 * WhatsAppIcon3D Component
 * Renders a high-fidelity 3-dimensional WhatsApp icon with glassmorphism depth,
 * specular highlights, and brand cyan-blue styling.
 */
export function WhatsAppIcon3D({ className = 'w-7 h-7', size = 32 }) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <img
        src="/assets/icons/whatsapp-3d.png"
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        loading="eager"
        decoding="async"
        className="w-full h-full object-contain filter drop-shadow-sm pointer-events-none select-none transition-transform duration-300"
      />
    </div>
  );
}

export default WhatsAppIcon3D;
