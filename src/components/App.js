import Navbar from "./navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
