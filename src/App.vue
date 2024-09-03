<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
    <!-- <TieSpinner/> -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
// import TieSpinner from './components/TieSpinner.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    // TieSpinner,
  },
  data() {
    return {
      isLoading: true, // Control the loading state
    };
  },
  mounted() {
    // Simulate data fetching or some delay
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Playfair Display', serif;
  background-color: #ffffff;
  cursor: url('../src/assets/CustomCursor.png'), auto;
}
</style>
