import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="AppBody">
          <h1 className="PizzaTitle">Pizza.</h1>
        </div>
      </Router>
    </>
  );
}

export default App;
