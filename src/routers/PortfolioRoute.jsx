import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Portfolio from '../components/portfolio';
import Testimonials from '../components/Testimonials';

const PortfolioRoute = () => {
  return (
    <div> 
      <Navbar />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default PortfolioRoute