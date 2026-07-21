import React from 'react'

import NotFound from '../components/NotFound';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from "../scrollToTop.jsx";



import { Helmet } from 'react-helmet';

const NotFoundRoute = () => {
  return (
    <div> 
      <Helmet>
              <title>Code Enclave LLC - Not Found</title>
              <meta name="description" content="The requested page could not be found." />
              <meta property="og:title" content="Code Enclave LLC - Not Found" />
              <meta property="og:description" content="The requested page could not be found." />
              <meta name="robots" content="noindex, follow" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
      <ScrollToTop />
      <Navbar />
      <NotFound />
      <Footer />
    </div>
  )
}

export default NotFoundRoute