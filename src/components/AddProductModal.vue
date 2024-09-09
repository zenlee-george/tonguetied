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
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: "Products",
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      selectedPriceRange: '',
    };
  },
  computed: {
    ...mapState(['products', 'categories', 'loading']),
    ...mapGetters(['allProducts', 'allCategories']),
    filteredProducts() {
      let filtered = this.allProducts;

      if (this.searchQuery) {
        filtered = filtered.filter(product => 
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }

      if (this.selectedCategory) {
        filtered = filtered.filter(product => product.category === this.selectedCategory);
      }

      if (this.selectedPriceRange === 'low') {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (this.selectedPriceRange === 'high') {
        filtered = filtered.sort((a, b) => b.price - a.price);
      }

      return filtered;
    }
  },
  methods: {
    ...mapActions(['fetchProducts']),
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>

  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 12;
  }
  
  .modal-content {
    background: #fff;
    border-radius: 8px;
    padding: 2rem;
    max-width: 600px;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .modal-header .close {
    background: none;
    border: none;
    font-size: 1.5rem;
  }
  
  .modal-body {
    margin-top: 1rem;
  }
  </style>
  