import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const BlogPopular = () => {
  const popular = [
    "How to Toast Buns Properly",
    "Selecting the Right Cheese for Your Burger",
    "History of the Hamburger",
    "Our Favorite Potato Salad Recipe",
    "Healthy Burger Alternatives"
  ];

  return (
    <section className="about_wrapper" style={{ backgroundColor: '#f9f9f9' }}>
      <Container>
        <Row>
          <Col md={12} className="text-center mb-4">
            <h4>Popular Discussions</h4>
          </Col>
          <Col md={{ span: 8, offset: 2 }}>
            <ListGroup variant="flush">
              {popular.map((item, index) => (
                <ListGroup.Item key={index} className="bg-transparent py-3 d-flex justify-content-between align-items-center">
                  <span>{item}</span>
                  <span className="badge bg-warning rounded-pill px-3">Trending</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogPopular;
