<template>
<div class="flex flex-col py-3 bg-indigo-100 md:items-start md:flex-row md:px-4">
	<cart-products
	class="flex flex-col items-center justify-center w-11/12 mx-auto"
	/>
	<cart-summary
	class="w-11/12 mx-auto bg-white md:ml-5"
	/>
</div>
</template>

<script>
import CartProducts from './CartProducts.vue';
import CartSummary from './CartSummary.vue';
export default {
	name: "BaseCartComponent",
	components: {
		CartProducts,
		CartSummary,
	},
	setup () {
		return {
		}
	}
}
</script>

