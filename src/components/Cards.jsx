import React from 'react';

const Cards = () => {
  return (
    <div className='w-full py-32 md:py-40 relative'>
      <div className='relative z-10 max-w-[1200px] w-[90%] sm:w-[82%] lg:w-[78%] mx-auto retro-display-amber'>
        <h2 className='text-3xl md:text-4xl font-bold mb-8 pl-[2ch] -indent-[2ch]'>&gt; Delivery Process</h2>
        <p className='text-xl md:text-2xl mb-16 leading-[2.1] pl-[2ch] -indent-[2ch]'>&gt; Clear milestones. Senior execution. Built for outcomes.</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='bg-black/40 border border-amber-300 rounded-lg p-6'>
            <p className='text-2xl md:text-3xl font-semibold mb-4'>&gt; 01 - Discover</p>
            <p className='text-lg md:text-xl leading-[1.9]'>&gt; We map your goals, constraints, and growth targets.</p>
          </div>

          <div className='bg-black/40 border border-amber-300 rounded-lg p-6'>
            <p className='text-2xl md:text-3xl font-semibold mb-4'>&gt; 02 - Architect</p>
            <p className='text-lg md:text-xl leading-[1.9]'>&gt; We design the system for reliability, speed, and scale.</p>
          </div>

          <div className='bg-black/40 border border-amber-300 rounded-lg p-6'>
            <p className='text-2xl md:text-3xl font-semibold mb-4'>&gt; 03 - Build</p>
            <p className='text-lg md:text-xl leading-[1.9]'>&gt; We implement with precision, then validate every critical path.</p>
          </div>

          <div className='bg-black/40 border border-amber-300 rounded-lg p-6'>
            <p className='text-2xl md:text-3xl font-semibold mb-4'>&gt; 04 - Optimize</p>
            <p className='text-lg md:text-xl leading-[1.9]'>&gt; We iterate from real usage data and improve continuously.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
