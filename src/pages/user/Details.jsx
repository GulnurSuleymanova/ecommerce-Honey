import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetProductByIdQuery } from "../../store/shopApi";
import { ArrowLeft, ShoppingCart, Heart, Clock, Truck } from "lucide-react";
import bgImage from "../../assets/slider4.webp";
import { useAddtocard } from "../../context/AddtocardContext";
import { useWishlist } from "../../context/WishlistContext";
import { toast } from "react-toastify";
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import paypal from "../../assets/paypal.png";
import ReactImageMagnify from "react-image-magnify";
import bee from "../../assets/icon-footer.png"

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: item, isLoading, error } = useGetProductByIdQuery(id);

  const { addtocard, toggleAddtocard } = useAddtocard();
  const { wishlist, toggleWishlist } = useWishlist();

  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (item) {
      setSelectedImage(item.images?.[0]?.url || item.image);
    }
  }, [item]);

  const handleAddtocardClick = (e, product) => {
    e.stopPropagation();
    const isInAddtocard = addtocard.some((i) => i.id === product.id);
    if (!isInAddtocard) {
      toggleAddtocard(product);
      toast.success(`"${product.name}" added to cart`);
    } else {
      toast.info(`"${product.name}" already in cart`);
    }
  };

  const handleWishlistClick = (e, product) => {
    e.stopPropagation();
    const isInWishlist = wishlist.some((i) => i.id === product.id);
    toggleWishlist(product);
    if (!isInWishlist) {
      toast.success(`"${product.name}" added to wishlist`);
    } else {
      toast.info(`"${product.name}" removed from wishlist`);
    }
  };

  if (!id) return <p className="text-center text-red-500">Product ID not specified.</p>;
  if (error) return <p className="text-center text-red-500">Error loading product.</p>;

  return (
    <>
      <section
        className="h-[400px] bg-cover bg-center -mt-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="h-full flex justify-center items-center">
          <h1 className="text-[#3a1e0d] text-3xl font-medium tracking-wide uppercase">
            Details
          </h1>
          <img src={bee} alt="" className='w-26' />
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-amber-600 hover:text-amber-800 font-semibold mb-6"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Shop
        </button>

        {isLoading ? (
          <p className="text-center text-lg">Loading...</p>
        ) : !item ? (
          <p className="text-center text-red-500 text-lg">Product not found.</p>
        ) : (
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1 bg-white rounded-3xl shadow-lg p-6 flex flex-col justify-center items-center relative">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: item.name,
                    isFluidWidth: true,
                    src: selectedImage,
                  },
                  largeImage: {
                    src: selectedImage,
                    width: 2000,
                    height: 1000,
                  },
                  enlargedImagePosition: "beside",
                  enlargedImageContainerStyle: {
                    background: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  },
                  shouldUsePositiveSpaceLens: true,
                }}
              />

              <div
                className="absolute top-4 right-4 w-11 h-11 bg-amber-50/95 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
                onClick={(e) => handleWishlistClick(e, item)}
                title={wishlist.some((i) => i.id === item.id) ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart
                  className={`w-5 h-5 transition-all duration-200 ${wishlist.some((i) => i.id === item.id)
                    ? "text-red-500 fill-red-500"
                    : "text-amber-700 hover:text-red-500 hover:fill-red-500"
                    }`}
                />
              </div>

              <div className="flex gap-2 mt-4">
                {item.images?.map((img, index) => (
                  <img
                    key={index}
                    src={img.url}
                    alt={`${item.name}-${index}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${selectedImage === img.url ? "border-amber-600" : "border-transparent"}`}
                    onClick={() => setSelectedImage(img.url)}
                  />
                ))}
              </div>

            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div className="p-6 rounded-lg space-y-6 mb-4">
                <h1 className="text-4xl font-extrabold mb-4 text-amber-600">{item.name}</h1>
                <p className="text-3xl font-bold mb-6">{item.price} AZN</p>
                {item.description ? (
                  <p className="leading-relaxed">{item.description}</p>
                ) : (
                  <p className="text-gray-400">No description available.</p>
                )}
              </div>
              <div className="pay m-6">
                <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg space-y-2 mb-4">
                  <p className="font-medium ">Guarantee safe & secure checkout</p>
                  <div className="flex items-center gap-4 mt-2">
                    <img src={mastercard} alt="MasterCard" className="h-6" />
                    <img src={visa} alt="Visa" className="h-6" />
                    <img src={paypal} alt="PayPal" className="h-6" />
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5" />
                  <p>Estimated Delivery : <span className="font-medium">25 - 30 Aug, 2025</span></p>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5" />
                  <p>Free Shipping & Returns : <span className="font-medium">On all order over $200.00</span></p>
                </div>
              </div>
              <button
                onClick={(e) => handleAddtocardClick(e, item)}
                className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-2xl flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" /> Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Details;
