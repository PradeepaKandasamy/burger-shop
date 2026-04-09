import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PizzaIcon from '../../assets/about/pizza.png';
import SaladIcon from '../../assets/about/salad.png';
import DeliveryIcon from '../../assets/about/delivery-bike.png';

const AboutWhyChooseUs = () => {
  const features = [
    {
      img: PizzaIcon,
      title: "Fresh Ingredients",
      text: "We use only the freshest produce and premium meats delivered daily from local farms."
    },
    {
      img: SaladIcon,
      title: "Hand-Crafted",
      text: "Every burger is hand-pressed and cooked to order to ensure the perfect taste and texture."
    },
    {
      img: DeliveryIcon,
      title: "Fast Delivery",
      text: "Our dedicated delivery team ensures your food arrives hot and fresh at your doorstep."
    }
  ];

  return (
    <section className="about_section" style={{ backgroundColor: '#fff', paddingBottom: '100px' }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2>Why Choose Us?</h2>
          </Col>
        </Row>
        <Row>
          {features.map((feature, index) => (
            <Col md={4} key={index} className="mb-4">
              <div className="about_box text-center">
                <div className="about_icon mb-3">
                  <img src={feature.img} alt={feature.title} className="img-fluid" style={{ maxWidth: '60px' }} />
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AboutWhyChooseUs;
