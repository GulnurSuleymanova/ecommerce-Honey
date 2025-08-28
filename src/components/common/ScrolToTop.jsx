// src/components/ScrollToTop.jsx
import React from 'react';

const ScrollToTop = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={handleScrollTop}
      className="scroll-to-top fixed z-50 cursor-pointer bottom-5 right-5 p-3 bg-amber-500 rounded-full shadow-lg hover:bg-amber-600 transition"
      title="Scroll to top"
    >
      <span className="block w-5 h-5 border-l-2 border-t-2 border-white transform rotate-45"></span>
    </div>
  );
};

export default ScrollToTop;
