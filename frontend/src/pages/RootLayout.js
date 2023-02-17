import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/navBar/MainNavigation";

const RootLayout = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <Outlet />
    </React.Fragment>
  );
};

export default RootLayout;
