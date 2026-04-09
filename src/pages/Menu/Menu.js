import React from 'react';
import Layout from '../../components/Layouts/Layout';
import Footer from '../../components/Layouts/Footer';
import MenuHero from './MenuHero';
import MenuCategories from './MenuCategories';
import MenuFeatured from './MenuFeatured';
import MenuGrid from './MenuGrid';
import MenuOffers from './MenuOffers';
import MenuChefRec from './MenuChefRec';
import MenuCTA from './MenuCTA';
import '../../styles/HomeStyle.css';

const Menu = () => {
  return (
    <Layout>
      <MenuHero />
      <MenuCategories />
      <MenuFeatured />
      <MenuGrid />
      <MenuOffers />
      <MenuChefRec />
      <MenuCTA />
      <Footer />
    </Layout>
  );
};

export default Menu;
