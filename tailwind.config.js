/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#1a1a2e', 50: '#e8e8f0', 900: '#0d0d1a' },
        ink: { DEFAULT: '#13131a', light: '#1c1c26', deep: '#0a0a0f' },
        cobalt: { DEFAULT: '#2d3561', light: '#3d4578' },
        gold: { DEFAULT: '#c9a96e', light: '#e0c896', dark: '#8a7355' },
        slate: { DEFAULT: '#94a3b8', light: '#cbd5e1', dark: '#64748b' },
        cream: { DEFAULT: '#fffef9', warm: '#f5f0e8', border: '#e0d8cc' },
        signal: {
          green: '#4ade80',
          red: '#f87171',
          amber: '#fbbf24',
          blue: '#60a5fa',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        mono: ['"Courier New"', 'Courier', 'monospace'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        ticker: 'ticker 30s linear infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(96,165,250,0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(96,165,250,0.25)' },
        },
      },
      backgroundImage: {
        'grid-dark':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 40L40 0M-5 5L5-5M35 45L45 35' stroke='%232a2a3a' stroke-width='0.5'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}