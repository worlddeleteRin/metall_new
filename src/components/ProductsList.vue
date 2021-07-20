<template>
<div
class="mx-auto border border-black max-w-screen-xl"
>
	<div>
		<button
		@click="makeList">
			make list 
		</button>
		<button
		@click="makeGrid">
			make grid 
		</button>
	</div>
	<div
		:class="[products_layout == 'list'? 'block':'grid grid-cols-4',]">
		<product-card-view
		v-for="i in 10"
		:key="i"
		/>	
	</div>
</div>
	
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import ProductCardView from './ProductCardView.vue';

export default {
	name: "ProductsList",
	components: {
		ProductCardView,
	},
	setup () {
		// initialize store access
		const store = useStore()
		const products_layout = computed(() => store.state.ecommerce.config.products_layout)
		function makeList() {
			console.log('button make list is pressed')
			store.commit('setProductsLayout', "list")
		}
		function makeGrid() {
			console.log('make grid button pressed')
			store.commit('setProductsLayout', "grid")
		}
		return {
			products_layout,
			makeList,
			makeGrid,
		}
	}
}
</script>
