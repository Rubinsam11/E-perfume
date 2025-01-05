import React from 'react';
import { FaGem, FaCheckCircle, FaCrown } from 'react-icons/fa'; // Icons
import { ArrowRight } from 'lucide-react'; // Icon for arrow
import { Link } from 'react-router-dom'; // Navigation link
import AboutSection from './AboutSection'; // About section component
import PhotoSection from './PhotoSection'; // Photo section component
import AOS from 'aos'; // Animation on scroll library
import 'aos/dist/aos.css'; // AOS styles
import { gsap } from 'gsap'; // Animation library
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Scroll-based animations
import './Home.css'; // Styles for the Home component
import VideoPlayer from './VideoPlayer'; // Video player component

// Registering GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export function Home() {
  React.useEffect(() => {
    // Initializing AOS for scroll animations
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-container">
      <div className="home-wrapper">
        {/* Header Section */}
        <div className="home-header" data-aos="fade-up">
          <h1 className="home-title">Discover Your Signature Scent</h1>
          <p className="home-description">
            Explore our collection of handcrafted perfumes, each telling its own unique story.
            Find the perfect fragrance that speaks to your soul.
          </p>
          <Link to="/products" className="home-link">
            Explore Collection
            <ArrowRight className="icon" />
          </Link>
        </div>
        {/* Video Section */}
      <div data-aos="fade-up">
        <VideoPlayer 
          src="https://static.vecteezy.com/system/resources/previews/049/989/374/mp4/blank-luxury-perfume-bottle-on-a-black-background-beside-fog-smoked-free-video.mp4" 
          poster="https://via.placeholder.com/600x300?text=Video+Placeholder"
        />
      </div>

        {/* Content Section */}
        <div className="home-content">
          {/* Image Section */}
          <div className="home-image-container" data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800"
              alt="Luxury Perfume"
              className="home-image"
            />
          </div>
          {/* Text Section */}
          <div className="home-text" data-aos="fade-left">
            <h2 className="home-subtitle">Crafted with Passion</h2>
            <p className="home-text-description">
              Each fragrance in our collection is carefully crafted using the finest ingredients
              sourced from around the world. Our master perfumers blend traditional techniques
              with modern innovation to create unique, lasting scents that tell a story.
            </p>
          </div>
        </div>
      </div>

     

      {/* Photo Section */}
      <div data-aos="fade-up">
        <PhotoSection />
      </div>

      {/* About Section */}
      <div data-aos="fade-up">
        <AboutSection />
      </div>
    </div>
  );
}

export default Home;
