import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollToTop from "../scrollToTop.jsx";
import ServicesHero from '../components/ServicesHero';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {serviceLinks, servicePages} from '../constants/servicePages.js';


const ServicesRoute = () => {
  return (
    <div> 
      <Helmet>
        <title>Services | Code Enclave LLC</title>
        <meta name="description" content="Explore Code Enclave LLC services: custom web development, custom software development, business automation, SEO and website performance, plus website maintenance." />
        <meta property="og:title" content="Services | Code Enclave LLC" />
        <meta property="og:description" content="Service overview for high-performance websites, software solutions, and business automation." />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.codeenclave.com/services' />
        <link rel='canonical' href='https://www.codeenclave.com/services' />
        <script type='application/ld+json'>{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: serviceLinks.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: service.title,
            url: `https://www.codeenclave.com/services/${service.slug}`
          }))
        })}</script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <ServicesHero />
      <section className='relative bg-black overflow-hidden'>
        <div className='pointer-events-none absolute inset-0 z-0 amber-fixed-section-shade' />
        <div className='relative z-10 w-full max-w-[1240px] mx-auto px-4 py-28 sm:py-32 retro-display-amber'>
          <header className='border border-amber-300/60 rounded-md bg-black/45 px-6 py-10 mb-14'>
            <p className='text-sm tracking-wider mb-4'>{'> 00 / SERVICES HUB'}</p>
            <h1 className='text-3xl md:text-5xl font-bold leading-tight mb-5'>{'> Engineering Services'}</h1>
            <p className='text-lg md:text-2xl leading-relaxed'>
              {'> We build high-performance websites, software solutions, and automation systems for businesses that need reliable execution and room to scale.'}
            </p>
          </header>

          <section className='mb-16'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6 pl-[2ch] -indent-[2ch]'>{'> Primary Services'}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {serviceLinks.map((service, index) => {
                const serviceData = servicePages[service.slug];

                return (
                  <article key={service.slug} className='border border-amber-300/60 rounded-md bg-black/45 px-5 py-6'>
                    <p className='text-sm tracking-wider mb-3'>{`> 0${index + 1} / SERVICE`}</p>
                    <h3 className='text-xl md:text-2xl font-bold mb-3'>{`> ${service.title}`}</h3>
                    <p className='text-base md:text-lg leading-relaxed mb-4'>{`> ${serviceData.heroText}`}</p>
                    <Link to={`/services/${service.slug}`} className='text-lg font-semibold'>
                      {'> Explore this service'}
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>

          <section className='mb-16'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6 pl-[2ch] -indent-[2ch]'>{'> Shared Delivery Process'}</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
              {[
                {label: '01 / DISCOVER', text: 'Clarify objectives, constraints, and required outcomes.'},
                {label: '02 / ARCHITECT', text: 'Design the system model, technical approach, and delivery scope.'},
                {label: '03 / BUILD', text: 'Implement with production-grade standards and clear QA gates.'},
                {label: '04 / OPTIMIZE', text: 'Iterate from usage data and improve what impacts growth most.'}
              ].map((item) => (
                <article key={item.label} className='border border-amber-300/60 rounded-md bg-black/45 px-5 py-6'>
                  <h3 className='text-xl md:text-2xl font-bold mb-3'>{`> ${item.label}`}</h3>
                  <p className='text-base md:text-lg leading-relaxed'>{`> ${item.text}`}</p>
                </article>
              ))}
            </div>
          </section>

          <section className='mb-16 border border-amber-300/55 rounded-md bg-black/45 px-6 py-8'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-4'>{'> Not sure what you need?'}</h2>
            <p className='text-lg md:text-xl leading-relaxed mb-5'>
              {'> If you are deciding between custom web development, software solutions, or business automation, we can map the right first move based on impact and timeline.'}
            </p>
            <Link to='/ContactUs' className='text-xl md:text-2xl font-semibold'>
              {'> Discuss your project goals'}
            </Link>
          </section>

          <section className='border border-amber-300/70 rounded-md bg-black/45 px-6 py-10'>
            <h2 className='text-2xl md:text-4xl font-bold mb-4'>{'> Build beyond the template.'}</h2>
            <p className='text-lg md:text-xl leading-relaxed mb-8'>
              {'> We engineer systems for long-term reliability, performance, and growth.'}
            </p>
            <Link to='/Quote' className='text-2xl md:text-3xl font-bold'>
              {'> [Start Your Project]'}
            </Link>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ServicesRoute