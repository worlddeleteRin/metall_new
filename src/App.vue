<template>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined">
	<HeaderComponent />
  <!--<img alt="Vue logo" src="./assets/logo.png"> -->
	<div class="min-h-screen">
	<router-view :key="$route.fullPath"></router-view>
	</div>

	<BaseFooterComponent />
</template>

<script>
import HeaderComponent from './components/header/HeaderComponent.vue';
import BaseFooterComponent from './components/footer/BaseFooterComponent.vue';
export default {
  name: 'App',
  components: {
	HeaderComponent,
	BaseFooterComponent,
  },
  beforeMount() {
	this.$store.dispatch("initTheme");
  },
  computed: {
	currentTheme () {
		return this.$store.state.theme.theme
	}
  },
  watch: {
	currentTheme(newTheme) {
		newTheme === "light"
		? document.querySelector("html").classList.remove("dark")
		: document.querySelector("html").classList.add("dark")
	}
  },
}
</script>

