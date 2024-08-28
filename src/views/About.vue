<template>
  <div class="about">
    <div class="container">
      <h1>About Us</h1>
      <div class="content">
        <section class="company-history">
          <h2>Our History</h2>
          <p>
            Founded in 2024, Tongue-Tied has been at the forefront of high-quality
            and stylish ties. With a commitment to craftsmanship and elegance, we have
            grown from a small boutique to a leading name in the fashion industry.
          </p>
        </section>
        
        <section class="mission">
          <h2>Our Mission</h2>
          <p>
            At Tongue-Tied, our mission is to offer a curated selection of ties that
            blend classic style with contemporary design. We strive to provide exceptional
            quality and service to help our customers express their unique style with
            confidence.
          </p>
        </section>

        <section class="values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Elegance:</strong> We believe in timeless style and sophisticated design.</li>
            <li><strong>Quality:</strong> Our ties are crafted from the finest materials to ensure durability and comfort.</li>
            <li><strong>Customer Satisfaction:</strong> We are dedicated to providing a seamless shopping experience and excellent service.</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
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

h1 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.content {
  text-align: left;
}

section {
  margin-bottom: 2rem;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #2c3e50; /* Navy Blue */
  border-bottom: 2px solid #f39c12; /* Gold */
  padding-bottom: 0.5rem;
}

p {
  font-size: 1.125rem;
  line-height: 1.6;
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
</style>
