import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <div className='text-white md:px-4 lg:px-10 px-3 py-2 md:py-4 flex  items-center font-poppins justify-between md:space-x-32 gap-1'>
        <div className=''>
          <h1 className='font-oldEnglish lg:text-5xl md:text-4xl sm:text-3xl text-2xl'>
            RayNews
          </h1>
        </div>

        <div className='flex items-center border border-gray-500 pr-3 md:rounded-md rounded-sm mt-1 relative '>
          <input
            type='text'
            className='bg-transparent px-4 py-2 focus:outline-none text-sm w-fit'
            placeholder='Search...'
          />

          <div className='cursor-pointer absolute right-2'>
            <BsSearch color='rgb(107 114 128)' />
          </div>
        </div>

        <div className='adsImage h-20 rounded-sm md:inline-block hidden'>
          <h2 className='text-right pr-7 pt-7 text-lg font-semibold'>
            ADVERTISEMENT
          </h2>
        </div>
      </div>
    </>
  );
};

export default Header;
