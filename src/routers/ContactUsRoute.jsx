import React from 'react'
import ContactUs from '../components/ContactUs';
import Newsletter from '../components/Newsletter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUsRoute = () => {
  return (
    <div> 
      <Navbar />
      <ContactUs />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default ContactUsRoute