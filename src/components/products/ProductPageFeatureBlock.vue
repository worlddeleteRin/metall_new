<template>
	<div class="mt-4">
		<el-collapse
		v-model="activeFeatures"
		>
			<el-collapse-item
				title="Описание"
				name="1"
			>
				{{ product.description }} 
			</el-collapse-item>
			<el-collapse-item
				name="2"
				title="Характеристики"
			>
				{{ features }} 
			</el-collapse-item>
		</el-collapse>

	</div>
</template>

<script>
export default {
	name: "ProductPageFeatureBlock",
	props: {
		product: {},
	},
	setup () {
	const activeFeatures = ["1"]
	const features = "product features will be here"
		return {
			activeFeatures,
			features,
		}
	}
}
</script>
