/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
			KaushanScript: ["Kaushan Script"],
		},
		extend: {
			backgroundImage: {
				'hero': "url('/img/bg/19744.jpg')",
			}
		}
	},
	plugins: [],
};
