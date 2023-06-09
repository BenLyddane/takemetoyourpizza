import React, { useEffect, useState } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import PizzaSidebar from "../dashboard/PizzaSidebar/PizzaSidebar";
import { getDocs, addDoc, collection, query } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Avatar } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
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
      <div className="inline-flex flex-wrap ml-72">
        {pizzaShops.map((pizzaShop) => {
          return (
            <>
              <Card
                key={pizzaShop.id}
                className="relative m-5"
                sx={{ maxWidth: 345, minWidth: 200 }}
              >
                <CardMedia
                  component="img"
                  alt="Pizza Shop No Picture"
                  height="140"
                  image={pizzaShop.pizzaShopImageUrl}
                />
                <CardContent>
                  <Typography gutterBottom variant="h7" component="div">
                    Pizza Shop: {pizzaShop.pizzaShopName}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    Description: {pizzaShop.pizzaShopDescription}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    Pizza Shop Added By: {pizzaShop.addedBy}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Link to={`/PizzaShops/${pizzaShop.pizzaShopId}`}>
                    <Button size="small">View {pizzaShop.pizzaShopName}</Button>
                  </Link> */}
                </CardActions>
              </Card>
            </>
          );
        })}
      </div>
    </ProSidebarProvider>
  );
};

export default PizzaShops;
