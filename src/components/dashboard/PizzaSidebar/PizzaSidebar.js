import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pizzasidebar.css";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { GiPizzaCutter } from "react-icons/gi";
import { Route } from "react-router-dom";
import { CiPizza } from "react-icons/ci";
import { FaStore } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";


const PizzaSidebar = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { currentUser } = useAuth();
  const { logout } = useAuth();

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
    <div>
      <Sidebar
        style={{ height: "100%", position: "absolute" }}
        backgroundColor={"#FFA600"}
        rootStyles={{ color: "#black" }}
      >
        <main>
          <Menu>
            <MenuItem component={<Link to="/" />}>
              <div
                style={{
                  padding: "9px",
                  // textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 14,
                  letterSpacing: "1px",
                }}
              >
                {/* Change to user's full name when available */}
                {currentUser.displayName}
              </div>
            </MenuItem>
          </Menu>
          <Menu>
            <MenuItem component={<Link to="/MyProfile" />} icon={<CiPizza />}>My Profile</MenuItem>
            <MenuItem
              component={<Link to="/UpdateProfile" />}
              icon={<GiPizzaCutter />}
            >
              Update Profile
            </MenuItem>
            <MenuItem component={<Link to="/PizzaShops " />}icon={<FaStore />}>Pizza Shops</MenuItem>
            <MenuItem icon={<BiLogOut />} onClick={handleLogout}>
              Log Out
            </MenuItem>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
};

export default PizzaSidebar;
