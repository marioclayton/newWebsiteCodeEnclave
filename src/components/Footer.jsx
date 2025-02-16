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
        <img className='w-[150px]  my-4' src={Logo} alt='/' />
        <p className='py-4'>Helping small and medium-sized businesses establish a strong and effective online presence.</p>
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
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'><Link to='/WebDev'>Web Development</Link></li>
            <li className='py-2 text-sm'><Link to='/SEO'>SEO</Link></li>
            <li className='py-2 text-sm'><Link to='/Branding'>Branding</Link></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'><Link to='/Services'>Pricing</Link></li>
            <li className='py-2 text-sm'><Link to='/ContactUs'>Contact Us</Link></li>
            <li className='py-2 text-sm'><Link to='/Quote'>Quote</Link></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'><Link to='/'>Home</Link></li>
            <li className='py-2 text-sm'><Link to='/Services'>Services</Link></li>
            <li className='py-2 text-sm'><Link to='/Portfolio'>Portfolio</Link></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'><Link to='/Privacy'>Privacy</Link></li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
