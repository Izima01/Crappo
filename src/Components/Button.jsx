import React from 'react'

const Button = ({ Text, height, width, margin, padding }) => {
  return (
    <button data-aos="zoom-in" className='bg-[#3671E9] text-white text-lg font-semibold rounded-[32px] hover:scale-x-105' style={{ height, width, margin, padding }}>
        {Text}
    </button>
  )
}

export default Button