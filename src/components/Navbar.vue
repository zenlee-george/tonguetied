<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img lazy src="https://zenlee-george.github.io/hostedimages/CustomLogo.png" alt="Tongue-Tied Logo" class="navbar-logo">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        ref="navbarToggler"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav" ref="navbarCollapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ 'active-link': $route.path === '/' }"
              to="/"
              @click="closeNavbar"
            >Home</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ 'active-link': $route.path === '/about' }"
              to="/about"
              @click="closeNavbar"
            >About</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ 'active-link': $route.path === '/products' }"
              to="/products"
              @click="closeNavbar"
            >Products</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ 'active-link': $route.path === '/cart' }"
              to="/cart"
              @click="closeNavbar"
            >Cart</router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ 'active-link': $route.path === '/contact' }"
              to="/contact"
              @click="closeNavbar"
            >Contact</router-link>
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ 'active-link': $route.path === '/admin' }"
              to="/admin"
              @click="closeNavbar"
            >Management</router-link>
          </li>
          <!-- Icon for Signup/Login -->
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="{ 'active-link': $route.path === '/login' }"
              to="/login"
              aria-label="Sign Up / Login"
              @click="closeNavbar"
            >
              <i class="fas fa-user" aria-hidden="true"></i>
            </router-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    closeNavbar() {
      const navbarCollapse = this.$refs.navbarCollapse;
      const navbarToggler = this.$refs.navbarToggler;
      if (navbarCollapse.classList.contains('show')) {
        // Toggle the collapse
        navbarToggler.click();
      }
    }
  }
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  background-color: transparent !important;
  backdrop-filter: blur(10px);
  z-index: 12;
}

.navbar-logo {
  height: 100px; /* Adjust the height as needed */
  transition: transform 0.3s ease;
}

.navbar-logo:hover {
  transform: rotate(15deg) scale(1.1); /* Fun logo rotation */
}

.nav-link {
  transition: transform 0.3s ease, color 0.3s ease, letter-spacing 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  display: block;
  height: 2px;
  background-color: #F39C12; /* Gold color for the underline */
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%; /* Underline expands on hover */
}

.nav-link.active-link {
  color: #2C3E50; /* Change to desired color */
  transform: scale(1.1); /* Increase size */
  font-weight: bold;
  letter-spacing: 1px; /* Spacing out the letters for a cool effect */
}

.nav-link:hover {
  color: #F39C12; /* Change to desired color on hover */
  transform: scale(1.05); /* Slightly increase size on hover */
}

/* Style for the login/signup icon */
.fas.fa-user {
  font-size: 1.5rem;
  color: inherit;
  transition: transform 0.3s ease, color 0.3s ease;
}

.nav-link:hover .fas.fa-user {
  transform: scale(1.2);
  color: #F39C12; /* Gold on hover */
}
</style>
