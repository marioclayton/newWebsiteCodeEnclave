import React from 'react';
import Analytics from './components/Services';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import Portfolio from './components/portfolio';
import Testimonials from './components/Testimonials';
import ScrollToTop from "./scrollToTop.jsx";
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div> 
      <Helmet>
        <title>Code Enclave LLC - Web Development Services</title>
        <meta name="description" content="Code Enclave LLC provides professional web development services to help businesses succeed online. Offering custom websites and solutions tailored to your needs." />
        <meta property="og:title" content="Code Enclave LLC - Web Development" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:description" content="Your partner in web development. We create responsive, modern, and scalable websites for small and medium-sized businesses, using modern tech stacks, and cms tools such as wordpress." />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <Hero /> 
      <Analytics />
      <Cards />
      <Portfolio />
      <Testimonials />
      <ContactUs />
      <Footer />
      
    </div>
  );
}



export default App;