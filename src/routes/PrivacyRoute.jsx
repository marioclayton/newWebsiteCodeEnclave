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
              <title>Privacy Policy | Code Enclave LLC</title>
              <meta name="description" content="Read how Code Enclave LLC handles and protects personal information." />
              <meta property="og:title" content="Privacy Policy | Code Enclave LLC" />
              <meta property="og:description" content="Privacy and data handling policy for Code Enclave LLC." />
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