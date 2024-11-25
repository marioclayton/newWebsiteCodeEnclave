import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {motion} from 'framer-motion';


const ContactUs = () => {
  return (
    <motion.div initial={{x:-0, opacity:0}} whileInView={{ x: 0, opacity:1 }} transition={{duration:2.5, delay:0.5}}  className='w-full bg-black py-16 px-4'>
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:bg-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required></input>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required></input>
          </div>
          <div class="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-white-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-primary-800">Send message</button>
      </form>
      <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Call Us</h2>
      <div className='flex justify-center'> 
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl mr-2">You can reach us at </p>
        <a href="tel:+123456789" className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-white sm:text-xl">305-322-0401</a>
        <FaPhone className='mb-8 lg:mb-16 text-center dark:text-white sm:text-xl ml-4'/>
      </div>
      <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Email Us</h2>
      <div className='flex justify-center'> 
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl mr-2">Email us at </p>
        <a href="mailto:support@codeenclave.com" className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-white sm:text-xl ">support@codeenclave.com</a>
        <MdEmail className='mb-8 lg:mb-16 text-center dark:text-white sm:text-xl ml-4'/>
      </div>
      

  </div>

    </motion.div>
  )
}

export default ContactUs