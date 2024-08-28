<template>
    <div class="cart">
      <h1>Your Cart</h1>
      <div v-if="cartItems.length">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <p>{{ item.name }}</p>
          <p>{{ item.price | currency }}</p>
          <button @click="removeFromCart(item)">Remove</button>
        </div>
        <h3>Total: {{ totalPrice | currency }}</h3>
      </div>
      <p v-else>Your cart is empty.</p>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    name: 'Cart',
    setup() {
      const store = useStore();
  
      const cartItems = computed(() => store.state.cart);
      const totalPrice = computed(() => {
        return cartItems.value.reduce((total, item) => total + item.price, 0);
      });
  
      const removeFromCart = (item) => {
        store.commit('removeFromCart', item);
      };
  
      return {
        cartItems,
        totalPrice,
        removeFromCart,
      };
    },
  };
  </script>
  
  <style scoped>
  .cart {
    padding: 2rem;
    background-color: #ffffff;
  }
  
  .cart-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  </style>
  