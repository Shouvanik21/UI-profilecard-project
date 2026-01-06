import React from 'react'

const Center = (props2) => {
  return (
    <div className='w-full px-3'>
        <div className='flex items-center justify-start'>
            <h3 className='font-semibold mr-1 text-[16px]'>Amazon</h3><font className='text-[10px] font-light text-[#a1aeb1]'>5 days ago</font>
        </div>
        <div>
            <h2 className='font-bold text-[21px]'>Senior UI/UX Designer</h2>
        </div>
        <div>
            <button className='text-[12px] bg-[#d3d3d3] rounded-[3px] mr-3 mt-1 p-1 font-medium'>Part-Time</button>
            <button className='text-[12px] bg-[#d3d3d3] rounded-[3px] mt-1 p-1 font-medium'>Senior Level</button>
        </div>
    </div>
  )
}

export default Center