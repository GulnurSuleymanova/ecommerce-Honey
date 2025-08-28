import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import {
  useEditProductMutation,
  useGetAllProductQuery,
  
} from "../../../store/shopApi";

const EditProduct = ({ setOpen, id }) => {
  const { data: product, isLoading: productLoading } = useGetAllProductQuery();
  const [editProduct, { isLoading: submitting }] = useEditProductMutation();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: product?.title || "",
      slug: product?.slug || "",
      content: product?.content || "",
      thumbnail: product?.thumbnail || "",
      categoryId: product?.categoryId?.toString() || "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Başlıq tələb olunur"),
      slug: Yup.string()
        .matches(/^[a-z0-9-]+$/, "Slug yalnız kiçik hərf, rəqəm və '-' ola bilər")
        .required("Slug tələb olunur"),
      content: Yup.string().required("Kontent tələb olunur"),
      thumbnail: Yup.string()
        .url("Düzgün URL daxil edin")
        .required("Thumbnail tələb olunur"),
      categoryId: Yup.string().required("Kateqoriya seçilməlidir"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await editProduct({ id, params: values }).unwrap();
        toast.success("Xəbər uğurla yeniləndi");
        setOpen(false);
      } catch (error) {
        toast.error(error?.data?.message || "Xəta baş verdi");
      } finally {
        setSubmitting(false);
      }
    },
  });

  if (productLoading || categoriesLoading) {
    return (
      <div className="p-10 text-center text-purple-500">
        <Loader2 className="w-8 h-8 animate-spin mx-auto" />
        Yüklənir...
      </div>
    );
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-6 bg-white rounded-2xl p-8 shadow-lg max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-semibold text-purple-700 mb-4 text-center">
        Xəbəri Redaktə Et
      </h2>
      <div>
        <label className="block mb-1 font-medium text-purple-600">Başlıq</label>
        <input
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Başlıq əlavə et"
          className={`w-full rounded-lg border px-4 py-2 text-black ${
            formik.touched.title && formik.errors.title
              ? "border-red-400"
              : "border-purple-300"
          }`}
        />
        {formik.touched.title && formik.errors.title && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.title}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium text-purple-600">Slug</label>
        <input
          name="slug"
          value={formik.values.slug}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="slug"
          className={`w-full rounded-lg border px-4 py-2 text-black ${
            formik.touched.slug && formik.errors.slug
              ? "border-red-400"
              : "border-purple-300"
          }`}
        />
        {formik.touched.slug && formik.errors.slug && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.slug}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium text-purple-600">Kontent</label>
        <textarea
          name="content"
          value={formik.values.content}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          rows={4}
          placeholder="Kontent daxil et"
          className={`w-full rounded-lg border px-4 py-2 text-black resize-none ${
            formik.touched.content && formik.errors.content
              ? "border-red-400"
              : "border-purple-300"
          }`}
        />
        {formik.touched.content && formik.errors.content && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.content}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium text-purple-600">Thumbnail URL</label>
        <input
          name="thumbnail"
          value={formik.values.thumbnail}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="https://example.com/image.jpg"
          className={`w-full rounded-lg border px-4 py-2 text-black ${
            formik.touched.thumbnail && formik.errors.thumbnail
              ? "border-red-400"
              : "border-purple-300"
          }`}
        />
        {formik.touched.thumbnail && formik.errors.thumbnail && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.thumbnail}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium text-purple-600">Kateqoriya</label>
        <select
          name="categoryId"
          value={formik.values.categoryId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full rounded-lg border px-4 py-2 text-black ${
            formik.touched.categoryId && formik.errors.categoryId
              ? "border-red-400"
              : "border-purple-300"
          }`}
        >
          <option value="" disabled>
            Kateqoriya seçin
          </option>
          {categories?.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        {formik.touched.categoryId && formik.errors.categoryId && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.categoryId}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-60"
      >
        {submitting ? <Loader2 className="animate-spin mx-auto w-5 h-5" /> : "Yadda saxla"}
      </button>
    </form>
  );
};

export default EditProduct;
