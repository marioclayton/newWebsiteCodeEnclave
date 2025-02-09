import React from 'react'
import ContactUs from '../components/ContactUs';
import Newsletter from '../components/Newsletter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from "../scrollToTop.jsx";

const ContactUsRoute = () => {
  return (
    <div> 
      <ScrollToTop />
      <Navbar />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default ContactUsRoute