import React from 'react'
import Top from './Top'
import Center from './Center'
import Bottom from './Bottom'

const Card = (props) => {
  return (
    <div className='h-[350px] w-[300px] m-10 bg-[#fff] rounded-xl flex flex-col justify-between'>
        <div className={`flex flex-col items-center p-3 h-[80%] ${props.color} m-2 rounded-t-xl`}>
            <Top brandLogo1={props.brandLogo}/>
            <Center companyName1={props.companyName} datePosted1={props.datePosted} post1={props.post} tag1a={props.tag1} tag2a={props.tag2}/>
        </div>    
        <div className='h-[20%]'>
            <Bottom pay1={props.pay} location1={props.location}/>
        </div>    
    </div>
  )
}

export default Card