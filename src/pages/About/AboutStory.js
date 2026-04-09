import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutImage from '../../assets/about/about-1.jpg';

const AboutStory = () => {
  return (
    <section className="about_section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center mb-5 mb-lg-0">
            <img src={AboutImage} className="img-fluid" alt="About Us" />
          </Col>
          <Col lg={6}>
            <h2>Our Journey</h2>
            <p>
              Founded in 2005, our burger shop started with a simple belief: that everyone deserves a high-quality, 
              delicious burger made with fresh, locally sourced ingredients. What began as a small food truck 
              has grown into a beloved community landmark.
            </p>
            <p>
              We've spent years perfecting our recipes, from our secret burger blend to our signature sauces. 
              Our commitment to quality has never wavered, and we continue to innovate while staying true to our roots.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutStory;
