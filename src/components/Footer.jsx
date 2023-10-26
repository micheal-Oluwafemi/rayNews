import React, { useState } from 'react';
import {
  canada,
  dTriump,
  facebook,
  instagram,
  linkedin,
  speechImg,
  twitterX,
  youtube,
} from '../assets';
import {
  FaBolt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import { usefulLinks } from '../..';
import { BsChevronRight } from 'react-icons/bs';

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div className='font-poppins text-white bg-bgPrimary md:p-10 p-3'>
      <div className='flex md:flex-row flex-col justify-between md:gap-6 gap-5'>
        <div className='md:w-1/4 w-full'>
          <h1 className='font-oldEnglish text-5xl'>RayNews</h1>
          <p className='text-[13px] font-medium text-gray-300 pt-2'>
            We bring you all the latest and breaking news. Interesting headline
            topics from news from around the world on different topical issues
            in Politics, Health, Business, Entertainment, Sports and more.
          </p>

          <div className='flex items-center md:justify-start  pt-2 space-x-2 md:space-x-0'>
            <img
              src={facebook}
              alt='facebook'
              className='w-8 h-8
            '
            />
            <img
              src={twitterX}
              alt='facebook'
              className='w-8 h-8
            '
            />
            <img
              src={linkedin}
              alt='facebook'
              className='w-8 h-8
            '
            />
            <img
              src={youtube}
              alt='facebook'
              className='w-8 h-8
            '
            />
            <img
              src={instagram}
              alt='facebook'
              className='w-8 h-8
            '
            />
          </div>
        </div>

        <div className='md:w-1/4 w-full'>
          <h2 className='text-xl font-semibold'>Useful Links</h2>

          {usefulLinks.map((item) => (
            <div key={item.id} className='pt-2 cursor-pointer'>
              <div className='flex items-center gap-2 pb-1.5'>
                <BsChevronRight
                  color='#ff26b9'
                  className='text-[10px] font-bold '
                />
                <h4 className='text-sm font-medium'>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className='md:w-1/4 w-full'>
          <h3 className='text-xl font-semibold'>Latest News</h3>

          <div className='flex items-center pt-4 gap-3'>
            <div>
              <img
                src={speechImg}
                alt=''
                className='w-14 h-14 rounded-full object-cover'
              />
            </div>

            <div>
              <p className='text-sm text-gray-200 font-medium'>
                The World could Always use more Heros
              </p>
              <p className='text-[12px] text-gray-200'>Sept 14, 2022</p>
            </div>
          </div>

          <div className='flex items-center pt-4 space-x-3'>
            <div>
              <img
                src={canada}
                alt=''
                className='w-14 h-14 rounded-full object-cover'
              />
            </div>

            <div>
              <p className='text-sm text-gray-200 font-medium'>
                Every puzzle has an answer
              </p>
              <p className='text-[12px] text-gray-200'>Sept 14, 2022</p>
            </div>
          </div>
        </div>

        <div className='md:w-1/4 w-full'>
          <h2 className='text-xl font-semibold'>Newsletter </h2>
          <p className='text-sm text-gray-400 pb-1'>Stay connected with us </p>
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              className='bg-[#150e28] focus:outline-none text-[13px] py-2 px-3 md:w-[80%] w-[90%]'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email Address'
            />
            <br />

            <button
              type='submit'
              className='text-center bg-red-500 md:w-[80%] w-[90%] mt-2 py-1.5 text-sm'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className='flex md:flex-row flex-col justify-between md:pt-10 pt-5 items-center'>
        <div className='md:flex hidden items-center flex-row gap-5 '>
          <h3 className='text-[12px] cursor-pointer text-gray-300'>Blog</h3>
          <h3 className='text-[12px] cursor-pointer text-gray-300'>Author</h3>
          <h3 className='text-[12px] cursor-pointer text-gray-300'>
            Privacy Policy
          </h3>
          <h3 className='text-[12px] cursor-pointer text-gray-300'>
            Contact Us
          </h3>
        </div>

        <div className='md:flex hidden justify-center items-center'>
          <a
            href='https://wa.me/message/FOHLE6MHV7BRM1'
            target='_blank'
            className='text-base '
          >
            RAYNEWS
          </a>
        </div>

        <div className='pt-1'>
          <p className='text-[13px] text-gray-300'>
            <span className='pr-2'>Copyright &copy; {year} ray News</span>|
            <span className='pl-2'>All Rights Reserved</span>
          </p>
        </div>
      </div>

      <div className='pl-2 flex justify-center items-center text-sm text-gray-400 pt-2'>
        <h3>
          Developed by
          <a
            href='https://rayt3ch.vercel.app'
            target='_blank'
            className='text-sm pl-1'
          >
            <span className='text-sky-500'>@</span>RayT3ch
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
