import React from 'react'
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const Branding = () => {
  return (
    <div className='w-full bg-black text-white'>
      <div className='max-w-[1240px] mx-auto'>
        <motion.div initial={{y:200, opacity:0}} whileInView={{ y: 0, opacity:1 }} transition={{duration:0.8, delay:0.2}} className='py-16 px-4 flex flex-col justify-center'>
          <h1 className='md:text-3xl sm:text-2xl text-3xl  py-2'>How Strong Brand Systems Support Business Growth</h1>
          <p className='py-4'>
            Brand systems shape how your business is understood. Clear positioning and consistent communication reduce confusion and increase trust.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Builds Recognition and Trust
          </h3>
          <p className='py-4'>
            Consistency creates recognition. Recognition builds trust. Trust shortens the path from first visit to first conversation.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Differentiates You From Competitors
          </h3>
          <p className='py-4'>
            Positioning clarifies why you are the better fit. Strong differentiation helps you compete on value, not on price.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Drives Customer Loyalty and Advocacy
          </h3>
          <p className='py-4'>
            Clear messaging creates confidence before sales calls begin. It also improves referral quality because customers can explain your value more easily.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Supports Business Growth
          </h3>
          <p className='py-4'>
            Strong brand systems improve every channel: website development, content, sales materials, and customer onboarding.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Conclusion
          </h3>
          <p className='py-4'>
            Branding is operating clarity at scale. When identity, voice, and offer are aligned, growth becomes simpler and more predictable.

            We design brand systems that work with your software and website infrastructure, so every touchpoint feels intentional.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Next Step
          </h3>
          <p className='py-4'>
            If you are refining your market position, we can help align your brand, product experience, and digital presence.
          </p>
          <div className='m-auto'>
            <button className='bg-white text-black w-[150px] rounded-md font-medium mr-3 mx-auto py-3 mt-16'>
              <Link to='/ContactUs' className='text-l p-4'>Discuss Vision</Link>
            </button>
            <button className='bg-white text-black w-[150px] rounded-md font-medium ml-3 mx-auto py-3'>
              <Link to='/services' className='text-l p-4'>View Services</Link>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Branding
