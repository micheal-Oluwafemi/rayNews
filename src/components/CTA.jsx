import React from 'react';

const CTA = () => {
  return (
    <div className='lg:px-10 md:px-4 px-3'>
      <div className='cta w-full h-32 my-5 font-poppins text-white md:px-10 md:pt-10'>
        <div className=' md:flex items-center md:space-x-32 md:justify-between'>
          <div className='md:flex hidden items-center md:space-x-20 '>
            <div>
              <h2 className='text-4xl font-serif'>Furniture</h2>
            </div>

            <div className='flex flex-col items-center'>
              <h4 className='text-base'>Ads Banner</h4>
              <h2 className='text-2xl'>1530 X 250</h2>
            </div>
          </div>

          <div className='md:inline-block flex justify-end md:pt-0  pt-16 pr-8'>
            <h2 className='text-xl font-semibold'>ADVERTISEMENT</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
