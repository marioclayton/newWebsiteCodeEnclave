import React from 'react'

import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const RequestReceived = () => {
    return (
        <div className='text-white overlay-container '>
      <motion.div initial={{x:-0, opacity:0}} whileInView={{ x: 0, opacity:1 }} transition={{duration:1.5, delay:0.3}}  className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center overlay-content'>
        
        <h1 className='md:text-5xl sm:text-4xl text-3xl  md:py-6'>
          We have received your request!
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-3xl sm:text-3xl text-xl  py-4'>
          We will be in contact with your shortly.
          </p>
        </div>
        
        <button className='animate-pulse bg-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-auto text-xl py-3 text-black'>
          
          <Link to='/' className='text-l p-4'>HOME PAGE</Link>
        </button>
      </motion.div>
    </div>
      )
}

export default RequestReceived