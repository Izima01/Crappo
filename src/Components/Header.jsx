import React, { useRef } from 'react'
import Logo from '../Assets/Logo.svg';
import Ham from '../Assets/icons8-menu.svg';
import Cancel from '../Assets/icons8-x-50.png';
import Button from './Button';

const Header = () => {
  const menuRef = useRef();
  const showMenu = () => {
    console.log(menuRef.current);
    menuRef.current.classList.remove("translate-x-full");
  }
  const HideMenu = () => {
    menuRef.current.classList.add("translate-x-full");
  }
  return (
    <header className='pt-[3.5rem] pb-10 flex items-center bg-[#0D0D2B] px-8 xl:px-24 lg:px-20 md:px-10 justify-between'>
        <div className='flex logo items-center gap-4'>
          <img src={Logo} alt="logo" width="40px" height="40px" />
          <h4 className='text-lg font-semibold'>CRAPPO</h4>
        </div>
        <button className='absolute top-16 right-6 md:right-10 w-10 h-10 md:hidden' onClick={showMenu}><img src={Ham} className='w-full h-full fill-current' alt="" /></button>
        <nav ref={menuRef} className='fixed translate-x-full md:translate-x-0 transition-transform pt-32 md:pt-0 right-0 top-0 w-full md:w-fit h-full bg-[#0D0D2B] gap-y-16 ms-auto flex-col md:relative md:flex-row flex gap-x-8 md:gap-x-10 md:gap-y-0 items-center' style={{zIndex:100}}>
          <button className='absolute top-16 right-6 md:right-10 w-8 h-8 md:hidden' onClick={HideMenu}><img src={Cancel} className='w-full h-full fill-current' alt="" /></button>
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