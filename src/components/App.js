import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { AuthProvider } from "../context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
