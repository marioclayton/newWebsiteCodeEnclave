import React, {useEffect, useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { NavLink, useLocation } from 'react-router-dom';


const Navbar = () => {

  const [nav, setNav] = useState(true)
  const [isPinned, setIsPinned] = useState(false)
  const [isCyanZone, setIsCyanZone] = useState(false)
  const location = useLocation()
  const currentPath = location.pathname.toLowerCase()
  const isHeroRoute = currentPath === '/' || currentPath === '/services' || currentPath === '/portfolio'
  const isContactRoute = currentPath.startsWith('/contactus')
  const isRequestReceivedRoute = currentPath.startsWith('/requestreceived')
  const isWhiteRoute = currentPath === '/webdev' || currentPath === '/branding' || currentPath === '/seo' || currentPath === '/privacy'

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    if (isContactRoute || isRequestReceivedRoute) {
      setIsPinned(false)
      return
    }

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
  }, [isHeroRoute, isContactRoute, isRequestReceivedRoute])

  useEffect(() => {
    setNav(true)
  }, [location.pathname])

  useEffect(() => {
    const handleThemeScroll = () => {
      const cyanSections = document.querySelectorAll('[data-nav-theme="cyan"]')

      if (!cyanSections.length) {
        setIsCyanZone(false)
        return
      }

      const navProbeY = window.scrollY + 120
      let inCyanZone = false

      cyanSections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const top = window.scrollY + rect.top
        const bottom = top + rect.height

        if (navProbeY >= top && navProbeY < bottom) {
          inCyanZone = true
        }
      })

      setIsCyanZone(inCyanZone)
    }

    handleThemeScroll()
    window.addEventListener('scroll', handleThemeScroll, { passive: true })
    window.addEventListener('resize', handleThemeScroll)

    return () => {
      window.removeEventListener('scroll', handleThemeScroll)
      window.removeEventListener('resize', handleThemeScroll)
    }
  }, [location.pathname])

  const baseNavWrapperClass = isHeroRoute
    ? (isPinned
      ? 'z-50 fixed top-0 left-0 w-full bg-black retro-display-amber'
      : 'z-50 absolute top-0 left-0 w-full bg-transparent retro-display')
    : (isContactRoute || isRequestReceivedRoute
      ? 'z-50 absolute top-0 left-0 w-full bg-transparent retro-display'
      : (isWhiteRoute
        ? 'z-50 sticky top-0 bg-black retro-display-white'
        : 'z-50 sticky top-0 bg-black retro-display-amber'))

  const navWrapperClass = (isContactRoute || isRequestReceivedRoute)
    ? 'z-50 absolute top-0 left-0 w-full bg-transparent retro-display'
    : (isCyanZone
      ? baseNavWrapperClass.replace('retro-display-amber', 'retro-display-cyan')
      : baseNavWrapperClass)

  const mobilePanelBgClass = (isContactRoute || isRequestReceivedRoute) ? 'bg-transparent' : 'bg-black'

  return (
    <div className={navWrapperClass}>
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 bg-transparent'>
          <p className='text-2xl md:text-3xl leading-tight'>
          {'<code>'}<br />{'</enclave>'}
        </p>
        <ul className='hidden md:flex'>
          <NavLink to="/" end className='text-xl md:text-2xl p-4'>
            {({ isActive }) => (isActive ? '[HOME]' : 'HOME')}
          </NavLink>
          <NavLink to="/Services" end className='text-xl md:text-2xl p-4'>
            {({ isActive }) => (isActive ? '[SOLUTIONS]' : 'SOLUTIONS')}
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
        <div className={!nav ? `fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-700 ${mobilePanelBgClass} ease-in-out duration-500 ${isWhiteRoute ? 'retro-display-white' : ''}` : 'fixed left-[-100%]'}>
          <p className='text-2xl md:text-3xl p-4 leading-tight'>
            {'<code>'}<br />{'</enclave>'}
          </p>
            <ul className='uppercase p-4'>
              
            <NavLink to="/" end className='grid text-xl md:text-2xl p-4 border-b border-gray-600'>
              {({ isActive }) => (isActive ? '[HOME]' : 'HOME')}
            </NavLink>
            <NavLink to="/Services" end className='grid text-xl md:text-2xl p-4 border-b border-gray-600'>
              {({ isActive }) => (isActive ? '[SOLUTIONS]' : 'SOLUTIONS')}
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
