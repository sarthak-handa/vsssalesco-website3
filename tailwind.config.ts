import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        navy: {
          50:  '#eef2f9',
          100: '#d5e0f1',
          200: '#adc1e3',
          300: '#7a9dd0',
          400: '#4f7cbc',
          500: '#2d5fa8',
          600: '#1e4a8c',
          700: '#163870',
          800: '#0f2856',
          900: '#091a3a',
          950: '#040d1f',
        },
        brand: {
          red:   '#c0392b',
          redL:  '#e74c3c',
          navy:  '#1e3a5f',
          navyD: '#0f2240',
        },
        crimson: {
          400: '#f87171',
          500: '#c0392b',
          600: '#a91c1c',
          700: '#8b1a1a',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'soundwave': 'soundwave 1.2s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        soundwave: {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      boxShadow: {
        glass: '0 8px 32px rgba(30,58,95,0.12), inset 0 1px 0 rgba(255,255,255,0.8)',
        card:  '0 4px 24px rgba(30,58,95,0.08), 0 1px 4px rgba(30,58,95,0.06)',
        'card-hover': '0 20px 60px rgba(30,58,95,0.18), 0 4px 16px rgba(30,58,95,0.12)',
        red:   '0 4px 24px rgba(192,57,43,0.3)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(30,58,95,0.15) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}
export default config
