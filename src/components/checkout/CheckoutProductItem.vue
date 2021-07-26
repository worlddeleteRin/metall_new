<template>
<div 
class="relative flex justify-between w-full bg-white rounded-lg items-between"
>
	<!-- IMG BLOCK -->
	<div class="relative flex items-center justify-start w-4/12 h-full">
		<img 
		:src="img_src"
		class="object-contain"
		style="max-height:60px;"
		/>
	</div>
	<!-- EOF IMG BLOCK -->
	<!-- detail block -->
	<div class="flex flex-col items-end justify-start w-8/12 ml-3 mr-2">
		<div class="text-sm font-light">
			some product name
		</div>
		<div class="text-sm font-medium">
			2 300 &#8381; 
		</div>
		<div>
			<it-tag 
			type="primary" 
			filled 
			>
				1 шт.	
			</it-tag>
		</div>
	</div>
	<!-- eof detail block -->


</div>
</template>

<script>
// import { Icon } from "@iconify/vue";
export default {
	name: "CheckoutProductItem",
	components: {
//		Icon,
	},
	setup () {
	const img_src = "https://i.picsum.photos/id/288/1000/1000.jpg?hmac=g45YxmYKZYl0LSLl-kB2Z8YcbUA9F2VJTiPRfbs3pLE"
	// functions
		return {
			img_src,	
			// functions
		}
	}
}
</script>

