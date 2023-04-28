import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { AuthProvider } from "../context/AuthContext";
import { ProSidebarProvider } from "react-pro-sidebar";
function App() {
  return (
    <>
      <ProSidebarProvider>
        <AuthProvider>
          <Router>
            <AppRoutes />
          </Router>
        </AuthProvider>
      </ProSidebarProvider>
    </>
  );
}

export default App;
