import React from 'react';
import {Link} from 'react-router-dom';

const Analytics = () => {
  return (
    <div className='w-full py-32 md:py-40 relative'>
      <div className='relative z-10 pt-6 max-w-[1200px] w-[90%] sm:w-[82%] lg:w-[78%] mx-auto retro-display-amber'>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10'>

        <h2 className='text-3xl md:text-4xl font-bold mb-8 pl-[2ch] -indent-[2ch] lg:col-span-2'>&gt; Engineering Services</h2>

        <p className='text-xl md:text-2xl mb-12 leading-[2.1] pl-[2ch] -indent-[2ch] lg:col-span-2'>
          &gt; Code Enclave LLC is a boutique software engineering studio. We build custom systems that reduce friction, improve speed, and support long-term growth.
        </p>

        <h3 className='text-2xl md:text-3xl font-semibold mb-8 pl-[2ch] -indent-[2ch] lg:col-span-2'>&gt; What We Engineer</h3>

        <div className='flex flex-col gap-12 mb-16'>
          <div>
            <p className='text-xl md:text-2xl font-semibold mb-2 pl-[2ch] -indent-[2ch]'>&gt; <Link to='/services/custom-web-development'>Custom Web Development</Link></p>
            <p className='text-lg md:text-xl leading-[2.1] pl-[2ch] -indent-[2ch]'>&gt; Professional website design and website development for businesses that need speed, clarity, and measurable results.</p>
          </div>
          <div>
            <p className='text-xl md:text-2xl font-semibold mb-2 pl-[2ch] -indent-[2ch]'>&gt; <Link to='/services/custom-software-development'>Custom Software Development</Link></p>
            <p className='text-lg md:text-xl leading-[2.1] pl-[2ch] -indent-[2ch]'>&gt; Software solutions built around your workflow, so your team can move faster with fewer manual steps.</p>
          </div>
          <div>
            <p className='text-xl md:text-2xl font-semibold mb-2 pl-[2ch] -indent-[2ch]'>&gt; <Link to='/services/custom-software-development'>Web Applications</Link></p>
            <p className='text-lg md:text-xl leading-[2.1] pl-[2ch] -indent-[2ch]'>&gt; Secure, reliable web applications designed for daily operations, customer experience, and growth.</p>
          </div>
        </div>

        <div className='flex flex-col gap-12 mb-16'>
          <div>
            <p className='text-xl md:text-2xl font-semibold mb-2 pl-[2ch] -indent-[2ch]'>&gt; <Link to='/services/business-automation'>Business Automation</Link></p>
            <p className='text-lg md:text-xl leading-[2.1] pl-[2ch] -indent-[2ch]'>&gt; We automate repetitive work across operations, sales, and service so your team can focus on higher-value work.</p>
          </div>
          <div>
            <p className='text-xl md:text-2xl font-semibold mb-2 pl-[2ch] -indent-[2ch]'>&gt; <Link to='/services/seo-performance'>SEO &amp; Performance Optimization</Link></p>
            <p className='text-lg md:text-xl leading-[2.1] pl-[2ch] -indent-[2ch]'>&gt; Faster load times, stronger search visibility, and smoother user flows that convert attention into revenue.</p>
          </div>
          <div>
            <p className='text-xl md:text-2xl font-semibold mb-2 pl-[2ch] -indent-[2ch]'>&gt; <Link to='/services/website-maintenance'>Digital Infrastructure</Link></p>
            <p className='text-lg md:text-xl leading-[2.1] pl-[2ch] -indent-[2ch]'>&gt; Stable architecture, dependable deployments, and maintainable systems that scale with your business.</p>
          </div>
        </div>

        <div className='border-t border-amber-400 mb-12 lg:col-span-2' />

        <h3 className='text-2xl md:text-3xl font-semibold mb-6 pl-[2ch] -indent-[2ch] lg:col-span-2'>&gt; Build Beyond the Template.</h3>
        <p className='text-lg md:text-xl leading-[2.1] mb-12 pl-[2ch] -indent-[2ch] lg:col-span-2'>
          &gt; From small business websites to custom software development, we engineer systems that perform now and scale later. Additional service tracks like website maintenance, SEO optimization, WordPress development, React development, and e-commerce development are available as your roadmap expands.
        </p>

        <Link
          to='/Quote'
          className='inline-block text-3xl md:text-4xl font-bold no-underline lg:col-span-2'
        >
          &gt; [Let's Build Something Exceptional]
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Analytics;
