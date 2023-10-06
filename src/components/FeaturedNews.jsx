import React from 'react';
import { featuredNews, recentNewsListings } from '../..';
import LatestVideos from './LastestVideos';
import { TiMessages } from 'react-icons/ti';

const FeaturedNews = () => {
  return (
    <div className='lg:px-10 md:px-4 px-3 font-poppins text-white pt-7'>
      <div className='flex md:flex-row flex-col gap-4'>
        <div className='md:w-[75%] w-full'>
          <div className='border-b border-gray-500 pb-[0.1px]'>
            <h1 className='md:text-2xl text-xl font-semibold border-b-2 border-primaryPink rounded-sm w-fit'>
              Featured News
            </h1>
          </div>

          <div className='flex md:flex-row flex-col items-center justify-between gap-5 pt-5'>
            {featuredNews.map((item) => (
              <div key={item.id} className='flex flex-col md:w-1/3 w-full'>
                <div className=''>
                  <img
                    src={item.img}
                    alt={item.details}
                    className='rounded-md'
                  />
                </div>

                <div>
                  <h5 className='text-gray-400 pt-1 text-[13px]'>
                    {item.date}
                  </h5>
                  <h3 className='md:text-lg text-sm leading-[20px] font-semibold'>
                    {item.details}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <LatestVideos />
        </div>
        <div className='md:w-[25%]'>
          <div className='border-b border-gray-500 pb-[0.1px]'>
            <h1 className='text-xl font-semibold border-b-2 border-primaryPink rounded-sm w-fit'>
              Most Visited
            </h1>
          </div>

          {recentNewsListings.map((item) => (
            <div
              key={item.id}
              className='border-b border-gray-500 pb-2 pt-2 last:lg:block class'
            >
              <h3 className='text-base font-semibold'>{item.details}</h3>

              <p className='text-sm text-gray-500 pt-2'>
                By <span className='pr-3'>{item.author}</span> |
                <span className='pl-3'>{item.date}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
