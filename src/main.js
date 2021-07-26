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

const app = createApp(App)

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

app.use(store)
app.use(router)
app.use(Equal)
app.use(Icon)
app.use(ElementPlus)

app.mount('#app')
