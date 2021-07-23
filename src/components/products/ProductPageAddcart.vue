<template>
 <div class="mt-7">
	<!-- NOT IN CART BLOCK -->
	<div>
		<span 
		class="flex justify-center py-3 font-medium text-center text-white bg-blue-600 rounded-lg cursor-pointer select-none hover:bg-blue-700 md:w-56"
		>
			Добавить в корзину
		</span>
	</div>	
	<!-- EOF NOT IN CART BLOCK -->
	<!-- IN CART BLOCK -->	
	<div class="flex justify-center md:justify-start md:w-56">
		<span 
		class="flex flex-col justify-center w-9/12 py-2 font-medium text-center text-white bg-green-500 rounded-l-lg cursor-pointer select-none hover:bg-green-600"
		>
			<span>В корзине (8 шт.) </span>
			<span class="text-sm font-normal">Перейти</span>
		</span>
		<span
		class="flex items-center justify-center w-3/12 text-white bg-blue-600 rounded-r-lg cursor-pointer select-none hover:bg-blue-700"
		>
			+1 шт.
		</span>
	</div>	
	<!-- EOF IN CART BLOCK -->
</div>

</template>

<script>
export default {
	name: "ProductPageAddcart",
	setup () {
		return {
		}
	}
}
</script>
