<template>
  <div class="product-detail" v-if="!loading">
    <div class="product-content">
      <h1>{{ product.prodName }}</h1>
      <p>{{ product.description }}</p>
      <div class="product-meta">
        <span class="product-price">{{ product.amount || currency }}</span>
        <img :src="product.prodUrl" alt="Product Image" class="product-image" />
      </div>
    </div>
  </div>
  <div class="spinner" v-if="loading">
    <img src="https://zenlee-george.github.io/hostedimages/Loader.png" alt="Spinning Tie" class="spinner-image" />
  </div>
</template>



<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const apiURL = 'https://tonguetied.onrender.com/products';

export default {
  name: "ProductDetail",
  setup() {
    const route = useRoute();
    const products = ref([]);
    const product = ref({});
    const loading = ref(true);
    const currency = "R";

    const fetchProducts = async () => {
      try {
        loading.value = true;
        const response = await axios.get(apiURL);
        products.value = response.data;
        // Filter for the specific product using the ID from the route
        product.value = products.value.find(p => p.prodID === parseInt(route.params.prodID));
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchProducts);

    return {
      product,
      loading,
      currency
    };
  },
};
</script>


<style scoped>
.product-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ADEBFF; /* Consistent light sky blue background */
  padding: 20px;
}

.product-content {
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}

.product-detail h1 {
  color: #333366; /* Dark blue for the title */
  margin-bottom: 0.5rem;
}

.product-meta {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 2rem;
}

.product-price {
  background-color: #F39C12; /* Gold color for price */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-weight: bold;
}

.product-image {
  max-width: 50%;
  border-radius: 10px;
}

/* Spinner styles for loading state */
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.spinner-image {
  width: 100px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
