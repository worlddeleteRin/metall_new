<template>


	<product-card-list-view 
	v-if="products_layout == 'list'"
	/>

	<product-card-grid-view 
	v-if="products_layout == 'grid'"
	/>

</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import ProductCardListView from './ProductCardListView.vue';
import ProductCardGridView from './ProductCardGridView.vue';

export default {
	name: "ProductCardBase",
	components: {
		ProductCardListView,
		ProductCardGridView,
	},
	setup () {
	const store = useStore()
	const products_layout = computed(() => store.state.ecommerce.config.products_layout)
		return {
			products_layout,
		}
	}
}
</script>

