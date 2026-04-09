import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactInfo = () => {
  return (
    <section className="about_wrapper" style={{ padding: '80px 0' }}>
      <Container>
        <Row className="text-center">
          <Col md={4} className="mb-4 mb-md-0">
            <div className="p-4 bg-white shadow-sm rounded">
              <i className="bi bi-geo-alt fs-1 text-danger"></i>
              <h4 className="mt-3">Our Location</h4>
              <p>123 Burger Lane, Foodie City, FC 12345</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <div className="p-4 bg-white shadow-sm rounded">
              <i className="bi bi-telephone fs-1 text-warning"></i>
              <h4 className="mt-3">Phone Number</h4>
              <p>+1 (555) 123-4567</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-4 bg-white shadow-sm rounded">
              <i className="bi bi-envelope fs-1 text-primary"></i>
              <h4 className="mt-3">Email Address</h4>
              <p>hello@burgershop.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactInfo;
