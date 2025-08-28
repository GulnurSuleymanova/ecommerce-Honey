// shopApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Token alma funksiyası
const getToken = () => localStorage.getItem("token");

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api", 
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Category", "Product", "Brand"],
  endpoints: (builder) => ({
    // ===== AUTH =====
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/signin",
        method: "POST",
        body: { email, password },
      }),
    }),
    register: builder.mutation({
      query: ({ name, email, password }) => ({
        url: "/auth/signup",
        method: "POST",
        body: { name, email, password },
      }),
    }),

    // ===== CATEGORY =====
    getCategories: builder.query({
      query: () => "/category",
      providesTags: ["Category"],
    }),
    addCategory: builder.mutation({
      query: ({ name, slug, parentId }) => ({
        url: "/category",
        method: "POST",
        body: { name, slug, parentId: parentId || null },
      }),
      invalidatesTags: ["Category"],
    }),
    editCategory: builder.mutation({
      query: ({ id, name, slug }) => ({
        url: `/category/${id}`,
        method: "POST",
        body: { name, slug },
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),

    // ===== BRAND =====
    getBrands: builder.query({
      query: () => "/brand",
      providesTags: ["Brand"],
    }),

    // ===== PRODUCT =====
    addProduct: builder.mutation({
      query: ({
        name,
        description,
        price,
        stock,
        brandId,
        colors,
        sizes,
        images,
        categoryId,
        slug,
      }) => ({
        url: "/product",
        method: "POST",
        body: { name, description, price, stock, brandId, colors, sizes, images, categoryId, slug },
      }),
      invalidatesTags: ["Product"],
    }),
    uploadImages: builder.mutation({
      query: (formData) => ({
        url: "/upload/image",
        method: "POST",
        body: formData,
      }),
    }),
    getAllProduct: builder.query({
      query: () => "/product/all",
      providesTags: ["Product"],
    }),
    getProductById: builder.query({
      query: (id) => `/product/${id}`,
      providesTags: ["Product"],
    }),
    getProductsByCategoryId: builder.query({
      query: (categoryId) => `/product/category/${categoryId}`,
      providesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

// Export hooks
export const {
  useLoginMutation,
  useRegisterMutation,
  useGetCategoriesQuery,
  useAddCategoryMutation,
  useEditCategoryMutation,
  useDeleteCategoryMutation,
  useGetBrandsQuery,
  useAddProductMutation,
  useUploadImagesMutation,
  useGetAllProductQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryIdQuery,
  useDeleteProductMutation,
} = shopApi;
