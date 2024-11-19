import React from 'react';
import Laptop from '../assets/pexels-morningtrain-18105-removebg-preview.png';
import {motion} from 'framer-motion';
 
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <motion.img initial={{x:-100, opacity:0}} whileInView={{ x: 0, opacity:1 }} transition={{duration:0.8, delay:0.2}} className='w-[500px] mx-auto my-24 '  src={Laptop} alt='/' />
        <motion.div initial={{y:200, opacity:0}} whileInView={{ y: 0, opacity:1 }} transition={{duration:0.8, delay:0.2}} className='flex flex-col justify-center'>
          <h1 className='md:text-3xl sm:text-2xl text-xl  py-2'>Learn about our services</h1>
          <p>
            At Code Enclave LLC, we specialize in designing and deploying modern, responsive, and user-friendly websites tailored to the unique needs of small businesses. With expertise in cutting-edge technologies, we deliver solutions that combine functionality, aesthetics, and performance.
          </p>
          <p className='text-2xl pt-5'>
            Our Services Include: 
          </p>
          <p className='text-xl pt-5'>
            Custom Website Design & Development 
          </p>
          <p>
             We craft beautiful, responsive websites using HTML, CSS, JavaScript, and React.js, ensuring your online presence is both captivating and functional.
          </p>
          <p>
          <p className='text-xl pt-5'>
            WordPress Website Development 
          </p>
             Need a versatile and easily manageable platform? We create custom WordPress sites that are intuitive and scalable for your growing business.
          </p>
          <p className='text-xl pt-5'>
            Fast Turnaround Time 
          </p>
          <p className='text-l'>
             We understand that time is money. Our team is dedicated to delivering high-quality websites quickly without compromising on excellence.
          </p>
          <p>
          <p className='text-xl pt-5'>
          Ongoing Maintenance & Support 
          </p>
            Keep your website running smoothly with our maintenance services, including updates, security checks, and performance optimizations.
          </p>
          <p className='font-bold'>
            Let Code Enclave LLC transform your vision into a website that stands out in today’s competitive digital landscape. Partner with us to take your small business to the next level!
          </p>
          <p className='font-bold'>
            Ready to get started? Contact us today!
          </p>
          <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;
