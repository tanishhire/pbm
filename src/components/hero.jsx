import React from 'react'
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import  image1  from '../assests/1image.png'
import  image2 from '../assests/1.png'
import  image3  from '../assests/205i.png'
import  image4  from '../assests/367three.png'
import { useState } from 'react'
import Mid from './mid'
// import {RxDotFilled} from 'react-icons/rx'


const Hero = () => {
    const slides = [
        image2,
        image3,
        image4,
        image1
    ];

    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }
    // const nextSlide = () => {
    //     const isLastSlide = currentIndex === slides.length - 1;
    //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
    //     setCurrentIndex(newIndex)
    // }

    return (
        <>
            <div name='hero' className='w-full mx-auto    text-white justify-center items-center h-auto py-[100px] md:py-[150px] md:py-auto '>
                <div className='w-4/5 md:w-3/4  mx-auto items-center '>
                    <div className='flex flex-col md:flex-row justify-between h-[450px]  '>
                        <div className='md:w-1/2 mb-5 lg:w-2/5 flex flex-col '>
                            <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold'>Phoenix Business Machines</h1>
                            <p className='justify-left text-sm pt-4 md:pt-10 md:text-md lg:text-xl py-5'>We offer a wide range of high-quality photocopiers, scanners, printers, all-in-one machines, and computers,
                                as well as top-notch service for all of your office needs.
                            </p>
                            <div className='flex flex-col'>
                            <a href="#/contact" ><button className=' py-1 px-2 md:w-1/2  md:py-1 lg:py-2 md:px-2 lg:px-2 rounded-full shadow-xl bg-white text-[#1B262C] border-2 duration-500 hover:scale-105 hover:bg-[#1B262c] hover:text-white'>Enquire now and get quoted</button></a>
                            <a href='https://wa.me/9665168307' target="_blank" rel="noopener noreferrer"><button className='md:hidden lg:hidden my-4 w-1/2 px-2 py-2 duration-500 hover:scale-105 hover:bg-[#1B262c] hover:text-white border bg-white border-1 rounded-full whatsapp'>WhatsApp Now</button></a>
                            </div>
                        </div>
                        <div className='h-[90%] md:h-full w-full  md:w-1/2 lg:w-1/2 px-4  group  '>
                            <div style={{backgroundImage: `url(${slides[currentIndex]})`}} onMouseOver={prevSlide} className='w-full h-full hover my-10  cursor-pointer  bg-cover bg-top duration-500 '>
                            {/* Left button
                            <div className='hidden group-hover:block w-[20px] h-[20px] items-center   rounded-full bg-[#1B262C] p-2 cursor-pointer text-2xl '> 
                                <BsChevronCompactLeft onClick={prevSlide} className='items-center justify-center ' size={10} /> 
                            </div>
                            Right Arrow 
                            <div className='hidden group-hover:block  w-[20px] h-[20px] items-center   rounded-full bg-[#1B262C] p-2 cursor-pointer text-2xl '>
                                <BsChevronCompactRight onClick={nextSlide} className='items-center justify-center ' size={10} />
                            </div>
                            <div className='flex justify-center py-1'> */}
                            
                            </div>
                        </div>

                    </div>


                </div>

            </div>
            <Mid />
        </>
    )
}

export default Hero