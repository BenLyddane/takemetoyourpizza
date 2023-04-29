import React from "react";

import "./dashboard.css";
import PizzaSidebar from "./PizzaSidebar/PizzaSidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
export default function Dashboard() {
  return (
    <>
      <ProSidebarProvider backgroundColor="#FFA600">
        <PizzaSidebar />
      </ProSidebarProvider>
      <button className="testbutton">This is the test button 123</button>
    </>
  );
}
