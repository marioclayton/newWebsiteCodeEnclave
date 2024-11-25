import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from '../assets/logo.png';

const Navbar = () => {

  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='z-50 sticky top-0 bg-[#000000] '>
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
        <img className='w-[120px]  my-4' src={Logo} alt='/' />
        <ul className='hidden md:flex'>
          <li className='text-l p-4'>Home</li>
          <li className='text-l p-4'>Services</li>
          <li className='text-l p-4'>Portfolio</li>
          <li className='text-l p-4'>Contact Us</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000000] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <img className='w-[150px]  my-4' src={Logo} alt='/' />  
            <ul className='uppercase p-4'>
              <li className='text-l p-4 border-b border-gray-600'>Home</li>
              <li className='text-l p-4 border-b border-gray-600'>Services</li>
              <li className='text-l p-4 border-b border-gray-600'>Portfolio</li>
              <li className='text-l p-4'>Contact Us</li>
            </ul>
        </div>
      </div>
    </div>
    
  )
}
 
export default Navbar
