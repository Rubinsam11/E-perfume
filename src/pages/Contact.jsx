import React from 'react';
import './Home.css'; // Ensure this CSS file exists and is properly styled.

export function Contact() {
  return (
    <section id="contact" className="contact" style={{ padding: '100px 0 50px' }}>
      <div
        className="container"
        style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}
      >
        {/* Google Map on the left side */}
        <div
          className="map-container"
          style={{ flex: 1, minWidth: '300px', marginRight: '20px', maxWidth: '600px' }}
        >
          <iframe
            title="Google Map Location of Kottar, Tamil Nadu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.137547478147!2d77.4338418!3d8.1802275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54ba5e0bbd6dbb%3A0xf9e3480d78c9a229!2sKottar%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1674126098281!5m2!1sen!2sus"
            width="100%"
            height="500"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: '0' }}
          ></iframe>
        </div>

        {/* Contact Form on the right side */}
        <div
          className="contact-form-container"
          style={{ flex: 1, minWidth: '300px', maxWidth: '500px' }}
        >
          <h2 className="section-title">Get in Touch</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" id="name" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" id="email" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea id="message" className="form-textarea" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
