<template>
  <div class="admin-page">
    <!-- Parallax Section -->
    <div class="parallax-section">
      <div class="parallax-content">
        <h1 class="text-center mb-4" data-aos="fade-up">Admin Dashboard</h1>
        <!-- Buttons to trigger modals -->
        <div class="text-center mb-4" data-aos="fade-up" data-aos-delay="200">
          <button class="btn btn-primary btn-lg mx-2" @click="showAddUserModal = true">Add User</button>
          <button class="btn btn-primary btn-lg mx-2" @click="showAddProductModal = true">Add Product</button>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="container my-5">
      <div class="row text-center">
        <div class="col-md-4" data-aos="zoom-in">
          <div class="admin-feature-card">
            <i class="fas fa-users fa-3x"></i>
            <h3>Manage Users</h3>
            <p>View, update, and manage users in the system.</p>
          </div>
        </div>
        <div class="col-md-4" data-aos="zoom-in" data-aos-delay="200">
          <div class="admin-feature-card">
            <i class="fas fa-box fa-3x"></i>
            <h3>Manage Products</h3>
            <p>View, update, and manage products in the store.</p>
          </div>
        </div>
        <div class="col-md-4" data-aos="zoom-in" data-aos-delay="400">
          <div class="admin-feature-card">
            <i class="fas fa-chart-line fa-3x"></i>
            <h3>View Analytics</h3>
            <p>Track store performance and user behavior.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Include Modals -->
    <AddUserModal :show="showAddUserModal" @hide="showAddUserModal = false" />
    <AddProductModal :show="showAddProductModal" @hide="showAddProductModal = false" />
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import AddUserModal from '@/components/AddUserModal.vue';
import AddProductModal from '@/components/AddProductModal.vue';

export default {
  name: 'Admin',
  components: {
    AddUserModal,
    AddProductModal,
  },
  data() {
    return {
      showAddUserModal: false,
      showAddProductModal: false,
    };
  },
  mounted() {
    AOS.init({
      duration: 1000,
    });
  },
};
</script>

<style scoped>
/* Parallax Section */
.parallax-section {
  background: url('https://images.unsplash.com/photo-1503423571797-2d2bb372094a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center;
  background-size: cover;
  background-attachment: fixed; /* Key for parallax effect */
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.parallax-content {
  text-align: center;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay for contrast */
  padding: 2rem;
  border-radius: 10px;
  color: #fff;
}

.admin-page {
  background-color: #f5f5f5;
}

/* Features Section */
.admin-feature-card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.admin-feature-card:hover {
  transform: translateY(-10px);
}

.admin-feature-card i {
  color: #f39c12;
  margin-bottom: 1rem;
}

.admin-feature-card h3 {
  color: #00171F;
  margin-bottom: 1rem;
}

.admin-feature-card p {
  color: #7F8C8D;
}

/* Modals styling */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header .close {
  background: none;
  border: none;
  font-size: 1.5rem;
}

.modal-body {
  margin-top: 1rem;
}
</style>
