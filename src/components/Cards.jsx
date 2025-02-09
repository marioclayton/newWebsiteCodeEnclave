import React from 'react';
import {Link} from 'react-router-dom';




const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl max-w-2xl mx-auto text-center pb-16">
                        Service Packages
                    </h2>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-center py-8'>Basic Package</h2>
              <p className='text-center text-4xl font-bold'>$399</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Wordpress</p>
                <p className='py-2 border-b mx-8'>1-5 Page Website</p>
                <p className='py-2 border-b mx-8'>Responsive Deisgn</p>
                <p className='py-2 border-b mx-8'>SEO Optimazation</p>
                <p className='py-2 border-b mx-8'>-</p>
              </div>
              <button className='bg-green-600 text-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
                <Link to='/Quote' className='text-l p-4'>
                  Choose
                </Link>
              </button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-center py-8'>Premium Package</h2>
              <p className='text-center text-4xl font-bold'>$799</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Wordpress</p>
                <p className='py-2 border-b mx-8 '>5-10 Page Website</p>
                <p className='py-2 border-b mx-8'>Responsive Deisgn</p>
                <p className='py-2 border-b mx-8'>SEO Optimazation</p>
                <p className='py-2 border-b mx-8'>-</p>
              </div>
              <button className='bg-black text-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
                <Link to='/Quote' className='text-l p-4'>
                  Choose
                </Link>
              </button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-center py-8'>Custom Package</h2>
              <p className='text-center text-3xl font-bold'>Get Quote!</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Custom Coded</p>
                <p className='py-2 border-b mx-8'>10+ Page Website</p>
                <p className='py-2 border-b mx-8'>Responsive Deisgn</p>
                <p className='py-2 border-b mx-8'>SEO Optimazation</p>
                <p className='py-2 border-b mx-8'>Custom Branding</p>
                
              </div>
              <button className='bg-green-600 text-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
                <Link to='/Quote' className='text-l p-4'>
                  Get Quote
                </Link>
              </button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
