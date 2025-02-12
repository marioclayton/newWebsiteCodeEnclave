import React from 'react'
import Analytics from '../components/Services';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollToTop from "../scrollToTop.jsx";
import Quote from "../components/Quote.jsx";
import { Helmet } from 'react-helmet';


const ServicesRoute = () => {
  return (
    <div> 
      <Helmet>
        <title>Code Enclave LLC - Our Services</title>
        <meta name="description" content="Code Enclave LLC provides professional web development services to help businesses succeed online. Offering custom websites and solutions tailored to your needs." />
        <meta property="og:title" content="Code Enclave LLC - Web Development" />
        <meta property="og:description" content="Your partner in web development. We create responsive, modern, and scalable websites for small and medium-sized businesses, using modern tech stacks, and cms tools such as wordpress." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <Analytics />
      <Cards />
      <Quote />
      <Footer />
    </div>
  )
}

export default ServicesRoute