import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pizzasidebar.css";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
} from "react-pro-sidebar";
import { BiLogOut } from "react-icons/bi";

import { GiPizzaCutter } from "react-icons/gi";

import { CiPizza } from "react-icons/ci";

import { FaStore } from "react-icons/fa";

import { useAuth } from "../../../context/AuthContext";

const PizzaSidebar = () => {
  const { collapseSidebar } = useProSidebar();
  const [collapsed, setCollapsed] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [toggled, setToggled] = useState(false);
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
        collapsed={collapsed}
        toggled={toggled}
        backgroundColor={"#FFA600"}
        rootStyles={{color: "#black"}}
      >
        <main>
          <Menu>
            <MenuItem icon={<CiPizza />}>My Profile</MenuItem>
            <MenuItem icon={<GiPizzaCutter />}>Update Profile</MenuItem>
            <MenuItem icon={<FaStore />}>Pizza Stores</MenuItem>
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
