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
              <title>Code Enclave LLC - Branding Services</title>
              <meta name="description" content="Code Enclave LLC provides professional branding services to help businesses succeed online." />
              <meta property="og:title" content="Code Enclave LLC - Branding" />
              <meta property="og:description" content="Code Enclave LLC provides professional branding services to help businesses succeed online." />
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