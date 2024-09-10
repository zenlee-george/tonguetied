<template>
  <div class="cart-page">
    <!-- Video Parallax Section -->
    <div class="parallax-section">
      <video autoplay muted loop class="parallax-video">
        <source src="../assets/7568747-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="parallax-overlay">
        <h1 class="text-center">Your Cart</h1>
        <p class="text-center">Review your items and proceed to checkout</p>
      </div>
    </div>

    <!-- Cart Items Section -->
    <div class="container my-5" data-aos="fade-up" data-aos-delay="300">
      <h2 class="text-center mb-4" data-aos="zoom-in" data-aos-delay="100">Items in Your Cart</h2>
      <div v-if="cartItems.length > 0" class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-item row mb-4">
          <div class="col-md-3" data-aos="flip-left" data-aos-duration="1000">
            <img :src="item.image" alt="Product Image" class="cart-item-image" />
          </div>
          <div class="col-md-9" data-aos="fade-up" data-aos-delay="200">
            <div class="cart-item-details">
              <h5>{{ item.name }}</h5>
              <p>{{ item.description }}</p>
              <p class="cart-item-price">{{ item.price || currency }}</p>
              <div class="cart-item-quantity">
                <button class="quantity-btn" @click="decreaseQuantity(item)">-</button>
                <span>{{ item.quantity }}</span>
                <button class="quantity-btn" @click="increaseQuantity(item)">+</button>
              </div>
              <button class="remove-btn" @click="removeItem(item)">Remove</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty Cart Section -->
      <div v-else class="empty-cart text-center" data-aos="zoom-in">
        <img src="https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Empty Cart" />
        <h2>Your cart is empty!</h2>
        <router-link to="/products" class="btn btn-primary">Continue Shopping</router-link>
      </div>
    </div>

    <!-- Cart Summary Section -->
    <div v-if="cartItems.length > 0" class="cart-summary container text-center" data-aos="zoom-in">
      <h3>Order Summary</h3>
      <p>Total Items: {{ totalItems }}</p>
      <p>Total Price: {{ totalPrice || currency }}</p>
      <button class="checkout-btn">Checkout</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Example cart data
const cartItems = ref([
  {
    id: 1,
    name: 'Playful Tie',
    description: 'A fun tie with a cartoon face.',
    price: 450.00,
    quantity: 2,
    image: 'https://zenlee-george.github.io/hostedimages/green-v1.png',
  },
  {
    id: 2,
    name: 'Cartoonish Bowtie',
    description: 'A quirky bowtie for all occasions.',
    price: 300.00,
    quantity: 1,
    image: 'https://zenlee-george.github.io/hostedimages/purple-v1.png',
  }
]);

const increaseQuantity = (item) => {
  item.quantity++;
};

const decreaseQuantity = (item) => {
  if (item.quantity > 1) item.quantity--;
};

const removeItem = (item) => {
  cartItems.value = cartItems.value.filter(cartItem => cartItem.id !== item.id);
};

const totalItems = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0);
});

const totalPrice = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
});
</script>

<style scoped>
/* Parallax Video Section */
.parallax-section {
  position: relative;
  height: 60vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5); /* Add this to make sure the text is visible over the video */
  color: #fff;
}

.parallax-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%) scale(1.1); /* Scale up to cover the area and maintain parallax effect */
}

.parallax-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%); /* Center the overlay */
  background: rgba(0, 0, 0, 0.5); /* Dark overlay for better text visibility */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.parallax-overlay h1 {
  font-size: 3rem;
  font-weight: bold;
}

.parallax-overlay p {
  font-size: 1.5rem;
  margin-top: 1rem;
}

/* Cart Items */
.cart-items {
  background-color: #FFF4E3;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.cart-item {
  display: flex;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.cart-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.cart-item-image {
  width: 100%;
  border-radius: 10px;
  margin-right: 1.5rem;
}

.cart-item-details h5 {
  font-size: 1.5rem;
  color: #F39C12;
}

.cart-item-price {
  color: #F39C12;
  font-weight: bold;
  font-size: 1.2rem;
}

.cart-item-quantity {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
}

.quantity-btn {
  background-color: #F39C12;
  border: none;
  color: white;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.quantity-btn:hover {
  background-color: #E67E22;
}

.remove-btn {
  background-color: #E74C3C;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border-radius: 5px;
  cursor: pointer;
}

.remove-btn:hover {
  background-color: #C0392B;
}

/* Cart Summary */
.cart-summary {
  margin-top: 2rem;
  background-color: #FFF4E3;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.cart-summary h3 {
  color: #F39C12;
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.checkout-btn {
  background-color: #F39C12;
  border: none;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout-btn:hover {
  background-color: #E67E22;
}

/* Empty Cart Section */
.empty-cart img {
  width: 200px;
  margin-bottom: 1rem;
}

.empty-cart h2 {
  font-size: 1.5rem;
  color: #00171F;
  margin-bottom: 1rem;
}

.btn-primary {
  background-color: #003459;
  border-color: #003459;
  color: #fff;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #00171F;
}
</style>
