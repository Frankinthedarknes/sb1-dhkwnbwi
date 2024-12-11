/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        postal: {
          50: '#f7f7f2',
          100: '#e8e6d5',
          200: '#d4d0b5',
          300: '#bbb594',
          400: '#a49b78',
          500: '#8c835f',
          600: '#726a4c',
          700: '#57503a',
          800: '#3d3829',
          900: '#242118',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)'],
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}