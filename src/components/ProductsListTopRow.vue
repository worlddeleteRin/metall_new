<template>
	<div
	class="flex justify-between border-4 border-red-300"
	>
		<div>
			test content
		</div>
		<div>
			<button
			@click="makeList"
			>
				<Icon
					icon="ic:round-view-list"
					width="25"
					height="25"
					:color="isActive('list') ? 'black':'#a3a3a3'"
				/>
			</button>
			<button
			@click="makeGrid"
			>
			<Icon
				icon="heroicons-solid:view-grid"
				width="25"
				height="25"
				:color="isActive('grid') ? 'black':'#a3a3a3'"
			/>
		</button>
		</div>
	</div>
</template>

<script>

import { Icon } from '@iconify/vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

	
export default {
	name: "ProductsListTopRow",
	components: {
		Icon,
	},
	setup () {
		const store = useStore()
		const products_layout = computed(() => store.state.ecommerce.config.products_layout)
		function makeList() {
			console.log('button make list is pressed')
			store.commit('setProductsLayout', "list")
		}
		function makeGrid() {
			console.log('make grid button pressed')
			store.commit('setProductsLayout', "grid")
		}
		function isActive(layout_value) {
			if (products_layout.value == layout_value) {
				return true
			}
			return false
		}
		return {
			products_layout,
			makeList,
			makeGrid,
			isActive,
		}
	}
}
</script>
