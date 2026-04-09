import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import User1 from '../../assets/blog/review-author-1.jpg';
import User2 from '../../assets/blog/review-author-2.jpg';
import User3 from '../../assets/blog/review-author-3.jpg';

const AboutTestimonials = () => {
  return (
    <section className="blog_section">
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img text-center">
                  <img src={User1} className="img-fluid" alt="User-1" />
                </div>
                <p>
                  "The best burger I've ever had! The ingredients were so fresh and it was cooked to perfection. 
                  Will definitely be back soon!"
                </p>
                <div className="item_rating text-center">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img text-center">
                  <img src={User2} className="img-fluid" alt="User-2" />
                </div>
                <p>
                  "Great atmosphere and even better food. The staff were friendly and the service was quick. 
                  Highly recommend the cheeseburger!"
                </p>
                <div className="item_rating text-center">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY SIMON DUPONT</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img text-center">
                  <img src={User3} className="img-fluid" alt="User-3" />
                </div>
                <p>
                  "A hidden gem of a burger joint. The quality is consistent and the portion sizes are generous. 
                  Absolute value for money."
                </p>
                <div className="item_rating text-center">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY SOPHIE MARSHALL</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTestimonials;
