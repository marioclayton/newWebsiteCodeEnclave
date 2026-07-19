import React from 'react';

const Cards = () => {
  return (
    <div className='w-full py-32 md:py-40 relative'>
      <div className='relative z-10 max-w-[1200px] w-[90%] sm:w-[82%] lg:w-[78%] mx-auto retro-display-amber'>
        <h2 className='text-3xl md:text-4xl font-bold mb-8 pl-[2ch] -indent-[2ch]'>&gt; Our Process</h2>
        <p className='text-xl md:text-2xl mb-16 leading-[2.1] pl-[2ch] -indent-[2ch]'>&gt; This sells custom development much better than pricing.</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='bg-black/40 border-4 border-amber-300 rounded-lg p-6'>
            <p className='text-2xl md:text-3xl font-semibold mb-4'>&gt; 01 - Discover</p>
            <p className='text-lg md:text-xl leading-[1.9]'>&gt; We learn your business, goals, and workflow.</p>
          </div>

          <div className='bg-black/40 border-4 border-amber-300 rounded-lg p-6'>
            <p className='text-2xl md:text-3xl font-semibold mb-4'>&gt; 02 - Engineer</p>
            <p className='text-lg md:text-xl leading-[1.9]'>&gt; We design and build the right solution-not the easiest one.</p>
          </div>

          <div className='bg-black/40 border-4 border-amber-300 rounded-lg p-6'>
            <p className='text-2xl md:text-3xl font-semibold mb-4'>&gt; 03 - Deploy</p>
            <p className='text-lg md:text-xl leading-[1.9]'>&gt; We launch, optimize, and thoroughly test every system.</p>
          </div>

          <div className='bg-black/40 border-4 border-amber-300 rounded-lg p-6'>
            <p className='text-2xl md:text-3xl font-semibold mb-4'>&gt; 04 - Evolve</p>
            <p className='text-lg md:text-xl leading-[1.9]'>&gt; As your business grows, your technology grows with it.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
