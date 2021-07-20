export default {
	state: {
		config: {
			products_layout: "grid",
		},
	},
	mutations: {
		setProductsLayout(state, new_layout) {
			state.config.products_layout = new_layout;
			// localStorage.theme = new_theme;
		},
	},
	actions: {
	},
}
