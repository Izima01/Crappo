import React, { useEffect, useRef, useState } from 'react';

const Stats = ({ Img, Bold, Text, timer=50, end, Sign, duration }) => {
  const ref = useRef(0);
  let [count, setCount] = useState(null);

  const acc = end / 200;
  
  const updateCounter = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + acc);
      if (result > end) return setCount(end);
      setCount(result);
      ref.current = result;
    }
    setTimeout(updateCounter, timer);
  }
  useEffect(() => {
    let isMounted = true;
    isMounted && updateCounter();
    return () => isMounted = false;
    // eslint-disable-next-line
  }, [end]);

  return (
    <article className='md:flex-row sm:flex-col flex gap-12 sm:gap-6 items-start' data-aos="fade-up" data-aos-duration={duration}>
        <img src={Img} alt="" className='' width="80px" height="80px" />
        <div>
            <h2 className='text-[2.5rem] leading-normal font-bold pb-1'>
              {Sign}
              <span className='text-[2.5rem] leading-normal font-bold'>{count}</span>
              {Bold}
            </h2>
            <p className='text-normal text-[#E0E0E0] font-normal'>{Text}</p>
        </div>
    </article>
  )
}

export default Stats