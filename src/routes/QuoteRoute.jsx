import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollToTop from "../scrollToTop.jsx";
import Quote from "../components/Quote.jsx";

const QuoteRoute = () => {
  return (
    <div> 
      <ScrollToTop />
      <Navbar />
      <Quote />
      <Footer />
    </div>
  )
}

export default QuoteRoute