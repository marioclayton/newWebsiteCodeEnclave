import React from 'react';
import {Link} from 'react-router-dom';

const Analytics = () => {
  return (
    <div className='w-full py-32 md:py-40 relative'>
      <div className='relative z-10 pt-6 max-w-[1200px] w-[90%] sm:w-[82%] lg:w-[78%] mx-auto retro-display-amber'>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10'>

        <h2 className='text-3xl md:text-4xl font-bold mb-8 pl-[2ch] -indent-[2ch] lg:col-span-2'>&gt; Solutions</h2>

        <p className='text-xl md:text-2xl mb-12 leading-[2.1] pl-[2ch] -indent-[2ch] lg:col-span-2'>
          &gt; At <strong>Code Enclave</strong>, we build high-performance websites and custom software that help businesses operate smarter, move faster, and stand apart. Every solution is designed with scalability, security, and long-term success in mind.
        </p>

        <h3 className='text-2xl md:text-3xl font-semibold mb-8 pl-[2ch] -indent-[2ch] lg:col-span-2'>&gt; Our Capabilities</h3>

        <div className='flex flex-col gap-12 mb-16'>
          <div>
            <p className='text-xl md:text-2xl font-semibold mb-2 pl-[2ch] -indent-[2ch]'>&gt; Web Development</p>
            <p className='text-lg md:text-xl leading-[2.1] pl-[2ch] -indent-[2ch]'>&gt; Modern, responsive websites built for speed, performance, and conversion—crafted to represent your brand and grow your business.</p>
          </div>
          <div>
            <p className='text-xl md:text-2xl font-semibold mb-2 pl-[2ch] -indent-[2ch]'>&gt; Custom Software</p>
            <p className='text-lg md:text-xl leading-[2.1] pl-[2ch] -indent-[2ch]'>&gt; From internal business tools to full-scale web applications, we develop software tailored to your workflow and goals.</p>
          </div>
          <div>
            <p className='text-xl md:text-2xl font-semibold mb-2 pl-[2ch] -indent-[2ch]'>&gt; UI &amp; UX Design</p>
            <p className='text-lg md:text-xl leading-[2.1] pl-[2ch] -indent-[2ch]'>&gt; Clean, intuitive interfaces that deliver exceptional user experiences across desktop, tablet, and mobile.</p>
          </div>
        </div>

        <div className='flex flex-col gap-12 mb-16'>
          <div>
            <p className='text-xl md:text-2xl font-semibold mb-2 pl-[2ch] -indent-[2ch]'>&gt; Scalable Backend Systems</p>
            <p className='text-lg md:text-xl leading-[2.1] pl-[2ch] -indent-[2ch]'>&gt; Secure APIs, databases, and server architecture engineered for reliability, performance, and future growth.</p>
          </div>
          <div>
            <p className='text-xl md:text-2xl font-semibold mb-2 pl-[2ch] -indent-[2ch]'>&gt; SEO &amp; Performance Optimization</p>
            <p className='text-lg md:text-xl leading-[2.1] pl-[2ch] -indent-[2ch]'>&gt; Fast-loading, search-optimized websites that improve visibility and help customers find your business.</p>
          </div>
          <div>
            <p className='text-xl md:text-2xl font-semibold mb-2 pl-[2ch] -indent-[2ch]'>&gt; Support &amp; Evolution</p>
            <p className='text-lg md:text-xl leading-[2.1] pl-[2ch] -indent-[2ch]'>&gt; Technology should evolve with your business. We provide ongoing maintenance, enhancements, and long-term technical support.</p>
          </div>
        </div>

        <div className='border-t border-amber-400 opacity-40 mb-12 lg:col-span-2' />

        <h3 className='text-2xl md:text-3xl font-semibold mb-6 pl-[2ch] -indent-[2ch] lg:col-span-2'>&gt; Build Beyond the Template.</h3>
        <p className='text-lg md:text-xl leading-[2.1] mb-12 pl-[2ch] -indent-[2ch] lg:col-span-2'>
          &gt; Whether you need a professional website, a custom web application, or software built around your business, we create digital solutions that are engineered to perform—and built to last.
        </p>

        <Link
          to='/ContactUs'
          className='inline-block text-3xl md:text-4xl font-bold no-underline lg:col-span-2'
        >
          &gt; [Contact Us]
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Analytics;
