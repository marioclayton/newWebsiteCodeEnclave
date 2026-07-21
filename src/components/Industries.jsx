import React from 'react';
import {Link} from 'react-router-dom';
import {industryLinks, industryPages} from '../constants/industryPages.js';

// TODO: Replace with approved Code Enclave copy
const Industries = () => {
  return (
    <section data-nav-theme='white' className='w-full bg-transparent py-[9rem] sm:py-[11rem] lg:py-[13rem]'>
      <div className='w-full max-w-[1240px] mx-auto px-4 retro-display-white'>
        <h2 className='text-3xl md:text-4xl font-bold mb-8 pl-[2ch] -indent-[2ch]'>&gt; Industries</h2>
        <p className='text-xl md:text-2xl mb-12 leading-[2.1] pl-[2ch] -indent-[2ch]'>
          &gt; Sector-specific implementation paths for teams that need systems aligned to real operating constraints.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          {industryLinks.map((industry, index) => (
            <article key={industry.slug} className='border border-white/70 rounded-md bg-black/45 px-5 py-6'>
              <p className='text-sm tracking-wider mb-3'>{`> 0${index + 1} / INDUSTRY`}</p>
              <h3 className='text-xl md:text-2xl font-bold mb-3'>{`> ${industry.title}`}</h3>
              <p className='text-base md:text-lg leading-relaxed mb-4'>{`> ${industryPages[industry.slug].heroText}`}</p>
              <Link to={`/industries/${industry.slug}`} className='text-lg font-semibold'>
                {'> Explore this industry'}
              </Link>
            </article>
          ))}
        </div>

        <Link to='/industries' className='inline-block text-3xl md:text-4xl font-bold no-underline'>
          &gt; [View All Industries]
        </Link>
      </div>
    </section>
  );
};

export default Industries;
