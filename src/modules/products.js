import { 
	APIgetCatalogueProducts,
	APIgetProductById,
} from '../api/products';

export default {
	state: {
		catalogue_products: [],
		filters: [],
		active_filters: {},
		current_product: {},
		pages: {},
	},
	mutations: {
		setCatalogueProducts(state, products) {
			state.catalogue_products = products	
		},
		setCurrentProduct(state, product) {
			state.current_product = product
		},
		setCatalogueProductsPages(state, page_info) {
			state.pages = page_info
		},
		setCatalogueProductsFilters(state, filters) {
			state.filters = filters
		},
		setCatalogueProductsActiveFilters(state, active_filters) {
			state.active_filters = active_filters
		},
	},
	actions: {
		async getCatalogueProducts({commit}, params) { 
			commit('setCatalogueProducts', [])
			var pr_data = await APIgetCatalogueProducts(params)
			console.log('pr data is', pr_data)
			// set current products
			commit('setCatalogueProducts', pr_data.products)
			// set current page info
			commit('setCatalogueProductsPages', pr_data.pages)
			// set current filters
			commit('setCatalogueProductsFilters', pr_data.filters)
			// set current active filters
			commit('setCatalogueProductsActiveFilters', pr_data.active_filters)
		},
		async getCurrentProduct({commit}, product_id) {
			var pr_data = await APIgetProductById(product_id)
			// set current product 
			commit('setCurrentProduct', pr_data.product)
		},
	}
}
