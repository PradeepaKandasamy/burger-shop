import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from '../../components/Layouts/Cards';
import Image1 from '../../assets/menu/burger-11.jpg';
import Image2 from '../../assets/menu/burger-12.jpg';
import Image3 from '../../assets/menu/burger-13.jpg';
import Image4 from '../../assets/menu/burger-14.jpg';
import Image5 from '../../assets/menu/burger-15.jpg';
import Image6 from '../../assets/menu/burger-16.jpg';
import Image7 from '../../assets/menu/burger-17.jpg';
import Image8 from '../../assets/menu/burger-18.jpg';

const fullMenu = [
  { id: "1", image: Image1, title: "Classic Burger", paragraph: "Beef, cheese, lettuce", rating: 5, price: 10.99 },
  { id: "2", image: Image2, title: "Spicy Deluxe", paragraph: "Chicken, jalapeños", rating: 4.5, price: 12.99 },
  { id: "3", image: Image3, title: "Double Cheese", paragraph: "2x Beef, 2x Cheese", rating: 4, price: 14.99 },
  { id: "4", image: Image4, title: "Veggie Supreme", paragraph: "Patty, avocado, sprouts", rating: 5, price: 11.99 },
  { id: "5", image: Image5, title: "Bacon Bliss", paragraph: "Beef, bacon, BBQ sauce", rating: 4, price: 13.99 },
  { id: "6", image: Image6, title: "Fish Fillet", paragraph: "Fish, tartar sauce", rating: 4.5, price: 12.49 },
  { id: "7", image: Image7, title: "Mushroom Swiss", paragraph: "Beef, mushrooms", rating: 4, price: 12.99 },
  { id: "8", image: Image8, title: "Giant Stack", paragraph: "3 Layers of beef", rating: 5, price: 18.99 },
];

const renderRatingIcons = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={i} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={i} className="bi bi-star"></i>);
    }
  }
  return stars;
};

const MenuGrid = () => {
  return (
    <section className="menu_section" style={{ paddingTop: '0' }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2>Full Menu Grid</h2>
          </Col>
        </Row>
        <Row>
          {fullMenu.map((item) => (
            <Cards
              key={item.id}
              image={item.image}
              rating={item.rating}
              title={item.title}
              paragraph={item.paragraph}
              price={item.price}
              renderRatingIcons={renderRatingIcons}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuGrid;
