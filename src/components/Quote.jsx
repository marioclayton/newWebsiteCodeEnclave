import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Quote = () => {

  const [formData, setFormData] = useState({ from_name: '', company: '', email: '', phone: '', subject: 'Quote', message: '' });
  const [isSubmitting, setStatus] = useState(false);
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
    setStatus("Sending...");
    setLoading(true);
    
      try {
        const response = await fetch("http://codeenclave.com/backend/send-quote.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        const result = await response.text();
        setStatus(result);
        if (response.ok) {
          setTimeout(() => {
            setLoading(false);
            navigate("/RequestReceived"); // Redirect to another page
          }, 0);
        }
      } catch (error) {
        setStatus("Error sending message.");
      }

  };

  return (
    <section className='w-full bg-transparent py-[9rem] sm:py-[11rem] lg:py-[13rem] px-4'>
      <div className='max-w-[920px] mx-auto retro-display-amber'>
        <h2 className='mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-left pl-[2ch] -indent-[2ch]'>&gt; Get a Quote</h2>
        <p className='mb-12 text-base sm:text-xl text-amber-100/90 leading-relaxed text-left pl-[2ch] -indent-[2ch]'>&gt; Looking for a custom website designed just for your business? Let us help you turn your ideas into a digital reality. Select the best fit or request a custom quote and we will reply with a detailed estimate.</p>

        <form onSubmit={handleSubmit} className='space-y-8 mb-14 border-2 border-amber-300/90 rounded-md bg-black/45 px-5 py-8'>
          <div>
            <label htmlFor='name' className='block mb-2 text-sm sm:text-base font-medium text-amber-100/90 pl-[2ch] -indent-[2ch]'>&gt; Your name</label>
            <input
              value={formData.from_name}
              onChange={handleInputChange}
              name='from_name'
              type='text'
              id='name'
              className='block w-full px-4 py-3 border-2 border-amber-300/90 rounded-md bg-black/40 text-amber-100 placeholder-amber-200/50 focus:outline-none'
              placeholder='First Last'
              required
            ></input>
          </div>

          <div>
            <label htmlFor='companyName' className='block mb-2 text-sm sm:text-base font-medium text-amber-100/90 pl-[2ch] -indent-[2ch]'>&gt; Company name</label>
            <input
              value={formData.company}
              onChange={handleInputChange}
              name='company'
              type='text'
              id='companyName'
              className='block w-full px-4 py-3 border-2 border-amber-300/90 rounded-md bg-black/40 text-amber-100 placeholder-amber-200/50 focus:outline-none'
              placeholder='XYZ LLC'
              required
            ></input>
          </div>

          <div>
            <label htmlFor='email' className='block mb-2 text-sm sm:text-base font-medium text-amber-100/90 pl-[2ch] -indent-[2ch]'>&gt; Your email</label>
            <input
              value={formData.email}
              onChange={handleInputChange}
              name='email'
              type='email'
              id='email'
              className='block w-full px-4 py-3 border-2 border-amber-300/90 rounded-md bg-black/40 text-amber-100 placeholder-amber-200/50 focus:outline-none'
              placeholder='name@example.com'
              required
            ></input>
          </div>

          <div>
            <label htmlFor='phone' className='block mb-2 text-sm sm:text-base font-medium text-amber-100/90 pl-[2ch] -indent-[2ch]'>&gt; Your phone number</label>
            <input
              value={formData.phone}
              onChange={handleInputChange}
              name='phone'
              maxLength='10'
              type='tel'
              id='phone'
              className='block w-full px-4 py-3 border-2 border-amber-300/90 rounded-md bg-black/40 text-amber-100 placeholder-amber-200/50 focus:outline-none'
              placeholder='1231231234'
              required
            ></input>
          </div>

          <div>
            <label htmlFor='subject' className='block mb-2 text-sm sm:text-base font-medium text-amber-100/90 pl-[2ch] -indent-[2ch]'>&gt; Subject</label>
            <select
              value={formData.subject}
              onChange={handleInputChange}
              name='subject'
              id='subject'
              className='block w-full px-4 py-3 border-2 border-amber-300/90 rounded-md bg-black/40 text-amber-100 focus:outline-none'
              required
            >
              <option value='Support'>Support</option>
              <option value='BasicPackage'>Basic Package</option>
              <option value='PremiumPackage'>Premium Package</option>
              <option value='CustomQuote'>Get a Custom Quote</option>
            </select>
          </div>

          <div className='sm:col-span-2'>
            <label htmlFor='message' className='block mb-2 text-sm sm:text-base font-medium text-amber-100/90 pl-[2ch] -indent-[2ch]'>&gt; Your message</label>
            <textarea
              value={formData.message}
              onChange={handleInputChange}
              name='message'
              id='message'
              rows='6'
              className='block w-full px-4 py-3 border-2 border-amber-300/90 rounded-md bg-black/40 text-amber-100 placeholder-amber-200/50 focus:outline-none'
              placeholder='Leave a comment...'
            ></textarea>
          </div>

          <div className='w-full flex justify-start pl-[2ch]'>
            <button disabled={isSubmitting} type='submit' value='Send' className='text-amber-100 text-xl sm:text-2xl font-bold'>
              &gt; [Request Quote]
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
        <p className='font-light text-amber-100/90 sm:text-xl'>&gt; You can reach us at</p>
        <a href='tel:+13053220401' className='font-light sm:text-xl'>305-322-0401</a>
        <FaPhone className='text-amber-100 sm:text-xl'/>
      </div>
      <h2 className='mb-4 text-xl sm:text-2xl tracking-tight font-extrabold text-left pl-[2ch] -indent-[2ch]'>&gt; Email Us</h2>
      <div className='flex items-center flex-wrap gap-3 pl-[2ch] -indent-[2ch]'> 
        <p className='font-light text-amber-100/90 sm:text-xl'>&gt; Email us at</p>
        <a href='mailto:support@codeenclave.com' className='font-light sm:text-xl'>support@codeenclave.com</a>
        <MdEmail className='text-amber-100 sm:text-xl'/>
      </div>

      </div>
    </section>
  );
};

export default Quote;