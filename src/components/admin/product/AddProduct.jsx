import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAddProductMutation, useGetCategoriesQuery, useUploadImagesMutation } from "../../../store/shopApi";

const AddProduct = ({ setOpen }) => {
  const colors = [
    "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black", "White",
    "Gray"
  ];

  const sizeArr = [
    "100ml", "200ml", "300ml"
  ];

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [brandId, setBrand] = useState("");
  const [slug, setSlug] = useState("");
  const [sizes, setSizes] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [selectedColor, setSelectedColor] = useState([]);
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  const [uploadImage] = useUploadImagesMutation();
  const { data: category } = useGetCategoriesQuery();
  const [addProduct, { isLoading }] = useAddProductMutation();

  const handleFile = async (e) => {
    const files = Array.from(e.target.files);
    for (const file of files) {
      const formData = new FormData();
      formData.append("image", file);
      try {
        const result = await uploadImage(formData).unwrap();
        if (result?.id) {
          setImages((prev) => [...prev, result.id]);
          setPreviews((prev) => [...prev, URL.createObjectURL(file)]);
        }
        toast.success(result.message || "Image uploaded successfully");
      } catch (error) {
        toast.error("Image upload failed");
      }
    }
  };

  const handleProduct = async () => {
    if (!name || !description || !price || !stock || !brandId || !categoryId || !slug) {
      return toast.error("Zəhmət olmasa bütün sahələri doldurun.");
    }
    try {
      await addProduct({
        name,
        description,
        price: Number(price),
        stock: Number(stock),
        brandId: Number(brandId),
        sizes,
        images,
        categoryId: Number(categoryId),
        slug,
        colors: selectedColor,
      }).unwrap();

      toast.success("Məhsul uğurla əlavə edildi");
      setOpen(false);
    } catch (error) {
      toast.error("Məhsul əlavə edilmədi, xahiş olunur məlumatları yoxlayın.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-h-[600px] overflow-y-auto px-4 py-6 ">
      <h2 className="text-2xl font-semibold  text-center mb-4">Add Product</h2>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200 transition"
          placeholder="Enter product name"
          type="text"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200 transition resize-none"
          placeholder="Enter product description"
        ></textarea>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Price</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200 transition"
            placeholder="Price"
            type="number"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Stock</label>
          <input
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200 transition"
            placeholder="Stock quantity"
            type="number"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Brand ID</label>
        <input
          value={brandId}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200 transition"
          placeholder="Enter brand ID"
          type="number"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Colors</label>
        <select
          multiple
          value={selectedColor}
          onChange={(e) => {
            const selectedCo = Array.from(e.target.selectedOptions).map((item) => item.value);
            setSelectedColor(selectedCo);
          }}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200 transition"
        >
          {colors.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Sizes</label>
        <select
          multiple
          value={sizes}
          onChange={(e) => setSizes([...e.target.selectedOptions].map((opt) => opt.value))}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200 transition"
        >
          {sizeArr.map((item, i) => (
            <option value={item} key={i}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Images</label>
        <input
          type="file"
          multiple
          onChange={handleFile}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200 transition"
        />
        <div className="flex gap-3 mt-4 flex-wrap">
          {previews.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Preview ${i + 1}`}
              className="w-20 h-20 object-cover rounded border"
            />
          ))}
        </div>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Category</label>
        <select
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200 transition"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Select a category</option>
          {category?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Slug</label>
        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200 transition"
          placeholder="Enter slug"
          type="text"
        />
        <p className="text-xs text-gray-500 mt-1">URL-friendly version of the name</p>
      </div>

      <div className="w-full flex justify-end gap-3 pt-4">
        <button
          onClick={() => setOpen(false)}
          className="px-6 py-3 font-semibold text-gray-600 border rounded-lg hover:bg-gray-100 transition"
          disabled={isLoading}
        >
          Cancel
        </button>
        <button
          onClick={handleProduct}
          className="px-6 py-3 font-semibold bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
          disabled={isLoading}
        >
          {isLoading ? "Adding..." : "Add Product"}
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
