<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
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

<style scoped>
#app {
  margin: 0;
  font-family: 'Irish Grover', cursive;
  background-color: #ADEBFF;
}
</style>
