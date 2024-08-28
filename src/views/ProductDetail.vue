<template>
    <div class="product-detail">
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>{{ product.price | currency }}</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default {
    name: "ProductDetail",
    setup(props) {
      const product = ref({});
      const loading = ref(true);
  
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`https://api.example.com/products/${props.id}`);
          product.value = response.data;
        } catch (error) {
          console.error(error);
        } finally {
          loading.value = false;
        }
      };
  
      onMounted(fetchProduct);
  
      return {
        product,
        loading,
      };
    },
  };
  </script>
  
  <style scoped>
  .product-detail {
    padding: 2rem;
    background-color: #ffffff;
  }
  
  .product-detail h1 {
    color: #333366;
  }
  </style>
  