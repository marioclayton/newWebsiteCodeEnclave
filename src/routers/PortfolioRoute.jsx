import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Portfolio from '../components/portfolio';
import Testimonials from '../components/Testimonials';
import ScrollToTop from "../scrollToTop.jsx";

const PortfolioRoute = () => {
  return (
    <div> 
      <ScrollToTop />
      <Navbar />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default PortfolioRoute