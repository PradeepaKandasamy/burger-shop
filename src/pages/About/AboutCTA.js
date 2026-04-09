import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutCTA = () => {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>Ready to try the best burger?</h4>
            <h2>Join Us Today!</h2>
            <p>
              Experience the flavors that everyone is talking about. Visit our restaurant 
              or order online for a fast and delicious meal.
            </p>
            <Link to="/menu" className="btn order_now px-5 py-3">
              Order Now
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCTA;
