import React from 'react'
import { Projects } from "../constants/portfolio.js";
import { useState } from "react";


    

const portfolio = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 6;

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
        <section className="bg-transparent antialiased" id="portfolio-content">
            <div className="max-w-[920px] px-4 py-[6.5rem] mx-auto lg:px-6 sm:py-[7.6rem] lg:py-[8.8rem]">
                <div className="max-w-2xl mr-auto text-left retro-display-cyan">
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl pl-[2ch] -indent-[2ch]">
                        &gt; Our work
                    </h2>
                    <p className="mt-4 text-base font-normal sm:text-xl text-cyan-200/90 pl-[2ch] -indent-[2ch]">
                        &gt; Crafted with skill and care to help our clients grow their business.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                    {Projects.slice(currentIndex, currentIndex + itemsPerPage).map((link, index) => (
                        <article key={index} className="group h-full flex flex-col">
                            <div className="border-2 border-cyan-300/90 rounded-md bg-black/40 p-2">
                                <img className='w-full h-[190px] sm:h-[220px] object-cover rounded' src={link.image} alt={link.name} />
                            </div>
                            <div className='mt-2 border-2 border-cyan-300/90 rounded-md bg-black/45 px-4 py-6 retro-display-cyan flex flex-col flex-1'>
                                <span className="mb-2 text-xs font-medium text-cyan-100/90 tracking-wide pl-[2ch] -indent-[2ch]">
                                    &gt; {link.company}
                                </span>
                                <h3 className="mb-2 text-xl sm:text-2xl font-bold leading-tight pl-[2ch] -indent-[2ch]">
                                    &gt; {link.name}
                                </h3>
                                <p className="mb-3 text-sm sm:text-base text-cyan-100/90 leading-relaxed flex-1 pl-[2ch] -indent-[2ch]">
                                    &gt; {link.description}
                                </p>
                                <a
                                    href={link.href}
                                    className="text-cyan-100 inline-flex items-center font-bold text-lg sm:text-xl pl-[2ch] -indent-[2ch]"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    &gt; [View Case Study]
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-20 flex items-center justify-center gap-8">
                    <button
                        className="retro-display-cyan text-3xl sm:text-4xl font-bold px-2 text-cyan-100 disabled:opacity-35"
                        onClick={prevPage}
                        disabled={currentIndex === 0}
                        aria-label="Previous portfolio items"
                    >
                        {'<'}
                    </button>
                    <button
                        className="retro-display-cyan text-3xl sm:text-4xl font-bold px-2 text-cyan-100 disabled:opacity-35"
                        onClick={nextPage}
                        disabled={currentIndex + itemsPerPage >= Projects.length}
                        aria-label="Next portfolio items"
                    >
                        {'>'}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default portfolio