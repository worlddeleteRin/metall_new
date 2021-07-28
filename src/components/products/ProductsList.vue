<template>
<div
class="mx-auto border border-black max-w-screen-xl"
>
	<div
	class="flex"
	>	
		<products-filters 
		class="flex-shrink-0 hidden border-4 border-green-500 md:flex w-52"
		/>
		<div
		class="w-full border-4 border-blue-600"
		>	
			<products-list-top-row />

			<div
				:class="[products_layout == 'list'? 'block':'flex flex-wrap justify-center', 'border-4 border-red-600 w-full']">
				<product-card-base
				v-for="product in products"
				:key="product.id"
				:product="product"
				/>	
			</div>

			<products-list-pagination 
			:pages_info="pages_info"
			/>

		</div>
	</div>


</div>
	
</template>

<script>

import { useStore } from 'vuex';
import { computed } from 'vue';
import ProductCardBase from './ProductCardBase.vue';
import ProductsListTopRow from './ProductsListTopRow.vue';
import ProductsFilters from './ProductsFilters.vue';
import ProductsListPagination from './ProductsListPagination.vue';


export default {
	name: "ProductsList",
	components: {
		ProductCardBase,
		ProductsListTopRow,
		ProductsFilters,
		ProductsListPagination,
	},
	props: {
		products: Array,
		pages_info: {},
	},
	setup () {
		const store = useStore()
		const products_layout = computed(() => store.state.ecommerce.config.products_layout)

		// test code is here
		// eof test code is here

		// initialize store access
		return {
			products_layout,
		}
	}
}
</script>

