import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 '>
    <div className='h-[13rem] w-[10rem] '>
        <img className='object-cover object-top w-full h-full' src='https://static-01.daraz.com.np/p/64b2edab3a4f36d3ae9107ecc68121b3.jpg' alt=''/>
    </div>
    <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900  '>The Derma Co</h3>
        <p className='mt-2 text-sm text-gray-500'>Everyone should take care of the skin</p>

    </div>
    </div>
  )
}

export default HomeSectionCard