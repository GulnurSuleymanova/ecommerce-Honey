import React from 'react';
import img from '../../assets/bn4-1.webp';
import brand1 from '../../assets/brand-1.webp';
import brand2 from '../../assets/brand-2.webp';
import brand3 from '../../assets/brand-3.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';

const ACertification = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-16 sm:pt-20">
      <div className="max-w-[1500px] mx-auto px-10 sm:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center font-medium tracking-wide">
          
          {/* Şəkil */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <img
              src={img}
              className="mx-auto max-w-full h-auto sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px]"
              alt="certification-img"
              data-aos="zoom-out-down"
            />
          </div>

          {/* Mətni */}
          <div className="w-full lg:w-1/2 pt-4 sm:pt-8 lg:pt-20">
            <div>
              <h6 className="text-[20px] sm:text-[24px] lg:text-[27px] font-semibold mb-2">
                {t("certification.titleSmall")}
              </h6>
              <h3 className="text-[28px] sm:text-[36px] lg:text-[46px] font-semibold mb-3 leading-tight">
                {t("certification.titleBig")}
              </h3>
              <p className="text-shadow-gray-800 mb-6 opacity-80 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
                {t("certification.desc")}
              </p>

              {/* Swiper */}
              <div>
                <Swiper
                  grabCursor={true}
                  slidesPerView={1} // mobil default
                  spaceBetween={10}
                  modules={[Autoplay]}
                  autoplay={{ delay: 1000 }}
                  speed={2000}
                  loop={true}
                  breakpoints={{
                    640: { slidesPerView: 2 },   // sm ekranlarda
                    1024: { slidesPerView: 3 },  // lg ekranlarda
                  }}
                >
                  {[brand1, brand2, brand3, brand1, brand2, brand3].map((brand, index) => (
                    <SwiperSlide key={index}>
                      <div className="w-full inline-block px-2 pb-6 sm:pb-8">
                        <div className="bg-white rounded h-[90px] sm:h-[100px] lg:h-[120px] text-center shadow-md p-3 sm:p-4 flex items-center justify-center dark:bg-white">
                          <img
                            src={brand}
                            alt={`brand-${index}`}
                            className="w-[60px] sm:w-[70px] lg:w-[80px] h-[60px] sm:h-[70px] lg:h-[80px] object-contain mx-auto"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ACertification;
