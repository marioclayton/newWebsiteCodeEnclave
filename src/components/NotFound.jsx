import {motion} from 'framer-motion';

import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';


const NotFound = () => {

  const handleHomeClick = () => {
    window.location.href = "/";
  };

  

  return (
    <motion.div initial={{x:-0, opacity:0}} whileInView={{ x: 0, opacity:1 }} transition={{duration:1.5, delay:0.3}}  className='w-full bg-black py-0 px-4 '>
        <div className='z-50 sticky top-0 bg-[#000000] '>
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
        <img className='w-[120px]  my-4' src={Logo} alt='/' /></div></div>
        <div className='overlay-container '>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center overlay-content'>
            
            <h2 className="text-4xl tracking-tight font-extrabold text-center text-white mb-10">404</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">Oops! Page not found.</p>
            <button onClick={handleHomeClick} className='animate-pulse bg-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-auto text-xl py-3 text-black'>
          
          <Link className='text-l p-4' >Home</Link>
        </button>
        </div></div>
        
    </motion.div>
  );
};

export default NotFound;