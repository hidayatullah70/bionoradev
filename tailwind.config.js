/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00E5FF',       /* Cyan (Accent) */
          blue: '#00B4FF',       /* Primary Blue (Brand) */
          'deep-blue': '#0066FF',/* Deep Blue (Brand) */
          'dark-navy': '#0B1220',/* Dark Navy (Background) */
          ink: '#0B1220',        /* Dark Navy Alias */
          slate: '#94A3B8',      /* Slate (Text/Secondary) */
          white: '#F8FAFC',
        },
        // Semantic dynamic tokens driven by CSS variables
        bg: 'var(--bg)',
        surface: {
          DEFAULT: 'var(--surface)',
          muted: 'var(--surface-muted)',
        },
        txt: {
          DEFAULT: 'var(--text)',
          muted: 'var(--text-muted)',
        },
        border: 'var(--border)',
        accent: {
          DEFAULT: 'var(--accent)',
          strong: 'var(--accent-strong)',
          soft: 'var(--accent-soft)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        brand: ['Orbitron', 'sans-serif'],
        heading: ['Orbitron', 'sans-serif'],
      },
      borderRadius: {
        'card': '1.5rem', // 24px
        'btn': '0.875rem', // 14px
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 240, 240, 0.25)',
        'glow-blue': '0 0 25px -5px rgba(0, 128, 240, 0.25)',
        'card-light': '0 4px 20px -2px rgba(11, 18, 32, 0.05)',
        'card-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
