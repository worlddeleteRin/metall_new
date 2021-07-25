<template>

<div class="flex items-center justify-between bg-white max-w-max">
	<div class="flex items-center justify-center h-6 mx-1 bg-blue-100 border-transparent rounded cursor-pointer w-7 hover:bg-blue-200 group transition"
	@click="removeItemQuantity"
	>
	<Icon
		icon="akar-icons:minus"
		class="text-blue-600 group-hover:text-blue-900"
	/>
	</div>
	<span class="mx-1 select-none">
		{{ item_quantity }}
	</span>
	<div class="flex items-center justify-center h-6 mx-1 bg-blue-100 rounded cursor-pointer w-7 group hover:bg-blue-200 transition"
	@click="addItemQuantity"
	>
		<Icon
			icon="akar-icons:plus"
			class="text-blue-600 group-hover:text-blue-900"
		/>
	</div>
</div>

</template>

<script>
import { Icon } from '@iconify/vue';
import { ref } from 'vue'

export default {
	name: "CartProductItemQuantity",
	components: {
		Icon,
	},
	setup () {
	let item_quantity = ref(1)
	// functions 
	function addItemQuantity () {
		item_quantity.value = item_quantity.value + 1
	}
	function removeItemQuantity () {
		if (item_quantity.value > 0) {
			item_quantity.value = item_quantity.value - 1
		}
	}
		return {
			// vars
			item_quantity,
			// functions
			addItemQuantity,
			removeItemQuantity,
		}
	}
}
</script>

