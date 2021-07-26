export default {
	state: {
		delivery: {
			method: "",
			address: "",
		},
		payment: {
			method: "",
		},
		user_info: {
			first_name: "",
			phone: "",	
		}
	},
	mutations: {
		setCheckoutDeliveryMethod(state, delivery_method) {
			state.delivery.method = delivery_method
		},
		setCheckoutPaymentMethod(state, payment_method) {
			state.payment.method = payment_method
		},
		setCheckoutUserName(state, user_name) {
			state.user_info.first_name = user_name
		},
		setCheckoutUserPhone(state, user_phone) {
			state.user_info.phone = user_phone
		}
		
	},
	actions: {
	}
}
