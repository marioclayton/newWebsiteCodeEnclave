import React from 'react'
import Navbar from '../components/Navbar';
import Branding from '../components/Branding.jsx'
import Footer from '../components/Footer';
import ScrollToTop from "../scrollToTop.jsx";

const BrandingRoute = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <Branding />
        <Footer />
    </div>
  )
}

export default BrandingRoute