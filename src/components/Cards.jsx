import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='grayscale w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Basic Package</h2>
              <p className='text-center text-4xl font-bold'>$300</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>1-5 Page Website</p>
                <p className='py-2 border-b mx-8'>Responsive Deisgn</p>
                <p className='py-2 border-b mx-8'>SEO Optimazation</p>
                <p className='py-2 border-b mx-8'>-</p>
              </div>
              <button className='bg-[#a6a6a6] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Choose</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='grayscale w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Medium Pacakge</h2>
              <p className='text-center text-4xl font-bold'>$600</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>5-10 Page Website</p>
                <p className='py-2 border-b mx-8'>Responsive Deisgn</p>
                <p className='py-2 border-b mx-8'>SEO Optimazation</p>
                <p className='py-2 border-b mx-8'>Custom Branding</p>
              </div>
              <button className='bg-black text-[#ffffff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Choose</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='grayscale w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Custom Pacakge</h2>
              <p className='text-center text-3xl font-bold'>Get Quote!</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>10+ Page Website</p>
                <p className='py-2 border-b mx-8'>Responsive Deisgn</p>
                <p className='py-2 border-b mx-8'>SEO Optimazation</p>
                <p className='py-2 border-b mx-8'>Custom Branding</p>
              </div>
              <button className='bg-[#a6a6a6] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Quote</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
