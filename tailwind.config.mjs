/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: 'class',
	theme: {
		fontFamily: {
			geist: ["Geist", "sans-serif"],
		},
		extend: {
			colors: {
				lightBg: '#f8f9fa', // Color bg claro
				darkBg: '#121212',  // Color bg oscuro
			}
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
