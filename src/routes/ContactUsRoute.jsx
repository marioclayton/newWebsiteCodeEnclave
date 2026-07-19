import React from 'react'
import ContactHero from '../components/ContactHero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from "../scrollToTop.jsx";

import { Helmet } from 'react-helmet';

const ContactUsRoute = () => {
  return (
    <div> 
      <Helmet>
              <title>Code Enclave LLC - Contact Us</title>
              <meta name="description" content="Contact Code Enclave LLC for web development, SEO, branding, and project support." />
              <meta property="og:title" content="Code Enclave LLC - Contact Us" />
              <meta property="og:description" content="Contact Code Enclave LLC for web development, SEO, branding, and project support." />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
      <ScrollToTop />
      <Navbar />
      <ContactHero />
      <Footer />
    </div>
  )
}

export default ContactUsRoute