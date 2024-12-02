import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';



const ContactUs = () => {

    const [formData, setFormData] = useState({ from_name: '', user_email: '', subject: '', message: '' });
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
      const templateID = 'template_s0pqi3j';
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
    <motion.div initial={{x:-0, opacity:0}} whileInView={{ x: 0, opacity:1 }} transition={{duration:0.5, delay:0.3}}  className='w-full bg-black py-16 px-4'>
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form onSubmit={handleSubmit} className="space-y-8 mb-14">
          <div>
              <label for="from_name" className="block mb-2 text-sm font-medium text-gray-300">Your name</label>
              <input value={formData.from_name}
              onChange={handleInputChange}
              name='from_name' type="text" id="from_name" className="shadow-sm border border-gray-300 text-sm rounded-lg block w-full p-2.5 bg-gray-50 placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="John Doe" required ></input>
          </div>
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
              <input name='user_email' type="email" id="email" className="shadow-sm border border-gray-300 text-sm rounded-lg block w-full p-2.5 bg-gray-50 placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="name@flowbite.com" required value={formData.user_email}
              onChange={handleInputChange}
          ></input>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
              <input name='subject' type="text" id="subject" className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Let us know how we can help you" required value={formData.subject}
              onChange={handleInputChange}
          ></input>
          </div>
          <div class="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-400">Your message</label>
              <textarea name='message' id="message" rows="6" className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300  placeholder-gray-400 text-black focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..." value={formData.message}
              onChange={handleInputChange}
          ></textarea>
          </div>
          <div className='w-full flex'>
          <button disabled={isSubmitting} type="submit" value="Send" className="mx-auto py-3 px-5 text-sm font-medium text-center text-white rounded-lg  sm:w-fit  focus:ring-4 focus:outline-none focus:ring-white-300 bg-green-600 hover:bg-green-700 focus:ring-primary-800">
          Send Message</button>
          
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
  );
};

export default ContactUs;