import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import ProductsListPage from '@/views/ProductList.vue';
import ProductDetails from '@/views/ProductDetails.vue';

import CartPage from '@/views/CartPage.vue';
import CheckoutPage from '@/views/CheckoutPage.vue';
import SignupPage from '@/views/SignupPage.vue';
import LoginPage from '@/views/LoginPage.vue';



import AdminDashboard from '../components/AdminDasboard.vue';
import UsersManagement from '../components/UsersManagement.vue';
import ProductsManagement from '../components/ProductManagement.vue';
import CategoriesManagement from '../components/CategoriesManagement.vue';
import OrdersManagement from '../components/OrdersManagement.vue';

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LandingPage },
    
    { path: '/ProductsListPage', component: ProductsListPage },
    { path: '/ProductDetails/:id', component: ProductDetails, name: 'ProductDetails' },
    { path: '/ProductDetails', component: ProductDetails, name: 'ProductDetailsList' }, // Add this line for general product list

    { path: '/cart', component: CartPage },
    { path: '/checkout', component: CheckoutPage },
    { path: '/signup', component: SignupPage },
    { path: '/login', component: LoginPage },
    {
      path: '/admin',
      component: AdminDashboard,
      children: [
        { path: 'users', component: UsersManagement },
        { path: 'products', component: ProductsManagement },
        { path: 'categories', component: CategoriesManagement },
        { path: 'orders', component: OrdersManagement }
      ]
    }
  ]
});

export default router;