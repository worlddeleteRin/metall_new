<template>
  <swiper
	:centeredSlides="'true'"
    :slides-per-view="1"
    :space-between="0"
	:pagination=" { clickable: true} "
    @swiper="onSwiper"
    @slideChange="onSlideChange"
	class="w-4/5 max-w-screen-xl"
  >

    <swiper-slide
	:centeredSlides="true"
	class="flex justify-center text-center border-4"
	style=""
	v-for="i in 10"
	:key="i"
	>
		<img 
		class="object-cover w-full border-8 border-red-900 max-h-80"
		:src="image_link"/>
	</swiper-slide>

  </swiper>

</template>
<script>
// 	Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import SwiperCore, { Pagination } from 'swiper';

  // Import Swiper styles
  import 'swiper/swiper-bundle.css';
  import 'swiper/components/pagination/pagination.min.css';

  SwiperCore.use([ Pagination ]);
	
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
	data () {
		return {
			image_link: "https://i.picsum.photos/id/327/3000/1000.jpg?hmac=d-I4g8YRcIHrw8HddDaXwlOHMneSvqMLXQpTbSVbjOI",
		}
	},
    methods: {
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
      },
    },
  };
</script>

