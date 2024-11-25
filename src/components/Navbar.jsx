import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

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
          <Link to='/' className='text-l p-4'>Home</Link>
          <Link to='/Services' className='text-l p-4'>Services</Link>
          <Link to='/Portfolio' className='text-l p-4'>Portfolio</Link>
          <Link to='/ContactUs' className='text-l p-4'>Contact Us</Link>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000000] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <img className='w-[150px]  my-4' src={Logo} alt='/' />  
            <ul className='uppercase p-4'>
              <Link to='/' className='grid text-l p-4 border-b border-gray-600'>Home</Link>
              <Link to='/Services' className='grid text-l p-4 border-b border-gray-600'>Services</Link>
              <Link to='/Portfolio' className='grid text-l p-4 border-b border-gray-600'>Portfolio</Link>
              <Link to='/ContactUs' className='grid text-l p-4'>Contact Us</Link>
            </ul>
        </div>
      </div>
    </div>
    
  )
}
 
export default Navbar
