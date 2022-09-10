import React from 'react'
import Stats from './Stats';
import Exchange from '../Assets/Exchange.svg';
import Wallet from '../Assets/Wallet.svg';
import Country from '../Assets/Country.svg';
import Illustration2 from '../Assets/Illustration2.svg';

const WhyCrappo = () => {
  return (
    <section className='bg-[#0D0D2B] px-8 xl:px-24 lg:px-20 md:px-10 pb-20'>
        <div className='numbers flex-col sm:flex-row flex sm:items-center pl-[10%] md:pl-0 sm:justify-between gap-y-10 sm:gap-y-0 pb-5'>
          <Stats Img={Exchange} Sign='$' Bold='B' Text='Digital Currency Exchanged' end={30} timer={250} duration="400" />
          <Stats  Img={Wallet} Bold='M+' Text='Trusted Wallets Investor' end={10} timer={800} duration="800" />
          <Stats  Img={Country} Bold='' Text='Countries Supported' end={195} duration="1100" />
        </div>
        <div className='md:flex-row flex-col flex gap-4 md:gap-8 xl:gap-16 items-center'>
          <img src={Illustration2} alt="" data-aos="zoom-in" className='w-full md:w-7/12 lg:w-7/12 xl:max-w-[600px] mb-10 md:mb-0 h-[30rem]' />
          <div className='w-full md:w-5/12' data-aos="fade-up">
            <h3 className='text-3xl md:text-4xl font-extrabold mb-6'>Why you should choose CRAPPO</h3>
            <p className='text-[#E0E0E0] text-base w-72 lg:w-96'>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
          </div>
        </div>
    </section>
  )
}

export default WhyCrappo