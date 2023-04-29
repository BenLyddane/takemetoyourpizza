import React, { useEffect } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import PizzaSidebar from "../dashboard/PizzaSidebar/PizzaSidebar";
import { getDocs, addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const PizzaShops = () => {
  useEffect(() => {
    let pizzashops = getDocs(collection(db, "PizzaShops"));
    pizzashops.forEach((shop) => {
      console.log(`${shop.avgRating}`);
    });
  }, []);

  return (
    <ProSidebarProvider backgroundColor="#FFA600">
      <PizzaSidebar />
      <div className="ml-72">
        <h1>yo test</h1>
      </div>
    </ProSidebarProvider>
  );
};

export default PizzaShops;
