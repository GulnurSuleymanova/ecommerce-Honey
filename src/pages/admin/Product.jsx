import React, { useState } from "react";
import Modal from "../../components/ui/Modal";
import AddProduct from "../../components/Admin/Product/AddProduct";
import { useGetAllProductQuery, useDeleteProductMutation } from "../../store/shopApi";
import { Trash2 } from "lucide-react";

const Product = () => {
  const [open, setOpen] = useState(false);
  const { data, refetch } = useGetAllProductQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id).unwrap();
        refetch(); // siyahını yenilə
      } catch (error) {
        console.error("Delete failed:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-100 p-6 w-full">
      <div className="max-w-full">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Products
            </h1>
            <button
              onClick={() => setOpen(true)}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-xl hover:from-amber-500 hover:to-orange-500 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <span className="font-medium">Add Product</span>
            </button>
          </div>
        </div>

        <Modal open={open} setOpen={setOpen}>
          <AddProduct setOpen={setOpen} />
        </Modal>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-200 overflow-hidden">
          <div className="grid grid-cols-4 gap-4 p-6 border-b border-amber-100 bg-gradient-to-r from-yellow-100 to-amber-100 font-semibold text-amber-800">
            <div>Image</div>
            <div>Slug</div>
            <div>Price</div>
            <div className="text-center">Actions</div>
          </div>

          {data?.map((item) => (
            <div
              key={item.id || item._id}
              className="grid grid-cols-4 gap-4 p-6 border-b border-amber-100 hover:bg-yellow-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-gradient-to-r from-amber-300 to-orange-300 rounded-xl overflow-hidden shadow-md">
                  <img
                    src={item.images?.[0]?.url}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium text-gray-800">{item.name}</span>
              </div>

              <div className="text-amber-700 flex items-center">
                /{item.slug}
              </div>
              <div className="text-amber-700 flex items-center font-semibold">
                ${item.price}
              </div>

              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleDelete(item.id || item._id)}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition"
                >
    <Trash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
