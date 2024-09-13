import { createStore } from 'vuex';
import axios from 'axios';
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies();
const apiURL = 'https://tonguetied.onrender.com/';

export default createStore({
  state: {
    products: null,
    categories: null,
    loading: false,
    error: null,
    token: cookies.get('authToken') || null,
    userID: null
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
      cookies.set('authToken', token, '1d');
    },
    SET_USER_ID(state, userID) {
      state.userID = userID;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      commit('SET_LOADING', true);
      try {
        const response = await axios.get(`${apiURL}products`);
        const products = response.data.result;
        commit('SET_PRODUCTS', products);
        
        // Extract unique categories from the products
        const categories = [...new Set(products.map(product => product.category))];
        commit('SET_CATEGORIES', categories);
      } catch (error) {
        commit('SET_ERROR', error.message);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async login({ commit }, { emailAdd, password }) {
      try {
        const response = await axios.post(`${apiURL}users/login`, { emailAdd, password });
        const { token, userID } = response.data;
        if (token) {
          commit('SET_TOKEN', token);
          commit('SET_USER_ID', userID);
          cookies.set('authToken', token, '1d');
        }
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    }
  },
  getters: {
    allProducts: state => state.products,
    allCategories: state => state.categories,
    isLoading: state => state.loading,
    hasError: state => state.error,
    token: state => state.token,
    userID: state => state.userID
  }
});
