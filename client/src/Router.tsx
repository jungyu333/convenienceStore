import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import LogIn from './Routes/LogIn';
import Profile from './Routes/Profile';
import SignUp from './Routes/SignUp';
import AdminLogIn from './Routes/admin/AdminLogIn';
import UpLoad from './Routes/admin/UpLoad';
import NewProduct from './Routes/admin/NewProduct';
import ProductDetail from './Routes/ProductDetail';
import Cart from './Routes/Cart';
import Private from './Routes/Private';
import Public from './Routes/Public';
import Admin from './Routes/Admin';
import Call from './Routes/Call';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <Public>
            <LogIn />
          </Public>
        }
      />
      <Route
        path="/signup"
        element={
          <Public>
            <SignUp />
          </Public>
        }
      />
      <Route
        path="/profile"
        element={
          <Private>
            <Profile />
          </Private>
        }
      />
      <Route
        path="/cart"
        element={
          <Private>
            <Cart />
          </Private>
        }
      />

      <Route
        path="/admin/upload"
        element={
          <Admin>
            <UpLoad />
          </Admin>
        }
      />
      <Route
        path="/admin/login"
        element={
          <Public>
            <AdminLogIn />
          </Public>
        }
      />
      <Route
        path="/admin/newproduct"
        element={
          <Admin>
            <NewProduct />
          </Admin>
        }
      />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route
        path="/call"
        element={
          <Private>
            <Call />
          </Private>
        }
      />
    </Routes>
  );
}

export default Router;
