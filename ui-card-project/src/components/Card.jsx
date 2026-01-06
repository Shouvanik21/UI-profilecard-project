import React from 'react'
import Top from './top'
import Center from './center'
import Bottom from './bottom'

const Card = (props) => {
  return (
    <div className='h-[350px] w-[300px] m-10 bg-[#fffdd0] rounded-xl flex flex-col justify-between'>
        <div className='flex flex-col items-center p-3 h-[80%] bg-amber-200 m-2 rounded-t-xl'>
            <Top brandLogo1={props.brandLogo}/>
            <Center/>
        </div>    
        <div className='h-[20%]'>
            <Bottom/>
        </div>    
    </div>
  )
}

export default Card