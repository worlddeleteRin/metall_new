<template>	
<!-- add favorite block -->
<div class="cursor-pointer"
>
	<Icon icon="carbon:trash-can"
	color="black"
	width="20"
	/>
</div>
<!-- eof add favorite block -->
</template>

<script>
import { Icon } from '@iconify/vue';
// import { ref } from 'vue';
export default {
	name: "CartProductItemAddFavorite",
	components: {
		Icon,
	},
	setup () {
		return {
		}
	}
}
</script>
