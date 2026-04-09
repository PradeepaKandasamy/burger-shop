import React from 'react';
import Layout from '../../components/Layouts/Layout';
import Footer from '../../components/Layouts/Footer';
import BlogHero from './BlogHero';
import BlogFeatured from './BlogFeatured';
import BlogCategories from './BlogCategories';
import BlogGrid from './BlogGrid';
import BlogPopular from './BlogPopular';
import BlogNewsletter from './BlogNewsletter';
import BlogCTA from './BlogCTA';
import '../../styles/HomeStyle.css';

const Blog = () => {
  return (
    <Layout>
      <BlogHero />
      <BlogFeatured />
      <BlogCategories />
      <BlogGrid />
      <BlogPopular />
      <BlogNewsletter />
      <BlogCTA />
      <Footer />
    </Layout>
  );
};

export default Blog;
