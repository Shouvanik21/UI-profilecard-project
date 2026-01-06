import React from 'react'

const Center = (props2) => {
  return (
    <div className='w-full px-3'>
        <div className='flex items-center justify-start'>
            <h3 className='font-semibold mr-1 text-[16px]'>{props2.companyName1}</h3><font className='text-[10px] font-light text-black'>{props2.datePosted1}</font>
        </div>
        <div>
            <h2 className='font-bold text-[21px]'>{props2.post1}</h2>
        </div>
        <div>
            <button className='text-[12px] bg-[#fff] rounded-[3px] mr-3 mt-1 p-1 font-medium'>{props2.tag1a}</button>
            <button className='text-[12px] bg-[#fff] rounded-[3px] mt-1 p-1 font-medium'>{props2.tag2a}</button>
        </div>
    </div>
  )
}

export default Center