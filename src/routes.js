import MainPage from './pages/MainPage.vue';
import CartPage from './pages/CartPage.vue';
import ProfilePage from './pages/ProfilePage.vue';

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

export const routes = []
routes.push(...main_pages)



