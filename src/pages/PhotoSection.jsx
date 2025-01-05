import React, { useRef, useEffect } from 'react';
import './Home.css';
import image1 from './image5.jpg'; // Correct path
import image2 from './image4.jpg';
import image3 from './image7.jpg';
import image4 from './image2.jpg';

const PhotoSection = () => {
  const images = [
    { imgSrc: image1, alt: 'Elegant perfume bottle with floral accents' },
    { imgSrc: image2, alt: 'Luxury perfume inspired by mountain freshness' },
    { imgSrc: image3, alt: 'Night-time fragrance with a captivating city vibe' },
    { imgSrc: image4, alt: 'Coastal-inspired scent with oceanic notes' },
  ];

  const containerRef = useRef(null);

  // Handle WhatsApp share
  const handleSendToWhatsApp = (image) => {
    const message = `Check out this perfume: ${image.alt}`;
    const phoneNumber = 'YOUR_PHONE_NUMBER'; // Replace with your actual phone number
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  // Automatic scrolling of images every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const container = containerRef.current;
      if (container) {
        const scrollAmount = container.offsetWidth; // Get the container's width
        container.scrollBy({
          left: scrollAmount, // Scroll to the right by the container's width
          behavior: 'smooth', // Smooth scrolling
        });
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval when component is unmounted
  }, []);

  return (
    <div>
      {/* Photo Section */}
      <div className="photo-section" ref={containerRef}>
        {images.map((image, index) => (
          <div className="card" key={index}>
            <div className="image-box">
              <img
                src={image.imgSrc}  // Correct imgSrc usage
                alt={image.alt || `Image ${index + 1}`}
                className="photo"
                onClick={() => handleSendToWhatsApp(image)} // Send to WhatsApp when clicked
              />
            </div>
            <div className="content">
              <h2>{image.alt || `Card Title ${index + 1}`}</h2>
              <p>Explore our range of luxury perfumes for every occasion.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoSection;
