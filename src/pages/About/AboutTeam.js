import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Team1 from '../../assets/menu/burger-11.jpg'; // Using existing menu images as placeholder for team
import Team2 from '../../assets/menu/burger-12.jpg';
import Team3 from '../../assets/menu/burger-13.jpg';

const AboutTeam = () => {
  const team = [
    { name: "John Doe", role: "Head Chef", img: Team1 },
    { name: "Jane Smith", role: "Restaurant Manager", img: Team2 },
    { name: "Mike Tyson", role: "Grill Master", img: Team3 }
  ];

  return (
    <section className="menu_section bg-light">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2>Our Expert Team</h2>
            <p className="para">Meet the passionate individuals behind your favorite burgers.</p>
          </Col>
        </Row>
        <Row>
          {team.map((member, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="border-0 shadow-sm text-center">
                <Card.Img variant="top" src={member.img} style={{ height: '300px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text className="text-muted">{member.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AboutTeam;
