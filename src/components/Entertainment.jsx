import React from 'react';
import { avatar, police } from '../assets';
import { BsArrowRight } from 'react-icons/bs';

const Entertainment = () => {
  return (
    <div id='entertainment' className='font-poppins text-white'>
      <div className='border-b border-gray-500 pb-[0.1px]'>
        <div className='flex items-center justify-between'>
          <h1 className='md:text-xl text-xl font-semibold border-b-2 border-primaryPink rounded-sm w-fit'>
            Entertainment
          </h1>
        </div>
      </div>

      <div className='pt-3'>
        <div className='flex items-center gap-2 pb-3'>
          <div>
            <img src={avatar} alt='avatar' className='w-8 h-8 rounded-full' />
          </div>

          <div>
            <p className='text-[12px] text-gray-300'>
              <span className='pr-2'>By Christina Olivia</span>|
              <span className='px-2'>Sept 3, 2022</span>|
              <span className='pl-2'>0 Comments</span>
            </p>
          </div>
        </div>

        <div>
          <img src={police} alt='' />

          <h1 className='text-2xl font-semibold pt-2'>
            In a Gentle Way, You Can Shake The World
          </h1>

          <p className='text-sm text-gray-400'>
            Science is an enterprise that should be cherished as an activity of
            the free human mind. Because it transforms who we are, how we live,
            and it gives us an understanding of our place in the universe.
          </p>

          <div className='flex items-center gap-1 mt-1 mb-3'>
            <button className='text-[12px] '>Read More</button>

            <BsArrowRight color='rgb(255 38 185)' className='text-sm' />
          </div>
        </div>

        <div className='couple w-full h-64 flex justify-center relative'>
          <div className='absolute bottom-5 right-3'>
            <h3 className='text-lg font-semibold'>ADVERTISEMENT</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
