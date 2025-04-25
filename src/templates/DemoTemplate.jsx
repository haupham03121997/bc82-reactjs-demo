import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const DemoTemplate = () => {
  return (
    <>
      <Header />
      <Footer />
      <Outlet />
    </>
  );
};

export default DemoTemplate;
