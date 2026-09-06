import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../component/Navbar";

const Main = () => {
  return (
    <div>
        <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
