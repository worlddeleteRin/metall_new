<template>
        <div 
		class="flex flex-col flex-1 w-2/6 max-w-xs mx-1 border-4 border-black"
		style="min-width:200px;">
            <div class="relative ">
                <div class="relative flex justify-center h-48 overflow-hidden text-center">
                    <img class="object-contain" 
					v-lazy="product.imgsrc[0]" alt="">
                </div>
            </div>
            <div class="relative">
                <div class="flex flex-row items-end">
                    <div class="mt-1 text-xl font-semibold text-pink-600">
						{{ product.price }} &#x20bd;
					</div>
                    <div class="ml-3 text-sm line-through">
						{{ product.price }}  &#x20bd;
					</div>
                </div>
                <div class="mt-1 cursor-pointer hover:text-blue-900">
					<router-link :to="'/product/' + product.id">
						{{ product.name }}
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
	props: {
		product: {},
	},
	setup() {
	onMounted(() => {
		console.log('grid view product component is mounted')
	})
		return {
		}
	},
}
</script>
