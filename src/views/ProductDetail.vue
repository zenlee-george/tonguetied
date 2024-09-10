<template>
  <div class="product-detail" v-if="!loading">
    <h1>{{ product.prodName }}</h1>
    <p>{{ product.description }}</p>
    <p>{{ product.amount || currency }}</p>
    <img :src="product.prodUrl" alt="Product Image" class="product-image" />
  </div>
  <div class="spinner" v-if="loading">
        <img src="https://zenlee-george.github.io/hostedimages/Loader.png" alt="Spinning Tie" class="spinner-image" />
      </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

export default {
  name: "ProductDetail",
  setup() {
    const route = useRoute();
    const product = ref({});
    const loading = ref(true);
    const currency = "R"; 

    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://tonguetied.onrender.com/products/${route.params.id}`);
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
      currency
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

.product-image {
  max-width: 100%;
  height: auto;
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


</style>
