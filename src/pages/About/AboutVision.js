import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutVision = () => {
  return (
    <section className="about_wrapper">
      <Container>
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <div className="about_box text-center">
              <h4>Our Mission</h4>
              <p>
                To provide the ultimate burger experience by combining exceptional flavors, 
                outstanding service, and a welcoming atmosphere for every guest.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="about_box text-center">
              <h4>Our Vision</h4>
              <p>
                To be the leading artisanal burger brand known for our dedication to sustainable 
                farming, culinary excellence, and community engagement.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutVision;
