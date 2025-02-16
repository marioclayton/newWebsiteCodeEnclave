import React from 'react'
import { Projects } from "../constants/portfolio.js";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";


    

const portfolio = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const nextPage = () => {
        if (currentIndex + itemsPerPage < Projects.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };
    const prevPage = () => {
        if (currentIndex - itemsPerPage >= 0) {
          setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    return (
        <div>
            <section className="bg-[#000000] antialiased">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl text-white">
                            Our work
                        </h2>
                        <p className="mt-4 text-base font-normal sm:text-xl text-gray-400">
                            Crafted with skill and care to help our clients grow their business!
                        </p>
                    </div>

                    <div className="relative w-full flex items-center justify-center">
                    
    
                    <div className=" mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 ">
                    {Projects.slice(currentIndex, currentIndex + itemsPerPage).map((link, index) => (
                        <div key={index} className=" grid md:grid-cols-2 gap-3 space-y-4  py-16 px-2  shadow-xl hover:scale-105 duration-300">
                        
                        <img className='w-[100%] mx-auto rounded-lg '  src={link.image} alt='/' />
                        <div className='content-center'>
                            <span
                            className="mb-6 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded  text-gray-300">
                            {link.company}
                            </span>
                            <h3 className="mb-6 text-2xl font-bold leading-tight text-white">
                            {link.name}
                            </h3>
                            <p className="mb-6 text-lg font-normal text-gray-400">
                            {link.description}
                            </p>
                            <a href={link.href} title=""
                            className="text-white  justify-center inline-flex items-center  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-primary-800"
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
                    ))}
                        {/* Left Button */}
                    <button
                        className="bg-gray-800 text-white p-2  m-16 rounded-full shadow-md disabled:opacity-50"
                        onClick={prevPage}
                        disabled={currentIndex === 0}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    {/* Right Button */}
                    <button
                        className="bg-gray-800 text-white p-2 m-16 rounded-full shadow-md disabled:opacity-50"
                        onClick={nextPage}
                        disabled={currentIndex + itemsPerPage >= Projects.length}
                    >
                        <ChevronRight size={24} />
                    </button>
                    </div>
                        
                    </div>
                </div>
                </section>
        </div>
    )
}

export default portfolio