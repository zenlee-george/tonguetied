<template>
  <div class="products-page">
    <!-- Parallax Section -->
    <div class="parallax-section">
      <div class="parallax-content">
        <h1 class="text-center">Our Products</h1>
        <p class="text-center">Explore our wide range of ties</p>
      </div>
    </div>

    <!-- Filters Section -->
    <div class="container filters-section">
      <div class="filters">
        <input v-model="searchQuery" class="form-control search-input" placeholder="Search for ties..." />
        
        <select v-model="selectedCategory" class="form-select category-select">
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category">{{ category }}</option>
        </select>
        
        <select v-model="selectedPriceRange" class="form-select price-select">
          <option value="">All Prices</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div class="spinner" v-if="loading">Loading...</div>

      <!-- Products Section -->
      <div v-else class="product-list row">
        <div v-for="product in filteredProducts" :key="product.id" class="col-md-4 mb-4">
          <div class="product-item">
            <router-link :to="`/products/${product.id}`">
              <img :src="product.image" alt="Product Image" class="product-image" />
              <h5>{{ product.name }}</h5>
            </router-link>
            <p class="product-price">{{ product.price | currency }}</p>
            <p class="product-category">{{ product.category }}</p>
          </div>
        </div>
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
    const apiURL = 'https://tonguetied.onrender.com/';
    const products = ref([]);
    const loading = ref(true);
    const searchQuery = ref('');
    const selectedCategory = ref('');
    const selectedPriceRange = ref('');

    const categories = ref(['Formal', 'Casual', 'Silk', 'Cotton']); // Could fetch from API

    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiURL}products`);
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
/* Parallax Section */
.parallax-section {
  background: url('https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
}

.parallax-content {
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  text-align: center;
  border-radius: 10px;
}

.products-page {
  background-color: #f5f5f5;
}

/* Filters Section */
.filters-section {
  padding: 3rem 1rem;
  background-color: #ffffff;
  margin-top: -2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.filters {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.form-control, .form-select {
  padding: 0.75rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 30%;
}

.search-input {
  flex-grow: 1;
  margin-right: 1rem;
}

/* Products List */
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.product-item {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.product-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.product-price {
  color: #F39C12;
  font-weight: bold;
}

.product-category {
  color: #7F8C8D;
}
</style>
