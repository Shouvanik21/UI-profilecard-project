import React from 'react'

const Top = (props1) => {
  return (
    <div className='flex items-center justify-between w-full px-3 py-2 mb-[30px]'>
        <div className='h-[30px] w-[30px]'><img className="rounded-[50%] border-[#dadada] bg-white" src={props1.brandLogo1} alt="image not found" /></div>
        <button className='flex items-center justify-between rounded-[8px] text-[13px] font-medium text-white px-2 py-1 h-[30px] w-[60px] bg-black'>Save<i class="ri-bookmark-line"></i></button>
    </div>
  )
}

export default Top