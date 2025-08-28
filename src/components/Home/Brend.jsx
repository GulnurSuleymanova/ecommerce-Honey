import React from 'react';
import brand1 from '../../assets/brand1.webp';
import brand2 from '../../assets/brand2.jpg';
import brand3 from '../../assets/brand3.jpg';
import brand5 from '../../assets/brand5.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Brend = () => {
  return (
    <div>
      <Swiper
        grabCursor={true}
        slidesPerView={4}
        spaceBetween={0} // aradakı boşluğu sıfırladıq
        modules={[Autoplay]}
        autoplay={{ delay: 1000 }}
        speed={2000}
        loop={true}
      >
        <SwiperSlide>
          <div className="w-full inline-block px-0 pb-6">
            <img
              src={brand1}
              alt="brand-1"
              className="p-20 mx-auto"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full inline-block px-0 pb-6">
            <img
              src={brand2}
              alt="brand-2"
              className="p-20 mx-auto"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full inline-block px-0 pb-6">
            <img
              src={brand3}
              alt="brand-3"
              className="p-20 mx-auto"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full inline-block px-0 pb-6">
            <img
              src={brand5}
              alt="brand-5"
              className="p-20 mx-auto"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full inline-block px-0 pb-6">
            <img
              src={brand1}
              alt="brand-1-duplicate"
              className="p-20 mx-auto"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full inline-block px-0 pb-6">
            <img
              src={brand2}
              alt="brand-2-duplicate"
              className="p-20 mx-auto"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full inline-block px-0 pb-6">
            <img
              src={brand3}
              alt="brand-3-duplicate"
              className="p-20 mx-auto"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brend;
