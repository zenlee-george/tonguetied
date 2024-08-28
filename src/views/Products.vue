<template>
    <div class="products">
      <h1>Our Products</h1>
      <input v-model="searchQuery" placeholder="Search for ties..." />
      <select v-model="selectedCategory">
        <option value="">All Categories</option>
        <option v-for="category in categories" :key="category">{{ category }}</option>
      </select>
      <select v-model="selectedPriceRange">
        <option value="">All Prices</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>
      <div class="spinner" v-if="loading">Loading...</div>
      <div v-else class="product-list">
        <div v-for="product in filteredProducts" :key="product.id" class="product-item">
          <router-link :to="`/products/${product.id}`">{{ product.name }}</router-link>
          <p>{{ product.price | currency }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, computed } from 'vue';
  import axios from 'axios';
  
  export default {
    name: "Products",
    setup() {
      const products = ref([]);
      const loading = ref(true);
      const searchQuery = ref('');
      const selectedCategory = ref('');
      const selectedPriceRange = ref('');
  
      const categories = ref(['Formal', 'Casual', 'Silk', 'Cotton']);
  
      const fetchProducts = async () => {
        try {
          const response = await axios.get('https://api.example.com/products');
          products.value = response.data;
        } catch (error) {
          console.error(error);
        } finally {
          loading.value = false;
        }
      };
  
      const filteredProducts = computed(() => {
        let filtered = products.value;
  
        if (searchQuery.value) {
          filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
        }
  
        if (selectedCategory.value) {
          filtered = filtered.filter(product => product.category === selectedCategory.value);
        }
  
        if (selectedPriceRange.value === 'low') {
          filtered = filtered.sort((a, b) => a.price - b.price);
        } else if (selectedPriceRange.value === 'high') {
          filtered = filtered.sort((a, b) => b.price - a.price);
        }
  
        return filtered;
      });
  
      onMounted(fetchProducts);
  
      return {
        products,
        loading,
        searchQuery,
        selectedCategory,
        selectedPriceRange,
        filteredProducts,
        categories
      };
    }
  };
  </script>
  
  <style scoped>
  .products {
    padding: 2rem;
    background-color: #ffffff;
  }
  
  .spinner {
    text-align: center;
  }
  
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .product-item {
    background-color: #f9f9f9;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: calc(33.333% - 2rem);
    box-sizing: border-box;
  }
  
  .product-item a {
    color: #333366;
    text-decoration: none;
  }
  </style>
  