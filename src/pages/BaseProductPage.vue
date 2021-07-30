<template>
<div class="pb-5">
	<div>
		product id is {{ product_id }} 
	</div>
	<div>{{ product }}</div>
	<div 
	class="flex flex-col md:flex-row"
	>
		<product-page-image-block 
		:product="product"
		class="w-full px-2 md:w-2/5"
		/>	
		<product-page-detail-block
		:product="product"
		class="w-full px-4 md:w-3/5"
		/>
	</div>
	<product-page-feature-block
	:product="product"
	class="px-4"
	/>

	<!-- 

	<div class="px-4 mb-5 text-xl font-medium mt-7">
		Товары из этой же категории
	</div>
	<base-products-slider 
	class="px-4"
	/>

	<div class="px-4 mb-5 text-xl font-medium mt-7">
		Вам также может понравиться			
	</div>
	<base-products-slider 
	class="px-4"
	/>

	-->

</div>
</template>

<script>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';
// custom components import 
import ProductPageImageBlock from '@/components/products/ProductPageImageBlock.vue';
import ProductPageDetailBlock from '@/components/products/ProductPageDetailBlock.vue';
import ProductPageFeatureBlock from '@/components/products/ProductPageFeatureBlock.vue';
// products slider import 
// import BaseProductsSlider from '../components/products/BaseProductsSlider.vue';

// testing here
export default {
	name: "BaseProductPage",	
	components: {
		ProductPageImageBlock,
		ProductPageDetailBlock,
		ProductPageFeatureBlock,
//		BaseProductsSlider,
	},
	beforeMount () {
		this.$store.dispatch('getCurrentProduct', this.product_id) 
	},
	setup () {
		const store = useStore()
		const route = useRoute()
		const product_id = route.params.id
		console.log('route is', route.params.id)
		// computed
		var product = computed(() => store.state.products.current_product)
		//functions
		return {
			product_id,
			// computed
			product,
		}
	},
	methods: {
	},
}
</script>
