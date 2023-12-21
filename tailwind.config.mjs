/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}'],
	enabled: process.env.NODE_ENV === 'production',
	safeList: [],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [],
}
