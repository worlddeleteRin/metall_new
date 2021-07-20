import { createStore } from 'vuex'
import theme from './modules/theme'
import ecommerce from './modules/ecommerce'

export const store = createStore({
	modules: {
		theme,
		ecommerce,
	}
})
