import React from 'react'
import Navbar from '../components/Navbar';
import WebDev from '../components/WebDev.jsx'
import Footer from '../components/Footer';
import ScrollToTop from "../scrollToTop.jsx";

const WebDevRoute = () => {
  return (
    <div>
        <ScrollToTop />
        <Navbar />
        <WebDev />
        <Footer />
    </div>
  )
}

export default WebDevRoute