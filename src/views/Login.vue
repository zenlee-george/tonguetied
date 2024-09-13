<template>
  <div class="auth-page">
    <div class="auth-card">
      <h2 class="text-center">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="emailAdd">Email:</label>
          <input type="email" id="emailAdd" v-model="form.emailAdd" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="userPass">Password:</label>
          <div class="password-input-wrapper">
            <input :type="isPasswordVisible ? 'text' : 'password'" id="userPass" v-model="form.userPass" class="form-control" required>
            <i :class="isPasswordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'" @click="togglePasswordVisibility"></i>
          </div>
        </div>
        <button type="submit" class="btn-login">Login</button>
      </form>
      <p class="text-center mt-3">
        Don't have an account? <router-link to="/signup">Sign up here</router-link>.
      </p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const form = ref({
      emailAdd: '',
      userPass: ''
    });
    const errorMessage = ref('');
    const isPasswordVisible = ref(false);

    // Toggle password visibility
    const togglePasswordVisibility = () => {
      isPasswordVisible.value = !isPasswordVisible.value;
    };

    // Handle login
    const handleLogin = async () => {
      try {
        const response = await axios.post('https://tonguetied.onrender.com/users/login', form.value);
        Swal.fire({
          title: 'Success!',
          text: response.data.message,
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          router.push('/dashboard'); // Redirect to a dashboard or main page after successful login
        });
      } catch (error) {
        errorMessage.value = error.response?.data?.message || 'An error occurred';
      }
    };

    return {
      form,
      errorMessage,
      handleLogin,
      isPasswordVisible,
      togglePasswordVisibility
    };
  }
};
</script>

<style scoped>
/* Styling to match the home page design */
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 100px;
  background-color: #ADEBFF; /* Match background color */
}

.auth-card {
  background-color: #FFF;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}

h2 {
  color: #FF6347;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #333366;
  margin-bottom: 0.5rem;
  font-family: 'Comic Sans MS', cursive, sans-serif;
}

.form-control {
  width: 100%;
  padding: 0.75rem;
  border-radius: 10px;
  border: 2px solid #FF6347;
  font-family: 'Comic Sans MS', cursive, sans-serif;
}

.form-control:focus {
  border-color: #F39C12;
  outline: none;
  box-shadow: 0 0 8px rgba(243, 156, 18, 0.5);
}

.password-input-wrapper {
  position: relative;
}

.password-input-wrapper i {
  position: absolute;
  top: 35%;
  right: 10px;
  cursor: pointer;
  color: #888;
}

.btn-login {
  background-color: #FF6347;
  color: white;
  padding: 0.75rem;
  width: 100%;
  border-radius: 20px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-top: 1rem;
}

.btn-login:hover {
  background-color: #F39C12;
  transform: scale(1.05);
}

.error {
  color: red;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  text-align: center;
}
</style>
