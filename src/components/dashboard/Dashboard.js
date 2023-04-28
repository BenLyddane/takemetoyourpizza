import React from "react";
import { Route } from "react-router-dom";
import "./dashboard.css";
import PizzaSidebar from "./PizzaSidebar/PizzaSidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import UpdateProfile from "../updateprofile/UpdateProfile";
import BenPizza from "./IMG_4184.jpg";
export default function Dashboard() {
  return (
    <>
      <ProSidebarProvider backgroundColor="#FFA600">
        <PizzaSidebar />
      </ProSidebarProvider>
      <img
        className="border-4 border-black rounded-lg relative ml-[270px] p-10"
        height="500"
        width="500"
        src={BenPizza}
        alt="Picture of ben eating pizza"
      />
      <h2 className="ml-[270px]">This is pizza.</h2>
    </>
  );
}
