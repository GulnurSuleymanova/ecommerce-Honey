import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../src/pages/user/Home";
import WhyChooseUs from "../src/components/Home/WhyChoossUs";
import PBenefit from "../src/components/Home/PBenefit";
import Featured from "../src/components/Home/Featured";
import Testimonials from "../src/components/Home/Testimonials";
import BSocial from "../src/components/Home/BSocial";
import Brend from "../src/components/Home/Brend";
import Shopbutton from "../src/components/Home/Shopbutton";
import About from "../src/pages/user/About";
import Contact from "../src/pages/user/Contact";
import Faq from "../src/pages/user/Faq";
import Login from "../src/pages/admin/Login";
import Auth from "./Auth";
import Product from "../src/pages/admin/Product";
import NotFound from "../src/pages/user/NotFound";
import Category from "../src/pages/admin/Category";
import Shop from "../src/pages/user/Shop";
import Details from "../src/pages/user/Details";
import Wishlist from "../src/pages/user/Wishlist";
import Register from "../src/components/users/Register";
import Loginuser from "../src/components/users/Loginuser";
import Addtocard from "../src/pages/user/Addtocard";

export const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/whychoos" element={<WhyChooseUs />} />
        <Route path="/benefit" element={<PBenefit />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/besocial" element={<BSocial />} />
        <Route path="/brend" element={<Brend />} />
        <Route path="/shopbutton" element={<Shopbutton />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loginuser" element={<Loginuser />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/addtocard" element={<Addtocard />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Details />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <Auth>
            <AdminLayout />
          </Auth>
        }
      >
        <Route path="product" element={<Product />} />
        <Route path="category" element={<Category />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);
