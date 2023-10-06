import React from 'react';
import { headlineNews } from '../..';

const HeadlineNews = () => {
  return (
    <div className='font-poppins text-white md:px-4 lg:px-10 px-3 py-4'>
      <div className='flex md:flex-row flex-col items-center justify-between lg:gap-7 md:gap-3 gap-5'>
        {headlineNews.map((item) => (
          <div
            key={item.id}
            className='flex lg:flex-row flex-col lg:items-center lg:space-x-2'
          >
            <div className='lg:w-[80%]'>
              <img src={item.img} alt={item.details} className='rounded-md' />
            </div>

            <div>
              <h5 className='text-gray-400 text-[13px]'>{item.date}</h5>
              <h3 className='md:text-base text-sm font-semibold'>
                {item.details}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadlineNews;
