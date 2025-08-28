import React, { useEffect } from 'react';
import bee from '../../assets/bee.webp';
import bee2 from '../../assets/bee2.webp';
import WhyChooseUs from '../../components/Home/WhyChoossUs';
import ACertification from '../../components/Home/ACertification';
import PBenefit from '../../components/Home/PBenefit';
import Featured from '../../components/Home/Featured';
import BSocial from '../../components/Home/BSocial';
import Testimonials from '../../components/Home/Testimonials';
import Brend from '../../components/Home/Brend';
import Shopbutton from '../../components/Home/Shopbutton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full -mt-32 z-10">
        <div className="relative home-hero w-full h-[60vh] sm:h-[110vh] pt-[120px] sm:pt-[250px]">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="flex flex-wrap">
              {/* LEFT TEXT */}
              <div className="w-full md:w-1/3 pt-10">
                <h5
                  className="text-[22px] sm:text-[30px] mb-6 font-medium tracking-wide mx-4 sm:mx-24"
                  data-aos="fade-right"
                >
                  {t('home.0')}
                </h5>
                <h3
                  className="text-[36px] sm:text-[60px] leading-[1.2em] mb-10 sm:mb-[42px] font-medium tracking-wide mx-4 sm:mx-24"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  {t('home.1')}
                </h3>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative w-full md:w-2/3 flex justify-center items-center">
                {/* Bee 1 */}
                <div className="absolute left-8 sm:left-30 top-7 z-20">
                  <div data-aos="fade-down">
                    <img src={bee} alt="bee" className="max-w-[60px] sm:max-w-[120px]" />
                  </div>
                </div>

                {/* Hero Image */}
                <div
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  className="herohoney w-[200px] sm:w-[900px] h-[200px] sm:h-[800px] bg-contain bg-no-repeat bg-center mx-auto -mt-10 sm:-mt-30"
                />

                {/* Bee 2 */}
                <div
                  className="absolute right-[-20px] sm:right-[-40px] bottom-[150px] sm:bottom-[450px] animate-spin-slow transform -translate-x-1/2 -translate-y-1/2"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <img src={bee2} alt="bee2" className="max-w-[40px] sm:max-w-[80px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTIONS */}
      <div data-aos="fade-up"><WhyChooseUs /></div>
      <div data-aos="fade-up" data-aos-delay="100"><ACertification /></div>
      <div data-aos="fade-up" data-aos-delay="400"><PBenefit /></div>
      <div><Featured /></div>
      <div data-aos="fade-up" data-aos-delay="80"><Testimonials /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Shopbutton /></div>
      <div data-aos="fade-up" data-aos-delay="120"><BSocial /></div>
      <div data-aos="fade-up" data-aos-delay="140"><Brend /></div>
    </>
  );
};

export default Home;
