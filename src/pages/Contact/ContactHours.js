import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

const ContactHours = () => {
  const hours = [
    { days: "Monday - Thursday", time: "11:00 AM - 10:00 PM" },
    { days: "Friday - Saturday", time: "11:00 AM - 12:00 AM" },
    { days: "Sunday", time: "12:00 PM - 09:00 PM" },
  ];

  return (
    <section className="about_wrapper" style={{ padding: '80px 0' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} className="text-center">
            <h2 className="mb-4">Working Hours</h2>
            <Table bordered hover className="bg-white">
              <thead>
                <tr className="bg-warning">
                  <th>Day</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>
                {hours.map((h, i) => (
                  <tr key={i}>
                    <td>{h.days}</td>
                    <td>{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactHours;
