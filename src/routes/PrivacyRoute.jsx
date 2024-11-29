import React from 'react'
import Navbar from '../components/Navbar';
import Privacy from '../components/Privacy.jsx'
import Footer from '../components/Footer';
import ScrollToTop from "../scrollToTop.jsx";

const PrivacyRoute = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <Privacy />
        <Footer />
    </div>
  )
}

export default PrivacyRoute