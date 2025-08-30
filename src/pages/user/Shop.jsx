import React, { useState } from "react";
import bgImage from "../../assets/slider4.webp";
import shopslider1 from "../../assets/vegetables-shop.webp";
import shopslider2 from "../../assets/bee-cate-shop.webp";
import shopslider3 from "../../assets/coffee-shop.webp";
import shopslider4 from "../../assets/drinks-shop.webp";
import shopslider5 from "../../assets/Fresh_Fruit-shop.webp";
import shopslider6 from "../../assets/Meats-shop.webp";
import { useGetAllProductQuery, useGetCategoriesQuery } from "../../store/shopApi";
import { Heart, Search, ShoppingCart, SlidersHorizontal, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { toast } from "react-toastify";
import { useAddtocard } from "../../context/AddtocardContext";
import loader from "../../assets/loader.gif";
import ShopFilterBar from "./ShopFilterBar";

const Shop = () => {
  const { toggleWishlist, wishlist } = useWishlist();
  const { toggleAddtocard, addtocard } = useAddtocard();

  const { data: categoryData = [], isLoading: isCategoryLoading } = useGetCategoriesQuery();
  const { data: productData = [], isLoading: isProductLoading } = useGetAllProductQuery();

  const [viewType, setViewType] = useState("grid_3");
  const [sortType, setSortType] = useState("default");

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState({ min: "", max: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const [isFilterOpen, setIsFilterOpen] = useState(false); 

  const navigate = useNavigate();

  const openDetails = (product) => {
    navigate(`/product/${product._id || product.id}`);
  };

  const toggleCategory = (categoryName) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryName)
        ? prevSelected.filter((c) => c !== categoryName)
        : [...prevSelected, categoryName]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes((prevSelected) =>
      prevSelected.includes(size)
        ? prevSelected.filter((s) => s !== size)
        : [...prevSelected, size]
    );
  };

  const toggleColors = (color) => {
    setSelectedColors((prevSelected) =>
      prevSelected.includes(color)
        ? prevSelected.filter((k) => k !== color)
        : [...prevSelected, color]
    );
  };

  const uniqueSizes = [...new Set(productData.flatMap((product) => product.sizes || []))];
  const uniqueColors = [...new Set(productData.flatMap((product) => product.colors || []))];

  const handleWishlistClick = (e, product) => {
    e.stopPropagation();
    const isInWishlist = wishlist.some((item) => item.id === product.id);
    toggleWishlist(product);
    if (!isInWishlist) {
      toast.success(`"${product.name}" added to wishlist`);
    } else {
      toast(`"${product.name}" removed from wishlist`);
    }
  };

  const handleAddtocardClick = (e, product) => {
    e.stopPropagation();
    const isInAddtocard = addtocard.some((item) => item.id === product.id);
    toggleAddtocard(product);
    if (!isInAddtocard) {
      toast.success(`"${product.name}" added to cart`);
    } else {
      toast(`"${product.name}" removed from cart`);
    }
  };

  const filteredProducts = productData.filter(({ category, sizes = [], colors = [], price, name }) => {
    const priceValue = Number(price) || 0;
    const minPrice = selectedPrice.min !== "" ? Number(selectedPrice.min) : null;
    const maxPrice = selectedPrice.max !== "" ? Number(selectedPrice.max) : null;
    const searchValue = searchTerm.trim().toLowerCase();
    const categoryName = typeof category === "string" ? category : category?.name;

    return (
      (selectedCategories.length === 0 || selectedCategories.includes(categoryName)) &&
      (selectedSizes.length === 0 || sizes.some(size => selectedSizes.includes(size))) &&
      (selectedColors.length === 0 || colors.some(color => selectedColors.includes(color))) &&
      (minPrice === null || priceValue >= minPrice) &&
      (maxPrice === null || priceValue <= maxPrice) &&
      (searchValue === "" || (name || "").toLowerCase().includes(searchValue))
    );
  });

  const sortedProducts = [...filteredProducts];
  if (sortType === "name-asc") {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortType === "name-desc") {
    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortType === "price-asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === "price-desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  return (
    <>
      <section
        className="h-[400px] bg-cover bg-center -mt-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="h-full flex justify-center items-center">
          <h1 className="text-[#3a1e0d] text-3xl font-medium tracking-wide uppercase">
            Shop
          </h1>
        </div>
      </section>

      <section className="flex justify-center items-center gap-4 sm:gap-6 py-12 -mt-30 flex-wrap">
        {[shopslider1, shopslider2, shopslider3, shopslider4, shopslider5, shopslider6].map(
          (img, index) => (
            <div
              key={index}
              className="w-20 h-20 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-md hover:scale-105 transition-all"
            >
              <img className="w-full h-full object-cover" src={img} alt={`Shop ${index}`} />
            </div>
          )
        )}
      </section>

      <section className="flex flex-col lg:flex-row px-4 lg:px-20">

        <div className="flex justify-center lg:hidden mb-4 pb-7">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-full shadow-md"
          >
            <SlidersHorizontal className="w-10 h-5 " /> Filters
          </button>
        </div>


        <div
          className={`shop_filters w-full lg:w-1/6 mb-6 lg:mb-0 
            fixed top-0 left-0 h-full bg-white shadow-xl transform transition-transform z-50 
            ${isFilterOpen ? "translate-x-0" : "-translate-x-full"} 
            lg:static lg:translate-x-0 lg:shadow-none lg:bg-transparent lg:block`}
        >
          {/* Mobil bağlama düyməsi */}
          <div className="flex justify-between items-center lg:hidden p-4 border-b">
            <h3 className="font-semibold text-lg">Filters</h3>
            <button onClick={() => setIsFilterOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-4 lg:p-0 overflow-y-auto lg:overflow-visible h-full">
            {/* Search */}
            <div className="mb-6 max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                className="w-full px-4 py-3 pr-12 border border-[#7A3E1C] rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 placeholder-gray-400 font-medium"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5" />
            </div>

            {/* Categories */}
            <div className="mb-6 border-[#7A3E1C] rounded-3xl border-2 p-6 my-10">
              <p className="text-xl font-semibold tracking-wide ">Categories</p>
              <hr className="mt-2 border-[#7A3E1C]" />
              <div className="pt-4 flex flex-col gap-3">
                {isCategoryLoading ? (
                  <p className="text-center"><img src={loader} alt="" /></p>
                ) : (
                  categoryData.map((item, index) => (
                    <label key={index} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        value={item.name}
                        checked={selectedCategories.includes(item.name)}
                        onChange={() => { toggleCategory(item.name); setCurrentPage(1); }}
                        className="accent-orange-600 w-4 h-4"
                      />
                      <span
                        className={`text-sm tracking-wide ${selectedCategories.includes(item.name)
                          ? "text-orange-600 font-medium"
                          : ""
                          }`}
                      >
                        {item.name}
                      </span>
                    </label>
                  ))
                )}
              </div>
            </div>

            {/* Price filter */}
            <div className="mb-6 border-[#7A3E1C] rounded-3xl border-2 p-6 my-10">
              <h5 className="text-xl font-semibold tracking-wide pb-4">Price</h5>
              <div className="relative pt-4">
                <div className="h-2 rounded-full bg-white border border-[#ababab] relative z-10">
                  {/* Min slider */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={selectedPrice.min !== "" ? selectedPrice.min : 0}
                    onChange={(e) => {
                      const newMin = Number(e.target.value);
                      const max = selectedPrice.max !== "" ? Number(selectedPrice.max) : 100;
                      setSelectedPrice(prev => ({
                        ...prev,
                        min: Math.min(newMin, max)
                      }));
                    }}
                    className="absolute w-full h-2 appearance-none pointer-events-auto z-20 bg-transparent"
                  />

                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={selectedPrice.max !== "" ? selectedPrice.max : 100}
                    onChange={(e) => {
                      const newMax = Number(e.target.value);
                      const min = selectedPrice.min !== "" ? Number(selectedPrice.min) : 0;
                      setSelectedPrice(prev => ({
                        ...prev,
                        max: Math.max(newMax, min)
                      }));
                    }}
                    className="absolute w-full h-2 appearance-none pointer-events-auto z-20 bg-transparent"
                  />


                  {/* Slider arası rəng */}
                  <div
                    className="absolute h-2 rounded-full bg-amber-400 border border-amber-400 top-0"
                    style={{
                      left: `${selectedPrice.min !== "" ? selectedPrice.min : 0}%`,
                      right: `${100 - (selectedPrice.max !== "" ? selectedPrice.max : 100)}%`,
                    }}
                  />
                </div>

                <div className="flex justify-between text-xs font-semibold text-gray-600 mt-2">
                  <span>{selectedPrice.min !== "" ? selectedPrice.min : 0} AZN</span>
                  <span>{selectedPrice.max !== "" ? selectedPrice.max : 100} AZN</span>
                </div>
              </div>
            </div>


            {/* Sizes */}
            <div className="mb-6 border-[#7A3E1C] rounded-3xl border-2 p-6 my-10">
              <p className="text-xl font-semibold tracking-wide ">Sizes</p>
              <hr className="mt-2 border-[#7A3E1C]" />
              <div className="pt-4 flex flex-col gap-3">
                {isProductLoading ? (
                  <p className="text-center"><img src={loader} alt="" /></p>
                ) : uniqueSizes.length === 0 ? (
                  <p className="text-gray-500 text-sm">No sizes found.</p>
                ) : (
                  uniqueSizes.map((size, index) => (
                    <label key={index} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        value={size}
                        checked={selectedSizes.includes(size)}
                        onChange={() => { toggleSize(size); setCurrentPage(1); }}
                        className="accent-orange-600 w-4 h-4"
                      />
                      <span className={`text-sm tracking-wide ${selectedSizes.includes(size) ? "text-orange-600 font-medium" : ""}`}>
                        {size}
                      </span>
                    </label>
                  ))
                )}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6 border-[#7A3E1C] rounded-3xl border-2 p-6 my-10">
              <p className="text-xl font-semibold tracking-wide ">Colors</p>
              <hr className="mt-2 border-[#7A3E1C]" />
              <div className="pt-4 flex flex-wrap gap-3">
                {isProductLoading ? (
                  <p className="text-center"><img src={loader} alt="" /></p>
                ) : uniqueColors.length === 0 ? (
                  <p className="text-gray-500 text-sm">No colors found.</p>
                ) : (
                  uniqueColors.map((color, index) => {
                    const isSelected = selectedColors.includes(color);
                    return (
                      <button
                        key={index}
                        type="button"
                        onClick={() => { toggleColors(color); setCurrentPage(1); }}
                        title={color}
                        className={`w-8 h-8 rounded-full border-2 transition ${isSelected ? 'border-amber-500 ring-2 ring-amber-400' : 'border-gray-300'}`}
                        style={{ backgroundColor: color }}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-5/6">
          <div className="hidden lg:block">
            <ShopFilterBar
              viewType={viewType}
              setViewType={setViewType}
              sortBy={sortType}
              setSortBy={setSortType}
              filteredCount={filteredProducts.length}
              totalCount={productData.length}
            />
          </div>

          {isProductLoading ? (
            <p className="text-center"><img src={loader} alt="" /></p>
          ) : (
            <div>
              {filteredProducts.length === 0 ? (
                <p className="text-center text-gray-500 text-lg font-medium py-10">
                  <img className="m-auto" src="https://cdn.dribbble.com/userupload/42405840/file/original-852d6f73c84968175995781dcd056d89.gif" alt="" />                </p>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-7">
                    {currentProducts.map((product, index) => (
                      <div key={product._id || product.id || index} onClick={() => openDetails(product)} className="group rounded-3xl overflow-hidden shadow-lg cursor-pointer border-2 border-transparent border-r-amber-400 border-l-amber-400 hover:border-amber-400 ">
                        <div className="relative aspect-[4/3] overflow-hidden p-4 bg-white">
                          <img src={product.images?.[0]?.url} alt={product.name} className="w-full h-full object-contain" />
                          <div
                            className="absolute top-4 right-4 w-11 h-11 bg-amber-50/95 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
                            onClick={(e) => handleWishlistClick(e, product)}
                          >
                            <Heart className={`w-5 h-5 ${wishlist.some((item) => item.id === product.id) ? "text-red-500 fill-red-500" : "text-amber-700"}`} />
                          </div>
                        </div>
                        <div className="p-4 sm:p-6">
                          <h3 className="font-bold text-lg sm:text-xl mb-2">{product.name}</h3>
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                            <span className="text-2xl font-bold text-amber-600">{product.price} AZN</span>
                            <button
                              className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-600 hover:bg-amber-700 rounded-2xl flex items-center justify-center text-white"
                              onClick={(e) => handleAddtocardClick(e, product)}
                            >
                              <ShoppingCart className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap justify-center items-center gap-2 mt-4 sm:gap-3 sm:mt-6">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        className={`px-3 sm:px-4 py-2 rounded-lg font-medium ${page === currentPage ? "bg-amber-600 text-white" : "bg-gray-200 "}`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                </>
              )}

            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default Shop
