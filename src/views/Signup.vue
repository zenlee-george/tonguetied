<template>
  <div class="auth-page">
    <div class="auth-card">
      <h2 class="text-center">Create Your Account</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="form.firstName" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="form.lastName" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="userAge">Age:</label>
          <input type="number" id="userAge" v-model="form.userAge" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="Gender">Gender:</label>
          <select id="Gender" v-model="form.Gender" class="form-control" required>
            <option value="" disabled>Pick a gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="form-group">
          <label for="userRole">Role:</label>
          <select id="userRole" v-model="form.userRole" class="form-control" required>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div class="form-group">
          <label for="emailAdd">Email:</label>
          <input type="email" id="emailAdd" v-model="form.emailAdd" class="form-control" required>
        </div>

        <!-- Password Field with Toggleable Eye Icon -->
        <div class="form-group">
          <label for="userPass">Password:</label>
          <div class="password-input-wrapper">
            <input :type="isPasswordVisible ? 'text' : 'password'" id="userPass" v-model="form.userPass" class="form-control" required>
            <i :class="isPasswordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'" @click="togglePasswordVisibility"></i>
          </div>
          <p v-if="passwordErrors.length" class="error">
            {{ passwordErrors.join(', ') }}
          </p>
        </div>

        <div class="form-group">
          <label for="userProfile">Profile URL:</label>
          <input type="text" id="userProfile" v-model="form.userProfile" class="form-control">
        </div>
        <button type="submit" class="btn-register">Register</button>
      </form>
      <p class="text-center mt-3">
        Already have an account? <router-link to="/login">Login here</router-link>.
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
  name: "Register",
  setup() {
    const router = useRouter();
    const defaultProfileUrl = 'https://codjoelmayer.github.io/projectImages/images/profile-Image.png';
    const form = ref({
      firstName: '',
      lastName: '',
      userAge: '',
      Gender: '',
      userRole: 'user',
      emailAdd: '',
      userPass: '',
      userProfile: defaultProfileUrl
    });
    const errorMessage = ref('');
    const isPasswordVisible = ref(false);
    const passwordErrors = ref([]);

    // Toggle password visibility
    const togglePasswordVisibility = () => {
      isPasswordVisible.value = !isPasswordVisible.value;
    };

    // Function to validate the password
    const validatePassword = () => {
      passwordErrors.value = [];

      if (form.value.userPass.length < 8) {
        passwordErrors.value.push('Must be at least 8 characters');
      }
      if (!/[A-Z]/.test(form.value.userPass)) {
        passwordErrors.value.push('Must contain at least one uppercase letter');
      }
      if (!/[a-z]/.test(form.value.userPass)) {
        passwordErrors.value.push('Must contain at least one lowercase letter');
      }
      if (!/[0-9]/.test(form.value.userPass)) {
        passwordErrors.value.push('Must contain at least one digit');
      }

      return passwordErrors.value.length === 0;
    };

    // Handle registration
    const handleRegister = async () => {
      if (!validatePassword()) {
        return; // If password validation fails, stop form submission
      }

      try {
        const response = await axios.post('https://tonguetied.onrender.com/users/register', form.value);
        Swal.fire({
          title: 'Success!',
          text: response.data.message,
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          router.push('/login');
        });
      } catch (error) {
        errorMessage.value = error.response?.data?.message || 'An error occurred';
      }
    };

    return {
      form,
      errorMessage,
      handleRegister,
      isPasswordVisible,
      togglePasswordVisibility,
      passwordErrors,
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

.btn-register {
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

.btn-register:hover {
  background-color: #F39C12;
  transform: scale(1.05);
}

.error {
  color: red;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  text-align: center;
}
</style>
