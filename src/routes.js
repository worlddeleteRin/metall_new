import MainPage from './pages/MainPage.vue';
import CartPage from './pages/CartPage.vue';
import CheckoutPage from './pages/CheckoutPage.vue';
import ProfilePage from './pages/ProfilePage.vue';
import BaseProductPage from './pages/BaseProductPage.vue';
import OrderCreatedPage from './pages/OrderCreatedPage.vue'; 

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
		path: '/checkout',
		component: CheckoutPage,
	},
	{
		path: '/profile',
		component: ProfilePage,
	},
]
const secondary_pages = [
	{
		path: '/order_created',
		name: "order_created",
		component: OrderCreatedPage,
	}
]
const dynamic_routes = [
	{
		path: '/product/:id',
		component: BaseProductPage,
	},
]

export const routes = []
routes.push(...main_pages)
routes.push(...secondary_pages)
routes.push(...dynamic_routes)



