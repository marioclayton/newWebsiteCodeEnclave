import React, { useState  } from 'react'
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {


  const [formData, setFormData] = useState({ user_email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      .then((response) => {
        setIsSubmitting(false);
        toast('You are now subscribed!');
        setFormData({ user_email: '' }); // Reset form
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error('EmailJS error:', error); // Log the error for debugging
      });
  };


  return (
    <motion.div initial={{y:50, opacity:0}} whileInView={{ y: 0, opacity:1 }} transition={{duration:0.8, delay:0.01}} className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want to learn how you can start your online presence with a website?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              name='user_email' value={formData.user_email} className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
              onChange={handleInputChange}

              required
            />
            <button type="submit" disabled={isSubmitting} value="Send" className='bg-[#a6a6a6] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </form>
          <ToastContainer position="bottom-center" style={{ zIndex: 9999 }} />
          <p>
            We care bout the protection of your data. Read our{' '}
            <Link to='/Privacy' className='text-[#a6a6a6]'>privacy policy.</Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Newsletter;
