import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from '../../components/Layouts/Cards';
import Image1 from '../../assets/menu/burger-14.jpg';
import Image2 from '../../assets/menu/burger-15.jpg';
import Image3 from '../../assets/menu/burger-16.jpg';

const featuredProducts = [
  { id: "s1", image: Image1, title: "Burger T-Shirt", paragraph: "100% Cotton, Premium Quality", rating: 5, price: 25.00 },
  { id: "s2", image: Image2, title: "Vintage Cap", paragraph: "One size fits all", rating: 4.5, price: 20.00 },
  { id: "s3", image: Image3, title: "Ceramic Mug", paragraph: "Dishwasher safe", rating: 5, price: 15.00 },
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

const ShopFeatured = () => {
  return (
    <section className="menu_section">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2>Featured Products</h2>
            <p className="para">Check out our most popular items!</p>
          </Col>
        </Row>
        <Row>
          {featuredProducts.map((item) => (
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

export default ShopFeatured;
