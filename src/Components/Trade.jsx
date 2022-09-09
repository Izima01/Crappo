import React from 'react';
import Crypto from './Crypto';
import ltc from '../Assets/litecoin.svg';
import btc from '../Assets/bitcoin.svg';
import eth from '../Assets/ethereum.svg';

const Trade = () => {
  return (
    <div className='bg-white px-4 xl:px-16 lg:px-11 md:px-7 mt-48'>
        <h2 className='text-black text-[2.5rem] px-10 lg:px-36 xl:px-60 font-bold text-center mb-16'>Trade securely and market the high growth cryptocurrencies.</h2>
        <div className='sm:flex-row w-10/12 mx-auto sm:w-full flex-col flex gap-3 md:gap-5 lg:gap-9 mb-8'>
            <Crypto
                Img={btc}
                Name='Bitcoin'
                Symbol='BTC'
                Text='Digital currency in which a record of transactions is maintained.'
            />
            
            <Crypto
                Img={eth}
                Name='Ethereum'
                Symbol='ETH'
                Text='Blockchain technology to create and run decentralized digital applications.'
            />
            
            <Crypto
                Img={ltc}
                Name='Litecoin'
                Symbol='LTC'
                Text='Cryptocurrency that enables instant payments to anyone in the world.'
            />
            
        </div>
    </div>
  )
}

export default Trade