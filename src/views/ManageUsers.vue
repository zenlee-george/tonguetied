<template>
  <div class="manage-users">
    <h1>Manage Users</h1>

    <!-- Button to show Add User Form -->
    <button class="btn btn-primary mb-4" @click="showAddUserForm = true">Add User</button>

    <!-- Add User Form -->
    <div v-if="showAddUserForm" class="mb-4">
      <h3>Add New User</h3>
      <form @submit.prevent="addUser">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" v-model="newUser.firstName" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" v-model="newUser.lastName" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="userAge">Age</label>
          <input type="number" id="userAge" v-model="newUser.userAge" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="Gender">Gender</label>
          <select id="Gender" v-model="newUser.Gender" class="form-control" required>
            <option disabled value="">Pick a Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div class="form-group">
          <label for="emailAdd">Email Address</label>
          <input type="email" id="emailAdd" v-model="newUser.emailAdd" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="userRole">Role</label>
          <select id="userRole" v-model="newUser.userRole" class="form-control" required>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div class="form-group">
          <label for="userProfile">Profile Image URL</label>
          <input type="text" id="userProfile" v-model="newUser.userProfile" class="form-control" />
        </div>
        <button type="submit" class="btn btn-success">Add User</button>
        <button type="button" class="btn btn-secondary" @click="showAddUserForm = false">Cancel</button>
      </form>
    </div>

    <!-- User List -->
    <div v-if="users.length" class="mb-4">
      <h3>User List</h3>
      <table class="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Role</th>
            <th>Profile Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.userID">
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.Gender }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userRole }}</td>
            <td><img :src="user.userProfile" alt="User Profile" class="user-image" /></td>
            <td>
              <button class="btn btn-warning btn-sm" @click="editUser(user)">Edit</button>
              <button class="btn btn-danger btn-sm" @click="deleteUser(user.userID)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Edit User Modal -->
    <div v-if="showEditUserForm" class="modal">
      <div class="modal-content">
        <span class="close" @click="showEditUserForm = false">&times;</span>
        <h3>Edit User</h3>
        <form @submit.prevent="updateUser">
          <div class="form-group">
            <label for="editFirstName">First Name</label>
            <input type="text" id="editFirstName" v-model="currentUser.firstName" class="form-control" required />
          </div>
          <div class="form-group">
            <label for="editLastName">Last Name</label>
            <input type="text" id="editLastName" v-model="currentUser.lastName" class="form-control" required />
          </div>
          <div class="form-group">
            <label for="editUserAge">Age</label>
            <input type="number" id="editUserAge" v-model="currentUser.userAge" class="form-control" required />
          </div>
          <div class="form-group">
            <label for="editGender">Gender</label>
            <select id="editGender" v-model="currentUser.Gender" class="form-control" required>
              <option disabled value="">Pick a Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div class="form-group">
            <label for="editEmailAdd">Email Address</label>
            <input type="email" id="editEmailAdd" v-model="currentUser.emailAdd" class="form-control" required />
          </div>
          <div class="form-group">
            <label for="editUserRole">Role</label>
            <select id="editUserRole" v-model="currentUser.userRole" class="form-control" required>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div class="form-group">
            <label for="editUserProfile">Profile Image URL</label>
            <input type="text" id="editUserProfile" v-model="currentUser.userProfile" class="form-control" />
          </div>
          <button type="submit" class="btn btn-success">Update User</button>
          <button type="button" class="btn btn-secondary" @click="showEditUserForm = false">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Define API URL for Users
const apiURL = 'https://tonguetied.onrender.com/users'; 

const users = ref([]);
const newUser = ref({
  firstName: '',
  lastName: '',
  userAge: null,
  Gender: '',
  emailAdd: '',
  userRole: 'user',
  userProfile: 'https://codjoelmayer.github.io/projectImages/images/profile-Image.png' // Default profile image
});
const showAddUserForm = ref(false);
const showEditUserForm = ref(false);
const currentUser = ref(null);

// Fetch Users
const fetchUsers = async () => {
  try {
    const response = await axios.get(apiURL);
    users.value = response.data;
  } catch (error) {
    console.error('Error fetching users:', error.message);
  }
};

// Add User
const addUser = async () => {
  try {
    const response = await axios.post(apiURL, newUser.value);
    users.value.push(response.data);
    newUser.value = { firstName: '', lastName: '', userAge: null, Gender: '', emailAdd: '', userRole: 'user', userProfile: 'https://codjoelmayer.github.io/projectImages/images/profile-Image.png' };
    showAddUserForm.value = false;
  } catch (error) {
    console.error('Error adding user:', error.message);
  }
};

// Edit User
const editUser = (user) => {
  currentUser.value = { ...user };
  showEditUserForm.value = true;
};

// Update User
const updateUser = async () => {
  try {
    if (currentUser.value) {
      const response = await axios.put(`${apiURL}/${currentUser.value.userID}`, currentUser.value);
      const index = users.value.findIndex(u => u.userID === currentUser.value.userID);
      if (index !== -1) {
        users.value[index] = response.data;
      }
      showEditUserForm.value = false;
    }
  } catch (error) {
    console.error('Error updating user:', error.message);
  }
};

// Delete User
const deleteUser = async (userId) => {
  try {
    await axios.delete(`${apiURL}/${userId}`);
    users.value = users.value.filter(u => u.userID !== userId);
  } catch (error) {
    console.error('Error deleting user:', error.message);
  }
};

onMounted(fetchUsers);
</script>

<style scoped>
.manage-users {
  padding: 2rem;
  background-color: #fff;
}

.table {
  margin-top: 1rem;
}

.user-image {
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
