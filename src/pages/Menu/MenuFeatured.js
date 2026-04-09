import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from '../../components/Layouts/Cards';
import Image1 from '../../assets/menu/burger-11.jpg';
import Image2 from '../../assets/menu/burger-12.jpg';
import Image3 from '../../assets/menu/burger-13.jpg';

const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Crispy Chicken",
    paragraph: "Chicken breast, romaine lettuce, tomatoes, pickles",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0002",
    image: Image2,
    title: "Ultimate Bacon",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    price: 99.32,
  },
  {
    id: "0003",
    image: Image3,
    title: "Black Sheep",
    paragraph: "American cheese, tomato, onion, lettuce, picle",
    rating: 4,
    price: 69.15,
  },
];

const MenuFeatured = () => {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>Featured Dishes</h2>
            <p className="para">Our hand-picked selections you simply must try!</p>
          </Col>
        </Row>
        <Row>
          {mockData.map((cardData, index) => (
            <Cards
              key={index}
              image={cardData.image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              renderRatingIcons={(rating) => {
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
              }}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuFeatured;
