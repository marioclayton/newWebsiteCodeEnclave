import React from 'react';
import Navbar from '../components/Navbar';
import Cookies from '../components/Cookies.jsx';
import Footer from '../components/Footer';
import ScrollToTop from '../scrollToTop.jsx';
import {Helmet} from 'react-helmet';

const CookiesRoute = () => {
  return (
    <div>
      <Helmet>
        <title>Cookie Policy | Code Enclave LLC</title>
        <meta name='description' content='Read how Code Enclave LLC uses cookies and similar technologies.' />
        <meta property='og:title' content='Cookie Policy | Code Enclave LLC' />
        <meta property='og:description' content='Cookie usage and browser-control options for Code Enclave LLC website visitors.' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <Cookies />
      <Footer />
    </div>
  );
};

export default CookiesRoute;
