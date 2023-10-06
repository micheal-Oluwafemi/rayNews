import React from 'react';
import TopStories from './TopStories';
import TrendingStories from './TrendingStories';
import Entertainment from './Entertainment';

const TrendingNews = () => {
  return (
    <div className='lg:px-10 md:px-4 px-3 py-6'>
      <div className='flex md:flex-row flex-col w-full gap-5'>
        <div className='md:w-[35%] w-full'>
          <TopStories />
        </div>
        <div className='md:w-[35%] w-full'>
          <TrendingStories />
        </div>
        <div className='md:w-[30%] w-full'>
          <Entertainment />
        </div>
      </div>
    </div>
  );
};

export default TrendingNews;
