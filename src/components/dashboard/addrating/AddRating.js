import React, { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { ProSidebarProvider } from "react-pro-sidebar";
import PizzaSidebar from "../PizzaSidebar/PizzaSidebar";
import { RadioGroup } from "@mui/material";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Card from "@mui/material/Card";
import uuid from "react-uuid";
import { useAuth } from "../../../context/AuthContext";
import { getDocs, addDoc, collection, query } from "firebase/firestore";
import { db, storage } from "../../../firebaseConfig";
import CardHeader from "@mui/material/CardHeader";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
let meatToppings = [
  "Ham",
  "Beef",
  "Salami",
  "Pepperoni",
  "Sausage",
  "Chicken",
  "Bacon",
];
let veggieToppings = [
  "Jalapeno",
  "Onions",
  "Banana Peppers",
  "Tomatoes",
  "Black Olives",
  "Mushrooms",
  "Pineapple",
  "Extra Cheese",
  "Green Peppers",
  "Spinach",
  "Red Peppers",
];
let pizzaStyle = [
  "New York",
  "Neopolitan",
  "Detroit Square",
  "Deep Dish",
  "Flat-Bread",
  "Grandma Slice",
];

const AddRating = () => {
  const [overallRating, setOverallRating] = useState(5);
  const [cheeseRating, setCheeseRating] = useState(5);
  const [sauceRating, setSauceRating] = useState(5);
  const [crustRating, setCrustRating] = useState(5);
  const [meatChecked, setMeatChecked] = useState([]);
  const [veggieChecked, setVeggieChecked] = useState([]);
  const [style, setStyle] = useState("");
  const [pizzaShops, setPizzaShops] = useState([]);
  const [error, setError] = useState("");
  const [selectedPizzaShop, setSelectedPizzaShop] = useState("");
  const [ratingImageUrl, setRatingImageUrl] = useState("");
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const pizzaCollectionRef = collection(db, "PizzaShops");
  let toppingsArr = [];
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

  function handleCheeseRating(e) {
    setCheeseRating(e.target.value);
  }
  function handleSauceRating(e) {
    setSauceRating(e.target.value);
  }
  function handleCrustRating(e) {
    setCrustRating(e.target.value);
  }
  function handleOverallRating(e) {
    setOverallRating(e.target.value);
  }

  function handleSelectChange(e) {
    setSelectedPizzaShop(e.target.value);
  }

  function handleStyle(e) {
    setStyle(e.target.value);
  }

  function handleToppingsChecked(e) {
    if (e.target.checked) {
      if (!toppingsArr.includes(e.target.value)) {
        toppingsArr.push(e.target.value);
      } else if (!e.target.checked) {
        if (toppingsArr.includes(e.target.value)) {
          const index = toppingsArr.findIndex(e.target.value);
          toppingsArr.splice(index, 1);
        }
      }
    }
  }

  const handleImageChange = (e) => {
    const metadata = {
      contentType: "image/",
    };
    const ratingImageReference = ref(
      storage,
      `ratingimages/${selectedPizzaShop}-rating-${currentUser.uid}`
    );

    if (e.currentTarget.files[0]) {
      uploadBytes(ratingImageReference, e.currentTarget.files[0], metadata)
        .then(() => {
          getDownloadURL(ratingImageReference)
            .then((downloadUrl) => {
              setRatingImageUrl(downloadUrl);
            })
            .catch((error) => {
              setError(error);
            });
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  async function handleAddNewRating() {
    const newRatingId = uuid();

    try {
      await addDoc(collection(db, "ratings"), {
        cheeseRating: Number(cheeseRating),
        sauceRating: Number(sauceRating),
        crustRating: Number(crustRating),
        overallRating: Number(overallRating),
        ratingImageUrl: ratingImageUrl,
        pizzaShop: selectedPizzaShop,
        // toppings: [meatChecked, veggieChecked],
        style: style,
        ratingId: newRatingId,
        ratingUser: currentUser.uid,
        addedBy: currentUser.displayName,
        dateRatingSubmitted: new Date().toDateString(),
      });
      navigate("/ratings");
    } catch (err) {
      setError(err);
    }
  }

  return (
    <>
      <ProSidebarProvider>
        <PizzaSidebar />
      </ProSidebarProvider>
      {error && <Alert severity="error">{error}</Alert>}
      <div className="flex flex-wrap ml-72  p-5">
        <div className="bg-pizza-yellow">
          <FormControl sx={{ m: 1, minWidth: 345 }}>
            <InputLabel id="">Select Pizza Shop</InputLabel>
            <Select
              autoWidth
              defaultValue={""}
              label="Selected pizza shop"
              onChange={handleSelectChange}
            >
              <MenuItem disabled value="">
                <em>Need to select shop</em>
              </MenuItem>
              {pizzaShops.map((pizzaShop) => {
                return (
                  <MenuItem key={uuid()} value={pizzaShop.pizzaShopName}>
                    <p>{pizzaShop.pizzaShopName}</p>
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>
      <Card
        className="absolute ml-72 m-3 p-8 align-middle flex flex-wrap justify-items-center"
        sx={{ maxWidth: 600, minWidth: 200 }}
      >
        <CardHeader
          title="Add New Rating"
          subheader="select pizza shop above"
        ></CardHeader>
        <Box
          sx={{ width: 300 }}
          className="inline-flex flex-wrap justify-items-center justify-center"
        >
          <Slider
            aria-label="Cheese Rating"
            defaultValue={5}
            valueLabelDisplay="auto"
            onChange={handleOverallRating}
            step={0.1}
            marks={true}
            min={0}
            max={10}
          />
          <label>Sauce Rating</label>
          <Slider
            aria-label="Cheese Rating"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={0.1}
            onChange={handleSauceRating}
            marks={true}
            min={0}
            max={10}
          />
          <label>Cheese Rating</label>
          <Slider
            aria-label="Cheese Rating"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={0.1}
            onChange={handleCheeseRating}
            marks={true}
            min={0}
            max={10}
          />
          <label>Crust Rating</label>
          <Slider
            aria-label="Cheese Rating"
            defaultValue={5}
            valueLabelDisplay="auto"
            onChange={handleCrustRating}
            step={0.1}
            marks={true}
            min={0}
            max={10}
          />
        </Box>
        {/* <div
          id="options"
          className="inline-flex flex-wrap border-2 rounded border-pizza-yellow p-3"
        >
          <FormGroup label="Meat " className="">
            <FormLabel>Meat</FormLabel>
            {meatToppings.map((meat) => {
              return (
                <FormControlLabel
                  key={uuid()}
                  control={<Checkbox />}
                  label={`${meat}`}
                  onChange={handleToppingsChecked}
                />
              );
            })}
          </FormGroup>
          <FormGroup className="">
            <FormLabel>Veggie</FormLabel>
            {veggieToppings.map((veggie) => {
              return (
                <FormControlLabel
                  key={uuid()}
                  control={<Checkbox />}
                  label={`${veggie}`}
                  onChange={handleToppingsChecked}
                />
              );
            })}
          </FormGroup>
        </div> */}
        {/* <FormControl>
          <FormLabel>Style</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {pizzaStyle.map((pizza) => {
              return (
                <FormControlLabel
                  value={`${pizza}`}
                  control={<Radio />}
                  label={`${pizza}`}
                  key={uuid()}
                  onChange={handleStyle}
                />
              );
            })}
          </RadioGroup>
        </FormControl> */}
        <h2 className="m-2">Add picture of your rated pizza: </h2>
        <input
          type="file"
          accept="image/*"
          className="m-2"
          multiple={false}
          onChange={handleImageChange}
        />
        <button
          type="submit"
          className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 createAccountButton"
          onClick={handleAddNewRating}
        >
          Submit New Pizza Rating
        </button>
      </Card>
    </>
  );
};

export default AddRating;
