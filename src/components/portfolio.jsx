import React from 'react'
import { Projects } from "../constants/portfolio.js";
import { useState } from "react";
import {Link} from 'react-router-dom';
import {servicePages} from '../constants/servicePages.js';


    

const portfolio = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 9;

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
            <div className="w-full max-w-[1240px] px-4 py-[6.5rem] mx-auto sm:py-[7.6rem] lg:py-[8.8rem]">
                <div className="max-w-2xl mr-auto text-left retro-display-cyan">
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl pl-[2ch] -indent-[2ch]">
                        &gt; Our work
                    </h2>
                    <p className="mt-4 text-base font-normal sm:text-xl text-cyan-200/90 pl-[2ch] -indent-[2ch]">
                        &gt; Custom web development and software solutions delivering measurable business outcomes.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                    {Projects.slice(currentIndex, currentIndex + itemsPerPage).map((link, index) => (
                        <article key={index} className="group h-full flex flex-col">
                            <div className="border-2 border-cyan-300/90 rounded-md bg-black/40 p-2">
                                <div className='relative overflow-hidden rounded'>
                                  <img
                                      className='w-full h-[190px] sm:h-[220px] object-cover'
                                      src={link.image}
                                      alt={link.name}
                                      loading='lazy'
                                      decoding='async'
                                      width='800'
                                      height='448'
                                      sizes='(max-width: 640px) 100vw, 392px'
                                  />
                                  <div className='pointer-events-none absolute inset-0 bg-black/20' />
                                  <div className='pointer-events-none absolute inset-0 bg-cyan-300/12 mix-blend-screen' />
                                  <div
                                      className='pointer-events-none absolute inset-0 opacity-70'
                                      style={{
                                          backgroundImage: 'repeating-linear-gradient(0deg, rgba(34, 211, 238, 0.16) 0px, rgba(34, 211, 238, 0.16) 1px, transparent 1px, transparent 3px)'
                                      }}
                                  />
                                </div>
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
                                                                <div className='mb-4 flex flex-wrap gap-2'>
                                                                    {(link.relatedServices || []).slice(0, 2).map((serviceSlug) => (
                                                                        <Link
                                                                            key={serviceSlug}
                                                                            to={`/services/${serviceSlug}`}
                                                                            className='text-xs sm:text-sm border border-cyan-300/60 rounded px-2 py-1'
                                                                        >
                                                                            {servicePages[serviceSlug]?.h1 || 'Service'}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                <a
                                    href={link.href}
                                    className="text-cyan-100 inline-flex items-center font-bold text-lg sm:text-xl pl-[2ch] -indent-[2ch]"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    &gt; [View Project]
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
                        aria-label="Previous project page"
                    >
                        {'<'}
                    </button>
                    <button
                        className="retro-display-cyan text-3xl sm:text-4xl font-bold px-2 text-cyan-100 disabled:opacity-35"
                        onClick={nextPage}
                        disabled={currentIndex + itemsPerPage >= Projects.length}
                        aria-label="Next project page"
                    >
                        {'>'}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default portfolio