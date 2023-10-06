import React, { useEffect, useState } from 'react';
import { navLink } from '../..';
import { FaCaretDown } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import 'animate.css';

const Navbar = () => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  const getMonth = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  const currentDay = daysOfWeek[dayOfWeek];
  const currentMonth = months[getMonth];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`md:px-4 lg:px-10  px-3 ${
        scrolled ? 'bg-bgPrimary fixed  top-0 w-full z-50' : 'bg-transparent'
      }  py-3 font-poppins text-white bg-bgPrimary`}
    >
      <div className='flex items-center justify-between'>
        <div
          onClick={() => window.scrollTo(0, 0)}
          className={`${scrolled ? 'flex ' : 'hidden'}`}
        >
          <h2 className={`font-poppins`}>RayNews</h2>
        </div>
        <div className='flex gap-10 text-white font-poppins'>
          <div className='md:hidden' onClick={() => setActive((prev) => !prev)}>
            {active === true ? (
              <AiOutlineClose />
            ) : (
              <RxHamburgerMenu className='text-xl' />
            )}
          </div>

          <div className='md:flex gap-10 hidden'>
            {navLink.map((item) => (
              <div key={item.id} className='cursor-pointer'>
                <div className='flex items-center space-x-2'>
                  <a href={item.link} className='text-sm'>
                    {item.linkName}
                  </a>
                  <div className='cursor-pointer'>
                    <FaCaretDown />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${scrolled ? 'hidden ' : 'block'}`}>
          <p className=' text-sm text-white'>
            {currentDay}, {dayOfWeek} {currentMonth} {year}
          </p>
        </div>
      </div>

      {/* <div className={`${toggle === true ? 'flex' : 'hidden'}`}> */}
      <div
        className={`${
          active === true ? 'flex ' : 'hidden'
        } md:hidden flex-col  animate__animated animate__slideInLeft absolute bg-bgPrimary w-full left-0 pl-3 pb-3 rounded-b-md`}
      >
        {navLink.map((item) => (
          <div key={item.id} className='cursor-pointer'>
            <div className=' pt-5 cursor-pointer space-x-1.5'>
              <div
                onClick={() => {
                  // setToggle(!toggle);
                  setActive(!active);
                }}
              >
                <a href={item.link} className='text-sm'>
                  {item.linkName}
                </a>
              </div>
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Navbar;
