<template>
	
<div class="">
	<div class="mb-3 font-semibold text-md">
		Выберите способ оплаты
	</div>

	<label
	v-for="payment in payment_methods"
	:key="payment.id"
	class="block px-5 py-5 my-2 bg-white cursor-pointer rounded-md"
	>
		<it-radio
		type="primary"	
		v-model="payment_local"
		:value="payment.slug"
		pulse
		>
			{{ payment.label }}	
		</it-radio>
	</label>

</div>
</template>

<script>
export default {
	name: "CheckoutPaymentMethod",
	components: {
	},
	props: {
		payment: String,
	},
	data () {
		return {
			payment_methods: [
				{
					"id": 1,
					"slug": "payment_cash",
					"label": "Оплата наличными"
				},
				{
					"id": 2,
					"slug": "payment_card",
					"label": "Оплата картой курьеру"
				},
			]
		}
	},
	computed: {
		payment_local: {
			get () { return this.payment},
			set (value) { this.$emit('update:payment', value)},
		},
	},
}

</script>
