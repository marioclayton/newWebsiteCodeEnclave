import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';


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
          <NavLink to="/" end style={({ isActive }) =>
              isActive
                ? {
                    
                    color: '#86efac ',
                  }
                : {}
            } className='text-l p-4'>Home</NavLink>
            <NavLink to="/Services" end style={({ isActive }) =>
              isActive
                ? {
                    
                    color: '#86efac ',
                  }
                : {}
            } className='text-l p-4'>Services</NavLink>
            <NavLink to="/Portfolio" end style={({ isActive }) =>
              isActive
                ? {
                    
                    color: '#86efac ',
                  }
                : {}
            } className='text-l p-4'>Portfolio</NavLink>
            <NavLink to="/ContactUs" end style={({ isActive }) =>
              isActive
                ? {
                    
                    color: '#86efac ',
                  }
                : {}
            } className='text-l p-4'>Contact Us</NavLink>
            <NavLink to="/Quote" end style={({ isActive }) =>
              isActive
                ? {
                    
                    color: '#86efac ',
                  }
                : {}
            } className='text-l p-4'>Quote</NavLink>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000000] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <img className='w-[150px]  my-4' src={Logo} alt='/' />  
            <ul className='uppercase p-4'>
              
              <NavLink to="/" end style={({ isActive }) =>
              isActive
                ? {
                    
                    color: '#86efac ',
                  }
                : {}
            } className='grid text-l p-4 border-b border-gray-600'>Home</NavLink>
            <NavLink to="/Services" end style={({ isActive }) =>
              isActive
                ? {
                    
                    color: '#86efac ',
                  }
                : {}
            } className='grid text-l p-4 border-b border-gray-600'>Services</NavLink>
            <NavLink to="/Portfolio" end style={({ isActive }) =>
              isActive
                ? {
                    
                    color: '#86efac ',
                  }
                : {}
            } className='grid text-l p-4 border-b border-gray-600'>Portfolio</NavLink>
            <NavLink to="/ContactUs" end style={({ isActive }) =>
              isActive
                ? {
                    
                    color: '#86efac ',
                  }
                : {}
            } className='grid text-l p-4 border-b border-gray-600'>Contact Us</NavLink>
            <NavLink to="/Quote" end style={({ isActive }) =>
              isActive
                ? {
                    
                    color: '#86efac ',
                  }
                : {}
            } className='grid text-l p-4 border-b border-gray-600'>Quote</NavLink>
        </ul>
        </div>
      </div>
    </div>
    
  )
}
 
export default Navbar
