/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,md,mdx,ts,tsx}"],
	enabled: process.env.NODE_ENV === "production",
	safeList: [],
	darkMode: "class",
	theme: {
		fontFamily: {
			"termina-heavy": ["Termina Heavy", "sans-serif"],
			"termina-bold": ["Termina Bold", "sans-serif"],
			"bricolage": ["Bricolage Grotesque", "sans-serif"],
		},
		extend: {
			colors: {
				primary: "#0d0d0d",
				secondary: "#f2f2f2",
				"accent-one": "#A5FFC9",
				"accent-two": "#FCFABC",
			},
		},
	},
	plugins: [],
};
