import React, { useEffect, useState } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import PizzaSidebar from "../dashboard/PizzaSidebar/PizzaSidebar";
import { getDocs, addDoc, collection, query } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const PizzaShops = () => {
  const [pizzaShops, setPizzaShops] = useState([]);
  const pizzaCollectionRef = collection(db, "PizzaShops");
  useEffect(() => {
    const getPizzaShops = async () => {
      const data = await getDocs(pizzaCollectionRef);
      setPizzaShops(
        data.docs.map((pizzaShops) => ({
          ...pizzaShops.data(),
          id: pizzaShops.id,
        }))
      );
    };
    getPizzaShops();
  }, []);

  // const pizzaDocs = await getDocs(pizzaCollection)
  // pizzashops.forEach((shop) => {
  //   console.log(`${shop.avgRating}`);
  // });

  return (
    <ProSidebarProvider backgroundColor="#FFA600">
      <PizzaSidebar />
      <div className="ml-72">
        {pizzaShops.map((pizzaShop) => {
          return (
            <div>
              {""}
              <h1>Pizza Shop Name: {pizzaShop.pizzaShopName}</h1>
            </div>
          );
        })}
      </div>
    </ProSidebarProvider>
  );
};

export default PizzaShops;
