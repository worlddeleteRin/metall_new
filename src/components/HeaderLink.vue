<template>

		<router-link :to="link_to">
	<span :class="[is_active ? 'bg-indigo-400': 'bg-none', 'bg-none group inline-block px-5 py-1 hover:bg-blue-700 rounded-full shadow transition duration-500']">
			<span :class="[is_active ? 'text-white' : 'text-black', 'text-xs font-medium text-center group-hover:text-white uppercase hover:shadow-lg focus:outline-none transition duration-150']">
			{{ link_name }}
			</span>
	</span>
	</router-link>
</template>


<script>
export default {
	name: "HeaderLink", 
	props: ["link_name", "link_to", "is_active"],
}
</script>
