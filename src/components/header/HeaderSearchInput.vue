<template>
	<div class="relative items-center hidden h-10 border-2 border-blue-600 rounded lg:flex group">
		<input
			placeholder="Поиск"
			v-model="input_value"
			class="w-full h-full ml-3 outline-none"
		/>
		<!-- CLEAR INPUT BUTTON -->
		<div 
		v-if="input_value.length > 0"
		@click="this.clickClearInput"
		class="p-1 mx-1 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
		>
			<Icon
				icon="ci:close-big"
			/>
		</div>
		<!-- EOF CLEAR INPUT BUTTON -->
		<div class="flex items-center justify-center h-full bg-blue-600 w-14">
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
