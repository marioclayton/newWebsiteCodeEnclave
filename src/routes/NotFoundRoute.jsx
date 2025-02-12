import React, { useEffect } from 'react'
import NotFound from '../components/NotFound';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from "../scrollToTop.jsx";


import { Helmet } from 'react-helmet';

const NotFoundRoute = () => {


    useEffect(() => {
        // Manually set the status code to 404
        document.title = "Page Not Found";
        window.history.replaceState(null, '', '/404');  // Optional: Change the URL to /404
        // You can add logic to handle the 404 status for SEO purposes here if needed
      }, []);

      
  return (
    <div> 
      <Helmet>
              <title>Code Enclave LLC - Not Found</title>
              <meta name="description" content="Not Found." />
              <meta property="og:title" content="Code Enclave LLC - Not Found" />
              <meta property="og:description" content="Not Found." />
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