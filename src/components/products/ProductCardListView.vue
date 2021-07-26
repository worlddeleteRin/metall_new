<template>
        <div 
		class="flex flex-row items-center flex-1 w-full py-2 mx-1 border-4 border-black"
		style="">
			<!-- FIRST BLOCK -->	
                <div class="relative flex justify-center flex-shrink w-4/12 overflow-hidden text-center">
                    <img class="object-contain" 
					src="https://i.picsum.photos/id/924/1000/1000.jpg?hmac=NopRCaGnkvDju5hDrCebzIhZLFZvVD_4Xc1EppT3FSY" alt="">
                </div>
			<!-- EOF FIRST BLOCK -->	

			<div class="flex flex-col w-full md:flex-row">
			<!-- SECOND BLOCK -->	
			<div
			class="flex flex-col w-full px-4 text-sm md:w-3/5 md:text-lg"
			>
				<router-link :to="'/product/123'">
					{{ product.name }}
				</router-link>
				<div class="hidden mt-3 text-xs md:block md:text-sm">
					{{ product.description }}
				</div>
			</div>
			<!-- EOF SECOND BLOCK -->	
			<!-- THIRD BLOCK -->
            <div class="relative px-4 mt-2">
                <div class="flex flex-row items-center justify-start md:flex-col">
                    <div class="mr-3 text-sm line-through md:text-base">
						{{ product.price }} &#x20bd;
					</div>
                    <div class="text-xl font-semibold text-red-600 md:text-2xl">
						{{ product.price }} &#x20bd;
					</div>
                </div>
				<div class="flex justify-start mt-6 mb-2 text-center md:justify-center">
					<span 
					class="flex justify-center py-2 text-sm font-medium text-white bg-blue-600 rounded-lg cursor-pointer select-none w-28 bottom-1 hover:bg-blue-800 duration-150">
					В корзину
					</span>
				</div>
            </div>
			<!-- EOF THIRD BLOCK -->
			</div>

        </div>
        <!-- eof card_product -->
     

</template>

<script>
export default {
	name: "ProductCardListView",
	props: {
		product: {},
	},
}
</script>
