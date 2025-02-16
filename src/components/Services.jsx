import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
 
const Analytics = () => {
  return (
    <div className='w-full bg-white '>
      <div className='mx-auto grid lg:grid-cols-2'>
      <div className='bg-[url(./assets/ServicesBackground1.png)] text-white bg-cover bg-scroll md:bg-fixed h-screen lg:h-auto justify-items-end'>
      <motion.div initial={{x:0, opacity:0}} whileInView={{ x: 0, opacity:1 }}  transition={{duration:1.0, delay:0.2}} viewport={{ once: false, amount: 0.1 }} className='mx-16 content-center h-full lg:max-w-2xl '>
          <h1 className='md:text-4xl sm:text-3xl text-4xl  py-10'>Learn about our services</h1>
          <p className='md:text-xl sm:text-xl text-xl py-2'>
            At Code Enclave LLC, we specialize in creating modern, user-friendly websites tailored to the unique needs of small to medium-sized businesses. Whether you're looking to update an existing site or need a brand-new online presence, our team is here to help you stand out in a digital world.          
          </p>
          
        
        </motion.div>
        </div>
        <div className='md:m-16 m-8'>
        <motion.div initial={{x:0, opacity:0}} whileInView={{ x: 0, opacity:1 }}  transition={{duration:1.0, delay:0.2}} viewport={{ once: false, amount: 0.1 }} className='text-justify lg:max-w-2xl py-16 px-4 flex flex-col justify-left'>
            
            <p className=' text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl max-w-2xl mx-auto text-center pb-16'>
              Our Services Include
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
            <p className='py-6 font-bold text-center pb-10'>
              Ready to get started? Contact us today!
            </p>
            <div className='m-auto'>
              <button className='bg-black text-white w-[150px] rounded-md font-medium mr-3 mx-auto py-3'>
                <Link to='/ContactUs' className='text-l p-4'>Contact Us</Link>
              </button>
              <button className='bg-black text-white w-[150px] rounded-md font-medium ml-3 mx-auto py-3'>
                <Link to='/Quote' className='text-l p-4'>Get Started</Link>
              </button>
            </div>
          </motion.div>
      </div>
      </div>
    </div>
  );
};

export default Analytics;
