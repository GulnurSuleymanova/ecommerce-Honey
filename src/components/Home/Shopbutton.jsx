import React from 'react'
import { useTranslation } from 'react-i18next'
import slide4 from '../../assets/slide4.webp'
import { NavLink } from 'react-router-dom'

const Shopbutton = () => {
  const { t } = useTranslation()

  return (
    <div className="mt-20">
      <div
        style={{ backgroundImage: `url(${slide4})` }}
        className="relative bg-cover bg-center bg-no-repeat xl:h-[680px] md:h-[550px] h-[420px] flex justify-center items-center"
      >
        {/* Overlay */}
<div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.4)" }}></div>
        {/* Content */}
        <div className="relative z-10 w-full max-w-[1200px] px-4 text-center">
          <div className="animate-fadeInUp space-y-4">
            <h4 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {t('shopbutton.title')}
            </h4>
            <p className="text-white text-xl md:text-3xl lg:text-4xl font-semibold">
              {t('shopbutton.subtitle')}
            </p>
            <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
              {t('shopbutton.description')}
            </p>
           <NavLink
              to="/shop"
              className="inline-block mt-6 px-8 py-3 bg-white text-black rounded-full text-sm md:text-base font-semibold shadow-lg hover:bg-yellow-200 transition duration-300"
            >
              {t('shopbutton.button')}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shopbutton
