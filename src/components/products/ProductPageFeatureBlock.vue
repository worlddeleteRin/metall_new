<template>
	<div class="mt-4">
		<el-collapse
		v-model="activeFeatures"
		>
			<el-collapse-item
				title="Описание"
				name="1"
			>
				{{ description }} 
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
	setup () {
	const activeFeatures = ["1"]
	const description = "Новинка Pioneer - ручной пылесос повышенной мощности с циклонной системой сбора пыли и грязи.	Модель имеет модификацию 2 в 1, которая сочетает в себе: компактный и функциональный вертикальный и ручной пылесос.	Наш пылесос станет вашим незаменимым помощником дома и на даче, с ним вы легко и быстро наведете порядок.	В комплект входит:	- поворотная щетка для пола (180°), ей очень легко управлять, очищая самые укромные уголки в помещении, подходит для уборки твердой поверхности пола или ковра. Размеры - 25х14 см;"
	const features = "product features will be here"
		return {
			activeFeatures,
			description,
			features,
		}
	}
}
</script>
