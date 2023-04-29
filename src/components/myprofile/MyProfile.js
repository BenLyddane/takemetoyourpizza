import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import PizzaSidebar from "../dashboard/PizzaSidebar/PizzaSidebar";
import { useAuth } from "../../context/AuthContext";
import { Avatar } from "@mui/material";

const MyProfile = () => {
  const { currentUser } = useAuth();

  return (
    <ProSidebarProvider backgroundColor="#FFA600">
      <PizzaSidebar />
      <Avatar className="ml-72" src={currentUser.photoURL} sx={{ width: 150, height: 150 }} />

      <div className="relative ml-72">
        My Profile Info
        <div className="relative">User Email: {currentUser.email} </div>
        <div className="relative">Display Name: {currentUser.displayName} </div>
      </div>
    </ProSidebarProvider>
  );
};

export default MyProfile;
