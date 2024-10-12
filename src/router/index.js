import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import ProductsListPage from '@/views/ProductList.vue';
import ProductDetails from '@/views/ProductDetails.vue';
import CartPage from '@/views/CartPage.vue';
import CheckoutPage from '@/views/CheckoutPage.vue';
import SignupPage from '@/views/SignupPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import AdminDashboard from '@/views/AdminDasboard.vue';

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/products', component: ProductsListPage },
    { path: '/ProductDetails', component: ProductDetails },
    { path: '/cart', component: CartPage },
    { path: '/checkout', component: CheckoutPage },
    { path: '/signup', component: SignupPage },
    { path: '/login', component: LoginPage },
    { path: '/admin', component: AdminDashboard }
  ]
});

export default router;
