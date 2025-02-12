import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Portfolio from '../components/portfolio';
import Testimonials from '../components/Testimonials';
import ScrollToTop from "../scrollToTop.jsx";

import { Helmet } from 'react-helmet';

const PortfolioRoute = () => {
  return (
    <div> 
      <Helmet>
              <title>Code Enclave LLC - Our Work</title>
              <meta name="description" content="Code Enclave LLC has helped smal and medium sized business grow their presence online. Check out our work." />
              <meta property="og:title" content="Code Enclave LLC - Our Work" />
              <meta property="og:description" content="Code Enclave LLC has helped smal and medium sized business grow their presence online. Check out our work." />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
      <ScrollToTop />
      <Navbar />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default PortfolioRoute