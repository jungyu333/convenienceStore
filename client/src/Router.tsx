import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import LogIn from './Routes/LogIn';
import Profile from './Routes/Profile';
import SignUp from './Routes/SignUp';
import AdminLogIn from './Routes/admin/AdminLogIn';
import UpLoad from './Routes/admin/UpLoad';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin/upload" element={<UpLoad />} />
      <Route path="/admin/login" element={<AdminLogIn />} />
    </Routes>
  );
}

export default Router;
