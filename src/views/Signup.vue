<template>
  <div class="auth-page">
    <div class="auth-card">
      <h2 class="text-center">Sign Up</h2>
      <form action="https://formspree.io/f/mdknblad" method="POST">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" name="name" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-gold btn-block">Sign Up</button>
      </form>
      <p class="text-center mt-3">
        Already have an account? <router-link to="/login">Login here</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style scoped>
.auth-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5; /* Cream White */
}

.auth-card {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

.text-center {
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  margin-bottom: 0.5rem;
  display: block;
  color: #2c3e50; /* Navy Blue */
}

.form-control {
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.btn-gold {
  background-color: #f39c12; /* Gold */
  border-color: #f39c12;
  color: #fff;
  padding: 0.75rem;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
}

.btn-gold:hover {
  background-color: #e08e0b; /* Darker Gold */
}
</style>
