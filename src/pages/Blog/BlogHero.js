import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BlogHero = () => {
  return (
    <section className="blog_hero_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center">
            <h1 className="text-white">Our Food Blog</h1>
            <h4 className="text-white">Stories, Recipes, and Foodie Adventures</h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogHero;
