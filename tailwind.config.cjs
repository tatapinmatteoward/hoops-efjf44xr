/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dc2626',
        accent: '#f59e0b',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
