import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import { useNavigate } from 'react-router-dom';
const Quote = () => {

  const [formData, setFormData] = useState({ from_name: '', company: '', email: '', phone: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      const serviceID = 'service_d9jc837';
      const templateID = 'template_nzurjxn';
      const userID = 'D3C-PazNicF9wiYHl';
  
      emailjs
        .send(serviceID, templateID, formData, userID)
        .then(() => {
          setIsSubmitting(false);
          setTimeout(() => {
            navigate('/RequestReceived'); // Redirect to the success page
          }); // Optional delay to show the toast
        })
        .catch((error) => {
          setIsSubmitting(false);
          console.error('EmailJS error:', error);
        });
    };

  return (
    <motion.div initial={{x:-0, opacity:0}} whileInView={{ x: 0, opacity:1 }} transition={{duration:1.5, delay:0.2}}  className='w-full bg-black py-16 px-4'>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Get a Quote</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">Looking for a custom website designed just for your business? Let us help you turn your ideas into a digital reality! Feel free to select our basic or medium package if your business needs a more basic wev application. Fill out the form below to request a personalized quote based on your project needs. Our team will review your information and get back to you with a detailed estimate as soon as possible.</p>
      <form onSubmit={handleSubmit} className="space-y-8 mb-14">
        <div>
            <label for="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
            <input value={formData.from_name}
              onChange={handleInputChange} name='from_name' type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5  placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="First Last" required></input>
        </div>
        <div>
            <label for="companyName" className="block mb-2 text-sm font-medium text-gray-300">Company Name</label>
            <input value={formData.company}
              onChange={handleInputChange} name='company' type="text" id="companyName" className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 block w-full p-2.5 placeholder-gray-400 text-black  focus:border-primary-500 shadow-sm-light" placeholder="XYZ LLC" required></input>
        </div>
        
        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
            <input value={formData.email}
              onChange={handleInputChange} name='email' type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500  block w-full p-2.5  placeholder-gray-400 text-black  focus:border-primary-500 shadow-sm-light" placeholder="name@flowbite.com" required></input>
        </div>
        <div>
            <label for="phone" className="block mb-2 text-sm font-medium text-gray-300">Your Phone Number</label>
            <input value={formData.phone}
              onChange={handleInputChange} name='phone' maxlength="10" type="tel " id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400 text-black shadow-sm-light" placeholder="123-123-1234" required></input>
        </div>
        <div>
            <label for="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
            <select value={formData.subject}
              onChange={handleInputChange} name='subject' type="text" id="subject" className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Let us know how we can help you" required>
                <option value="Support">Support</option>
                <option value="BasicPackage">Basic Package</option>
                <option value="PremiumPackage">Premium Package</option>
                <option value="CustomQuote">Get a Custom Quote</option>
            </select>
        </div>
        <div class="sm:col-span-2">
            <label for="message" className="block mb-2 text-sm font-medium text-gray-400">Your message</label>
            <textarea value={formData.message}
              onChange={handleInputChange} name='message' id="message" rows="6" className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border  border-gray-600 placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
        </div>
        <div className='w-full flex'>
          <button disabled={isSubmitting} type="submit" value="Send" className=" mx-auto py-3 px-5 text-sm font-medium text-center text-white rounded-lg  sm:w-fit  focus:ring-4 focus:outline-none focus:ring-white-300 bg-green-600 hover:bg-green-700 focus:ring-primary-800">Request</button>
        </div>
        
      </form>
      <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-white">Call Us</h2>
      <div className='flex justify-center'> 
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl mr-2">You can reach us at </p>
        <a href="tel:+13053220401" className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">305-322-0401</a>
        <FaPhone className='mb-8 lg:mb-16 text-center text-white sm:text-xl ml-4'/>
      </div>
      <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-white">Email Us</h2>
      <div className='flex justify-center'> 
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl mr-2">Email us at </p>
        <a href="mailto:support@codeenclave.com" className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl ">support@codeenclave.com</a>
        <MdEmail className='mb-8 lg:mb-16 text-center text-white sm:text-xl ml-4'/>
      </div>
      

  </div>

    </motion.div>
  )
}

export default Quote