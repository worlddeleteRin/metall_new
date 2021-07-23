<template>
        <div 
		class="flex flex-col flex-1 w-2/6 max-w-xs mx-1 border-4 border-black"
		style="min-width:200px;">
            <div class="relative ">
                <div class="relative flex justify-center h-48 overflow-hidden text-center">
                    <img class="object-contain" 
					src="https://i.picsum.photos/id/924/1000/1000.jpg?hmac=NopRCaGnkvDju5hDrCebzIhZLFZvVD_4Xc1EppT3FSY" alt="">
                </div>
            </div>
            <div class="relative">
                <div class="flex flex-row items-end">
                    <div class="mt-1 text-xl font-semibold text-pink-600">1130₽</div>
                    <div class="ml-3 text-sm line-through">1320₽</div>
                </div>
                <div class="mt-1 cursor-pointer hover:text-blue-900">
					<router-link :to="'/product/123'">
						Рюкзак PIRAMIDA
					</router-link>	
				</div>
				<div class="flex justify-center mt-4 mb-2 text-center">
					<span class="flex justify-center py-2 text-sm font-medium text-white bg-blue-600 rounded-lg cursor-pointer select-none w-28 bottom-1 hover:bg-blue-800 duration-150">В корзину</span>
				</div>
            </div>
        </div>

        <!-- eof card_product -->
     

</template>

<script>
import { onMounted } from 'vue';
	
export default {
	name: "ProductCardGridView",
	setup() {
	onMounted(() => {
		console.log('grid view product component is mounted')
	})
		return {
		}
	},
}
</script>
