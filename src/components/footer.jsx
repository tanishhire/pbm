import React from 'react'
import Logo from '../assests/logo_wrap.png'


const Footer = () => {
  return (
    <>
    <div className='w-full mx-auto bg-[#fff] text-[#1b262c] justify-center items-center h-auto py-[100px] md:py-[150px] md:py-auto'>
        <div className='w-4/5 md:w-3/4 h-[90%]  mx-auto items-between md:flex md:flex-row '>
            <div className='flex flex-row'>
                <div className='md:flex md:flex-row  flex flex-col  '>
                    <div className='h-24 mx-auto md:my-auto md:mr-4'>
                        <img className=' h-full' src={Logo} alt="/" />
                    </div>
                    <div className='md:mr-24' >
                        <h1 className='font-bold text-3xl py-5 md:my-0 my-auto mb-4 md:mb-2'>Phoenix Business Machines</h1>
                        <p className='leading-15 w-96'>We offer a wide range of high-quality photocopiers, scanners, printers, all-in-one machines, and computers, 
                        as well as top-notch service for all of your office needs.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col my-10 md:my-0 w-full md:w-[25%] mr-24'>
                <h2 className='text-3xl font-bold'>Lead</h2>
                <p className='my-3 cursor-pointer hover:scale-105 duration-500 hover:text-[#1063e5]'><a href='pbm/' >Home</a></p>
                <p className='my-3 cursor-pointer hover:scale-105 duration-500 hover:text-[#1063e5]'><a href='pbm/services' >Services</a></p>    
                <p className='my-3 cursor-pointer hover:scale-105 duration-500 hover:text-[#1063e5]'><a href='pbm/contact' >Contact</a></p>
                <p className='my-3 cursor-pointer hover:scale-105 duration-500 hover:text-[#1063e5]'><a href='pbm/about' >About</a></p>
            </div>
            <div className='flex flex-col w-full md:w-[25%]'>
                <h2 className='text-3xl font-bold'>Support</h2>
                <div className='flex flex-col my-5'>
                    <p className='my-2 cursor-pointer'><a href="tel:+91-96651-68349">+91 96651 68307</a> </p>
                    <p className='my-2 cursor-pointer'>phoenix.businessmachines@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
    <p className='text-blue mx-auto bg-white items-center text-center py-8 md:py-5'>©2023 Phoenix Business Machines | All right Reserved | Desgined and Developed by <a className='text-[#] duration-500 hover:text-[#1063e5]' href='https://tanishhire.com' target="_blank" rel="noopener noreferrer">Tanish Hire</a></p>
    {/* <p className='text-white mx-auto items-center text-center my-5'></p> */}
    </>
  )
}

export default Footer
