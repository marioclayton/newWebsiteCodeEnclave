import React from 'react'
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const Privacy = () => {
  return (
    <div className='w-full bg-black text-white'>
      <div className='max-w-[1240px] mx-auto'>
        <motion.div initial={{y:200, opacity:0}} whileInView={{ y: 0, opacity:1 }} transition={{duration:0.8, delay:0.2}} className='py-16 px-4 flex flex-col justify-center'>
          <h1 className='md:text-3xl sm:text-2xl text-3xl  py-2'>Privacy Policy</h1>
          <p className='py-2'>
            Code Enclave LLC is committed to protecting your privacy. This policy explains what information we collect, how we use it, and how we safeguard it when you use our website and services.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Information We Collect 
          </h3>
          <p className='py-4'>
            We may collect the following information when you submit forms or interact with our website:
          </p>
          <p className='pl-6 pb-4'>
            Contact Information: Name, email, phone number, and other details you provide through forms.
          </p>
          <p className='pl-6 pb-4'>
            Usage Data: Browser, device, pages viewed, session behavior, and similar analytics data used to improve performance and user experience.
          </p>
          <p className='pl-6 pb-4'>
            Inquiry Data: Project details, company information, and service interests submitted through our contact and quote forms.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            How We Use Your Information
          </h3>
          <p className='py-4'>
            We may use your information to:
          </p>
          <p className='pl-6 pb-4'>
            Respond to inquiries and project requests.
          </p>
          <p className='pl-6 pb-4'>
            Provide support and service updates.
          </p>
          <p className='pl-6 pb-4'>
            Improve website functionality and performance.
          </p>
          <p className='pl-6 pb-4'>
            Meet legal and regulatory obligations.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Sharing Your Information
          </h3>
          <p className='py-4'>
            We do not sell personal information. We may share data with trusted providers that support hosting, analytics, and communications. Those providers are required to protect your data.
          </p>
          <p className='py-4'>
            Form submissions are processed through our server-side contact and quote handlers to deliver inquiry details to our team email inbox.
          </p>
          <p className='py-4'>
            We may disclose information when required by law or legal process.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Data Security
          </h3>
          <p className='py-4'>
            We use reasonable technical and operational safeguards to protect your data. No internet transmission method is fully risk-free, so absolute security cannot be guaranteed.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Data Retention
          </h3>
          <p className='py-4'>
            We retain personal information only as long as needed to respond to inquiries, provide services, support operations, and satisfy legal obligations.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Cookies and Tracking Technologies
          </h3>
          <p className='py-4'>
            We may use cookies and related technologies to improve functionality and analyze usage. You can manage cookie preferences in your browser settings.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Your Rights and Choices
          </h3>
          <p className='py-4'>
            Depending on your location, you may have rights to:
          </p>
          <p className='pl-6 pb-4'>
            Access, update, or correct your personal information.
          </p>
          <p className='pl-6 pb-4'>
            Opt out of non-essential communications.
          </p>
          <p className='pl-6 pb-4'>
            Request deletion of personal information, subject to legal requirements.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Third-Party Links
          </h3>
          <p className='py-4'>
            Our site may include links to third-party websites. We are not responsible for external privacy practices.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Changes to This Privacy Policy
          </h3>
          <p className='py-4'>
            We may update this policy as our services evolve. Updates will be posted on this page.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Effective Date
          </h3>
          <p className='py-4'>
            July 20, 2026
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Contact Us
          </h3>
          <p className='py-4'>
            Questions about this policy can be sent through our contact page.
          </p>
          <div className='m-auto mt-10'>
            <button className='bg-white text-black w-[150px] rounded-md font-medium mr-3 mx-auto py-3'>
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

export default Privacy