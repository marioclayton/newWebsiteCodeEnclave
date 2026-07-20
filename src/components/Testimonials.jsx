import React from 'react'

const Testimonials = () => {
  return (
    <section className='w-full bg-transparent py-[9rem] sm:py-[11rem] lg:py-[13rem] px-4'>
      <div className='max-w-[920px] mx-auto retro-display-cyan'>
        <h2 className='text-3xl sm:text-4xl font-extrabold mb-12 text-left pl-[2ch] -indent-[2ch]'>&gt; Testimonials</h2>

        <div className='border-2 border-cyan-300/90 rounded-md bg-black/45 px-5 py-8'>
          <h3 className='text-xl sm:text-2xl font-bold mb-4 text-left pl-[2ch] -indent-[2ch]'>&gt;  Ileana, Author of Resplandece Mujer</h3>
          <p className='text-base sm:text-lg text-cyan-100/90 leading-relaxed text-left pl-[2ch] -indent-[2ch]'>&gt; "Code Enclave LLC did an amazing job bringing my vision for Resplandece Mujer to life. They created a beautiful, easy-to-use website that perfectly reflects my ministry and the women I hope to serve. They were professional, patient, and attentive throughout the entire process. I highly recommend them to anyone looking for a high-quality website and excellent service."</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials