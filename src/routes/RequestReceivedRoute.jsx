import React from 'react'
import RequestReceived from '../components/RequestReceived';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from "../scrollToTop.jsx";

const RequestReceivedRoute = () => {
  return (
    <div> 
      <ScrollToTop />
      <Navbar />
      <RequestReceived />
      <Footer />
    </div>
  )
}

export default RequestReceivedRoute