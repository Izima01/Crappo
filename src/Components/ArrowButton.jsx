import React from 'react'
import arrowRight from '../Assets/Arrow Right.svg'

const ArrowButton = ({ Text, margin }) => {
  return (
    <button className='bg-[#3671E9] text-white flex gap-6 items-center text-lg font-semibold rounded-[32px] hover:scale-x-105 pl-6 pr-4 py-4' style={{ margin }}>
        {Text}
        <img src={arrowRight} alt="" className='rounded-full'/>
    </button>
  )
}

export default ArrowButton