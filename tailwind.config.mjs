import colors from 'tailwindcss/colors'
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
				lightBg: colors.neutral[100], // Color bg claro
				darkBg: colors.neutral[900],  // Color bg oscuro
			}
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
