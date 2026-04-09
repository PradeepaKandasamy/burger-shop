import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MenuCTA = () => {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>Hungry for more?</h4>
            <h2>Place Your Order Now!</h2>
            <p>
              Get your favorite burgers delivered hot and fresh to your doorstep in 30 minutes.
            </p>
            <button className="btn order_now px-5 py-3">
              Order Online
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MenuCTA;
