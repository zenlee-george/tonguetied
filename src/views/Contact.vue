<template>
  <div class="contact-page">
    <div class="container py-5">
      <h1 class="text-center mb-4" data-aos="fade-up">Get in Touch</h1>
      
      <div class="row mb-5" data-aos="fade-up" data-aos-delay="200">
        <div class="col-md-4 text-center">
          <a href="https://www.google.com/maps?q=19+Adderley+Street,+Suite+402,+Cape+Town,+8000,+South+Africa" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-map-marker-alt contact-icon"></i>
          </a>
          <h5>Our Location</h5>
          <p>19 Adderley Street, Suite 402, Cape Town, 8000, South Africa</p>
        </div>
        <div class="col-md-4 text-center" data-aos="fade-up" data-aos-delay="400">
          <a href="tel:+27215551234" class="contact-link">
            <i class="fas fa-phone-alt contact-icon"></i>
          </a>
          <h5>Call Us</h5>
          <p>+27 (21) 555-1234</p>
        </div>
        <div class="col-md-4 text-center" data-aos="fade-up" data-aos-delay="600">
          <a href="mailto:support@tonguetied.com" class="contact-link">
            <i class="fas fa-envelope contact-icon"></i>
          </a>
          <h5>Email Us</h5>
          <p>support@tonguetied.com</p>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-8" data-aos="fade-up" data-aos-delay="800">
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
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: "Contact",
  mounted() {
    AOS.init({
      duration: 800, // Duration of animations in ms
    });
  },
};
</script>

<style scoped>
.contact-page {
  background-color: #ADEBFF; /* Light Sky Blue */
  color: #00171F; /* Dark Navy */
  padding: 4rem 2rem;
}

.contact-icon {
  font-size: 3rem;
  color: #FDF4E3; /* Light yellow for icons */
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.contact-icon:hover {
  transform: scale(1.2);
}

.contact-link {
  display: inline-block;
}

h1, h5 {
  color: #00171F; /* Dark Navy */
}

p {
  color: #7F8C8D; /* Soft Gray */
}

.form-control {
  border-color: #00171F; /* Dark Navy */
}

.btn-primary {
  background-color: #00171F; /* Dark Navy */
  border-color: #00171F;
}

.btn-primary:hover {
  background-color: #003459; /* Navy Blue */
  border-color: #003459;
}

@keyframes floatInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px); /* Further left */
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes floatInFromRight {
  0% {
    opacity: 0;
    transform: translateX(100px); /* Further right */
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes floatInFromBottom {
  0% {
    opacity: 0;
    transform: translateY(100px); /* Further down */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.row > div {
  animation-duration: 1.5s; /* Slow down animation */
  animation-fill-mode: both; /* Ensure animation stays in final state */
}

.row > div:nth-child(1) {
  animation-name: floatInFromLeft;
}

.row > div:nth-child(2) {
  animation-name: floatInFromBottom;
}

.row > div:nth-child(3) {
  animation-name: floatInFromRight;
}
</style>
