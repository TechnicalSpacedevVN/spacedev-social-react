require('./tailwind-plugin.cjs');
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2374e1',
          50: '#f4f8fd',
          100: '#caddf7',
          200: '#a0c3f2',
          300: '#76a8ec',
          400: '#4c8ee6',
          500: '#2374e1',
          600: '#1c5cb4',
          700: '#154587',
          800: '#0e2e5a',
          900: '#06172c',
        },
      },
      lineHeight: {
        12: '48px',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      width: {
        sidebar: 300,
      },
      maxWidth: {
        'main-content': 768,
      },
      height: {
        header: 50,
      },
      fontSize: {
        small: 10,
      },
      keyframes: {
        shine: {
          to: { backgroundPositionX: '-200%' },
        },
      },
      animation: {
        shine: '1.5s shine linear infinite',
      },
      // gridTemplateColumns: {
      //   // Simple 8 row grid
      //   8: 'repeat(8, minmax(0, 1fr))',

      //   // // Complex site-specific row configuration
      //   // layout: '200px minmax(900px, 1fr) 100px',
      // },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.border-base': {
          '@apply  border-solid border-gray-300 dark:border-slate-700': {},
        },
        'body, .body-pr': {
          '@apply pr-[var(--body-padding-right)]': {},
        },
      });
    },
    // Tải config để tailwind IntelliSense có thể đọc config từ file này và suggesstion
    require('./src/assets/tailwind.css'),
  ],

  darkMode: 'class',
  safelist: [],
};
