import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const Terms = () => {
  return (
    <div className='w-full bg-black text-white'>
      <div className='max-w-[1240px] mx-auto'>
        <motion.div initial={{y: 200, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.2}} className='py-16 px-4 flex flex-col justify-center'>
          <h1 className='md:text-3xl sm:text-2xl text-3xl py-2'>Terms of Service</h1>
          <p className='py-2'>
            These Terms of Service govern your use of the Code Enclave LLC website and related communications.
          </p>

          <h3 className='text-2xl sm:text-xl pt-2'>Use of This Website</h3>
          <p className='py-4'>
            You may use this site for lawful business information and project inquiry purposes only. You agree not to misuse the site, attempt unauthorized access, or interfere with normal operation.
          </p>

          <h3 className='text-2xl sm:text-xl pt-2'>No Guarantee of Results</h3>
          <p className='py-4'>
            Project outcomes depend on scope, timeline, collaboration, and operational factors. Content on this site is informational and does not constitute a guaranteed business or technical result.
          </p>

          <h3 className='text-2xl sm:text-xl pt-2'>Intellectual Property</h3>
          <p className='py-4'>
            Unless otherwise stated, site content, branding, and original materials are owned by Code Enclave LLC. You may not reproduce or distribute site content without prior written permission.
          </p>

          <h3 className='text-2xl sm:text-xl pt-2'>Third-Party Services and Links</h3>
          <p className='py-4'>
            This site may reference or link to third-party tools and websites. Code Enclave LLC is not responsible for external content, availability, or practices.
          </p>

          <h3 className='text-2xl sm:text-xl pt-2'>Limitation of Liability</h3>
          <p className='py-4'>
            To the maximum extent permitted by law, Code Enclave LLC is not liable for indirect, incidental, or consequential damages arising from use of this website.
          </p>

          <h3 className='text-2xl sm:text-xl pt-2'>Changes to These Terms</h3>
          <p className='py-4'>
            We may update these terms as services evolve. Updates will be posted on this page with an updated effective date.
          </p>

          <h3 className='text-2xl sm:text-xl pt-2'>Effective Date</h3>
          <p className='py-4'>July 20, 2026</p>

          <h3 className='text-2xl sm:text-xl pt-2'>Contact</h3>
          <p className='py-4'>
            Questions about these terms can be sent through our contact page.
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

export default Terms;
