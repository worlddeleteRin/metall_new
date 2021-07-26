<template>
<div class="py-10">
	<!-- order created image -->	
	<div class="flex items-center justify-center w-full">
		<img 
		:src="publicPath + 'box.svg'"
		class="w-5/12 max-w-xs"
		/>
	</div>
	<!-- eof order created image -->
	<div class="flex justify-center">
		<span class="mt-2 text-2xl font-semibold tracking-wide">
			Ваш заказ успешно создан!
		</span>
	</div>

	<div class="flex justify-center px-3 mt-6">
		<router-link :to="'/'"
		class="px-12 py-3 text-base font-medium text-white bg-blue-600 rounded-md">
			На главную
		</router-link>
		<router-link :to="'/catalogue'"
		class="px-12 py-3 ml-4 text-base font-medium text-white bg-blue-600 rounded-md">
			Каталог	
		</router-link>
	</div>

</div>
</template>

<script>
export default {
	name: "BaseOrderCreatedComponent",
	setup () {
		const publicPath = process.env.BASE_URL
		return {
			publicPath,
		}
	}
}
</script>
