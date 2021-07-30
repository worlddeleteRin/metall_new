<template>
<div class="mx-auto max-w-screen-xl">

	<div>{{ category_id }}</div>
	<div>query is: {{ route_query }}</div>
	<div>pages info is: {{ pages_info }}</div>

	products list is here


	<div>{{ filters }}</div>

	<div
	v-if="catalogue_products.length > 0"
	>

	<products-list-top-row />
	
	
	<div class="flex">
		<products-filters 
		:filters="filters"
		class="flex-shrink-0 hidden border-4 border-green-500 md:flex w-52"
		/>

		<products-list
			class="w-full"
			:products="catalogue_products"	
		/>
	</div>

	<products-list-pagination 
		:pages_info="pages_info"
		@pageChange="pageChanged($event)"
	/>

		
	</div>

	<div v-else>
		<el-skeleton 
			:rows="15" animated
		>
		</el-skeleton>
	</div>



</div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';
// custom components
import ProductsList from '@/components/products/ProductsList.vue';
import ProductsListPagination from '@/components/products/ProductsListPagination.vue';
import ProductsFilters from '@/components/products/ProductsFilters.vue';
import ProductsListTopRow from '@/components/products/ProductsListTopRow.vue';

export default {
	name: "BaseCategoryComponent",
	components: {
		ProductsList,
		ProductsListPagination,
		ProductsFilters,
		ProductsListTopRow,
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
		const router = useRouter()
		const store = useStore()
		const category_id = route.params.id
		console.log('route query: ', route.query)
		var route_query = route.query
		// computed 
		var catalogue_products = computed(() => store.state.products.catalogue_products)
		var pages_info = computed(() => store.state.products.pages)
		// testing code
		var filters = computed(() => store.state.products.filters)
		// eof testing code
		//functions 
		async function pageChanged (new_page) {
			console.log('page changed from parent', new_page)
			var get_products_params = {
				"query": {...this.route_query },
			}
			get_products_params["query"]["page"] = new_page
			// await store.dispatch('getCatalogueProducts', get_products_params)
			var	query_data = get_products_params["query"]
//			const page = query_data["page"]

			console.log(router)
			console.log('route is', route.fullPath)
			console.log('query is', query_data["page"])
			router.push({path: route.path, query: {...query_data } })
//			await router.push({ query: { ...route.query, 'page': page } })
	//		router.push('/')
		}

		return {
			category_id,
			route_query,
			// computed
			catalogue_products,
			pages_info,
			// testing filters
			filters,
			// functions
			pageChanged,
		}
	},
}
</script>
