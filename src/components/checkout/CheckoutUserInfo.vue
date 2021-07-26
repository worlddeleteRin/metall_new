<template>
<div>
	<div class="font-semibold text-md">
		Контактные данные
	</div>

	<div class="px-4 py-4 mt-3 bg-white rounded-md">
		<!-- input name block -->
		<div class="flex items-center border-blue-500 bg-blue-50 rounded-md">
			<Icon
			icon="ant-design:user-outlined"
			height="25"
			class="w-1/12 ml-2"
			/>
			<input
			v-model="user_name_local"
			class="w-11/12 h-full py-4 ml-1 mr-4 bg-transparent rounded-lg outline-none text-normal"	
			placeholder="Ваше Имя"
			/>
		</div>
		<!-- eof input name block -->
		<!-- input phone block -->
		<div class="flex items-center mt-3 border-blue-500 bg-blue-50 rounded-md">
			<Icon
			icon="bi:phone"
			height="25"
			class="w-1/12 ml-2"
			/>
			<input
			v-model="user_phone_local"
			class="w-11/12 h-full py-4 ml-1 mr-4 bg-transparent rounded-lg outline-none text-normal"	
			placeholder="Ваш номер телефона"
			/>
		</div>
		<!-- eof input phone block -->

	</div>
	

</div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
	name: "CheckoutUserInfo",
	components: {
		Icon,
	},
	props: {
		user_name: String,
		user_phone: String,
	},
	computed: {
		user_name_local: {
			get () {return this.user_name},
			set (value) {this.$emit('update:user_name', value)},
		},
		user_phone_local: {
			get () {return this.user_phone},
			set (value) {this.$emit('update:user_phone', value)},
		}
	}
}
</script>
