import React from 'react';
import Illustration from '../Assets/Illustration1.svg'
import ArrowButton from './ArrowButton';

const Hero = () => {
  return (
    <section className='hero w-full flex-col md:flex-row flex items-center pb-20 bg-[#0D0D2B] px-8 xl:px-24 lg:px-20 md:px-10'>
        <div className="value md:w-1/2 w-full" data-aos="fade-up">
          <div className="flex bg-slate-700 rounded-3xl md:py-0 items-center gap-4 w-full md:w-fit">
            <h3 className="text-black px-5 md:px-3 text-base md:py-1 py-3 rounded-3xl bg-white" data-aos="zoom-in">75% SAVE</h3>
            <h3 className="md:pr-4 pr-2 bg-inherit rounded-r-3xl">For the Black Friday weekend</h3>
          </div>
          <h1 className='text-[2.2rem] lg:text-[3.4rem] md:text-[3rem] sm:text-[2.6rem] font-bold mt-6 leading-tight'>
            Fastest & secure platform to invest in crypto
          </h1>
          <p className='text-[#E0E0E0] mt-6 w-3/4'>
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.
          </p>
          <ArrowButton Text="Try for FREE" margin='1.5rem 0 0' />
        </div>
        <img src={Illustration} alt="" data-aos="zoom-in" className='md:w-1/2 w-full' />
    </section>
  )
}

export default Hero