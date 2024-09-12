import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useCookies } from 'vue3-cookies';

const {cookies} = useCookies();
const apiURL = 'https://tonguetied.onrender.com/'

export default createStore({
  state: {
    products: null,
    product: null,
    categories:null,
    loading: false,
    error: null,
    token: cookies.get('authToken') || null,
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_LOADING(state, isLoading) {
      state.loading = isLoading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_TOKEN(state, token) {
      state.token = token;
      cookies.set('authToken', token, '1d')
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('SET_LOADING', true);
      try {
        const response = await axios.get(`${apiURL}products`);
        commit('SET_PRODUCTS', response.data.result);

     // Extract unique categories from the products
     const categories = [...new Set(products.map(product => product.category))];
     commit('SET_PRODUCTS', products);
     commit('SET_CATEGORIES', categories);
   } catch (error) {
     commit('SET_ERROR', error.message);
   } finally {
     commit('SET_LOADING', false);
   }
 },
},
  getters: {
    allProducts: state => state.products,
    allCategories: state => state.categories,
    isLoading: state => state.loading,
    hasError: state => state.error,
  }
});
