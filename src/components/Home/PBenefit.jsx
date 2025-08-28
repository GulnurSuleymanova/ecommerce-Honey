import React from 'react';
import img from '../../assets/specialityhoney1.webp';
import { useTranslation } from "react-i18next";

const PBenefit = () => {
  const { t } = useTranslation();
  const benefitsLeft = t("benefits.left", { returnObjects: true });
  const benefitsRight = t("benefits.right", { returnObjects: true });

  // Hər iki tərəfdən bütün benefits birləşdirilir və 1-dən 6-ya qədər number verilir
  const allBenefits = [...benefitsLeft, ...benefitsRight].map((item, index) => ({
    ...item,
    number: index + 1,
  }));

  return (
    <div className="py-5 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Başlıq */}
        <div className="text-center">
          <h6 className="text-[24px] sm:text-[28px] font-semibold mt-3">{t("benefits.sectionTitle")}</h6>
          <h5 className="text-[32px] sm:text-[45px] font-bold pt-3">{t("benefits.sectionSubtitle")}</h5>
          <p className="pt-3 max-w-[600px] mx-auto text-[14px] sm:text-base">{t("benefits.description")}</p>
        </div>

        {/* Desktop layout */}
        <div className="hidden sm:flex flex-row justify-between items-start pt-8 lg:pt-10 gap-6 lg:gap-10">

          {/* Left benefits */}
          <div className="flex flex-col gap-12 lg:gap-20 w-full lg:w-1/3">
            {allBenefits.slice(0, 3).map((item) => (
              <div key={item.number} className="pt-4 flex items-center gap-3 lg:gap-5">
                <p className="text-[14px] sm:text-[17px] font-bold text-right max-w-[150px] sm:max-w-[200px] mb-0">{item.text}</p>
                <div className="relative w-[80px] sm:w-[100px] h-[40px] sm:h-[50px] bg-[#eab73f] flex items-center justify-center">
                  <span className="font-bold z-10 text-[12px] sm:text-[14px]">{item.number}</span>
                  <div className="absolute top-[-20px] sm:top-[-25px] left-0 w-0 h-0 border-l-[40px] sm:border-l-[50px] border-r-[40px] sm:border-r-[50px] border-l-transparent border-r-transparent border-b-[20px] sm:border-b-[25px] border-b-[#eab73f]" />
                  <div className="absolute bottom-[-20px] sm:bottom-[-25px] left-0 w-0 h-0 border-l-[40px] sm:border-l-[50px] border-r-[40px] sm:border-r-[50px] border-l-transparent border-r-transparent border-t-[20px] sm:border-t-[25px] border-t-[#eab73f]" />
                </div>
              </div>
            ))}
          </div>

          {/* Center image */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img src={img} alt="benefit" className="max-w-full h-auto" />
          </div>

          {/* Right benefits */}
          <div className="flex flex-col gap-12 lg:gap-20 w-full lg:w-1/3">
            {allBenefits.slice(3, 6).map((item) => (
              <div key={item.number} className="pt-4 flex items-center gap-3 lg:gap-5">
                <p className="text-[14px] sm:text-[17px] font-bold text-right max-w-[150px] sm:max-w-[200px] mb-0">{item.text}</p>
                <div className="relative w-[80px] sm:w-[100px] h-[40px] sm:h-[50px] bg-[#eab73f] flex items-center justify-center">
                  <span className="font-bold z-10 text-[12px] sm:text-[14px]">{item.number}</span>
                  <div className="absolute top-[-20px] sm:top-[-25px] left-0 w-0 h-0 border-l-[40px] sm:border-l-[50px] border-r-[40px] sm:border-r-[50px] border-l-transparent border-r-transparent border-b-[20px] sm:border-b-[25px] border-b-[#eab73f]" />
                  <div className="absolute bottom-[-20px] sm:bottom-[-25px] left-0 w-0 h-0 border-l-[40px] sm:border-l-[50px] border-r-[40px] sm:border-r-[50px] border-l-transparent border-r-transparent border-t-[20px] sm:border-t-[25px] border-t-[#eab73f]" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile grid layout */}
        <div className="grid grid-cols-3 gap-3 sm:hidden w-full pt-6">
          {allBenefits.map((item) => (
            <div key={item.number} className="flex flex-col items-center gap-2">
              <div className="relative w-[60px] h-[30px] bg-[#eab73f] flex items-center justify-center">
                <span className="font-bold text-[12px]">{item.number}</span>
                <div className="absolute top-[-15px] left-0 w-0 h-0 border-l-[30px] border-r-[30px] border-l-transparent border-r-transparent border-b-[15px] border-b-[#eab73f]" />
                <div className="absolute bottom-[-15px] left-0 w-0 h-0 border-l-[30px] border-r-[30px] border-l-transparent border-r-transparent border-t-[15px] border-t-[#eab73f]" />
              </div>
              <p className="text-[12px] font-bold text-center">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PBenefit;
