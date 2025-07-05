import React, { use } from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const RootLayout = () => {
  const { loading } = use(AuthContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <span className="loading loading-spinner text-primary scale-200"></span>
      </div>
    );
  }
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
