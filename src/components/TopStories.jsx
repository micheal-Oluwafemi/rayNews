import React from 'react';
import { trending1 } from '../assets';
import { topStories } from '../..';

const TopStories = () => {
  return (
    <div id='headline' className='font-poppins text-white'>
      <div className='border-b border-gray-500 pb-[0.1px]'>
        <div className='flex items-center justify-between'>
          <h1 className='md:text-xl text-xl font-semibold border-b-2 border-primaryPink rounded-sm w-fit'>
            Top Stories
          </h1>
        </div>
      </div>

      <div className='flex-col pt-4'>
        <div>
          <img src={trending1} alt='' className='rounded-[6px]' />
        </div>

        <h3 className='text-xl pt-1 font-semibold'>
          Trump Await Trial Following Accusation of Electoral Malpractice
        </h3>

        <p className='text-[12px] text-gray-300'>
          <span className='pr-2'>By Adams Wilson</span>|
          <span className='pl-2'>Aug 17, 2022</span>
        </p>
      </div>

      {topStories.map((item) => (
        <div key={item.id} className='flex w-full items-center pt-3 gap-2'>
          <div className='w-[35%]'>
            <img src={item.img} alt='' className='rounded-[6px]' />
          </div>
          <div className='w-[67%]'>
            <p className='text-[12px] text-gray-300'>
              <span className='pr-2'>{item.author}</span>|
              <span className='pl-2'>{item.date}</span>
            </p>

            <h3 className='text-base font-semibold'>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopStories;
