import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SignUp from "./signup/Signup";
import Navbar from "./navbar/Navbar";
import Login from "./login/Login";
import Home from "./home/home";
import ForgotPassword from "./forgotpassword/ForgotPassword";

const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
