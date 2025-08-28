import React from "react";
import logo from "../../assets/logo.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="w-full py-12 px-4 md:px-8 bg-top bg-repeat bgfooter mt-7">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">{t("footer.0")}</h2>
          <p className="mb-6 max-w-xl mx-auto">{t("footer.1")}</p>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder={t("footer.2")}
                className="w-full bg-white rounded-full border-2 border-dashed border-[#5B2800] pr-32 pl-5 py-3 h-[58px]"
              />
              <input
                type="submit"
                value={t("footer.3")}
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#5B2800] hover:bg-[#251c14] text-white font-medium px-5 py-2 rounded-full text-sm h-[52px] uppercase tracking-wider cursor-pointer transition duration-300"
              />
            </div>
          </div>
        </div>

        <footer className="py-10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="text-center md:text-left order-1">
                <p className="text-lg font-semibold mb-3">{t("footer.4")}</p>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-[#5B2800]">{t("footer.5")}</a></li>
                  <li><a href="#" className="hover:text-[#5B2800]">{t("footer.6")}</a></li>
                  <li><a href="#" className="hover:text-[#5B2800]">{t("footer.7")}</a></li>
                  <li><a href="#" className="hover:text-[#5B2800]">{t("footer.8")}</a></li>
                  <li><a href="#" className="hover:text-[#5B2800]">{t("footer.9")}</a></li>
                </ul>
              </div>

              <div className="flex flex-col items-center md:items-center order-2">
                <img src={logo} alt="Logo" className="w-32 mb-4" />
                <p className="text-sm text-center">{t("footer.10")}</p>
                <div className="flex space-x-4 mt-10">
               <div className="flex space-x-4 mt-10">
  <a
    href="https://www.instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5B2800] text-white hover:bg-[#251c14]"
  >
    <FaInstagram />
  </a>
  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5B2800] text-white hover:bg-[#251c14]"
  >
    <FaXTwitter />
  </a>
  <a
    href="https://wa.me"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5B2800] text-white hover:bg-[#251c14]"
  >
    <FaWhatsapp />
  </a>
</div>

                </div>
              </div>

              <div className="text-center md:text-right order-3">
                <p className="text-lg font-semibold mb-3">{t("footer.11")}</p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <NavLink to='/' onClick={() => setIsOpen(false)}>
                      {t("sidebar.0")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/shop' onClick={() => setIsOpen(false)}>
                      {t("sidebar.1")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/about' onClick={() => setIsOpen(false)}>
                      {t("sidebar.2")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/contact' onClick={() => setIsOpen(false)}>
                      {t("sidebar.3")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/faq' onClick={() => setIsOpen(false)}>
                      {t("sidebar.4")}
                    </NavLink>
                  </li>
                </ul>

              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center text-sm border-t pt-6">
              <span>{t("footer.17")}</span>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
