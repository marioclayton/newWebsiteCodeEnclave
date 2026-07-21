import React from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';
import IndustriesHero from '../components/IndustriesHero.jsx';
import Navbar from '../components/Navbar';
import ScrollToTop from '../scrollToTop.jsx';
import {industryLinks, industryPages} from '../constants/industryPages.js';

// TODO: Replace with approved Code Enclave copy
const IndustriesRoute = () => {
  return (
    <div>
      <Helmet>
        <title>Industries | Code Enclave LLC</title>
        <meta
          name='description'
          content='Industry overview for Code Enclave LLC: contractors, professional services, healthcare, real estate, churches, restaurants, cleaning companies, and local businesses.'
        />
        <meta property='og:title' content='Industries | Code Enclave LLC' />
        <meta
          property='og:description'
          content='Explore placeholder industry pages showing tailored digital strategy by sector.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.codeenclave.com/industries' />
        <link rel='canonical' href='https://www.codeenclave.com/industries' />
        <script type='application/ld+json'>{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: industryLinks.map((industry, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: industry.title,
            url: `https://www.codeenclave.com/industries/${industry.slug}`
          }))
        })}</script>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <IndustriesHero />

      <section data-nav-theme='white' className='relative bg-black overflow-hidden'>
        <div className='pointer-events-none absolute inset-0 z-0 white-fixed-section-shade' />
        <div className='relative z-10 w-full max-w-[1240px] mx-auto px-4 py-28 sm:py-32 retro-display-white'>
          <header className='border border-white/60 rounded-md bg-black/45 px-6 py-10 mb-14'>
            <p className='text-sm tracking-wider mb-4'>{'> 00 / INDUSTRY HUB'}</p>
            <h1 className='text-3xl md:text-5xl font-bold leading-tight mb-5'>{'> Industries We Support'}</h1>
            <p className='text-lg md:text-2xl leading-relaxed'>
              {'> Placeholder sector guidance showing how service architecture adapts to different operational contexts.'}
            </p>
          </header>

          <section>
            <h2 className='text-2xl md:text-3xl font-semibold mb-6 pl-[2ch] -indent-[2ch]'>{'> Industry Pages'}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {industryLinks.map((industry, index) => {
                const industryData = industryPages[industry.slug];

                return (
                  <article key={industry.slug} className='border border-white/60 rounded-md bg-black/45 px-5 py-6'>
                    <p className='text-sm tracking-wider mb-3'>{`> 0${index + 1} / INDUSTRY`}</p>
                    <h3 className='text-xl md:text-2xl font-bold mb-3'>{`> ${industry.title}`}</h3>
                    <p className='text-base md:text-lg leading-relaxed mb-4'>{`> ${industryData.heroText}`}</p>
                    <Link to={`/industries/${industry.slug}`} className='text-lg font-semibold'>
                      {'> Explore this industry'}
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustriesRoute;
