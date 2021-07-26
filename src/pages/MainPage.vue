<template>
 <div>
  <MainSlider />
  {{ catalogue_products }} 

  <products-list
	v-if="catalogue_products"
	:products="catalogue_products"	
  />
 </div>
</template>

<script>
 import MainSlider from '../components/MainSlider.vue';
 import ProductsList from '../components/products/ProductsList.vue';
 // testing 
import { getCatalogueProducts } from '../api/products.js';

export default {
	name: 'MainPage',
	props: {
	},
	async beforeMount () {
		var products = await getCatalogueProducts()	
		this.$store.commit('setCatalogueProducts', products)
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
		catalogue_products () {
			return this.$store.state.products.catalogue_products;	
		}
	},
	methods: {
		getCatalogueProducts,
	},
}
</script>

