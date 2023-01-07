import React from 'react'
import Mid from './mid'

const Services = () => {
  return (
    <>
        <div className='w-full mx-auto   justify-between  items-between  md:h-auto  py-[100px] md:py-[150px] md:py-auto '>
            <div className='w-4/5 md:w-3/4  mx-auto items-between'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-medium my-5 pb-4'>Services we offer</h1>
                <ul className='px-4 lg:text-xl md:text-lg text-white leading text-md  list-disc'>
                    <li className='py-3'>Sell photocopiers, multifunctional machines, and printers.</li>
                    <li className='py-3'>Offer products for both office and home use.</li>
                    <li className='py-3'>Include color and black and white options.</li>
                    <li className='py-3'>Provide spare parts and top-class service.</li>
                    <li className='py-3'>Wide range of high-quality products to meet various needs.</li>
                </ul>

            </div>

        </div>
        <Mid />
    </>
  )
}

export default Services