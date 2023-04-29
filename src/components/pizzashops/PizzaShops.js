import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import PizzaSidebar from "../dashboard/PizzaSidebar/PizzaSidebar";
const PizzaShops = () => {
  return (
    <ProSidebarProvider backgroundColor="#FFA600">
      <PizzaSidebar />
      <div className="ml-72">PizzaShops</div>;
    </ProSidebarProvider>
  );
};

export default PizzaShops;
