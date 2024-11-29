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
            At Code Enclave LLC, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or engage with our services. By using our website, you consent to the data practices described in this policy.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Information We Collect 
          </h3>
          <p className='py-4'>
            We may collect the following types of personal information when you visit our website or engage with our services:
          </p>
          <p className='pl-6 pb-4'>
            Personal Identification Information: This may include your name, email address, phone number, or other contact details that you provide when filling out forms, subscribing to our newsletter, or contacting us directly.
          </p>
          <p className='pl-6 pb-4'>
            Website Usage Data: We may collect non-personal information regarding your interaction with our website, such as IP address, browser type, operating system, pages visited, and time spent on the site. This information helps us analyze trends, administer the website, and improve user experience.  
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            How We Use Your Information
          </h3>
          <p className='py-4'>
            We may use your personal information in the following ways:
          </p>
          <p className='pl-6 pb-4'>
            To respond to your inquiries, provide customer support, and improve our services.
          </p>
          <p className='pl-6 pb-4'>
            To send you promotional emails, updates, or other communications if you have opted in to receive such content.
          </p>
          <p className='pl-6 pb-4'>
            To improve the functionality of our website, including optimizing the user experience.
          </p>
          <p className='pl-6 pb-4'>
            To comply with legal obligations or enforce our website’s terms and conditions.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Sharing Your Information
          </h3>
          <p className='py-4'>
            We do not sell, rent, or lease your personal information to third parties. However, we may share your information with trusted third-party service providers to perform functions on our behalf, such as hosting services, email delivery, or analytics. These providers are required to use your information solely for the purpose of providing services to us and must keep it confidential.
          </p>
          <p className='py-4'>
            We may also disclose personal information if required by law or in response to legal processes, such as subpoenas, court orders, or government requests.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Data Security
          </h3>
          <p className='py-4'>
            We take reasonable steps to protect your personal information from unauthorized access, alteration, disclosure, or destruction. While we strive to use commercially acceptable means to protect your data, please remember that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee the absolute security of your information.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Cookies and Tracking Technologies
          </h3>
          <p className='py-4'>
            Our website may use cookies or other tracking technologies to enhance user experience. Cookies are small files that are placed on your device to collect information about your browsing habits. You can set your browser to refuse cookies or alert you when cookies are being sent, but note that some parts of the website may not function properly if cookies are disabled.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Your Rights and Choices
          </h3>
          <p className='py-4'>
            You have the right to:
          </p>
          <p className='pl-6 pb-4'>
            Access, update, or correct your personal information by contacting us.
          </p>
          <p className='pl-6 pb-4'>
            Opt out of receiving marketing communications at any time by following the unsubscribe instructions in the emails we send or contacting us directly.
          </p>
          <p className='pl-6 pb-4'>
            Request that we delete your personal information, subject to certain legal exceptions.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Third-Party Links
          </h3>
          <p className='py-4'>
            Our website may contain links to third-party websites. Please note that we are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Changes to This Privacy Policy
          </h3>
          <p className='py-4'>
            We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated "Effective Date" at the top of the page. We encourage you to review this policy periodically to stay informed about how we are protecting your information.   
          </p>
          <h3 className='text-2xl sm:text-xl pt-2'>
            Contact Us
          </h3>
          <p className='py-4'>
            If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us today!
          </p>
          <div className='m-auto'>
            <button className='bg-white text-black w-[200px] rounded-md font-medium mr-3 mx-auto py-3'>
              <Link to='/ContactUs' className='text-l p-4'>Contact Us</Link>
            </button>
            <button className='bg-white text-black w-[200px] rounded-md font-medium ml-3 mx-auto py-3'>
              <Link to='/Services' className='text-l p-4'>Get Started</Link>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Privacy