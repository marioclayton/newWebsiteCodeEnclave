import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const Cookies = () => {
  return (
    <div className='w-full bg-black text-white'>
      <div className='max-w-[1240px] mx-auto'>
        <motion.div initial={{y: 200, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.2}} className='py-16 px-4 flex flex-col justify-center'>
          <h1 className='md:text-3xl sm:text-2xl text-3xl py-2'>Cookie Policy</h1>
          <p className='py-2'>
            This Cookie Policy explains how Code Enclave LLC uses cookies and similar technologies on this website.
          </p>

          <h3 className='text-2xl sm:text-xl pt-2'>What Cookies Are</h3>
          <p className='py-4'>
            Cookies are small text files stored on your device that help websites remember activity and improve user experience.
          </p>

          <h3 className='text-2xl sm:text-xl pt-2'>How We Use Cookies</h3>
          <p className='py-4'>
            We may use essential cookies for core site functionality and analytics-related technologies to understand traffic, page performance, and interaction patterns.
          </p>

          <h3 className='text-2xl sm:text-xl pt-2'>Third-Party Technologies</h3>
          <p className='py-4'>
            Some analytics or hosting providers may set their own cookies according to their policies. We recommend reviewing those provider policies directly.
          </p>

          <h3 className='text-2xl sm:text-xl pt-2'>Managing Cookies</h3>
          <p className='py-4'>
            You can control cookies through your browser settings, including blocking or deleting cookies. Some site functionality may be reduced if essential cookies are disabled.
          </p>

          <h3 className='text-2xl sm:text-xl pt-2'>Policy Updates</h3>
          <p className='py-4'>
            We may update this policy from time to time. Changes will be posted on this page with an updated effective date.
          </p>

          <h3 className='text-2xl sm:text-xl pt-2'>Effective Date</h3>
          <p className='py-4'>July 20, 2026</p>

          <h3 className='text-2xl sm:text-xl pt-2'>Contact</h3>
          <p className='py-4'>
            Questions about cookie usage can be sent through our contact page.
          </p>

          <div className='m-auto mt-10'>
            <button className='bg-white text-black w-[150px] rounded-md font-medium mr-3 mx-auto py-3'>
              <Link to='/ContactUs' className='text-l p-4'>Discuss Vision</Link>
            </button>
            <button className='bg-white text-black w-[150px] rounded-md font-medium ml-3 mx-auto py-3'>
              <Link to='/services' className='text-l p-4'>View Services</Link>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;
