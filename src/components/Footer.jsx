import React from 'react';
import Logo from '../assets/logo.png';

import {Link} from 'react-router-dom';

{/*import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';*/}

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <img className='w-[150px] my-4 h-auto' src={Logo} alt='Code Enclave logo' width='300' height='84' />
        <p className='py-4'>Boutique software engineering for businesses that need custom systems built to scale.</p>
        {/*<div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>*/}
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'><Link to='/'>Home</Link></li>
          <li className='py-2 text-sm'><Link to='/services'>Services</Link></li>
          <li className='py-2 text-sm'><Link to='/industries'>Industries</Link></li>
          <li className='py-2 text-sm'><Link to='/Portfolio'>Our Work</Link></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Services</h6>
        <ul>
          <li className='py-2 text-sm'><Link to='/services/custom-web-development'>Custom Web Development</Link></li>
          <li className='py-2 text-sm'><Link to='/services/custom-software-development'>Custom Software Development</Link></li>
          <li className='py-2 text-sm'><Link to='/services/business-automation'>Business Automation</Link></li>
          <li className='py-2 text-sm'><Link to='/services/seo-performance'>SEO & Website Performance</Link></li>
          <li className='py-2 text-sm'><Link to='/services/website-maintenance'>Website Support & Maintenance</Link></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Start</h6>
        <ul>
          <li className='py-2 text-sm'><Link to='/ContactUs'>Discuss Your Vision</Link></li>
          <li className='py-2 text-sm'><Link to='/Quote'>Start Your Project</Link></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'><Link to='/Privacy'>Privacy</Link></li>
        <li className='py-2 text-sm'><Link to='/Terms'>Terms</Link></li>
        <li className='py-2 text-sm'><Link to='/Cookies'>Cookies</Link></li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
