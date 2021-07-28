<template>
<router-link :to="'/category/1'" 
class="relative flex flex-col w-full max-w-xs">

	<!-- category card image -->
	<div
		class="relative overflow-hidden bg-gray-100 h-28 rounded-md"
	>
		<img 
			:src="category.imgsrc"
			class="object-cover w-full h-full rounded-md"
		/>
	</div>
	<!-- eof category card image -->

	<!-- category card name -->
	<div
		class="flex justify-center w-full py-2"
	>
		<span class="w-full px-3 text-sm font-normal text-center bg-white md:text-sm md:font-medium rounded-md">
			{{ category.name }}
		</span>
	</div>
	<!-- eof category card name -->

</router-link>
</template>

<script>
export default {
	name: "CategoryCard",	
	components: {
	},
	setup () {
		const category = {
			"imgsrc": "https://i.picsum.photos/id/251/1000/1000.jpg?hmac=uWcm8cClStxAiVZ3BH1G0JOVRgCdbA20twJe2JCJGPg",
			"name": "Металлическая мебель",
		}
		return {
			category
		}
	},
}
</script>
