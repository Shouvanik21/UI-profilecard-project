import React from 'react'

const Bottom = (props3) => {
  return (
    <div>
        <hr className='mx-4 decoration-[#d3d3d3]'/>
        <div className='flex items-center justify-between'>
            <div className='flex flex-col mx-6 mt-2'>
                <h4 className='text-[15px] font-semibold'>{props3.pay1}</h4>
                <h3 className='text-[9px] text-black'>{props3.location1}</h3>
            </div>
            <div className='mr-6 mt-2 p-1 bg-black rounded-[8px]'>
                <button className='text-white text-[13px] p-1'>Apply now</button>
            </div>
        </div>
    </div>
  )
}

export default Bottom