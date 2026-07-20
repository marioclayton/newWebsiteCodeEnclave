import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';



const ContactUs = () => {

    const [formData, setFormData] = useState({ from_name: '', user_email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
        setIsSubmitting(true);
      setLoading(true);

      
        try {
            const payload = new URLSearchParams();
            payload.append('from_name', formData.from_name);
            payload.append('user_email', formData.user_email);
            payload.append('subject', formData.subject);
            payload.append('message', formData.message);

            const response = await fetch("/backend/send-email.php", {
            method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: payload.toString(),
          });
    
          if (response.ok) {
            setTimeout(() => {
              setLoading(false);
                setIsSubmitting(false);
              navigate("/RequestReceived"); // Redirect to another page
            }, 0);
            } else {
              setLoading(false);
              setIsSubmitting(false);
          }
        } catch (error) {
            setLoading(false);
            setIsSubmitting(false);
        }
    
    


    };
  

  return (
    <section className='w-full bg-transparent py-[9rem] sm:py-[11rem] lg:py-[13rem] px-4'>
      <div className='max-w-[920px] mx-auto retro-display-cyan'>
        <h2 className='mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-left pl-[2ch] -indent-[2ch]'>&gt; Contact Us</h2>
        <p className='mb-12 text-base sm:text-xl text-cyan-100/90 leading-relaxed text-left pl-[2ch] -indent-[2ch]'>&gt; Got a technical issue? Want to send feedback about a beta feature? Need details about our business plan? Let us know.</p>

        <form onSubmit={handleSubmit} className='space-y-8 mb-14 border-2 border-cyan-300/90 rounded-md bg-black/45 px-5 py-8'>
          <div>
            <label htmlFor='from_name' className='block mb-2 text-sm sm:text-base font-medium text-cyan-100/90 pl-[2ch] -indent-[2ch]'>&gt; Your name</label>
            <input
              value={formData.from_name}
              onChange={handleInputChange}
              name='from_name'
              type='text'
              id='from_name'
              className='block w-full px-4 py-3 border-2 border-cyan-300/90 rounded-md bg-black/40 text-cyan-100 placeholder-cyan-200/50 focus:outline-none'
              placeholder='John Doe'
              required
            />
          </div>

          <div>
            <label htmlFor='email' className='block mb-2 text-sm sm:text-base font-medium text-cyan-100/90 pl-[2ch] -indent-[2ch]'>&gt; Your email</label>
            <input
              name='user_email'
              type='email'
              id='email'
              className='block w-full px-4 py-3 border-2 border-cyan-300/90 rounded-md bg-black/40 text-cyan-100 placeholder-cyan-200/50 focus:outline-none'
              placeholder='name@example.com'
              required
              value={formData.user_email}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor='subject' className='block mb-2 text-sm sm:text-base font-medium text-cyan-100/90 pl-[2ch] -indent-[2ch]'>&gt; Subject</label>
            <input
              name='subject'
              type='text'
              id='subject'
              className='block w-full px-4 py-3 border-2 border-cyan-300/90 rounded-md bg-black/40 text-cyan-100 placeholder-cyan-200/50 focus:outline-none'
              placeholder='Let us know how we can help you'
              required
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>

          <div className='sm:col-span-2'>
            <label htmlFor='message' className='block mb-2 text-sm sm:text-base font-medium text-cyan-100/90 pl-[2ch] -indent-[2ch]'>&gt; Your message</label>
            <textarea
              name='message'
              id='message'
              rows='6'
              className='block w-full px-4 py-3 border-2 border-cyan-300/90 rounded-md bg-black/40 text-cyan-100 placeholder-cyan-200/50 focus:outline-none'
              placeholder='Leave a comment...'
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className='w-full flex justify-start pl-[2ch]'>
            <button disabled={isSubmitting} type='submit' value='Send' className='text-cyan-100 text-xl sm:text-2xl font-bold'>
              &gt; [Send Message]
            </button>
          </div>
        </form>

      {loading && (
        <div className="flex justify-center items-center my-4">
          <svg
            className="animate-spin h-16 w-16 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        </div>
      )}

      <h2 className='mb-4 text-xl sm:text-2xl tracking-tight font-extrabold text-left pl-[2ch] -indent-[2ch]'>&gt; Call Us</h2>
      <div className='flex items-center flex-wrap gap-3 mb-10 pl-[2ch] -indent-[2ch]'> 
        <p className='font-light text-cyan-100/90 sm:text-xl'>&gt; You can reach us at </p>
        <a href='tel:+13053220401' className='font-light sm:text-xl'>305-322-0401</a>
        <FaPhone className='text-cyan-100 sm:text-xl'/>
      </div>
      <h2 className='mb-4 text-xl sm:text-2xl tracking-tight font-extrabold text-left pl-[2ch] -indent-[2ch]'>&gt; Email Us</h2>
      <div className='flex items-center flex-wrap gap-3 pl-[2ch] -indent-[2ch]'> 
        <p className='font-light text-cyan-100/90 sm:text-xl'>&gt; Email us at </p>
        <a href='mailto:support@codeenclave.com' className='font-light sm:text-xl'>support@codeenclave.com</a>
        <MdEmail className='text-cyan-100 sm:text-xl'/>
      </div>

      </div>
    </section>
  );
};

export default ContactUs;