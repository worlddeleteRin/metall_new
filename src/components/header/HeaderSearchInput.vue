<template>
	<div class="flex items-center h-10 relative group border-2 border-blue-600 rounded">
		<input
			placeholder="Search..."
			class="h-full w-full outline-none"
			v-model="input_value"
		/>
		<!-- CLEAR INPUT BUTTON -->
		<div 
		v-if="input_value.length > 0"
		@click="this.clickClearInput"
		class="bg-gray-200 rounded-full p-1 mx-1 hover:bg-gray-300"
		>
			<Icon
				icon="ci:close-big"
			/>
		</div>
		<!-- EOF CLEAR INPUT BUTTON -->
		<div class="bg-blue-600 h-full flex items-center justify-center w-14">
			<Icon icon="carbon:search"
			color="white"
			/>
		</div>
	</div>
</template>

<script>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

export default {
	name: "HeaderSearchInput",
	components: {
		Icon,
	},
	setup () {
		var input_value = ref("")
		
		function clickClearInput () {
			input_value.value = ""
		}
		return {
			// variables
			input_value,
			// functions
			clickClearInput,
		}
	}
}
</script>
