<template>
 <div>
  <MainSlider />
 </div>
</template>

<script>
 import MainSlider from '../components/MainSlider.vue';
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
	theme_var () {
		return this.$store.state.theme.theme;
	},
  },
  methods: {
	
  },
}
</script>

