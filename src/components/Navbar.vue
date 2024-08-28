<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Tongue-Tied</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ 'active-link': $route.path === '/' }"
              to="/"
            >Home</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ 'active-link': $route.path === '/about' }"
              to="/about"
            >About</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ 'active-link': $route.path === '/products' }"
              to="/products"
            >Products</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ 'active-link': $route.path === '/cart' }"
              to="/cart"
            >Cart</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ 'active-link': $route.path === '/contact' }"
              to="/contact"
            >Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ 'active-link': $route.path === '/login' }"
              to="/login"
            >Login</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ 'active-link': $route.path === '/signup' }"
              to="/signup"
            >Sign Up</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  transition: transform 0.3s ease, color 0.3s ease;
}

.nav-link.active-link {
  color: #2C3E50; /* Change to desired color */
  transform: scale(1.1); /* Increase size */
  font-weight: bold
}
</style>
