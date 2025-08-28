import { X } from 'lucide-react';

const Modal = ({ open, setOpen, children }) => {
  return (
    <>
      <div
        className={`${
          open
            ? 'fixed z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 rounded-3xl p-6 shadow-xl shadow-yellow-200 border border-yellow-300 transition-all duration-300'
            : 'hidden'
        }`}
      >
        <div className="w-full flex justify-end mb-4">
          <button
            onClick={() => setOpen(false)}
            className="p-3 rounded-full bg-yellow-200 hover:bg-yellow-300 text-yellow-800 transition duration-200 shadow-md"
          >
            <X size={22} />
          </button>
        </div>

        <div className="text-gray-800">{children}</div>
      </div>

      <div
        className={`${
          open
            ? 'fixed z-10 inset-0 bg-yellow-100/30 backdrop-blur-sm transition-all duration-300'
            : ''
        }`}
      ></div>
    </>
  );
};

export default Modal;
