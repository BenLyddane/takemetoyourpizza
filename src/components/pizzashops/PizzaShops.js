import React, { useEffect } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import PizzaSidebar from "../dashboard/PizzaSidebar/PizzaSidebar";
import { getDocs, addDoc, collection, query } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const PizzaShops = () => {
  let pizzaCollection = query(collection(db, "PizzaShops"));

  // const pizzaDocs = await getDocs(pizzaCollection)
  // pizzashops.forEach((shop) => {
  //   console.log(`${shop.avgRating}`);
  // });

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
