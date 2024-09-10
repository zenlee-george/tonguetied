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
            Founded in 2024, Tongue-Tied started as a small boutique with a vision to redefine men's accessories. Our journey began with a passion for craftsmanship and a dedication to providing stylish, high-quality ties. Over the years, we have grown into a renowned name in the fashion industry, known for our elegance and attention to detail.
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
          <strong>- Zen Lee George</strong>
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
          <div class="team-member left" data-aos="fade-left">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <p><strong>[Team Member Name]</strong> - [Position]</p>
          </div>
          <div class="team-member center" data-aos="fade-up">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <p><strong>[Team Member Name]</strong> - [Position]</p>
          </div>
          <div class="team-member right" data-aos="fade-right">
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
  background-color: #ADEBFF; /* Light Sky Blue */
  color: #00171F; /* Dark Navy */
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
  font-family: 'Irish Grover', cursive;
  color: #00171F; /* Dark Navy */
  text-align: center;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
  border-bottom: 2px solid #FDF4E3; /* Light yellow */
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
  border-radius: 15px;
  margin-top: 1rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
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
  color: #FDF4E3; /* Light yellow */
}

.team-members {
  display: flex;
  justify-content: space-around;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.team-member {
  text-align: center;
  border-radius: 20px;
  padding: 1rem;
  background-color: #FDF4E3; /* Light yellow */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation-fill-mode: both;
}

.team-member.left {
  animation: floatInLeft 5s ease-out;
}

.team-member.center {
  animation: floatInUp 5s ease-out;
}

.team-member.right {
  animation: floatInRight 5s ease-out;
}

.team-member:hover {
  transform: scale(1.05) rotate(-3deg);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.team-member img {
  border-radius: 50%;
  margin-bottom: 0.5rem;
}

.contact-call-to-action a {
  color: #FDF4E3; /* Light yellow */
  text-decoration: none;
}

.contact-call-to-action a:hover {
  text-decoration: underline;
}

@keyframes floatIn {
  0% {
    opacity: 0;
    transform: translateY(80px); /* Start further down */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floatInLeft {
  0% {
    opacity: 0;
    transform: translateX(-80px); /* Start further left */
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes floatInRight {
  0% {
    opacity: 0;
    transform: translateX(80px); /* Start further right */
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes floatInUp {
  0% {
    opacity: 0;
    transform: translateY(80px); /* Start further down */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
