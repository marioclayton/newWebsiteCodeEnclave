import React from 'react';
import Navbar from '../components/Navbar';
import Terms from '../components/Terms.jsx';
import Footer from '../components/Footer';
import ScrollToTop from '../scrollToTop.jsx';
import {Helmet} from 'react-helmet';

const TermsRoute = () => {
  return (
    <div>
      <Helmet>
        <title>Terms of Service | Code Enclave LLC</title>
        <meta name='description' content='Read the terms governing use of the Code Enclave LLC website and communications.' />
        <meta property='og:title' content='Terms of Service | Code Enclave LLC' />
        <meta property='og:description' content='Website terms and usage conditions for Code Enclave LLC.' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <Terms />
      <Footer />
    </div>
  );
};

export default TermsRoute;
