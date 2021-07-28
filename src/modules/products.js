import { APIgetCatalogueProducts } from '../api/products';

export default {
	state: {
		catalogue_products: [],
		pages: {},
	},
	mutations: {
		setCatalogueProducts(state, products) {
			state.catalogue_products = products	
		},
		setCatalogueProductsPages(state, page_info) {
			state.pages = page_info
		},
	},
	actions: {
		async getCatalogueProducts({commit}, params) { 
			var pr_data = await APIgetCatalogueProducts(params)
			console.log('pr data is', pr_data)
			// set current products
			commit('setCatalogueProducts', pr_data.products)
			// set current page info
			commit('setCatalogueProductsPages', pr_data.pages)
		},
	}
}
