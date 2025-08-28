import { useState } from "react"
import { useAddCategoryMutation } from "../../../store/shopApi"
import { toast } from "react-toastify"
import { Loader2 } from "lucide-react"

const AddCategory = ({ setOpen }) => {
    const [name, setName] = useState('')
    const [slug, setSlug] = useState('')
    const [addCategory, { isLoading }] = useAddCategoryMutation()

    const handleSaveCategory = async () => {
        if (!name || !slug) {
            toast.error('Zehmet olmasa butun fieldleri doldurun')
            return
        }
        try {
            await addCategory({ name, slug }).unwrap()
            toast.success('Category successfully added')
            setName('')
            setSlug('')
            setOpen(false)
        } catch (error) {
            const errMsg = error?.data?.message || error?.error || "Xəta baş verdi";
            toast.error(errMsg)
        }
    }

    return (
        <div className='flex flex-col gap-5'>
            <div>
                <label className=' text-lg'>Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='w-full bg-white text-black rounded-xl p-3 outline-none'
                  placeholder='Add category name...'
                  type="text"
                />
            </div>
            <div>
                <label className=' text-lg'>Slug</label>
                <input
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className='w-full bg-white text-black rounded-xl p-3 outline-none'
                  placeholder='Add category slug...'
                  type="text"
                />
            </div>
            <div className='w-full flex justify-end'>
                <button
                    onClick={handleSaveCategory}
                    className='px-4 py-3 font-semibold rounded bg-gray-800 text-gray-100'
                    disabled={isLoading}
                >
                    {isLoading ? <Loader2 className='h-5 w-5 animate-spin' /> : 'Save'}
                </button>
            </div>
        </div>
    )
}

export default AddCategory
