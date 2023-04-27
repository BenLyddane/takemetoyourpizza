import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import  SignUp from "./signup/Signup";
import Login from "./login/Login";
import Home from './home/home'

const AppRoutes = () => {
 

  return (
    <div>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path ='Login' element={<Login/>}/>
      </Routes>
    </div>
  );
};

export default AppRoutes;
