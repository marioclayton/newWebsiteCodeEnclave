import React from 'react';
import Analytics from './components/Services';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import Industries from './components/Industries';
import Portfolio from './components/portfolio';
import Testimonials from './components/Testimonials';
import ScrollToTop from "./scrollToTop.jsx";
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div> 
      <Helmet>
        <title>Code Enclave LLC | Custom Web Development and Software Engineering</title>
        <meta name="description" content="Code Enclave LLC delivers custom web development, custom software development, and business automation for growing companies. High-performance small business websites and web applications, engineered in Florida." />
        <meta property="og:title" content="Code Enclave LLC | Custom Web Development and Software Engineering" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:description" content="Custom website development and software solutions built for performance, scalability, and long-term business growth." />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <Hero /> 
      <section className='relative bg-black overflow-hidden'>
        <div className='pointer-events-none absolute inset-0 z-0 amber-fixed-section-shade' />
        <div className='relative z-10'>
          <Analytics />
          <Cards />
        </div>
      </section>
      <section data-nav-theme='white' className='relative bg-black overflow-hidden'>
        <div className='pointer-events-none absolute inset-0 z-0 white-fixed-section-shade' />
        <div className='relative z-10'>
          <Industries />
        </div>
      </section>
      <section data-nav-theme='cyan' className='relative bg-black overflow-hidden'>
        <div className='pointer-events-none absolute inset-0 z-0 cyan-fixed-section-shade' />
        <div className='relative z-10'>
          <Portfolio />
          <Testimonials />
          <ContactUs />
        </div>
      </section>
      <Footer />
      
    </div>
  );
}



export default App;