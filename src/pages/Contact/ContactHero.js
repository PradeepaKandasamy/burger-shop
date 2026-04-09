import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactHero = () => {
  return (
    <section className="contact_hero_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center text-white">
            <h1>Get In Touch</h1>
            <h4>We'd Love to Hear From You</h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactHero;
