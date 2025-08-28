import { useEditCategoryMutation } from "../../../store/shopApi"
import { toast } from "react-toastify"
import { Loader2 } from "lucide-react"
import { useFormik } from "formik"
import * as Yup from "yup"

const EditCategory = ({ setOpen, item, refetch }) => {
  const [editCategory, { isLoading }] = useEditCategoryMutation()

  const formik = useFormik({
    initialValues: {
      name: item?.name || '',
      slug: item?.slug || ''
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, 'Name 50 simvoldan uzun ola bilməz')
        .required('Name boş ola bilməz'),
      slug: Yup.string()
        .matches(/^[a-z0-9-]+$/, 'Slug yalnız kiçik hərf, rəqəm və "-" ola bilər')
        .max(50, 'Slug 50 simvoldan uzun ola bilməz')
        .required('Slug boş ola bilməz'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await editCategory({ params: values, id: item.id }).unwrap()
        toast.success("Kateqoriya uğurla redaktə olundu")
        resetForm()
        setOpen(false)
        if (refetch) refetch()
      } catch (error) {
        toast.error(error?.data?.message || "Xəta baş verdi")
      }
    }
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-6 bg-gradient-to-tr from-purple-100 via-pink-100 to-blue-100 p-6 rounded-2xl shadow-xl text-purple-900"
    >
      <h2 className="text-2xl font-bold text-center mb-2">Kateqoriyanı Redaktə Et</h2>

      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1 font-semibold">Kateqoriya Adı</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Texnologiya"
          className="p-3 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white text-gray-800 placeholder-gray-400"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="slug" className="mb-1 font-semibold">Slug</label>
        <input
          type="text"
          name="slug"
          id="slug"
          placeholder="texnologiya"
          className="p-3 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white text-gray-800 placeholder-gray-400"
          value={formik.values.slug}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.slug && formik.errors.slug && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.slug}</p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-600 transition-all disabled:opacity-50"
        >
          {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
          {isLoading ? "Yüklənir..." : "Yadda saxla"}
        </button>
      </div>
    </form>
  )
}

export default EditCategory
