import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomeLayout() {
  return (
    <div>
      <Navbar />
      <div className="pt-16"> {/* padding for navbar */}
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
