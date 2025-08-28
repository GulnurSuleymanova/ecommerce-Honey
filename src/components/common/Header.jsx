import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Heart, ShoppingBasket, UserPen, X, Logs, Globe, Home, Store } from 'lucide-react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { useAddtocard } from '../../context/AddtocardContext';
import DarkModeToggle from './DarkModeToggle';
import i18n from '../../i18n/i18next';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const { wishlist } = useWishlist();
  const { addtocard } = useAddtocard();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setOpenLang(false);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="relative mx-auto w-full max-w-[1310px] mt-4 lg:px-[15px] pt-[15px] md:rounded-[90px] shadow-md z-40 px-2">
        <div className="relative flex justify-between items-center h-[70px] md:h-[90px]">

          {/* Sol menyu */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(true)}
              className="group bg-white text-gray-700 duration-300 h-[45px] w-[45px] md:h-[50px] md:w-[50px] flex items-center justify-center rounded-full hover:bg-amber-950 cursor-pointer"
            >
              <Logs size={22} className="group-hover:text-white duration-300" />
            </button>

            {/* Qlobus və dil seçimi */}
            <div className="relative">
              <button
                onClick={() => setOpenLang(!openLang)}
                className="group bg-white text-gray-700 duration-300 h-[45px] w-[45px] md:h-[50px] md:w-[50px] flex items-center justify-center rounded-full hover:bg-amber-950 cursor-pointer"
              >
                <Globe size={20} className="group-hover:text-white duration-300" />
              </button>

              {openLang && (
                <div className="absolute top-12 left-0 bg-white border rounded-lg shadow-lg p-2 w-28">
                  <button
                    onClick={() => changeLang("az")}
                    className={`block w-full text-left px-3 py-1 rounded ${i18n.language === "az" ? "bg-amber-950 text-white" : "hover:bg-gray-100"}`}
                  >
                    AZ
                  </button>
                  <button
                    onClick={() => changeLang("en")}
                    className={`block w-full text-left px-3 py-1 rounded ${i18n.language === "en" ? "bg-amber-950 text-white" : "hover:bg-gray-100"}`}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto" />
          </div>

          {/* Sağ ikonlar (desktop) */}
          <div className="hidden md:flex items-center gap-2 z-40">
            <DarkModeToggle />
            {/* User */}
            <div className="relative">
              <button
                onClick={() => setOpenUser(!openUser)}
                aria-label="user"
                className="group bg-white duration-300 h-[45px] w-[45px] md:h-[50px] md:w-[50px] flex items-center justify-center rounded-full hover:bg-amber-950"
                style={{ boxShadow: '2px 3px 0 0 #FABE17' }}
              >
                <UserPen className="w-5 h-5 text-gray-700 group-hover:text-white duration-300" />
              </button>

              {openUser && (
                <div className="absolute top-12 right-0 bg-white border rounded-lg shadow-lg p-2 w-32">
                  <button
                    onClick={() => { navigate('/loginuser'); setOpenUser(false); }}
                    className="block w-full text-left px-3 py-1 rounded hover:bg-gray-100"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => { navigate('/register'); setOpenUser(false); }}
                    className="block w-full text-left px-3 py-1 rounded hover:bg-gray-100"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <div className="relative">
              <NavLink to='/wishlist' aria-label="wishlist"
                className="group bg-white duration-300 h-[45px] w-[45px] flex items-center justify-center rounded-full hover:bg-amber-950"
                style={{ boxShadow: '2px 3px 0 0 #FABE17' }}>
                <Heart className="w-5 h-5 text-gray-700 group-hover:text-white duration-300" />
              </NavLink>
              <span className="absolute -top-1 -right-1 bg-[#FABE17] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            </div>

            {/* Cart */}
            <div className="relative">
              <NavLink to='/addtocard' aria-label="cart"
                className="group bg-white duration-300 h-[45px] w-[45px] flex items-center justify-center rounded-full hover:bg-amber-950"
                style={{ boxShadow: '2px 3px 0 0 #FABE17' }}>
                <ShoppingBasket className="w-5 h-5 text-gray-700 group-hover:text-white duration-300" />
              </NavLink>
              <span className="absolute -top-1 -right-1 bg-[#FABE17] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {addtocard.length}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobil Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-8px_29px_0_rgba(0,0,0,0.1)] grid grid-cols-5 md:hidden text-center text-[#9b9b9b] z-50">
        <NavLink to="/" className={`py-2 ${location.pathname === "/" ? "text-amber-950" : "text-[#9b9b9b]"}`}>
          <Home className="mx-auto w-5 h-5" />
          <span className="block text-xs">Home</span>
        </NavLink>
        <NavLink to="/shop" className={`py-2 ${location.pathname === "/shop" ? "text-amber-950" : "text-[#9b9b9b]"}`}>
          <Store className="mx-auto w-5 h-5" />
          <span className="block text-xs">Shop</span>
        </NavLink>
        <NavLink to="/wishlist" className={`relative py-2 ${location.pathname === "/wishlist" ? "text-amber-950" : "text-[#9b9b9b]"}`}>
          <Heart className="mx-auto w-5 h-5" />
          {wishlist.length > 0 && (
            <span className="absolute top-1 right-6 bg-[#FABE17] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              {wishlist.length}
            </span>
          )}
          <span className="block text-xs">Wishlist</span>
        </NavLink>
        <NavLink to="/addtocard" className={`relative py-2 ${location.pathname === "/addtocard" ? "text-amber-950" : "text-[#9b9b9b]"}`}>
          <ShoppingBasket className="mx-auto w-5 h-5" />
          {addtocard.length > 0 && (
            <span className="absolute top-1 right-6 bg-[#FABE17] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              {addtocard.length}
            </span>
          )}
          <span className="block text-xs">Cart</span>
        </NavLink>
        <button onClick={() => navigate('/loginuser')} className={`py-2 ${location.pathname === "/loginuser" ? "text-amber-950" : "text-[#9b9b9b]"}`}>
          <UserPen className="mx-auto w-5 h-5" />
          <span className="block text-xs">Account</span>
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#f6c35c] shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <button onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>
        <ul className="p-4 space-y-2">
          <NavLink to='/' onClick={() => setIsOpen(false)} className="block p-2 rounded ">
            {t("sidebar.0")}
          </NavLink>
          <NavLink to='/shop' onClick={() => setIsOpen(false)} className="block p-2 rounded ">
            {t("sidebar.1")}
          </NavLink>
          <NavLink to='/about' onClick={() => setIsOpen(false)} className="block p-2 rounded ">
            {t("sidebar.2")}
          </NavLink>
          <NavLink to='/contact' onClick={() => setIsOpen(false)} className="block p-2 rounded ">
            {t("sidebar.3")}
          </NavLink>
          <NavLink to='/faq' onClick={() => setIsOpen(false)} className="block p-2 rounded ">
            {t("sidebar.4")}
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Header;
