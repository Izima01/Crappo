import React, { useState } from 'react';
// import './Mining.css';

const Mining = () => {
    const [email, setEmail] = useState();
  return (
    <section className='h-96 flex justify-center items-center bg-gradient-to-b from-[#2B076E] to-[#0D0D2B]'>
        <div data-aos="zoom-in" className='mining w-10/12 md:w-11/12 lg:w-10/12 p-8 md:p-12 bg-[#3671E9] rounded-2xl flex-col md:flex-row flex items-center justify-between gap-y-8 md:gap-y-0'>
            <div>
                <h3 className='text-3xl font-bold mb-4'>Start mining now</h3>
                <p className='w-full md:w-72 lg:w-96'>Join now with CRAPPO to get the latest news and start mining now</p>
            </div>
            <div className='relative'>
                <input
                    type="text" name="email" value={email}
                    placeholder='Enter your email'
                    onChange={(e)=>setEmail(e.target.value)}
                    className='bg-inherit outline-none border-b pr-20 md:pr-11 pb-1 peer placeholder:font-semibold placeholder:text-lg'
                />
                <label htmlFor="email" className='block absolute text-lg -top-7 font-semibold peer-placeholder-shown:-top-[2px] peer-placeholder-shown:text-lg'>Enter your email</label>
            </div>
            
            <button className='py-4 px-9 bg-white text-black rounded-[32px] font-semibold text-lg'>
                Subscribe
            </button>
        </div>
    </section>
  )
}

export default Mining