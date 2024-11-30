import React from 'react'
import Portfolio1 from '../assets/pexels-pixabay-270637.jpg';
import Portfolio2 from '../assets/pexels-pixabay-209151.jpg';
import Portfolio3 from '../assets/pexels-pixabay-221159.jpg';

const portfolio = () => {
  return (
    <div>
        <section className="bg-[#111111] antialiased">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl text-white">
                        Our work
                    </h2>
                    <p className="mt-4 text-base font-normal sm:text-xl text-gray-400">
                        Crafted with skill and care to help our clients grow their business!
                    </p>
                </div>

                <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className=" space-y-4 bg-[#0c0c0c] py-16 px-2 rounded-xl shadow-xl hover:scale-105 duration-300">
                        <img className='w-[80%] mx-auto rounded-lg'  src={Portfolio1} alt='/' />
                        <span
                        className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">
                        Alphabet Inc.
                        </span>
                        <h3 className="text-2xl font-bold leading-tight text-white">
                        Official website
                        </h3>
                        <p className="text-lg font-normal text-gray-400">
                        Flowbite helps you connect with friends, family and communities of people who share your interests.
                        </p>
                        <a href="#" title=""
                        className="text-white bg-green-600 hover:bg-green-700 justify-center inline-flex items-center  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-primary-800"
                        role="button">
                        View case study
                        <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                        </svg>
                        </a>
                    </div>

                    <div className="space-y-4 bg-[#0c0c0c] py-16 px-2 rounded-xl shadow-xl hover:scale-105 duration-300">
                        <img className='w-[80%] mx-auto rounded-lg'  src={Portfolio2} alt='/' />
                        <span
                        className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">
                        Microsoft Corp.
                        </span>
                        <h3 className="text-2xl font-bold leading-tight text-white">
                        Management system
                        </h3>
                        <p className="text-lg font-normal text-gray-400">
                        Flowbite helps you connect with friends, family and communities of people who share your interests.
                        </p>
                        <a href="#" title=""
                        className="text-white justify-center inline-flex items-center  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-600 hover:bg-green-700 focus:ring-primary-800"
                        role="button">
                        View case study
                        <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                        </svg>
                        </a>
                    </div>

                    <div className="space-y-4 bg-[#0c0c0c] py-16 px-2 rounded-xl shadow-xl hover:scale-105 duration-300">
                        <img className='w-[80%] mx-auto rounded-lg'  src={Portfolio3} alt='/' />   
                        <span
                        className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">
                        Adobe Inc.
                        </span>
                        <h3 className="text-2xl font-bold leading-tight text-white">
                        Logo design
                        </h3>
                        <p className="text-lg font-normal text-gray-400">
                        Flowbite helps you connect with friends, family and communities of people who share your interests.
                        </p>
                        <a href="#" title=""
                        className="text-white justify-center inline-flex items-center  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-600 hover:bg-green-700 focus:ring-primary-800"
                        role="button">
                        View case study
                        <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                        </svg>
                        </a>
                    </div>
                    
                </div>
            </div>
            </section>
    </div>
  )
}

export default portfolio