import React from 'react';
import {
  FaBolt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import { BsDot } from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';

const TopNavbar = () => {
  return (
    <>
      <div className='bg-bgPrimary w-full py-2 text-white font-poppins md:px-10 px-3'>
        <div className='flex items-center text-[13px] justify-between'>
          <div className='flex items-center space-x-5'>
            <div className='gap-2 flex items-center'>
              <FaBolt color='#ff26b9' />
              <h4 className='font-medium'>News Update</h4>
            </div>

            <div className='md:flex hidden'>
              <BsDot />
            </div>

            <div className='gap-2 flex items-center '>
              <div className='md:block hidden'>
                <BiCategory />
              </div>
              <h4 className='font-light md:block hidden'>
                Brings People Together
              </h4>
            </div>

            <div className='lg:flex hidden items-center space-x-5'>
              <div>
                <BsDot />
              </div>
              <div>
                <h4 className='font-light'>
                  The Great Thing About Fashion is Looks Forward
                </h4>
              </div>
            </div>
          </div>

          <div className='flex items-center space-x-1.5 md:space-x-2 cursor-pointer'>
            <FaFacebookF />
            <FaXTwitter />
            <FaLinkedinIn />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
