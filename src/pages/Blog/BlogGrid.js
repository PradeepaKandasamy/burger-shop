import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Blog1 from '../../assets/menu/burger-11.jpg';
import Blog2 from '../../assets/menu/burger-12.jpg';
import Blog3 from '../../assets/menu/burger-13.jpg';

const posts = [
  { id: 1, title: "10 Best Burger Toppings", date: "April 1, 2026", img: Blog1 },
  { id: 2, title: "Vegan vs Beef: The Debate", date: "March 25, 2026", img: Blog2 },
  { id: 3, title: "Our New Summer Menu", date: "March 15, 2026", img: Blog3 },
  { id: 4, title: "Burger Cooking Techniques", date: "March 10, 2026", img: Blog1 },
  { id: 5, title: "Interview with our Chef", date: "March 5, 2026", img: Blog2 },
  { id: 6, title: "Community Events in April", date: "March 1, 2026", img: Blog3 },
];

const BlogGrid = () => {
  return (
    <section className="menu_section">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2>Latest Blog Posts</h2>
          </Col>
        </Row>
        <Row>
          {posts.map((post) => (
            <Col md={4} key={post.id} className="mb-4">
              <Card className="border-0 shadow-sm h-100">
                <Card.Img variant="top" src={post.img} />
                <Card.Body>
                  <Card.Text className="text-danger small fw-bold">{post.date}</Card.Text>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text className="text-muted">
                    Learn more about the latest trends in the burger industry and our kitchen.
                  </Card.Text>
                  <button className="btn btn-link text-warning p-0 fw-bold">Read More →</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogGrid;
