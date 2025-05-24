import { createRouter, createWebHistory } from 'vue-router';
import MenuPage from '@/views/MenuPage.vue';
import CartPage from '@/views/CartPage.vue';

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: MenuPage,
  },
  { path: '/cart', name: 'Cart', component: CartPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
