import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ShopOffers = () => {
  return (
    <section className="promotion_section">
      <Container>
        <Row className="text-center">
          <Col>
            <h2>Exclusive Shop Offers!</h2>
            <p className="para">Save big on your favorite burger gear this month.</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6} className="mb-4">
            <div className="p-5 bg-white shadow-sm rounded border-start border-warning border-5">
              <h3>Buy 2 Get 1 Free</h3>
              <p>On all T-shirts and Apparel. Mix and match your styles!</p>
              <button className="btn order_now">Shop Apparel</button>
            </div>
          </Col>
          <Col md={6}>
            <div className="p-5 bg-white shadow-sm rounded border-start border-danger border-5">
              <h3>20% OFF</h3>
              <p>On your first order from our official mobile app.</p>
              <button className="btn order_now">Get App</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShopOffers;
