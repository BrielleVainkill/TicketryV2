import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

export const PrivateRoute = () => {
  const { loggedIn, isAdmin, checkingStatus } = useAuthStatus();

  console.log("loggedIn:", loggedIn);
  console.log("isAdmin:", isAdmin);
  
  if (checkingStatus) {
    return <Spinner />;
  }

  if (loggedIn) {
    if (isAdmin) {
      // Render the admin home page
      return <Navigate to="/AdminHome" />;
    } else {
      // Render the regular user home page
      return <Outlet />;
    }
  } else {
    // Redirect to the login page if not logged in
    return <Navigate to="/login" />;
  }
};
