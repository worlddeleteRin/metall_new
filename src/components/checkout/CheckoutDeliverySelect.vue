<template>

<div class="">

	<div class="mb-3 font-semibold text-md">
		Выберите способ доставки
	</div>

	<div>
		<label 
		v-for="delivery in delivery_methods"
		:key="delivery.id"
		class="block px-5 py-5 my-2 bg-white cursor-pointer rounded-md"
		>

			<it-radio
			type="primary"	
			v-model="delivery_local"
			:value="delivery.slug"
			pulse
			>
				{{ delivery.label }}	
			</it-radio>
		</label>
	</div>

</div>
</template>

<script>
 // import { ref, watch } from 'vue';

export default {
	name: "CheckoutDeliverySelect",
	components: {
	},
	props: {
		delivery: String,
	},
	data () {
		return {
			delivery_methods: [
				{
					"id": 1,
					"slug": "courier",
					"label": "Доставка курьером"
				},
				{
					"id": 2,
					"slug": "pickup",
					"label": "Самовывоз"
				},
			],
		}
	},
	computed: {
		delivery_local: {
			get () { return this.delivery },
			set (value) { this.$emit('update:delivery', value)},
		},
	},
	methods: {
		setCurrentDelivery(e) {
			this.$emit('update:delivery', e)	
		}
	},
}
</script>
