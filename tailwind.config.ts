import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: { 0: '#0b0b10', 1: '#14141c', 2: '#1c1c28' },
        border: { DEFAULT: '#262633' },
        text: { 0: '#ffffff', 1: '#b4b4c2', 2: '#6b6b80' },
        accent: { DEFAULT: '#8b5cf6', 2: '#6366f1' }
      },
      fontFamily: { sans: ['var(--font-inter)', 'system-ui', 'sans-serif'] },
      borderRadius: { xl2: '1rem' }
    }
  },
  plugins: []
};
export default config;
