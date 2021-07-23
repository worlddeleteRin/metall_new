<template>
<div>
	<!-- Product name block -->
	<div class="mt-2 text-lg font-medium">
		Робот пылесос Roborock S5 MAX (RU), белый
	</div>
	<!-- EOF Product name block -->
	<!-- Product price block -->
	<div class="my-3">
		<span class="text-xl font-semibold text-red-600">
			1100 &#8381;
		</span>
		<span class="text-sm text-black line-through">
			1300 &#8381;
		</span>
	</div>
	<!-- EOF Product price block -->
	<!-- Product addcart block -->
	<product-page-addcart />

	<!-- EOF Product addcart block -->
</div>
</template>

<script>
import ProductPageAddcart from './ProductPageAddcart.vue';
export default {
	name: "ProductPageDetailBlock",
	components: {
		ProductPageAddcart,
	},
	setup () {
		return {
		}
	},
}
</script>
