import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import LogIn from './Routes/LogIn';
import SignUp from './Routes/SignUp';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default Router;
