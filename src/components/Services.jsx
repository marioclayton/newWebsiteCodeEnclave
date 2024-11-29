import React from 'react';
import Laptop from '../assets/pexels-mizunokozuki-12902944.jpg';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
 
const Analytics = () => {
  return (
    <div className='w-full bg-white '>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2'>
        <motion.img initial={{x:-100, opacity:0}} whileInView={{ x: 0, opacity:1 }} transition={{duration:0.8, delay:0.2}} className='w-full lg:w-[500px] mx-auto my-auto rounded-lg'  src={Laptop} alt='/' />
        <motion.div initial={{y:200, opacity:0}} whileInView={{ y: 0, opacity:1 }} transition={{duration:0.8, delay:0.2}} className='py-16 px-4 flex flex-col justify-center'>
          <h1 className='md:text-3xl sm:text-2xl text-3xl  py-2'>Learn about our services</h1>
          <p className='py-2'>
            At Code Enclave LLC, we specialize in creating modern, user-friendly websites tailored to the unique needs of small to medium-sized businesses. Whether you're looking to update an existing site or need a brand-new online presence, our team is here to help you stand out in a digital world. We also offer advanced solutions for larger companies that require more complex web applications or custom features.
          </p>
          <p className='text-2xl sm:text-xl pt-2'>
            Our Services Include: 
          </p>
          <p className='py-2'>
            Custom Web Design & Development: We build visually appealing, responsive websites using cutting-edge technologies like WordPress, React JS, and Tailwind CSS. Your site will not only look great but function seamlessly across all devices.
          </p>
          <p className='py-2'>
            Responsive & Mobile-First Design: We ensure your website is optimized for the best possible experience, no matter the device or screen size. Whether on desktop, tablet, or smartphone, your site will perform flawlessly.
          </p>
          <p className='py-2'>
            Advanced Backend Development: Our backend solutions, including Node.js, PHP, and various database technologies, allow us to build powerful, scalable websites and applications that are secure and efficient.
          </p>
          <p className='py-2'>
            SEO Optimization: Every website we create is fully optimized for search engines, ensuring that your business gets the visibility it deserves in search results. From meta tags to content optimization, we handle it all to improve your ranking and drive organic traffic.
          </p>
          <p className='py-2'>
            E-Commerce Solutions: If you need an online store, we can design and implement e-commerce solutions that are both user-friendly and secure, with integrated payment gateways and inventory management.
          </p>
          <p className='py-2'>
            Maintenance & Support: We offer ongoing website maintenance to keep your site up-to-date, secure, and performing at its best.
          </p>
          <p className='py-2'>
            At Code Enclave, we are passionate about helping businesses grow online. Whether you need a simple informational website or a full-scale web application, we have the expertise to make it happen. Let us create a custom web solution that reflects your brand and meets your business needs.
          </p>
          <p className='py-6 font-bold'>
            Ready to get started? Contact us today!
          </p>
          <div className='m-auto'>
            <button className='bg-black text-white w-[200px] rounded-md font-medium mr-3 mx-auto py-3'>
              <Link to='/ContactUs' className='text-l p-4'>Contact Us</Link>
            </button>
            <button className='bg-black text-white w-[200px] rounded-md font-medium ml-3 mx-auto py-3'>
              <Link to='/Services' className='text-l p-4'>Get Started</Link>
            </button>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;
