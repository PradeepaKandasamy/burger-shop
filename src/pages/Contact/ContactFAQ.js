import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const ContactFAQ = () => {
  const faqs = [
    { q: "Do you offer vegan options?", a: "Yes, we have a variety of plant-based burgers and sides." },
    { q: "Is there a delivery fee?", a: "Delivery is free for orders over $30 within our local zone." },
    { q: "Can I book a table for events?", a: "Absolutely! Contact us via the form or phone to book for private parties." },
    { q: "Where do you source your ingredients?", a: "We partner with local farmers to ensure the freshest produce and meats." },
  ];

  return (
    <section className="promotion_section" style={{ backgroundColor: '#f4f4f4' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <h2 className="text-center mb-5">Frequently Asked Questions</h2>
            <Accordion defaultActiveKey="0">
              {faqs.map((faq, i) => (
                <Accordion.Item eventKey={i.toString()} key={i} className="mb-3 border-0 shadow-sm">
                  <Accordion.Header>{faq.q}</Accordion.Header>
                  <Accordion.Body>{faq.a}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactFAQ;
