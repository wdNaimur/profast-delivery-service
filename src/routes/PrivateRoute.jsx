import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location, "in private route");

  if (loading) {
    return (
      <span
        className="loading loading-spinner loading-xl"
        aria-label="Loading"
      ></span>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  // User is logged in, render children components
  return children;
};

export default PrivateRoute;
