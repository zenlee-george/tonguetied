<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="form.firstName" required>
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="form.lastName" required>
      </div>
      <div>
        <label for="userAge">Age:</label>
        <input type="number" id="userAge" v-model="form.userAge" required>
      </div>
      <div>
        <label for="Gender">Gender:</label>
        <select id="Gender" v-model="form.Gender" required>
          <option value="" disabled>Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label for="userRole">Role:</label>
        <select id="userRole" v-model="form.userRole" required>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div>
        <label for="emailAdd">Email:</label>
        <input type="email" id="emailAdd" v-model="form.emailAdd" required>
      </div>
      <div>
        <label for="userPass">Password:</label>
        <input type="password" id="userPass" v-model="form.userPass" required>
      </div>
      <div>
        <label for="userProfile">Profile URL:</label>
        <input type="text" id="userProfile" v-model="form.userProfile">
      </div>
      <button type="submit">Register</button>
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

    const handleRegister = async () => {
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
        errorMessage.value = error.response.data.message || 'An error occurred';
      }
    };

    return {
      form,
      errorMessage,
      handleRegister,
      defaultProfileUrl
    };
  }
};
</script>

<style scoped>
/* Add your cartoonish styles here */
.register {
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

input, select {
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
