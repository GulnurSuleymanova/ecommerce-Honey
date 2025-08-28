import React from "react";
import test from "../../assets/icon-testimonial.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import quit from '../../assets/quote2.webp';
import avatar1 from '../../assets/avatar-1.webp';
import avatar2 from '../../assets/avatar-2.webp';
import avatar3 from '../../assets/avatar-3.webp';
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = t("testimonials.items", { returnObjects: true });

  return (
    <div className="text-center px-4 sm:px-8 py-10">
      <img src={test} alt="testimonial icon" className="mx-auto mb-4 mt-8" />
      <p className="text-[14px] sm:text-[16px] font-medium">{t("testimonials.sectionSubtitle")}</p>
      <h5 className="text-[20px] sm:text-[24px] font-semibold mb-10">{t("testimonials.sectionTitle")}</h5>

      <Swiper
        grabCursor
        loop
        autoplay={{ delay: 3000 }}
        speed={1000}
        modules={[Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="max-w-md mx-auto text-left p-4 sm:p-6  shadow-md rounded-lg">
            <img src={quit} alt="" className="mb-3" />
            <p className="text-[12px] sm:text-sm mb-4">{testimonials[0]?.text}</p>
            <div className="flex items-center">
              <img src={avatar1} alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-dashed" />
              <div className="ml-3">
                <p className="text-sm sm:text-base font-bold text-green-600 uppercase">{testimonials[0]?.name}</p>
                <p className="text-xs sm:text-sm text-gray-600">{testimonials[0]?.location}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-md mx-auto text-left p-4 sm:p-6  shadow-md rounded-lg">
            <img src={quit} alt="" className="mb-3" />
            <p className="text-[12px] sm:text-sm mb-4">{testimonials[1]?.text}</p>
            <div className="flex items-center">
              <img src={avatar2} alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-dashed" />
              <div className="ml-3">
                <p className="text-sm sm:text-base font-bold text-green-600 uppercase">{testimonials[1]?.name}</p>
                <p className="text-xs sm:text-sm text-gray-600">{testimonials[1]?.location}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-md mx-auto text-left p-4 sm:p-6  shadow-md rounded-lg">
            <img src={quit} alt="" className="mb-3" />
            <p className="text-[12px] sm:text-sm mb-4">{testimonials[2]?.text}</p>
            <div className="flex items-center">
              <img src={avatar3} alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-dashed" />
              <div className="ml-3">
                <p className="text-sm sm:text-base font-bold text-green-600 uppercase">{testimonials[2]?.name}</p>
                <p className="text-xs sm:text-sm text-gray-600">{testimonials[2]?.location}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
