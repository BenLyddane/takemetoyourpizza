import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import PizzaSidebar from "../dashboard/PizzaSidebar/PizzaSidebar";
import { useAuth } from "../../context/AuthContext";

const MyProfile = () => {
  const { currentUser } = useAuth();
  return (
    <ProSidebarProvider backgroundColor="#FFA600">
      <PizzaSidebar />
      <div className="relative ml-72">My Profile Info 
      <div className="relative">User Email: {currentUser.email} </div>
      <div className="relative">Display Name: {currentUser.displayName} </div>
      </div>
    </ProSidebarProvider>
  );
};

export default MyProfile;
