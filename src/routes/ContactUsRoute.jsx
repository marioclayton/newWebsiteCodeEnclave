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
              <title>Discuss Your Project | Code Enclave LLC</title>
              <meta name="description" content="Talk with Code Enclave LLC about custom web development, custom software development, and business automation for your next build." />
              <meta property="og:title" content="Discuss Your Project | Code Enclave LLC" />
              <meta property="og:description" content="Start a project conversation with a boutique software engineering studio." />
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