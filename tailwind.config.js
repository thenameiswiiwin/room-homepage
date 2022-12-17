const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      padding: {
        hero: '3.75rem',
        'button-mobile-y': '1.225rem',
        'button-mobile-x': '1.4875rem',
        'button-desktop-x': '2.125rem',
      },
      fontSize: {
        'heading-mobile': [
          '2.5rem',
          {
            lineHeight: '2.3rem',
            letterSpacing: '-0.104rem',
            fontWeight: '600',
          },
        ],
        'heading-desktop': [
          '3rem',
          {
            lineHeight: '2.76rem',
            letterSpacing: '-0.125rem',
            fontWeight: '600',
          },
        ],
        link: [
          '.9375rem',
          {
            lineHeight: '1rem',
            letterSpacing: '0.78125rem',
            fontWeight: '500',
          },
        ],
      },
      lineHeight: {
        nav: '0.92rem',
      },
      letterSpacing: {
        'subheading-mobile': '0.36rem',
        'subheading-desktop': '0.3125rem',
        body: '-0.021rem',
        nav: '0.042rem',
      },
      gap: {
        'nav-link': '1.9375rem',
        'shop-link': '1.875rem',
      },
      fontFamily: {
        sans: ['League Spartan', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: 'hsl(var(--color-primary-100) / <alpha-value>)',
          200: 'hsl(var(--color-primary-200) / <alpha-value>)',
          300: 'hsl(var(--color-primary-300) / <alpha-value>)',
          400: 'hsl(var(--color-primary-400) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};
