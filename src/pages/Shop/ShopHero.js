import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ShopHero = () => {
  return (
    <section className="shop_hero_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center">
            <h1 className="text-white">Our Burger Shop</h1>
            <h4 className="text-white">Shop Your Favorite Merchandise & Ingredients</h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShopHero;
