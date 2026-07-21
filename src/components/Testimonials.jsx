import React from 'react'

const Testimonials = () => {
  return (
    <section className='w-full bg-transparent py-[9rem] sm:py-[11rem] lg:py-[13rem]'>
      <div className='w-full max-w-[1240px] mx-auto px-4 retro-display-cyan'>
        <h2 className='text-3xl sm:text-4xl font-extrabold mb-12 text-left pl-[2ch] -indent-[2ch]'>&gt; Client Feedback</h2>

        <div className='border-2 border-cyan-300/90 rounded-md bg-black/45 px-5 py-8'>
          <h3 className='text-xl sm:text-2xl font-bold mb-4 text-left pl-[2ch] -indent-[2ch]'>&gt; Ileana, Founder of Resplandece Mujer</h3>
          <p className='text-base sm:text-lg text-cyan-100/90 leading-relaxed text-left pl-[2ch] -indent-[2ch]'>&gt; "Code Enclave translated our vision into a fast, reliable platform that feels true to our mission. Communication was clear, delivery was disciplined, and every detail was handled with care."</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials