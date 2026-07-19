import React, {useEffect, useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { NavLink, useLocation } from 'react-router-dom';


const Navbar = () => {

  const [nav, setNav] = useState(true)
  const [isPinned, setIsPinned] = useState(false)
  const location = useLocation()
  const isHeroRoute = location.pathname === '/' || location.pathname === '/Services' || location.pathname === '/Portfolio' || location.pathname === '/ContactUs'

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    if (!isHeroRoute) {
      setIsPinned(true)
      return
    }

    const getPinThreshold = () => {
      const heroSection = document.querySelector('.overlay-container')
      const navHeight = 96

      if (!heroSection) {
        return window.innerHeight - navHeight
      }

      return heroSection.offsetTop + heroSection.offsetHeight - navHeight
    }

    const handleScroll = () => {
      const pinOnAt = getPinThreshold()
      const pinOffAt = pinOnAt - 24

      setIsPinned((prevPinned) => {
        if (prevPinned) {
          return window.scrollY >= pinOffAt
        }

        return window.scrollY >= pinOnAt
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, {passive: true})
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [isHeroRoute])

  useEffect(() => {
    setNav(true)
  }, [location.pathname])

  const navWrapperClass = isHeroRoute
    ? (isPinned
      ? 'z-50 fixed top-0 left-0 w-full bg-black retro-display'
      : 'z-50 absolute top-0 left-0 w-full bg-transparent retro-display')
    : 'z-50 sticky top-0 bg-black retro-display'

  const mobilePanelBgClass = isHeroRoute && !isPinned ? 'bg-transparent' : 'bg-black'

  return (
    <div className={navWrapperClass}>
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 bg-transparent'>
        <p className='text-2xl md:text-3xl'>{'<CODE></ENCLAVE>'}</p>
        <ul className='hidden md:flex'>
          <NavLink to="/" end className='text-xl md:text-2xl p-4'>
            {({ isActive }) => (isActive ? '[HOME]' : 'HOME')}
          </NavLink>
          <NavLink to="/Services" end className='text-xl md:text-2xl p-4'>
            {({ isActive }) => (isActive ? '[SERVICES]' : 'SERVICES')}
          </NavLink>
          <NavLink to="/Portfolio" end className='text-xl md:text-2xl p-4'>
            {({ isActive }) => (isActive ? '[PORTFOLIO]' : 'PORTFOLIO')}
          </NavLink>
          <NavLink to="/ContactUs" end className='text-xl md:text-2xl p-4'>
            {({ isActive }) => (isActive ? '[CONTACT US]' : 'CONTACT US')}
          </NavLink>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35}/>}
        </div>
        <div className={!nav ? `fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-700 ${mobilePanelBgClass} ease-in-out duration-500` : 'fixed left-[-100%]'}>
          <p className='text-2xl md:text-3xl p-4'>{'<CODE></ENCLAVE>'}</p>
            <ul className='uppercase p-4'>
              
            <NavLink to="/" end className='grid text-xl md:text-2xl p-4 border-b border-gray-600'>
              {({ isActive }) => (isActive ? '[HOME]' : 'HOME')}
            </NavLink>
            <NavLink to="/Services" end className='grid text-xl md:text-2xl p-4 border-b border-gray-600'>
              {({ isActive }) => (isActive ? '[SERVICES]' : 'SERVICES')}
            </NavLink>
            <NavLink to="/Portfolio" end className='grid text-xl md:text-2xl p-4 border-b border-gray-600'>
              {({ isActive }) => (isActive ? '[PORTFOLIO]' : 'PORTFOLIO')}
            </NavLink>
            <NavLink to="/ContactUs" end className='grid text-xl md:text-2xl p-4 border-b border-gray-600'>
              {({ isActive }) => (isActive ? '[CONTACT US]' : 'CONTACT US')}
            </NavLink>
        </ul>
        </div>
      </div>
    </div>
    
  )
}
 
export default Navbar
