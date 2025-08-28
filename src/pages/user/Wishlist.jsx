import { useWishlist } from "../../context/WishlistContext";
import bgImage from "../../assets/slider4.webp";
import bee from "../../assets/icon-footer.png";
import { ShoppingCart } from "lucide-react";
import { useAddtocard } from "../../context/AddtocardContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { toggleAddtocard, addtocard } = useAddtocard();
  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return <p className="text-center mt-10 text-lg">Wishlist is empty</p>;
  }

  const handleAddtocardClick = (e, product) => {
    e.stopPropagation(); // prevent navigation to details when clicking add to cart

    const isInAddtocard = addtocard.some((item) => item.id === product.id);
    if (!isInAddtocard) {
      toggleAddtocard(product);
      toast.success(`"${product.name}" added to cart.`);
    } else {
      toast.info(`"${product.name}" is already in the cart.`);
    }
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <section
        className="h-[400px] bg-cover bg-center -mt-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="h-full flex justify-center items-center gap-4">
          <h1 className="text-[#3a1e0d] text-3xl font-medium tracking-wide uppercase">
            Wishlist
          </h1>
          <img src={bee} alt="Bee" className="w-26" />
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="flex items-center justify-between border-l border-l-amber-400 border-r border-r-amber-400 hover:border-amber-400 hover:border rounded-lg p-4 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.images?.[0]?.url}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-amber-600 font-semibold">{product.price} AZN</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className="w-12 h-12 bg-amber-600 hover:bg-amber-700 rounded-2xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl"
                  onClick={(e) => handleAddtocardClick(e, product)}
                  title={
                    addtocard.some((item) => item.id === product.id)
                      ? "Already in cart"
                      : "Add to cart"
                  }
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>

                <button
                  className="text-red-600 hover:text-red-800 font-bold text-xl px-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromWishlist(product.id);
                  }}
                  title="Remove from wishlist"
                >
                  &times;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
