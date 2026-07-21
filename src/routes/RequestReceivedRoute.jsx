import React from 'react'
import RequestReceived from '../components/RequestReceived';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from "../scrollToTop.jsx";

import { Helmet } from 'react-helmet';

const RequestReceivedRoute = () => {
  return (
    <div> 
      <Helmet>
              <title>Code Enclave LLC - Request Received</title>
              <meta name="description" content="Your request has been received. A Code Enclave engineer will follow up shortly." />
              <meta property="og:title" content="Code Enclave LLC - Request Received" />
              <meta property="og:description" content="Your request has been received. We will follow up shortly." />
              <meta name="robots" content="noindex, follow" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
      <ScrollToTop />
      <Navbar />
      <RequestReceived />
      <Footer />
    </div>
  )
}

export default RequestReceivedRoute