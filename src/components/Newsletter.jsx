import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const Newsletter = () => {
  return (
    <motion.div initial={{y:50, opacity:0}} whileInView={{ y: 0, opacity:1 }} transition={{duration:0.8, delay:0.01}} className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want to learn how you can start your online presence with a website?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#a6a6a6] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <Link to='/Privacy' className='text-[#a6a6a6]'>privacy policy.</Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Newsletter;
