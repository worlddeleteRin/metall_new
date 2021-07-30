<template>

	<product-card-list-view 
	:product="product"
	v-if="products_layout == 'list'"
	/>

	<product-card-grid-view 
	:product="product"
	v-if="products_layout == 'grid'"
	/>

</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import ProductCardListView from '@/components/products/ProductCardListView.vue';
import ProductCardGridView from '@/components/products/ProductCardGridView.vue';

export default {
	name: "ProductCardBase",
	components: {
		ProductCardListView,
		ProductCardGridView,
	},
	props: {
		product: {},
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

