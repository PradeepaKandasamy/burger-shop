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

const products = [
  { id: "1", image: Image1, title: "Burger Poster", paragraph: "A3 size, high gloss", rating: 5, price: 12.99 },
  { id: "2", image: Image2, title: "Chef Apron", paragraph: "Durable denim", rating: 4.5, price: 35.00 },
  { id: "3", image: Image3, title: "Burger Socks", paragraph: "Fun and comfy", rating: 4, price: 10.00 },
  { id: "4", image: Image4, title: "Tote Bag", paragraph: "Eco-friendly", rating: 5, price: 18.00 },
  { id: "5", image: Image5, title: "Secret Spice", paragraph: "Our signature blend", rating: 4, price: 8.99 },
  { id: "6", image: Image6, title: "Hot Sauce", paragraph: "Extra spicy", rating: 4.5, price: 7.50 },
  { id: "7", image: Image7, title: "Wood Board", paragraph: "For serving burgers", rating: 4, price: 45.00 },
  { id: "8", image: Image8, title: "Gift Card", paragraph: "Give the gift of flavor", rating: 5, price: 50.00 },
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

const ShopGrid = () => {
  return (
    <section className="menu_section" style={{ paddingTop: '0' }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2>All Products</h2>
          </Col>
        </Row>
        <Row>
          {products.map((item) => (
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

export default ShopGrid;
