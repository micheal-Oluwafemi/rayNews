import React from 'react';
import { recentNewsListings } from '../..';
import { avatar } from '../assets';

const RecentNews = () => {
  return (
    <div className='md:px-4 lg:px-10 px-3 font-poppins text-white  pt-3'>
      <div className='flex gap-4 md:flex-row flex-col-reverse'>
        <div className='md:w-[25%] w-full'>
          <h2 className='text-2xl font-semibold border-b-2 border-primaryPink rounded-sm w-fit'>
            Recent News
          </h2>

          {recentNewsListings.map((item) => (
            <div key={item.id} className='border-b border-gray-500 pb-2 pt-2'>
              <h3 className='text-base font-semibold'>{item.details}</h3>

              <p className='text-sm text-gray-500 pt-2'>
                By <span className='pr-3'>{item.author}</span> |
                <span className='pl-3'>{item.date}</span>
              </p>
            </div>
          ))}
        </div>

        <div className=' flex-col md:w-[50%] w-full gap-4 flex'>
          <div className='canadaImg md:h-[70%] w-[100%] flex flex-col rounded-[6px] pb-2 md:pb-0'>
            <div className='flex justify-center pt-64'>
              <button className='w-fit bg-red-500 rounded-md px-4 py-1'>
                Football
              </button>
            </div>

            <h2 className='text-3xl font-semibold text-center pt-4'>
              Age is a Matter of Feeling, Not of Years
            </h2>

            <div className='flex items-center space-x-2 justify-center'>
              <img src={avatar} alt='' className='w-10 h-10 rounded-full' />

              <div className='flex items-center'>
                <span
                  className='text-[12px] font-semibold pr-2
                '
                >
                  By Jordan Williams
                </span>
                |
                <span
                  className='text-[12px] font-semibold pl-2
                '
                >
                  July 2nd, 2022
                </span>
              </div>
            </div>
          </div>

          <div className='flex w-full gap-4 '>
            <div className='img1 w-1/2 h-48 rounded-[6px] pl-1 flex flex-col justify-end items-baseline pb-2'>
              <p className='text-[13px] text-gray-300 font-medium'>
                July 3rd, 2022
              </p>

              <h3 className='font-semibold md:text-base text-sm'>
                The Science of Today is the Technology of Tomorrow
              </h3>
            </div>
            <div className='img2 w-1/2 h-48 rounded-[6px] pl-1  flex flex-col justify-end items-baseline pb-2'>
              <p className='text-[13px] text-gray-300 font-medium'>
                July 3rd, 2022
              </p>

              <h3 className='font-semibold md:text-base text-sm'>
                Sharing is Good and Easy with Digital Technonlogy
              </h3>
            </div>
          </div>
        </div>

        <div className='w-[25%]  flex-col gap-3 md:flex hidden'>
          <div className='intro full h-48 rounded-[6px] pl-2  flex flex-col justify-end items-baseline pb-2 '>
            <p className='text-[13px] text-gray-300 font-medium'>
              July 3rd, 2022
            </p>

            <h3 className='font-semibold md:text-base text-sm'>
              The Science of Today is the Technology of Tomorrow
            </h3>
          </div>

          <div className='car w-full h-full rounded-[6px] flex justify-end items-end pb-14 pr-3 '>
            <h4 className='text-lg font-semibold'>ADVERTISEMENT</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
