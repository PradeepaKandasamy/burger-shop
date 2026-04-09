import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <section className="about_section" style={{ backgroundColor: '#fff' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-5">
              <h2>Send Us a Message</h2>
              <p>Have a question or feedback? Fill out the form below and we'll get back to you.</p>
            </div>
            <Form className="bg-light p-4 p-md-5 rounded shadow-sm">
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="formName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="What is this regarding?" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Your message here..." />
              </Form.Group>
              <div className="text-center">
                <Button className="order_now px-5 py-3">Send Message</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
