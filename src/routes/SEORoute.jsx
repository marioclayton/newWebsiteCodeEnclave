import React from 'react'
import Navbar from '../components/Navbar';
import SEO from '../components/SEO.jsx'
import Footer from '../components/Footer';
import ScrollToTop from "../scrollToTop.jsx";

const SEORoute = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <SEO />
        <Footer />
    </div>
  )
}

export default SEORoute