import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./signup/Signup";
import Navbar from "./navbar/Navbar";
import Login from "./login/Login";
import Home from "./home/home";
import ForgotPassword from "./forgotpassword/ForgotPassword";
import Dashboard from "./dashboard/Dashboard";
import { useAuth } from "../context/AuthContext";
import UpdateProfile from "./updateprofile/UpdateProfile";
import PizzaShops from "./pizzashops/PizzaShops";
import MyProfile from "./myprofile/MyProfile";
import AddPizzaShop from "./dashboard/AddPizzaShop/AddPizzaShop";
import SinglePizzaShop from "./singlePizzaShop/SinglePizzaShop";
import AddRating from "./dashboard/addrating/AddRating";
import Ratings from "./ratings/Ratings";
const AppRoutes = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <Routes>
        {currentUser ? (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/UpdateProfile" element={<UpdateProfile />} />
            <Route path="/PizzaShops" element={<PizzaShops />} />
            <Route path="/AddRating" element={<AddRating />} />
            <Route path="/Ratings" element={<Ratings />} />
            <Route
              path="/PizzaShops/:pizzaShopId"
              element={<SinglePizzaShop />}
            />
            <Route path="/AddPizzaShop" element={<AddPizzaShop />} />
            <Route path="/MyProfile" element={<MyProfile />} />
          </>
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
