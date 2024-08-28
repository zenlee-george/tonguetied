<template>
    <div class="contact">
      <h1>Contact Us</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input v-model="form.name" id="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="form.email" id="email" type="email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea v-model="form.message" id="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Contact',
    setup() {
      const form = ref({
        name: '',
        email: '',
        message: '',
      });
  
      const submitForm = () => {
        alert(`Message sent from ${form.value.name}`);
        form.value.name = '';
        form.value.email = '';
        form.value.message = '';
      };
  
      return {
        form,
        submitForm,
      };
    },
  };
  </script>
  
  <style scoped>
  .contact {
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
  
  form input,
  form textarea {
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
  