import React from 'react';
import {Navigate} from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollToTop from '../scrollToTop.jsx';
import IndustryPageTemplate from '../components/industries/IndustryPageTemplate.jsx';
import {industryPages} from '../constants/industryPages.js';

const IndustryDetailRoute = ({industrySlug}) => {
  const industry = industryPages[industrySlug];

  if (!industry) {
    return <Navigate to='/404' replace />;
  }

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <IndustryPageTemplate industry={industry} />
      <Footer />
    </div>
  );
};

export default IndustryDetailRoute;
