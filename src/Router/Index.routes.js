import React, { useEffect } from "react";
import { MainRouter } from "./App";
import { useStateContext } from "./../contexts/ContextProvider";
import { Login } from "./../pages/Login";

export const IndexRoutes = () => {
  const { user } = useStateContext();
  return Object.keys(user).length  ? <MainRouter /> : <Login />;

};
