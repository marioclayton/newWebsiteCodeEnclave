import React from 'react'
import Navbar from '../components/Navbar';
import Branding from '../components/Branding.jsx'
import Footer from '../components/Footer';
import ScrollToTop from "../scrollToTop.jsx";
import { Helmet } from 'react-helmet';

const BrandingRoute = () => {
  return (
    <div>
      <Helmet>
              <title>Brand Systems Insights | Code Enclave LLC</title>
              <meta name="description" content="Explore how clear brand systems support trust, conversion, and stronger positioning across digital channels." />
              <meta property="og:title" content="Brand Systems Insights | Code Enclave LLC" />
              <meta property="og:description" content="Brand guidance built for companies scaling their digital presence." />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
        <ScrollToTop />
        <Navbar />
        <Branding />
        <Footer />
    </div>
  )
}

export default BrandingRoute