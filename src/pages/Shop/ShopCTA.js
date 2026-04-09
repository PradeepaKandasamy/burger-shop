import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ShopCTA = () => {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>Can't find what you need?</h4>
            <h2>Contact Our Support</h2>
            <p>
              Our shop team is here to help you with your orders and inquiries.
            </p>
            <button className="btn order_now px-5 py-3">
              Get Help
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShopCTA;
