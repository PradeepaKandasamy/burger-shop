import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MenuHero = () => {
  return (
    <section className="menu_hero_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center text-white">
            <h1>Our Delicious Menu</h1>
            <h4>Expertly Crafted Burgers, Sides, and More</h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MenuHero;
