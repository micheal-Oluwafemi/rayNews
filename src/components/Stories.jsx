import React from 'react';
import {
  avatar,
  debate,
  facebook,
  instagram,
  linkedin,
  twitterX,
  youtube,
} from '../assets';
import { BsArrowRight } from 'react-icons/bs';
import { category, stories } from '../..';

const Stories = () => {
  return (
    <div className='lg:px-10 md:px-4 px-3 font-poppins text-white'>
      <div className='flex md:flex-row flex-col w-full gap-6'>
        <div className='md:w-[75%] w-full'>
          <div className='border-b border-gray-500 pb-[0.1px]'>
            <div className='flex items-center justify-between'>
              <h1 className='md:text-xl text-xl font-semibold border-b-2 border-primaryPink rounded-sm w-fit'>
                Popular Stories
              </h1>

              <div className='flex items-center justify-between md:space-x-2 space-x-1 cursor-pointer'>
                <h5 className='text-sm'>Show More</h5>
                <BsArrowRight color='rgb(255 38 185)' />
              </div>
            </div>
          </div>

          <div className='flex md:flex-row flex-col pt-3 gap-3'>
            <div className='md:w-[65%] w-full'>
              <div>
                <img
                  src={debate}
                  alt='debate-img'
                  className='
            rounded-[6px]'
                />
              </div>

              <div className=' flex items-center pt-2 space-x-2'>
                <img
                  src={avatar}
                  alt='avatar'
                  className='w-8 h-8 rounded-full'
                />
                <h3 className='text-sm'>Thomas Brown</h3>
                <p className='text-sm'>
                  |<span className='px-2'>Aug 2, 2022</span>|
                  <span className='pl-2'>0 Comments</span>
                </p>
              </div>

              <h1 className='text-3xl font-semibold pt-2'>
                In a Gentle Way, You Can Shake The World
              </h1>

              <p className='text-sm text-gray-400'>
                Science is an enterprise that should be cherished as an activity
                of the free human mind. Because it transforms who we are, how we
                live, and it gives us an understanding of our place in the
                universe.
              </p>
            </div>
            <div className='md:w-[35%] w-full'>
              {stories.map((item) => (
                <div
                  key={item.id}
                  className='border-b border-gray-500 pb-4 pt-2 last:lg:block class '
                >
                  <h3 className='text-base font-semibold'>{item.details}</h3>

                  <p className='text-[13px] text-gray-500 pt-2'>
                    By <span className='pr-3'>{item.author}</span> |
                    <span className='pl-3'>{item.date}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='md:w-[25%] w-full'>
          <div className='border-b border-gray-500 pb-[0.1px]'>
            <div className='flex items-center justify-between'>
              <h1 className='md:text-xl text-xl font-semibold border-b-2 border-primaryPink rounded-sm w-fit'>
                Follow Us
              </h1>
            </div>
          </div>

          <div className='flex items-center md:justify-start  pt-2 space-x-2 md:space-x-0'>
            <img
              src={facebook}
              alt='facebook'
              className='w-10 h-10
            '
            />
            <img
              src={twitterX}
              alt='facebook'
              className='w-10 h-10
            '
            />
            <img
              src={linkedin}
              alt='facebook'
              className='w-10 h-10
            '
            />
            <img
              src={youtube}
              alt='facebook'
              className='w-10 h-10
            '
            />
            <img
              src={instagram}
              alt='facebook'
              className='w-10 h-10
            '
            />
          </div>

          <div className='pt-8'>
            <div className='border-b border-gray-500 pb-[0.1px]'>
              <div className='flex items-center justify-between'>
                <h1 className='md:text-xl text-xl font-semibold border-b-2 border-primaryPink rounded-sm w-fit'>
                  Categories
                </h1>
              </div>
            </div>

            {category.map((item) => (
              <div key={item.id} className='flex items-center pt-4 space-x-3'>
                <div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className='w-14 h-14 rounded-full object-cover'
                  />
                </div>

                <div>
                  <p className='text-sm text-gray-200'>{item.title}</p>
                  <p className='text-[12px] text-gray-200'>{item.article}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
