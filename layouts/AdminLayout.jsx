import { Outlet } from "react-router-dom"
import SiderBar from "../src/components/admin/Siderbar"

const AdminLayout = () => {
    return (
        <div className="flex">
            <div className="flex-1/6">
                <SiderBar />
            </div>
            <div className="flex-5/6">
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout
