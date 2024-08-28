<template>
    <div class="signup">
      <h1>Sign Up</h1>
      <form @submit.prevent="signup">
        <div class="form-group">
          <label for="name">Name</label>
          <input v-model="form.name" id="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="form.email" id="email" type="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="form.password" id="password" type="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Signup',
    setup() {
      const form = ref({
        name: '',
        email: '',
        password: '',
      });
  
      const router = useRouter();
  
      const signup = () => {
        alert(`Welcome, ${form.value.name}!`);
        router.push('/login');
      };
  
      return {
        form,
        signup,
      };
    },
  };
  </script>
  
  <style scoped>
  .signup {
    padding: 2rem;
    background-color: #ffffff;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  form label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333366;
  }
  
  form input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  
  button {
    padding: 0.75rem 1.5rem;
    background-color: #333366;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  