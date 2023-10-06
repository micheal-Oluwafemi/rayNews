import React from 'react';

const Ads = () => {
  return (
    <div className='lg:px-10 md:px-4 px-3'>
      <div className='ads w-full h-32 my-5 font-poppins text-white md:px-10 md:pt-10 pt-10 relative'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col justify-start items-start md:pl-20 pl-2'>
            <h4 className='md:text-base text-sm'>Ads Banner</h4>
            <h2 className='md:text-2xl text-xl'>1370 X 250</h2>
          </div>

          <div className='pr-2 md:pr-0'>
            <h2 className='text-lg font-semibold'>ADVERTISEMENT</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
