import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactMap = () => {
  return (
    <section className="contact_map_section" style={{ height: '450px', width: '100%' }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050ef5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy"
        title="Google Map"
      ></iframe>
    </section>
  );
};

export default ContactMap;
