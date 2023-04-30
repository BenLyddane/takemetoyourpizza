import React from "react";
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
  return (
    <>
      <ProSidebarProvider>
        <PizzaSidebar />
      </ProSidebarProvider>
      <Card   className="absolute ml-72 m-3 p-5"
                sx={{ maxWidth: 500, minWidth: 200 }}>
        <Box sx={{ width: 300 }}>
          <label>Overall Pizza Rating</label>
          <Slider
            aria-label="Cheese Rating"
            defaultValue={5}
            valueLabelDisplay="auto"
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
            marks={true}
            min={0}
            max={10}
          />
          <label>Crust Rating</label>
          <Slider
            aria-label="Cheese Rating"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={0.1}
            marks={true}
            min={0}
            max={10}
          />
        </Box>
        <div id="options" className="inline-flex flex-wrap ">
          <FormGroup label="Meat">
            <FormLabel>Meat</FormLabel>
            {meatToppings.map((meat) => {
              return (
                <FormControlLabel control={<Checkbox />} label={`${meat}`} />
              );
            })}
          </FormGroup>
          <FormGroup>
            <FormLabel>Veggie</FormLabel>
            {veggieToppings.map((veggie) => {
              return (
                <FormControlLabel control={<Checkbox />} label={`${veggie}`} />
              );
            })}
          </FormGroup>
          <FormControl>
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
                  />
                );
              })}
            </RadioGroup>
          </FormControl>

          {/* <FormControl>
            <FormLabel>Style</FormLabel>
            <RadioGroup>
              <FormControlLabel
             
                control={<Radio />}
                label={[pizzaStyle[0]]}
              />
              <FormControlLabel
              
                control={<Radio />}
                label={[pizzaStyle[1]]}
              />
              <FormControlLabel
             
                control={<Radio />}
                label={[pizzaStyle[2]]}
              />
              <FormControlLabel
              
                control={<Radio />}
                label={[pizzaStyle[3]]}
              />
              <FormControlLabel
               
                control={<Radio />}
                label={[pizzaStyle[4]]}
              />
              <FormControlLabel
               
                control={<Radio />}
                label={[pizzaStyle[5]]}
              />
            </RadioGroup>
          </FormControl> */}
        </div>
        </Card>
    </>
  );
};

export default AddRating;
