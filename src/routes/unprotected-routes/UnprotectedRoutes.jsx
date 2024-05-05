import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export function UnProtectedRoutes() {
  // logic for user logged in or not
  let userLoggedIn = true;

  return userLoggedIn ? <Navigate to={"/"} /> : <Outlet />;
}
