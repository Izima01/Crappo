import React, { useState } from 'react'
import Button from './Button'

const Check = () => {
    const [hash, setHash] = useState();
  return (
    <div className='text-center relative bg-[#0D0D2B] px-6 xl:px-24 lg:px-20 md:px-14'>
        <h2 className='text-4xl font-extrabold mb-6'>Check how much you can earn</h2>
        <p className='text-normal text-[#E0E0E0] font-normal sm:mx-20 md:mx-32 lg:mx-72 pb-52 sm:pb-44'>Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</p>

        <div className='calcuator absolute top-44 sm:top-36 left-1/2 rounded-2xl -translate-x-1/2 w-11/12 xl:w-3/4 md:w-10/12 bg-white px-4 py-12 md:p-12' style={{ boxShadow:'0 20px 200px rgba(57, 23, 119, 0.1)' }}>
            <div className="flex gap-6 md:gap-10 bg-white mb-16">
                <input
                    type="text"
                    placeholder='Enter your hash rate'
                    className='w-4/12 md:w-1/2 bg-white border-b-2 border-[#E0E0E0] outline-none text-black pl-2 pb-2 placeholder:text-[#0D0D2B]'
                />
                <select
                    name="hash" id="hash" value={hash} onChange={(e)=>setHash(e.target.value)}
                    className='text-black bg-white border-b-2 border-[#E0E0E0] outline-none w-3/12 md:w-2/12'
                >
                    <option value="th/s" className='bg-white'>TH/s</option>
                    <option value="h/s" className='bg-white'>H/s</option>
                    <option value="kh/s" className='bg-white'>KH/s</option>
                    <option value="mh/s" className='bg-white'>MH/s</option>
                    <option value="gh/s" className='bg-white'>GH/s</option>
                </select>

                <Button Text="Calculate" height="3.4rem" padding="0px 15px" />
            </div>
            <div className='bg-white text-start'>
                <p className='text-[#3671E9] bg-inherit font-semibold mb-4'>ESTIMATED 24 HOUR REVENUE:</p>
                <pre className='text-3xl bg-inherit text-black font-bold'>
                    0.055 130 59 ETH 
                    <span className='text-[#3671E9] text-3xl bg-inherit font-bold'>
                        ($1275)
                    </span>
                </pre>
                <p className='bg-inherit text-normal text-[#828282] font-normal'>Revenue will change based on mining difficulty and Ethereum price.</p>
            </div>
        </div>
    </div>
  )
}

export default Check