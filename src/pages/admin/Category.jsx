import { useState } from "react";
import Modal from "../../components/ui/Modal";
import { useDeleteCategoryMutation, useGetCategoriesQuery } from "../../store/shopApi";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Pen, Trash } from "lucide-react";
import EditCategory from "../../components/admin/category/EditCategory";
import AddCategory from "../../components/admin/category/AddCategory";

const Category = () => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(null);

  const { data, refetch } = useGetCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation();

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Delete Category",
        text: "Once deleted, this category cannot be restored!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f59e0b",
        cancelButtonColor: "#ef4444",
        confirmButtonText: "Yes, Delete",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteCategory(id).unwrap();
          refetch();
          Swal.fire("Deleted!", "Category has been removed successfully!", "success");
        }
      });
    } catch (error) {
      toast.error(error?.data?.message || "Error occurred while deleting");
    }
  };

  const handleEdit = (item) => {
    setEdit(item);
    setOpen(true);
  };

  const handleOpenAdd = () => {
    setEdit(null);
    setOpen(true);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-100 min-h-screen font-sans">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent tracking-wide">
          Categories
        </h1>
        <button
          onClick={handleOpenAdd}
          className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-400 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:from-amber-500 hover:to-orange-500 transition-all duration-300"
        >
           Add New Category
        </button>
      </div>

      <Modal open={open} setOpen={setOpen}>
        {edit ? (
          <EditCategory setOpen={setOpen} item={edit} refetch={refetch} />
        ) : (
          <AddCategory setOpen={setOpen} refetch={refetch} />
        )}
      </Modal>

      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 max-w-3xl mx-auto">
        <ul className="space-y-4">
          {data?.map((item, index) => (
            <li
              key={item.id}
              className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-yellow-100 to-amber-100 border border-amber-200 hover:border-amber-300 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-amber-300 text-white font-extrabold text-xl shadow-inner">
                  {index + 1}
                </div>
                <span className="text-amber-800 text-lg font-semibold">
                  {item.name}
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-amber-400 hover:bg-amber-500 p-2 rounded-full text-white shadow-md transition"
                  aria-label="Edit"
                  title="Edit"
                >
                  <Pen className="w-5 h-5" />
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-orange-400 hover:bg-orange-500 p-2 rounded-full text-white shadow-md transition"
                  aria-label="Delete"
                  title="Delete"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
          {!data?.length && (
            <li className="p-6 text-center text-amber-500 italic font-medium">
              No categories found.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Category;
