<template>
  <div class="contact-page">
    <div class="container py-5">
      <h1 class="text-center mb-4">Get in Touch</h1>
      
      <div class="row mb-5">
        <div class="col-md-4 text-center">
          <i class="fas fa-map-marker-alt contact-icon"></i>
          <h5>Our Location</h5>
          <p>19 Adderley Street, Suite 402, Cape Town, 8000, South Africa</p>
        </div>
        <div class="col-md-4 text-center">
          <i class="fas fa-phone-alt contact-icon"></i>
          <h5>Call Us</h5>
          <p>+27 (21) 555-1234</p>
        </div>
        <div class="col-md-4 text-center">
          <i class="fas fa-envelope contact-icon"></i>
          <h5>Email Us</h5>
          <p>support@tonguetied.com</p>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-8">
          <form action="https://formspree.io/f/mdknblad" method="POST">
            <div class="mb-3">
              <label for="name" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="name" name="name" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email Address</label>
              <input type="email" class="form-control" id="email" name="email" required>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact-page {
  background-color: #f5f5f5;
  padding: 3rem 0;
}

.contact-icon {
  font-size: 3rem;
  color: #f39c12; /* Gold color for icons */
  margin-bottom: 1rem;
}

h1, h5 {
  color: #2c3e50; /* Navy Blue */
}

p {
  color: #7f8c8d; /* Soft Gray */
}

.form-control {
  border-color: #2c3e50; /* Navy Blue */
}

.btn-primary {
  background-color: #2c3e50; /* Navy Blue */
  border-color: #2c3e50;
}

.btn-primary:hover {
  background-color: #1a242f; /* Darker Navy Blue */
  border-color: #1a242f;
}
</style>
