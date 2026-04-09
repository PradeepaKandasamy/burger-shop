import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MenuOffers = () => {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="ads_box ads_img1">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <p>On orders above $50</p>
              <button className="btn order_now">Learn More</button>
            </div>
          </Col>
          <Col lg={6}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>SOFT DRINK</h5>
              <p>On every combo deal</p>
              <button className="btn order_now">Learn More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MenuOffers;
