import React from 'react';
import Analytics from './components/Services';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import ContactUs from './components/ContactUs';
import Portfolio from './components/portfolio';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div> 
      <Navbar />
      <Hero /> 
      <Analytics />
      <Newsletter />
      <Cards />
      <Portfolio />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;