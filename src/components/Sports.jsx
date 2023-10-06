import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { SportUpdate, coronaUpdate } from '../..';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const SliderButton = () => {
  const swiper = useSwiper();

  return (
    <div className='r-button flex justify-end space-x-6 pt-4'>
      <BsArrowLeft
        onClick={() => swiper.slidePrev()}
        className='text-2xl cursor-pointer'
      />
      <BsArrowRight
        onClick={() => swiper.slideNext()}
        className='text-2xl cursor-pointer'
      />
    </div>
  );
};

const Sports = () => {
  return (
    <div
      id='sport'
      className='lg:px-10 md:px-4 px-3 pb-6 font-poppins text-white'
    >
      <div>
        <div className='border-b border-gray-500 pb-[0.1px]'>
          <div className='flex items-center justify-between'>
            <h1 className='md:text-xl text-xl font-semibold border-b-2 border-primaryPink rounded-sm w-fit'>
              Sports Update
            </h1>
          </div>
        </div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          // centeredSlides={true}
          // loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          className='relative mt-3'
        >
          {SportUpdate.map((item) => (
            <SwiperSlide key={item.id} className='w-72 pr-2.5'>
              <div className='r-item'>
                <img
                  src={item.img}
                  alt=''
                  className='w-62 h-52 object-cover rounded-[6px] mx-auto '
                />
              </div>

              <div>
                <h3 className='pt-1 text-lg font-semibold'>{item.title}</h3>
                <p className='text-[12px] text-gray-400 font-light '>
                  {item.date}
                </p>
              </div>
            </SwiperSlide>
          ))}
          <SliderButton />
        </Swiper>
      </div>
    </div>
  );
};

export default Sports;
