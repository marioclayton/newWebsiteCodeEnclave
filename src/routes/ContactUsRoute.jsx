import React from 'react'
import ContactUs from '../components/ContactUs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from "../scrollToTop.jsx";

import { Helmet } from 'react-helmet';

const ContactUsRoute = () => {
  return (
    <div> 
      <Helmet>
              <title>Code Enclave LLC - Request Received</title>
              <meta name="description" content="We have received your request and will be in touch shortly." />
              <meta property="og:title" content="Code Enclave LLC - Request Received" />
              <meta property="og:description" content="Request Received." />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
      <ScrollToTop />
      <Navbar />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default ContactUsRoute