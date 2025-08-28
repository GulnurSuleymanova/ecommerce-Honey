import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiGrid, FiPackage, FiLogOut, FiUser } from "react-icons/fi";

const SiderBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const isActivePath = (path) => location.pathname === path;

  return (
    <div className="flex flex-col h-screen w-72  shadow-xl border-r border-amber-200">
      <div className="p-6 border-b border-amber-200 bg-white/60 backdrop-blur-sm">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
            <FiUser className=" text-xl" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-amber-800 leading-tight">
              Admin Panel
            </h1>
            <p className="text-sm text-amber-600 font-medium">Gulnur</p>
          </div>
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
      </div>

      <nav className="flex-1 p-5 space-y-3">
        <Link
          to="/admin/category"
          className={`
            group flex items-center p-3 rounded-xl transition-all duration-200 font-medium
            ${isActivePath("/admin/category")
              ? "bg-white shadow-md border border-amber-200 text-amber-900"
              : "text-amber-700 hover:bg-white/70 hover:shadow-sm"
            }
          `}
        >
          <div
            className={`
              w-10 h-10 rounded-lg flex items-center justify-center mr-3 transition-colors
              ${isActivePath("/admin/category")
                ? "bg-gradient-to-br from-amber-400 to-orange-400  shadow-sm"
                : "text-amber-500 group-hover:bg-amber-100"
              }
            `}
          >
            <FiGrid className="text-lg" />
          </div>
          <span className="text-sm tracking-wide">Categories</span>
          {isActivePath("/admin/category") && (
            <div className="ml-auto w-2 h-2 bg-amber-400 rounded-full"></div>
          )}
        </Link>

        <Link
          to="/admin/product"
          className={`
            group flex items-center p-3 rounded-xl transition-all duration-200 font-medium
            ${isActivePath("/admin/product")
              ? "bg-white shadow-md border border-amber-200 text-amber-900"
              : "text-amber-700 hover:bg-white/70 hover:shadow-sm"
            }
          `}
        >
          <div
            className={`
              w-10 h-10 rounded-lg flex items-center justify-center mr-3 transition-colors
              ${isActivePath("/admin/product")
                ? "bg-gradient-to-br from-orange-400 to-amber-400  shadow-sm"
                : "text-orange-500 group-hover:bg-amber-100"
              }
            `}
          >
            <FiPackage className="text-lg" />
          </div>
          <span className="text-sm tracking-wide">Products</span>
          {isActivePath("/admin/product") && (
            <div className="ml-auto w-2 h-2 bg-amber-400 rounded-full"></div>
          )}
        </Link>
      </nav>

      <div className="p-4 border-t border-amber-200 bg-white/40 backdrop-blur-sm">
        <button
          onClick={handleLogout}
          className="
            group flex items-center w-full p-3 rounded-xl 
            text-red-600 hover:bg-red-50 hover:text-red-700 
            transition-all duration-200 border border-transparent 
            hover:border-red-200 hover:shadow-sm
          "
        >
          <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-red-500 group-hover:bg-red-100 transition-colors">
            <FiLogOut className="text-lg" />
          </div>
          <span className="font-medium text-sm tracking-wide">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default SiderBar;
