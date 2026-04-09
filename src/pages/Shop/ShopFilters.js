import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const ShopFilters = () => {
  return (
    <section className="about_wrapper" style={{ padding: '50px 0' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Filter By Category</h5>
            <Form.Select>
              <option>All Categories</option>
              <option>Merchandise</option>
              <option>Ingredients</option>
              <option>Accessories</option>
            </Form.Select>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Price Range</h5>
            <Form.Range />
            <div className="d-flex justify-content-between">
              <span>$0</span>
              <span>$100</span>
            </div>
          </Col>
          <Col md={4}>
            <h5>Sort By</h5>
            <Form.Select>
              <option>Newest First</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Popularity</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShopFilters;
