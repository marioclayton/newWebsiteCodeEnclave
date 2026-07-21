import React from 'react';
import {Navigate} from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollToTop from '../scrollToTop.jsx';
import ServicePageTemplate from '../components/services/ServicePageTemplate.jsx';
import {servicePages} from '../constants/servicePages.js';

const ServiceDetailRoute = ({serviceSlug}) => {
  const service = servicePages[serviceSlug];

  if (!service) {
    return <Navigate to='/404' replace />;
  }

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <ServicePageTemplate service={service} />
      <Footer />
    </div>
  );
};

export default ServiceDetailRoute;
