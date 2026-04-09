import React from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';

const BlogNewsletter = () => {
  return (
    <section className="promotion_section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2>Join Our Foodie Newsletter</h2>
            <p className="para">Get the latest recipes and stories delivered straight to your inbox.</p>
            <Form className="mt-4">
              <InputGroup size="lg" className="mb-3">
                <Form.Control
                  placeholder="Your Email Address"
                  aria-label="Email"
                  className="rounded-0 rounded-start border-0"
                />
                <Button className="order_now border-0 rounded-0 rounded-end px-5">
                  Subscribe
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogNewsletter;
