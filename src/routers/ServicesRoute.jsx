import React from 'react'
import Analytics from '../components/Services';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const ServicesRoute = () => {
  return (
    <div> 
      <Navbar />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  )
}

export default ServicesRoute