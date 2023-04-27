import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/Login">
        <button className="LoginButton">Login</button>
      </Link>
      <Link to="/SignUp">
        <button className="SignUpButton">Sign Up</button>
      </Link>
    </div>
  );
};

export default Navbar;
