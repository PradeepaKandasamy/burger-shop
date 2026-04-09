import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactSocial = () => {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col sm={8}>
            <h4>Follow Our Journey</h4>
            <h2>Join Our Community</h2>
            <div className="d-flex justify-content-center mt-4">
              <a href="#" className="mx-3 text-white fs-2"><i className="bi bi-facebook"></i></a>
              <a href="#" className="mx-3 text-white fs-2"><i className="bi bi-instagram"></i></a>
              <a href="#" className="mx-3 text-white fs-2"><i className="bi bi-twitter"></i></a>
              <a href="#" className="mx-3 text-white fs-2"><i className="bi bi-youtube"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSocial;
