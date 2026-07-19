import React from 'react'
import Navbar from '../components/Navbar';
import SEO from '../components/SEO.jsx'
import Footer from '../components/Footer';
import ScrollToTop from "../scrollToTop.jsx";
import { Helmet } from 'react-helmet';

const SEORoute = () => {
  return (
    <div>
      <Helmet>
              <title>Code Enclave LLC - SEO Services</title>
              <meta name="description" content="Code Enclave LLC provides professional SEO services to help businesses succeed online." />
              <meta property="og:title" content="Code Enclave LLC - SEO Services" />
              <meta property="og:description" content="Code Enclave LLC provides professional SEO services to help businesses succeed online." />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
        <ScrollToTop />
        <Navbar />
        <SEO />
        <Footer />
    </div>
  )
}

export default SEORoute