import React from 'react'
import phone from '../assests/phone-call.png'
import gem from '../assests/85199422.png'
const Contact = () => {
  return (
    <div className='w-full mx-auto    text-white justify-center items-center h-auto py-[100px] md:py-[150px] md:py-auto'>
        <div className='w-4/5 md:w-3/4  mx-auto items-center'>
            <h1 className='text-3xl md:text-4xl lg:text-6xl'> Feel free to Contact Us</h1>
            <div className='flex flex-col-reverse lg:flex lg:flex-row justify-between my-10 '>
                <div className='flex flex-col w-full mr-24'>
                    <h2 className='pt-10 w-full text-2xl md:text-3xl lg:text-4xl pb-5'>Enquiry Form</h2>
                    <form className='lg:w-full pr-10 pb-10 pl-0 flex flex-col text-[#1b262c] font-medium '  action="https://formspree.io/f/moqzqnbg" method='POST'>
                        <input className='border my-4 rounded-sm px-4 py-4 text-[##1b262c] cursor-text' type="text" name='username' autoComplete='off'  placeholder='Name' required />
                        <input className='border my-4 rounded-sm px-4 py-4 text-[##1b262c] cursor-text' type="email" name='email' autoComplete='off'  placeholder='Email' required />
                        <input type="text" className='border my-4 rounded-sm px-4 py-4 text-[##1b262c] cursor-text'  name='contact' autoComplete='off'  placeholder='Contact' required  />
                        <textarea className='border my-4 rounded-sm px-4 py-4 text-[##1b262c] cursor-text' name='message' placeholder='Enquiry' autoComplete='off'  col="30" rows="6" required />
                        <button  type='submit' className='my-2 py-2 px-4  w-1/3  rounded-full shadow-xl bg-white text-[#1B262C] border-2 duration-500 hover:scale-105 hover:bg-[#1B262c] hover:text-white'>Submit</button>
                    </form>
                </div>
                <div className='w-full'>
                    <h1 className='text-2xl md:text-3xl mb-5 lg:text-4xl pt-10 pb-5'>Reach Us</h1> 
                    <p className='text-3xl '>Tushar Hire</p>
                    <p className='flex flex-row text-2xl p-2'><span className='p-2'><img src={phone} alt="/" /></span>9881102334</p>
                    <p className='text-3xl pt-5'>Pranita Hire</p>
                    <p className='flex flex-row text-2xl p-2'><span className='p-2'><img src={phone} alt="/" /></span>9665168307</p>
                    <div className='md:flex md:flex-row w-full'>
                        <button className='px-4 py-2  my-5  mr-[30%] rounded-full shadow-xl bg-white text-[#1B262C] border-2 duration-500 hover:scale-105 hover:bg-[#1B262c] hover:text-white'><a href='https://mailto:phoenix.businessmachines@gmail.com'>Email Us</a></button>
                        <button className='px-4 py-2  my-5  rounded-full shadow-xl bg-white text-[#1B262C] border-2 duration-500 hover:scale-105 hover:bg-[#1B262c] hover:text-white'><a href='https://wa.me/9665168307'>WhatsApp Us</a></button>
                    </div>
                    <h2 className='my-4 text-lg md:text-xl lg:text-2xl'>We are GEM Approved</h2>
                    <img className='w-[200px] h-20 mt-4 cursor-pointer rounded-md' src={gem} alt="/" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact