import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import { store }  from './store.js'
import { createWebHashHistory, createRouter} from 'vue-router'
import { routes } from './routes.js';
// import equal library
// equal docs site: https://quatrochan.github.io/Equal/start
import Equal from 'equal-vue'
import 'equal-vue/dist/style.css'
// import iconify library
// iconify docs https://docs.iconify.design/icon-components/vue/index.html
import { Icon } from '@iconify/vue';
// element plus import 
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App)

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	scrollBehavior (to, from, savedPosition) {
	console.log(to,  from , savedPosition)
		return { top: 0 }
		// return desired position
	}
})

app.use(store)
app.use(router)
app.use(Equal)
app.use(Icon)
app.use(ElementPlus)
app.use(VueLazyLoad)

app.mount('#app')
