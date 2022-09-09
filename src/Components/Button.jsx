import React from 'react'

const Button = ({ Text, height, width, margin, padding }) => {
  return (
    <button className='bg-[#3671E9] text-white text-3xl md:text-lg font-semibold rounded-[32px] hover:scale-x-105' style={{ height, width, margin, padding }}>
        {Text}
    </button>
  )
}

export default Button