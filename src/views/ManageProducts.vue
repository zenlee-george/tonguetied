<template>
    <div class="manage-products">
      <h1>Manage Products</h1>
  
      <!-- Button to show Add Product Form -->
      <button class="btn btn-primary mb-4" @click="showAddProductForm = true">Add Product</button>
  
      <!-- Add Product Form -->
      <div v-if="showAddProductForm" class="mb-4">
        <h3>Add New Product</h3>
        <form @submit.prevent="addProduct">
          <div class="form-group">
            <label for="productName">Product Name</label>
            <input type="text" id="productName" v-model="newProduct.prodName" class="form-control" required />
          </div>
          <div class="form-group">
            <label for="productQuantity">Quantity</label>
            <input type="number" id="productQuantity" v-model.number="newProduct.quantity" class="form-control" required />
          </div>
          <div class="form-group">
            <label for="productDescription">Description</label>
            <textarea id="productDescription" v-model="newProduct.description" class="form-control" required></textarea>
          </div>
          <div class="form-group">
            <label for="productAmount">Amount (Price)</label>
            <input type="number" id="productAmount" v-model.number="newProduct.amount" step="0.01" class="form-control" required />
          </div>
          <div class="form-group">
            <label for="productCategory">Category</label>
            <input type="text" id="productCategory" v-model="newProduct.category" class="form-control" required />
          </div>
          <div class="form-group">
            <label for="productUrl">Product Image URL</label>
            <input type="text" id="productUrl" v-model="newProduct.prodUrl" class="form-control" required />
          </div>
          <button type="submit" class="btn btn-success">Add Product</button>
          <button type="button" class="btn btn-secondary" @click="showAddProductForm = false">Cancel</button>
        </form>
      </div>
  
      <!-- Product List -->
      <div v-if="products.length" class="mb-4">
        <h3>Product List</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.prodID">
              <td>{{ product.prodName }}</td>
              <td>{{ product.quantity }}</td>
              <td>{{ product.description }}</td>
              <td>{{ product.amount }}</td>
              <td>{{ product.category }}</td>
              <td><img :src="product.prodUrl" alt="Product Image" class="product-image" /></td>
              <td>
                <button class="btn btn-warning btn-sm" @click="editProduct(product)">Edit</button>
                <button class="btn btn-danger btn-sm" @click="deleteProduct(product.prodID)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Edit Product Modal -->
      <div v-if="showEditProductForm" class="modal">
        <div class="modal-content">
          <span class="close" @click="showEditProductForm = false">&times;</span>
          <h3>Edit Product</h3>
          <form @submit.prevent="updateProduct">
            <div class="form-group">
              <label for="editProductName">Product Name</label>
              <input type="text" id="editProductName" v-model="currentProduct.prodName" class="form-control" required />
            </div>
            <div class="form-group">
              <label for="editProductQuantity">Quantity</label>
              <input type="number" id="editProductQuantity" v-model.number="currentProduct.quantity" class="form-control" required />
            </div>
            <div class="form-group">
              <label for="editProductDescription">Description</label>
              <textarea id="editProductDescription" v-model="currentProduct.description" class="form-control" required></textarea>
            </div>
            <div class="form-group">
              <label for="editProductAmount">Amount (Price)</label>
              <input type="number" id="editProductAmount" v-model.number="currentProduct.amount" step="0.01" class="form-control" required />
            </div>
            <div class="form-group">
              <label for="editProductCategory">Category</label>
              <input type="text" id="editProductCategory" v-model="currentProduct.category" class="form-control" required />
            </div>
            <div class="form-group">
              <label for="editProductUrl">Product Image URL</label>
              <input type="text" id="editProductUrl" v-model="currentProduct.prodUrl" class="form-control" required />
            </div>
            <button type="submit" class="btn btn-success">Update Product</button>
            <button type="button" class="btn btn-secondary" @click="showEditProductForm = false">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const products = ref([]);
  const newProduct = ref({
    prodName: '',
    quantity: null,
    description: '',
    amount: null,
    category: '',
    prodUrl: ''
  });
  const showAddProductForm = ref(false);
  const showEditProductForm = ref(false);
  const currentProduct = ref(null);
  
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://tonguetied.onrender.com/products');
      products.value = response.data;
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };
  
  const addProduct = async () => {
    try {
      const response = await axios.post('https://tonguetied.onrender.com/products', newProduct.value);
      products.value.push(response.data);
      newProduct.value = { prodName: '', quantity: null, description: '', amount: null, category: '', prodUrl: '' };
      showAddProductForm.value = false;
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };
  
  const editProduct = (product) => {
    currentProduct.value = { ...product };
    showEditProductForm.value = true;
  };
  
  const updateProduct = async () => {
    try {
      if (currentProduct.value) {
        const response = await axios.put(`https://tonguetied.onrender.com/products/${currentProduct.value.prodID}`, currentProduct.value);
        const index = products.value.findIndex(p => p.prodID === currentProduct.value.prodID);
        if (index !== -1) {
          products.value[index] = response.data;
        }
        showEditProductForm.value = false;
      }
    } catch (error) {
      console.error('Error updating product:', error.message);
    }
  };
  
  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`https://tonguetied.onrender.com/products/${productId}`);
      products.value = products.value.filter(p => p.prodID !== productId);
    } catch (error) {
      console.error('Error deleting product:', error.message);
    }
  };
  
  onMounted(fetchProducts);
  </script>
  
  
  <style scoped>
  .manage-products {
    padding: 2rem;
    background-color: #fff;
  }
  
  .table {
    margin-top: 1rem;
  }
  
  .product-image {
    max-width: 100px;
    max-height: 100px;
    object-fit: cover;
  }
  
  .modal {
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
  </style>
  