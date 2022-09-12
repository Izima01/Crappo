import React from 'react'
import arrow from '../Assets/Arrow Right 2.svg';
import ArrowButton from './ArrowButton';

const Crypto = ({ Img, Name, Symbol, Text }) => {
  return (
    <article className='group w-full sm:w-1/3 py-12 px-10 sm:px-4 md:px-8 bg-white hover:bg-[#2B076E] flex flex-col items-center text-center rounded-2xl hover:transition-colors hover:ease-in-out'>
        <img src={Img} alt="" className='mb-10' />
        <div className='text-3xl font-bold items-center flex gap-1 mb-4'>
            <h3 className='text-black md:focus-hover:text-white md:group-hover:text-white'>{Name}</h3>
            <span className='text-[#bdbdbd] group-hover:text-white md:group-hover:text-white'>{Symbol}</span>
        </div>
        <p className='text-black mb-6 group-focus:text-white md:group-hover:text-white'>
            {Text}
        </p>
        <div className='hidden md:group-hover:block group-focus:block'>
            <ArrowButton Text="Start Mining" />
        </div>
        <button className='md:group-hover:hidden group-focus:hidden'>
            <img src={arrow} alt="" className='md:group-hover:hidden group-focus:hidden' />
        </button>
    </article>
  )
}

export default Crypto