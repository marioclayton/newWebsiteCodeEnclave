import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollToTop from "../scrollToTop.jsx";
import Quote from "../components/Quote.jsx";

import { Helmet } from 'react-helmet';

const QuoteRoute = () => {
  return (
    <div> 
      <Helmet>
              <title>Code Enclave LLC - Request a Quote</title>
              <meta name="description" content="Request a quote from Code Enclave LLC for web development, branding, and SEO services." />
              <meta property="og:title" content="Code Enclave LLC - Request a Quote" />
              <meta property="og:description" content="Request a quote from Code Enclave LLC for web development, branding, and SEO services." />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
      <ScrollToTop />
      <Navbar />
      <Quote />
      <Footer />
    </div>
  )
}

export default QuoteRoute