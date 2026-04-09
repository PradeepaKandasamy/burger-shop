import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppStore from '../../assets/shop/appstore.png';
import GooglePlay from '../../assets/shop/googleplay.png';
import EShop from '../../assets/shop/e-shop.png';

const ShopCategories = () => {
  return (
    <section className="shop_section" style={{ paddingBottom: '100px' }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2>Product Categories</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6}>
            <h4>Merchandise</h4>
            <p>T-shirts, Hats, and Mugs with your favorite burger logos.</p>
            <div className="d-flex align-items-center mb-4">
              <img src={EShop} className="img-fluid me-3" alt="E-Shop" style={{ maxWidth: '100px' }} />
              <button className="btn order_now">Browse Now</button>
            </div>
          </Col>
          <Col lg={6}>
            <h4>Digital Goodies</h4>
            <p>Download our app for exclusive recipes and discounts.</p>
            <div className="d-flex mt-3">
              <img src={AppStore} className="img-fluid store me-3" alt="App Store" />
              <img src={GooglePlay} className="img-fluid store" alt="Google Play" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShopCategories;
