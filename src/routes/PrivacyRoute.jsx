import React from 'react'
import Navbar from '../components/Navbar';
import Privacy from '../components/Privacy.jsx'
import Footer from '../components/Footer';
import ScrollToTop from "../scrollToTop.jsx";
import { Helmet } from 'react-helmet';

const PrivacyRoute = () => {
  return (
    <div>
      <Helmet>
              <title>Code Enclave LLC - Privacy</title>
              <meta name="description" content="Learn how Code Enclave LLC ensures that your data remaiums private." />
              <meta property="og:title" content="Code Enclave LLC - Privacy" />
              <meta property="og:description" content="Learn how Code Enclave LLC ensures that your data remaiums private." />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
        <ScrollToTop />
        <Navbar />
        <Privacy />
        <Footer />
    </div>
  )
}

export default PrivacyRoute