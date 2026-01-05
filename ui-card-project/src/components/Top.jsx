import React from 'react'
import { Bookmark } from 'lucide-react';

const Top = () => {
  return (
    <div className='flex items-center justify-between w-full px-3 py-2 mb-[30px]'>
        <div className='h-[30px] w-[30px]'><img className="rounded-[50%] border-[#dadada]" src="https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg" alt="image not found" /></div>
        <button className='flex items-center justify-between rounded-[8px] text-[13px] font-medium text-white px-2 py-1 h-[30px] w-[60px] bg-black'>Save<i class="ri-bookmark-line"></i></button>
    </div>
  )
}

export default Top