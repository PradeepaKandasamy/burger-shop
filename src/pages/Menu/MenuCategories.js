import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import VegIcon from '../../assets/about/pizza.png';
import NonVegIcon from '../../assets/about/salad.png';
import DessertIcon from '../../assets/about/delivery-bike.png'; // Reusing icons as placeholders
import DrinkIcon from '../../assets/about/pizza.png';

const MenuCategories = () => {
  const categories = [
    { title: "Veg Burgers", img: VegIcon },
    { title: "Non-Veg Burgers", img: NonVegIcon },
    { title: "Desserts", img: DessertIcon },
    { title: "Drinks", img: DrinkIcon }
  ];

  return (
    <section className="about_wrapper">
      <Container>
        <Row>
          {categories.map((cat, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <Card className="text-center border-0 bg-transparent">
                <div className="about_icon mb-3 mt-4">
                  <img src={cat.img} alt={cat.title} className="img-fluid" style={{ maxWidth: '60px' }} />
                </div>
                <h5>{cat.title}</h5>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuCategories;
