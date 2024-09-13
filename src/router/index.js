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
import ManageUsers from '@/views/ManageUsers.vue';
import ManageProducts from '@/views/ManageProducts.vue';
import ViewAnalytics from '@/views/ViewAnalytics.vue';
import store from '@/store';
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/products', component: Products },
  { path: '/products/:prodID', component: ProductDetail, props: true },
  { path: '/admin', component: Admin,beforeEnter: (to, from, next) => {
    const userID = store.state.userID; // Assuming userRole is stored in Vuex
    if (userID === 21) {
      next(); // Allow access
    } else {
      next('/'); // Redirect to home or any other page
    }
  } },
  { path: '/cart', component: Cart },
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/admin/manage-users', component: ManageUsers },
  { path: '/admin/manage-products', component: ManageProducts },
  { path: '/admin/view-analytics', component: ViewAnalytics }
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
