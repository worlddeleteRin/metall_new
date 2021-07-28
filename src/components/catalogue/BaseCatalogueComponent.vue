<template>
<div class="px-4 py-6 mx-auto max-w-screen-xl">

	<div class="mb-4 text-2xl font-bold">
		Каталог	
	</div>
	<!-- catalogue list -->
	<div
	class="flex flex-wrap justify-start flex-shrink border-2 border-black align-stretch"
	>
		<category-card 
			v-for="i in 10"
			:key="i"
			class="flex-1 w-1/2 px-1 category_card_1 min-w-[150px] sm:min-w-[180px]
			md:min-w-[220px] lg:min-w-[280px]"
			style=""
		/>
	</div>
	<!-- catalogue list -->

</div>
</template>

<script>
import CategoryCard from './CatalogueCard.vue';
export default {
	name: "BaseCatalogueComponent",	
	components: {
		CategoryCard,	
	}
}
</script>

<style scoped>
.category_card_1 {
}
</style>
