import React, { Fragment, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./dashboard.css";
import PizzaSidebar from "./PizzaSidebar/PizzaSidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
export default function Dashboard() {


  return (
    <>
      <Fragment>
        <ProSidebarProvider backgroundColor="#FFA600">
            <PizzaSidebar />
        </ProSidebarProvider>
      </Fragment>
    </>
  );
}
