<template>
  <div class="home-page">
    <!-- Hero Section -->
    <div class="hero-section text-center py-5" data-aos="zoom-in">
      <h1 data-aos="fade-down" data-aos-duration="1000">Welcome to Tongue Tied</h1>
      <p data-aos="fade-up" data-aos-delay="200">Discover our stylish collection of ties</p>
    </div>

    <!-- Featured Products Section -->
    <div class="featured-products">
    <h2>Featured Products</h2>
    <div class="product-grid">
      <div v-for="product in featuredProducts" :key="product.prodID" class="product-card">
        <img :src="product.prodUrl" alt="Product Image" class="product-image">
        <div class="product-info">
          <h3>{{ product.prodName }}</h3>
          <p>{{ product.description }}</p>
          <span class="price">{{ product.amount }}</span>
          <button>View Product</button>
        </div>
      </div>
    </div>
  </div>

    <!-- Explore Our Collection Section -->
    <div class="explore-collection container my-5" data-aos="fade-up" data-aos-delay="400">
      <h2 class="text-center mb-4" data-aos="zoom-in">Explore Our Collection</h2>
      <div class="row">
        <div class="col-md-6 mb-4" data-aos="zoom-in-up">
          <div class="card">
            <div class="card-body text-center">
              <h5 class="card-title">Formal Ties</h5>
              <p class="card-text">Elevate your formal look with our range of ties</p>
              <a href="/products" class="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4" data-aos="zoom-in-up" data-aos-delay="200">
          <div class="card">
            <div class="card-body text-center">
              <h5 class="card-title">Casual Ties</h5>
              <p class="card-text">Stay stylish even on casual days</p>
              <a href="/products" class="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sign Up for Updates Section -->
    <div class="sign-up-section py-5" data-aos="zoom-in-up" data-aos-delay="200">
      <div class="container">
        <h2 class="text-center mb-4">Sign Up for Updates</h2>
        <div class="d-flex justify-content-center">
          <div class="col-md-6">
            <input type="email" class="form-control" placeholder="Enter your email" />
            <small class="form-text text-muted">We promise not to spam</small>
            <div class="text-center mt-3">
              <button class="btn btn-dark bounce-animation">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Customer Reviews Section -->
    <div class="customer-reviews container my-5" data-aos="zoom-in">
      <h2 class="text-center mb-4">Customer Reviews</h2>
      <div class="row g-3">
        <div class="col-md-4" data-aos="flip-left">
          <div class="review-card card text-center swing">
            <div class="review-avatar">
              <i class="fas fa-user-circle fa-5x"></i>
            </div>
            <div class="card-body">
              <h5 class="card-title">Anna</h5>
              <p class="card-text"><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i></p>
              <p class="card-text">Love the quality and variety of ties.</p>
            </div>
          </div>
        </div>

        <!-- Review 2 -->
        <div class="col-md-4">
          <div class="review-card card text-center playful-card swing">
            <div class="review-avatar">
              <i class="fas fa-user-circle fa-5x"></i>
            </div>
            <div class="card-body">
              <h5 class="card-title">Mike</h5>
              <p class="card-text">
                <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                <i class="fas fa-star"></i> <i class="fas fa-star"></i>
              </p>
              <p class="card-text">Great customer service and fast delivery.</p>
            </div>
          </div>
        </div>

        <!-- Review 3 -->
        <div class="col-md-4">
          <div class="review-card card text-center swing ">
            <div class="review-avatar">
              <i class="fas fa-user-circle fa-5x"></i>
            </div>
            <div class="card-body">
              <h5 class="card-title">Samantha</h5>
              <p class="card-text">
                <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                <i class="fas fa-star"></i> <i class="fas fa-star"></i>
              </p>
              <p class="card-text">Absolutely love the designs and fabric quality!</p>
            </div>
          </div>
        </div>

        <!-- Review 4 -->
        <div class="col-md-6">
          <div class="review-card card text-center playful-card swing">
            <div class="review-avatar">
              <i class="fas fa-user-circle fa-5x"></i>
            </div>
            <div class="card-body">
              <h5 class="card-title">John</h5>
              <p class="card-text">
                <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                <i class="fas fa-star"></i> <i class="fas fa-star"></i>
              </p>
              <p class="card-text">Fast shipping, and the tie fits perfectly.</p>
            </div>
          </div>
        </div>

        <!-- Review 5 -->
        <div class="col-md-6">
          <div class="review-card card text-center swing">
            <div class="review-avatar">
              <i class="fas fa-user-circle fa-5x"></i>
            </div>
            <div class="card-body">
              <h5 class="card-title">Natalie</h5>
              <p class="card-text">
                <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                <i class="fas fa-star"></i> <i class="fas fa-star"></i>
              </p>
              <p class="card-text">Amazing collection! Will definitely buy more.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'Home',
  setup() {
    const apiURL = 'https://tonguetied.onrender.com/products';
    const featuredProducts = ref([]);
    const currency = 'R';

    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get(apiURL);
        const allProducts = response.data;
        featuredProducts.value = allProducts.filter(product => product.category === 'Featured');
        // Initialize image state for toggling
        featuredProducts.value.forEach(product => {
          product.showFirstImage = true;
        });
      } catch (error) {
        console.error(error);
      }
    };

    const toggleImage = (index) => {
      const product = featuredProducts.value[index];
      product.showFirstImage = !product.showFirstImage;
    };

    const getImage = (product, index) => {
      // For simplicity, toggling between images
      return product.showFirstImage ? product.prodUrl : product.prodUrl.replace('v1', 'v2');
    };

    onMounted(() => {
      fetchFeaturedProducts();
    });

    return {
      featuredProducts,
      currency,
      toggleImage,
      getImage,
    };
  },
};
</script>
<style scoped>

body {
  background-color: #ADEBFF; /* Light Sky Blue */
  color: #00171F; /* Dark Navy */
}

.hero-section {
  background: url('https://zenlee-george.github.io/hostedimages/Tie-photo.jpeg') no-repeat center center;
  background-size: cover;
  color: #FFFFFF;
  position: relative;
  padding: 100px 0;
  border-radius: 20px;
}

.hero-section h1, .hero-section p {
  font-weight: bold;
  font-size: 3rem;
}

/* Featured Products */
.featured-products {
  padding: 2rem;
  background-color: #f9f9f9;
  text-align: center;
}

.featured-products h2 {
  color: #333366; /* Dark blue */
  font-family: 'Comic Sans MS', cursive;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.product-card {
  flex: 1 1 45%; /* Each card takes roughly half of the container width */
  max-width: 45%;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  overflow: hidden;
  cursor: pointer;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  width: 100%;
  height: 150px; /* Reduced height for a better fit */
  object-fit: cover; /* Ensures the image covers the area without stretching */
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05); /* Slight zoom on hover */
}

.product-info {
  padding: 1rem;
  color: #333;
  font-family: 'Comic Sans MS', cursive;
}

.price {
  background-color: #F39C12;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  display: inline-block;
  margin: 0.5rem 0;
}

button {
  background-color: #FF6347;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  font-family: 'Comic Sans MS', cursive;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #F39C12;
}

@media (max-width: 768px) {
  .product-card {
    flex: 1 1 100%; /* Stacks the cards on smaller screens */
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .product-image {
    height: 120px; /* Smaller height for mobile devices */
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .product-image {
    height: 180px; /* Slightly larger for tablets */
  }
}

@media (min-width: 1025px) {
  .product-image {
    height: 200px; /* Optimal height for desktops */
  }
}

.btn-primary {
  background-color: #003459; /* Navy Blue */
  border-color: #003459;
  color: #ffffff;
  font-weight: bold;
  border-radius: 30px;
  padding: 0.75rem 1.5rem;
}

.btn-dark {
  background-color: #00171F; /* Dark Navy */
  border-color: #00171F;
  color: #ADEBFF; /* Light Sky Blue */
  border-radius: 30px;
  padding: 0.75rem 1.5rem;
}

.sign-up-section {
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.form-control {
  border-radius: 25px;
  border: 2px solid #003459;
  padding: 1rem;
}

.card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.card-title {
  color: #00171F; /* Dark Navy */
  text-align: center;
}

.badge.bg-light-blue {
  background-color: #ADEBFF;
  color: #00171F; /* Dark Navy */
  font-size: 0.8rem;
  font-weight: bold;
}

/* Playful customer review styling */
.customer-reviews .review-card {
  border-radius: 20px;
  padding: 2rem;
  background-color: #ffffff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.customer-reviews .review-avatar {
  margin-bottom: 1rem;
}

.customer-reviews .review-card:hover {
  transform: scale(1.05) rotate(2deg);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.customer-reviews .playful-card {
  background-color: #FDF4E3; /* Light yellow for contrast */
}

.customer-reviews .fa-user-circle {
  color: #003459; /* Navy blue for icon color */
}

.customer-reviews .fa-star {
  color: #f39c12; /* Gold */
}

.customer-reviews .card-title {
  font-size: 1.5rem;
}

.customer-reviews .card-text {
  font-size: 1rem;
}

.explore-collection .card:hover {
  background-color: #ADEBFF; /* Light Sky Blue */
}

.featured-products .card:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(0, 23, 31, 0.2);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

/* Remove automatic swing animation from .swing */
.swing {
  transition: transform 0.3s ease;
}

/* Trigger swing animation on hover */
.swing:hover {
  animation: swing 1.5s ease-in-out;
  animation-iteration-count: infinite;
}

/* Keyframes for swing animation */
@keyframes swing {
  20% {
    transform: rotate(15deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  60% {
    transform: rotate(5deg);
  }
  80% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0);
  }
}

/* AOS Animations */
[data-aos="flip-left"], [data-aos="flip-right"] {
  transform: perspective(800px) rotateY(0deg);
}

/* Button Animation */
.bounce-animation {
  animation: bounce 2s infinite;
}

/* Avatar Swing Animation */
.swing {
  transition: transform 0.3s ease;
}

@media (min-width: 768px) {
  .customer-reviews .col-md-4:nth-child(2) {
    transform: translateY(20px);
  }
  .customer-reviews .col-md-6 {
    margin-bottom: 30px;
  }
}
</style>
