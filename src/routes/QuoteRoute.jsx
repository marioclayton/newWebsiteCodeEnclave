import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollToTop from "../scrollToTop.jsx";
import Quote from "../components/Quote.jsx";

import { Helmet } from 'react-helmet';

const QuoteRoute = () => {
  return (
    <div> 
      <Helmet>
              <title>Start Your Project | Code Enclave LLC</title>
              <meta name="description" content="Request project scoping for custom web development, software solutions, and business automation." />
              <meta property="og:title" content="Start Your Project | Code Enclave LLC" />
              <meta property="og:description" content="Share your requirements and get a practical build plan from Code Enclave LLC." />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
      <ScrollToTop />
      <Navbar />
      <Quote />
      <Footer />
    </div>
  )
}

export default QuoteRoute