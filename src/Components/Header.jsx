import React from 'react'
import Logo from '../Assets/Logo.svg';
// import Ham from '../Assets/Ham.svg';
import Button from './Button';

const Header = () => {
  return (
    <header className='pt-[3.5rem] pb-10 flex items-center bg-[#0D0D2B] px-4 xl:px-24 lg:px-20 md:px-10 justify-between'>
        <div className='flex logo items-center gap-4'>
            <img src={Logo} alt="logo" width="40px" height="40px" />
            <h4 className='text-lg font-semibold'>CRAPPO</h4>
        </div>
        {/* <button className='absolute top-10 right-10 w-20 h-20'><img src={Ham} className='w-full h-full' alt="" /></button> */}
        <nav className='fixed right-0 hidden top-0 w-3/4 md:w-fit justify-center items-center h-full bg-[#0D0D2B] gap-y-16 ms-auto flex-col md:relative md:flex-row md:flex gap-x-8 md:gap-x-10 md:gap-y-0 items-center ml-auto'>
            <div className='flex-col flex gap-y-10 md:flex-row md:gap-y-0 gap-x-6 md:gap-x-10 md:text-start text-center'>
                <a href="/" className='text-2xl md:text-base hover:font-bold hover:text-[#3671E9]'>Products</a>
                <a href="/" className='text-2xl md:text-base hover:font-bold hover:text-[#3671E9]'>Features</a>
                <a href="/" className='text-2xl md:text-base hover:font-bold hover:text-[#3671E9]'>About</a>
                <a href="/" className='text-2xl md:text-base hover:font-bold hover:text-[#3671E9]'>Contact</a>
            </div>
            <div className='flex items-center'>
                <a
                    href="/"
                    className='text-3xl md:text-base hover:font-bold hover:text-[#3671E9] border-r pr-6 border-[#F2F2F2] my-2'>
                    Login
                </a>
                <Button Text="Register" padding="6px 20px" margin="0 0 0 1.75rem" />
            </div>
        </nav>
    </header>
  )
}

export default Header