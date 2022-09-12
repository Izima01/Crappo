import React from 'react'
import Feature from './Feature'
import Chart from '../Assets/Chart.png';
import Statistic from '../Assets/Statistic.png';
import Table from '../Assets/Table.png';

const Market = () => {
  return (
    <div className='bg-[#2B076E] py-24'>
        <h2 data-aos="zoom-in" className='text-center text-[2.5rem] font-bold px-4 sm:px-12 md:px-20 xl:px-40 mb-24'>Market sentiments, portfolio, and run the infrastructure of your choice</h2>
        <Feature
          margin='0 5%'
          imgH='26rem'
          heading='Invest Smart'
          content='Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.'
          gap='5.5rem'
          Image={Chart}
        />

        <Feature
          imgH='28rem'
          margin='3rem 1.5rem'
          heading='Detailed Statistics'
          content='View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.'
          gap='4.5rem'
          Image={Statistic}
        />

        <Feature
          margin='0 1.5rem'
          imgH='19rem'
          heading='Grow your profit and track your investments'
          content='Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.'
          gap='2rem'
          Image={Table}
          // imgWidth='41.5rem'
        />
    </div>
  )
}

export default Market