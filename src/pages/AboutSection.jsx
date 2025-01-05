
import React from 'react';
import './Home.css';
import { FaGem, FaCheckCircle, FaCrown } from 'react-icons/fa'; // Example icons

const AboutSection = () => {
  return (
    <section className="about-section">
  <h2 className="about-heading">About Our Perfumes</h2>
  <p className="about-intro">
    Discover the essence of luxury with our exquisite collection of perfumes. Each fragrance is a masterpiece, crafted to evoke emotions and create lasting impressions.
  </p>
  
  {/* Feature Highlights */}
  <div className="about-features">
    <div className="feature-item">
      <FaGem className="feature-icon" />
      <h3>Unparalleled Quality</h3>
      <p>Our perfumes are crafted with the finest ingredients to ensure long-lasting and captivating fragrances.</p>
    </div>
    <div className="feature-item">
      <FaCheckCircle className="feature-icon" />
      <h3>Customer Delight</h3>
      <p>We aim to elevate your senses, delivering fragrances that resonate with your unique personality and preferences.</p>
    </div>
    <div className="feature-item">
      <FaCrown className="feature-icon" />
      <h3>Timeless Elegance</h3>
      <p>Embrace sophistication with our artfully designed bottles and luxurious scents that stand the test of time.</p>
    </div>
  </div>
</section>

  );
};

export default AboutSection;
