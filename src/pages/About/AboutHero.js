import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutHero = () => {
  return (
    <section className="about_hero_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center">
            <h1 className="text-white">Our Story</h1>
            <h4 className="text-white">Discover the Passion Behind Our Burgers</h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutHero;
