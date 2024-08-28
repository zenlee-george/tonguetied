<template>
    <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="form.email" id="email" type="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="form.password" id="password" type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  
  export default {
    name: 'Login',
    setup() {
      const store = useStore();
      const router = useRouter();
  
      const form = ref({
        email: '',
        password: '',
      });
  
      const login = () => {
        store.dispatch('login', form.value).then(() => {
          router.push('/');
        });
      };
  
      return {
        form,
        login,
      };
    },
  };
  </script>
  
  <style scoped>
  .login {
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
  