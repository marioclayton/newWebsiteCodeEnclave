import React, {useEffect, useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { NavLink, useLocation } from 'react-router-dom';
import {serviceLinks} from '../constants/servicePages.js';
import {industryLinks} from '../constants/industryPages.js';


const Navbar = () => {

  const [nav, setNav] = useState(true)
  const [isPinned, setIsPinned] = useState(false)
  const [activeThemeZone, setActiveThemeZone] = useState('')
  const [showServicesMenu, setShowServicesMenu] = useState(false)
  const location = useLocation()
  const currentPath = location.pathname.toLowerCase()
  const normalizedPath = currentPath.length > 1 && currentPath.endsWith('/')
    ? currentPath.slice(0, -1)
    : currentPath
  const isHeroRoute = normalizedPath === '/' || normalizedPath === '/services' || normalizedPath === '/industries' || normalizedPath === '/portfolio'
  const isServicesSection = normalizedPath === '/services' || normalizedPath.startsWith('/services/')
  const isIndustriesSection = normalizedPath === '/industries' || normalizedPath.startsWith('/industries/')
  const isContactRoute = normalizedPath.startsWith('/contactus')
  const isRequestReceivedRoute = normalizedPath.startsWith('/requestreceived')
  const isWhiteRoute = normalizedPath === '/branding' || normalizedPath === '/privacy' || normalizedPath === '/terms' || normalizedPath === '/cookies'
  const knownRoutes = ['/', '/services', '/industries', '/portfolio', '/contactus', '/privacy', '/terms', '/cookies', '/quote', '/branding', '/seo', '/webdev', '/requestreceived', '/404', '/services/custom-web-development', '/services/custom-software-development', '/services/business-automation', '/services/seo-performance', '/services/website-maintenance', '/industries/contractors', '/industries/professional-services', '/industries/healthcare', '/industries/real-estate', '/industries/churches', '/industries/restaurants', '/industries/cleaning-companies', '/industries/local-businesses']
  const isNotFoundRoute = normalizedPath.startsWith('/404') || !knownRoutes.includes(normalizedPath)

  const handleNav = () => {
    setNav(!nav)
  }

  const closeMenus = () => {
    setNav(true)
    setShowServicesMenu(false)
  }

  const handleLogoClick = () => {
    if (normalizedPath === '/') {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }

    closeMenus()
  }

  useEffect(() => {
    if (isContactRoute || isRequestReceivedRoute || isNotFoundRoute) {
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
  }, [isHeroRoute, isContactRoute, isRequestReceivedRoute, isNotFoundRoute])

  useEffect(() => {
    closeMenus()
  }, [location.pathname])

  useEffect(() => {
    const handleThemeScroll = () => {
      const themedSections = document.querySelectorAll('[data-nav-theme]')

      if (!themedSections.length) {
        setActiveThemeZone('')
        return
      }

      const navProbeY = window.scrollY + 120
      let detectedTheme = ''

      themedSections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const top = window.scrollY + rect.top
        const bottom = top + rect.height
        const sectionTheme = section.getAttribute('data-nav-theme') || ''

        if (navProbeY >= top && navProbeY < bottom) {
          detectedTheme = sectionTheme
        }
      })

      setActiveThemeZone(detectedTheme)
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
    : (isContactRoute || isRequestReceivedRoute || isNotFoundRoute
      ? 'z-50 absolute top-0 left-0 w-full bg-transparent retro-display'
      : (isWhiteRoute
        ? 'z-50 sticky top-0 bg-black retro-display-white'
        : 'z-50 sticky top-0 bg-black retro-display-amber'))

  const navWrapperClass = (isContactRoute || isRequestReceivedRoute || isNotFoundRoute)
    ? 'z-50 absolute top-0 left-0 w-full bg-transparent retro-display'
    : (activeThemeZone === 'cyan'
      ? baseNavWrapperClass.replace('retro-display-amber', 'retro-display-cyan')
      : activeThemeZone === 'white'
        ? baseNavWrapperClass.replace('retro-display-amber', 'retro-display-white')
      : baseNavWrapperClass)

  const navTone = navWrapperClass.includes('retro-display-cyan')
    ? 'cyan'
    : navWrapperClass.includes('retro-display-white')
      ? 'white'
      : navWrapperClass.includes('retro-display') && !navWrapperClass.includes('retro-display-amber')
        ? 'green'
      : 'amber'

  const navItemClass = 'inline-flex items-center text-xl md:text-2xl px-4 h-24'
  const dropdownThemeClass = navTone === 'cyan' ? 'retro-display-cyan border-cyan-300/70' : navTone === 'white' ? 'retro-display-white border-white/70' : navTone === 'green' ? 'retro-display border-green-300/70' : 'retro-display-amber border-amber-300/70'
  const dropdownItemBorderClass = navTone === 'cyan' ? 'border-cyan-300/30' : navTone === 'white' ? 'border-white/30' : navTone === 'green' ? 'border-green-300/30' : 'border-amber-300/30'
  const dropdownHeaderBorderClass = navTone === 'cyan' ? 'border-cyan-300/40' : navTone === 'white' ? 'border-white/40' : navTone === 'green' ? 'border-green-300/40' : 'border-amber-300/40'

  const mobilePanelBgClass = 'bg-black'

  return (
    <div className={navWrapperClass}>
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 bg-transparent'>
          <NavLink to='/' end onClick={handleLogoClick} className='text-2xl md:text-3xl leading-tight'>
            {'<code>'}<br />{'</enclave>'}
          </NavLink>
        <ul className='hidden lg:flex items-center h-24'>
          <li>
            <NavLink to="/" end className={navItemClass}>
              {({ isActive }) => (isActive ? '[HOME]' : 'HOME')}
            </NavLink>
          </li>
          <li>
            <div
              className='relative h-24 flex items-center'
              onMouseEnter={() => setShowServicesMenu(true)}
              onMouseLeave={() => setShowServicesMenu(false)}
            >
              <button
                type='button'
                className={navItemClass}
                aria-haspopup='true'
                aria-expanded={showServicesMenu}
                onClick={() => setShowServicesMenu((prev) => !prev)}
              >
                {isServicesSection ? '[SERVICES]' : 'SERVICES'}
              </button>
              {showServicesMenu && (
                <div
                  className={`absolute left-0 top-full min-w-[320px] border bg-black/95 px-3 py-3 ${dropdownThemeClass}`}
                  role='menu'
                >
                  <NavLink to='/services' className={`block text-base p-2 border-b ${dropdownHeaderBorderClass}`} role='menuitem'>
                    {'[Services Overview]'}
                  </NavLink>
                  {serviceLinks.map((service) => (
                    <NavLink
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className={`block text-base p-2 border-b last:border-b-0 ${dropdownItemBorderClass}`}
                      role='menuitem'
                    >
                      {service.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </li>
          <li>
            <NavLink to="/Portfolio" end className={navItemClass}>
              {({ isActive }) => (isActive ? '[OUR WORK]' : 'OUR WORK')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/industries" end className={navItemClass}>
              {isIndustriesSection ? '[INDUSTRIES]' : 'INDUSTRIES'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/ContactUs" end className={navItemClass}>
              {({ isActive }) => (isActive ? '[START PROJECT]' : 'START PROJECT')}
            </NavLink>
          </li>
        </ul>
        <div onClick={handleNav} className='block lg:hidden'>
        {!nav ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35}/>}
        </div>
        <div className={!nav ? `fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-700 ${mobilePanelBgClass} ease-in-out duration-500 ${navTone === 'white' || isWhiteRoute ? 'retro-display-white' : ''}` : 'fixed left-[-100%]'}>
          <NavLink to='/' end onClick={handleLogoClick} className='block text-2xl md:text-3xl p-4 leading-tight'>
            {'<code>'}<br />{'</enclave>'}
          </NavLink>
            <ul className='uppercase p-4'>
              <li>
                <NavLink to="/" end className='grid text-xl md:text-2xl p-4 border-b border-gray-600'>
                  {({ isActive }) => (isActive ? '[HOME]' : 'HOME')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" end className='grid text-xl md:text-2xl p-4 border-b border-gray-600'>
                  {isServicesSection ? '[SERVICES]' : 'SERVICES'}
                </NavLink>
              </li>
              {serviceLinks.map((service) => (
                <li key={service.slug}>
                  <NavLink to={`/services/${service.slug}`} end className='grid text-base p-3 border-b border-gray-700'>
                    {service.title}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink to="/Portfolio" end className='grid text-xl md:text-2xl p-4 border-b border-gray-600'>
                  {({ isActive }) => (isActive ? '[OUR WORK]' : 'OUR WORK')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/industries" end className='grid text-xl md:text-2xl p-4 border-b border-gray-600'>
                  {isIndustriesSection ? '[INDUSTRIES]' : 'INDUSTRIES'}
                </NavLink>
              </li>
              {industryLinks.map((industry) => (
                <li key={industry.slug}>
                  <NavLink to={`/industries/${industry.slug}`} end className='grid text-base p-3 border-b border-gray-700'>
                    {industry.title}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink to="/ContactUs" end className='grid text-xl md:text-2xl p-4 border-b border-gray-600'>
                  {({ isActive }) => (isActive ? '[START PROJECT]' : 'START PROJECT')}
                </NavLink>
              </li>
            </ul>
        </div>
      </div>
    </div>
    
  )
}
 
export default Navbar
