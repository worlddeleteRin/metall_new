<template>
<div>
	<!-- Product name block -->
	<div class="mt-2 text-lg font-medium">
		{{ product.name }} 
	</div>
	<!-- EOF Product name block -->
	<!-- Product price block -->
	<div class="my-3">
		<span class="text-xl font-semibold text-red-600">
			{{ product.price }} &#8381;
		</span>
		<span class="text-sm text-black line-through">
			{{ product.price }} &#8381;
		</span>
	</div>
	<!-- EOF Product price block -->
	<!-- Product addcart block -->
	<product-page-addcart />

	<!-- EOF Product addcart block -->
</div>
</template>

<script>
import ProductPageAddcart from '@/components/products/ProductPageAddcart.vue';
export default {
	name: "ProductPageDetailBlock",
	components: {
		ProductPageAddcart,
	},
	props: {
		product: {},
	},	
	setup () {
		return {
		}
	},
}
</script>
