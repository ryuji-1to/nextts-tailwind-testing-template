/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{page.tsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
