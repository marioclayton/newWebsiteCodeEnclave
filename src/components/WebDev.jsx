import React from 'react'
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const WebDev = () => {
  return (
    <div className='w-full bg-black text-white'>
      <div className='max-w-[1240px] mx-auto'>
        <motion.div initial={{y:200, opacity:0}} whileInView={{ y: 0, opacity:1 }} transition={{duration:0.8, delay:0.2}} className='py-16 px-4 flex flex-col justify-center'>
          <h1 className='md:text-3xl sm:text-2xl text-3xl  py-2'>Why Professional Website Development Drives Growth</h1>
          <p className='py-4'>
            Your website is not a brochure. It is operating infrastructure for sales, trust, and customer experience. High-quality website development improves how your business is found, evaluated, and chosen.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            First Impressions Matter
          </h3>
          <p className='py-4'>
            Buyers decide quickly. A polished, well-structured interface signals credibility before anyone reads a single paragraph.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Improved User Experience = Higher Engagement
          </h3>
          <p className='py-4'>
            Responsive websites remove friction across phone, tablet, and desktop. Faster pages, clear navigation, and strong information architecture keep qualified visitors moving toward action.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Enhanced SEO Performance
          </h3>
          <p className='py-4'>
            SEO optimization starts with technical quality. When structure, speed, and content alignment are strong, your website earns better visibility and attracts higher-intent traffic.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Builds Trust and Credibility
          </h3>
          <p className='py-4'>
            Consistent messaging, real proof, and dependable performance build confidence. Trust is a conversion lever, not a branding accessory.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Drives Conversions with Clear Calls-to-Action
          </h3>
          <p className='py-4'>
            Clear next steps reduce hesitation. Strong CTA strategy paired with responsive design turns attention into inquiries, calls, and revenue.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Competitive Advantage
          </h3>
          <p className='py-4'>
            Most competitors still operate on generic templates. A custom system gives you better speed, better control, and a differentiated customer journey.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Facilitates Customer Insights
          </h3>
          <p className='py-4'>
            Better systems produce better data. With clean analytics and event tracking, you can see what users need and improve where it matters most.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Supports Marketing Efforts
          </h3>
          <p className='py-4'>
            Every campaign points back to your site. Website development quality determines whether paid and organic traffic converts or leaks.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Conclusion
          </h3>
          <p className='py-4'>
            Great websites are growth systems. They improve visibility, accelerate decision-making, and create dependable conversion paths.

            If your current site cannot support where your business is going, it is time to engineer the next version.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Next Step
          </h3>
          <p className='py-4'>
            We design and build responsive websites, web applications, and software infrastructure that scale with your business.
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

export default WebDev