import React from 'react';
import { BsArrowRight, BsFillPlayFill } from 'react-icons/bs';

const LatestVideos = () => {
  return (
    <div id='video' className='pt-10 pb-3  font-poppins text-white'>
      <div>
        <div className='border-b border-gray-500 pb-[0.1px]'>
          <div className='flex items-center justify-between'>
            <h1 className='md:text-2xl text-xl font-semibold border-b-2 border-primaryPink rounded-sm w-fit'>
              Latest Videos
            </h1>

            <div className='flex items-center justify-between md:space-x-2 space-x-1 cursor-pointer'>
              <h5 className='text-sm'>More Videos</h5>
              <BsArrowRight color='rgb(255 38 185)' />
            </div>
          </div>
        </div>

        <div className='flex md:flex-row flex-col-reverse items-center w-full pt-3 gap-4'>
          <div className='md:w-[40%] w-full flex flex-col gap-3'>
            <div className='w-full h-[128px] video2 rounded-[6px] flex flex-col justify-center items-center relative'>
              <div className='absolute top-0 right-0'>
                <button className='bg-red-500 w-fit py-1.5 px-3'>
                  Trending
                </button>
              </div>
              <BsFillPlayFill
                color='#fff'
                className='text-5xl cursor-pointer'
              />
              <div className='absolute bottom-1 left-0'>
                <h3 className='text-base pl-2 font-semibold leading-[19px]'>
                  Life Without Liberty is Like <br className='md:flex hidden' />
                  a Body
                </h3>
              </div>
            </div>

            <div className='w-full h-[128px] video1 rounded-[6px] flex flex-col justify-center items-center relative'>
              <div className='absolute top-0 right-0'>
                <button className='bg-red-500 w-fit py-1.5 px-3'>
                  Trending
                </button>
              </div>
              <BsFillPlayFill
                color='#fff'
                className='text-5xl cursor-pointer'
              />
              <div className='absolute bottom-1 left-0'>
                <h3 className='text-base pl-2 font-semibold leading-[19px]'>
                  The Soul That Sees <br className='md:flex hidden' />
                  Beauty Alone
                </h3>
              </div>
            </div>
          </div>

          <div className='md:w-[60%] w-full video3 h-64 rounded-[6px] flex flex-col justify-center items-center relative'>
            <div className='absolute top-0 right-0'>
              <button className='bg-red-500 w-fit py-1.5 px-3'>Trending</button>
            </div>
            <BsFillPlayFill color='#fff' className='text-5xl cursor-pointer' />
            <div className='absolute bottom-3 left-0'>
              <h3 className='text-xl pl-2 font-semibold'>
                A Wise Traveler Never <br className='md:flex hidden' /> Despises
                His Own Country
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestVideos;
