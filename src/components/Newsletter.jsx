import React, { useRef } from 'react'
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {

  const notify = () => toast("Submitted!");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_d9jc837', 'template_s0pqi3j', form.current, {
        publicKey: 'D3C-PazNicF9wiYHl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      if (form.current) {
        form.current.reset();
      }
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
          <form ref={form} onSubmit={sendEmail} className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              name='user_email' className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button onClick={notify} type="submit" value="Send" className='bg-[#a6a6a6] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </form>
          <ToastContainer />
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
