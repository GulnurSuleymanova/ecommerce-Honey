import img404 from '../../assets/404-error-page.gif';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound text-center py-10 px-4">
      <img
        src={img404}
        alt="404 Not Found"
        className="mx-auto mb-6 max-w-xs w-full"
      />
      <h4 className="text-2xl font-semibold mb-2">PAGE NOT FOUND</h4>
      <p className="mb-6 text-gray-700">
        We’re sorry — something has gone wrong on our end.
      </p>
      <NavLink
        to="/"
        className="inline-block px-6 py-3 bg-[#5B2800] text-white rounded hover:bg-[#3e1a00] transition"
      >
        BACK TO HOME PAGE
      </NavLink>
    </div>
  );
};

export default NotFound;
