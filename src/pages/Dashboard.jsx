import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router";
import Page from "./Page";
import Footer from "../component/Footer";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Page />
      <Footer />
    </div>
  );
};

export default Dashboard;
