
module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
		"sans": "Jost",
	//	['JostBold', 'JostMedium', 'JostRegular', 'JostSemiBold', 'JostThin'],
		"mono": "Menlo, Monaco, Consolas",
		},
		extend: {},	
	},
	variants: {
		extend: {},
	},
	plugins: [
	],
}
