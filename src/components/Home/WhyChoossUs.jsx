import React from 'react';
import icon1 from '../../assets/sectionone.webp';
import icon2 from '../../assets/icon-banner2.webp';
import icon3 from '../../assets/icon-banner3.png';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-16 sm:pt-24 md:pt-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Başlıq */}
        <div className="text-center mb-6">
          <p className="text-[14px] sm:text-[16px] font-medium tracking-wide">{t("whoose.0")}</p>
          <h5 className="text-[20px] sm:text-[24px] md:text-[32px] font-medium tracking-wide">{t("whoose.1")}</h5>
        </div>

        {/* Kartlar */}
        <div className="flex flex-col md:flex-row md:justify-center md:gap-6 lg:gap-12 gap-6 pt-3 items-center">

          {/* Kart 1 */}
          <div className="relative group w-full max-w-[280px] sm:max-w-sm md:max-w-md">
            <div className="absolute -top-2 -right-3 w-full h-full bg-[#F9BD17] rounded-tl-[60px] rounded-br-[60px] z-0"></div>
            <div className="absolute -top-[6px] -left-[15px] w-[calc(100%+20px)] h-[calc(100%+20px)] border border-dashed border-black rounded-tl-[60px] rounded-br-[60px] z-[-1]"></div>
            <div className="relative bg-amber-100 rounded-tl-[60px] rounded-br-[60px] shadow-[4px_5px_10px_#0000000d] px-3 py-3 sm:px-6 sm:py-6 min-h-[180px] sm:min-h-[220px] md:min-h-[250px] text-left z-10">
              <div className="relative">
                <div className="absolute -top-2 -left-2 sm:-left-6 w-[45px] sm:w-[60px] md:w-[70px] h-[45px] sm:h-[60px] md:h-[70px] flex items-center justify-center border border-[#F9BD17] bg-white rounded-full p-1 sm:p-2 md:p-3">
                  <img src={icon1} alt={t("whoose.2")} className="w-full h-auto" />
                </div>
                <h3 className="text-[16px] sm:text-[20px] md:text-[24px] font-medium tracking-wide pl-[45px] sm:pl-[55px] md:pl-[65px] text-amber-600">{t("whoose.2")}</h3>
              </div>
              <p className="mt-2 sm:mt-3 pl-[45px] sm:pl-[55px] md:pl-[65px] text-[13px] sm:text-[15px] md:text-[16px] text-gray-600 font-medium tracking-wide">
                {t("whoose.3")}
              </p>
            </div>
          </div>

          {/* Kart 2 */}
          <div className="relative group w-full max-w-[280px] sm:max-w-sm md:max-w-md">
            <div className="absolute -top-2 -right-3 w-full h-full bg-[#F9BD17] rounded-tl-[60px] rounded-br-[60px] z-0"></div>
            <div className="absolute -top-[6px] -left-[15px] w-[calc(100%+20px)] h-[calc(100%+20px)] border border-dashed border-black rounded-tl-[60px] rounded-br-[60px] z-[-1]"></div>
            <div className="relative bg-amber-100 rounded-tl-[60px] rounded-br-[60px] shadow-[4px_5px_10px_#0000000d] px-3 py-3 sm:px-6 sm:py-6 min-h-[180px] sm:min-h-[220px] md:min-h-[250px] text-left z-10">
              <div className="relative">
                <div className="absolute -top-2 -left-2 sm:-left-6 w-[45px] sm:w-[60px] md:w-[70px] h-[45px] sm:h-[60px] md:h-[70px] flex items-center justify-center border border-[#F9BD17] bg-white rounded-full p-1 sm:p-2 md:p-3">
                  <img src={icon2} alt={t("whoose.4")} className="w-full h-auto" />
                </div>
                <h3 className="text-[16px] sm:text-[20px] md:text-[24px] font-medium tracking-wide pl-[45px] sm:pl-[55px] md:pl-[65px] text-amber-600">{t("whoose.4")}</h3>
              </div>
              <p className="mt-2 sm:mt-3 pl-[45px] sm:pl-[55px] md:pl-[65px] text-[13px] sm:text-[15px] md:text-[16px] text-gray-600 font-medium tracking-wide">
                {t("whoose.5")}
              </p>
            </div>
          </div>

          {/* Kart 3 */}
          <div className="relative group w-full max-w-[280px] sm:max-w-sm md:max-w-md">
            <div className="absolute -top-2 -right-3 w-full h-full bg-[#F9BD17] rounded-tl-[60px] rounded-br-[60px] z-0"></div>
            <div className="absolute -top-[6px] -left-[15px] w-[calc(100%+20px)] h-[calc(100%+20px)] border border-dashed border-black rounded-tl-[60px] rounded-br-[60px] z-[-1]"></div>
            <div className="relative bg-amber-100 rounded-tl-[60px] rounded-br-[60px] shadow-[4px_5px_10px_#0000000d] px-3 py-3 sm:px-6 sm:py-6 min-h-[180px] sm:min-h-[220px] md:min-h-[250px] text-left z-10">
              <div className="relative">
                <div className="absolute -top-2 -left-2 sm:-left-6 w-[45px] sm:w-[60px] md:w-[70px] h-[45px] sm:h-[60px] md:h-[70px] flex items-center justify-center border border-[#F9BD17] bg-white rounded-full p-1 sm:p-2 md:p-3">
                  <img src={icon3} alt={t("whoose.6")} className="w-full h-auto" />
                </div>
                <h3 className="text-[16px] sm:text-[20px] md:text-[24px] font-medium tracking-wide pl-[45px] sm:pl-[55px] md:pl-[65px] text-amber-600">{t("whoose.6")}</h3>
              </div>
              <p className="mt-2 sm:mt-3 pl-[45px] sm:pl-[55px] md:pl-[65px] text-[13px] sm:text-[15px] md:text-[16px] text-gray-600 font-medium tracking-wide">
                {t("whoose.7")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
