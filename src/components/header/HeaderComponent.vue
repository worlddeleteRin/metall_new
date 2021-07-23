<template>
  <Popover open="true" class="relative mx-auto bg-whitem max-w-screen-xl">
    <div class="px-4 mx-auto max-w-sceen-xl sm:px-6">
      <div class="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-around md:space-x-10">
		<!-- Mobile menu start -->
		<div class="-my-2 -mr-2 md:hidden">
          <PopoverButton class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open menu</span>
            <MenuIcon class="w-6 h-6" aria-hidden="true" />
          </PopoverButton>
        </div>
		
        <div class="flex justify-start">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img class="w-auto h-8 sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
          </a>
        </div>
		
		<span class="inline-flex md:hidden">
		<it-badge
		value="3"
		type="success"
		>
			<Icon 
			class="cursor-pointer h-7"
			icon="akar-icons:shopping-bag"
			width="25"
			height="25"	
			color="black"
			/>
		</it-badge>
		</span>
		<!-- Mobile header menu content end -->
       
        <PopoverGroup as="nav" class="hidden md:flex space-x-2">

			<HeaderLink
			:link_name="'Главная'"
			:link_to="'/'"
			:is_active="false"
			/>
			<HeaderLink
			:link_name="'Каталог'"
			:link_to="'/catalogue'"
			:is_active="false"
			/>
			<HeaderLink
			:link_name="'Контакты'"
			:link_to="'/contacts'"
			:is_active="false"
			/>

			<Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">

			<HeaderLink
			:link_name="'О Нас'"
			:link_to="'/'"
			:is_active="false"
			/>

              <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute z-10 w-screen max-w-md px-2 mt-3 left-1/2 transform -translate-x-1/2 sm:px-0">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative px-5 py-6 bg-white grid gap-6 sm:gap-8 sm:p-8">
                    <a v-for="item in resources" :key="item.name" :href="item.href" class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                      <component :is="item.icon" class="flex-shrink-0 w-6 h-6 text-indigo-600" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>
        <!-- <div class="items-center justify-end hidden md:flex">
			<button 
			class="px-3 py-2 tracking-wide text-white bg-blue-500 rounded hover:bg-blue-700 transition duration-100"
			> 
			Оставить заявку	
			</button>
        </div> -->
		<header-search-input />

		<div class="hidden md:flex">
			<router-link :to="'/cart'"
			class="w-10">
				<it-badge value="3" type="success">
					<Icon 
					class="cursor-pointer"
					icon="clarity:shopping-bag-line"
					width="30"
					height="30"	
					color="black"
					/>
				</it-badge>
			</router-link>
			<router-link 
			:to="'/profile'"
			class="w-10">
				<Icon 
				class="cursor-pointer"
				icon="iconoir:profile-circled"
				width="30"
				height="30"	
				color="black"
				/>
			</router-link>
		</div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute inset-x-0 top-0 z-50 p-2 border-4 border-red-200 transition transform origin-top-right md:hidden">
        <div class="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img class="w-auto h-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <XIcon class="w-6 h-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a v-for="item in solutions" :key="item.name" :href="item.href" class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                  <component :is="item.icon" class="flex-shrink-0 w-6 h-6 text-indigo-600" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Icon } from '@iconify/vue';
import HeaderLink from './HeaderLink.vue';
import HeaderSearchInput from './HeaderSearchInput.vue';
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
	ShoppingBagIcon,
	ShoppingCartIcon,
	UserCircleIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon, 

} from '@heroicons/vue/solid'
// google material icons import 

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
]

const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

export default {
	name: "HeaderComponent",
  components: {
  // custom components,
	HeaderSearchInput,
  // icons here
	Icon,
	HeaderLink,
	ShoppingBagIcon,
	ShoppingCartIcon,
	UserCircleIcon,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      solutions,
      resources,
      recentPosts,
    }
  },
}
</script>
