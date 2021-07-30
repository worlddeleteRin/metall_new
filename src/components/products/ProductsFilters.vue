<template>
<div class="flex flex-col">
	<span 
	v-for="filter_attr in filters"
	:key="filter_attr.attribute.slug"
	>
		{{ filter_attr.attribute[0].label }}

		<el-select v-model="value" 
		placeholder="Select">
			<el-option
				v-for="filter_value in filter_attr.attribute_values"
				:key="filter_value.slug"
				:label="filter_value.label"
				:value="filter_value.slug">
			</el-option>
		</el-select>

	</span>
</div>
</template>

<script>
export default {
	name: "ProductsFilters",
	props: {
		filters: Array,
	},
	data () {
		return {
			active_filters: {},
		}
	}
}
</script>
