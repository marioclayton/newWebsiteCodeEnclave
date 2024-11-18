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
        <img className='w-[150px]  my-4' src={Logo} alt='/' />
        <ul className='hidden md:flex'>
          <li className='text-xl p-4'>Home</li>
          <li className='text-xl p-4'>Company</li>
          <li className='text-xl p-4'>Resources</li>
          <li className='text-xl p-4'>About</li>
          <li className='text-xl p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={40}/> : <AiOutlineMenu size={40}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <img className='w-[150px]  my-4' src={Logo} alt='/' />  
            <ul className='uppercase p-4'>
              <li className='text-xl p-4 border-b border-gray-600'>Home</li>
              <li className='text-xl p-4 border-b border-gray-600'>Company</li>
              <li className='text-xl p-4 border-b border-gray-600'>Resources</li>
              <li className='text-xl p-4 border-b border-gray-600'>About</li>
              <li className='text-xl p-4'>Contact</li>
            </ul>
        </div>
      </div>
    </div>
    
  )
}
 
export default Navbar
