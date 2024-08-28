<template>
    <div class="admin">
      <h1>Admin Dashboard</h1>
      <div class="admin-section">
        <h2>Add Product</h2>
        <input v-model="newProduct.name" placeholder="Product Name" />
        <input v-model="newProduct.price" placeholder="Price" />
        <input v-model="newProduct.category" placeholder="Category" />
        <button @click="addProduct">Add Product</button>
      </div>
      <div class="admin-section">
        <h2>Add User</h2>
        <input v-model="newUser.name" placeholder="User Name" />
        <input v-model="newUser.email" placeholder="Email" />
        <button @click="addUser">Add User</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  
  export default {
    name: "Admin",
    setup() {
      const newProduct = ref({
        name: '',
        price: '',
        category: ''
      });
  
      const newUser = ref({
        name: '',
        email: ''
      });
  
      const addProduct = async () => {
        try {
          await axios.post('https://api.example.com/products', newProduct.value);
          alert('Product added successfully!');
        } catch (error) {
          console.error(error);
        }
      };
  
      const addUser = async () => {
        try {
          await axios.post('https://api.example.com/users', newUser.value);
          alert('User added successfully!');
        } catch (error) {
          console.error(error);
        }
      };
  
      return {
        newProduct,
        newUser,
        addProduct,
        addUser,
      };
    }
  };
  </script>
  
  <style scoped>
  .admin {
    padding: 2rem;
    background-color: #ffffff;
  }
  
  .admin-section {
    margin-bottom: 2rem;
  }
  </style>
  