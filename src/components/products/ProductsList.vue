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
				v-for="i in 10"
				:key="i"
				/>	
			</div>

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


export default {
	name: "ProductsList",
	components: {
		ProductCardBase,
		ProductsListTopRow,
		ProductsFilters,
	},
	setup () {
		const store = useStore()
		const products_layout = computed(() => store.state.ecommerce.config.products_layout)
		// initialize store access
		return {
			products_layout,
		}
	}
}
</script>

