import React, { Fragment, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./dashboard.css";
import PizzaSidebar from "./PizzaSidebar/PizzaSidebar";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to logout");
    }
  }
  return (
    <>
      <Fragment>
        <PizzaSidebar />
      </Fragment>
    </>
  );
}
