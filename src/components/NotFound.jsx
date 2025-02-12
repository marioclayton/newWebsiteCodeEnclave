import {motion} from 'framer-motion';

import {Link} from 'react-router-dom';



const NotFound = () => {

    
  

  return (
    <motion.div initial={{x:-0, opacity:0}} whileInView={{ x: 0, opacity:1 }} transition={{duration:1.5, delay:0.3}}  className='w-full bg-black py-16 px-4 '>
        <div className="py-8 lg:py-16 md:px-20 lg:px-4 mx-auto max-w-screen-md lg:my-48 flex flex-col justify-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white mb-10">404</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">Oops! Page not found.</p>
            <button className='animate-pulse bg-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-auto text-xl py-3 text-black'>
          
          <Link to='/' className='text-l p-4'>Home</Link>
        </button>
        </div>
        
    </motion.div>
  );
};

export default NotFound;