import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BlogCategories = () => {
  const categories = ["Recipes", "Lifestyle", "Events", "Health", "Community"];

  return (
    <section className="about_wrapper" style={{ padding: '40px 0' }}>
      <Container>
        <Row className="justify-content-center">
          {categories.map((cat, index) => (
            <Col key={index} xs="auto" className="mb-2">
              <button className="btn btn-outline-dark rounded-pill px-4">{cat}</button>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogCategories;
