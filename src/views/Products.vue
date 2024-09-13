<template>
  <div class="products-page">
    <!-- Parallax Section -->
    <div class="parallax-section">
      <div class="parallax-content">
        <h1 class="text-center">Our Fun & Stylish Ties</h1>
        <p class="text-center">Find a tie to match your playful spirit</p>
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

      <!-- Spinner Section -->
      <div class="spinner" v-if="loading">
        <img src="https://zenlee-george.github.io/hostedimages/Loader.png" alt="Spinning Tie" class="spinner-image" />
      </div>

      <!-- Products Section -->
      <div v-else class="product-list">
        <div v-for="(product) in filteredProducts" :key="product.prodID" class="product-item-wrapper">
          <div class="product-item">
            <router-link :to="`/products/${product.prodID}`" class="product-link">
              <img :src="product.prodUrl" alt="Product Image" class="product-image" />
              <h5>{{ product.prodName }}</h5>
            </router-link>
            <p class="product-price">R {{ currency && product.amount  }}</p>
            <p class="product-category">{{ product.category }}</p>

            <!-- View More Button -->
            <router-link :to="`/products/${product.prodID}`" class="view-more-btn">
              View Details
            </router-link>
            
            <!-- Show/Hide Description Button -->
            <button class="show-description-btn" @click="toggleDescription(product.prodID)">
              {{ product.showDescription ? 'Hide Description' : 'Show Description' }}
            </button>

            <!-- Product Description -->
            <p v-if="product.showDescription" class="product-description">
              {{ product.description }}
            </p>

            <!-- Add to Cart Button -->
            <button class="add-to-cart-btn" @click="addToCart(product)">
              Add to Cart
            </button>
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
    const categories = ref([]);
    const cart = ref([]);
    const currency = "R";

    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiURL}products`);
        products.value = response.data;
        categories.value = [...new Set(products.value.map(product => product.category))];
        // Initialize showDescription state for each product
        products.value.forEach(product => {
          product.showDescription = false;
        });
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
          product.prodName.toLowerCase().includes(searchQuery.value.toLowerCase()));
      }
      if (selectedCategory.value) {
        filtered = filtered.filter(product => product.category === selectedCategory.value);
      }
      if (selectedPriceRange.value === 'low') {
        filtered = filtered.sort((a, b) => a.amount - b.amount);
      } else if (selectedPriceRange.value === 'high') {
        filtered = filtered.sort((a, b) => b.amount - a.amount);
      }
      return filtered;
    });

    const addToCart = (product) => {
      const existingProduct = cart.value.find(item => item.prodID === product.prodID);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.value.push({ ...product, quantity: 1 });
      }
      
      // Save cart to local storage
      localStorage.setItem('cart', JSON.stringify(cart.value));
      
      // Debugging: Check cart content in console
      console.log("Cart contents:", cart.value);
    };

    const toggleDescription = (prodID) => {
      const product = products.value.find(p => p.prodID === prodID);
      if (product) {
        product.showDescription = !product.showDescription;
      }
    };

    onMounted(() => {
      fetchProducts();

      // Load cart from local storage
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        cart.value = JSON.parse(savedCart);
      }
    });

    return {
      products,
      loading,
      searchQuery,
      selectedCategory,
      selectedPriceRange,
      filteredProducts,
      categories,
      currency,
      addToCart,
      toggleDescription,
    };
  }
};
</script>

<style scoped>
/* Parallax Section */
.parallax-section {
  background: url('https://zenlee-george.github.io/hostedimages/products.png') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  z-index: 12Z;
}

.parallax-content {
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  text-align: center;
  border-radius: 20px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
}

/* Products Page Styling */
.products-page {
  background-color: #FFEBF0;
  font-family: 'Irish Grover', cursive;
}

/* Filters Section */
.filters-section {
  padding: 3rem 1rem;
  background-color: #ffffff;
  margin-top: -2rem;
  border-radius: 20px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.filters {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.form-control, .form-select {
  padding: 0.75rem;
  border-radius: 10px;
  border: 2px solid #003459;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  width: 30%;
}

.search-input {
  flex-grow: 1;
  margin-right: 1rem;
}

/* Spinner */
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.spinner-image {
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;
}

/* Animation for spinning the tie */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Products List */
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.product-item-wrapper {
  flex: 1 1 calc(33.333% - 2rem);
  max-width: calc(33.333% - 2rem);
  display: flex;
  justify-content: center;
}

.product-item {
  background-color: #FFF4E3;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  transition: transform 0.4s ease-in-out, box-shadow 0.4s ease;
}

.product-item:hover {
  transform: translateY(-10px) rotate(-3deg);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 15px;
  margin-bottom: 1rem;
  transition: transform 0.4s ease-in-out;
}

.product-item:hover .product-image {
  transform: rotate(5deg) scale(1.05);
}

.product-price {
  color: #F39C12;
  font-weight: bold;
  font-size: 1.2rem;
}

.product-category {
  color: #7F8C8D;
  font-style: italic;
}

/* Add to Cart Button */
.add-to-cart-btn {
  background-color: #003459; /* Dark Blue */
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: bold;
  margin-top: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  border: none;
  cursor: pointer;
}

.add-to-cart-btn:hover {
  background-color: #00171F; /* Darker Blue */
  transform: scale(1.05);
}

/* View More Button */
.view-more-btn {
  background-color: #FF8C00; /* Orange (for a standout color) */
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: bold;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.view-more-btn:hover {
  background-color: #FF6F00; /* Darker Orange */
  transform: scale(1.05);
}

.show-description-btn {
  background-color: #FFC107; /* Yellow-Gold for visibility */
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-weight: bold;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.show-description-btn:hover {
  background-color: #FFA000; /* Darker Yellow-Gold */
  transform: scale(1.05);
}

/* Product Description */
.product-description {
  margin-top: 1rem;
  color: #333;
}
</style>
