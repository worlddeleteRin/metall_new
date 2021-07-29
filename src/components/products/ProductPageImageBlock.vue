<template>
<div class="">
	<div
		class="md:h-80 max-h-max"
	>
	<swiper
		class="w-full h-full border-4 border-green-500"
		@slideChange="thumbSlideChange"
		:thumbs="{ swiper: thumbsSwiper }"
	>
		<swiper-slide
		v-for="img in product.imgsrc"
		:key="img"
		>
			<img :src="img" 
			class="object-contain w-full h-full"
			/>
		</swiper-slide>
	</swiper>
	</div>

	<div class="">
	<swiper
	class="mt-1 border-2 border-red-800 max-w-max h-2/12"
	@swiper="setThumbsSwiper"
	:slidesPerView="4"
	:watchSlidesVisibility="true"
	:watchSlidesProgress="true"
	>
		<swiper-slide
		:class="[i - 1 == current_thumb_active ? 'border-2':'border-none',
		'max-w-max border-blue-700 rounded px-1 select-none']"
		v-for="img in product.imgsrc"
		:key="img"
		>
			<img
			class="object-contain w-10 h-10"
			:src="img" />
		</swiper-slide>
	</swiper>
	</div>
</div>

</template>
<script>
	import { ref } from 'vue';
// 	Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import SwiperCore, { Thumbs } from 'swiper/core';

  // Import Swiper styles
  import 'swiper/swiper-bundle.css';
  import 'swiper/components/pagination/pagination.min.css';

  SwiperCore.use([ Thumbs ]);
	
  export default {
	name: "ProductPageImageBlock",
    components: {
      Swiper,
      SwiperSlide,
    },
	props: {
		product: {},
	},
	setup () {
	var thumbsSwiper = ref("");
	var current_thumb_active = ref(0);
	const image_link = "https://i.picsum.photos/id/327/3000/1000.jpg?hmac=d-I4g8YRcIHrw8HddDaXwlOHMneSvqMLXQpTbSVbjOI"

    function onSwiper(swiper) {
        console.log(swiper);
	}
	function onSlideChange() {
        console.log('slide change');
	}
	function setThumbsSwiper(swiper) {
		thumbsSwiper.value = swiper;
	}
	function thumbSlideChange(slider) {
		console.log('event is', slider.activeIndex)
		current_thumb_active.value = slider.activeIndex
	}
//	function isThumbActive(slider_index) {
//		const is_active = thumbsSwiper.value.activeIndex == slider_index
//		console.log('is active is', is_active)
//		console.log(thumbsSwiper.value.activeIndex, slider_index)
//		return is_active
//	}

		return {
			thumbsSwiper,
			image_link,
			onSwiper,
			onSlideChange,
			setThumbsSwiper,
			current_thumb_active,
			thumbSlideChange,
		}
	},
  };
</script>

