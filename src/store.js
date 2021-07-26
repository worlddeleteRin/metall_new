import { createStore } from 'vuex'
import theme from './modules/theme'
import ecommerce from './modules/ecommerce'
import checkout from './modules/checkout'
import products from './modules/products'

export const store = createStore({
	modules: {
		theme,
		ecommerce,
		checkout,
		products,
	}
})
