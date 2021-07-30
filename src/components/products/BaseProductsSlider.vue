<template>
<div>
	<swiper
	@swiper="setProductsSwiper"
	:slides-per-view="pr_slider_options.slidesPerView"
	:breakpoints="pr_slider_options.breakpoints"
	class="border-4 border-green-500"
	>
		<swiper-slide
		v-for="i in 10"
		:key="i"
		class="flex items-center justify-center border-4 border-red-500"
		>
			<ProductCardGridView />	
		</swiper-slide>
	</swiper>
</div>
</template>

<script>
import { ref } from 'vue';
// 	Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// import SwiperCore, { Thumbs } from 'swiper/core';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/components/pagination/pagination.min.css';

// SwiperCore.use([ Thumbs ]);

import ProductCardGridView from '@/components/products/ProductCardGridView.vue';

export default {
	name: "BaseProductsSlider",	
	components: {
		Swiper,
		SwiperSlide,
		ProductCardGridView,
	},
	setup () {
		var products_slider = ref("")		
		const pr_slider_options = {
			"slidesPerView": 1,
			"breakpoints": {
				430: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				},
				1180: {
					slidesPerView: 5
				}
			}
		}
		function setProductsSwiper(swiper) {
			products_slider.value = swiper;
		}
		return {
			setProductsSwiper,
			pr_slider_options,
		}
	}
}
		
</script>
