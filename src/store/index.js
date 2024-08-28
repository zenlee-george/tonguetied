import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      cart: [],
      user: null,
    };
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
    removeFromCart(state, product) {
      state.cart = state.cart.filter(item => item.id !== product.id);
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    login({ commit }, userCredentials) {
      // Simulate an API call
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockUser = { name: 'John Doe', email: userCredentials.email };
          commit('setUser', mockUser);
          resolve();
        }, 1000);
      });
    },
    logout({ commit }) {
      commit('setUser', null);
    },
    signup({ commit }, userInfo) {
      // Simulate user registration
      console.log('User registered:', userInfo);
    },
  },
});

export default store;
