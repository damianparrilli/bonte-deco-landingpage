/** @type {import('tailwindcss').Config} */
export default {
	content: {
	  files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/preline/dist/*.js'],
	  relative: true,
	  transform: (content) => content.replace(/taos:/g, ''),
	},
	theme: {
	  extend: {},
	},
	plugins: [
	  require('preline/plugin'),
	  require('taos/plugin'),
	],
	safelist: [
	  '!duration-[0ms]',
	  '!delay-[0ms]',
	  'html.js :where([class*="taos:"]:not(.taos-init))',
	],
  }
  