<template>
<div class="pb-5">
	<div>
		product id is {{ product_id }} 
	</div>
	<div 
	class="flex flex-col md:flex-row"
	>
		<product-page-image-block 
		class="w-full px-2 md:w-2/5"
		/>	
		<product-page-detail-block
		class="w-full px-4 md:w-3/5"
		/>
	</div>
	<product-page-feature-block
	class="px-4"
	/>

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
</div>
</template>

<script>
import { useRoute } from 'vue-router';
// custom components import 
import ProductPageImageBlock from '../components/products/ProductPageImageBlock.vue';
import ProductPageDetailBlock from '../components/products/ProductPageDetailBlock.vue';
import ProductPageFeatureBlock from '../components/products/ProductPageFeatureBlock.vue';
// products slider import 
import BaseProductsSlider from '../components/products/BaseProductsSlider.vue';
export default {
	name: "BaseProductPage",	
	components: {
		ProductPageImageBlock,
		ProductPageDetailBlock,
		ProductPageFeatureBlock,
		BaseProductsSlider,
	},
	setup () {
		const route = useRoute()
		const product_id = route.params.id
		console.log('route is', route.params.id)
		return {
			product_id,
		}
	}
}
</script>
