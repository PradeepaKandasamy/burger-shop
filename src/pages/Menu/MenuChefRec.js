import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image11 from '../../assets/menu/burger-11.jpg';

const MenuChefRec = () => {
  return (
    <section className="promotion_section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center mb-5 mb-lg-0">
            <img src={Image11} className="img-fluid rounded" alt="Chef recommendation" />
          </Col>
          <Col lg={6}>
            <h2>Chef's Special Recommendation</h2>
            <p>
              The "Royal Burger" is a masterpiece of flavors. Our head chef combines 
              premium wagyu beef with caramelized onions, truffle aioli, and aged swiss cheese.
            </p>
            <ul>
              <li>
                <p>Triple-Seared Wagyu Patty</p>
              </li>
              <li>
                <p>Authentic Truffle Infusion</p>
              </li>
              <li>
                <p>Hand-picked Organic Greens</p>
              </li>
            </ul>
            <button className="btn order_now">Order the Royal</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MenuChefRec;
