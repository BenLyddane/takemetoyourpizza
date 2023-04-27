import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./dashboard.css";
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
      <div>
        <h2 className="text-center mb-4">Profile</h2>
        {error && <alert>{error}</alert>}
        <strong>Email: </strong> {currentUser?.email}
        <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
          Update Profile
        </Link>
      </div>

      <div className="w-100 text-center mt-2">
        <button className="LogoutButton" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </>
  );
}
