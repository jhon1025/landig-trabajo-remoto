// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
  extend: {
    fontFamily: {
      // Usaremos 'sans' para la fuente del cuerpo (Bevellier)
      sans: ['Bevellier', 'sans-serif'],
      // Y 'display' para los títulos grandes (Clash Display)
      display: ['Clash Display', 'sans-serif'],
    }
  },
},
  plugins: [],
}