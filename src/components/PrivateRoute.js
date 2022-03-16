import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import "./Global.css";

const PrivateRoute = () => {
  const location = useLocation();
  const user = localStorage.getItem("token");

  return !user ? (
    <Navigate to="/login" replace state={{ from: location }} />
  ) : (
    <Outlet />
  );
};

export default PrivateRoute;
