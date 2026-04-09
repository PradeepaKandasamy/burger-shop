import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Blog1 from '../../assets/menu/burger-11.jpg';

const BlogFeatured = () => {
  return (
    <section className="about_section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <img src={Blog1} className="img-fluid rounded shadow" alt="Featured Blog" />
          </Col>
          <Col lg={6}>
            <span className="text-danger fw-bold">FEATURED POST</span>
            <h2 className="mt-2">The Secret to the Perfect Burger Patty</h2>
            <p>
              Many people ask us what makes our burgers so special. Is it the grill? 
              Is it the seasoning? Today, we're diving deep into the science of the 
              perfect patty and how you can achieve it at home.
            </p>
            <button className="btn order_now">Read Full Story</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogFeatured;
