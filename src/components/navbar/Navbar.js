import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <button className="LoginButton">Login</button>
      <button className="SignUpButton">Sign Up</button>
    </div>
  );
};

export default Navbar;
