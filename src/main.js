import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import { store }  from './store.js'
import { createWebHashHistory, createRouter} from 'vue-router'
import { routes } from './routes.js';

const app = createApp(App)

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

app.use(store)
app.use(router)

app.mount('#app')
