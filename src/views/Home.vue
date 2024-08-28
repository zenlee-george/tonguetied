<template>
  <div class="home-page">
    <!-- Hero Section -->
    <div class="hero-section text-center bg-dark text-white py-5">
      <h1>Welcome to Tongue Tied</h1>
      <p>Discover our stylish collection of ties</p>
      <a href="/products" class="btn btn-light btn-lg">Shop Now</a>
    </div>

    <!-- Featured Products Section -->
    <div class="featured-products container my-5">
      <h2 class="text-center mb-4">Featured Products</h2>
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="card">
            <img
              src="https://via.placeholder.com/500"
              class="card-img-top"
              alt="Product 1"
            />
            <div class="card-body">
              <h5 class="card-title">Classic Silk Tie</h5>
              <p class="card-text">R450.99</p>
              <a href="#" class="btn btn-primary">View Product</a>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card">
            <div class="badge bg-success position-absolute mt-2 ms-2">
              New Arrival
            </div>
            <img
              src="https://via.placeholder.com/300"
              class="card-img-top"
              alt="Product 2"
            />
            <div class="card-body">
              <h5 class="card-title">Stylish Tie</h5>
              <p class="card-text">R349.99</p>
              <a href="#" class="btn btn-primary">View Product</a>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card">
            <img
              src="https://via.placeholder.com/300"
              class="card-img-top"
              alt="Product 3"
            />
            <div class="card-body">
              <h5 class="card-title">Slim Wool Blend Tie</h5>
              <p class="card-text">R499.99</p>
              <a href="#" class="btn btn-primary">View Product</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Explore Our Collection Section -->
    <div class="explore-collection container my-5">
      <h2 class="text-center mb-4">Explore Our Collection</h2>
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-body text-center">
              <h5 class="card-title">Formal Ties</h5>
              <p class="card-text">
                Elevate your formal look with our range of ties
              </p>
              <a href="#" class="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-body text-center">
              <h5 class="card-title">Casual Ties</h5>
              <p class="card-text">
                Stay stylish even on casual days
              </p>
              <a href="#" class="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sign Up for Updates Section -->
    <div class="sign-up-section bg-light py-5">
      <div class="container">
        <h2 class="text-center mb-4">Sign Up for Updates</h2>
        <div class="d-flex justify-content-center">
          <div class="col-md-6">
            <input
              type="email"
              class="form-control"
              placeholder="Enter your email"
            />
            <small class="form-text text-muted">
              We promise not to spam
            </small>
            <div class="text-center mt-3">
              <button class="btn btn-dark">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Customer Reviews Section -->
    <div class="customer-reviews container my-5">
      <h2 class="text-center mb-4">Customer Reviews</h2>
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Anna</h5>
              <p class="card-text">
                <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i
                  class="fas fa-star"
                ></i>
                <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                Love the quality and variety of ties
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Mike</h5>
              <p class="card-text">
                <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i
                  class="fas fa-star"
                ></i>
                <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                Great customer service and fast delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.hero-section {
  background-color: #343a40;
}

.card {
  overflow: hidden;
  position: relative;
}

.card img {
  object-fit: cover;
}

.card-body {
  padding: 1.25rem;
}

.card .badge {
  top: 0;
  left: 0;
  padding: 0.5rem 1rem;
}

.sign-up-section input {
  width: 100%;
  margin-bottom: 0.5rem;
}

.sign-up-section button {
  width: 100%;
}

footer {
  background-color: #343a40;
}

footer p {
  margin: 0;
}

footer a {
  color: #f8f9fa;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}
</style>
