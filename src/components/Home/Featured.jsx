import React from "react";
import { useTranslation } from "react-i18next";
import border from "../../assets/border.png";
import category1 from "../../assets/category1.webp";
import category2 from "../../assets/category2.webp";
import category3 from "../../assets/category3.webp";

const Featured = () => {
  const { t } = useTranslation();

  return (
    <div className="py-20 bg-no-repeat bg-cover bg-center -mt-60 home-hero hidden sm:block">
      {/* Başlıq */}
      <div className="text-center mb-16 mt-36">
        <p className="text-[37px] font-medium tracking-wide">
          {t("featured.subtitle")}
        </p>
        <h2 className="text-[48px] font-medium tracking-wide mt-4">
          {t("featured.title")}
        </h2>
      </div>

      {/* Kateqoriyalar */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4">
        {/* 1-ci kateqoriya */}
        <div className="w-[300px] text-center">
          <div className="relative w-[260px] h-[260px] mx-auto mb-8">
            <img
              src={border}
              alt="border"
              className="absolute inset-0 w-full h-full object-contain z-10"
            />
            <img
              src={category1}
              alt={t("featured.sunflower.name")}
              className="absolute inset-0 w-[60%] h-[60%] object-cover m-auto z-0 rounded-full"
            />
          </div>
          <h3 className="text-[28px] font-medium tracking-wide mb-2">
            {t("featured.sunflower.name")}
          </h3>
          <p className="text-[15px] font-medium tracking-wide leading-relaxed mb-32">
            {t("featured.sunflower.desc")}
          </p>
        </div>

        {/* 2-ci kateqoriya */}
        <div className="w-[300px] text-center">
          <div className="relative w-[260px] h-[260px] mx-auto mb-8">
            <img
              src={border}
              alt="border"
              className="absolute inset-0 w-full h-full object-contain z-10"
            />
            <img
              src={category2}
              alt={t("featured.wildflower.name")}
              className="absolute inset-0 w-[60%] h-[60%] object-cover m-auto z-0 rounded-full"
            />
          </div>
          <h3 className="text-[28px] font-medium tracking-wide mb-2">
            {t("featured.wildflower.name")}
          </h3>
          <p className="text-[15px] font-medium tracking-wide leading-relaxed mb-32">
            {t("featured.wildflower.desc")}
          </p>
        </div>

        {/* 3-cü kateqoriya */}
        <div className="w-[300px] text-center">
          <div className="relative w-[260px] h-[260px] mx-auto mb-8">
            <img
              src={border}
              alt="border"
              className="absolute inset-0 w-full h-full object-contain z-10"
            />
            <img
              src={category3}
              alt={t("featured.acacia.name")}
              className="absolute inset-0 w-[60%] h-[60%] object-cover m-auto z-0 rounded-full"
            />
          </div>
          <h3 className="text-[28px] font-medium tracking-wide mb-2">
            {t("featured.acacia.name")}
          </h3>
          <p className="text-[15px] font-medium tracking-wide leading-relaxed mb-32">
            {t("featured.acacia.desc")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
