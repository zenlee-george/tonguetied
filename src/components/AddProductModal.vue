<template>
  <div class="modal-overlay" v-if="show">
    <div class="modal-content">
      <div class="modal-header">
        <h5>Add Product</h5>
        <button class="close" @click="$emit('hide')">&times;</button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="submitProduct">
          <div class="mb-3">
            <label for="productName" class="form-label">Product Name</label>
            <input type="text" id="productName" v-model="productName" class="form-control" required />
          </div>

          <div class="mb-3">
            <label for="quantity" class="form-label">Quantity</label>
            <input type="number" id="quantity" v-model="quantity" class="form-control" required />
          </div>

          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea id="description" v-model="description" class="form-control" rows="3" required></textarea>
          </div>

          <div class="mb-3">
            <label for="amount" class="form-label">Amount (Price)</label>
            <input type="number" id="amount" v-model="amount" class="form-control" required />
          </div>

          <div class="mb-3">
            <label for="category" class="form-label">Category</label>
            <select id="category" v-model="category" class="form-select" required>
              <option value="" disabled>Select Category</option>
              <option v-for="cat in availableCategories" :key="cat">{{ cat }}</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="prodUrl" class="form-label">Product Image URL</label>
            <input type="url" id="prodUrl" v-model="prodUrl" class="form-control" required />
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
  data() {
    return {
      productName: '',
      quantity: '',
      description: '',
      amount: '',
      category: '',
      prodUrl: '',
      availableCategories: ['Formal', 'Casual', 'Luxury'], // Categories can be fetched from API
    };
  },
  methods: {
    submitProduct() {
      const newProduct = {
        productName: this.productName,
        quantity: this.quantity,
        description: this.description,
        amount: this.amount,
        category: this.category,
        prodUrl: this.prodUrl,
      };

      // Emit event to parent with product details
      this.$emit('add-product', newProduct);

      // Reset form
      this.resetForm();
      this.$emit('hide');
    },
    resetForm() {
      this.productName = '';
      this.quantity = '';
      this.description = '';
      this.amount = '';
      this.category = '';
      this.prodUrl = '';
    },
  },
};
</script>

<style scoped>
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
  z-index: 12;
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

.modal-header h5 {
  margin: 0;
}

.close {
  background: none;
  border: none;
  font-size: 1.5rem;
}

.modal-body {
  margin-top: 1rem;
}

.form-control {
  width: 100%;
  margin-bottom: 1rem;
}

.btn-primary {
  padding: 0.75rem 2rem;
  background-color: #2c3e50;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #34495e;
}
</style>
