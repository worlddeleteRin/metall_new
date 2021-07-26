<template>
<div class="px-3 py-4 bg-white rounded">
	
	<div>
		<div class="flex items-center justify-between">
			<span class="font-bold text-md">
			Ваша корзина
			</span>
			<router-link :to="'/cart'"
			class="px-2 py-1 text-xs text-blue-500 bg-blue-100 rounded">
				Редактировать	
			</router-link>
		</div>
	</div>

	<!-- checkout cart products -->
	<div class="py-3 my-3 border-t border-gray-300">
		<checkout-product-item 
		class="px-2 py-3 mb-2 bg-blue-50"
		v-for="i in 5"
		:key="i"
		/>
	</div>
	<!-- eof checkout cart products -->

	<div class="pt-3 mt-3 border-t border-gray-300">
		<div class="flex items-center justify-between">
			<span class="text-lg font-bold">
				Итого	
			</span>
			<span class="text-lg font-bold text-black">
				10 944  &#x20bd;	
			</span>
		</div>
	</div>

	<!-- place order button -->
	<div
	@click="clickCheckoutOrder"
	class="flex justify-center w-full py-4 mx-auto mt-4 bg-green-500 rounded cursor-pointer hover:bg-green-600 transition">
		<span class="text-sm font-bold text-white select-none">
			Разместить заказ	
		</span>
	</div>
	<!-- eof place order button -->

</div>

</template>

<script>
import CheckoutProductItem from './CheckoutProductItem.vue';
export default {
	name: "CheckoutSummary",
//	emits: ["checkoutClicked"],
	components: {
		CheckoutProductItem,
	},
	setup (props, {emit}) {
		// functions
		function clickCheckoutOrder() {
			emit('checkoutClicked')
		}
		return {
			clickCheckoutOrder
		}
	}
}
</script>
