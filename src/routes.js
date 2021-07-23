import MainPage from './pages/MainPage.vue';
import CartPage from './pages/CartPage.vue';
import ProfilePage from './pages/ProfilePage.vue';
import BaseProductPage from './pages/BaseProductPage.vue';

const main_pages = [
	{
		path: '/',
		component: MainPage,
	},
	{
		path: '/cart',
		component: CartPage,
	},
	{
		path: '/profile',
		component: ProfilePage,
	},
]
const dynamic_routes = [
	{
		path: '/product/:id',
		component: BaseProductPage,
	},
]

export const routes = []
routes.push(...main_pages)
routes.push(...dynamic_routes)



