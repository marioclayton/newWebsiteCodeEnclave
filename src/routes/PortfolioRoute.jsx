import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Portfolio from '../components/portfolio';
import PortfolioHero from '../components/PortfolioHero';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import ScrollToTop from "../scrollToTop.jsx";

import { Helmet } from 'react-helmet';

const PortfolioRoute = () => {
  return (
    <div> 
      <Helmet>
              <title>Code Enclave LLC - Our Work</title>
              <meta name="description" content="Code Enclave LLC has helped small and medium-sized businesses grow their presence online. Check out our work." />
              <meta property="og:title" content="Code Enclave LLC - Our Work" />
              <meta property="og:description" content="Code Enclave LLC has helped small and medium-sized businesses grow their presence online. Check out our work." />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
      <ScrollToTop />
      <Navbar />
      <PortfolioHero />
      <section data-nav-theme='cyan' className='relative bg-black overflow-hidden'>
        <div className='pointer-events-none absolute inset-0 z-0 cyan-fixed-section-shade' />
        <div className='relative z-10'>
          <Portfolio />
          <Testimonials />
          <ContactUs />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default PortfolioRoute