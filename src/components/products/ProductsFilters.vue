<template>
<div class="flex flex-col">
 {{ active_filters_local }}
	<span 
	v-for="filter_attr in filters"
	:key="filter_attr.attribute.slug"
	>
		{{ filter_attr.attribute[0].label }}
		{{ active_filters_local.color }} 
		
		<el-select 
		v-model="active_filters_local.color" 
		multiple
		value-key="filter_attr.attribute.slug"
		placeholder="Select">
			<el-option
				v-for="filter_value in filter_attr.attribute_values"
				:key="filter_value.slug"
				:label="filter_value.slug"
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
		active_filters: {},
	},
	computed: {
		active_filters_local: {
			get () { return this.active_filters },
			set (item) { console.log('filter to set active', item) }
		}
	}
}
</script>
