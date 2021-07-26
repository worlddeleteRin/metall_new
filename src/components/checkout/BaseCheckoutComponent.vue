<template>
<div class="px-4 py-4 bg-gray-100">
	<div class="text-lg font-bold">
		Оформить заказ
	</div>
	dev method {{ delivery_method }}
	pay method {{ payment_method }} 
	user name {{ user_first_name }}
	user phone {{ user_phone }} 

	<div class="flex flex-col md:flex-row">

	
		<div class="md:w-7/12">
		<!-- checkout delivery method select -->
		<checkout-delivery-select
			:delivery="delivery_method"
			@update:delivery="setDeliveryMethod($event)"
		class="mt-5"
		/>
		<!-- eof checkout delivery method select -->

		<!-- checkout payment method select -->
		<checkout-payment-select
			:payment="payment_method"
			@update:payment="setPaymentMethod($event)"
		class="mt-3"
		/>
		<!-- eof checkout payment method select -->

		<checkout-user-info
		:user_phone="user_phone"
		:user_name="user_first_name"
		@update:user_phone="setUserPhone($event)"
		@update:user_name="setUserName($event)"
		class="mt-3"
		/>

		</div>

		<div class="md:w-5/12 md:ml-5">
		<checkout-summary
		@checkoutClicked="createOrder"
		class="mt-5 mb-3"
		/>
		</div>

	</div>

</div>
</template>

<script>
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'vuex';
// modules components
import { ElNotification } from 'element-plus';
// custom components
import CheckoutDeliverySelect from './CheckoutDeliverySelect.vue';
import CheckoutPaymentSelect from './CheckoutPaymentSelect.vue';
import CheckoutUserInfo from './CheckoutUserInfo.vue';
import CheckoutSummary from './CheckoutSummary.vue';

export default {
	name: "BaseCheckoutComponent",
	components: {
		CheckoutDeliverySelect,
		CheckoutPaymentSelect,
		CheckoutUserInfo,
		CheckoutSummary,
	},
	setup () {
		const store = useStore()
		const router = useRouter()
		// computed 
		let delivery_method = computed(() => store.state.checkout.delivery.method)
		let payment_method = computed(() => store.state.checkout.payment.method)
		let user_first_name = computed(() => store.state.checkout.user_info.first_name)
		let user_phone = computed(() => store.state.checkout.user_info.phone)
		// functions 
		function setDeliveryMethod(delivery_method) {
			store.commit('setCheckoutDeliveryMethod', delivery_method)
		}
		function setPaymentMethod(payment_method) {
			store.commit('setCheckoutPaymentMethod', payment_method)
		}
		function setUserName(name) {
			store.commit('setCheckoutUserName', name)
		}
		function setUserPhone(phone) {
			store.commit('setCheckoutUserPhone', phone)
		}

		function validateCheckoutInfo () {
			var result = {
				"success": false,
				"msg": "",
			}
			console.log('start validating', delivery_method.value, payment_method.value, user_first_name.value, user_phone.value) 	

			if (delivery_method.value.length === 0) {
				result.msg = "Выберите способ доставки"
				return result
			}
			if (payment_method.value.length === 0) {
				result.msg = "Выберите способ оплаты"
				return result
			}
			if (user_first_name.value.length === 0) {
				result.msg = "Укажите в контактных данных Ваше Имя"
				return result
			}
			if (user_phone.value.length === 0) {
				result.msg = "Укажите в контактных данных Ваш номер телефона"
				return result
			}
			result.success = true
			return result
		}
		function createOrder () {
			var result = validateCheckoutInfo()
			if (result.success) {
				router.push({name: "order_created"})
			} else {
				return ElNotification({
					type: 'error',
					position: 'top-right',
					title: 'Ошибка при создании заказа',
					message: result.msg,
				});
			}
		}

		return {
			// computed
			delivery_method,
			payment_method,
			user_first_name,
			user_phone,
			// functions
			setDeliveryMethod,
			setPaymentMethod,
			setUserName,
			setUserPhone,

			createOrder,
		}
	}
}
</script>
