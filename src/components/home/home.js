import React from "react";
import "./home.css";
import Navbar from "../navbar/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="AppBody">
        <h1 className="PizzaTitle">Pizza.</h1>
      </div>
    </>
  );
};

export default Home;
