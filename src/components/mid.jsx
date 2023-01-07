import React from 'react'

const Mid = () => {
  return (
    <>
        <div name="services" className='w-full mx-auto  bg-[#efefef]  text-[#1B262C] justify-between  items-between  md:h-auto  py-[100px] md:py-[150px] md:py-auto '>
            <div className='w-4/5 md:w-3/4  mx-auto items-between  '>
                <div className='flex flex-col'>
                    <h1 className='text-3xl md:text-4xl lg:text-6xl hover:underline duration-500'><a href='/services'>Our Products & Services</a></h1>
                </div>
                <div className='flex flex-col my-28 md:grid md:grid-cols-3 gap-6 text-[#1B262C]'>
                        <div className='rounded-md flex  bg-white flex-col mx-auto justify-between  shadow-xl  items-between  border-4 border-white'>
                            <img src="https://www.intelligenthq.com/wp-content/uploads/2019/09/photocopier-machine.jpg" alt="/" className='hover:scale-105 rounded-md duration-500 h-[80%]' />    
                            <p className='text-sm md:text-md lg:text-xl mx-auto my-4'>Photocopiers</p>
                        </div>                        
                        <div className='rounded-md flex  bg-white flex-col mx-auto justify-between  shadow-xl  items-between  border-4 border-white'>
                            <img src="https://4.imimg.com/data4/IO/AS/MY-29204516/color-print-photocopier-machine-for-konica-minolta-500x500.png" alt="/" className='hover:scale-105 rounded-md duration-500 h-[80%]' />    
                            <p className='text-sm md:text-md lg:text-xl  mx-auto my-4 justify-center'>Konica Minolta B/W Machines</p>
                        </div>                        
                        <div className='rounded-md flex  bg-white flex-col mx-auto justify-between  shadow-xl  items-between  border-4 border-white'>
                            <img src="https://4.imimg.com/data4/PD/GU/MY-29204516/konica-minolta-color-photocopy-at-aaccess-500x500.jpg" alt="/" className='hover:scale-105 rounded-md duration-500 h-[80%]' />    
                            <p className='text-sm md:text-md lg:text-xl  mx-auto my-4'>Konica Minolta Color Machines</p>
                        </div>                        
                        <div className='rounded-md flex  bg-white flex-col mx-auto justify-between   shadow-xl items-between  border-4 border-white'>
                            <img src="https://5.imimg.com/data5/EM/HM/MY-55025141/canon-inkjet-printers-available-in-madurai-showroom-500x500.jpg" alt="/" className='hover:scale-105 rounded-md duration-500 h-[80%]' />    
                            <p className='text-sm md:text-md lg:text-xl  mx-auto my-4'>Inkjet Machines</p>
                        </div>
                        <div className='rounded-md flex  bg-white flex-col mx-auto justify-between  shadow-xl  items-between  border-4 border-white'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Toner-container-black-0a.jpg" alt="/" className='hover:scale-105 rounded-md duration-500 h-[80%]' />    
                            <p className='text-sm md:text-md lg:text-xl mx-auto my-4'>Toners</p>
                        </div>
                        <div className='rounded-md flex  bg-white flex-col mx-auto justify-between shadow-xl   items-between  border-4 border-white'>
                            <img src="https://s3.ap-south-1.amazonaws.com/www.cimg.in/images/2015/02/08/08/135589669_14989803311_large.jpg" alt="/" className='hover:scale-105 rounded-md duration-500 h-[80%]' />    
                            <p className='text-sm md:text-md lg:text-xl mx-auto my-4'>Spare Parts</p>
                        </div>


                </div>


            </div>

        </div>
    </>
  )
}

export default Mid