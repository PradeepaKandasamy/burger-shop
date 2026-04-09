import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BlogCTA = () => {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>Inspired by our stories?</h4>
            <h2>Start Your Narrative</h2>
            <p>
              Join our community and share your own food experiences with us.
            </p>
            <button className="btn order_now px-5 py-3">
              Write For Us
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogCTA;
