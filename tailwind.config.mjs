/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#131614',
        surface: {
          base: '#131614',
          card: '#181c19',
          elevated: '#1f2420',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        sage: {
          50: '#f2f7f4',
          100: '#e3ece6',
          400: '#87aa98',
          500: '#618C77',
          600: '#4e7361',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Instrument Serif', 'Georgia', 'serif'],
        display: ['Instrument Serif', 'Cormorant Garamond', 'Georgia', 'serif'],
        editorial: ['Cormorant Garamond', 'Newsreader', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
