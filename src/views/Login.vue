<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="emailAdd">Email:</label>
        <input type="email" id="emailAdd" v-model="form.emailAdd" required>
      </div>
      <div>
        <label for="userPass">Password:</label>
        <input type="password" id="userPass" v-model="form.userPass" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
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

    const handleLogin = async () => {
  try {
    const response = await axios.post('https://tonguetied.onrender.com/users/login', form.value);
    Swal.fire({
      title: 'Success!',
      text: response.data.message,
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      cookies.set('authToken', response.data.token, '1h'); // Store the token in cookies
      router.push('/home'); // Redirect to a different page after login, adjust path as needed
    });
  } catch (error) {
    console.error('Login Error:', error); // Log the error to the console
    errorMessage.value = error.response?.data?.message || 'An error occurred'; // Display error message
  }
};

    return {
      form,
      errorMessage,
      handleLogin
    };
  }
};
</script>

<style scoped>
/* Add your cartoonish styles here */
.login {
  max-width: 500px;
  margin: auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

h2 {
  color: #ff6347;
}

label {
  display: block;
  margin: 0.5rem 0;
}

input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  background-color: #ff6347;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ff4500;
}

.error {
  color: red;
  margin-top: 1rem;
}
</style>
