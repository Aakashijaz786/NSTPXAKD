/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F5F5F0',
        dark: '#111111',
        'dark-card': '#1E1E1E',
        accent: '#6B8F3E',
        'accent-dark': '#4A6B28',
        'accent-light': '#E8EFD8',
        'text-primary': '#1A1A1A',
        'text-secondary': '#555555',
        'text-muted': '#AAAAAA',
        'card-border': '#E0E0D8',
        'dark-border': '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
        hero: '760px',
        sub: '620px',
        form: '640px',
        faq: '720px',
        about: '720px',
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
      },
    },
  },
  plugins: [],
};
