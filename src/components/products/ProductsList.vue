<template>
<div
class="mx-auto border-4 border-green-500 max-w-screen-xl"
>

		<div
		class="w-full border-4 border-blue-600"
		>	

			<div
				:class="[products_layout == 'list'? 'block':'flex flex-wrap justify-center', 'border-4 border-red-600 w-full']">
				<product-card-base
				v-for="product in products"
				:key="product.id"
				:product="product"
				/>	
			</div>

	</div>

</div>

</template>

<script>

import { useStore } from 'vuex';
import { computed } from 'vue';
import ProductCardBase from '@/components/products/ProductCardBase.vue';


export default {
	name: "ProductsList",
	components: {
		ProductCardBase,
	},
	props: {
		products: Array,
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

