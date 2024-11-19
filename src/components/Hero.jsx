import React from 'react';
import {motion} from 'framer-motion';

const Hero = () => {
  return (

    


    <div className='text-white overlay-container '>
      <motion.div initial={{x:-0, opacity:0}} whileInView={{ x: 0, opacity:1 }} transition={{duration:2.5, delay:0.5}}  className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center overlay-content'>
        <p className='bg-gradient-to-r from-green-300 via-slate-500 to-yellow-500 bg-clip-text text-xl tracking-tight text-transparent  p-2'>
          GROWING YOUR BUSINESS IN THE ONLINE WORLD
        </p>
        <h1 className='md:text-5xl sm:text-4xl text-3xl  md:py-6'>
          Code Enclave LLC
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-3xl sm:text-3xl text-xl  py-4'>
          Web Developement and Consulting
          </p>
        </div>
        <p className='md:text-2xl text-xl  bg-gradient-to-r from-green-300 via-slate-500 to-yellow-500 bg-clip-text tracking-tight text-transparent py-10'>We specialize in helping small and medium-sized businesses establish a strong and effective online presence.</p>
        <button className='animate-pulse bg-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-auto text-xl py-3 text-black'>Get Started</button>
      </motion.div>
    </div>
  );
};

export default Hero;