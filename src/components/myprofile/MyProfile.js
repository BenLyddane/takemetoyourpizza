import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import PizzaSidebar from "../dashboard/PizzaSidebar/PizzaSidebar";
import { useAuth } from "../../context/AuthContext";
import { Avatar } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MyProfile = () => {
  const { currentUser } = useAuth();

  return (
    <ProSidebarProvider backgroundColor="#FFA600">
      <PizzaSidebar />

      <Card className="absolute mt-5 ml-72 p-5" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="Profile Picture"
          height="140"
          image={currentUser.photoURL}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            Username: {currentUser.displayName}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            Email: {currentUser.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Temp</Button>
        </CardActions>
      </Card>

  
    </ProSidebarProvider>
  );
};

export default MyProfile;
