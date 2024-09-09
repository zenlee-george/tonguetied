<template>
    <div v-if="show" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add User</h5>
          <button type="button" class="close" aria-label="Close" @click="hide">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input type="text" class="form-control" id="firstName" v-model="firstName" required>
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input type="text" class="form-control" id="lastName" v-model="lastName" required>
            </div>
            <div class="form-group">
              <label for="age">Age</label>
              <input type="number" class="form-control" id="age" v-model="age" required>
            </div>
            <div class="form-group">
              <label for="gender">Gender</label>
              <select class="form-control" id="gender" v-model="gender" required>
                <option value="" disabled>Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" v-model="email" required>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" v-model="password" required>
            </div>
            <div class="form-group">
              <label for="profileUrl">Profile URL</label>
              <input type="text" class="form-control" id="profileUrl" v-model="profileUrl" required>
            </div>
            <button type="submit" class="btn btn-primary">Add User</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['show'],
    data() {
      return {
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        email: '',
        password: '',
        profileUrl: '',
      };
    },
    methods: {
      hide() {
        this.$emit('hide');
      },
      submitForm() {
        // Handle form submission
        console.log('User added:', this.firstName, this.lastName, this.age, this.gender, this.email, this.password, this.profileUrl);
        this.hide(); // Close the modal after submission
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
    position: relative;
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
  
  .modal-body {
    margin-top: 1rem;
  }
  </style>
  