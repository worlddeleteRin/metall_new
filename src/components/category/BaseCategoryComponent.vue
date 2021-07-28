<template>
<div class="mx-auto max-w-screen-xl">

	<div>{{ category_id }}</div>
	<div>query is: {{ route_query }}</div>
	<div>pages info is: {{ pages_info }}</div>

	products list is here
	<products-list
		:products="catalogue_products"	
		:pages_info="pages_info"
	/>

</div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';
// custom components
import ProductsList from '../products/ProductsList.vue';

export default {
	name: "BaseCategoryComponent",
	components: {
		ProductsList,
	},
	async beforeMount () {
		// testing dispatch theat async get products with api method 
		var get_products_params = {
			"query": this.route_query,
		}
		await this.$store.dispatch('getCatalogueProducts', get_products_params)
	},
	setup () {
		const route = useRoute()
		const store = useStore()
		const category_id = route.params.id
		console.log('route query: ', route.query)
		var route_query = route.query
		// computed 
		var catalogue_products = computed(() => store.state.products.catalogue_products)
		var pages_info = computed(() => store.state.products.pages)
		//functions 
		return {
			category_id,
			route_query,
			// computed
			catalogue_products,
			pages_info,
			// functions
		}
	},
}
</script>
