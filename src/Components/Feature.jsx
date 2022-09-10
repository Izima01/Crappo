import React from 'react';
import Button from './Button';

const Feature = ({ margin, padding, imgWidth, gap, Image, heading, content, dir, imgH, justify }) => {
  return (
    <section style={{ margin, padding, gap, flexDirection: dir, justifyContent: justify }} className='flex-col md:flex-row flex items-start md:items-center'>
      <div className="text w-fit text-start pb-6">
        <h3 className='text-3xl font-bold mb-3' data-aos="fade-zoom-in">{heading}</h3>
        <p className='text-[#E0E0E0] max-w-[450px]' data-aos="fade-zoom-in">{content}</p>
        <Button Text='Learn More' padding="7px 25px" margin='1.75rem 0 0' data-aos="zoom-in-left" />
      </div>
      <div style={{ width: imgWidth, height: imgH }} data-aos="zoom-in" data-aos-offset="80">
        <img src={Image} className='w-full h-full' alt="" />
      </div>
    </section>
  )
}

export default Feature