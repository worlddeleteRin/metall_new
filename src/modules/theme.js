export default {
	state: {
		theme: "light",
	},
	mutations: {
		setCurrentTheme(state, new_theme) {
			state.theme = new_theme;
			localStorage.theme = new_theme;
		},
	},
	actions: {
		initTheme({commit}) {
			const cachedTheme = localStorage.theme ? localStorage.theme : false;
		//	const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (cachedTheme) {
				commit('setCurrentTheme', cachedTheme)
			}
		//	else if (userPrefersDark) {
		//		commit('setCurrentTheme', "dark")
		//	}
			else {
				commit('setCurrentTheme', "light")
			}
		},
	},
}
