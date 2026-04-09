import React from 'react';
import Layout from '../../components/Layouts/Layout';
import Footer from '../../components/Layouts/Footer';
import AboutHero from './AboutHero';
import AboutStory from './AboutStory';
import AboutVision from './AboutVision';
import AboutWhyChooseUs from './AboutWhyChooseUs';
import AboutTeam from './AboutTeam';
import AboutTestimonials from './AboutTestimonials';
import AboutCTA from './AboutCTA';
import '../../styles/HomeStyle.css';

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <AboutStory />
      <AboutVision />
      <AboutWhyChooseUs />
      <AboutTeam />
      <AboutTestimonials />
      <AboutCTA />
      <Footer />
    </Layout>
  );
};

export default About;
