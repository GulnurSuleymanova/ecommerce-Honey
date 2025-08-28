
const CheckoutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm  flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg font-bold"
        >
          &times;
        </button>
        <p><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2lrdTVoYnJ0bXl3amUzbnIxbHZ6YTUzcHNpc2ZjcXJsbnQ2MWR5byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZMdKF6a1iNuTPmUSlu/giphy.gif" alt="" /></p>
      
      </div>
    </div>
  );
};

export default CheckoutModal;
