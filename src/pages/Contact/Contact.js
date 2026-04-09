import React from 'react';
import Layout from '../../components/Layouts/Layout';
import Footer from '../../components/Layouts/Footer';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import ContactHours from './ContactHours';
import ContactFAQ from './ContactFAQ';
import ContactSocial from './ContactSocial';
import '../../styles/HomeStyle.css';

const Contact = () => {
  return (
    <Layout>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <ContactHours />
      <ContactFAQ />
      <ContactSocial />
      <Footer />
    </Layout>
  );
};

export default Contact;
