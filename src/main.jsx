import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { route } from '../routes/route'
import 'animate.css';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import { ToastContainer } from 'react-toastify';
import { WishlistProvider } from '../src/context/WishlistContext'; 
import { AddtocardProvider } from './context/AddtocardContext';
import "./i18n/i18next";
import ScrollToTop from './components/common/ScrolToTop';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <WishlistProvider> 
      <AddtocardProvider>
        <ToastContainer position="bottom-right" />
        <RouterProvider router={route} />
        <ScrollToTop />  {/* burada əlavə et */}
      </AddtocardProvider>
    </WishlistProvider>
  </Provider>
)
