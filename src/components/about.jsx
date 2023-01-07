// At our company, we specialize in providing premium quality laser printers and multifunctional printers, along with end-to-end service. 
// Our printers and scanners are renowned for their optimal performance, long operational life, sturdy construction, and excellent printing quality. 
// We are committed to offering the best products at market leading prices to our clients. 
// Choose us for all your printer and scanner needs, and experience the convenience and reliability that our products offer.
import React from 'react'
import Contact from './contact'
const About = () => {
  return (
    <>
    <div className='w-full mx-auto   justify-between  items-between  md:h-auto  py-[100px] md:py-[150px] md:py-auto '>
      <div className='w-4/5 md:w-3/4  mx-auto items-between'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-medium my-5 pb-4'>About PBM</h1>
        <p className=' lg:text-xl md:text-lg text-white leading text-md '>Providing a wide range of top-quality photocopiers, multifunctional machines, and printers for both office and home use since 2011.
          Our selection includes color and black and white printers, as well as spare parts and top-class end-to-end service. 
                 Whether you're looking for 
                 a reliable printer for your home office or a high-performance copier for your business, 
                we have the products and expertise to meet your needs. Contact us today to learn more about our selection and services.</p>
    </div>
    </div>
    <Contact />
    </>
  )
}

export default About