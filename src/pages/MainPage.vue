<template>
 <div>
  <MainSlider />

 </div>
</template>

<script>
 import MainSlider from '../components/MainSlider.vue';
 // testing 

export default {
	name: 'MainPage',
	props: {
	},
	components: {
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

