import React from 'react';
import Layout from '../../components/Layouts/Layout';
import Footer from '../../components/Layouts/Footer';
import ShopHero from './ShopHero';
import ShopCategories from './ShopCategories';
import ShopFeatured from './ShopFeatured';
import ShopGrid from './ShopGrid';
import ShopFilters from './ShopFilters';
import ShopOffers from './ShopOffers';
import ShopCTA from './ShopCTA';
import '../../styles/HomeStyle.css';

const Shop = () => {
  return (
    <Layout>
      <ShopHero />
      <ShopCategories />
      <ShopFeatured />
      <ShopGrid />
      <ShopFilters />
      <ShopOffers />
      <ShopCTA />
      <Footer />
    </Layout>
  );
};

export default Shop;
