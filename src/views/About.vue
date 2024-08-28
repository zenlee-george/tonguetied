<template>
  <div class="about">
    <div class="container">
      <!-- Intro Section -->
      <div class="intro text-center" data-aos="fade-up">
        <h1>About Us</h1>
        <p>Discover the story behind Tongue-Tied and our commitment to quality and style.</p>
      </div>

      <!-- Company History -->
      <div class="company-history" data-aos="fade-up" data-aos-delay="200">
        <h2>Our History</h2>
        <div class="history-content">
          <p>
            Founded in [Year], Tongue-Tied started as a small boutique with a vision to redefine men's accessories. Our journey began with a passion for craftsmanship and a dedication to providing stylish, high-quality ties. Over the years, we have grown into a renowned name in the fashion industry, known for our elegance and attention to detail.
          </p>
          <img src="https://via.placeholder.com/800x400" alt="Our Story" class="history-image" />
        </div>
      </div>

      <!-- Founder’s Message -->
      <div class="founder-message text-center" data-aos="fade-up" data-aos-delay="400">
        <h2>Message from the Founder</h2>
        <p>
          "At Tongue-Tied, we believe that a tie is more than just an accessory; it’s a statement of individuality and sophistication. We take pride in every tie we create, ensuring it meets the highest standards of quality and design. Thank you for being a part of our journey." 
          <br />
          <strong>- [Founder's Name]</strong>
        </p>
      </div>

      <!-- Mission and Values -->
      <div class="mission-values">
        <div class="mission" data-aos="fade-up" data-aos-delay="600">
          <h2>Our Mission</h2>
          <p>
            Our mission is to offer a curated selection of ties that blend classic style with contemporary design. We strive to provide exceptional quality and service to help our customers express their unique style with confidence.
          </p>
        </div>

        <div class="values" data-aos="fade-up" data-aos-delay="800">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Elegance:</strong> We believe in timeless style and sophisticated design.</li>
            <li><strong>Quality:</strong> Our ties are crafted from the finest materials to ensure durability and comfort.</li>
            <li><strong>Customer Satisfaction:</strong> We are dedicated to providing a seamless shopping experience and excellent service.</li>
          </ul>
        </div>
      </div>

      <!-- Team Section -->
      <div class="team text-center" data-aos="fade-up" data-aos-delay="1000">
        <h2>Meet Our Team</h2>
        <div class="team-members">
          <div class="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <p><strong>[Team Member Name]</strong> - [Position]</p>
          </div>
          <div class="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <p><strong>[Team Member Name]</strong> - [Position]</p>
          </div>
          <!-- Add more team members as needed -->
        </div>
      </div>

      <!-- Contact Call to Action -->
      <div class="contact-call-to-action text-center" data-aos="fade-up" data-aos-delay="1200">
        <h2>Get in Touch</h2>
        <p>If you have any questions or would like to learn more about our products, feel free to <a href="/contact">contact us</a>. We’d love to hear from you!</p>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: "About",
  mounted() {
    AOS.init({
      duration: 800, // Duration of animations in ms
    });
  },
};
</script>

<style scoped>
.about {
  background-color: #f5f5f5; /* Cream White */
  color: #2c3e50; /* Navy Blue */
  padding: 4rem 2rem;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}

.intro, .founder-message, .team, .contact-call-to-action {
  margin-bottom: 3rem;
}

h1, h2 {
  font-family: 'Playfair Display', serif;
  color: #2c3e50; /* Navy Blue */
  text-align: center;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
  border-bottom: 2px solid #f39c12; /* Gold */
  padding-bottom: 0.5rem;
}

p {
  font-size: 1.125rem;
  line-height: 1.6;
}

.history-content {
  text-align: center;
}

.history-image {
  width: 100%;
  border-radius: 8px;
  margin-top: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 1.125rem;
  line-height: 1.6;
}

li strong {
  color: #f39c12; /* Gold */
}

.team-members {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.team-member {
  text-align: center;
}

.team-member img {
  border-radius: 50%;
  margin-bottom: 0.5rem;
}

.contact-call-to-action a {
  color: #f39c12; /* Gold */
  text-decoration: none;
}

.contact-call-to-action a:hover {
  text-decoration: underline;
}
</style>
