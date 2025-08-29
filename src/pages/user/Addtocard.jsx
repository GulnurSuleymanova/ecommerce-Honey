import React, { useState } from "react";
import { useAddtocard } from "../../context/AddtocardContext";
import bgImage from "../../assets/slide4-1.webp";
import bee from "../../assets/icon-footer.png";
import CheckoutModal from "./CheckoutModal";

const cleanPrice = (price) =>
  typeof price === "number" ? price : +String(price).replace(/[^\d.-]/g, "") || 0;

const toAZN = (value) =>
  new Intl.NumberFormat("az-AZ", {
    style: "currency",
    currency: "AZN",
  }).format(value);

const Addtocard = () => {
  const { addtocard, removeFromAddtocard, updateQuantity } = useAddtocard();
  const [isModalOpen, setIsModalOpen] = useState(false); 

  if (!addtocard.length) {
    return (
      <p className="text-center mt-10 text-lg font-medium tracking-wide">
        Cart is empty
      </p>
    );
  }

  const subtotal = addtocard.reduce(
    (sum, p) => sum + cleanPrice(p.price) * (p.quantity || 1),
    0
  );
  const total = subtotal;

  return (
    <>
      <section
        className="h-[400px] bg-cover bg-center -mt-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="h-full flex justify-center items-center gap-4">
          <h1 className="text-[#3a1e0d] text-3xl font-medium tracking-wide uppercase">
            Cart
          </h1>
          <img src={bee} alt="Bee" className="w-26" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="overflow-x-auto rounded-xl border border-amber-400">
            <table className="w-full text-left">
              <thead className="bg-amber-50 text-sm font-medium tracking-wide text-amber-700 uppercase">
                <tr>
                  <th className="p-4">Product</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Total</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {addtocard.map((p) => {
                  const qty = p.quantity || 1;
                  const price = cleanPrice(p.price);
                  const lineTotal = price * qty;

                  return (
                    <tr
                      key={p.id}
                      className="border-t border-amber-200 hover:bg-amber-50 transition"
                    >
                      <td className="p-4 flex items-center gap-4">
                        <img
                          src={p.images?.[0]?.url}
                          alt={p.name}
                          className="w-16 h-16 object-cover rounded-lg border border-amber-300"
                        />
                        <span className="font-medium tracking-wide">{p.name}</span>
                      </td>
                      <td className="p-4">{toAZN(price)}</td>
                      <td className="p-4">
                        <div className="flex items-center border border-amber-400 rounded-full bg-amber-50 px-2 py-1 w-fit">
                          <button
                            onClick={() => updateQuantity(p.id, qty - 1)}
                            disabled={qty <= 1}
                            className="px-2 font-bold text-lg disabled:opacity-50 text-amber-700"
                          >
                            −
                          </button>
                          <span className="px-3">{qty}</span>
                          <button
                            onClick={() => updateQuantity(p.id, qty + 1)}
                            className="px-2 font-bold text-lg text-amber-700"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="p-4 text-amber-700 font-semibold">{toAZN(lineTotal)}</td>
                      <td className="p-4">
                        <button
                          onClick={() => removeFromAddtocard(p.id)}
                          className="text-red-600 hover:text-red-800 font-bold text-xl px-3"
                          title="Remove from cart"
                        >
                          &times;
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <input
              type="text"
              placeholder="Coupon code"
              className="border border-amber-400 rounded-lg px-4 py-2 flex-1"
            />
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-md">
              Apply coupon
            </button>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl border border-amber-400 p-6 h-fit">
          <h2 className="text-xl font-medium mb-4 text-amber-800">Cart Summary</h2>

          <div className="flex justify-between py-2 border-b border-amber-300 mt-4">
            <span>Subtotal:</span>
            <span className="text-amber-700 font-semibold">{toAZN(total)}</span>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg mt-6 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Modal */}
      <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Addtocard;
