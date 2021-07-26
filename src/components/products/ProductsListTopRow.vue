<template>
	<div
	class="flex items-center justify-between px-2 border-4 border-red-300"
	>
		<div>
			test content
		</div>
		<div>
			<button
			@click="makeList"
			>
				<Icon
					:class="[isActive('list') ? 'text-blue-600 bg-blue-200':'text-gray-400 bg-gray-200',
					'rounded p-1 transition mr-1']"
					icon="ant-design:unordered-list-outlined"
					width="30"
					height="30"
				/>
			</button>
			<button
			@click="makeGrid"
			>
			<Icon
				:class="[isActive('grid') ? 'text-blue-600 bg-blue-200':'text-gray-400 bg-gray-200',
				'rounded p-1 transition']"
				icon="heroicons-solid:view-grid"
				width="30"
				height="30"
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
