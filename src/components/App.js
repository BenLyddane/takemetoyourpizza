import "./App.css";
import Navbar from "./navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AppRoutes />
        <div className="AppBody">
          <h1 className="PizzaTitle">Pizza.</h1>
        </div>
      </Router>
    </>
  );
}

export default App;
