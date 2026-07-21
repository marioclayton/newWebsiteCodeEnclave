import React from 'react'
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const SEO = () => {
  return (
    <div className='w-full bg-black text-white'>
      <div className='max-w-[1240px] mx-auto'>
        <motion.div initial={{y:200, opacity:0}} whileInView={{ y: 0, opacity:1 }} transition={{duration:0.8, delay:0.2}} className='py-16 px-4 flex flex-col justify-center'>
          <h1 className='md:text-3xl sm:text-2xl text-3xl  py-2'>How SEO Optimization Creates a Real Competitive Edge</h1>
          <p className='py-4'>
            SEO optimization is not about gaming search engines. It is about building a faster, clearer, and more useful website that earns better visibility over time.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Increased Visibility in Search Engines
          </h3>
          <p className='py-4'>
            Most buying journeys begin with search. Strong SEO helps your business appear when customers are actively looking for solutions.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Builds Credibility and Trust
          </h3>
          <p className='py-4'>
            Ranking well sends a trust signal. Technical quality, clear content, and consistent structure reinforce that your business is credible.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Drives Targeted Traffic
          </h3>
          <p className='py-4'>
            SEO traffic is intent-driven. You attract people already searching for what you offer, which improves lead quality and conversion potential.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Cost-Effective Marketing Strategy
          </h3>
          <p className='py-4'>
            Paid ads stop when spend stops. SEO compounds. The gains from technical improvements and durable content continue working long after launch.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Provides a Competitive Advantage
          </h3>
          <p className='py-4'>
            If competitors invest and you do not, they win discoverability. SEO gives small and medium-sized businesses a practical way to compete above their size.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Enhances User Experience
          </h3>
          <p className='py-4'>
            Better SEO usually means better UX: faster pages, stronger structure, and clearer content. That reduces drop-off and improves conversion.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Adapts to Evolving Trends
          </h3>
          <p className='py-4'>
            Search behavior changes. Ongoing optimization keeps your website aligned with evolving standards and customer expectations.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Measurable Results and Insights
          </h3>
          <p className='py-4'>
            SEO is measurable. You can track what improves visibility, engagement, and leads, then reinvest in what performs.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Conclusion
          </h3>
          <p className='py-4'>
            SEO optimization is a growth system. It improves visibility, builds authority, and supports stronger long-term acquisition.

            For businesses investing in custom web development, SEO should be engineered into the foundation.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Next Step
          </h3>
          <p className='py-4'>
            We build performance-focused websites and software solutions that combine technical excellence with business outcomes.
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

export default SEO