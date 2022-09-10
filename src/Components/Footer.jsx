import React from 'react'
import Logo from '../Assets/Logo.svg';
import Visa from '../Assets/Visa.svg';
import Mastercard from '../Assets/Mastercard.svg';
import Bitcoin2 from '../Assets/Bitcoin2.svg';
import FB from '../Assets/facebook-f 1.svg';
import IG from '../Assets/instagram 1.svg';
import Youtube from '../Assets/youtube 1.svg';
import Twitter from '../Assets/twitter 1.svg';
import Linkedin from '../Assets/linkedin 1.svg';

const Footer = () => {
  return (
    <section className='py-16 px-10 xl:px-16 lg:px-10 md:px-6 bg-[#0D0D2B]'>
        <div className="md:flex-row flex-col flex items-start w-full justify-between gap-y-8 md:gap-y-0">
            <div className='lg:flex md:block flex logo items-center gap-4 xl:mr-40 w-full md:w-[10%] lg:w-[20%] xl:w-[10%]'>
                <img src={Logo} alt="logo" width="40px" height="40px" />
                <h4 className='text-lg font-semibold'>CRAPPO</h4>
            </div>
            <div className='xl:mr-28 w-full md:w-[15%] lg:w-[20%] xl:w-[25%]'>
                <h3 className='text-xl font-semibold pb-6'>Quick Link</h3>
                <p className='hover:font-bold hover:text-[#3671E9] cursor-pointer pb-4'>Home</p>
                <p className='hover:font-bold hover:text-[#3671E9] cursor-pointer pb-4'>Products</p>
                <p className='hover:font-bold hover:text-[#3671E9] cursor-pointer pb-4'>About</p>
                <p className='hover:font-bold hover:text-[#3671E9] cursor-pointer pb-4'>Features</p>
                <p className='hover:font-bold hover:text-[#3671E9] cursor-pointer pb-4'>Contact</p>
            </div>
            <div className='xl:mr-28 w-full md:w-[23%] lg:w-[20%] xl:w-[25%]'>
                <h3 className='text-xl font-semibold pb-6'>Resources</h3>
                <p className='hover:font-bold hover:text-[#3671E9] cursor-pointer pb-4'>Download Whitepaper</p>
                <p className='hover:font-bold hover:text-[#3671E9] cursor-pointer pb-4'>Smart Token</p>
                <p className='hover:font-bold hover:text-[#3671E9] cursor-pointer pb-4'>Blockchain Explorer</p>
                <p className='hover:font-bold hover:text-[#3671E9] cursor-pointer pb-4'>Crypto API</p>
                <p className='hover:font-bold hover:text-[#3671E9] cursor-pointer pb-4'>Interest</p>
            </div>
            <div className='xl:ml-4 w-full md:w-[47%] lg:w-[40%]'>
                <h2 className='text-4xl font-bold pb-10 xl:w-96'>We accept following payment systems</h2>
                <div className='flex gap-6'>
                    <img src={Visa} alt="" />
                    <img src={Mastercard} alt="" />
                    <img src={Bitcoin2} alt="" />
                </div>
            </div>
        </div>
        <div className='flex sm:flex-row flex-col gap-y-8 md:gap-y-0D0D2B justify-between mt-16 w-11/12'>
            <h4 className=''>©2021 CRAPPO. All rights reserved</h4>
            <div className='socials flex gap-6'>
                <a href="/"><img src={FB} alt="" /></a>
                <a href="/"><img src={IG} alt="" /></a>
                <a href="/"><img src={Youtube} alt="" /></a>
                <a href="/"><img src={Twitter} alt="" /></a>
                <a href="/"><img src={Linkedin} alt="" /></a>
            </div>
        </div>
    </section>
  )
}

export default Footer