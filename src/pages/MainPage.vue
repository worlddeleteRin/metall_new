<template>
 <div>
  <MainSlider />
  <products-list/>
 </div>
</template>

<script>
 import MainSlider from '../components/MainSlider.vue';
 import ProductsList from '../components/products/ProductsList.vue';
export default {
  name: 'MainPage',
  props: {
  },
  components: {
		ProductsList,
		MainSlider,
  },
  async mounted () {
	console.log('it is mounted')
  },
  data () {
	return {
	}
  },
  computed: {
  },
  methods: {
  },
}
</script>

