<template>
<div>
	<el-pagination
		background
		layout="prev, pager, next"
		v-model:currentPage="current_page_local"
		:total="pages_info.total_pages * 10">
	</el-pagination>

 </div>
</template>

<script>
export default {
	name: "ProductsListPagination",
	props: {
		pages_info: {},
	},
	computed: {
		current_page_local: {
			get () { return this.pages_info.current_page },
			set (new_page) {
				this.clickPageChange(new_page)
			}
		}
	},
	methods: {
		clickPageChange (new_page) {
			console.log('page is changed', new_page)
			this.$emit('pageChange', new_page)	
		}
	},
	setup () {

		return {
			// vars
			// functions
		}
	},
}
</script>
