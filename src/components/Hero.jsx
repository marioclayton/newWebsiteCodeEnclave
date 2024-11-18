import React from 'react';

{/*import Typed from 'react-typed';*/}

const Hero = () => {
  return (

    


    <div className='text-white overlay-container '>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center overlay-content'>
        <p className='text-[#a6a6a6]  p-2'>
          GROWING YOUR BUSINESS IN THE ONLINE WORLD
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl  md:py-6'>
          Code Enclave LLC
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl  py-4'>
          Web Developement and Consulting
          </p>
          {/*<Typed className='md:text-5xl sm:text-4xl text-xl  md:pl-4 pl-2' strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop />*/}
        </div>
        <p className='md:text-2xl text-xl  text-[#a6a6a6]'>We specialize in helping small and medium-sized businesses establish a strong and effective online presence.</p>
        <button className='bg-[#fffefe] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;