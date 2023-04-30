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
import CardHeader from "@mui/material/CardHeader";
const Ratings = () => {
  const [ratings, setRatings] = useState([]);
  const ratingsRef = collection(db, "ratings");
  useEffect(() => {
    const getRatings = async () => {
      const data = await getDocs(ratingsRef);
      setRatings(
        data.docs.map((rating) => ({
          ...rating.data(),
          id: rating.id,
        }))
      );
    };
    getRatings();
  }, []);

  return (
    <ProSidebarProvider backgroundColor="#FFA600">
      <PizzaSidebar />
      <div className="inline-flex flex-wrap ml-72">
        {ratings.map((rating) => {
          return (
            <>
              <Card
                key={rating.id}
                className="relative m-5"
                sx={{ maxWidth: 345, minWidth: 200 , maxHeight: 700}}
              >
                <CardMedia
                  component="img"
                  alt="Rating No Picture"
                  height="140"
                  image={rating.ratingImageUrl}
                />
                <CardHeader title={rating.pizzaShop}></CardHeader>
                <CardContent>
                  <Typography gutterBottom variant="h7" component="div">
                    Overall Rating: {rating.overallRating}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    Cheese Rating: {rating.cheeseRating}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    Sauce Rating: {rating.sauceRating}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    Crust Rating: {rating.crustRating}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    Added By: {rating.addedBy}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                    Date Added: {rating.dateRatingSubmitted.toString()}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Link to={`/ratings/${rating.ratingId}`}>
                    <Button size="small">View {rating.pizzaShopName}</Button>
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

export default Ratings;
