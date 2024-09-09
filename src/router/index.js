import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Products from '../views/Products.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Admin from '../views/Admin.vue';
import Cart from '../views/Cart.vue';
import Contact from '../views/Contact.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/products', component: Products },
  { path: '/products/:id', component: ProductDetail, props: true },
  { path: '/admin', component: Admin },
  { path: '/cart', component: Cart },
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    return { top: 0 };
  }
});

export default router;
