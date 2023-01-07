import React from 'react'
// import Logo from '../assests/logo_wrap.png'
import Logo1 from '../assests/contrast_logo_wrap.png'
import {FaBars, FaTimes} from 'react-icons/fa';
import { useState } from 'react';




const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);


  return (
    <>
    <div className='hidden  md:w-full h-[80px] md:flex py-4  md:justify-center '>
        <div className='md:w-3/5 md:justify-center'>
            <div className='hidden md:flex md:flex-row md:justify-between md:items-center'>
                <a href='/'><img src={Logo1} alt="Logo" className='invisble  md:object-contain md:w-[80px] ' /></a>
                {/* menu */}
                <ul className='hidden md:flex'>
                    <li className='p-4 cursor-pointer text-[#fff] hover:scale-105 hover:text-[#3282B8]'><a href='/pbm/' >Home</a></li>
                    <li className='p-4 cursor-pointer text-[#fff] hover:scale-105 hover:text-[#3282B8]'><a href='/pbm/#/services'>Services</a></li>
                    <li className='p-4 cursor-pointer text-[#fff] hover:scale-105 hover:text-[#3282B8]'><a href='/pbm/#/about'>About</a></li>
                    <li className='p-4 cursor-pointer text-[#fff] hover:scale-105 hover:text-[#3282B8]'><a href='/pbm/#/contact'>Contact</a></li>
                    </ul>
                    <div className='my-auto'>
                    <a href='https://wa.me/9665168307' target="_blank" rel="noopener noreferrer">
                        <button className='px-2 py-1 duration-500 hover:scale-105 hover:bg-[#1B262c] hover:text-white border 
                        bg-white border-1 rounded-full whatsapp'>WhatsApp Now</button> 
                    </a>
                    </div>

            </div>
        </div>
    </div>
    {/* Mobile */}
    <div className='w-full h-[80px] py-4 justify-center mx-auto  md:hidden'>
        <div className='w-4/5 md:hidden mx-auto justify-center'>
            <div onClick={handleClick} className='justify-between items-center flex flex-row md:hidden z-10 cursor-pointer duration-500 '>
                <a href='/'><img src={Logo1} alt="Logo" className='md:hidden w-[80px] ' /></a>
                {!nav ? <FaBars className='bars rounded-sm py-2 p-2 --fa-flip-angle duration-500' size={40} /> : <FaTimes className='cross text-white duration-500' size={30} />}
            </div>
        {/* MObile Menu */}
        <div className=' flex flex-row  justify-end duration-500'>
            <ul className= {!nav ? 'hidden' :  "absolute bg-[#1B262C] my-4 rounded-md w-2/5  z-50 flex flex-col  items-center"}>
                <li  className='py-2 text-xl cursor-pointer  duration-200 text-[#BBE1FA] border px-6 rounded-md my-6 hover:text-[#3282B8] hover:scale-105 '><a onClick={handleClick} href='/pbm/'  duration={500} >Home</a></li>
                <li  className='py-2 text-xl cursor-pointer duration-200  text-[#BBE1FA] border px-6 rounded-md my-6 hover:text-[#3282B8] hover:scale-105' ><a onClick={handleClick} href='/pbm/#/services'  duration={500} >Services</a></li>
                <li  className='py-2 text-xl cursor-pointer  duration-200 text-[#BBE1FA] border px-6 rounded-md my-6  hover:text-[#3282B8] hover:scale-105'><a onClick={handleClick} href='/pbm/#/about' duration={500} >About</a></li>
                <li  className='py-2 text-xl cursor-pointer duration-200  text-[#BBE1FA] border px-6 rounded-md my-6  hover:text-[#3282B8] hover:scale-105'><a onClick={handleClick} href='/pbm/#/contact' duration={500} >Contact</a></li>
                
            </ul>
        </div>

        </div>
    </div>
    </>
  )
}

export default Navbar